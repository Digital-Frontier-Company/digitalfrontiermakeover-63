import registry from "../../supabase/functions/_shared/marketing-pages.json" with { type: "json" };

export type MarketingCategory =
  | "Main pages"
  | "Services"
  | "Local services"
  | "Guides and playbooks"
  | "Blog and insights"
  | "Research and topics"
  | "Tools and resources"
  | "Legal"
  | "Utility";

export type ChangeFrequency = "weekly" | "monthly" | "yearly";

export interface MarketingPage {
  path: string;
  component: string;
  title: string;
  description: string;
  category: MarketingCategory;
  indexable: boolean;
  mcp: boolean;
  priority: number;
  changefreq: ChangeFrequency;
}

export interface MarketingRedirect {
  from: string;
  to: string;
}

export const SITE_ORIGIN = registry.siteOrigin;
export const CONTENT_LAST_MODIFIED = registry.lastModified;
export const MARKETING_PAGES = registry.pages as readonly MarketingPage[];
export const MARKETING_REDIRECTS = registry.redirects as readonly MarketingRedirect[];

export const INDEXABLE_MARKETING_PAGES = MARKETING_PAGES.filter(
  (page) => page.indexable,
);

export const MCP_MARKETING_PAGES = MARKETING_PAGES.filter((page) => page.mcp);

export function absoluteMarketingUrl(pathname: string): string {
  return new URL(pathname, SITE_ORIGIN).toString();
}

export function marketingPageId(pathname: string): string {
  return `df:page:${pathname}`;
}

export function getMarketingPage(pathname: string): MarketingPage | undefined {
  return MARKETING_PAGES.find((page) => page.path === pathname);
}
