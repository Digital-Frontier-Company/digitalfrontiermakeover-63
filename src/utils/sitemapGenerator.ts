import { OPTIMIZED_ROUTE_CONFIGS } from './seo-optimized';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SitemapConfig {
  baseUrl: string;
  defaultChangefreq: SitemapEntry['changefreq'];
  defaultPriority: number;
}

const DEFAULT_CONFIG: SitemapConfig = {
  baseUrl: 'https://digitalfrontier.ai',
  defaultChangefreq: 'monthly',
  defaultPriority: 0.5
};

/**
 * Generate sitemap entries from route configurations
 */
export const generateSitemapEntries = (config: Partial<SitemapConfig> = {}): SitemapEntry[] => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const entries: SitemapEntry[] = OPTIMIZED_ROUTE_CONFIGS.map(route => ({
    loc: `${finalConfig.baseUrl}${route.path}`,
    lastmod: now,
    changefreq: route.changeFreq || finalConfig.defaultChangefreq,
    priority: route.priority || finalConfig.defaultPriority
  }));

  // Add dynamic blog post entries
  const blogPosts = [
    { path: '/blog/ai-truth-gap', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blog/ai-citation-crisis', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blog/protecting-from-ai-misinformation', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blog/ai-accountability-future', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blog/mastering-digital-marketing', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/blog/aeo-crypto-marketing', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/blog/digital-marketing-revolution-july-2025', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/blog/ai-revolution-digital-marketing-2025', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/blog/tax-reduction-wealth-building-guide', priority: 0.7, changefreq: 'monthly' as const }
  ];

  blogPosts.forEach(post => {
    entries.push({
      loc: `${finalConfig.baseUrl}${post.path}`,
      lastmod: now,
      changefreq: post.changefreq,
      priority: post.priority
    });
  });

  return entries.sort((a, b) => b.priority - a.priority);
};

/**
 * Generate XML sitemap content
 */
export const generateSitemapXML = (config: Partial<SitemapConfig> = {}): string => {
  const entries = generateSitemapEntries(config);
  
  const xmlEntries = entries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
};

/**
 * Generate sitemap for images (for blog posts and key pages)
 */
export const generateImageSitemap = (config: Partial<SitemapConfig> = {}): string => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const now = new Date().toISOString().split('T')[0];

  const imageEntries = [
    {
      loc: `${finalConfig.baseUrl}/blog/ai-truth-gap`,
      image: `${finalConfig.baseUrl}/lovable-uploads/dfb97795-57a3-4a27-941a-302022ec095e.png`,
      caption: 'AI Neural Network Visualization - The Truth Gap Investigation',
      title: 'AI Information Networks'
    }
    // Add more image entries as needed
  ];

  const xmlEntries = imageEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <image:image>
      <image:loc>${entry.image}</image:loc>
      <image:caption>${entry.caption}</image:caption>
      <image:title>${entry.title}</image:title>
    </image:image>
    <lastmod>${now}</lastmod>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${xmlEntries}
</urlset>`;
};

/**
 * Generate news sitemap for recent blog posts
 */
export const generateNewsSitemap = (config: Partial<SitemapConfig> = {}): string => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  const recentPosts = [
    {
      loc: `${finalConfig.baseUrl}/blog/ai-truth-gap`,
      title: 'The AI Truth Gap: Investigation into AI Reliability & Misinformation',
      publishDate: '2025-09-04',
      keywords: 'AI reliability, AI misinformation, AI fact-checking'
    },
    {
      loc: `${finalConfig.baseUrl}/blog/ai-citation-crisis`,
      title: 'AI Citation Crisis: Why Sources Matter More Than Ever',
      publishDate: '2025-09-05',
      keywords: 'AI citation crisis, AI sources, AI verification'
    },
    {
      loc: `${finalConfig.baseUrl}/blog/protecting-from-ai-misinformation`,
      title: 'Protecting Yourself from AI Misinformation: A Practical Guide',
      publishDate: '2025-09-05',
      keywords: 'AI misinformation protection, AI safety, AI verification'
    },
    {
      loc: `${finalConfig.baseUrl}/blog/ai-accountability-future`,
      title: 'The Future of AI Accountability and Fact-Checking',
      publishDate: '2025-09-05',
      keywords: 'AI accountability, AI regulation, AI governance'
    }
  ];

  const xmlEntries = recentPosts.map(post => `  <url>
    <loc>${post.loc}</loc>
    <news:news>
      <news:publication>
        <news:name>Digital Frontier</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.publishDate}</news:publication_date>
      <news:title>${post.title}</news:title>
      <news:keywords>${post.keywords}</news:keywords>
    </news:news>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlEntries}
</urlset>`;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (config: Partial<SitemapConfig> = {}): string => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${finalConfig.baseUrl}/sitemap.xml
Sitemap: ${finalConfig.baseUrl}/sitemap-images.xml
Sitemap: ${finalConfig.baseUrl}/sitemap-news.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private paths
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow important paths
Allow: /blog/
Allow: /services/
Allow: /contact/`;
};