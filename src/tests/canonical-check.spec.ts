import { describe, it, expect } from 'vitest';
import { ROUTE_CONFIGS, getCanonicalUrl, normalizeUrl } from '@/utils/seo';

describe('Canonical URL Tests', () => {
  it('should generate correct canonical URLs for all routes', () => {
    ROUTE_CONFIGS.forEach(route => {
      const canonical = getCanonicalUrl(route.path);
      expect(canonical).toBe(`https://digitalfrontier.app${route.path}`);
      expect(canonical).not.toContain('www.');
      expect(canonical).not.toMatch(/\/$/); // No trailing slash for any URLs
    });
  });

  it('should normalize URLs correctly', () => {
    expect(normalizeUrl('https://www.digitalfrontier.app/about-us/')).toBe('https://digitalfrontier.app/about-us');
    expect(normalizeUrl('HTTP://digitalfrontier.app/BLOG/')).toBe('https://digitalfrontier.app/blog');
    expect(normalizeUrl('https://digitalfrontier.app?utm_source=google')).toBe('https://digitalfrontier.app');
  });

  it('should handle edge cases in URL normalization', () => {
    expect(normalizeUrl('/')).toBe('https://digitalfrontier.app');
    expect(normalizeUrl('')).toBe('https://digitalfrontier.app');
    expect(normalizeUrl('/About-Us')).toBe('https://digitalfrontier.app/about-us');
  });
});