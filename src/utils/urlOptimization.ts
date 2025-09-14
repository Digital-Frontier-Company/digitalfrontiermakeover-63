/**
 * URL Optimization and Validation Utilities
 * Comprehensive URL audit and optimization tools for Digital Frontier
 */

export interface URLAuditResult {
  url: string;
  status: 'valid' | 'redirect' | 'broken' | 'optimized';
  issues: string[];
  recommendations: string[];
  seo: {
    title?: string;
    description?: string;
    h1?: string;
    canonical?: string;
  };
}

export interface ImageAuditResult {
  src: string;
  status: 'valid' | 'optimized' | 'broken' | 'redirect';
  issues: string[];
  recommendations: string[];
  optimization: {
    format?: 'webp' | 'avif' | 'jpg' | 'png';
    dimensions?: { width: number; height: number };
    altText?: string;
    loading?: 'lazy' | 'eager';
  };
}

/**
 * Validates and optimizes image URLs across the application
 */
export function auditImageURLs(htmlContent: string): ImageAuditResult[] {
  const imageRegex = /<img[^>]*src=["']([^"']*?)["'][^>]*>/gi;
  const results: ImageAuditResult[] = [];
  let match;

  while ((match = imageRegex.exec(htmlContent)) !== null) {
    const src = match[1];
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for absolute URLs that should be relative
    if (src.includes('digitalfrontier.app/lovable-uploads') || src.includes('www.digitalfrontier.app')) {
      issues.push('Using absolute URL instead of relative path');
      recommendations.push('Use relative path like /lovable-uploads/...');
    }

    // Check for S3 URLs that should be migrated
    if (src.includes('cm4-production-assets.s3.amazonaws.com')) {
      issues.push('Using deprecated S3 URL');
      recommendations.push('Migrate to /lovable-uploads/ path');
    }

    // Check for missing alt text
    const imgTag = match[0];
    if (!imgTag.includes('alt=')) {
      issues.push('Missing alt text for accessibility');
      recommendations.push('Add descriptive alt text');
    }

    results.push({
      src,
      status: issues.length > 0 ? 'broken' : 'valid',
      issues,
      recommendations,
      optimization: {
        format: 'webp',
        loading: 'lazy'
      }
    });
  }

  return results;
}

/**
 * Validates URLs for SEO compliance and redirects
 */
export function auditPageURLs(urls: string[]): URLAuditResult[] {
  const results: URLAuditResult[] = [];

  for (const url of urls) {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for www in URLs
    if (url.includes('www.digitalfrontier.app')) {
      issues.push('Contains www subdomain');
      recommendations.push('Remove www from URL');
    }

    // Check for trailing slashes
    if (url.endsWith('/') && url !== '/') {
      issues.push('Contains trailing slash');
      recommendations.push('Remove trailing slash');
    }

    // Check for proper HTTPS
    if (url.startsWith('http://')) {
      issues.push('Using HTTP instead of HTTPS');
      recommendations.push('Use HTTPS protocol');
    }

    results.push({
      url,
      status: issues.length > 0 ? 'broken' : 'valid',
      issues,
      recommendations,
      seo: {}
    });
  }

  return results;
}

/**
 * Generates optimized image URLs with proper formatting and CDN optimization
 */
export function optimizeImageURL(originalUrl: string): string {
  // Convert absolute URLs to relative for consistent serving
  if (originalUrl.includes('digitalfrontier.app/lovable-uploads/')) {
    return originalUrl.replace(/https?:\/\/(www\.)?digitalfrontier\.app/, '');
  }

  // Convert deprecated S3 URLs to lovable-uploads
  if (originalUrl.includes('cm4-production-assets.s3.amazonaws.com')) {
    const filename = originalUrl.split('/').pop();
    return `/lovable-uploads/${filename}`;
  }

  // Fix domain inconsistencies - always use digitalfrontier.app
  if (originalUrl.includes('digitalfrontier.ai')) {
    return originalUrl.replace('digitalfrontier.ai', 'digitalfrontier.app');
  }

  return originalUrl;
}

/**
 * Generates SEO-optimized URLs with consistent domain usage
 */
export function optimizePageURL(originalUrl: string): string {
  let optimized = originalUrl;

  // Fix domain inconsistencies - always use digitalfrontier.app
  optimized = optimized.replace(/digitalfrontier\.ai/g, 'digitalfrontier.app');
  
  // Remove www
  optimized = optimized.replace(/https?:\/\/www\./, 'https://');

  // Ensure HTTPS
  optimized = optimized.replace(/^http:\/\//, 'https://');

  // Remove trailing slash for consistency
  if (optimized.endsWith('/') && optimized.length > 1) {
    optimized = optimized.slice(0, -1);
  }

  return optimized;
}

/**
 * Comprehensive URL audit report generator
 */
export function generateURLAuditReport(content: string): {
  images: ImageAuditResult[];
  urls: URLAuditResult[];
  summary: {
    totalImages: number;
    imagesNeedingOptimization: number;
    totalUrls: number;
    urlsNeedingOptimization: number;
    criticalIssues: number;
  };
} {
  const imageResults = auditImageURLs(content);
  const urlMatches = content.match(/https?:\/\/[^\s"'<>]+/g) || [];
  const urlResults = auditPageURLs(urlMatches);

  const summary = {
    totalImages: imageResults.length,
    imagesNeedingOptimization: imageResults.filter(r => r.status === 'broken').length,
    totalUrls: urlResults.length,
    urlsNeedingOptimization: urlResults.filter(r => r.status === 'broken').length,
    criticalIssues: [...imageResults, ...urlResults]
      .reduce((sum, result) => sum + result.issues.length, 0)
  };

  return {
    images: imageResults,
    urls: urlResults,
    summary
  };
}

/**
 * Batch optimize URLs in content
 */
export function batchOptimizeURLs(content: string): string {
  let optimized = content;

  // Fix image URLs
  optimized = optimized.replace(
    /https?:\/\/(www\.)?digitalfrontier\.app\/lovable-uploads\//g,
    '/lovable-uploads/'
  );

  // Fix S3 URLs to lovable-uploads
  optimized = optimized.replace(
    /https?:\/\/cm4-production-assets\.s3\.amazonaws\.com\/[^\/]*\//g,
    '/lovable-uploads/'
  );

  // Fix domain inconsistencies - always use digitalfrontier.app
  optimized = optimized.replace(
    /digitalfrontier\.ai/g,
    'digitalfrontier.app'
  );

  return optimized;
}