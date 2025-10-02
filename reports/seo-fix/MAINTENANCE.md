# SEO Maintenance Guide

Comprehensive guide for maintaining technical SEO excellence on digitalfrontier.app.

## Table of Contents

1. [Adding New Pages](#adding-new-pages)
2. [Title & Description Guidelines](#title--description-guidelines)
3. [Image Optimization](#image-optimization)
4. [Internal Linking](#internal-linking)
5. [Structured Data](#structured-data)
6. [Common Issues & Solutions](#common-issues--solutions)
7. [Quality Checklist](#quality-checklist)

---

## Adding New Pages

### Step 1: Create Page Component

```tsx
import React from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import { SEOHead } from '@/components/SEO/SEOHead';

const NewPage: React.FC = () => {
  return (
    <PageWrapper seo={{
      title: "Page Title (30-60 chars)",
      description: "Page description between 120-155 characters with key benefits",
      keywords: "primary keyword, secondary keyword, tertiary keyword",
      pageType: "article", // or "service", "website"
      customCanonical: "https://digitalfrontier.app/new-page"
    }}>
      <SEOHead
        title="Page Title"
        description="Page description"
        currentPath="/new-page"
      />
      
      {/* Single H1 only */}
      <h1>Primary Page Heading</h1>
      
      {/* Your content here */}
    </PageWrapper>
  );
};

export default NewPage;
```

### Step 2: Add Route

Update `src/App.tsx`:

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### Step 3: Update Sitemap

Run sitemap generator:

```bash
npm run seo:generate-sitemap
```

Or manually add to `public/sitemap.xml`:

```xml
<url>
  <loc>https://digitalfrontier.app/new-page</loc>
  <lastmod>2025-10-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Step 4: Add Internal Links

Add links to new page from at least 3 related pages:

```tsx
<Link to="/new-page">Descriptive Anchor Text</Link>
```

---

## Title & Description Guidelines

### Title Best Practices

**Length**: 30-60 characters (optimal: 50-55)

**Format Options**:
- `Primary Keyword | Brand Name`
- `Primary Keyword - Secondary Keyword | Digital Frontier`
- `How to [Action] | Complete Guide`

**Example Good Titles**:
```
✅ "SEO Services Memphis | Digital Frontier AI"        (48 chars)
✅ "Answer Engine Optimization Guide | AI Marketing"    (52 chars)
✅ "AI Marketing Agency | Digital Frontier Memphis"     (49 chars)
```

**Example Bad Titles**:
```
❌ "Home"                                              (Too short, not descriptive)
❌ "Digital Frontier AI Marketing Agency Specializing in SEO..." (Too long, truncated)
❌ "CLICK HERE FOR THE BEST AI MARKETING"             (Spammy, all caps)
```

### Description Best Practices

**Length**: 120-155 characters (optimal: 140-150)

**Format**:
1. Start with value proposition
2. Include primary keyword naturally
3. Add call-to-action or benefit
4. End with brand or differentiator

**Example Good Descriptions**:
```
✅ "AI-powered SEO services in Memphis. Boost rankings, traffic & conversions with data-driven strategies. Free consultation available today."
   (142 chars)

✅ "Expert Answer Engine Optimization for ChatGPT, Perplexity & AI search. Get found in AI results with our AEO strategies. Learn more."
   (138 chars)
```

**Example Bad Descriptions**:
```
❌ "We are a company that does marketing."           (Too short, vague)
❌ "Digital Frontier is a premier AI-powered digital marketing agency..." (>155 chars, truncated)
❌ "Click here! Best agency! #1 results!"           (Spammy)
```

### Validation in Code

The `SEOHead` component automatically validates and truncates:

```tsx
// Titles >60 chars are truncated to 57 + "..."
// Descriptions >155 chars are truncated to 152 + "..."
```

---

## Image Optimization

### Requirements

- **Format**: WebP preferred, PNG/JPG fallback
- **Size**: <200KB for content images, <80KB for UI elements
- **Dimensions**: Specify width/height attributes
- **Alt Text**: Descriptive, 5-125 characters
- **Loading**: Use `loading="lazy"` for below-fold images

### Implementation

```tsx
<LazyImage
  src="/lovable-uploads/image.webp"
  alt="Descriptive text about image - Memphis AI Marketing Dashboard"
  displayWidth={800}
  displayHeight={600}
  loading="lazy"
  className="rounded-lg"
/>
```

### Alt Text Formula

```
[What it shows] - [Context/Benefit] | [Location if relevant]
```

**Examples**:
```
✅ "AI-powered analytics dashboard showing real-time SEO metrics"
✅ "Digital Frontier team collaborating on marketing strategy - Memphis office"
✅ "Answer Engine Optimization results chart with 40% traffic increase"
```

**Avoid**:
```
❌ ""                                    (Empty)
❌ "image"                               (Generic)
❌ "Click here to see our dashboard"    (Call-to-action)
❌ "Photo12345.jpg"                      (Filename)
```

### Optimization Workflow

1. **Compress images**:
   ```bash
   npm run optimize-images
   ```

2. **Convert to WebP**:
   ```bash
   # Uses sharp library in scripts/optimize-images.js
   ```

3. **Verify sizes**:
   ```bash
   npm run seo:audit
   ```

---

## Internal Linking

### Requirements

- **Minimum**: 3 contextual internal links per page
- **Anchor Text**: Descriptive, keyword-rich
- **Link Type**: Use relative paths for internal links
- **Avoid**: Redirects, broken links, orphan pages

### Best Practices

**Do**:
```tsx
// Descriptive anchor text
<Link to="/answer-engine-optimization">
  Learn about Answer Engine Optimization
</Link>

// Context-relevant placement
<p>
  Our AI-powered <Link to="/digital-marketing">digital marketing strategies</Link>
  help businesses grow faster.
</p>
```

**Don't**:
```tsx
// Generic anchor text
<Link to="/services">Click here</Link>

// Links to redirects
<Link to="/old-page">Service</Link> {/* Redirects to /new-page */}

// External domain in internal link
<a href="https://externalsite.com/our-page">Our Service</a>
```

### Link Placement Priority

1. **Primary Navigation** - Key services/pages
2. **Footer** - Secondary pages, legal, resources
3. **Related Content** - Contextual inline links
4. **Breadcrumbs** - Hierarchical navigation
5. **Call-to-Actions** - Conversion-focused links

### Adding Links to Footer

Update `src/components/layout/Footer.tsx`:

```tsx
<li>
  <Link to="/new-page" className="text-slate-400 hover:text-white text-sm">
    New Service Page
  </Link>
</li>
```

---

## Structured Data

### Required Schema Types

1. **Organization** (site-wide)
2. **WebSite** (homepage)
3. **BreadcrumbList** (all pages)
4. **Article** (blog posts)
5. **Service** (service pages)
6. **LocalBusiness** (location pages)

### Implementation

Schema is generated automatically by `SEOHead` component based on `pageType`:

```tsx
<SEOHead
  pageType="article"
  publishedDate="2025-10-02"
  modifiedDate="2025-10-02"
/>
```

### Adding Custom Schema

```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is AEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Answer Engine Optimization..."
        }
      }]
    })}
  </script>
</Helmet>
```

### Validation

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Local validation**:
   ```bash
   npm run seo:validate-schema
   ```

---

## Common Issues & Solutions

### Issue: Multiple H1 Tags

**Problem**: Page has 2+ `<h1>` tags, confuses search engines about page topic.

**Solution**:
```tsx
// ❌ Bad - Multiple H1s
<h1>Page Title</h1>
<section>
  <h1>Section Title</h1>  {/* Should be H2 */}
</section>

// ✅ Good - Single H1, hierarchical headings
<h1>Page Title</h1>
<section>
  <h2>Section Title</h2>
  <h3>Subsection Title</h3>
</section>
```

### Issue: og:url Doesn't Match Canonical

**Problem**: Open Graph URL differs from canonical URL.

**Solution**:
```tsx
// The SEOHead component now ensures they match
<SEOHead
  customCanonical="https://digitalfrontier.app/page"
  // og:url will automatically match canonical
/>
```

### Issue: Missing Alt Text

**Problem**: Images without alt attributes hurt accessibility and SEO.

**Solution**:
```tsx
// Add descriptive alt text to all images
<img 
  src="/image.jpg" 
  alt="Descriptive text about what the image shows"
/>
```

### Issue: Orphan Pages

**Problem**: Pages with no internal links pointing to them.

**Solution**:
- Add links in footer navigation
- Add contextual links in related content
- Add to sitemap
- Include in breadcrumb trails

### Issue: Titles/Descriptions Too Long

**Problem**: Truncated in search results, poor click-through rates.

**Solution**: SEOHead now auto-truncates, but better to write optimal length from start:
```tsx
// Let component truncate
<SEOHead title="Very long title that might get truncated..." />

// Better: Write optimal length
<SEOHead title="Concise SEO Title (50 chars)" />
```

---

## Quality Checklist

Use this checklist when adding/updating pages:

### Pre-Launch Checklist

- [ ] Page has single `<h1>` tag
- [ ] Title is 30-60 characters
- [ ] Description is 120-155 characters
- [ ] All images have descriptive alt text
- [ ] Images are optimized (<200KB)
- [ ] At least 3 internal links to page
- [ ] No links to redirects
- [ ] Canonical URL is set correctly
- [ ] og:url matches canonical
- [ ] Appropriate schema markup added
- [ ] Page added to sitemap
- [ ] Breadcrumbs implemented
- [ ] Mobile responsive
- [ ] Passes Core Web Vitals

### Monthly Audit Checklist

- [ ] Run `npm run seo:audit`
- [ ] Check for broken links
- [ ] Review orphan pages report
- [ ] Validate structured data
- [ ] Check image optimization
- [ ] Review title/description performance in GSC
- [ ] Update lastmod dates in sitemap
- [ ] Check for duplicate content
- [ ] Review internal linking structure
- [ ] Validate HTTPS consistency

### Tools to Use

```bash
# Run full SEO audit
npm run seo:audit

# Validate schema
npm run seo:validate-schema

# Check for issues
npm run seo:lint

# Generate updated sitemap
npm run seo:generate-sitemap

# Optimize images
npm run optimize-images
```

---

## Resources

### Internal Documentation
- [SEO Templates](../../src/components/SEO/SEOTemplates.tsx)
- [Validation Utils](../../src/utils/seoValidation.ts)
- [Image Optimization](../../src/utils/imageOptimization.ts)

### External Resources
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)
- [Moz SEO Learning Center](https://moz.com/learn/seo)

---

## Support

For SEO questions or issues:
1. Check this maintenance guide
2. Review code comments in SEO components
3. Run validation scripts
4. Consult BEFORE-AFTER-SUMMARY.md for examples

---

Last updated: 2025-10-02
Maintained by: Digital Frontier SEO Team
