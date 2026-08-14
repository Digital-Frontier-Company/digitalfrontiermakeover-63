import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { LEAD_FORM_TYPES } from "./contact-leads";

const read = (path: string) => readFileSync(path, "utf8");

const PUBLIC_LEAD_FORMS = [
  "src/pages/Contact.tsx",
  "src/pages/ModernContactForm.tsx",
  "src/components/ModernContactForm.tsx",
  "src/pages/ContactForDigitalMarketing.tsx",
  "src/pages/Newsletter.tsx",
  "src/pages/InsightsHub.tsx",
] as const;

describe("public lead-flow security contracts", () => {
  it.each(PUBLIC_LEAD_FORMS)(
    "%s uses the shared endpoint and a resettable Turnstile gate",
    (path) => {
      const source = read(path);

      expect(source).toContain("submitLead(");
      expect(source).toContain("<TurnstileWidget");
      expect(source).toContain("turnstile_token:");
      expect(source).toContain("!turnstileToken");
      expect(source).toContain("resetTurnstile()");
      expect(source).not.toContain("public.lindy.ai");
      expect(source).not.toContain("mode: 'no-cors'");
      expect(source).not.toContain("X-CSRF-Token");
    },
  );

  it("retires browser-only rate limiting and fake CSRF helpers", () => {
    expect(existsSync("src/hooks/useFormSecurity.ts")).toBe(false);
    expect(existsSync("src/utils/security.ts")).toBe(false);
  });

  it("fails closed when Turnstile cannot load or is not configured", () => {
    const source = read("src/components/TurnstileWidget.tsx");

    expect(source).toContain("VITE_TURNSTILE_SITE_KEY");
    expect(source).toContain('const TURNSTILE_ACTION = "contact_submission"');
    expect(source).toContain("onTokenChangeRef.current(null)");
    expect(source).toContain("Human verification is temporarily unavailable");
  });
});

describe("send-contact-email server contracts", () => {
  it("requires dedicated abuse-control secrets and never falls back", () => {
    const source = read("supabase/functions/send-contact-email/index.ts");

    expect(source).toContain("!TURNSTILE_SECRET_KEY");
    expect(source).toContain("!RATE_LIMIT_HMAC_KEY");
    expect(source).toContain("!LEADS_NOTIFICATION_EMAIL");
    expect(source).not.toContain("dcthompson89.com");
    expect(source).not.toContain("RATE_LIMIT_HMAC_KEY\") ?? SERVICE_ROLE_KEY");
    expect(source).not.toContain("if (!TURNSTILE_SECRET_KEY) return true");
  });

  it("keeps client and server form-type allowlists synchronized", () => {
    const source = read("supabase/functions/send-contact-email/index.ts");

    for (const formType of LEAD_FORM_TYPES) {
      expect(source).toContain(`"${formType}"`);
    }

    expect(source).not.toContain('"Main Contact Form"');
    expect(source).not.toContain('"Modern Contact Form"');
    expect(source).not.toContain('"Book a Demand System Call"');
  });

  it("enforces the Turnstile action, hostname, strict fields, and JWT", () => {
    const source = read("supabase/functions/send-contact-email/index.ts");
    const config = read("supabase/config.toml");

    expect(config).toMatch(
      /\[functions\.send-contact-email\]\s+verify_jwt = true/,
    );
    expect(source).toContain(
      '"https://digitalfrontiermakeover-63.lovable.app"',
    );
    expect(source).not.toContain('"https://digitalfrontiermakeover.lovable.app"');
    expect(source).toContain('result?.action === "contact_submission"');
    expect(source).toContain("ALLOWED_HOSTNAMES.has(result.hostname)");
    expect(source).toContain('readString(\n      formData,\n      "turnstile_token"');
    expect(source).not.toContain('"captcha_token"');
    expect(source).not.toContain('"marketingNeeds"');
    expect(source).not.toContain('"Access-Control-Allow-Origin": "*"');
  });
});
