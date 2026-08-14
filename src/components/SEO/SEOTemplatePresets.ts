import type { SEOBuilderConfig } from './SEOTemplateBuilder';

/**
 * Quick Setup Templates for Common Configurations
 */
export const LuxuryTemplatePresets = {
  // Boutique Marketing Agency
  boutiqueMarketing: (currentPath: string, location?: string): SEOBuilderConfig => ({
    pageType: 'home',
    currentPath,
    brandTier: 'boutique',
    serviceCategory: 'marketing',
    clientType: 'luxury-brands',
    location
  }),

  // Premium Consulting Firm
  premiumConsulting: (currentPath: string, location?: string): SEOBuilderConfig => ({
    pageType: 'home',
    currentPath,
    brandTier: 'premium',
    serviceCategory: 'consulting',
    clientType: 'enterprise',
    location
  }),

  // Luxury Brand Agency
  luxuryBrandAgency: (currentPath: string, industry: NonNullable<SEOBuilderConfig['industry']>, location?: string): SEOBuilderConfig => ({
    pageType: 'home',
    currentPath,
    brandTier: 'luxury',
    serviceCategory: 'marketing',
    clientType: 'luxury-brands',
    industry,
    location
  }),

  // Elite Strategy Consultancy
  eliteStrategy: (currentPath: string, location?: string): SEOBuilderConfig => ({
    pageType: 'home',
    currentPath,
    brandTier: 'elite',
    serviceCategory: 'strategy',
    clientType: 'high-net-worth',
    location
  })
};
