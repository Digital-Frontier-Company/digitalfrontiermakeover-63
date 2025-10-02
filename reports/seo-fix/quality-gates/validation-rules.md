# SEO Quality Gates & Validation Rules

## Overview

This document defines the quality gates that must pass before deploying changes to production.

## Pre-Commit Checks

### Automated via `.husky/pre-commit`:
1. SEO audit script runs automatically
2. Blocks commits if critical issues found
3. Provides actionable error messages

### Manual Pre-Commit Checklist:
- [ ] Run `npm run seo:validate` locally
- [ ] Review any warnings or errors
- [ ] Fix critical issues before committing
- [ ] Verify changes don't introduce new SEO issues

## Validation Rules

### 1. Title Tags ✅
**Rule**: Every page must have exactly one `<title>` tag, 30-60 characters long

**Validation**:
```typescript
// src/utils/seoValidation.ts
validateTitle(title: string): { valid: boolean; truncated: string }
```

**Enforcement**:
- SEOHead component auto-truncates at 60 chars
- Dev warning if title < 30 or > 60 chars
- Build fails if title is missing

**Error Messages**:
- ❌ `Title missing on page: ${url}`
- ⚠️ `Title too short (${length} chars): ${url}`
- ⚠️ `Title too long (${length} chars, truncated): ${url}`

---

### 2. Meta Descriptions ✅
**Rule**: Every page must have exactly one meta description, 120-155 characters long

**Validation**:
```typescript
validateDescription(description: string): { valid: boolean; truncated: string }
```

**Enforcement**:
- SEOHead component auto-truncates at 155 chars
- Dev warning if description < 120 or > 155 chars
- Build fails if description is missing

**Error Messages**:
- ❌ `Meta description missing on page: ${url}`
- ⚠️ `Description too short (${length} chars): ${url}`
- ⚠️ `Description too long (${length} chars, truncated): ${url}`

---

### 3. H1 Tags ✅
**Rule**: Every page must have exactly one `<h1>` tag

**Validation**:
```typescript
validateH1Count(component: ReactElement): boolean
```

**Enforcement**:
- PageWrapper validates H1 count in dev mode
- SEO audit script scans for multiple/missing H1s
- Pre-commit hook blocks if issues found

**Error Messages**:
- ❌ `Multiple H1 tags found on page: ${url}`
- ❌ `Missing H1 tag on page: ${url}`

---

### 4. Canonical URLs ✅
**Rule**: Every page must have a self-referential canonical URL matching og:url

**Validation**:
```typescript
validateCanonicalUrl(url: string): boolean
validateOgUrl(ogUrl: string, canonicalUrl: string): boolean
```

**Enforcement**:
- SEOHead automatically sets canonical to current URL
- Validation script checks og:url === canonical
- HTTPS and correct domain enforced

**Error Messages**:
- ❌ `Canonical URL missing on page: ${url}`
- ❌ `og:url doesn't match canonical on: ${url}`
- ❌ `Canonical URL uses HTTP instead of HTTPS: ${url}`

---

### 5. Image Alt Text ✅
**Rule**: All non-decorative images must have descriptive alt text

**Validation**:
```typescript
validateAltText(alt: string, imageSrc: string): boolean
```

**Enforcement**:
- LazyImage component requires alt prop
- SEO audit scans for missing alt attributes
- Build warning if alt is empty string (decorative images OK)

**Error Messages**:
- ❌ `Image missing alt text: ${imageSrc}`
- ⚠️ `Alt text may be too short: "${alt}" on ${imageSrc}`

---

### 6. Internal Links ✅
**Rule**: Every indexable page must have at least 3 dofollow internal links

**Validation**:
```typescript
validateInternalLink(url: string, baseUrl: string): boolean
```

**Enforcement**:
- Footer provides baseline 5-8 links per page
- InternalLinkEnhancer adds contextual links
- Monthly audit checks for orphan pages

**Error Messages**:
- ❌ `Orphan page detected (0 incoming links): ${url}`
- ⚠️ `Page has only 1 incoming link: ${url}`

---

### 7. Structured Data ✅
**Rule**: JSON-LD structured data must validate against schema.org

**Validation**:
```bash
node scripts/validate-schema.js
```

**Enforcement**:
- Validation script checks syntax and required properties
- Pre-deployment validation in CI/CD
- Google Rich Results Test for visual validation

**Error Messages**:
- ❌ `Invalid JSON-LD syntax on page: ${url}`
- ❌ `Missing required property "${prop}" in ${type} schema`
- ⚠️ `Recommended property "${prop}" missing in ${type} schema`

---

### 8. Sitemap Quality ✅
**Rule**: Sitemap must contain only canonical, indexable URLs

**Validation**:
```bash
node scripts/generate-sitemap.js
```

**Enforcement**:
- Automated sitemap generation from routes
- Removes duplicates and non-canonical URLs
- Updates lastmod dates automatically

**Error Messages**:
- ❌ `Non-canonical URL in sitemap: ${url}`
- ❌ `Sitemap contains redirected URL: ${url}`
- ⚠️ `Sitemap missing indexable page: ${url}`

---

## CI/CD Pipeline Integration

### Pre-Deployment Checks:
```bash
# Run full validation suite
npm run seo:validate

# Check for:
# - Multiple/missing H1s
# - Title/description length issues
# - Missing alt text
# - Broken internal links
# - Schema validation errors
```

### Exit Codes:
- `0` - All checks passed ✅
- `1` - Critical errors found, block deployment ❌
- `2` - Warnings found, allow deployment but notify ⚠️

---

## Development Workflow

### Adding a New Page:

1. **Create page component with SEOHead**:
```tsx
import { SEOHead } from '@/components/SEO/SEOHead';

const NewPage = () => (
  <>
    <SEOHead
      title="Page Title (30-60 chars)"
      description="Meta description 120-155 characters long"
    />
    <h1>Single H1 Heading</h1>
    {/* Rest of page */}
  </>
);
```

2. **Add to routes** (`src/App.tsx` and `src/utils/routes.ts`)

3. **Generate updated sitemap**:
```bash
npm run seo:sitemap
```

4. **Add internal links**:
- Update Footer.tsx if major page
- Add InternalLinkEnhancer with 3+ related links
- Link from relevant existing pages

5. **Validate before committing**:
```bash
npm run seo:validate
```

---

## Monitoring & Alerts

### Google Search Console:
- Monitor crawl errors weekly
- Check coverage report for indexation issues
- Review performance for ranking changes

### Monthly Audits:
- Run full SEO audit: `npm run seo:audit`
- Check for new orphan pages
- Validate structured data
- Review image optimization

### Quarterly Reviews:
- Update sitemap priority values
- Review and update meta descriptions
- Audit internal linking structure
- Compress new oversized images

---

## Emergency Rollback Procedure

If deployment causes SEO issues:

1. **Immediate Actions**:
   - Revert to previous deployment
   - Check Google Search Console for crawl errors
   - Verify sitemap is accessible

2. **Post-Rollback**:
   - Identify root cause of SEO regression
   - Fix in development branch
   - Run full validation suite
   - Deploy with extra caution

3. **Prevention**:
   - Never skip pre-commit hooks
   - Always run validation before merging
   - Test in staging environment first

---

## Contact & Support

**Technical Questions**: Review `/reports/seo-fix/MAINTENANCE.md`

**Audit Reports**: Check `/reports/seo-fix/` directory

**Validation Scripts**:
- SEO audit: `scripts/seo-audit.js`
- Schema validation: `scripts/validate-schema.js`
- Image optimization: `scripts/optimize-images.js`
- Sitemap generator: `scripts/generate-sitemap.js`

---

**Last Updated**: October 2, 2025
**Version**: 1.0.0
