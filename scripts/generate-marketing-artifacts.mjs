import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(
  projectRoot,
  "supabase/functions/_shared/marketing-pages.json",
);
const registry = JSON.parse(readFileSync(registryPath, "utf8"));
const pages = registry.pages.filter((page) => page.indexable);
const redirects = registry.redirects;

const absoluteUrl = (pathname) => new URL(pathname, registry.siteOrigin).toString();
const escapeXml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const sitemapUrls = pages.map((page) => `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>
    <lastmod>${registry.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${Number(page.priority).toFixed(1)}</priority>
  </url>`).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

const categories = [...new Set(pages.map((page) => page.category))];
const llmsSections = categories.map((category) => {
  const links = pages
    .filter((page) => page.category === category)
    .map((page) => `- [${page.title}](${page.path}): ${page.description}`)
    .join("\n");

  return `## ${category}\n\n${links}`;
}).join("\n\n");

const llms = `# Digital Frontier

> Memphis-based AI marketing consultancy helping businesses with AEO, GEO, SEO, AI implementation, and digital growth strategy.

${llmsSections}
`;

const redirectManifest = [
  "# Generated from supabase/functions/_shared/marketing-pages.json.",
  "# Keep permanent redirects before internal rewrites.",
  ...redirects.map(({ from, to }) => `${from} ${to} 301`),
  "",
  "# Serve each generated route document at its canonical, slashless URL.",
  ...pages
    .filter((page) => page.path !== "/")
    .map((page) => `${page.path} ${page.path}/index.html 200`),
  "",
  "# Let React Router handle non-prerendered application routes.",
  "/* /index.html 200",
  "",
].join("\n");

writeFileSync(path.join(projectRoot, "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(path.join(projectRoot, "public/llms.txt"), llms, "utf8");
writeFileSync(path.join(projectRoot, "public/_redirects"), redirectManifest, "utf8");

console.log(
  `Generated public sitemap.xml, llms.txt, and _redirects from ${pages.length} canonical pages and ${redirects.length} redirects.`,
);
