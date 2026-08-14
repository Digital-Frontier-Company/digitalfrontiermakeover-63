import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(path, "utf8");

describe("deployed-function source contracts", () => {
  it("keeps the public MCP server strictly read-only", () => {
    const source = read("supabase/functions/mcp/index.ts");
    const manifest = JSON.parse(read(".lovable/mcp/manifest.json"));

    expect(manifest.auth).toEqual({ type: "none" });
    expect(manifest.mcp.tools.map((tool: { name: string }) => tool.name)).toEqual([
      "list_services",
      "get_contact_info",
      "search_content",
    ]);
    expect(
      manifest.mcp.tools.every(
        (tool: { annotations: { readOnlyHint: boolean } }) =>
          tool.annotations.readOnlyHint,
      ),
    ).toBe(true);

    for (const forbidden of [
      "create_playbook",
      "update_playbook",
      "delete_playbook",
      "SUPABASE_SERVICE_ROLE_KEY",
    ]) {
      expect(source).not.toContain(forbidden);
    }

    expect(source).toContain(
      "https://digitalfrontier.app/services/ai-implementation-consulting",
    );
    expect(source).toContain(
      "https://digitalfrontier.app/services/digital-marketing-strategy",
    );
    expect(source).toContain("https://digitalfrontier.app/contact");
  });

  it("keeps the retired prerender proxy closed", () => {
    const config = read("supabase/config.toml");
    const source = read("supabase/functions/prerender-ssr/index.ts");

    expect(config).toContain(
      "[functions.prerender-ssr]\\nverify_jwt = true",
    );
    expect(source).toContain("legacy prerender proxy has been retired");
    expect(source).not.toContain("PRERENDER_IO_TOKEN");
    expect(source).not.toContain("fetch(");
    expect(source).not.toContain("Access-Control-Allow-Origin");
  });

  it("keeps the contact endpoint authenticated and abuse-resistant", () => {
    const config = read("supabase/config.toml");
    const source = read("supabase/functions/send-contact-email/index.ts");

    expect(config).toMatch(
      /\[functions\.send-contact-email\]\s+verify_jwt = true/,
    );
    expect(source).toContain("ALLOWED_ORIGINS");
    expect(source).toContain("ALLOWED_FIELDS");
    expect(source).toContain("consume_contact_rate_limit");
    expect(source).toContain("RATE_LIMIT_HMAC_KEY");
    expect(source).toContain("AbortSignal.timeout(5_000)");
    expect(source).not.toContain('"Access-Control-Allow-Origin": "*"');
    expect(source).not.toContain("...safePayload");
    expect(source).not.toContain('console.log("Form data:"');
  });
});

describe("Supabase migration history", () => {
  it("contains exactly one file for every production-ledger version", () => {
    const files = readdirSync("supabase/migrations").filter((file) =>
      file.endsWith(".sql"),
    );
    const expectedVersions = [
      "20250714024255",
      "20250714024514",
      "20250922063935",
      "20260511230648",
      "20260603104214",
      "20260717195257",
      "20260814152241",
      "20260814152459",
      "20260814153403",
      "20260814153427",
    ];

    for (const version of expectedVersions) {
      expect(files.filter((file) => file.startsWith(version))).toHaveLength(1);
    }

    expect(files.some((file) => file.startsWith("20250922061536"))).toBe(false);
    expect(new Set(files.map((file) => file.slice(0, 14))).size).toBe(
      files.length,
    );
  });
});
