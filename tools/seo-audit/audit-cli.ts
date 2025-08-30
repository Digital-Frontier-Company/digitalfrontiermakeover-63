#!/usr/bin/env node
/**
 * SEO Audit CLI Tool for Digital Frontier
 * Comprehensive audit for titles, meta descriptions, H1s, and internal linking
 */

import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import { crawlSite } from './crawler';
import { analyzePage } from './analyzer';
import { validateSEO } from './validator';
import { generateReport } from './reporter';
import { fixSEOIssues } from './fixer';

// SEO Configuration Constants
export const SEO_CONFIG = {
  TITLE_LEN: 60,
  META_DESC_LEN: 160, // Using 160 as max for better compliance
  H1_LEN: 60,
  PRIMARY_LANG: 'en',
  CANONICAL_BRAND: 'Digital Frontier Company',
  SITE_URL: 'https://digitalfrontier.app'
};

interface AuditOptions {
  fix?: boolean;
  output?: string;
  url?: string;
  depth?: number;
}

async function runAudit(options: AuditOptions) {
  console.log('🚀 Starting SEO Audit...');
  console.log(`Target Length - Title: ${SEO_CONFIG.TITLE_LEN}, Description: ${SEO_CONFIG.META_DESC_LEN}, H1: ${SEO_CONFIG.H1_LEN}`);
  
  const siteUrl = options.url || SEO_CONFIG.SITE_URL;
  const maxDepth = options.depth || 3;
  
  try {
    // Step 1: Crawl the site
    console.log('🕷️  Crawling site...');
    const pages = await crawlSite(siteUrl, maxDepth);
    console.log(`Found ${pages.length} pages to audit`);
    
    // Step 2: Analyze each page
    console.log('🔍 Analyzing pages...');
    const auditResults = [];
    
    for (const page of pages) {
      console.log(`Analyzing: ${page.url}`);
      const analysis = await analyzePage(page.url);
      const validation = validateSEO(analysis, SEO_CONFIG);
      
      auditResults.push({
        url: page.url,
        analysis,
        validation,
        violations: validation.violations
      });
    }
    
    // Step 3: Generate comprehensive report
    console.log('📊 Generating report...');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportDir = path.join(process.cwd(), 'reports');
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportFiles = await generateReport(auditResults, {
      csvPath: path.join(reportDir, `seo-audit-${timestamp}.csv`),
      jsonPath: path.join(reportDir, `seo-audit-${timestamp}.json`),
      htmlPath: path.join(reportDir, `seo-audit-${timestamp}.html`)
    });
    
    // Step 4: Apply fixes if requested
    if (options.fix) {
      console.log('🔧 Applying SEO fixes...');
      await fixSEOIssues(auditResults, SEO_CONFIG);
      console.log('✅ SEO fixes applied');
    }
    
    // Summary
    const totalViolations = auditResults.reduce((sum, result) => 
      sum + result.violations.length, 0);
    const pagesWithIssues = auditResults.filter(r => r.violations.length > 0).length;
    
    console.log('\n📈 Audit Summary:');
    console.log(`Pages audited: ${auditResults.length}`);
    console.log(`Pages with issues: ${pagesWithIssues}`);
    console.log(`Total violations: ${totalViolations}`);
    console.log(`Reports generated:`);
    reportFiles.forEach(file => console.log(`  - ${file}`));
    
    if (totalViolations === 0) {
      console.log('🎉 No SEO violations found! Site is fully optimized.');
    } else {
      console.log(`⚠️  ${totalViolations} violations found. ${options.fix ? 'Fixes applied.' : 'Use --fix to apply fixes.'}`);
    }
    
  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

// CLI Setup
program
  .name('seo-audit')
  .description('Comprehensive SEO audit tool for Digital Frontier')
  .version('1.0.0');

program
  .command('audit')
  .description('Run SEO audit')
  .option('-f, --fix', 'Apply SEO fixes automatically')
  .option('-o, --output <path>', 'Output directory for reports')
  .option('-u, --url <url>', 'Site URL to audit', SEO_CONFIG.SITE_URL)
  .option('-d, --depth <number>', 'Maximum crawl depth', '3')
  .action(runAudit);

program
  .command('validate')
  .description('Validate current SEO compliance')
  .action(async () => {
    await runAudit({ fix: false });
  });

program
  .command('fix')
  .description('Fix SEO issues automatically')
  .action(async () => {
    await runAudit({ fix: true });
  });

if (require.main === module) {
  program.parse();
}

export { runAudit };