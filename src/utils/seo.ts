/**
 * SEO Utilities for thedigitalfrontier.ai
 * Handles canonical URLs, sitemap generation, and SEO best practices
 */

export const SITE_CONFIG = {
  baseUrl: 'https://digitalfrontier.app',
  siteName: 'Digital Frontier Company',
  defaultTitle: 'Memphis AI Marketing Agency | Stop Guessing, Start Growing with AI-Powered Marketing | Digital Frontier',
  defaultDescription: 'Leading Memphis AI marketing agency specializing in Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and AI-powered content strategies for B2B companies in Collierville, Germantown, and Greater Memphis area.',
  defaultKeywords: 'AI content marketing, SEO agency, B2B marketing, answer engine optimization, content strategy',
  logoUrl: 'https://thedigitalfrontier.ai/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png',
  socialUrls: [
    'https://www.facebook.com/profile.php?id=61572896248731',
    'https://x.com/DigitalFro14616',
    'https://www.youtube.com/@Digital_FrontierCO',
    'https://www.tiktok.com/@digital_frontier_company',
    'https://www.instagram.com/digital_frontier_company/',
    'https://www.linkedin.com/company/digital-frontier-company'
  ]
} as const;

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  priority: number;
  changeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  pageType?: 'website' | 'article' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Comprehensive route configuration for all pages
 */
export const ROUTE_CONFIGS: RouteConfig[] = [
  {
    path: '/',
    title: 'Memphis AI Marketing Agency | Stop Guessing, Start Growing with AI-Powered Marketing | Digital Frontier',
    description: 'Leading Memphis AI marketing agency specializing in Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and AI-powered content strategies for B2B companies in Collierville, Germantown, and Greater Memphis area.',
    keywords: 'Memphis AI marketing agency, Memphis digital marketing, AI marketing Memphis, Answer Engine Optimization Memphis, AEO services, GEO services, Collierville marketing, Germantown SEO',
    priority: 1.0,
    changeFreq: 'weekly',
    pageType: 'website'
  },
  {
    path: '/about-us',
    title: 'About Us - Digital Frontier Team',
    description: 'Learn about Digital Frontier\'s mission to revolutionize content marketing with AI-powered solutions for B2B tech companies.',
    keywords: 'about digital frontier, AI marketing team, content marketing experts',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/contact',
    title: 'Contact Digital Frontier - Get Your Free Consultation',
    description: 'Ready to scale your content marketing? Contact Digital Frontier for a free consultation on AI-powered content strategies.',
    keywords: 'contact digital frontier, free consultation, content marketing contact',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/pricing',
    title: 'Pricing - Digital Frontier Content Marketing Services',
    description: 'Transparent pricing for AI-powered content marketing services. Choose the plan that fits your B2B tech company\'s growth goals.',
    keywords: 'content marketing pricing, AI marketing costs, B2B marketing packages',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/blog',
    title: 'Blog - Digital Marketing Insights & Strategies',
    description: 'Expert insights on AI-powered content marketing, SEO strategies, and digital marketing trends for B2B tech companies.',
    keywords: 'digital marketing blog, content marketing insights, SEO strategies, AI marketing',
    priority: 0.9,
    changeFreq: 'weekly',
    pageType: 'website'
  },
  {
    path: '/faq',
    title: 'FAQ - Digital Frontier Content Marketing Questions',
    description: 'Frequently asked questions about Digital Frontier\'s AI-powered content marketing services and strategies.',
    keywords: 'content marketing FAQ, AI marketing questions, digital frontier help',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/docs',
    title: 'Documentation - Digital Frontier Service Guides',
    description: 'Comprehensive documentation and guides for Digital Frontier\'s AI-powered content marketing and SEO services.',
    keywords: 'digital frontier documentation, service guides, content marketing help',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/newsletter',
    title: 'Newsletter - Stay Updated on AI Marketing Trends',
    description: 'Subscribe to Digital Frontier\'s newsletter for the latest AI marketing insights, content strategies, and industry trends.',
    keywords: 'marketing newsletter, AI content updates, digital marketing insights',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/site-map',
    title: 'Site Map - Digital Frontier Navigation',
    description: 'Complete site map of Digital Frontier\'s resources, services, and content marketing insights.',
    keywords: 'site map, navigation, digital frontier pages',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/insights',
    title: 'Insights Hub - Marketing Intelligence & Analytics',
    description: 'Access comprehensive marketing insights, analytics, and strategic resources for data-driven content marketing.',
    keywords: 'marketing insights, analytics hub, content intelligence, marketing data',
    priority: 0.8,
    changeFreq: 'weekly',
    pageType: 'website'
  },
  {
    path: '/browse-playbooks',
    title: 'Marketing Playbooks - Proven Content Strategies',
    description: 'Browse our collection of proven marketing playbooks and strategies for B2B content marketing success.',
    keywords: 'marketing playbooks, content strategies, B2B marketing guides',
    priority: 0.8,
    changeFreq: 'weekly',
    pageType: 'website'
  },
  // Service Pages
  {
    path: '/answer-engine-optimization',
    title: 'AI Overviews Optimization | SGE Optimization | Answer Engine Optimization (AEO) Services',
    description: 'Expert AI Overviews optimization and SGE optimization services. Get your Memphis business featured in ChatGPT, Google AI Overviews, and Perplexity AI search results with proven AEO strategies.',
    keywords: 'AI Overviews optimization, SGE optimization, answer engine optimization, AEO, ChatGPT optimization, featured snippets optimization, FAQ schema AI, voice search SEO, people also ask optimization',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'service'
  },
  {
    path: '/generative-engine-optimization',
    title: 'Optimize Content for Generative Search | RAG Content Strategy | GEO Services',
    description: 'Expert strategies to optimize content for generative search engines. Proven RAG content strategy, SGE content briefs, and AI content workflows that get your business cited by AI.',
    keywords: 'optimize content for generative search, RAG content strategy, SGE content briefs, generative engine optimization, GEO, AI content workflows, prompting for AI Overviews',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'service'
  },
  {
    path: '/search-engine-optimization',
    title: 'SEO Services - Search Engine Optimization',
    description: 'Data-driven SEO strategies that drive organic traffic and qualified leads for B2B tech companies.',
    keywords: 'SEO services, search engine optimization, organic traffic, B2B SEO',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service'
  },
  {
    path: '/crypto-marketing',
    title: 'Crypto Marketing Services - Blockchain Content Strategy',
    description: 'Specialized marketing services for cryptocurrency and blockchain companies. Navigate complex regulations with expert content.',
    keywords: 'crypto marketing, blockchain marketing, cryptocurrency content, DeFi marketing',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service'
  },
  {
    path: '/ad-funnel-blueprint',
    title: 'Ad Funnel Blueprint - Conversion-Focused Campaigns',
    description: 'Complete ad funnel strategies that convert. From awareness to conversion, build high-performing marketing funnels.',
    keywords: 'ad funnel, marketing funnel, conversion optimization, performance marketing',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service'
  },
  // Resource Pages
  {
    path: '/content-creation-agent',
    title: 'Content Creation Agent - AI Content Assistant',
    description: 'Advanced AI content creation tool for generating high-quality marketing content, blog posts, and copy.',
    keywords: 'AI content creation, content generator, marketing copy, automated writing',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/ai-prompt-templates',
    title: 'AI Prompt Templates - Content Marketing Prompts',
    description: 'Ready-to-use AI prompt templates for content marketing, copywriting, and creative campaigns.',
    keywords: 'AI prompts, content prompts, marketing templates, AI copywriting',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/information-architecture-prompts',
    title: 'Information Architecture Prompts - UX Content Strategy',
    description: 'AI prompts for creating effective information architecture and user experience content strategies.',
    keywords: 'information architecture, UX prompts, content structure, user experience',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/user-experience-prompts',
    title: 'User Experience Prompts - UX Content Creation',
    description: 'Specialized AI prompts for creating user-centered content and improving user experience design.',
    keywords: 'UX prompts, user experience, content UX, user-centered design',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  // Research/Insight Pages
  {
    path: '/psychological-digital-marketing-insights',
    title: 'Psychological Digital Marketing Insights',
    description: 'Deep insights into consumer psychology and behavioral triggers in digital marketing campaigns.',
    keywords: 'marketing psychology, consumer behavior, digital marketing insights, behavioral marketing',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/ai-bias-in-advertising',
    title: 'AI Bias in Advertising - Ethical Marketing Practices',
    description: 'Understanding and mitigating AI bias in advertising and marketing automation for ethical campaigns.',
    keywords: 'AI bias, ethical marketing, advertising ethics, responsible AI',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/ai-and-digital-marketing',
    title: 'AI and Digital Marketing - Future of Marketing Technology',
    description: 'Comprehensive guide to AI applications in digital marketing, from automation to personalization.',
    keywords: 'AI marketing, digital marketing technology, marketing automation, AI applications',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/recommender-system-generalization',
    title: 'Recommender System Generalization in Marketing',
    description: 'Advanced strategies for implementing recommendation systems in marketing and content personalization.',
    keywords: 'recommender systems, personalization, marketing AI, content recommendations',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/technical',
    title: 'Technical Marketing Resources',
    description: 'Technical resources and documentation for implementing advanced marketing technologies and strategies.',
    keywords: 'technical marketing, marketing technology, implementation guides',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/evolution',
    title: 'Evolution of Digital Marketing',
    description: 'Explore the evolution of digital marketing from traditional methods to AI-powered strategies.',
    keywords: 'marketing evolution, digital marketing history, marketing trends',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/regulations',
    title: 'Marketing Regulations & Compliance',
    description: 'Understanding marketing regulations, compliance requirements, and legal considerations in digital marketing.',
    keywords: 'marketing regulations, compliance, legal marketing, advertising law',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  {
    path: '/sectors',
    title: 'Industry Sectors - Specialized Marketing Strategies',
    description: 'Tailored marketing strategies for different industry sectors and verticals.',
    keywords: 'industry marketing, sector strategies, vertical marketing, niche marketing',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'website'
  },
  {
    path: '/future',
    title: 'Future of Marketing - Emerging Trends & Technologies',
    description: 'Insights into the future of marketing, emerging technologies, and next-generation strategies.',
    keywords: 'future marketing, marketing trends, emerging technologies, next-gen marketing',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'article'
  },
  // Blog Posts
  {
    path: '/blog/mastering-digital-marketing',
    title: 'Mastering Digital Marketing in 2024',
    description: 'Complete guide to mastering digital marketing strategies, tools, and techniques for modern businesses.',
    keywords: 'digital marketing guide, marketing mastery, 2024 marketing strategies',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2024-01-15',
    modifiedDate: '2024-12-24'
  },
  {
    path: '/blog/aeo-crypto-marketing',
    title: 'Answer Engine Optimization for Crypto Marketing',
    description: 'Specialized AEO strategies for cryptocurrency and blockchain marketing campaigns.',
    keywords: 'AEO crypto, cryptocurrency AEO, blockchain marketing, crypto SEO',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2024-12-15',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/blog/tax-reduction-wealth-building-guide',
    title: 'Tax Reduction and Wealth Building Guide',
    description: 'Comprehensive guide to tax reduction strategies and wealth building techniques for business owners and entrepreneurs.',
    keywords: 'tax reduction, wealth building, business taxes, entrepreneur finances',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2024-03-10',
    modifiedDate: '2024-12-24'
  },
  {
    path: '/influencer-marketing-2025',
    title: 'Influencer Marketing 2025 - Future Strategies & Trends',
    description: 'Comprehensive guide to influencer marketing strategies, trends, and best practices for 2025.',
    keywords: 'influencer marketing 2025, social media marketing, influencer trends, creator economy',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2024-11-15',
    modifiedDate: '2025-08-18'
  },
  // Additional Service Pages
  {
    path: '/gtm-strategy-blueprint',
    title: 'GTM Strategy Blueprint - Go-to-Market Planning',
    description: 'Comprehensive go-to-market strategy blueprint for launching products and services effectively.',
    keywords: 'go-to-market strategy, GTM blueprint, product launch, market strategy',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/seo-audit-dashboard',
    title: 'SEO Audit Dashboard - Complete Website Ranking Diagnosis Tool',
    description: 'Comprehensive SEO analysis & optimization recommendations with real-time audit tools.',
    keywords: 'SEO audit, website analysis, SEO tools, ranking diagnosis, SEO dashboard',
    priority: 0.8,
    changeFreq: 'weekly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/kpis',
    title: 'KPI Dashboard - Marketing Performance Metrics',
    description: 'Track and analyze key performance indicators for digital marketing campaigns and strategies.',
    keywords: 'KPI dashboard, marketing metrics, performance tracking, analytics',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/recommender-system',
    title: 'Recommender System - Personalized Marketing Solutions',
    description: 'Advanced recommendation systems for personalized marketing and content delivery.',
    keywords: 'recommender system, personalization, marketing AI, content recommendations',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/emotional-marketing-playbook',
    title: 'Emotional Marketing Playbook - Psychology-Driven Campaigns',
    description: 'Master emotional marketing strategies to create compelling, psychology-driven marketing campaigns.',
    keywords: 'emotional marketing, psychology marketing, emotional campaigns, behavioral marketing',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/seo-vs-aeo-vs-geo',
    title: 'SEO vs AEO vs GEO - Complete Optimization Comparison',
    description: 'Comprehensive comparison of Search Engine Optimization, Answer Engine Optimization, and Generative Engine Optimization.',
    keywords: 'SEO vs AEO vs GEO, optimization comparison, search optimization, AI optimization',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'article',
    modifiedDate: '2025-08-18'
  },
  // Additional Blog Posts
  {
    path: '/blog/digital-marketing-revolution-july-2025',
    title: 'Digital Marketing Revolution July 2025',
    description: 'Latest trends and revolutionary changes in digital marketing for July 2025.',
    keywords: 'digital marketing 2025, marketing revolution, marketing trends, future marketing',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2025-07-01',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/blog/ai-revolution-digital-marketing-2025',
    title: 'AI Revolution in Digital Marketing 2025',
    description: 'How artificial intelligence is revolutionizing digital marketing strategies and campaigns in 2025.',
    keywords: 'AI marketing 2025, AI revolution, digital marketing AI, marketing automation',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'article',
    publishedDate: '2025-01-01',
    modifiedDate: '2025-08-18'
  },
  // Service Pages
  {
    path: '/ai-humanizer-agent',
    title: 'AI Humanizer Agent - Natural Content Creation',
    description: 'Advanced AI humanizer for creating natural, human-like content that passes AI detection.',
    keywords: 'AI humanizer, content humanization, natural AI content, AI detection bypass',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/predictive-analytics-agent',
    title: 'Predictive Analytics Agent - Marketing Intelligence',
    description: 'Predictive analytics solutions for data-driven marketing decisions and campaign optimization.',
    keywords: 'predictive analytics, marketing intelligence, data analytics, campaign optimization',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/ai-implementation-consulting',
    title: 'AI Implementation Consulting - Strategic AI Integration',
    description: 'Expert consulting for implementing AI solutions in marketing and business operations.',
    keywords: 'AI consulting, AI implementation, marketing AI, business AI strategy',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/digital-marketing-strategy',
    title: 'Digital Marketing Strategy - Comprehensive Planning',
    description: 'Complete digital marketing strategy development for businesses of all sizes.',
    keywords: 'digital marketing strategy, marketing planning, marketing consultation, business marketing',
    priority: 0.7,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/digital-frontier-services',
    title: 'Digital Frontier Services - Complete Service Portfolio',
    description: 'Explore our complete portfolio of AI-powered digital marketing and SEO services.',
    keywords: 'digital frontier services, marketing services, AI services, SEO services',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'website',
    modifiedDate: '2025-08-18'
  },
  {
    path: '/modern-contact-form',
    title: 'Contact Form - Get in Touch with Digital Frontier',
    description: 'Modern contact form to connect with Digital Frontier for marketing consultation and services.',
    keywords: 'contact form, get in touch, marketing consultation, contact digital frontier',
    priority: 0.6,
    changeFreq: 'monthly',
    pageType: 'website',
    modifiedDate: '2025-08-18'
  },
  // Legal Pages
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Digital Frontier Legal Terms',
    description: 'Terms of service and user agreement for Digital Frontier marketing services and website usage.',
    keywords: 'terms of service, legal terms, user agreement, service terms',
    priority: 0.3,
    changeFreq: 'yearly',
    pageType: 'website',
    modifiedDate: '2025-08-19'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Digital Frontier Data Protection',
    description: 'Privacy policy outlining how Digital Frontier collects, uses, and protects your personal information.',
    keywords: 'privacy policy, data protection, GDPR, privacy rights',
    priority: 0.3,
    changeFreq: 'yearly',
    pageType: 'website',
    modifiedDate: '2025-08-19'
  },
  // Author and Search Pages
  {
    path: '/author',
    title: 'Author Bio - Digital Frontier Content Team',
    description: 'Meet the expert content creators and marketing strategists behind Digital Frontier.',
    keywords: 'author bio, content team, marketing experts, about authors',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'website',
    modifiedDate: '2025-08-19'
  },
  {
    path: '/search',
    title: 'Search - Find Digital Frontier Content',
    description: 'Search through Digital Frontier\'s extensive library of marketing insights, guides, and resources.',
    keywords: 'search, find content, marketing resources, content search',
    priority: 0.5,
    changeFreq: 'monthly',
    pageType: 'website',
    modifiedDate: '2025-08-19'
  },
  // Local SEO Pages
  {
    path: '/memphis-digital-marketing-agency',
    title: 'Memphis AI Marketing Agency | Digital Marketing Services Collierville, Germantown | Digital Frontier',
    description: 'Leading Memphis AI marketing agency serving Collierville, Germantown, and Greater Memphis area with proven AI Overviews optimization and local SEO strategies.',
    keywords: 'Memphis AI marketing agency, Memphis digital marketing, Collierville marketing agency, Germantown SEO, Memphis AEO services, AI marketing Memphis TN',
    priority: 0.8,
    changeFreq: 'monthly',
    pageType: 'service',
    modifiedDate: '2024-12-24'
  }
];

/**
 * Normalize URL to canonical format
 * Removes trailing slashes, converts to lowercase, removes query params
 */
export function normalizeUrl(url: string): string {
  try {
    const urlObj = new URL(url, SITE_CONFIG.baseUrl);
    // Remove trailing slash for all paths including root
    let pathname = urlObj.pathname.replace(/\/$/, '') || '';
    // Convert to lowercase
    pathname = pathname.toLowerCase();
    // Remove query parameters and fragments for canonical URLs
    return `${SITE_CONFIG.baseUrl}${pathname}`;
  } catch {
    // If URL parsing fails, return the original URL cleaned up
    let cleanUrl = url.startsWith('/') ? url : `/${url}`;
    cleanUrl = cleanUrl.replace(/\/$/, '') || '';
    return `${SITE_CONFIG.baseUrl}${cleanUrl.toLowerCase()}`;
  }
}

/**
 * Get canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  return normalizeUrl(`${SITE_CONFIG.baseUrl}${path}`);
}

/**
 * Get route configuration for a given path
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '').toLowerCase();
  return ROUTE_CONFIGS.find(route => route.path.toLowerCase() === normalizedPath);
}

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(
  path: string,
  customTitle?: string,
  customDescription?: string,
  customKeywords?: string
) {
  const config = getRouteConfig(path);
  const canonicalUrl = getCanonicalUrl(path);
  
  return {
    title: customTitle || config?.title || SITE_CONFIG.defaultTitle,
    description: customDescription || config?.description || SITE_CONFIG.defaultDescription,
    keywords: customKeywords || config?.keywords || SITE_CONFIG.defaultKeywords,
    canonicalUrl,
    openGraph: {
      title: customTitle || config?.title || SITE_CONFIG.defaultTitle,
      description: customDescription || config?.description || SITE_CONFIG.defaultDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.siteName,
      type: config?.pageType === 'article' ? 'article' : 'website',
      images: [
        {
          url: SITE_CONFIG.logoUrl,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.siteName
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: customTitle || config?.title || SITE_CONFIG.defaultTitle,
      description: customDescription || config?.description || SITE_CONFIG.defaultDescription,
      images: [SITE_CONFIG.logoUrl]
    }
  };
}

/**
 * Generate sitemap XML content
 */
export function generateSitemap(): string {
  const now = '2025-08-18';
  
  const urlEntries = ROUTE_CONFIGS.map(route => {
    const url = getCanonicalUrl(route.path);
    const lastmod = route.modifiedDate || now;
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Explicitly welcome major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandexbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Sitemap location
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`;
}

/**
 * Check for duplicate content similarity
 */
export function checkContentSimilarity(content1: string, content2: string): number {
  // Simple similarity check based on common words
  const words1 = content1.toLowerCase().split(/\s+/).filter(word => word.length > 3);
  const words2 = content2.toLowerCase().split(/\s+/).filter(word => word.length > 3);
  
  const commonWords = words1.filter(word => words2.includes(word));
  const totalWords = Math.max(words1.length, words2.length);
  
  return totalWords > 0 ? (commonWords.length / totalWords) * 100 : 0;
}

/**
 * Log SEO audit results
 */
export interface SEOAuditResult {
  duplicatesFound: number;
  redirectsCreated: number;
  pagesCleaned: number;
  sitemapEntries: number;
  contentSimilarities: Array<{
    page1: string;
    page2: string;
    similarity: number;
  }>;
}

export function logSEOAudit(results: SEOAuditResult): void {
  console.log('\n🔍 SEO INDEXING FIX - AUDIT RESULTS');
  console.log('=====================================');
  console.log(`📄 Total pages processed: ${ROUTE_CONFIGS.length}`);
  console.log(`🔗 Canonical URLs standardized: ${ROUTE_CONFIGS.length}`);
  console.log(`🗺️  Sitemap entries generated: ${results.sitemapEntries}`);
  console.log(`🔄 Duplicates identified: ${results.duplicatesFound}`);
  console.log(`🚀 Redirects configured: ${results.redirectsCreated}`);
  console.log(`✨ Pages optimized: ${results.pagesCleaned}`);
  
  if (results.contentSimilarities.length > 0) {
    console.log('\n⚠️  HIGH CONTENT SIMILARITY DETECTED:');
    results.contentSimilarities.forEach(sim => {
      console.log(`   ${sim.page1} ↔ ${sim.page2}: ${sim.similarity.toFixed(1)}% similar`);
    });
  }
  
  console.log('\n✅ SEO optimization complete! Ready for Google Search Console resubmission.');
}