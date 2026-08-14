import {
  MARKETING_PAGES,
  getMarketingPage,
  type MarketingPage,
} from "@/content/marketingPages";

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
}

/**
 * Public route metadata derived from the canonical marketing registry.
 * Search, breadcrumbs, SEO defaults, the sitemap, and MCP all use this source.
 */
export const ROUTE_CONFIGS: RouteConfig[] = MARKETING_PAGES
  .filter((page) => page.indexable)
  .map(({ path, title, description }) => ({ path, title, description }));

export function getRouteConfig(path: string): MarketingPage | undefined {
  return getMarketingPage(path);
}
