# SEO Tag Governance Guide

## Overview
This document outlines the SEO standards and governance for Digital Frontier's website, ensuring consistent optimization across all pages.

## SEO Standards

### Character Length Requirements
- **Titles**: Exactly 60 characters
- **Meta Descriptions**: 155-160 characters  
- **H1 Tags**: Exactly 60 characters

### Content Requirements
- **Titles**: Front-load primary keywords, include brand when space allows
- **Descriptions**: Action-oriented language with clear value proposition
- **H1**: Match title keywords, plain descriptive text (no HTML)
- **Keywords**: Must appear in title, description, H1, first paragraph, and last paragraph

### Internal Linking Standards
- **Maximum Depth**: All pages accessible within 3 clicks from homepage
- **Anchor Text**: Descriptive, contextual (avoid "click here", "read more")
- **Related Links**: Every page should link to 3-5 related internal pages

## Implementation Guide

### Route Configuration (`src/utils/seo.ts`)
All SEO metadata is centralized in the `ROUTE_CONFIGS` array:

```typescript
{
  path: '/example-page',
  title: 'Exactly Sixty Characters Long Title With Keywords Here',
  description: 'Action-oriented description between 155-160 characters that includes keywords and clear value proposition. Contact us today for results.',
  keywords: 'primary keyword, secondary keyword, related terms',
  priority: 0.8,
  changeFreq: 'monthly',
  pageType: 'service'
}
```

### Page Layout Integration
The `PageLayout` component automatically:
- Generates optimized H1 tags based on route configuration
- Implements proper heading hierarchy (single H1 per page)
- Adds contextual internal linking via `RelatedLinks`
- Includes SEO-optimized breadcrumbs

### H1 Mapping
H1 tags are automatically generated using the `getOptimizedH1` function:

```typescript
const h1Map: Record<string, string> = {
  '/': 'AI Marketing Solutions That Drive Real Business Growth',
  '/contact': 'Contact Digital Frontier for Free Marketing Consultation',
  // ... 60 characters exactly for each route
};
```

## Validation Tools

### Quick Compliance Check
Run the SEO audit to validate all requirements:

```bash
node tools/seo-audit/run-audit.js
```

### Automated Validation
The `validateSEOCompliance` function checks:
- Exact character lengths
- Action-oriented language in descriptions
- Keyword presence and distribution

### CI/CD Integration
SEO compliance is validated in the build process to prevent regressions.

## Keyword Strategy

### Keyword Distribution Requirements
For each page, target keywords must appear in:
1. **Title** (front-loaded)
2. **Meta Description** (naturally integrated)
3. **H1** (primary keywords)
4. **First Paragraph** (within first 100 words)
5. **Last Paragraph** (summary/conclusion)

### Keyword Research Process
1. Identify primary keyword for each page
2. Research related semantic terms
3. Analyze search intent and user journey
4. Optimize content for featured snippets and AI responses

## Content Optimization Guidelines

### Title Optimization
- Lead with primary keyword
- Include location (Memphis) when relevant
- Add brand when space allows: "Primary Topic | Digital Frontier"
- Avoid articles (a, an, the) at the beginning

### Meta Description Best Practices
- Start with benefit or solution
- Include primary keyword naturally
- End with clear call-to-action
- Use active voice and present tense
- Address user intent directly

### H1 Best Practices
- Mirror title keywords but not identical
- Plain text only (no HTML formatting)
- Descriptive of page content
- Avoid duplication with content H1s

## Internal Linking Strategy

### Link Architecture
- **Homepage**: Links to all primary service pages
- **Service Pages**: Link to related services and contact
- **Blog Posts**: Link to relevant services and related articles
- **Support Pages**: Link to main services and contact

### Contextual Linking Rules
- Use descriptive anchor text that explains destination
- Link to pages that provide additional value to user
- Maintain natural reading flow
- Avoid over-optimization (max 3-5 links per 500 words)

### Breadcrumb Navigation
Implemented via `SEOBreadcrumbs` component:
- Structured data markup for search engines
- Clear navigation hierarchy
- Accessible for screen readers

## Performance Monitoring

### SEO Metrics to Track
- Organic traffic growth
- Keyword ranking positions
- Featured snippet captures
- Page load speed (Core Web Vitals)
- Internal link click-through rates

### Regular Audits
- Monthly SEO compliance check
- Quarterly keyword performance review
- Semi-annual content gap analysis
- Annual technical SEO audit

## Override System

### Page-Level Overrides
For special cases, override default SEO tags:

```typescript
// In page component
<SEOHead 
  path={currentPath}
  title="Custom Title Exactly Sixty Characters Long Here"
  description="Custom description between 155-160 characters with specific requirements for this page only."
/>
```

### Emergency Rollback
If SEO changes cause issues:
1. Revert `ROUTE_CONFIGS` changes
2. Clear CDN cache
3. Submit updated sitemap to search engines
4. Monitor rankings for 48-72 hours

## Compliance Checklist

### Pre-Launch Validation
- [ ] All titles exactly 60 characters
- [ ] All descriptions 155-160 characters
- [ ] Single H1 per page with target keywords
- [ ] Keywords in first and last paragraphs
- [ ] Internal links use descriptive anchor text
- [ ] All pages accessible within 3 clicks
- [ ] Sitemap updated with correct domain
- [ ] Schema markup implemented
- [ ] Core Web Vitals optimized

### Post-Launch Monitoring
- [ ] Search Console coverage report clean
- [ ] No duplicate title/description tags
- [ ] Internal links functioning correctly
- [ ] Page speed within acceptable ranges
- [ ] Mobile usability issues resolved

## Troubleshooting

### Common Issues
1. **Title/Description Truncation**: Check exact character counts
2. **Multiple H1s**: Review page components for duplicate headings
3. **Generic Anchor Text**: Update internal links with descriptive text
4. **Deep Page Access**: Add navigation links to reduce click depth
5. **Missing Keywords**: Ensure keywords appear in all required locations

### Resolution Process
1. Identify issue using audit tools
2. Update `ROUTE_CONFIGS` or page components
3. Validate changes with compliance check
4. Deploy and monitor search performance
5. Document changes for future reference

This governance system ensures consistent, high-quality SEO implementation across all Digital Frontier web properties.