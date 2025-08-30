/**
 * SEO Validator - Validates SEO elements against best practices
 */

import { SEOAnalysis } from './analyzer';

export interface SEOViolation {
  type: 'title' | 'meta_description' | 'h1' | 'internal_links' | 'keywords' | 'content';
  severity: 'critical' | 'warning' | 'info';
  message: string;
  current: string | number;
  expected: string | number;
}

export interface SEOValidation {
  url: string;
  compliant: boolean;
  violations: SEOViolation[];
  score: number; // 0-100
}

export interface SEOConfig {
  TITLE_LEN: number;
  META_DESC_LEN: number;
  H1_LEN: number;
  PRIMARY_LANG: string;
  CANONICAL_BRAND: string;
  SITE_URL: string;
}

/**
 * Validate SEO analysis against configuration
 */
export function validateSEO(analysis: SEOAnalysis, config: SEOConfig): SEOValidation {
  const violations: SEOViolation[] = [];
  
  // Validate title
  validateTitle(analysis, config, violations);
  
  // Validate meta description
  validateMetaDescription(analysis, config, violations);
  
  // Validate H1 tags
  validateH1Tags(analysis, config, violations);
  
  // Validate internal linking
  validateInternalLinks(analysis, violations);
  
  // Validate keyword integration
  validateKeywords(analysis, violations);
  
  // Calculate compliance score
  const score = calculateSEOScore(violations);
  const compliant = violations.filter(v => v.severity === 'critical').length === 0;
  
  return {
    url: analysis.url,
    compliant,
    violations,
    score
  };
}

/**
 * Validate title tag
 */
function validateTitle(analysis: SEOAnalysis, config: SEOConfig, violations: SEOViolation[]) {
  // Check if title exists
  if (!analysis.title) {
    violations.push({
      type: 'title',
      severity: 'critical',
      message: 'Missing title tag',
      current: '',
      expected: `Title with ${config.TITLE_LEN} characters`
    });
    return;
  }
  
  // Check title length
  if (analysis.titleLength !== config.TITLE_LEN) {
    violations.push({
      type: 'title',
      severity: analysis.titleLength > config.TITLE_LEN ? 'critical' : 'warning',
      message: `Title length must be exactly ${config.TITLE_LEN} characters`,
      current: analysis.titleLength,
      expected: config.TITLE_LEN
    });
  }
  
  // Check for brand inclusion
  if (!analysis.title.toLowerCase().includes(config.CANONICAL_BRAND.toLowerCase().split(' ')[0])) {
    violations.push({
      type: 'title',
      severity: 'warning',
      message: 'Title should include brand name',
      current: analysis.title,
      expected: `Title with \\"${config.CANONICAL_BRAND}\\"`
    });
  }
  
  // Check for keyword front-loading (simple check)
  const firstWords = analysis.title.split(' ').slice(0, 3).join(' ').toLowerCase();
  if (firstWords.includes('the ') || firstWords.includes('a ') || firstWords.includes('an ')) {
    violations.push({
      type: 'title',
      severity: 'info',
      message: 'Consider front-loading primary keywords instead of articles',
      current: analysis.title,
      expected: 'Primary keyword at the start of title'
    });
  }
}

/**
 * Validate meta description
 */
function validateMetaDescription(analysis: SEOAnalysis, config: SEOConfig, violations: SEOViolation[]) {
  // Check if meta description exists
  if (!analysis.metaDescription) {
    violations.push({
      type: 'meta_description',
      severity: 'critical',
      message: 'Missing meta description',
      current: '',
      expected: `Meta description with ${config.META_DESC_LEN} characters`
    });
    return;
  }
  
  // Check length (155-160 characters)
  if (analysis.metaDescLength < 155 || analysis.metaDescLength > config.META_DESC_LEN) {
    violations.push({
      type: 'meta_description',
      severity: 'critical',
      message: `Meta description must be 155-${config.META_DESC_LEN} characters`,
      current: analysis.metaDescLength,
      expected: `155-${config.META_DESC_LEN}`
    });
  }
  
  // Check for action-oriented language (CTA)
  const ctaWords = ['get', 'start', 'discover', 'learn', 'explore', 'find', 'try', 'contact', 'schedule', 'book'];
  const hasActionWord = ctaWords.some(word => 
    analysis.metaDescription.toLowerCase().includes(word)
  );
  
  if (!hasActionWord) {
    violations.push({
      type: 'meta_description',
      severity: 'warning',
      message: 'Meta description should include action-oriented language/CTA',
      current: analysis.metaDescription,
      expected: 'Description with call-to-action'
    });
  }
}

/**
 * Validate H1 tags
 */
function validateH1Tags(analysis: SEOAnalysis, config: SEOConfig, violations: SEOViolation[]) {
  // Check H1 count
  if (analysis.h1Tags.length === 0) {
    violations.push({
      type: 'h1',
      severity: 'critical',
      message: 'Missing H1 tag',
      current: 0,
      expected: 1
    });
    return;
  }
  
  if (analysis.h1Tags.length > 1) {
    violations.push({
      type: 'h1',
      severity: 'critical',
      message: `Multiple H1 tags found (${analysis.h1Tags.length}). Must have exactly 1.`,
      current: analysis.h1Tags.length,
      expected: 1
    });
  }
  
  // Check H1 length
  const h1Length = analysis.h1Lengths[0];
  if (h1Length && h1Length !== config.H1_LEN) {
    violations.push({
      type: 'h1',
      severity: 'critical',
      message: `H1 length must be exactly ${config.H1_LEN} characters`,
      current: h1Length,
      expected: config.H1_LEN
    });
  }
  
  // Check H1 keyword alignment with title
  if (analysis.h1Tags[0] && analysis.title) {
    const h1Words = analysis.h1Tags[0].toLowerCase().split(' ');
    const titleWords = analysis.title.toLowerCase().split(' ');
    const commonWords = h1Words.filter(word => 
      titleWords.includes(word) && word.length > 3
    );
    
    if (commonWords.length < 2) {
      violations.push({
        type: 'h1',
        severity: 'warning',
        message: 'H1 should share key terms with title for keyword alignment',
        current: analysis.h1Tags[0],
        expected: 'H1 with keywords from title'
      });
    }
  }
}

/**
 * Validate internal linking
 */
function validateInternalLinks(analysis: SEOAnalysis, violations: SEOViolation[]) {
  // Check for contextual anchor text
  const genericAnchors = ['click here', 'read more', 'learn more', 'here', 'this', 'link'];
  const badLinks = analysis.internalLinks.filter(link => 
    genericAnchors.some(generic => link.text.toLowerCase().includes(generic))
  );
  
  if (badLinks.length > 0) {
    violations.push({
      type: 'internal_links',
      severity: 'warning',
      message: `Found ${badLinks.length} internal links with generic anchor text`,
      current: badLinks.map(l => l.text).join(', '),
      expected: 'Descriptive, contextual anchor text'
    });
  }
  
  // Check minimum internal links (should have at least 3-5 for good UX)
  if (analysis.internalLinks.length < 3) {
    violations.push({
      type: 'internal_links',
      severity: 'info',
      message: 'Consider adding more internal links for better UX and SEO',
      current: analysis.internalLinks.length,
      expected: '3+ internal links'
    });
  }
}

/**
 * Validate keyword integration
 */
function validateKeywords(analysis: SEOAnalysis, violations: SEOViolation[]) {
  // Check if title keywords appear in first paragraph
  if (analysis.title && analysis.firstParagraph) {
    const titleKeywords = extractMainKeywords(analysis.title);
    const firstParaHasKeywords = titleKeywords.some(keyword => 
      analysis.firstParagraph.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (!firstParaHasKeywords) {
      violations.push({
        type: 'keywords',
        severity: 'warning',
        message: 'First paragraph should include keywords from title',
        current: analysis.firstParagraph.substring(0, 100) + '...',
        expected: 'First paragraph with title keywords'
      });
    }
  }
  
  // Check if keywords appear in last paragraph
  if (analysis.title && analysis.lastParagraph) {
    const titleKeywords = extractMainKeywords(analysis.title);
    const lastParaHasKeywords = titleKeywords.some(keyword => 
      analysis.lastParagraph.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (!lastParaHasKeywords) {
      violations.push({
        type: 'keywords',
        severity: 'info',
        message: 'Last paragraph should include keywords from title',
        current: analysis.lastParagraph.substring(0, 100) + '...',
        expected: 'Last paragraph with title keywords'
      });
    }
  }
}

/**
 * Extract main keywords from title (simple implementation)
 */
function extractMainKeywords(title: string): string[] {
  // Remove brand and common words, keep meaningful keywords
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'digital', 'frontier', 'company'];
  
  return title.toLowerCase()
    .replace(/[^\\w\\s]/g, ' ')
    .split(/\\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word))
    .slice(0, 3); // Take top 3 keywords
}

/**
 * Calculate SEO score based on violations
 */
function calculateSEOScore(violations: SEOViolation[]): number {
  let score = 100;
  
  violations.forEach(violation => {
    switch (violation.severity) {
      case 'critical':
        score -= 20;
        break;
      case 'warning':
        score -= 10;
        break;
      case 'info':
        score -= 5;
        break;
    }
  });
  
  return Math.max(0, score);
}
