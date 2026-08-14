import { describe, expect, it } from "vitest";

import {
  cn,
  formatDate,
  generateMetaTags,
  generateOrganizationSchema,
} from "./utils";

describe("shared utilities", () => {
  it("merges conflicting Tailwind classes deterministically", () => {
    expect(cn("px-2", "px-4", "text-sm")).toBe("px-4 text-sm");
  });

  it("formats dates for public content", () => {
    expect(formatDate(new Date(2024, 0, 2))).toBe("January 2, 2024");
  });

  it("builds canonical metadata without changing the supplied URL", () => {
    expect(
      generateMetaTags(
        "AI Strategy",
        "Practical AI implementation services.",
        "ai,strategy",
        "https://digitalfrontier.app/services/ai-implementation-consulting",
      ),
    ).toEqual({
      title: "AI Strategy | Digital Frontier",
      description: "Practical AI implementation services.",
      keywords: "ai,strategy",
      canonicalUrl:
        "https://digitalfrontier.app/services/ai-implementation-consulting",
    });
  });

  it("emits an Organization schema with the configured canonical URL", () => {
    const schema = generateOrganizationSchema(
      "Digital Frontier Company",
      "https://digitalfrontier.app",
    );

    expect(schema["@type"]).toBe("Organization");
    expect(schema.url).toBe("https://digitalfrontier.app");
  });
});
