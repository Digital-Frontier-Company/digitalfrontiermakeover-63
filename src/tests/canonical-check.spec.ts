import { describe, it, expect } from 'vitest';
import { ROUTE_CONFIGS, getCanonicalUrl, normalizeUrl } from '@/utils/seo';

describe('Canonical URL Tests', () => {
  it('should generate correct canonical URLs for all routes', () => {
    ROUTE_CONFIGS.forEach(route => {
      const canonical = getCanonicalUrl(route.path);
      expect(canonical).toBe(`https://thedigitalfrontier.ai${route.path}`);
      expect(canonical).not.toContain('www.');
      expect(canonical).not.toMatch(/\/$/); // No trailing slash for any URLs
    });
  });

  it('should normalize URLs correctly', () => {
    expect(normalizeUrl('https://www.thedigitalfrontier.ai/about-us/')).toBe('https://thedigitalfrontier.ai/about-us');
    expect(normalizeUrl('HTTP://thedigitalfrontier.ai/BLOG/')).toBe('https://thedigitalfrontier.ai/blog');
    expect(normalizeUrl('https://thedigitalfrontier.ai?utm_source=google')).toBe('https://thedigitalfrontier.ai');
  });

  it('should handle edge cases in URL normalization', () => {
    expect(normalizeUrl('/')).toBe('https://thedigitalfrontier.ai');
    expect(normalizeUrl('')).toBe('https://thedigitalfrontier.ai');
    expect(normalizeUrl('/About-Us')).toBe('https://thedigitalfrontier.ai/about-us');
  });
});