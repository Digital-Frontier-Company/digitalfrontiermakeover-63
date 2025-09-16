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
    
    // Generate static files after build
    generateBundle() {
      console.log('🚀 Marketing SSG: Starting static generation...');
    },
    
    // Hook into the build process to generate static HTML
    writeBundle: {
      sequential: true,
      async handler() {
        console.log('📝 Marketing SSG: Generating static marketing pages...');
        
        try {
          // Generate static HTML for each marketing route
          for (const route of routes) {
            await generateStaticHTML(route, buildDir);
          }
          
          // Generate sitemap if enabled
          if (generateSitemap) {
            await generateSitemapFile(routes, buildDir);
          }
          
          console.log(`✅ Marketing SSG: Generated ${routes.length} static pages`);
        } catch (error) {
          console.error('❌ Marketing SSG: Error generating static pages:', error);
        }
      }
    }
  };
}

/**
 * Generate static HTML for a specific route
 */
async function generateStaticHTML(route: string, buildDir: string) {
  const outputPath = path.join(buildDir, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  const outputDir = path.dirname(outputPath);
  
  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate SEO-optimized HTML template
  const html = generateSEOHTML(route);
  
  // Write static HTML file
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`  ✓ Generated: ${outputPath}`);
}

/**
 * Generate SEO-optimized HTML template for a route
 */
function generateSEOHTML(route: string): string {
  const routeConfig = getRouteMetadata(route);
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${routeConfig.title}</title>
  <meta name="description" content="${routeConfig.description}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://Digitalfrontier.app${route === '/' ? '' : route}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${routeConfig.title}">
  <meta property="og:description" content="${routeConfig.description}">
  <meta property="og:url" content="https://Digitalfrontier.app${route === '/' ? '' : route}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Digital Frontier">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${routeConfig.title}">
  <meta name="twitter:description" content="${routeConfig.description}">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify(generateStructuredData(route, routeConfig), null, 2)}
  </script>
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Critical CSS (inline for performance) -->
  <style>
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      margin: 0; 
      background: #0f172a; 
      color: #f8fafc; 
    }
    .loading { text-align: center; padding: 2rem; }
    .hero-section { 
      background: linear-gradient(135deg, #0f1629 0%, #1a237e 25%, #8FB31D 45%, #2d3748 70%, #1a202c 100%);
      min-height: 50vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }
  </style>
</head>
<body>
  <!-- Static content for SEO and initial load -->
  <div id="static-content">
    <header>
      <nav role="navigation" aria-label="Main navigation">
        <div style="text-align: center; padding: 1rem;">
          <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" 
               alt="Digital Frontier - AI Marketing Agency" 
               width="120" height="120" style="max-width: 120px;">
        </div>
      </nav>
    </header>
    
    <main>
      <section class="hero-section">
        <div style="text-align: center; max-width: 800px; padding: 2rem;">
          <h1 style="font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, #4EE2EC 0%, #8FB31D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            ${routeConfig.h1}
          </h1>
          <p style="font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem;">
            ${routeConfig.description}
          </p>
          <a href="/contact" style="display: inline-block; background: linear-gradient(135deg, #4EE2EC 0%, #8FB31D 100%); color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">
            Get Started Today
          </a>
        </div>
      </section>
      
      <section style="padding: 3rem 1rem; max-width: 1200px; margin: 0 auto;">
        ${generateStaticContent(route)}
      </section>
    </main>
    
    <footer style="background: #1e293b; padding: 2rem; text-align: center; margin-top: 3rem;">
      <p>&copy; 2024 Digital Frontier. All rights reserved.</p>
    </footer>
  </div>
  
  <!-- Loading indicator for React hydration -->
  <div id="loading" class="loading" style="display: none;">
    <div>Loading interactive features...</div>
  </div>
  
  <!-- React app root -->
  <div id="root"></div>
  
  <!-- Module scripts for React hydration -->
  <script type="module" src="/src/main.tsx"></script>
  
  <!-- Progressive enhancement script -->
  <script>
    // Show loading indicator when React starts hydrating
    document.addEventListener('DOMContentLoaded', function() {
      const staticContent = document.getElementById('static-content');
      const loading = document.getElementById('loading');
      const root = document.getElementById('root');
      
      // Hide static content and show loading when React takes over
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.target === root && root.children.length > 0) {
            staticContent.style.display = 'none';
            loading.style.display = 'none';
            observer.disconnect();
          }
        });
      });
      
      observer.observe(root, { childList: true });
    });
  </script>
</body>
</html>`;
}

/**
 * Generate static content for each route
 */
function generateStaticContent(route: string): string {
  const content = {
    '/': `
      <div style="display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
        <div style="background: rgba(30, 41, 59, 0.5); padding: 2rem; border-radius: 1rem;">
          <h2 style="color: #4EE2EC; margin-bottom: 1rem;">AI-Powered Marketing</h2>
          <p>Transform your business with proven AI solutions that actually work for small businesses.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.5); padding: 2rem; border-radius: 1rem;">
          <h2 style="color: #8FB31D; margin-bottom: 1rem;">Answer Engine Optimization</h2>
          <p>Get found in AI search results and voice assistants with our cutting-edge AEO strategies.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.5); padding: 2rem; border-radius: 1rem;">
          <h2 style="color: #4EE2EC; margin-bottom: 1rem;">Memphis Marketing Experts</h2>
          <p>Local Memphis digital marketing agency helping businesses grow with AI and proven strategies.</p>
        </div>
      </div>
    `,
    '/answer-engine-optimization': `
      <div>
        <h2 style="color: #4EE2EC; margin-bottom: 2rem;">What is Answer Engine Optimization?</h2>
        <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">
          Answer Engine Optimization (AEO) is the practice of optimizing content to appear in AI-powered search results, 
          voice assistants, and chatbots. As search evolves beyond traditional keywords, AEO ensures your business 
          gets found when customers ask questions.
        </p>
        
        <h3 style="color: #8FB31D; margin: 2rem 0 1rem;">AEO Benefits:</h3>
        <ul style="line-height: 1.7;">
          <li>Increased visibility in voice search results</li>
          <li>Better performance in AI chatbot responses</li>
          <li>Higher click-through rates from featured snippets</li>
          <li>Future-proof your SEO strategy</li>
        </ul>
      </div>
    `,
    '/ai-prompt-templates': `
      <div>
        <h2 style="color: #4EE2EC; margin-bottom: 2rem;">50+ AI Prompt Templates for Marketing</h2>
        <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">
          Master AI prompt engineering with our comprehensive collection of proven templates for digital marketing success.
        </p>
        
        <div style="display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); margin: 2rem 0;">
          <div style="background: rgba(30, 41, 59, 0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h4 style="color: #8FB31D;">Content Creation</h4>
            <p>Blog posts, social media, email campaigns</p>
          </div>
          <div style="background: rgba(30, 41, 59, 0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h4 style="color: #8FB31D;">SEO Optimization</h4>
            <p>Keywords, meta descriptions, alt text</p>
          </div>
          <div style="background: rgba(30, 41, 59, 0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h4 style="color: #8FB31D;">Ad Copy</h4>
            <p>Google Ads, Facebook Ads, LinkedIn</p>
          </div>
        </div>
      </div>
    `
  };
  
  return content[route as keyof typeof content] || '<p>Comprehensive marketing solutions tailored for your business success.</p>';
}

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