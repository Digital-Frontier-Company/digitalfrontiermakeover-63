#!/usr/bin/env node

/**
 * Schema Validation Script
 * Validates structured data (JSON-LD) in HTML files and components
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  pagesDir: path.join(__dirname, '../src/pages'),
  componentsDir: path.join(__dirname, '../src/components'),
  reportDir: path.join(__dirname, '../reports/seo-fix/structured-data')
};

// Required schema properties by type
const REQUIRED_PROPS = {
  'Organization': ['@type', 'name', 'url'],
  'WebSite': ['@type', 'url', 'name'],
  'Article': ['@type', 'headline', 'image', 'datePublished', 'author'],
  'Service': ['@type', 'name', 'description', 'provider'],
  'BreadcrumbList': ['@type', 'itemListElement'],
  'FAQPage': ['@type', 'mainEntity'],
  'LocalBusiness': ['@type', 'name', 'address', 'telephone']
};

const results = {
  errors: [],
  warnings: [],
  valid: [],
  totalSchemas: 0
};

/**
 * Get all TSX files
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Extract JSON-LD schemas from file
 */
function extractSchemas(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const schemas = [];
  
  // Match application/ld+json blocks
  const regex = /<script type=["']application\/ld\+json["']>([^<]*)<\/script>/gs;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    try {
      const jsonContent = match[1].trim();
      // Handle template literals
      if (jsonContent.includes('JSON.stringify')) {
        // Extract the object from JSON.stringify()
        const objMatch = jsonContent.match(/JSON\.stringify\(([\s\S]*?)\)/);
        if (objMatch) {
          // This is complex to parse, we'll mark it for manual review
          schemas.push({
            raw: jsonContent,
            parsed: null,
            needsManualReview: true
          });
        }
      } else {
        const parsed = JSON.parse(jsonContent);
        schemas.push({
          raw: jsonContent,
          parsed: parsed,
          needsManualReview: false
        });
      }
    } catch (e) {
      schemas.push({
        raw: match[1],
        parsed: null,
        error: e.message
      });
    }
  }
  
  return schemas;
}

/**
 * Validate schema object
 */
function validateSchema(schema, filePath) {
  results.totalSchemas++;
  
  if (schema.error) {
    results.errors.push({
      file: filePath,
      error: 'JSON Parse Error',
      message: schema.error
    });
    return;
  }
  
  if (schema.needsManualReview) {
    results.warnings.push({
      file: filePath,
      warning: 'Manual Review Needed',
      message: 'Schema uses dynamic JSON.stringify() - verify manually'
    });
    return;
  }
  
  if (!schema.parsed) {
    results.errors.push({
      file: filePath,
      error: 'Empty Schema',
      message: 'Schema could not be parsed'
    });
    return;
  }
  
  const data = schema.parsed;
  
  // Check for @context
  if (!data['@context']) {
    results.errors.push({
      file: filePath,
      error: 'Missing @context',
      message: 'Schema must include @context'
    });
  }
  
  // Handle @graph structure
  const schemas = data['@graph'] || [data];
  
  schemas.forEach((item, index) => {
    const type = item['@type'];
    
    if (!type) {
      results.errors.push({
        file: filePath,
        error: 'Missing @type',
        message: `Schema at index ${index} missing @type`
      });
      return;
    }
    
    // Check required properties
    const required = REQUIRED_PROPS[type] || [];
    const missing = required.filter(prop => !item[prop]);
    
    if (missing.length > 0) {
      results.errors.push({
        file: filePath,
        error: `Missing Required Properties`,
        schemaType: type,
        missing: missing.join(', ')
      });
    }
    
    // Validate URLs use correct domain
    ['url', '@id'].forEach(prop => {
      if (item[prop] && typeof item[prop] === 'string') {
        if (item[prop].includes('digitalfrontier.ai')) {
          results.errors.push({
            file: filePath,
            error: 'Wrong Domain',
            property: prop,
            message: 'Uses digitalfrontier.ai instead of digitalfrontier.app'
          });
        }
      }
    });
    
    // Validate image URLs
    if (item.image) {
      const imageUrl = typeof item.image === 'string' ? item.image : item.image.url;
      if (imageUrl && imageUrl.includes('digitalfrontier.ai')) {
        results.errors.push({
          file: filePath,
          error: 'Wrong Domain in Image',
          message: 'Image URL uses digitalfrontier.ai instead of digitalfrontier.app'
        });
      }
    }
  });
  
  if (results.errors.filter(e => e.file === filePath).length === 0) {
    results.valid.push({
      file: filePath,
      schemaTypes: schemas.map(s => s['@type']).join(', ')
    });
  }
}

/**
 * Generate reports
 */
function generateReports() {
  // Ensure report directory exists
  if (!fs.existsSync(CONFIG.reportDir)) {
    fs.mkdirSync(CONFIG.reportDir, { recursive: true });
  }
  
  // Errors CSV
  if (results.errors.length > 0) {
    const errorsCsv = [
      'File,Error,Details',
      ...results.errors.map(e => 
        `"${path.relative(process.cwd(), e.file)}","${e.error}","${e.message || e.missing || e.schemaType || ''}"`
      )
    ].join('\n');
    
    fs.writeFileSync(
      path.join(CONFIG.reportDir, 'schema-errors-before.csv'),
      errorsCsv
    );
  }
  
  // Warnings CSV
  if (results.warnings.length > 0) {
    const warningsCsv = [
      'File,Warning,Message',
      ...results.warnings.map(w => 
        `"${path.relative(process.cwd(), w.file)}","${w.warning}","${w.message}"`
      )
    ].join('\n');
    
    fs.writeFileSync(
      path.join(CONFIG.reportDir, 'schema-warnings.csv'),
      warningsCsv
    );
  }
  
  // Valid schemas
  if (results.valid.length > 0) {
    const validCsv = [
      'File,Schema Types',
      ...results.valid.map(v => 
        `"${path.relative(process.cwd(), v.file)}","${v.schemaTypes}"`
      )
    ].join('\n');
    
    fs.writeFileSync(
      path.join(CONFIG.reportDir, 'schema-valid.csv'),
      validCsv
    );
  }
  
  // Summary JSON
  const summary = {
    timestamp: new Date().toISOString(),
    totalSchemas: results.totalSchemas,
    errors: results.errors.length,
    warnings: results.warnings.length,
    valid: results.valid.length,
    errorRate: ((results.errors.length / results.totalSchemas) * 100).toFixed(2) + '%'
  };
  
  fs.writeFileSync(
    path.join(CONFIG.reportDir, 'validation-summary.json'),
    JSON.stringify(summary, null, 2)
  );
  
  return summary;
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Validating Structured Data (Schema.org)...\n');
  
  const allFiles = [
    ...getAllFiles(CONFIG.pagesDir),
    ...getAllFiles(CONFIG.componentsDir)
  ];
  
  console.log(`Scanning ${allFiles.length} files...\n`);
  
  allFiles.forEach(filePath => {
    const schemas = extractSchemas(filePath);
    schemas.forEach(schema => validateSchema(schema, filePath));
  });
  
  const summary = generateReports();
  
  console.log('📊 Validation Summary:');
  console.log('─'.repeat(50));
  console.log(`Total Schemas: ${summary.totalSchemas}`);
  console.log(`✅ Valid: ${summary.valid}`);
  console.log(`⚠️  Warnings: ${summary.warnings}`);
  console.log(`❌ Errors: ${summary.errors}`);
  console.log(`Error Rate: ${summary.errorRate}`);
  console.log('─'.repeat(50));
  
  if (results.errors.length > 0) {
    console.log('\n❌ Top Errors:');
    const errorCounts = {};
    results.errors.forEach(e => {
      errorCounts[e.error] = (errorCounts[e.error] || 0) + 1;
    });
    Object.entries(errorCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([error, count]) => {
        console.log(`  • ${error}: ${count}`);
      });
  }
  
  console.log(`\n✅ Reports saved to ${CONFIG.reportDir}/\n`);
  
  if (results.errors.length > 0) {
    console.log('💡 Next Steps:');
    console.log('  1. Review schema-errors-before.csv');
    console.log('  2. Fix errors in identified files');
    console.log('  3. Run validation again to verify');
    console.log('  4. Test with Google Rich Results Test\n');
  }
}

main();
