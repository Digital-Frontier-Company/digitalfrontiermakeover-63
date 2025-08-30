/**
 * SEO Crawler - Discovers and crawls pages for SEO audit
 */

import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

export interface CrawledPage {
  url: string;
  priority: number;
  changeFreq: string;
  lastMod?: string;
}

/**
 * Crawl site using sitemap.xml and internal link discovery
 */
export async function crawlSite(baseUrl: string, maxDepth: number = 3): Promise<CrawledPage[]> {
  const pages: CrawledPage[] = [];
  
  try {
    // First, try to get pages from sitemap.xml
    const sitemapPages = await crawlFromSitemap();
    pages.push(...sitemapPages);
    
    // Add any missing critical pages
    const criticalPages = getCriticalPages();
    for (const criticalPage of criticalPages) {
      if (!pages.find(p => p.url.endsWith(criticalPage.path))) {
        pages.push({
          url: `${baseUrl}${criticalPage.path}`,
          priority: criticalPage.priority,
          changeFreq: criticalPage.changeFreq
        });
      }
    }
    
    console.log(`Discovered ${pages.length} pages from sitemap and critical pages`);
    return pages;
    
  } catch (error) {
    console.warn('Could not read sitemap, using route configs:', error);
    
    // Fallback to route configs if sitemap fails
    return getCriticalPages().map(page => ({
      url: `${baseUrl}${page.path}`,
      priority: page.priority,
      changeFreq: page.changeFreq
    }));
  }
}

/**
 * Parse sitemap.xml to get all pages
 */
async function crawlFromSitemap(): Promise<CrawledPage[]> {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('Sitemap not found');
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const parsed = await parseStringPromise(sitemapContent);
  
  const pages: CrawledPage[] = [];
  
  if (parsed.urlset && parsed.urlset.url) {
    for (const url of parsed.urlset.url) {
      pages.push({
        url: url.loc[0],
        priority: parseFloat(url.priority?.[0] || '0.5'),
        changeFreq: url.changefreq?.[0] || 'monthly',
        lastMod: url.lastmod?.[0]
      });
    }
  }
  
  return pages;
}

/**
 * Get critical pages from route configuration
 */
function getCriticalPages() {
  return [
    { path: '/', priority: 1.0, changeFreq: 'weekly' },
    { path: '/about-us', priority: 0.8, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/answer-engine-optimization-and-digital-marketing-services', priority: 0.8, changeFreq: 'monthly' },
    { path: '/blog', priority: 0.9, changeFreq: 'weekly' },
    { path: '/answer-engine-optimization', priority: 0.8, changeFreq: 'monthly' },
    { path: '/generative-engine-optimization', priority: 0.8, changeFreq: 'monthly' },
    { path: '/search-engine-optimization', priority: 0.7, changeFreq: 'monthly' },
    { path: '/crypto-marketing', priority: 0.7, changeFreq: 'monthly' },
    { path: '/ad-funnel-blueprint', priority: 0.7, changeFreq: 'monthly' },
    { path: '/seo-audit-dashboard', priority: 0.8, changeFreq: 'weekly' }
  ];
}