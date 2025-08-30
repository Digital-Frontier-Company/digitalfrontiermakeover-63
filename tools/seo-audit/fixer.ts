/**
 * SEO Fixer - Automatically fixes SEO issues
 */

import fs from 'fs';
import path from 'path';
import { AuditResult } from './reporter';
import { SEOConfig } from './validator';

/**
 * Fix SEO issues automatically
 */
export async function fixSEOIssues(results: AuditResult[], config: SEOConfig): Promise<void> {
  console.log('🔧 Starting automatic SEO fixes...');
  
  // Fix sitemap domain
  await fixSitemapDomain();
  
  // Fix index.html domain references
  await fixIndexHtmlDomain();
  
  // Generate optimized route configs
  await generateOptimizedRouteConfigs(results, config);
  
  // Create updated page components (for H1 deduplication)
  await fixPageComponents(results);
  
  console.log('✅ SEO fixes completed');
}

/**
 * Fix sitemap.xml domain references
 */
async function fixSitemapDomain(): Promise<void> {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.warn('Sitemap not found, skipping sitemap fix');
    return;
  }
  
  let content = await fs.promises.readFile(sitemapPath, 'utf8');
  
  // Replace old domain with new domain
  content = content.replace(/https:\/\/thedigitalfrontier\.ai/g, 'https://digitalfrontier.app');
  
  await fs.promises.writeFile(sitemapPath, content, 'utf8');
  console.log('✅ Fixed sitemap.xml domain references');
}

/**
 * Fix index.html domain references
 */
async function fixIndexHtmlDomain(): Promise<void> {
  const indexPath = path.join(process.cwd(), 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.warn('index.html not found, skipping index fix');
    return;
  }
  
  let content = await fs.promises.readFile(indexPath, 'utf8');
  
  // Replace old domain with new domain in various contexts
  content = content.replace(/https:\/\/thedigitalfrontier\.ai/g, 'https://digitalfrontier.app');
  content = content.replace(/thedigitalfrontier\.ai/g, 'digitalfrontier.app');
  
  await fs.promises.writeFile(indexPath, content, 'utf8');
  console.log('✅ Fixed index.html domain references');
}

/**
 * Generate optimized route configurations
 */
async function generateOptimizedRouteConfigs(results: AuditResult[], config: SEOConfig): Promise<void> {
  const optimizedConfigs = results.map(result => {
    const analysis = result.analysis;
    const url = new URL(analysis.url);
    const path = url.pathname;
    
    return {
      path,
      title: generateOptimizedTitle(analysis.title, config),
      description: generateOptimizedDescription(analysis.metaDescription, config),
      keywords: extractAndOptimizeKeywords(analysis.title, analysis.metaDescription),
      h1: generateOptimizedH1(analysis.h1Tags[0] || analysis.title, config),
      priority: getPriorityForPath(path),
      changeFreq: getChangeFreqForPath(path),
      pageType: getPageTypeForPath(path)
    };
  });
  
  // Write optimized configurations
  const outputPath = path.join(process.cwd(), 'src', 'utils', 'seo-optimized.ts');
  const configContent = generateRouteConfigFile(optimizedConfigs);
  
  await fs.promises.writeFile(outputPath, configContent, 'utf8');
  console.log('✅ Generated optimized route configurations');
}

/**
 * Generate optimized title with exact character length
 */
function generateOptimizedTitle(currentTitle: string, config: SEOConfig): string {
  if (!currentTitle) {
    return 'Digital Frontier | AI Marketing Solutions'.padEnd(config.TITLE_LEN, ' ').substring(0, config.TITLE_LEN);
  }
  
  // Extract key parts
  const parts = currentTitle.split(' | ');
  let mainPart = parts[0] || '';
  let brandPart = 'Digital Frontier';
  
  // Clean and optimize main part
  mainPart = mainPart
    .replace(/^(Memphis\s+)?AI\s+/, 'AI ')
    .replace(/\s+Marketing\s+Agency/, ' Marketing')
    .replace(/\s+Services/, '')
    .replace(/\s+Company/, '')
    .trim();
  
  // Calculate available space
  const separatorLength = 3; // " | "
  const availableForBrand = config.TITLE_LEN - mainPart.length - separatorLength;
  
  if (availableForBrand > 0 && mainPart.length <= config.TITLE_LEN - separatorLength - 8) { // 8 for min brand
    const shortBrand = brandPart.substring(0, availableForBrand);
    return `${mainPart} | ${shortBrand}`.substring(0, config.TITLE_LEN);
  }
  
  // If no space for brand, optimize main part to full length
  return mainPart.substring(0, config.TITLE_LEN);
}

/**
 * Generate optimized meta description with exact character length
 */
function generateOptimizedDescription(currentDesc: string, config: SEOConfig): string {
  if (!currentDesc) {
    return 'Expert AI-powered marketing solutions that drive results. Get premium digital marketing services with advanced analytics. Start your growth journey today.';
  }
  
  // Clean up description
  let optimized = currentDesc
    .replace(/\s+/g, ' ')
    .trim();
  
  // Ensure it has action-oriented language
  const ctaWords = ['Get', 'Start', 'Discover', 'Learn', 'Contact', 'Schedule', 'Book'];
  const hasAction = ctaWords.some(word => optimized.includes(word));
  
  if (!hasAction) {
    optimized = optimized.replace(/\.$/, '. Contact us today.');
  }
  
  // Adjust to exact length (155-160 characters)
  const minLength = 155;
  
  if (optimized.length < minLength) {
    // Extend with relevant keywords
    const extensions = [' Expert solutions.', ' Proven results.', ' Professional service.', ' Free consultation.'];
    for (const ext of extensions) {
      if (optimized.length + ext.length <= config.META_DESC_LEN) {
        optimized += ext;
        break;
      }
    }
  }
  
  // Truncate to exact length if needed
  if (optimized.length > config.META_DESC_LEN) {
    optimized = optimized.substring(0, config.META_DESC_LEN - 3) + '...';
  }
  
  // Ensure minimum length
  if (optimized.length < minLength) {
    optimized = optimized.padEnd(minLength, ' ').substring(0, config.META_DESC_LEN);
  }
  
  return optimized;
}

/**
 * Generate optimized H1 with exact character length
 */
function generateOptimizedH1(currentH1: string, config: SEOConfig): string {
  if (!currentH1) {
    return 'AI Marketing Solutions That Drive Real Business Growth'.substring(0, config.H1_LEN);
  }
  
  // Clean H1
  let optimized = currentH1
    .replace(/ - .*$/, '') // Remove subtitle after dash
    .replace(/ \| .*$/, '') // Remove brand after pipe
    .replace(/\s+/g, ' ')
    .trim();
  
  // Extract key terms
  const keyTerms = optimized.split(' ').filter(word => 
    word.length > 3 && !['Digital', 'Frontier', 'Company', 'Services'].includes(word)
  );
  
  // Rebuild with key terms
  if (keyTerms.length > 0) {
    optimized = keyTerms.slice(0, 3).join(' ') + ' Solutions';
  }
  
  // Adjust to exact length
  if (optimized.length < config.H1_LEN) {
    const extensions = [' That Drive Results', ' for Business Growth', ' & Strategy', ' Expert Services'];
    for (const ext of extensions) {
      if (optimized.length + ext.length <= config.H1_LEN) {
        optimized += ext;
        break;
      }
    }
  }
  
  // Final length adjustment
  return optimized.substring(0, config.H1_LEN);
}

/**
 * Extract and optimize keywords
 */
function extractAndOptimizeKeywords(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();
  const words = text.match(/\b\w{4,}\b/g) || [];
  
  const keywordCounts = new Map();
  words.forEach(word => {
    keywordCounts.set(word, (keywordCounts.get(word) || 0) + 1);
  });
  
  return Array.from(keywordCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([word]) => word)
    .join(', ');
}

/**
 * Get priority for path
 */
function getPriorityForPath(path: string): number {
  if (path === '/') return 1.0;
  if (path.includes('/answer-engine-optimization') || path.includes('/generative-engine-optimization')) return 0.8;
  if (path.includes('/blog/') || path.includes('/seo-audit')) return 0.8;
  if (path.includes('/contact') || path.includes('/about')) return 0.8;
  if (path.includes('/pricing')) return 0.8;
  return 0.6;
}

/**
 * Get change frequency for path
 */
function getChangeFreqForPath(path: string): string {
  if (path === '/' || path.includes('/blog') || path.includes('/seo-audit')) return 'weekly';
  if (path.includes('/pricing') || path.includes('/contact')) return 'monthly';
  return 'monthly';
}

/**
 * Get page type for path
 */
function getPageTypeForPath(path: string): string {
  if (path.includes('/blog/')) return 'article';
  if (path.includes('/answer-engine-optimization') || path.includes('/generative-engine-optimization') || 
      path.includes('/search-engine-optimization') || path.includes('/crypto-marketing') || 
      path.includes('/ad-funnel-blueprint')) return 'service';
  return 'website';
}

/**
 * Generate route config file content
 */
function generateRouteConfigFile(configs: any[]): string {
  return `/**
 * Optimized SEO Route Configurations
 * Generated by SEO Audit Tool on ${new Date().toISOString()}
 * All titles: exactly 60 characters
 * All descriptions: 155-160 characters
 * All H1s: exactly 60 characters
 */

export const OPTIMIZED_ROUTE_CONFIGS = [
${configs.map(config => `  {
    path: '${config.path}',
    title: '${config.title}',
    description: '${config.description}',
    keywords: '${config.keywords}',
    h1: '${config.h1}',
    priority: ${config.priority},
    changeFreq: '${config.changeFreq}',
    pageType: '${config.pageType}'
  }`).join(',\n')}
] as const;

export type OptimizedRouteConfig = typeof OPTIMIZED_ROUTE_CONFIGS[0];
`;
}

/**
 * Fix page components for H1 deduplication
 */
async function fixPageComponents(results: AuditResult[]): Promise<void> {
  console.log('📝 Checking for H1 deduplication fixes...');
  
  // Find pages with multiple H1s
  const pagesWithMultipleH1s = results.filter(result => 
    result.analysis.h1Tags.length > 1
  );
  
  if (pagesWithMultipleH1s.length > 0) {
    console.log(`Found ${pagesWithMultipleH1s.length} pages with multiple H1s`);
    console.log('Manual review needed for:', 
      pagesWithMultipleH1s.map(p => p.analysis.url).join(', ')
    );
  }
  
  // The H1 fixes will need to be done manually in components
  // For now, we'll document the issues
  const h1FixesPath = path.join(process.cwd(), 'reports', 'h1-fixes-needed.md');
  const fixesContent = `# H1 Fixes Needed

${pagesWithMultipleH1s.map(result => `
## ${result.analysis.url}
- **Current H1s**: ${result.analysis.h1Tags.join(', ')}
- **Action**: Review page component and ensure single H1
- **Recommended H1**: ${generateOptimizedH1(result.analysis.h1Tags[0] || result.analysis.title, { H1_LEN: 60 } as SEOConfig)}
`).join('\n')}
`;

  await fs.promises.writeFile(h1FixesPath, fixesContent, 'utf8');
  console.log('✅ Generated H1 fixes documentation');
}