import { describe, it, expect } from 'vitest';
import { ROUTE_CONFIGS } from '@/utils/seo';

describe('Sitemap Validation Tests', () => {
  it('should have canonical URLs in sitemap', () => {
    ROUTE_CONFIGS.forEach(route => {
      expect(route.path).not.toMatch(/\/$/); // No trailing slashes except root
      expect(route.priority).toBeGreaterThan(0);
      expect(route.priority).toBeLessThanOrEqual(1.0);
      expect(['daily', 'weekly', 'monthly', 'yearly']).toContain(route.changeFreq);
    });
  });

  it('should have proper route configuration structure', () => {
    expect(ROUTE_CONFIGS.length).toBeGreaterThan(0);
    ROUTE_CONFIGS.forEach(route => {
      expect(route).toHaveProperty('path');
      expect(route).toHaveProperty('title');
      expect(route).toHaveProperty('description');
      expect(route).toHaveProperty('priority');
      expect(route).toHaveProperty('changeFreq');
    });
  });

  it('should have home page with highest priority', () => {
    const homePage = ROUTE_CONFIGS.find(route => route.path === '/');
    expect(homePage).toBeDefined();
    expect(homePage?.priority).toBe(1.0);
  });
});