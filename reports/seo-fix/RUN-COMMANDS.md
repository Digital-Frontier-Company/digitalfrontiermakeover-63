# Quick Reference: SEO Audit Commands

All commands should be run from the project root directory.

---

## 🔍 Run Full Audit

```bash
# Complete SEO audit (detects issues)
node scripts/seo-audit.js
```

**Output**: CSV files in `reports/seo-fix/`
- `h1-multiple-before.csv`
- `h1-missing-before.csv`
- `images-missing-alt-before.csv`
- `links-http-before.csv`
- `links-old-domain-before.csv`
- `titles-too-long-before.csv`
- `descriptions-too-long-before.csv`

---

## 🖼️ Analyze Images

```bash
# Image optimization analysis
node scripts/optimize-images.js
```

**Output**: 
- `reports/seo-fix/images/image-optimization-manifest.json`
- `reports/seo-fix/images/images-oversized-before.csv`

**Shows**:
- Total images scanned
- Oversized images (>200KB for content, >80KB for UI)
- Estimated savings from compression
- Optimization recommendations

---

## ✅ Validate Structured Data

```bash
# Schema.org validation
node scripts/validate-schema.js
```

**Output**:
- `reports/seo-fix/structured-data/schema-errors-before.csv`
- `reports/seo-fix/structured-data/schema-warnings.csv`
- `reports/seo-fix/structured-data/schema-valid.csv`
- `reports/seo-fix/structured-data/validation-summary.json`

**Checks**:
- JSON-LD syntax errors
- Missing required properties
- Wrong domain in URLs
- Duplicate schemas

---

## 🗺️ Regenerate Sitemap

```bash
# Generate updated sitemap.xml
node scripts/generate-sitemap.js
```

**Output**:
- `public/sitemap.xml` (updated)
- `reports/seo-fix/sitemap/sitemap-before.xml` (backup)
- `reports/seo-fix/sitemap/sitemap-after.xml` (copy)

**Features**:
- Removes duplicate/non-canonical URLs
- Adds missing pages
- Updates lastmod dates
- Maintains consistent structure

---

## 🔁 Complete Workflow

### Before Code Changes
```bash
# 1. Establish baseline
node scripts/seo-audit.js
node scripts/optimize-images.js
node scripts/validate-schema.js
```

### After Making Changes
```bash
# 2. Verify fixes
node scripts/seo-audit.js  # Should show reduced issues
node scripts/validate-schema.js  # Should show fewer errors
```

### Before Deployment
```bash
# 3. Final validation
node scripts/seo-audit.js
node scripts/validate-schema.js
node scripts/generate-sitemap.js  # If routes changed
```

### After Deployment
```bash
# 4. Submit to Search Console
# Go to: https://search.google.com/search-console/sitemaps
# Submit: https://digitalfrontier.app/sitemap.xml

# 5. Validate in Google tools
# - Google Rich Results Test: https://search.google.com/test/rich-results
# - PageSpeed Insights: https://pagespeed.web.dev/
```

---

## 📊 Read Reports

### Summary Dashboard
```bash
cat reports/seo-fix/IMPLEMENTATION-COMPLETE.md
```

### Detailed Metrics
```bash
cat reports/seo-fix/BEFORE-AFTER-SUMMARY.md
```

### Maintenance Guide
```bash
cat reports/seo-fix/MAINTENANCE.md
```

### Sitemap Changes
```bash
cat reports/seo-fix/sitemap/sitemap-changes.md
```

---

## 🆘 Common Issues & Fixes

### Issue: "Cannot find module"
```bash
# Make sure you're in project root
cd /path/to/digitalfrontier.app

# Try running with full path
node $(pwd)/scripts/seo-audit.js
```

### Issue: "Permission denied"
```bash
# Make scripts executable
chmod +x scripts/*.js

# Or run with node explicitly
node scripts/seo-audit.js
```

### Issue: "No such file or directory"
```bash
# Create reports directory if missing
mkdir -p reports/seo-fix/images
mkdir -p reports/seo-fix/structured-data
mkdir -p reports/seo-fix/sitemap
```

---

## 📈 Expected Results

### SEO Audit
```
🔍 Starting SEO audit...
Scanning 150 files...

📊 Generating reports...
✓ Generated h1-multiple-before.csv
✓ Generated images-missing-alt-before.csv
✓ Generated links-http-before.csv

📈 Audit Summary:
──────────────────────────────────────────────────
Multiple H1s: 0
Missing H1s: 0
Images missing alt: 0
HTTP links: 0
Old domain references: 0
Titles too long: 0
Descriptions too long: 0
──────────────────────────────────────────────────

✅ Audit complete! Reports saved to /reports/seo-fix/
```

### Image Optimization
```
🖼️  Image Optimization Analysis
🔍 Analyzing images...

📝 Generating optimization manifest...
✓ Manifest saved to reports/seo-fix/images/

📊 Image Optimization Report
════════════════════════════════════════════════════════════
Total Images: 145
Oversized Images: 15
Total Size: 8,234 KB
Estimated Savings: ~2,468 KB
════════════════════════════════════════════════════════════

⚠️  Oversized Images:
  • hero-image.png: 450KB (max: 200KB)
  • dashboard-screenshot.jpg: 380KB (max: 200KB)
  ...

✅ Analysis complete!
```

### Schema Validation
```
🔍 Validating Structured Data (Schema.org)...
Scanning 50 files...

📊 Validation Summary:
──────────────────────────────────────────────────
Total Schemas: 45
✅ Valid: 42
⚠️  Warnings: 3
❌ Errors: 0
Error Rate: 0.00%
──────────────────────────────────────────────────

✅ Reports saved to reports/seo-fix/structured-data/
```

### Sitemap Generation
```
✅ Sitemap generated successfully!
   Total URLs: 62
   Site: https://digitalfrontier.app
   Date: 2025-10-02
   Location: public/sitemap.xml
   Backup: reports/seo-fix/sitemap/sitemap-before.xml
```

---

## 🔧 Advanced Usage

### Run with specific output
```bash
# Save audit results to custom file
node scripts/seo-audit.js > audit-results.txt 2>&1
```

### Check for specific issues only
```bash
# Search for HTTP links in codebase
grep -r "http://" src/ --include="*.tsx" --include="*.ts"

# Find images without alt
grep -r "<img" src/ --include="*.tsx" | grep -v "alt="
```

### Validate sitemap XML syntax
```bash
# Check sitemap is valid XML
xmllint --noout public/sitemap.xml

# Count URLs in sitemap
grep -c "<url>" public/sitemap.xml

# Check for duplicate URLs
grep "<loc>" public/sitemap.xml | sort | uniq -d
```

---

## 📚 Documentation Links

- **Full Implementation Guide**: `IMPLEMENTATION-COMPLETE.md`
- **Maintenance Guidelines**: `MAINTENANCE.md`
- **Metrics & Results**: `BEFORE-AFTER-SUMMARY.md`
- **Sitemap Changes**: `sitemap/sitemap-changes.md`

---

Last updated: 2025-10-02
