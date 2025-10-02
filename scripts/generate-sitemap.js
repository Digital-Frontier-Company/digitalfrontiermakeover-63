#!/usr/bin/env node

/**
 * Sitemap Generator
 * Generates a clean, canonical sitemap.xml from App.tsx routes
 */

const fs = require('fs');
const path = require('path');

// All canonical routes (from App.tsx and verified as indexable)
const routes = [
  // Core pages
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about-us', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/team-expertise', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  
  // Services
  { path: '/answer-engine-optimization', priority: 0.9, changefreq: 'monthly' },
  { path: '/generative-engine-optimization', priority: 0.9, changefreq: 'monthly' },
  { path: '/search-engine-optimization', priority: 0.8, changefreq: 'monthly' },
  { path: '/ai-and-digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { path: '/digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { path: '/digital-marketing-strategy', priority: 0.7, changefreq: 'monthly' },
  { path: '/crypto-marketing', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-creative', priority: 0.7, changefreq: 'monthly' },
  { path: '/digital-frontier-services', priority: 0.8, changefreq: 'monthly' },
  
  // Local SEO
  { path: '/memphis-digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { path: '/germantown-digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { path: '/collierville-seo-services', priority: 0.8, changefreq: 'monthly' },
  
  // Resources & Tools
  { path: '/gtm-strategy-blueprint', priority: 0.7, changefreq: 'monthly' },
  { path: '/ad-funnel-blueprint', priority: 0.7, changefreq: 'monthly' },
  { path: '/complete-aeo-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/seo-vs-aeo-vs-geo', priority: 0.8, changefreq: 'monthly' },
  { path: '/emotional-marketing-playbook', priority: 0.7, changefreq: 'monthly' },
  { path: '/influencer-marketing-2025', priority: 0.7, changefreq: 'monthly' },
  
  // AI Prompts
  { path: '/ai-prompt-templates', priority: 0.7, changefreq: 'monthly' },
  { path: '/information-architecture-prompts', priority: 0.6, changefreq: 'monthly' },
  { path: '/user-experience-prompts', priority: 0.6, changefreq: 'monthly' },
  
  // AI Tools & Agents
  { path: '/ai-implementation-consulting', priority: 0.6, changefreq: 'monthly' },
  { path: '/content-creation-agent', priority: 0.6, changefreq: 'monthly' },
  { path: '/predictive-analytics-agent', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-plans', priority: 0.7, changefreq: 'monthly' },
  
  // Dashboards & Analytics
  { path: '/ia-dashboard', priority: 0.7, changefreq: 'weekly' },
  { path: '/kpis', priority: 0.6, changefreq: 'monthly' },
  
  // Content & Insights
  { path: '/blog', priority: 0.9, changefreq: 'weekly' },
  { path: '/insights', priority: 0.8, changefreq: 'weekly' },
  { path: '/browse-playbooks', priority: 0.8, changefreq: 'weekly' },
  
  // Blog Posts
  { path: '/blog/death-of-traditional-ads', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/aeo-crypto-marketing', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/digital-marketing-revolution-july-2025', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ai-revolution-digital-marketing-2025', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/marketing-agencies-2025', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ai-truth-gap', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ai-citation-crisis', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ai-accountability-future', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/protecting-from-ai-misinformation', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/blockchain-ai-real-estate', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/digital-marketing-revolution-2025-privacy', priority: 0.7, changefreq: 'monthly' },
  
  // Research & Thought Leadership
  { path: '/psychological-digital-marketing-insights', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-bias-in-advertising', priority: 0.6, changefreq: 'monthly' },
  { path: '/recommender-system', priority: 0.6, changefreq: 'monthly' },
  { path: '/recommender-system-generalization', priority: 0.6, changefreq: 'monthly' },
  
  // Additional Pages
  { path: '/digital-frontier-where-crypto-ai-and-marketing-collide', priority: 0.7, changefreq: 'monthly' },
  { path: '/docs', priority: 0.7, changefreq: 'monthly' },
  { path: '/newsletter', priority: 0.6, changefreq: 'monthly' },
  { path: '/site-map', priority: 0.5, changefreq: 'monthly' },
  
  // Legal
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  
  // Legacy (keeping for now but with lower priority)
  { path: '/technical', priority: 0.5, changefreq: 'monthly' },
  { path: '/evolution', priority: 0.5, changefreq: 'monthly' },
  { path: '/regulations', priority: 0.5, changefreq: 'monthly' },
  { path: '/sectors', priority: 0.5, changefreq: 'monthly' },
  { path: '/future', priority: 0.5, changefreq: 'monthly' },
];

const siteUrl = 'https://digitalfrontier.app';
const currentDate = new Date().toISOString().split('T')[0];

/**
 * Generate XML sitemap
 */
function generateSitemap() {
  const urlEntries = routes.map(route => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return sitemap;
}

/**
 * Save sitemap
 */
function saveSitemap() {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const reportDir = path.join(__dirname, '../reports/seo-fix/sitemap');
  
  // Backup old sitemap
  if (fs.existsSync(sitemapPath)) {
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    fs.copyFileSync(sitemapPath, path.join(reportDir, 'sitemap-before.xml'));
  }
  
  // Write new sitemap
  fs.writeFileSync(sitemapPath, sitemap);
  
  // Save to reports
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  fs.writeFileSync(path.join(reportDir, 'sitemap-after.xml'), sitemap);
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`   Total URLs: ${routes.length}`);
  console.log(`   Site: ${siteUrl}`);
  console.log(`   Date: ${currentDate}`);
  console.log(`   Location: public/sitemap.xml`);
  console.log(`   Backup: reports/seo-fix/sitemap/sitemap-before.xml`);
}

// Run
saveSitemap();
