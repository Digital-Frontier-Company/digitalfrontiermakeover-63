// Public, read-only Digital Frontier MCP server.
// All exposed URLs come from the same registry used by the website and sitemap.
import { defineMcp, defineTool } from "npm:@lovable.dev/mcp-js@0.20.1";
import { createSupabaseHandler } from "npm:@lovable.dev/mcp-js@0.20.1/stacks/supabase";
import { z } from "npm:zod@^3.25.76";
import registry from "../_shared/marketing-pages.json" with { type: "json" };

const SITE_ORIGIN = registry.siteOrigin;
const pages = registry.pages.filter((page) => page.mcp && page.indexable);
const READ_ONLY_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};

const absoluteUrl = (pathname: string) => new URL(pathname, SITE_ORIGIN).toString();
const pageId = (pathname: string) => `df:page:${pathname}`;

function searchPages(query: string, limit: number) {
  const normalizedQuery = query.trim().toLowerCase();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return pages
    .map((page) => {
      const title = page.title.toLowerCase();
      const description = page.description.toLowerCase();
      const path = page.path.toLowerCase();
      let score = 0;

      if (title.includes(normalizedQuery)) score += 8;
      if (description.includes(normalizedQuery)) score += 4;
      if (path.includes(normalizedQuery)) score += 3;

      for (const term of terms) {
        if (title.includes(term)) score += 3;
        if (description.includes(term)) score += 2;
        if (path.includes(term)) score += 1;
      }

      return { page, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title))
    .slice(0, limit)
    .map(({ page }) => page);
}

const search = defineTool({
  name: "search",
  title: "Search Digital Frontier",
  description: "Use this when you need to find relevant Digital Frontier pages by a natural-language query before fetching a page.",
  inputSchema: {
    query: z.string().min(1).max(200),
  },
  annotations: READ_ONLY_ANNOTATIONS,
  handler: ({ query }) => {
    const results = searchPages(query, 10).map((page) => ({
      id: pageId(page.path),
      title: page.title,
      url: absoluteUrl(page.path),
    }));

    return {
      content: [{ type: "text", text: JSON.stringify({ results }) }],
    };
  },
});

const fetchPage = defineTool({
  name: "fetch",
  title: "Fetch a Digital Frontier page",
  description: "Use this when you have a page ID from search and need its canonical URL and readable page summary.",
  inputSchema: {
    id: z.string().min(1).max(300),
  },
  annotations: READ_ONLY_ANNOTATIONS,
  handler: ({ id }) => {
    const page = pages.find((candidate) => pageId(candidate.path) === id);

    if (!page) {
      throw new Error(`Unknown Digital Frontier page ID: ${id}`);
    }

    const document = {
      id: pageId(page.path),
      title: page.title,
      text: `${page.title}\n\n${page.description}`,
      url: absoluteUrl(page.path),
      metadata: {
        category: page.category,
        description: page.description,
        last_modified: registry.lastModified,
      },
    };

    return {
      content: [{ type: "text", text: JSON.stringify(document) }],
    };
  },
});

const listServices = defineTool({
  name: "list_services",
  title: "List Digital Frontier services",
  description: "Use this when you need a concise list of Digital Frontier service and local-service pages.",
  inputSchema: {},
  annotations: READ_ONLY_ANNOTATIONS,
  handler: () => {
    const services = pages
      .filter((page) => page.category === "Services" || page.category === "Local services")
      .map((page) => ({
        name: page.title,
        url: absoluteUrl(page.path),
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});

const getContactInfo = defineTool({
  name: "get_contact_info",
  title: "Get Digital Frontier contact information",
  description: "Use this when you need Digital Frontier's canonical website, contact, newsletter, or pricing URL.",
  inputSchema: {},
  annotations: READ_ONLY_ANNOTATIONS,
  handler: () => {
    const info = {
      company: "Digital Frontier",
      location: "Memphis, TN",
      website: SITE_ORIGIN,
      contact: absoluteUrl("/contact"),
      newsletter: absoluteUrl("/newsletter"),
      pricing: absoluteUrl("/pricing"),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});

const searchContent = defineTool({
  name: "search_content",
  title: "Search site content with a result limit",
  description: "Use this when you need keyword search with an explicit result limit; prefer the standard search tool for ChatGPT discovery.",
  inputSchema: {
    query: z.string().min(1).max(200),
    limit: z.number().int().min(1).max(20).default(5),
  },
  annotations: READ_ONLY_ANNOTATIONS,
  handler: ({ query, limit }) => {
    const results = searchPages(query, limit).map((page) => ({
      id: pageId(page.path),
      title: page.title,
      url: absoluteUrl(page.path),
      description: page.description,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { results, count: results.length },
    };
  },
});

const mcp = defineMcp({
  name: "digital-frontier-mcp",
  title: "Digital Frontier MCP",
  version: "0.3.0",
  instructions: "Read-only tools for discovering and fetching canonical Digital Frontier company, service, and editorial pages.",
  tools: [search, fetchPage, listServices, getContactInfo, searchContent],
});

Deno.serve(createSupabaseHandler(mcp, { functionName: "mcp" }));
