import { z } from "zod";

export const LEAD_FORM_TYPES = [
  "contact",
  "modern-contact",
  "digital-marketing",
  "newsletter",
] as const;

export const leadFormTypeSchema = z.enum(LEAD_FORM_TYPES);

const httpUrlSchema = z
  .string()
  .trim()
  .url("Social link must be a valid URL")
  .max(2_048, "Social link is too long")
  .refine((value) => {
    const protocol = new URL(value).protocol;
    return protocol === "https:" || protocol === "http:";
  }, "Social link must use http or https");

export const leadSubmissionSchema = z
  .object({
    name: z.string().trim().min(2, "Name is too short").max(120, "Name is too long"),
    email: z.string().trim().toLowerCase().email("A valid email is required").max(254),
    form_type: leadFormTypeSchema,
    message: z.string().trim().max(4_000, "Message is too long").optional(),
    socialLink: httpUrlSchema.optional(),
    turnstile_token: z
      .string()
      .trim()
      .min(1, "Human verification is required")
      .max(2_048, "Human verification token is too long"),
    _gotcha: z.string().max(100).optional(),
  })
  .strict();

const leadSubmissionResponseSchema = z.object({
  success: z.literal(true),
  request_id: z.string().uuid(),
});

export type LeadFormType = z.infer<typeof leadFormTypeSchema>;
export type LeadSubmission = z.input<typeof leadSubmissionSchema>;
export type LeadSubmissionPayload = z.output<typeof leadSubmissionSchema>;
export type LeadSubmissionResponse = z.infer<typeof leadSubmissionResponseSchema>;
export type LeadSubmissionTransport = (
  payload: LeadSubmissionPayload,
) => Promise<unknown>;

export class LeadSubmissionError extends Error {
  constructor(message = "The submission service is temporarily unavailable") {
    super(message);
    this.name = "LeadSubmissionError";
  }
}

const invokeSupabaseContactFunction: LeadSubmissionTransport = async (payload) => {
  const { supabase } = await import("@/integrations/supabase/client");
  const { data, error } = await supabase.functions.invoke("send-contact-email", {
    body: payload,
  });

  if (error) {
    throw new LeadSubmissionError();
  }

  return data;
};

export async function submitLead(
  input: LeadSubmission,
  transport: LeadSubmissionTransport = invokeSupabaseContactFunction,
): Promise<LeadSubmissionResponse> {
  const payload = leadSubmissionSchema.parse(input);
  const response = await transport(payload);
  const parsedResponse = leadSubmissionResponseSchema.safeParse(response);

  if (!parsedResponse.success) {
    throw new LeadSubmissionError("The submission service returned an invalid response");
  }

  return parsedResponse.data;
}
