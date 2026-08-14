import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import {
  CONTENT_LAST_MODIFIED,
  INDEXABLE_MARKETING_PAGES,
  MARKETING_REDIRECTS,
  SITE_ORIGIN,
  absoluteMarketingUrl,
  type MarketingPage,
} from "./src/content/marketingPages.ts";

interface MarketingPrerenderOptions {
  buildDir?: string;
}

const escapeHtml = (value: string) => value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const escapeXml = escapeHtml;

function replaceHeadElement(html: string, pattern: RegExp, replacement: string) {
  if (!pattern.test(html)) {
    return html.replace("</head>", `    ${replacement}\n  </head>`);
  }

  return html.replace(pattern, replacement);
}

export function renderStaticRoute(baseHtml: string, page: MarketingPage) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const canonicalUrl = absoluteMarketingUrl(page.path);
  const contactPath = page.path === "/contact" ? "/" : "/contact";
  const contactLabel = page.path === "/contact" ? "Digital Frontier home" : "Contact Digital Frontier";
  const staticShell = `
    <div id="critical-hero" class="hero-section" style="display: block;">
      <main class="hero-content" data-prerendered-route="${escapeHtml(page.path)}">
        <h1>${title}</h1>
        <p>${description}</p>
        <a class="cta-button" href="${contactPath}">${contactLabel}</a>
      </main>
    </div>
    `;
  const noScript = `<noscript>
      <main data-prerendered-route="${escapeHtml(page.path)}">
        <h1>${title}</h1>
        <p>${description}</p>
        <p><a href="${contactPath}">${contactLabel}</a></p>
      </main>
    </noscript>`;
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Digital Frontier",
      url: SITE_ORIGIN,
    },
    dateModified: CONTENT_LAST_MODIFIED,
  }).replace(/</g, "\\u003c");

  let html = baseHtml;
  html = replaceHeadElement(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = replaceHeadElement(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`,
  );
  html = replaceHeadElement(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = replaceHeadElement(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  html = replaceHeadElement(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  html = replaceHeadElement(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  html = html.replace(
    /\s*<div id="critical-hero"[\s\S]*?<\/div>\s*<\/div>\s*(?=<div id="root")/i,
    staticShell,
  );
  html = html.replace(
    /<noscript>\s*<!-- Primary SEO H1 -->[\s\S]*?<\/noscript>/i,
    noScript,
  );
  html = html.replace(
    "</head>",
    `    <script id="marketing-prerender-metadata" type="application/ld+json">${structuredData}</script>\n  </head>`,
  );

  return html;
}

function renderRedirect(targetPath: string) {
  const targetUrl = absoluteMarketingUrl(targetPath);
  const escapedTarget = escapeHtml(targetUrl);
  const scriptTarget = JSON.stringify(targetUrl).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${escapedTarget}" />
    <meta http-equiv="refresh" content="0; url=${escapedTarget}" />
    <title>Redirecting | Digital Frontier</title>
    <script>window.location.replace(${scriptTarget});</script>
  </head>
  <body>
    <p>This page moved to <a href="${escapedTarget}">${escapedTarget}</a>.</p>
  </body>
</html>`;
}

function outputPath(buildDir: string, pathname: string) {
  if (pathname === "/") {
    return path.join(buildDir, "index.html");
  }

  return path.join(buildDir, ...pathname.slice(1).split("/"), "index.html");
}

function writeDocument(buildDir: string, pathname: string, html: string) {
  const destination = outputPath(buildDir, pathname);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html, "utf8");
}

export function renderSitemap() {
  const urls = INDEXABLE_MARKETING_PAGES.map((page) => `  <url>
    <loc>${escapeXml(absoluteMarketingUrl(page.path))}</loc>
    <lastmod>${CONTENT_LAST_MODIFIED}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderLlmsText() {
  const categories = [...new Set(INDEXABLE_MARKETING_PAGES.map((page) => page.category))];
  const sections = categories.map((category) => {
    const links = INDEXABLE_MARKETING_PAGES
      .filter((page) => page.category === category)
      .map((page) => `- [${page.title}](${page.path}): ${page.description}`)
      .join("\n");

    return `## ${category}\n\n${links}`;
  }).join("\n\n");

  return `# Digital Frontier

> Memphis-based AI marketing consultancy helping businesses with AEO, GEO, SEO, AI implementation, and digital growth strategy.

${sections}
`;
}

export function marketingPrerender(options: MarketingPrerenderOptions = {}): Plugin {
  const buildDir = options.buildDir ?? "dist";

  return {
    name: "marketing-prerender",
    apply: "build",
    writeBundle: {
      sequential: true,
      handler() {
        const rootDocument = path.join(buildDir, "index.html");
        const baseHtml = fs.readFileSync(rootDocument, "utf8");

        for (const page of INDEXABLE_MARKETING_PAGES) {
          writeDocument(buildDir, page.path, renderStaticRoute(baseHtml, page));
        }

        for (const redirect of MARKETING_REDIRECTS) {
          writeDocument(buildDir, redirect.from, renderRedirect(redirect.to));
        }

        fs.writeFileSync(path.join(buildDir, "sitemap.xml"), renderSitemap(), "utf8");
        fs.writeFileSync(path.join(buildDir, "llms.txt"), renderLlmsText(), "utf8");

        console.log(
          `Marketing prerender: wrote ${INDEXABLE_MARKETING_PAGES.length} route documents and ${MARKETING_REDIRECTS.length} redirects.`,
        );
      },
    },
  };
}
