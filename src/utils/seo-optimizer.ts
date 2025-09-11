/**
 * SEO Optimization Utilities
 * Based on audit template requirements for optimal SEO performance
 */

import { ROUTE_CONFIGS } from './seo';

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  h1Length: number;
  isOptimal: boolean;
  suggestions: string[];
}

export interface OptimizedContent {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
}

/**
 * Audit content for SEO compliance based on template requirements
 */
export function auditContent(title: string, description: string): SEOMetrics {
  const titleLength = title.length;
  const descriptionLength = description.length;
  const h1Length = title.replace(/\s*\|\s*Digital Frontier.*$/, '').length;
  
  const suggestions: string[] = [];
  
  // Title audit (45-60 chars)
  if (titleLength < 45) {
    suggestions.push(`Title too short (${titleLength} chars). Should be 45-60 characters.`);
  } else if (titleLength > 60) {
    suggestions.push(`Title too long (${titleLength} chars). Should be 45-60 characters.`);
  }
  
  // Description audit (120-160 chars)
  if (descriptionLength < 120) {
    suggestions.push(`Meta description too short (${descriptionLength} chars). Should be 120-160 characters.`);
  } else if (descriptionLength > 160) {
    suggestions.push(`Meta description too long (${descriptionLength} chars). Should be 120-160 characters.`);
  }
  
  // H1 audit (max 60 chars)
  if (h1Length > 60) {
    suggestions.push(`H1 too long (${h1Length} chars). Should be maximum 60 characters.`);
  }
  
  const isOptimal = suggestions.length === 0;
  
  return {
    titleLength,
    descriptionLength,
    h1Length,
    isOptimal,
    suggestions
  };
}

/**
 * Optimize content to meet SEO standards
 */
export function optimizeContent(title: string, description: string, keywords?: string): OptimizedContent {
  return {
    title: optimizeTitle(title),
    description: optimizeDescription(description),
    h1: optimizeH1(title),
    keywords: extractKeywords(title, description, keywords)
  };
}

/**
 * Optimize title for 45-60 character range
 */
export function optimizeTitle(title: string): string {
  const MIN_LENGTH = 45;
  const MAX_LENGTH = 60;
  const BRAND = 'Digital Frontier';
  
  // Remove existing brand suffix
  const titleWithoutBrand = title.replace(/\s*\|\s*Digital Frontier.*$/, '').trim();
  
  // If already optimal, return as-is
  if (title.length >= MIN_LENGTH && title.length <= MAX_LENGTH) {
    return title;
  }
  
  // If too long, truncate and add brand
  if (title.length > MAX_LENGTH) {
    const maxContentLength = MAX_LENGTH - BRAND.length - 3; // " | "
    const truncated = titleWithoutBrand.substring(0, maxContentLength).trim();
    return `${truncated} | ${BRAND}`;
  }
  
  // If too short, enhance with descriptive terms
  if (!title.includes(BRAND)) {
    const withBrand = `${titleWithoutBrand} | ${BRAND}`;
    if (withBrand.length <= MAX_LENGTH) {
      return withBrand;
    }
  }
  
  // Add power words for short titles
  const powerWords = ['Expert', 'Professional', 'Complete', 'Advanced', 'Proven'];
  for (const word of powerWords) {
    const enhanced = `${word} ${titleWithoutBrand} | ${BRAND}`;
    if (enhanced.length >= MIN_LENGTH && enhanced.length <= MAX_LENGTH) {
      return enhanced;
    }
  }
  
  return title; // Fallback
}

/**
 * Optimize description for 120-160 character range
 */
export function optimizeDescription(description: string): string {
  const MIN_LENGTH = 120;
  const MAX_LENGTH = 160;
  
  // If already optimal, return as-is
  if (description.length >= MIN_LENGTH && description.length <= MAX_LENGTH) {
    return description;
  }
  
  // If too long, truncate intelligently
  if (description.length > MAX_LENGTH) {
    const truncated = description.substring(0, MAX_LENGTH - 3);
    // Try to end at a word boundary
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > MAX_LENGTH - 20) {
      return truncated.substring(0, lastSpace) + '...';
    }
    return truncated + '...';
  }
  
  // If too short, add compelling CTAs
  const ctas = [
    ' Get started today.',
    ' Contact us for expert consultation.',
    ' Learn proven strategies.',
    ' Schedule free consultation.',
    ' Transform your results now.',
    ' Expert solutions available.',
    ' Professional guidance included.'
  ];
  
  for (const cta of ctas) {
    const extended = description + cta;
    if (extended.length >= MIN_LENGTH && extended.length <= MAX_LENGTH) {
      return extended;
    }
  }
  
  return description; // Fallback
}

/**
 * Generate optimized H1 (max 60 characters)
 */
export function optimizeH1(title: string): string {
  const MAX_LENGTH = 60;
  
  // Remove brand from H1
  const h1 = title.replace(/\s*\|\s*Digital Frontier.*$/, '').trim();
  
  if (h1.length <= MAX_LENGTH) {
    return h1;
  }
  
  // Truncate at word boundary
  const truncated = h1.substring(0, MAX_LENGTH);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > MAX_LENGTH - 10) {
    return h1.substring(0, lastSpace);
  }
  
  return truncated;
}

/**
 * Extract and optimize keywords
 */
export function extractKeywords(title: string, description: string, existing?: string): string[] {
  const keywords = new Set<string>();
  
  // Add existing keywords
  if (existing) {
    existing.split(',').forEach(kw => keywords.add(kw.trim().toLowerCase()));
  }
  
  // Extract from title and description
  const text = `${title} ${description}`.toLowerCase();
  const words = text.match(/\b[a-z]{3,}\b/g) || [];
  
  // Common marketing keywords to prioritize
  const marketingTerms = [
    'ai', 'marketing', 'seo', 'optimization', 'content', 'strategy',
    'digital', 'engine', 'search', 'agency', 'services', 'memphis',
    'aeo', 'geo', 'automation', 'analytics', 'campaigns', 'growth'
  ];
  
  // Add relevant marketing terms found in content
  marketingTerms.forEach(term => {
    if (text.includes(term)) {
      keywords.add(term);
    }
  });
  
  // Add most frequent non-common words
  const wordFreq: Record<string, number> = {};
  words.forEach(word => {
    if (word.length > 3 && !isCommonWord(word)) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
  });
  
  Object.entries(wordFreq)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .forEach(([word]) => keywords.add(word));
  
  return Array.from(keywords).slice(0, 10);
}

/**
 * Check if word is common/stop word
 */
function isCommonWord(word: string): boolean {
  const commonWords = [
    'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had',
    'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his',
    'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'who', 'boy',
    'did', 'use', 'way', 'she', 'many', 'oil', 'sit', 'set', 'run', 'eat',
    'far', 'sea', 'eye', 'ask', 'own', 'say', 'too', 'any', 'try', 'let'
  ];
  
  return commonWords.includes(word.toLowerCase());
}

/**
 * Generate internal linking recommendations
 */
export function generateInternalLinkSuggestions(currentPath: string): Array<{
  url: string;
  anchor: string;
  context: string;
  priority: 'high' | 'medium' | 'low';
}> {
  const linkStrategies: Record<string, any[]> = {
    '/': [
      {
        url: '/answer-engine-optimization',
        anchor: 'Answer Engine Optimization Services',
        context: 'Main services section',
        priority: 'high'
      },
      {
        url: '/seo-audit-dashboard',
        anchor: 'Free SEO Audit Tool',
        context: 'CTA section',
        priority: 'high'
      }
    ],
    '/answer-engine-optimization': [
      {
        url: '/generative-engine-optimization',
        anchor: 'Generative Engine Optimization',
        context: 'Related services',
        priority: 'high'
      },
      {
        url: '/ai-prompt-templates',
        anchor: 'AI Prompt Templates',
        context: 'Resources section',
        priority: 'medium'
      }
    ]
  };
  
  return linkStrategies[currentPath] || [];
}

/**
 * Validate structured data compliance
 */
export function validateStructuredData(schemas: any[]): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  schemas.forEach((schema, index) => {
    if (!schema['@context']) {
      errors.push(`Schema ${index}: Missing @context`);
    }
    
    if (!schema['@type']) {
      errors.push(`Schema ${index}: Missing @type`);
    }
    
    if (schema['@type'] === 'Organization' && !schema.name) {
      errors.push(`Schema ${index}: Organization missing name`);
    }
    
    if (schema['@type'] === 'Article' && !schema.headline) {
      warnings.push(`Schema ${index}: Article missing headline`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

export default {
  auditContent,
  optimizeContent,
  optimizeTitle,
  optimizeDescription,
  optimizeH1,
  extractKeywords,
  generateInternalLinkSuggestions,
  validateStructuredData
};