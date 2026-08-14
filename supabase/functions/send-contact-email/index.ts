
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const LEADS_NOTIFICATION_EMAIL = Deno.env.get("LEADS_NOTIFICATION_EMAIL") ?? "";
const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY") ?? "";
const RATE_LIMIT_HMAC_KEY = Deno.env.get("RATE_LIMIT_HMAC_KEY") ?? "";

if (
  !SUPABASE_URL ||
  !SERVICE_ROLE_KEY ||
  !RESEND_API_KEY ||
  !LEADS_NOTIFICATION_EMAIL ||
  !TURNSTILE_SECRET_KEY ||
  !RATE_LIMIT_HMAC_KEY
) {
  throw new Error("Required service configuration is missing");
}

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const resend = new Resend(RESEND_API_KEY);

const ALLOWED_ORIGINS = new Set([
  "https://digitalfrontier.app",
  "https://www.digitalfrontier.app",
  "https://digitalfrontiermakeover-63.lovable.app",
]);
const ALLOWED_HOSTNAMES = new Set([
  "digitalfrontier.app",
  "www.digitalfrontier.app",
  "digitalfrontiermakeover-63.lovable.app",
]);
const FORM_LABELS: Record<string, string> = {
  "contact": "Contact",
  "modern-contact": "Modern Contact",
  "digital-marketing": "Digital Marketing",
  "newsletter": "Newsletter",
};
const ALLOWED_FORM_TYPES = new Set(Object.keys(FORM_LABELS));
const ALLOWED_FIELDS = new Set([
  "name",
  "email",
  "form_type",
  "message",
  "socialLink",
  "turnstile_token",
  "_gotcha",
]);
const MAX_BODY_BYTES = 16_384;

class ValidationError extends Error {}
class DependencyError extends Error {}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalizeText = (value: string) =>
  Array.from(value)
    .map((character) => {
      const code = character.charCodeAt(0);
      return code <= 31 || code === 127 ? " " : character;
    })
    .join("")
    .trim();

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store",
    "Vary": "Origin",
  };
}

function jsonResponse(
  origin: string,
  body: Record<string, unknown>,
  status: number,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
      ...extraHeaders,
    },
  });
}

function readString(
  input: Record<string, unknown>,
  key: string,
  maxLength: number,
  required = false,
): string {
  const raw = input[key];
  if (raw === undefined || raw === null || raw === "") {
    if (required) throw new ValidationError(key + " is required");
    return "";
  }
  if (typeof raw !== "string") {
    throw new ValidationError(key + " must be a string");
  }
  const value = normalizeText(raw);
  if (required && !value) throw new ValidationError(key + " is required");
  if (value.length > maxLength) throw new ValidationError(key + " is too long");
  return value;
}

function clientAddress(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    forwarded ??
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function safeReferer(raw: string | null): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (!ALLOWED_ORIGINS.has(url.origin)) return null;
    url.search = "";
    url.hash = "";
    return url.toString().slice(0, 2_048);
  } catch {
    return null;
  }
}

const hmacKeyPromise = crypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(RATE_LIMIT_HMAC_KEY),
  { name: "HMAC", hash: "SHA-256" },
  false,
  ["sign"],
);

async function hmacHex(value: string): Promise<string> {
  const key = await hmacKeyPromise;
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function consumeRateLimit(
  scope: string,
  subject: string,
  windowSeconds: number,
  maxRequests: number,
): Promise<boolean> {
  const keyHash = await hmacHex(scope + ":" + subject);
  const { data, error } = await supabaseAdmin.rpc("consume_contact_rate_limit", {
    p_key_hash: keyHash,
    p_window_seconds: windowSeconds,
    p_max_requests: maxRequests,
  });
  if (error || typeof data !== "boolean") {
    throw new DependencyError("rate_limit_unavailable");
  }
  return data;
}

async function verifyTurnstile(
  token: string,
  remoteip: string,
): Promise<boolean> {
  if (!token) return false;

  try {
    const body = new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY,
      response: token,
      remoteip,
    });
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        signal: AbortSignal.timeout(5_000),
      },
    );
    if (!response.ok) return false;

    const result = await response.json();
    return (
      result?.success === true &&
      result?.action === "contact_submission" &&
      typeof result?.hostname === "string" &&
      ALLOWED_HOSTNAMES.has(result.hostname)
    );
  } catch {
    return false;
  }
}

serve(async (req: Request): Promise<Response> => {
  const requestId = crypto.randomUUID();
  const origin = req.headers.get("origin") ?? "";

  if (!ALLOWED_ORIGINS.has(origin)) {
    return new Response(JSON.stringify({ error: "Origin not allowed" }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "Vary": "Origin",
      },
    });
  }

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(origin),
    });
  }
  if (req.method !== "POST") {
    return jsonResponse(
      origin,
      { error: "Method not allowed" },
      405,
      { "Allow": "POST, OPTIONS" },
    );
  }

  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse(
      origin,
      { error: "Content-Type must be application/json" },
      415,
    );
  }

  const declaredLength = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse(origin, { error: "Request is too large" }, 413);
  }

  try {
    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonResponse(origin, { error: "Request is too large" }, 413);
    }

    const parsed = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new ValidationError("Request body must be an object");
    }
    const formData = parsed as Record<string, unknown>;
    const unknownFields = Object.keys(formData).filter(
      (key) => !ALLOWED_FIELDS.has(key),
    );
    if (unknownFields.length > 0) {
      throw new ValidationError("Request contains unsupported fields");
    }

    const honeypot = readString(formData, "_gotcha", 100);
    if (honeypot) {
      return jsonResponse(origin, { success: true, request_id: requestId }, 200);
    }

    const name = readString(formData, "name", 120, true);
    if (name.length < 2) throw new ValidationError("name is too short");

    const email = readString(formData, "email", 254, true).toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) {
      throw new ValidationError("A valid email is required");
    }

    const formType = readString(formData, "form_type", 100, true);
    if (!ALLOWED_FORM_TYPES.has(formType)) {
      throw new ValidationError("Unsupported form type");
    }

    const message = readString(formData, "message", 4_000);
    const socialLink = readString(formData, "socialLink", 2_048);
    if (socialLink) {
      let socialUrl: URL;
      try {
        socialUrl = new URL(socialLink);
      } catch {
        throw new ValidationError("socialLink must be a valid URL");
      }
      if (socialUrl.protocol !== "https:" && socialUrl.protocol !== "http:") {
        throw new ValidationError("socialLink must use http or https");
      }
    }

    const turnstileToken = readString(
      formData,
      "turnstile_token",
      2_048,
      true,
    );
    const address = clientAddress(req);

    const ipAllowed = await consumeRateLimit("ip", address, 600, 5);
    if (!ipAllowed) {
      return jsonResponse(
        origin,
        { error: "Too many submissions. Please try again later." },
        429,
        { "Retry-After": "600" },
      );
    }

    if (!(await verifyTurnstile(turnstileToken, address))) {
      return jsonResponse(
        origin,
        { error: "Human verification failed" },
        403,
      );
    }

    const [emailAllowed, globalAllowed] = await Promise.all([
      consumeRateLimit("email", email, 3_600, 3),
      consumeRateLimit("global", "contact", 3_600, 100),
    ]);
    if (!emailAllowed || !globalAllowed) {
      return jsonResponse(
        origin,
        { error: "Too many submissions. Please try again later." },
        429,
        { "Retry-After": "3600" },
      );
    }

    const payload: Record<string, string> = {
      name,
      email,
      form_type: formType,
    };
    if (message) payload.message = message;
    if (socialLink) payload.socialLink = socialLink;

    const { error: insertError } = await supabaseAdmin.from("leads").insert({
      name,
      email,
      form_type: formType,
      message: message || null,
      payload,
      source_url: safeReferer(req.headers.get("referer")),
      user_agent: readString(
        { userAgent: req.headers.get("user-agent") ?? "" },
        "userAgent",
        512,
      ) || null,
    });
    if (insertError) {
      console.error("lead_insert_failed", { request_id: requestId });
      return jsonResponse(
        origin,
        { error: "Unable to accept submission", request_id: requestId },
        503,
      );
    }

    const formLabel = FORM_LABELS[formType];
    const html =
      '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">' +
      "<h2>New Lead: " + escapeHtml(formLabel) + "</h2>" +
      '<div style="background:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:16px">' +
      "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>" +
      "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
      (socialLink
        ? "<p><strong>Social Link:</strong> " + escapeHtml(socialLink) + "</p>"
        : "") +
      "</div>" +
      (message
        ? '<div style="background:#f8f9fa;padding:20px;border-radius:8px"><p style="white-space:pre-wrap">' +
          escapeHtml(message) +
          "</p></div>"
        : "") +
      "</div>";

    const emailResult = await resend.emails.send({
      from: "Digital Frontier Leads <leads@digitalfrontier.app>",
      to: [LEADS_NOTIFICATION_EMAIL],
      reply_to: email,
      subject: "New Lead (" + formLabel + ") — " + name,
      html,
    });

    if (emailResult.error) {
      console.error("lead_notification_failed", { request_id: requestId });
      return jsonResponse(
        origin,
        {
          error: "Submission saved, but notification failed",
          request_id: requestId,
        },
        502,
      );
    }

    console.log("lead_submission_completed", { request_id: requestId });
    return jsonResponse(
      origin,
      { success: true, request_id: requestId },
      200,
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return jsonResponse(origin, { error: "Malformed JSON" }, 400);
    }
    if (error instanceof ValidationError) {
      return jsonResponse(origin, { error: error.message }, 400);
    }
    if (error instanceof DependencyError) {
      console.error("lead_dependency_failed", { request_id: requestId });
      return jsonResponse(
        origin,
        { error: "Submission service is temporarily unavailable" },
        503,
      );
    }
    console.error("lead_submission_failed", { request_id: requestId });
    return jsonResponse(
      origin,
      { error: "Unable to process submission", request_id: requestId },
      500,
    );
  }
});
