import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

interface SSGOptions {
  routes?: string[];
  buildDir?: string;
  generateSitemap?: boolean;
}

// Marketing pages that should be statically generated for better SEO
const MARKETING_ROUTES = [
  // Core landing pages
  '/',
  
  // Service pages
  '/digital-marketing',
  '/answer-engine-optimization',
  '/generative-engine-optimization', 
  '/search-engine-optimization',
  '/memphis-digital-marketing',
  '/germantown-digital-marketing',
  '/collierville-seo-services',
  
  // AI Marketing pages
  '/ai-and-digital-marketing',
  '/ai-prompt-templates',
  '/crypto-marketing',
  '/information-architecture-prompts',
  '/user-experience-prompts',
  
  // Business pages
  '/pricing',
  '/about-us',
  '/contact',
  '/team-expertise',
  
  // Content marketing
  '/blog',
  '/insights',
  '/browse-playbooks',
  
  // Strategy blueprints
  '/gtm-strategy-blueprint',
  '/ad-funnel-blueprint',
  '/web-creative',
  
  // Specialized services
  '/complete-aeo-guide-2025',
  '/seo-vs-aeo-vs-geo',
  '/emotional-marketing-playbook',
  '/digital-frontier-services'
];

export function marketingSSG(options: SSGOptions = {}): Plugin {
  const {
    routes = MARKETING_ROUTES,
    buildDir = 'dist',
    generateSitemap = true
  } = options;

  return {
    name: 'marketing-ssg',
    apply: 'build',
    
    // Only generate sitemap, don't interfere with normal HTML generation
    writeBundle: {
      sequential: true,
      async handler() {
        console.log('📝 Marketing SSG: Generating sitemap...');
        
        try {
          // Only generate sitemap if enabled
          if (generateSitemap) {
            await generateSitemapFile(routes, buildDir);
          }
          
          console.log(`✅ Marketing SSG: Generated sitemap for ${routes.length} pages`);
        } catch (error) {
          console.error('❌ Marketing SSG: Error generating sitemap:', error);
        }
      }
    }
  };
}

// Removed static HTML generation functions - keeping only sitemap generation

/**
 * Get route metadata for SEO
 */
function getRouteMetadata(route: string) {
  const metadata = {
    '/': {
      title: 'Digital Frontier - AI Marketing Agency Memphis | Proven Solutions That Work',
      description: 'Memphis AI marketing agency. We spent $50K+ testing 100+ AI tools so you don\'t have to. Get proven AI solutions that actually work for small businesses.',
      h1: 'Feeling Lost in AI?'
    },
    '/answer-engine-optimization': {
      title: 'Answer Engine Optimization Services | AEO Agency Memphis',
      description: 'Professional Answer Engine Optimization (AEO) services. Optimize for AI search, voice assistants, and chatbots. Get found when customers ask questions.',
      h1: 'Answer Engine Optimization'
    },
    '/ai-prompt-templates': {
      title: 'Master AI Prompt Engineering: 50+ ChatGPT Templates for Marketing',
      description: 'Transform your marketing with proven AI prompt templates, advanced chains, and recursive techniques. Get actionable strategies that drive real results.',
      h1: 'AI Prompt Templates'
    },
    '/digital-marketing': {
      title: 'Digital Marketing Services Memphis | Complete Marketing Analysis Tool',
      description: 'Comprehensive digital marketing strategy & performance optimization. Complete website marketing analysis tool for Memphis businesses.',
      h1: 'Digital Marketing Services'
    }
  };
  
  return metadata[route as keyof typeof metadata] || {
    title: 'Digital Frontier - AI Marketing Solutions',
    description: 'Professional AI marketing services and digital strategy solutions for business growth.',
    h1: 'AI Marketing Solutions'
  };
}

/**
 * Generate structured data for SEO
 */
function generateStructuredData(route: string, routeConfig: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Frontier",
    "url": "https://Digitalfrontier.app",
    "logo": "https://Digitalfrontier.app/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png",
    "sameAs": [
      "https://www.linkedin.com/company/digital-frontier-agency"
    ],
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Memphis",
      "addressRegion": "TN",
      "addressCountry": "US"
    }
  };
  
  if (route === '/') {
    return {
      ...baseData,
      "@type": ["Organization", "ProfessionalService"],
      "description": routeConfig.description,
      "priceRange": "$$",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 35.1495,
          "longitude": -90.0490
        },
        "geoRadius": "50000"
      }
    };
  }
  
  return baseData;
}

/**
 * Generate XML sitemap
 */
async function generateSitemapFile(routes: string[], buildDir: string) {
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://Digitalfrontier.app${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('  ✓ Generated: sitemap.xml');
}