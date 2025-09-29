import React from 'react';
import SEOHead, { SEOHeadProps } from './SEOHead';

/**
 * Luxury Boutique Agency SEO Templates
 * Optimized for sophistication, exclusivity, and personalized service
 */

export interface LuxuryBrandSEOProps {
  serviceName: string;
  serviceDescription: string;
  location?: string;
  priceRange?: 'premium' | 'luxury' | 'elite' | 'bespoke';
  specialization?: string;
  clientType?: 'enterprise' | 'high-net-worth' | 'luxury-brands' | 'exclusive';
  imageUrl?: string;
  currentPath: string;
}

export interface LuxuryServiceSEOProps {
  service: string;
  industry?: string;
  location?: string;
  tier?: 'boutique' | 'premium' | 'luxury' | 'white-glove';
  currentPath: string;
}

export interface LuxuryLandingPageSEOProps {
  campaignName: string;
  serviceOffering: string;
  exclusiveValue: string;
  targetAudience: string;
  location?: string;
  currentPath: string;
}

/**
 * Luxury service title and description templates
 */
const LUXURY_TEMPLATES = {
  titleTemplates: {
    premium: (service: string, location?: string) => 
      `Premium ${service} Services${location ? ` in ${location}` : ''} | Boutique Excellence & Sophistication`,
    luxury: (service: string, location?: string) => 
      `Luxury ${service} Solutions${location ? ` - ${location}` : ''} | Bespoke Strategies for Discerning Clients`,
    elite: (service: string, location?: string) => 
      `Elite ${service} Consultancy${location ? ` ${location}` : ''} | White-Glove Service & Exceptional Results`,
    bespoke: (service: string, location?: string) => 
      `Bespoke ${service} Excellence${location ? ` in ${location}` : ''} | Tailored Solutions for Sophisticated Brands`
  },
  
  descriptionTemplates: {
    premium: (service: string, location?: string) => 
      `Experience premium ${service.toLowerCase()} services crafted for sophisticated businesses${location ? ` in ${location}` : ''}. Our boutique approach delivers personalized strategies, exceptional attention to detail, and results that exceed expectations.`,
    luxury: (service: string, location?: string) => 
      `Discover luxury ${service.toLowerCase()} solutions designed exclusively for discerning clients${location ? ` in ${location}` : ''}. Our bespoke approach combines strategic excellence with white-glove service for extraordinary outcomes.`,
    elite: (service: string, location?: string) => 
      `Elite ${service.toLowerCase()} consultancy offering unparalleled expertise${location ? ` in ${location}` : ''}. We deliver sophisticated strategies and exceptional results for high-caliber brands seeking excellence.`,
    bespoke: (service: string, location?: string) => 
      `Bespoke ${service.toLowerCase()} services tailored to your unique vision${location ? ` in ${location}` : ''}. Experience the pinnacle of personalized service with our boutique team of distinguished experts.`
  }
};

/**
 * Luxury keywords by tier and industry
 */
const LUXURY_KEYWORDS = {
  core: [
    'boutique agency', 'luxury marketing', 'premium services', 'bespoke solutions',
    'white-glove service', 'exclusive consultation', 'sophisticated strategies',
    'high-end marketing', 'elite consultancy', 'personalized service'
  ],
  
  byTier: {
    boutique: ['boutique marketing', 'personalized strategies', 'intimate service', 'curated solutions'],
    premium: ['premium marketing', 'sophisticated strategies', 'elevated service', 'distinguished results'],
    luxury: ['luxury marketing', 'bespoke strategies', 'exclusive service', 'exceptional outcomes'],
    'white-glove': ['white-glove marketing', 'concierge service', 'VIP treatment', 'extraordinary results']
  },
  
  byIndustry: {
    'real-estate': ['luxury real estate marketing', 'high-end property marketing', 'exclusive listings'],
    'hospitality': ['luxury hospitality marketing', 'premium hotel marketing', 'resort marketing'],
    'fashion': ['luxury fashion marketing', 'haute couture marketing', 'designer brand marketing'],
    'automotive': ['luxury automotive marketing', 'premium car marketing', 'exotic vehicle marketing'],
    'jewelry': ['luxury jewelry marketing', 'fine jewelry marketing', 'precious metals marketing'],
    'finance': ['wealth management marketing', 'private banking marketing', 'investment marketing']
  }
};

/**
 * Main Luxury Brand SEO Template
 */
export const LuxuryBrandSEO: React.FC<LuxuryBrandSEOProps> = ({
  serviceName,
  serviceDescription,
  location,
  priceRange = 'premium',
  specialization,
  clientType,
  imageUrl,
  currentPath
}) => {
  const seoTitle = LUXURY_TEMPLATES.titleTemplates[priceRange](serviceName, location);
  const seoDescription = LUXURY_TEMPLATES.descriptionTemplates[priceRange](serviceName, location);
  
  const keywords = [
    ...LUXURY_KEYWORDS.core,
    ...LUXURY_KEYWORDS.byTier[priceRange === 'elite' ? 'white-glove' : priceRange],
    `${serviceName.toLowerCase()} services`,
    `${priceRange} ${serviceName.toLowerCase()}`,
    location?.toLowerCase(),
    specialization?.toLowerCase(),
    clientType && `${clientType.replace('-', ' ')} marketing`
  ].filter(Boolean).join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="service"
      imageUrl={imageUrl}
      currentPath={currentPath}
    />
  );
};

/**
 * Luxury Service Page SEO Template
 */
export const LuxuryServiceSEO: React.FC<LuxuryServiceSEOProps> = ({
  service,
  industry,
  location,
  tier = 'boutique',
  currentPath
}) => {
  const titleTemplate = tier === 'white-glove' ? 'elite' : tier as keyof typeof LUXURY_TEMPLATES.titleTemplates;
  const descTemplate = tier === 'white-glove' ? 'elite' : tier as keyof typeof LUXURY_TEMPLATES.descriptionTemplates;
  
  const seoTitle = LUXURY_TEMPLATES.titleTemplates[titleTemplate](service, location);
  const seoDescription = LUXURY_TEMPLATES.descriptionTemplates[descTemplate](service, location);
  
  const industryKeywords = industry && LUXURY_KEYWORDS.byIndustry[industry as keyof typeof LUXURY_KEYWORDS.byIndustry] 
    ? LUXURY_KEYWORDS.byIndustry[industry as keyof typeof LUXURY_KEYWORDS.byIndustry] 
    : [];
  
  const keywords = [
    ...LUXURY_KEYWORDS.core.slice(0, 5), // First 5 core keywords
    ...LUXURY_KEYWORDS.byTier[tier],
    ...industryKeywords.slice(0, 3), // First 3 industry keywords
    `${service.toLowerCase()} ${tier}`,
    location?.toLowerCase()
  ].filter(Boolean).join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="service"
      currentPath={currentPath}
    />
  );
};

/**
 * Luxury Landing Page SEO Template
 */
export const LuxuryLandingPageSEO: React.FC<LuxuryLandingPageSEOProps> = ({
  campaignName,
  serviceOffering,
  exclusiveValue,
  targetAudience,
  location,
  currentPath
}) => {
  const seoTitle = `${campaignName} | Exclusive ${serviceOffering}${location ? ` in ${location}` : ''} | Boutique Excellence`;
  const seoDescription = `${exclusiveValue} Designed for ${targetAudience.toLowerCase()}, our boutique approach delivers ${serviceOffering.toLowerCase()} with unmatched sophistication and personalized attention.`;
  
  const keywords = [
    campaignName.toLowerCase(),
    `exclusive ${serviceOffering.toLowerCase()}`,
    `${targetAudience.toLowerCase()} marketing`,
    'boutique marketing agency',
    'luxury marketing services',
    'premium consultation',
    location?.toLowerCase()
  ].filter(Boolean).join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="website"
      currentPath={currentPath}
    />
  );
};

/**
 * Contact Page for Luxury Brands
 */
export const LuxuryContactSEO: React.FC<{ 
  location?: string; 
  currentPath: string; 
  serviceType?: string 
}> = ({ location, currentPath, serviceType = 'Marketing' }) => {
  const locationSuffix = location ? ` in ${location}` : '';
  const seoTitle = `Contact Our Boutique ${serviceType} Consultancy${locationSuffix} | Exclusive Consultation`;
  const seoDescription = `Schedule your private consultation with our boutique ${serviceType.toLowerCase()} experts${locationSuffix}. Experience white-glove service and bespoke strategies crafted exclusively for sophisticated brands.`;
  
  const keywords = [
    `boutique ${serviceType.toLowerCase()} consultation`,
    'luxury marketing agency contact',
    'premium marketing consultation',
    'exclusive marketing services',
    'white-glove service',
    'bespoke marketing strategies',
    location?.toLowerCase()
  ].filter(Boolean).join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="website"
      currentPath={currentPath}
    />
  );
};

/**
 * About Page for Luxury Brands
 */
export const LuxuryAboutSEO: React.FC<{ 
  currentPath: string;
  agencyName?: string;
  specialization?: string;
}> = ({ 
  currentPath, 
  agencyName = 'Digital Frontier AI',
  specialization = 'AI-Powered Marketing'
}) => {
  const seoTitle = `About ${agencyName} | Boutique ${specialization} Excellence & Distinguished Expertise`;
  const seoDescription = `Discover ${agencyName}, the boutique consultancy redefining ${specialization.toLowerCase()} with sophisticated strategies, personalized service, and exceptional results for discerning clients.`;
  const keywords = `about ${agencyName.toLowerCase()}, boutique marketing agency, luxury marketing experts, premium consultancy, sophisticated marketing strategies, ${specialization.toLowerCase()} specialists, white-glove service`;

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="website"
      currentPath={currentPath}
    />
  );
};

/**
 * Blog Post SEO for Luxury Brands
 */
export const LuxuryBlogSEO: React.FC<{
  title: string;
  excerpt?: string;
  category: string;
  publishedDate: string;
  modifiedDate?: string;
  currentPath: string;
}> = ({ title, excerpt, category, publishedDate, modifiedDate, currentPath }) => {
  const seoTitle = `${title} | Luxury Marketing Insights & Sophisticated Strategies`;
  const seoDescription = excerpt || `Exclusive insights on ${title.toLowerCase()} from our boutique marketing experts. Discover sophisticated strategies and premium approaches for discerning brands.`;
  
  const keywords = [
    title.toLowerCase(),
    `luxury ${category.toLowerCase()}`,
    'boutique marketing insights',
    'premium marketing strategies',
    'sophisticated marketing',
    'exclusive marketing content',
    `${category.toLowerCase()} for luxury brands`
  ].join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="article"
      publishedDate={publishedDate}
      modifiedDate={modifiedDate}
      currentPath={currentPath}
    />
  );
};

export default {
  LuxuryBrandSEO,
  LuxuryServiceSEO,
  LuxuryLandingPageSEO,
  LuxuryContactSEO,
  LuxuryAboutSEO,
  LuxuryBlogSEO
};