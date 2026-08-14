// Hardened read-only Digital Frontier MCP server.
// Write tools were removed because this endpoint is intentionally public.
import { defineMcp } from "npm:@lovable.dev/mcp-js@0.20.1";
import { defineTool } from "npm:@lovable.dev/mcp-js@0.20.1";
import { z } from "npm:zod@^3.25.76";
import { createSupabaseHandler } from "npm:@lovable.dev/mcp-js@0.20.1/stacks/supabase";

const services = [
  { name: "Answer Engine Optimization (AEO)", url: "https://digitalfrontier.app/answer-engine-optimization" },
  { name: "Generative Engine Optimization (GEO)", url: "https://digitalfrontier.app/generative-engine-optimization" },
  { name: "Search Engine Optimization (SEO)", url: "https://digitalfrontier.app/search-engine-optimization" },
  { name: "AI Implementation Consulting", url: "https://digitalfrontier.app/services/ai-implementation-consulting" },
  { name: "Digital Marketing Strategy", url: "https://digitalfrontier.app/services/digital-marketing-strategy" },
  { name: "Ad Funnel Blueprint", url: "https://digitalfrontier.app/ad-funnel-blueprint" },
  { name: "Compounding Demand System", url: "https://digitalfrontier.app/compounding-demand-system" },
  { name: "Local Service Growth", url: "https://digitalfrontier.app/local-service-growth" },
  { name: "Crypto Marketing", url: "https://digitalfrontier.app/crypto-marketing" }
];

const pages = [
  { title: "Home", url: "https://digitalfrontier.app/", description: "AI-native growth systems for local and service businesses in Memphis, TN." },
  { title: "Answer Engine Optimization", url: "https://digitalfrontier.app/answer-engine-optimization", description: "AEO services for AI-driven search." },
  { title: "Generative Engine Optimization", url: "https://digitalfrontier.app/generative-engine-optimization", description: "GEO strategy for LLM-driven search surfaces." },
  { title: "Search Engine Optimization", url: "https://digitalfrontier.app/search-engine-optimization", description: "Technical and content SEO." },
  { title: "SEO vs AEO vs GEO", url: "https://digitalfrontier.app/seo-vs-aeo-vs-geo", description: "How the three disciplines differ and combine." },
  { title: "AI Implementation Consulting", url: "https://digitalfrontier.app/services/ai-implementation-consulting", description: "AI implementation consulting services." },
  { title: "Digital Marketing Strategy", url: "https://digitalfrontier.app/services/digital-marketing-strategy", description: "Digital marketing strategy services." },
  { title: "Ad Funnel Blueprint", url: "https://digitalfrontier.app/ad-funnel-blueprint", description: "AI-powered paid acquisition funnel framework." },
  { title: "Compounding Demand System", url: "https://digitalfrontier.app/compounding-demand-system", description: "Long-term demand generation stack." },
  { title: "GTM Strategy Blueprint", url: "https://digitalfrontier.app/gtm-strategy-blueprint", description: "Go-to-market planning tools and simulators." },
  { title: "Emotional Marketing Playbook", url: "https://digitalfrontier.app/emotional-marketing-playbook", description: "Psychology-driven marketing tactics." },
  { title: "Marketing KPIs", url: "https://digitalfrontier.app/kpis", description: "KPI reference and simulator." },
  { title: "Case Study: Memphis Earth Movers", url: "https://digitalfrontier.app/case-studies/memphis-earth-movers", description: "Local excavation contractor growth case study." },
  { title: "Blog", url: "https://digitalfrontier.app/blog", description: "Articles on AI, marketing, and growth." },
  { title: "Newsletter", url: "https://digitalfrontier.app/newsletter", description: "Market intelligence newsletter." },
  { title: "Pricing", url: "https://digitalfrontier.app/pricing", description: "Service pricing tiers." },
  { title: "Contact", url: "https://digitalfrontier.app/contact", description: "Get in touch." },
  { title: "About", url: "https://digitalfrontier.app/about-us", description: "About Digital Frontier." },
  { title: "FAQ", url: "https://digitalfrontier.app/faq", description: "Frequently asked questions." }
];

const listServices = defineTool({
  name: "list_services",
  title: "List services",
  description: "List the digital marketing and AI services offered by Digital Frontier.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services }
  })
});

const getContactInfo = defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get Digital Frontier's contact information and primary URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "Digital Frontier",
      location: "Memphis, TN",
      website: "https://digitalfrontier.app",
      contact: "https://digitalfrontier.app/contact",
      newsletter: "https://digitalfrontier.app/newsletter",
      pricing: "https://digitalfrontier.app/pricing"
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info
    };
  }
});

const searchContent = defineTool({
  name: "search_content",
  title: "Search site content",
  description: "Search Digital Frontier's site index by keyword and return matching pages.",
  inputSchema: {
    query: z.string().min(1).max(200),
    limit: z.number().int().min(1).max(20).default(5)
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.trim().toLowerCase();
    const results = pages.filter(
      (page) => page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)
    ).slice(0, limit);
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { results, count: results.length }
    };
  }
});

const mcp = defineMcp({
  name: "digital-frontier-mcp",
  title: "Digital Frontier MCP",
  version: "0.2.1",
  instructions: "Read-only tools for exploring Digital Frontier services, site content, and contact information.",
  tools: [listServices, getContactInfo, searchContent]
});

Deno.serve(createSupabaseHandler(mcp, { functionName: "mcp" }));
