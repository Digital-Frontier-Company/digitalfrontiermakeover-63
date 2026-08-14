import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(path, "utf8");

describe("deployed-function source contracts", () => {
  it("keeps the public MCP server strictly read-only and ChatGPT-compatible", () => {
    const source = read("supabase/functions/mcp/index.ts");
    const manifest = JSON.parse(read(".lovable/mcp/manifest.json"));
    const registry = JSON.parse(
      read("supabase/functions/_shared/marketing-pages.json"),
    );
    const tools = manifest.mcp.tools as Array<{
      name: string;
      annotations: {
        readOnlyHint: boolean;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
      };
      inputSchema: {
        properties: Record<string, unknown>;
        required?: string[];
        additionalProperties: boolean;
      };
    }>;

    expect(manifest.auth).toEqual({ type: "none" });
    expect(manifest.mcp.server.version).toBe("0.3.0");
    expect(tools.map((tool) => tool.name)).toEqual([
      "search",
      "fetch",
      "list_services",
      "get_contact_info",
      "search_content",
    ]);
    expect(
      tools.every(
        (tool) =>
          tool.annotations.readOnlyHint
          && !tool.annotations.destructiveHint
          && tool.annotations.idempotentHint
          && !tool.annotations.openWorldHint,
      ),
    ).toBe(true);

    const search = tools.find((tool) => tool.name === "search");
    const fetch = tools.find((tool) => tool.name === "fetch");
    expect(search?.inputSchema.properties).toEqual({
      query: { type: "string", minLength: 1, maxLength: 200 },
    });
    expect(search?.inputSchema.required).toEqual(["query"]);
    expect(fetch?.inputSchema.properties).toEqual({
      id: { type: "string", minLength: 1, maxLength: 300 },
    });
    expect(fetch?.inputSchema.required).toEqual(["id"]);
    expect(search?.inputSchema.additionalProperties).toBe(false);
    expect(fetch?.inputSchema.additionalProperties).toBe(false);

    for (const forbidden of [
      "create_playbook",
      "update_playbook",
      "delete_playbook",
      "SUPABASE_SERVICE_ROLE_KEY",
      "createClient(",
    ]) {
      expect(source).not.toContain(forbidden);
    }

    expect(source).toContain('name: "search"');
    expect(source).toContain('name: "fetch"');
    expect(source).toContain("JSON.stringify({ results })");
    expect(source).toContain("JSON.stringify(document)");
    expect(source).toContain("content: [{ type: \"text\"");

    const paths = new Set(
      registry.pages.map((page: { path: string }) => page.path),
    );
    for (const requiredPath of [
      "/services/ai-implementation-consulting",
      "/services/digital-marketing-strategy",
      "/contact",
    ]) {
      expect(paths.has(requiredPath)).toBe(true);
    }
    expect(
      registry.pages
        .filter((page: { mcp: boolean }) => page.mcp)
        .every((page: { indexable: boolean }) => page.indexable),
    ).toBe(true);
  });

  it("keeps the retired prerender proxy closed", () => {
    const config = read("supabase/config.toml");
    const source = read("supabase/functions/prerender-ssr/index.ts");

    const prerenderConfig = config.split("[functions.prerender-ssr]")[1];
    expect(prerenderConfig).toBeDefined();
    expect(prerenderConfig.split("[")[0]).toContain("verify_jwt = true");
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
      "20260814155034",
      "20260814185510",
    ];

    for (const version of expectedVersions) {
      expect(files.filter((file) => file.startsWith(version))).toHaveLength(1);
    }

    const serviceRoleGuard = read(
      "supabase/migrations/20260814155034_deny_service_role_playbook_writes.sql",
    );
    expect(serviceRoleGuard).toContain(
      "ON TABLE public.playbooks, public.playbook_categories",
    );
    expect(serviceRoleGuard).toContain("FROM service_role");

    expect(files.some((file) => file.startsWith("20250922061536"))).toBe(false);
    expect(new Set(files.map((file) => file.slice(0, 14))).size).toBe(
      files.length,
    );
  });
});
