import { describe, expect, it, vi } from "vitest";
import {
  LEAD_FORM_TYPES,
  LeadSubmissionError,
  leadSubmissionSchema,
  submitLead,
  type LeadSubmission,
} from "./contact-leads";

const validSubmission: LeadSubmission = {
  name: "  Ada Lovelace  ",
  email: "  ADA@EXAMPLE.COM ",
  form_type: "contact",
  message: "  Please contact me.  ",
  turnstile_token: "test-token",
};

describe("leadSubmissionSchema", () => {
  it.each(LEAD_FORM_TYPES)("accepts the normalized %s form type", (formType) => {
    expect(
      leadSubmissionSchema.parse({ ...validSubmission, form_type: formType }).form_type,
    ).toBe(formType);
  });

  it("normalizes bounded text before transport", () => {
    expect(leadSubmissionSchema.parse(validSubmission)).toEqual({
      ...validSubmission,
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "Please contact me.",
    });
  });

  it.each([
    ["missing Turnstile token", { turnstile_token: "" }],
    ["unsupported form type", { form_type: "admin" }],
    ["non-http social link", { socialLink: "javascript:alert(1)" }],
    ["unknown field", { csrf_token: "not-a-control" }],
    ["oversized message", { message: "x".repeat(4_001) }],
  ])("rejects %s", (_label, override) => {
    expect(() => leadSubmissionSchema.parse({ ...validSubmission, ...override })).toThrow();
  });
});

describe("submitLead", () => {
  it("passes only the validated payload through the injected transport", async () => {
    const requestId = "8f438838-9719-43b6-8457-fb244340fa27";
    const transport = vi.fn().mockResolvedValue({ success: true, request_id: requestId });

    await expect(submitLead(validSubmission, transport)).resolves.toEqual({
      success: true,
      request_id: requestId,
    });
    expect(transport).toHaveBeenCalledOnce();
    expect(transport).toHaveBeenCalledWith({
      ...validSubmission,
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "Please contact me.",
    });
  });

  it("does not call the transport when validation fails", async () => {
    const transport = vi.fn();

    await expect(
      submitLead({ ...validSubmission, turnstile_token: "" }, transport),
    ).rejects.toThrow("Human verification is required");
    expect(transport).not.toHaveBeenCalled();
  });

  it("rejects malformed success responses", async () => {
    const transport = vi.fn().mockResolvedValue({ success: true });

    await expect(submitLead(validSubmission, transport)).rejects.toBeInstanceOf(
      LeadSubmissionError,
    );
  });

  it("propagates a transport failure without retrying the submission", async () => {
    const transport = vi.fn().mockRejectedValue(new LeadSubmissionError());

    await expect(submitLead(validSubmission, transport)).rejects.toBeInstanceOf(
      LeadSubmissionError,
    );
    expect(transport).toHaveBeenCalledOnce();
  });
});
