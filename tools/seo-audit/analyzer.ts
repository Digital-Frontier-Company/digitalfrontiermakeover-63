/**
 * SEO Page Analyzer - Extracts and analyzes SEO elements from pages
 */

import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export interface SEOAnalysis {
  url: string;
  title: string;
  titleLength: number;
  metaDescription: string;
  metaDescLength: number;
  h1Tags: string[];
  h1Lengths: number[];
  h2Tags: string[];
  internalLinks: { text: string; href: string; }[];
  externalLinks: { text: string; href: string; }[];
  contentText: string;
  firstParagraph: string;
  lastParagraph: string;
  keywords: string[];
  issues: string[];
}

/**
 * Analyze a single page for SEO elements
 */
export async function analyzePage(url: string): Promise<SEOAnalysis> {
  console.log(`Analyzing: ${url}`);
  
  try {
    // For local development, we'll analyze the static structure
    if (url.includes('localhost') || url.includes('lovable')) {
      return analyzeLocalPage(url);
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit-Bot/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    return parsePageHTML(url, html);
    
  } catch (error) {
    console.warn(`Could not fetch ${url}:`, error);
    return createEmptyAnalysis(url, error.message);
  }
}

/**
 * Analyze local development page using route configs
 */
function analyzeLocalPage(url: string): SEOAnalysis {
  // Extract path from URL
  const urlObj = new URL(url);
  const path = urlObj.pathname;
  
  // This would normally fetch from ROUTE_CONFIGS, but for now we'll simulate
  const mockAnalysis: SEOAnalysis = {
    url,
    title: 'Mock Title for Local Analysis',
    titleLength: 30,
    metaDescription: 'Mock meta description for local development testing',
    metaDescLength: 55,
    h1Tags: ['Mock H1 Heading'],
    h1Lengths: [16],
    h2Tags: ['Mock H2 Heading'],
    internalLinks: [],
    externalLinks: [],
    contentText: 'Mock content text for analysis',
    firstParagraph: 'First paragraph with keywords',
    lastParagraph: 'Last paragraph with keywords',
    keywords: ['mock', 'keywords'],
    issues: ['Local development - using mock data']
  };
  
  return mockAnalysis;
}

/**
 * Parse HTML and extract SEO elements
 */
function parsePageHTML(url: string, html: string): SEOAnalysis {
  const $ = cheerio.load(html);
  const issues: string[] = [];
  
  // Extract title
  const title = $('title').first().text().trim();
  const titleLength = countUnicodeCharacters(title);
  
  // Extract meta description
  const metaDescription = $('meta[name="description"]').attr('content')?.trim() || '';
  const metaDescLength = countUnicodeCharacters(metaDescription);
  
  // Extract H1 tags
  const h1Tags: string[] = [];
  const h1Lengths: number[] = [];
  $('h1').each((_, element) => {
    const text = $(element).text().trim();
    h1Tags.push(text);
    h1Lengths.push(countUnicodeCharacters(text));
  });
  
  // Extract H2 tags
  const h2Tags: string[] = [];
  $('h2').each((_, element) => {
    h2Tags.push($(element).text().trim());
  });
  
  // Extract internal and external links
  const internalLinks: { text: string; href: string; }[] = [];
  const externalLinks: { text: string; href: string; }[] = [];
  
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    const text = $(element).text().trim();
    
    if (href && text) {
      if (href.startsWith('/') || href.includes('digitalfrontier.app')) {
        internalLinks.push({ text, href });
      } else if (href.startsWith('http')) {
        externalLinks.push({ text, href });
      }
    }
  });
  
  // Extract content and paragraphs
  const contentText = $('body').text().replace(/\s+/g, ' ').trim();
  const paragraphs = $('p').map((_, el) => $(el).text().trim()).get().filter(p => p.length > 50);
  const firstParagraph = paragraphs[0] || '';
  const lastParagraph = paragraphs[paragraphs.length - 1] || '';
  
  // Extract basic keywords (simple implementation)
  const keywords = extractKeywords(contentText);
  
  // Identify issues
  if (!title) issues.push('Missing title tag');
  if (!metaDescription) issues.push('Missing meta description');
  if (h1Tags.length === 0) issues.push('Missing H1 tag');
  if (h1Tags.length > 1) issues.push(`Multiple H1 tags found: ${h1Tags.length}`);
  
  return {
    url,
    title,
    titleLength,
    metaDescription,
    metaDescLength,
    h1Tags,
    h1Lengths,
    h2Tags,
    internalLinks,
    externalLinks,
    contentText: contentText.substring(0, 1000), // Truncate for storage
    firstParagraph,
    lastParagraph,
    keywords,
    issues
  };
}

/**
 * Count Unicode characters (grapheme clusters) excluding HTML tags
 */
function countUnicodeCharacters(text: string): number {
  if (!text) return 0;
  
  // Remove HTML tags
  const cleanText = text.replace(/<[^>]*>/g, '');
  
  // Normalize whitespace
  const normalizedText = cleanText.replace(/\s+/g, ' ').trim();
  
  // Count grapheme clusters (handles emojis, accented characters, etc.)
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
  return Array.from(segmenter.segment(normalizedText)).length;
}

/**
 * Simple keyword extraction (can be enhanced with NLP)
 */
function extractKeywords(text: string): string[] {
  if (!text) return [];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  // Count word frequency
  const wordCount = new Map<string, number>();
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  // Return top 10 most frequent words
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
}

/**
 * Create empty analysis for failed requests
 */
function createEmptyAnalysis(url: string, error: string): SEOAnalysis {
  return {
    url,
    title: '',
    titleLength: 0,
    metaDescription: '',
    metaDescLength: 0,
    h1Tags: [],
    h1Lengths: [],
    h2Tags: [],
    internalLinks: [],
    externalLinks: [],
    contentText: '',
    firstParagraph: '',
    lastParagraph: '',
    keywords: [],
    issues: [`Failed to analyze: ${error}`]
  };
}