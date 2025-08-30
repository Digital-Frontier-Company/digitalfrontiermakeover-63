#!/usr/bin/env node

/**
 * Quick audit runner for immediate SEO validation
 * This runs the SEO audit without external dependencies
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// SEO Configuration
const SEO_CONFIG = {
  TITLE_LEN: 60,
  META_DESC_LEN: 160,
  H1_LEN: 60,
  MIN_DESC_LEN: 155
};

console.log('🔍 Running Quick SEO Compliance Check...\n');

// Read current route configurations
const seoFilePath = join(process.cwd(), 'src', 'utils', 'seo.ts');
if (!existsSync(seoFilePath)) {
  console.error('❌ seo.ts file not found');
  process.exit(1);
}

const seoContent = readFileSync(seoFilePath, 'utf8');

// Extract route configurations using regex
const routeConfigMatch = seoContent.match(/export const ROUTE_CONFIGS: RouteConfig\[\] = \[([\s\S]*?)\];/);
if (!routeConfigMatch) {
  console.error('❌ Could not parse ROUTE_CONFIGS');
  process.exit(1);
}

// Parse individual route objects
const routesText = routeConfigMatch[1];
const routeMatches = [...routesText.matchAll(/\{[\s\S]*?\}/g)];

const issues = [];
let compliantRoutes = 0;

console.log('📊 SEO Compliance Report:\n');
console.log('Route                           | Title | Desc  | Issues');
console.log('-------------------------------|-------|-------|--------');

routeMatches.forEach((routeMatch, index) => {
  const routeText = routeMatch[0];
  
  // Extract path, title, description
  const pathMatch = routeText.match(/path: ['"`](.*?)['"`]/);
  const titleMatch = routeText.match(/title: ['"`](.*?)['"`]/);
  const descMatch = routeText.match(/description: ['"`](.*?)['"`]/);
  
  if (!pathMatch || !titleMatch || !descMatch) return;
  
  const path = pathMatch[1];
  const title = titleMatch[1];
  const description = descMatch[1];
  
  const routeIssues = [];
  
  // Validate title length
  if (title.length !== SEO_CONFIG.TITLE_LEN) {
    routeIssues.push(`Title: ${title.length}/${SEO_CONFIG.TITLE_LEN} chars`);
  }
  
  // Validate description length
  if (description.length < SEO_CONFIG.MIN_DESC_LEN || description.length > SEO_CONFIG.META_DESC_LEN) {
    routeIssues.push(`Desc: ${description.length}/${SEO_CONFIG.MIN_DESC_LEN}-${SEO_CONFIG.META_DESC_LEN} chars`);
  }
  
  // Check for action words in description
  const actionWords = ['get', 'start', 'discover', 'learn', 'contact', 'schedule', 'book', 'explore'];
  const hasAction = actionWords.some(word => description.toLowerCase().includes(word));
  if (!hasAction) {
    routeIssues.push('No action words');
  }
  
  // Display results
  const pathDisplay = path.length > 30 ? path.substring(0, 27) + '...' : path.padEnd(30);
  const titleLen = title.length === SEO_CONFIG.TITLE_LEN ? '✅ 60' : `❌ ${title.length}`;
  const descLen = (description.length >= SEO_CONFIG.MIN_DESC_LEN && description.length <= SEO_CONFIG.META_DESC_LEN) ? '✅ OK' : `❌ ${description.length}`;
  const issueCount = routeIssues.length === 0 ? '✅ None' : `❌ ${routeIssues.length}`;
  
  console.log(`${pathDisplay} | ${titleLen.padEnd(5)} | ${descLen.padEnd(5)} | ${issueCount}`);
  
  if (routeIssues.length === 0) {
    compliantRoutes++;
  } else {
    issues.push({ path, issues: routeIssues });
  }
});

console.log('\n📈 Summary:');
console.log(`Total routes analyzed: ${routeMatches.length}`);
console.log(`Compliant routes: ${compliantRoutes}`);
console.log(`Routes with issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n⚠️  Detailed Issues:');
  issues.forEach(({ path, issues: routeIssues }) => {
    console.log(`\n${path}:`);
    routeIssues.forEach(issue => console.log(`  • ${issue}`));
  });
}

// Check sitemap domain
const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf8');
  const oldDomainCount = (sitemapContent.match(/thedigitalfrontier\.ai/g) || []).length;
  const newDomainCount = (sitemapContent.match(/digitalfrontier\.app/g) || []).length;
  
  console.log('\n🗺️  Sitemap Status:');
  console.log(`✅ New domain (digitalfrontier.app): ${newDomainCount} URLs`);
  
  if (oldDomainCount > 0) {
    console.log(`❌ Old domain (thedigitalfrontier.ai): ${oldDomainCount} URLs - NEEDS FIX`);
  }
}

const successRate = Math.round((compliantRoutes / routeMatches.length) * 100);
console.log(`\n🎯 SEO Compliance: ${successRate}%`);

if (successRate === 100) {
  console.log('🎉 Perfect SEO compliance achieved!');
} else {
  console.log(`📋 Next: Fix ${issues.length} routes to achieve 100% compliance`);
}

process.exit(successRate === 100 ? 0 : 1);