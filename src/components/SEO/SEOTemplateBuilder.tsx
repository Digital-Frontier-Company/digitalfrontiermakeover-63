import React from 'react';
import { LuxuryBrandSEO, LuxuryServiceSEO, LuxuryLandingPageSEO, LuxuryContactSEO, LuxuryAboutSEO, LuxuryBlogSEO } from './LuxurySEOTemplates';

/**
 * SEO Template Builder for Luxury Boutique Agencies
 * Comprehensive system for generating sophisticated SEO content
 */

export interface SEOBuilderConfig {
  // Page identification
  pageType: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'landing' | 'product';
  currentPath: string;
  
  // Brand positioning
  brandTier: 'boutique' | 'premium' | 'luxury' | 'elite' | 'bespoke';
  serviceCategory: 'marketing' | 'consulting' | 'design' | 'strategy' | 'development';
  
  // Target audience
  clientType: 'enterprise' | 'high-net-worth' | 'luxury-brands' | 'exclusive' | 'sophisticated';
  industry?: 'real-estate' | 'hospitality' | 'fashion' | 'automotive' | 'jewelry' | 'finance' | 'technology';
  
  // Location & personalization
  location?: string;
  serviceName?: string;
  campaignName?: string;
  
  // Content specifics (for blogs/articles)
  title?: string;
  excerpt?: string;
  category?: string;
  publishedDate?: string;
  modifiedDate?: string;
  
  // Custom overrides
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
}

/**
 * Luxury messaging framework by brand tier
 */
const LUXURY_MESSAGING = {
  boutique: {
    adjectives: ['intimate', 'personalized', 'curated', 'artisanal', 'handcrafted'],
    serviceWords: ['consultation', 'guidance', 'collaboration', 'partnership'],
    outcomes: ['tailored solutions', 'personalized results', 'intimate service', 'curated experience']
  },
  premium: {
    adjectives: ['sophisticated', 'elevated', 'distinguished', 'refined', 'superior'],
    serviceWords: ['services', 'solutions', 'strategies', 'expertise'],
    outcomes: ['exceptional results', 'elevated performance', 'distinguished outcomes', 'superior achievements']
  },
  luxury: {
    adjectives: ['exclusive', 'opulent', 'prestigious', 'elite', 'extraordinary'],
    serviceWords: ['concierge', 'advisory', 'consultancy', 'stewardship'],
    outcomes: ['extraordinary outcomes', 'exclusive results', 'prestigious achievements', 'opulent success']
  },
  elite: {
    adjectives: ['unparalleled', 'exceptional', 'world-class', 'premier', 'paramount'],
    serviceWords: ['mastery', 'excellence', 'virtuosity', 'expertise'],
    outcomes: ['unparalleled results', 'world-class achievements', 'premier outcomes', 'exceptional success']
  },
  bespoke: {
    adjectives: ['custom-crafted', 'made-to-measure', 'individually-designed', 'uniquely-tailored'],
    serviceWords: ['atelier', 'workshop', 'studio', 'craft'],
    outcomes: ['custom solutions', 'bespoke results', 'individually-crafted outcomes', 'made-to-measure success']
  }
};

/**
 * Industry-specific luxury keywords and messaging
 */
const INDUSTRY_LUXURY_TERMS = {
  'real-estate': {
    keywords: ['luxury properties', 'exclusive listings', 'premier estates', 'high-end real estate'],
    clientTerms: ['property owners', 'real estate investors', 'luxury homeowners', 'estate holders']
  },
  'hospitality': {
    keywords: ['luxury hospitality', 'premium resorts', 'boutique hotels', 'exclusive experiences'],
    clientTerms: ['hospitality brands', 'luxury hotels', 'resort operators', 'experience curators']
  },
  'fashion': {
    keywords: ['haute couture', 'luxury fashion', 'designer brands', 'exclusive collections'],
    clientTerms: ['fashion houses', 'luxury designers', 'couture brands', 'style innovators']
  },
  'automotive': {
    keywords: ['luxury vehicles', 'premium automobiles', 'exotic cars', 'prestige automotive'],
    clientTerms: ['automotive brands', 'luxury dealers', 'prestige manufacturers', 'exotic car collectors']
  },
  'jewelry': {
    keywords: ['fine jewelry', 'luxury timepieces', 'precious stones', 'exclusive collections'],
    clientTerms: ['jewelry houses', 'luxury watchmakers', 'fine jewelers', 'gemstone curators']
  },
  'finance': {
    keywords: ['wealth management', 'private banking', 'investment advisory', 'financial stewardship'],
    clientTerms: ['wealth managers', 'private banks', 'investment firms', 'financial advisors']
  },
  'technology': {
    keywords: ['premium technology', 'enterprise solutions', 'sophisticated systems', 'advanced platforms'],
    clientTerms: ['technology leaders', 'enterprise clients', 'innovation pioneers', 'tech visionaries']
  }
};

/**
 * Generate sophisticated title based on configuration
 */
const generateLuxuryTitle = (config: SEOBuilderConfig): string => {
  if (config.customTitle) return config.customTitle;
  
  const tier = config.brandTier;
  const messaging = LUXURY_MESSAGING[tier];
  const industryTerms = config.industry ? INDUSTRY_LUXURY_TERMS[config.industry] : null;
  
  const serviceDisplayName = config.serviceName || `${config.serviceCategory} ${messaging.serviceWords[0]}`;
  const locationSuffix = config.location ? ` in ${config.location}` : '';
  
  switch (config.pageType) {
    case 'home':
      return `${messaging.adjectives[0]} ${serviceDisplayName}${locationSuffix} | Boutique ${config.serviceCategory} Excellence`;
    
    case 'service':
      return `${messaging.adjectives[1]} ${serviceDisplayName}${locationSuffix} | ${messaging.outcomes[0]}`;
    
    case 'about':
      return `About Our ${tier} ${config.serviceCategory} Consultancy | ${messaging.adjectives[2]} Expertise`;
    
    case 'contact':
      return `Contact Our ${tier} Consultancy${locationSuffix} | Exclusive ${messaging.serviceWords[0]}`;
    
    case 'blog':
      return `${config.title} | ${tier} ${config.serviceCategory} Insights & ${messaging.adjectives[0]} Strategies`;
    
    case 'landing':
      return `${config.campaignName} | ${messaging.adjectives[0]} ${serviceDisplayName}${locationSuffix}`;
    
    default:
      return `${messaging.adjectives[0]} ${serviceDisplayName}${locationSuffix} | Boutique Excellence`;
  }
};

/**
 * Generate sophisticated description based on configuration
 */
const generateLuxuryDescription = (config: SEOBuilderConfig): string => {
  if (config.customDescription) return config.customDescription;
  
  const tier = config.brandTier;
  const messaging = LUXURY_MESSAGING[tier];
  const industryTerms = config.industry ? INDUSTRY_LUXURY_TERMS[config.industry] : null;
  
  const serviceDisplayName = config.serviceName || config.serviceCategory;
  const locationContext = config.location ? ` in ${config.location}` : '';
  const clientContext = industryTerms?.clientTerms[0] || `discerning ${config.clientType.replace('-', ' ')} clients`;
  
  switch (config.pageType) {
    case 'home':
      return `Experience ${messaging.adjectives[0]} ${serviceDisplayName.toLowerCase()} services crafted for ${clientContext}${locationContext}. Our boutique approach delivers ${messaging.outcomes[0].toLowerCase()} with ${messaging.adjectives[1]} attention to detail.`;
    
    case 'service':
      return `Discover ${tier} ${serviceDisplayName.toLowerCase()} solutions designed exclusively for ${clientContext}${locationContext}. Our ${messaging.serviceWords[0]} combines strategic excellence with white-glove service for ${messaging.outcomes[0].toLowerCase()}.`;
    
    case 'about':
      return `Learn about our ${tier} ${config.serviceCategory} consultancy, where ${messaging.adjectives[0]} expertise meets ${messaging.adjectives[1]} service. We deliver ${messaging.outcomes[0].toLowerCase()} for ${clientContext} seeking excellence.`;
    
    case 'contact':
      return `Schedule your private ${messaging.serviceWords[0]} with our ${tier} ${config.serviceCategory} experts${locationContext}. Experience white-glove service and ${messaging.adjectives[0]} strategies crafted exclusively for sophisticated brands.`;
    
    case 'blog':
      return config.excerpt || `Exclusive insights on ${config.title?.toLowerCase()} from our ${tier} ${config.serviceCategory} experts. Discover ${messaging.adjectives[0]} strategies and premium approaches for ${clientContext}.`;
    
    case 'landing':
      return `${config.campaignName} - ${messaging.adjectives[0]} ${serviceDisplayName.toLowerCase()} designed for ${clientContext}${locationContext}. Experience ${messaging.outcomes[0].toLowerCase()} with our boutique approach.`;
    
    default:
      return `${messaging.adjectives[0]} ${serviceDisplayName.toLowerCase()} services for ${clientContext}${locationContext}. Delivering ${messaging.outcomes[0].toLowerCase()} through boutique excellence.`;
  }
};

/**
 * Generate sophisticated keywords based on configuration
 */
const generateLuxuryKeywords = (config: SEOBuilderConfig): string[] => {
  if (config.customKeywords) return config.customKeywords;
  
  const tier = config.brandTier;
  const messaging = LUXURY_MESSAGING[tier];
  const industryTerms = config.industry ? INDUSTRY_LUXURY_TERMS[config.industry] : null;
  
  const coreKeywords = [
    `${tier} ${config.serviceCategory}`,
    `boutique ${config.serviceCategory} agency`,
    `${messaging.adjectives[0]} ${config.serviceCategory}`,
    `${messaging.serviceWords[0]} services`,
    'white-glove service',
    messaging.outcomes[0]
  ];
  
  const industryKeywords = industryTerms ? [
    ...industryTerms.keywords.slice(0, 3),
    `${tier} ${config.industry} marketing`
  ] : [];
  
  const locationKeywords = config.location ? [
    `${config.location} ${config.serviceCategory}`,
    `${tier} ${config.serviceCategory} ${config.location}`
  ] : [];
  
  const serviceKeywords = config.serviceName ? [
    config.serviceName.toLowerCase(),
    `${config.serviceName.toLowerCase()} ${tier}`,
    `${messaging.adjectives[0]} ${config.serviceName.toLowerCase()}`
  ] : [];
  
  return [
    ...coreKeywords,
    ...industryKeywords,
    ...locationKeywords,
    ...serviceKeywords
  ].filter(Boolean);
};

/**
 * Main SEO Template Builder Component
 */
export const SEOTemplateBuilder: React.FC<SEOBuilderConfig> = (config) => {
  const generatedTitle = generateLuxuryTitle(config);
  const generatedDescription = generateLuxuryDescription(config);
  const generatedKeywords = generateLuxuryKeywords(config);
  
  // Select appropriate luxury template based on page type
  switch (config.pageType) {
    case 'service':
      const serviceTier = config.brandTier === 'bespoke' ? 'luxury' : 
                         config.brandTier === 'elite' ? 'white-glove' as const : 
                         config.brandTier;
      return (
        <LuxuryServiceSEO
          service={config.serviceName || config.serviceCategory}
          industry={config.industry}
          location={config.location}
          tier={serviceTier}
          currentPath={config.currentPath}
        />
      );
    
    case 'about':
      return (
        <LuxuryAboutSEO
          currentPath={config.currentPath}
          specialization={`${config.brandTier} ${config.serviceCategory}`}
        />
      );
    
    case 'contact':
      return (
        <LuxuryContactSEO
          location={config.location}
          currentPath={config.currentPath}
          serviceType={config.serviceCategory}
        />
      );
    
    case 'blog':
      return (
        <LuxuryBlogSEO
          title={config.title!}
          excerpt={config.excerpt}
          category={config.category!}
          publishedDate={config.publishedDate!}
          modifiedDate={config.modifiedDate}
          currentPath={config.currentPath}
        />
      );
    
    case 'landing':
      return (
        <LuxuryLandingPageSEO
          campaignName={config.campaignName!}
          serviceOffering={config.serviceName || config.serviceCategory}
          exclusiveValue={LUXURY_MESSAGING[config.brandTier].outcomes[0]}
          targetAudience={config.clientType.replace('-', ' ')}
          location={config.location}
          currentPath={config.currentPath}
        />
      );
    
    default:
      // Fallback to custom luxury brand SEO
      const brandTier = config.brandTier === 'boutique' ? 'premium' as const : 
                       config.brandTier === 'elite' ? 'elite' as const : 
                       config.brandTier;
      const clientType = config.clientType === 'sophisticated' ? 'luxury-brands' as const : 
                        config.clientType;
      return (
        <LuxuryBrandSEO
          serviceName={config.serviceName || config.serviceCategory}
          serviceDescription={generatedDescription}
          location={config.location}
          priceRange={brandTier}
          specialization={config.industry}
          clientType={clientType}
          currentPath={config.currentPath}
        />
      );
  }
};

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
  luxuryBrandAgency: (currentPath: string, industry: keyof typeof INDUSTRY_LUXURY_TERMS, location?: string): SEOBuilderConfig => ({
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

export default SEOTemplateBuilder;