/**
 * SEO Validation Utilities
 * Ensures titles, descriptions, and content meet SEO best practices
 */

export interface SEOValidationResult {
  valid: boolean;
  truncated?: string;
  warnings: string[];
  errors: string[];
}

/**
 * Validate and truncate title to SEO-optimal length (30-60 chars)
 */
export function validateTitle(title: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];
  let truncated = title;

  if (!title || title.trim() === '') {
    errors.push('Title is missing or empty');
    return { valid: false, warnings, errors };
  }

  const length = title.length;

  if (length < 30) {
    warnings.push(`Title is too short (${length} chars). Aim for 30-60 characters.`);
  } else if (length > 60) {
    warnings.push(`Title is too long (${length} chars). Truncating to 60 characters.`);
    truncated = title.substring(0, 57) + '...';
  }

  return {
    valid: errors.length === 0,
    truncated,
    warnings,
    errors
  };
}

/**
 * Validate and truncate description to SEO-optimal length (120-155 chars)
 */
export function validateDescription(description: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];
  let truncated = description;

  if (!description || description.trim() === '') {
    errors.push('Description is missing or empty');
    return { valid: false, warnings, errors };
  }

  const length = description.length;

  if (length < 120) {
    warnings.push(`Description is too short (${length} chars). Aim for 120-155 characters.`);
  } else if (length > 155) {
    warnings.push(`Description is too long (${length} chars). Truncating to 155 characters.`);
    truncated = description.substring(0, 152) + '...';
  }

  return {
    valid: errors.length === 0,
    truncated,
    warnings,
    errors
  };
}

/**
 * Count H1 tags in HTML string
 */
export function countH1Tags(html: string): number {
  const h1Matches = html.match(/<h1[^>]*>/gi);
  return h1Matches ? h1Matches.length : 0;
}

/**
 * Validate canonical URL format
 */
export function validateCanonicalUrl(url: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!url) {
    errors.push('Canonical URL is missing');
    return { valid: false, warnings, errors };
  }

  // Must be absolute URL with HTTPS
  if (!url.startsWith('https://')) {
    errors.push('Canonical URL must use HTTPS protocol');
  }

  // Must include domain
  if (!url.includes('digitalfrontier.app')) {
    errors.push('Canonical URL must use digitalfrontier.app domain');
  }

  // Check for trailing slash consistency
  if (url.endsWith('/') && url !== 'https://digitalfrontier.app/') {
    warnings.push('Consider removing trailing slash for consistency');
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors
  };
}

/**
 * Validate image alt text
 */
export function validateAltText(altText: string, context?: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!altText || altText.trim() === '') {
    errors.push('Alt text is missing');
    return { valid: false, warnings, errors };
  }

  const length = altText.length;

  if (length < 5) {
    warnings.push('Alt text is too short. Provide more descriptive text.');
  }

  if (length > 125) {
    warnings.push('Alt text is too long. Keep it under 125 characters.');
  }

  // Check for spammy keywords
  if (altText.toLowerCase().includes('click here') || altText.toLowerCase().includes('image of')) {
    warnings.push('Avoid phrases like "click here" or "image of" in alt text');
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors
  };
}

/**
 * Validate Open Graph URL matches canonical
 */
export function validateOgUrl(ogUrl: string, canonicalUrl: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!ogUrl) {
    errors.push('og:url is missing');
    return { valid: false, warnings, errors };
  }

  if (ogUrl !== canonicalUrl) {
    errors.push(`og:url (${ogUrl}) does not match canonical URL (${canonicalUrl})`);
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors
  };
}

/**
 * Generate SEO-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Validate internal link structure
 */
export function validateInternalLink(href: string): SEOValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!href) {
    errors.push('Link href is missing');
    return { valid: false, warnings, errors };
  }

  // Check for redirect patterns
  if (href.includes('http://')) {
    errors.push('Internal link uses HTTP instead of HTTPS');
  }

  // Check for external domains
  if (href.includes('digitalfrontier.ai')) {
    errors.push('Link uses old domain digitalfrontier.ai instead of digitalfrontier.app');
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors
  };
}
