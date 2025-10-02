#!/usr/bin/env node

/**
 * SEO Audit Script
 * Scans the codebase for SEO issues and generates reports
 */

const fs = require('fs');
const path = require('path');

// Results storage
const results = {
  titles: {
    missing: [],
    tooLong: [],
    tooShort: [],
    multiple: []
  },
  descriptions: {
    missing: [],
    tooLong: [],
    tooShort: []
  },
  h1: {
    missing: [],
    multiple: []
  },
  images: {
    missingAlt: [],
    oversized: []
  },
  links: {
    redirects: [],
    httpLinks: [],
    oldDomain: []
  },
  ogTags: {
    missingUrl: [],
    mismatch: []
  }
};

// File to scan
const pagesDir = path.join(__dirname, '../src/pages');
const componentsDir = path.join(__dirname, '../src/components');

/**
 * Recursively get all .tsx files
 */
function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Analyze a single file
 */
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath);
  
  // Check for multiple H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g);
  if (h1Matches && h1Matches.length > 1) {
    results.h1.multiple.push({
      file: relativePath,
      count: h1Matches.length
    });
  }
  
  // Check for missing H1 (only in page files)
  if (filePath.includes('/pages/') && (!h1Matches || h1Matches.length === 0)) {
    // Check if it uses PageLayout which adds H1
    if (!content.includes('PageLayout') && !content.includes('<h1')) {
      results.h1.missing.push(relativePath);
    }
  }
  
  // Check for images without alt text
  const imgMatches = content.matchAll(/<img[^>]*>/g);
  for (const match of imgMatches) {
    const imgTag = match[0];
    if (!imgTag.includes('alt=') || imgTag.includes('alt=""')) {
      results.images.missingAlt.push({
        file: relativePath,
        line: content.substring(0, match.index).split('\n').length
      });
    }
  }
  
  // Check for HTTP links
  const httpLinks = content.matchAll(/href=["']http:\/\/[^"']*["']/g);
  for (const match of httpLinks) {
    results.links.httpLinks.push({
      file: relativePath,
      link: match[0]
    });
  }
  
  // Check for old domain
  if (content.includes('digitalfrontier.ai')) {
    results.links.oldDomain.push(relativePath);
  }
  
  // Check SEOHead usage
  const seoHeadMatch = content.match(/<SEOHead[^>]*>/);
  if (seoHeadMatch) {
    const seoHeadContent = seoHeadMatch[0];
    
    // Check title length
    const titleMatch = seoHeadContent.match(/title=["']([^"']*)["']/);
    if (titleMatch) {
      const title = titleMatch[1];
      if (title.length > 60) {
        results.titles.tooLong.push({
          file: relativePath,
          length: title.length,
          title: title.substring(0, 60) + '...'
        });
      } else if (title.length < 30) {
        results.titles.tooShort.push({
          file: relativePath,
          length: title.length,
          title: title
        });
      }
    }
    
    // Check description length
    const descMatch = seoHeadContent.match(/description=["']([^"']*)["']/);
    if (descMatch) {
      const desc = descMatch[1];
      if (desc.length > 155) {
        results.descriptions.tooLong.push({
          file: relativePath,
          length: desc.length,
          description: desc.substring(0, 100) + '...'
        });
      } else if (desc.length < 120) {
        results.descriptions.tooShort.push({
          file: relativePath,
          length: desc.length,
          description: desc
        });
      }
    }
  }
}

/**
 * Generate CSV report
 */
function generateCSV(data, filename) {
  const reportDir = path.join(__dirname, '../reports/seo-fix');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const csvPath = path.join(reportDir, filename);
  const headers = Object.keys(data[0] || {}).join(',');
  const rows = data.map(row => Object.values(row).join(','));
  const csv = [headers, ...rows].join('\n');
  
  fs.writeFileSync(csvPath, csv);
  console.log(`✓ Generated ${filename}`);
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Starting SEO audit...\n');
  
  const allFiles = [
    ...getAllTsxFiles(pagesDir),
    ...getAllTsxFiles(componentsDir)
  ];
  
  console.log(`Scanning ${allFiles.length} files...\n`);
  
  allFiles.forEach(analyzeFile);
  
  // Generate reports
  console.log('\n📊 Generating reports...\n');
  
  if (results.h1.multiple.length > 0) {
    generateCSV(results.h1.multiple, 'h1-multiple-before.csv');
  }
  
  if (results.h1.missing.length > 0) {
    generateCSV(
      results.h1.missing.map(f => ({ file: f })), 
      'h1-missing-before.csv'
    );
  }
  
  if (results.images.missingAlt.length > 0) {
    generateCSV(results.images.missingAlt, 'images-missing-alt-before.csv');
  }
  
  if (results.links.httpLinks.length > 0) {
    generateCSV(results.links.httpLinks, 'links-http-before.csv');
  }
  
  if (results.links.oldDomain.length > 0) {
    generateCSV(
      results.links.oldDomain.map(f => ({ file: f })),
      'links-old-domain-before.csv'
    );
  }
  
  if (results.titles.tooLong.length > 0) {
    generateCSV(results.titles.tooLong, 'titles-too-long-before.csv');
  }
  
  if (results.descriptions.tooLong.length > 0) {
    generateCSV(results.descriptions.tooLong, 'descriptions-too-long-before.csv');
  }
  
  // Summary
  console.log('\n📈 Audit Summary:');
  console.log('─'.repeat(50));
  console.log(`Multiple H1s: ${results.h1.multiple.length}`);
  console.log(`Missing H1s: ${results.h1.missing.length}`);
  console.log(`Images missing alt: ${results.images.missingAlt.length}`);
  console.log(`HTTP links: ${results.links.httpLinks.length}`);
  console.log(`Old domain references: ${results.links.oldDomain.length}`);
  console.log(`Titles too long: ${results.titles.tooLong.length}`);
  console.log(`Descriptions too long: ${results.descriptions.tooLong.length}`);
  console.log('─'.repeat(50));
  console.log('\n✅ Audit complete! Reports saved to /reports/seo-fix/');
}

main();
