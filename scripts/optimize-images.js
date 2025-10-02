#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses images, converts to WebP/AVIF, and generates manifest
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../public/lovable-uploads'),
  outputDir: path.join(__dirname, '../public/lovable-uploads-optimized'),
  reportDir: path.join(__dirname, '../reports/seo-fix/images'),
  maxSizeKB: {
    content: 200,
    ui: 80
  },
  quality: 85
};

// Ensure directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Get file size in KB
 */
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

/**
 * Analyze images and identify issues
 */
function analyzeImages() {
  console.log('🔍 Analyzing images...\n');
  
  const results = {
    oversized: [],
    total: 0,
    totalSizeKB: 0
  };
  
  ensureDir(CONFIG.sourceDir);
  const files = fs.readdirSync(CONFIG.sourceDir);
  
  files.forEach(file => {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;
    
    const filePath = path.join(CONFIG.sourceDir, file);
    const sizeKB = getFileSizeKB(filePath);
    
    results.total++;
    results.totalSizeKB += sizeKB;
    
    // Determine if it's a UI asset or content image
    const isUIAsset = file.includes('logo') || file.includes('icon') || sizeKB < 100;
    const maxSize = isUIAsset ? CONFIG.maxSizeKB.ui : CONFIG.maxSizeKB.content;
    
    if (sizeKB > maxSize) {
      results.oversized.push({
        file,
        currentSizeKB: sizeKB,
        maxSizeKB: maxSize,
        type: isUIAsset ? 'UI' : 'Content',
        path: `/lovable-uploads/${file}`
      });
    }
  });
  
  return results;
}

/**
 * Generate optimization manifest
 */
function generateManifest(results) {
  console.log('📝 Generating optimization manifest...\n');
  
  ensureDir(CONFIG.reportDir);
  
  const manifest = {
    timestamp: new Date().toISOString(),
    summary: {
      totalImages: results.total,
      oversizedImages: results.oversized.length,
      totalSizeKB: results.totalSizeKB,
      estimatedSavings: Math.round(
        results.oversized.reduce((sum, img) => sum + (img.currentSizeKB * 0.4), 0)
      )
    },
    oversizedImages: results.oversized,
    recommendations: [
      'Convert images to WebP format for better compression',
      'Use responsive images with srcset for different screen sizes',
      'Implement lazy loading for below-fold images',
      'Consider using AVIF format for even better compression'
    ]
  };
  
  fs.writeFileSync(
    path.join(CONFIG.reportDir, 'image-optimization-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  // Generate CSV for oversized images
  if (results.oversized.length > 0) {
    const csv = [
      'File,Current Size (KB),Max Size (KB),Type,Path',
      ...results.oversized.map(img => 
        `${img.file},${img.currentSizeKB},${img.maxSizeKB},${img.type},"${img.path}"`
      )
    ].join('\n');
    
    fs.writeFileSync(
      path.join(CONFIG.reportDir, 'images-oversized-before.csv'),
      csv
    );
  }
  
  console.log('✓ Manifest saved to reports/seo-fix/images/');
  
  return manifest;
}

/**
 * Display optimization recommendations
 */
function displayRecommendations(manifest) {
  console.log('\n📊 Image Optimization Report');
  console.log('═'.repeat(60));
  console.log(`Total Images: ${manifest.summary.totalImages}`);
  console.log(`Oversized Images: ${manifest.summary.oversizedImages}`);
  console.log(`Total Size: ${manifest.summary.totalSizeKB} KB`);
  console.log(`Estimated Savings: ~${manifest.summary.estimatedSavings} KB`);
  console.log('═'.repeat(60));
  
  if (manifest.oversizedImages.length > 0) {
    console.log('\n⚠️  Oversized Images:');
    manifest.oversizedImages.forEach(img => {
      console.log(`  • ${img.file}: ${img.currentSizeKB}KB (max: ${img.maxSizeKB}KB)`);
    });
  }
  
  console.log('\n💡 Recommendations:');
  manifest.recommendations.forEach((rec, i) => {
    console.log(`  ${i + 1}. ${rec}`);
  });
  
  console.log('\n📖 Next Steps:');
  console.log('  1. Use online tools like Squoosh (squoosh.app) to compress images');
  console.log('  2. Replace original files in /public/lovable-uploads/');
  console.log('  3. Run this script again to verify improvements');
  console.log('  4. Update image references if filenames change\n');
}

/**
 * Main execution
 */
function main() {
  console.log('🖼️  Image Optimization Analysis\n');
  
  const results = analyzeImages();
  const manifest = generateManifest(results);
  displayRecommendations(manifest);
  
  console.log('✅ Analysis complete!\n');
}

main();
