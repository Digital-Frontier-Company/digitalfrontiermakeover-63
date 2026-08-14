import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  INDEXABLE_MARKETING_PAGES,
  MARKETING_PAGES,
  MARKETING_REDIRECTS,
  SITE_ORIGIN,
  absoluteMarketingUrl,
} from "@/content/marketingPages";
import { renderSitemap, renderStaticRoute } from "../../vite-plugin-marketing-prerender";

const read = (filePath: string) => readFileSync(filePath, "utf8");

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(filePath);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [filePath] : [];
  });
}

describe("canonical marketing registry", () => {
  it("contains unique, safe routes and resolvable redirects", () => {
    const paths = MARKETING_PAGES.map((page) => page.path);
    const redirectSources = MARKETING_REDIRECTS.map((redirect) => redirect.from);
    const knownPaths = new Set(paths);

    expect(new Set(paths).size).toBe(paths.length);
    expect(new Set(redirectSources).size).toBe(redirectSources.length);

    for (const page of MARKETING_PAGES) {
      expect(page.path).toMatch(/^\/(?:$|[a-z0-9][a-z0-9/-]*)$/);
      expect(page.path === "/" || !page.path.endsWith("/")).toBe(true);
      expect(page.path).not.toContain("..");
      expect(page.title.trim()).not.toBe("");
      expect(page.description.length).toBeGreaterThan(30);
      expect(new URL(absoluteMarketingUrl(page.path)).origin).toBe(SITE_ORIGIN);

      if (page.mcp) {
        expect(page.indexable).toBe(true);
      }
    }

    for (const redirect of MARKETING_REDIRECTS) {
      expect(knownPaths.has(redirect.to)).toBe(true);
      expect(knownPaths.has(redirect.from)).toBe(false);
    }
  });

  it("maps every registered page component in the React router", () => {
    const appSource = read("src/App.tsx");

    for (const component of new Set(MARKETING_PAGES.map((page) => page.component))) {
      expect(appSource).toContain(`  ${component},`);
    }

    expect(appSource).toContain("MARKETING_PAGES.map");
    expect(appSource).toContain("MARKETING_REDIRECTS.map");
  });

  it("keeps crawler-facing route inventories exactly in sync", () => {
    const expectedUrls = INDEXABLE_MARKETING_PAGES.map((page) =>
      absoluteMarketingUrl(page.path)
    );
    const sitemapUrls = [...read("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => match[1]);
    const llmsPaths = [...read("public/llms.txt").matchAll(/\]\((\/[^)\s]*)\)/g)]
      .map((match) => match[1]);

    expect(sitemapUrls).toEqual(expectedUrls);
    expect(llmsPaths).toEqual(INDEXABLE_MARKETING_PAGES.map((page) => page.path));
    expect(new Set(sitemapUrls).size).toBe(sitemapUrls.length);
    expect(renderSitemap()).toBe(read("public/sitemap.xml"));
    expect(read("index.html")).toContain('href="/llms.txt"');
    expect(read("index.html")).not.toContain('href="/llm.txt"');
  });

  it("keeps host redirects and clean-URL rewrites in registry order", () => {
    const redirectRules = read("public/_redirects")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"));
    const expectedRedirectRules = MARKETING_REDIRECTS.map(
      ({ from, to }) => `${from} ${to} 301`,
    );
    const expectedRouteRewrites = INDEXABLE_MARKETING_PAGES
      .filter((page) => page.path !== "/")
      .map((page) => `${page.path} ${page.path}/index.html 200`);

    expect(redirectRules).toEqual([
      ...expectedRedirectRules,
      ...expectedRouteRewrites,
      "/* /index.html 200",
    ]);

    const apacheConfig = read("public/.htaccess");
    const apacheRedirectBlock = apacheConfig.match(
      /# BEGIN canonical marketing redirects\n([\s\S]*?) {2}# END canonical marketing redirects/,
    );
    expect(apacheRedirectBlock).not.toBeNull();

    const apacheRedirectRules = apacheRedirectBlock![1]
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    expect(apacheRedirectRules).toEqual(
      MARKETING_REDIRECTS.map(
        ({ from, to }) => `RewriteRule ^${from.slice(1)}/?$ ${to} [R=301,L]`,
      ),
    );
    expect(apacheConfig).toContain("RewriteCond %{REQUEST_FILENAME}/index.html -f");
    expect(apacheConfig).toContain("RewriteRule ^(.+?)/?$ $1/index.html [L]");
  });

  it("does not leave known stale links in active page or component source", () => {
    const activeSource = ["src/pages", "src/components", "src/hooks"]
      .flatMap(sourceFiles)
      .map(read)
      .join("\n");
    const staleLiteralPaths = [
      "/ai-digital-marketing",
      "/ai-implementation-consulting",
      "/complete-aeo-guide",
      "/collierville-seo",
      "/contact-digital-marketing",
      "/content-creation-agent",
      "/predictive-analytics-agent",
      "/digital-frontier-crypto-ai-marketing",
      "/blog/ai-revolution-2025",
      "/blog/digital-marketing-revolution-2025",
      "/blog/marketing-agencies-2025",
    ];

    for (const stalePath of staleLiteralPaths) {
      const escaped = stalePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      expect(activeSource).not.toMatch(new RegExp(`["']${escaped}["']`));
    }
  });
});

describe("route-aware static HTML", () => {
  it("renders route-specific metadata and meaningful HTML before JavaScript", () => {
    const page = INDEXABLE_MARKETING_PAGES.find(
      (candidate) => candidate.path === "/services/ai-implementation-consulting",
    );
    expect(page).toBeDefined();

    const baseHtml = `<!doctype html><html><head>
      <title>Default</title>
      <meta name="description" content="Default" />
      <link rel="canonical" href="https://digitalfrontier.app/" />
      <meta property="og:url" content="https://digitalfrontier.app/" />
      <meta property="og:title" content="Default" />
      <meta property="og:description" content="Default" />
    </head><body>
      <div id="critical-hero"><div>Default</div></div>
      <div id="root"></div>
      <noscript><!-- Primary SEO H1 --><p>Default</p></noscript>
    </body></html>`;
    const output = renderStaticRoute(baseHtml, page!);

    expect(output).toContain(`<title>${page!.title}</title>`);
    expect(output).toContain(`href="${absoluteMarketingUrl(page!.path)}"`);
    expect(output).toContain(`data-prerendered-route="${page!.path}"`);
    expect(output).toContain(`<h1>${page!.title}</h1>`);
    expect(output).toContain(page!.description);
    expect(output).toContain('id="marketing-prerender-metadata"');
    expect(output).not.toContain("<p>Default</p>");
  });
});
