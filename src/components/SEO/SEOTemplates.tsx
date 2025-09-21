import React from 'react';
import SEOHead, { SEOHeadProps } from './SEOHead';

/**
 * Pre-configured SEO templates for different page types
 */

export interface BlogPostSEOProps {
  title: string;
  excerpt?: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  tags?: string[];
  imageUrl?: string;
  currentPath: string;
}

export interface ServicePageSEOProps {
  serviceName: string;
  serviceDescription: string;
  benefits?: string[];
  location?: string;
  pricing?: string;
  imageUrl?: string;
  currentPath: string;
}

export interface LandingPageSEOProps {
  productName: string;
  productDescription: string;
  benefits?: string[];
  ctaText?: string;
  imageUrl?: string;
  currentPath: string;
}

/**
 * Blog Post SEO Template
 */
export const BlogPostSEO: React.FC<BlogPostSEOProps> = ({
  title,
  excerpt,
  publishedDate,
  modifiedDate,
  author = 'Digital Frontier AI',
  tags = [],
  imageUrl,
  currentPath
}) => {
  const seoTitle = `${title} | Digital Frontier AI Blog`;
  const seoDescription = excerpt || `Learn about ${title.toLowerCase()} with expert insights from Digital Frontier AI. Discover actionable strategies for AI-powered digital marketing.`;
  const keywords = [
    'digital marketing',
    'AI marketing',
    'answer engine optimization',
    'AEO',
    'SEO',
    ...tags
  ].join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="article"
      publishedDate={publishedDate}
      modifiedDate={modifiedDate}
      imageUrl={imageUrl}
      currentPath={currentPath}
    />
  );
};

/**
 * Service Page SEO Template
 */
export const ServicePageSEO: React.FC<ServicePageSEOProps> = ({
  serviceName,
  serviceDescription,
  benefits = [],
  location,
  pricing,
  imageUrl,
  currentPath
}) => {
  const locationSuffix = location ? ` in ${location}` : '';
  const seoTitle = `${serviceName}${locationSuffix} | Digital Frontier AI`;
  
  const benefitsText = benefits.length > 0 
    ? ` Benefits include: ${benefits.slice(0, 3).join(', ')}.`
    : '';
    
  const pricingText = pricing 
    ? ` Starting at ${pricing}.`
    : '';
    
  const seoDescription = `${serviceDescription}${benefitsText}${pricingText} Contact Digital Frontier AI for expert ${serviceName.toLowerCase()} services.`;
  
  const keywords = [
    serviceName.toLowerCase(),
    'digital marketing services',
    'AI marketing',
    'professional marketing',
    location?.toLowerCase(),
    ...benefits.map(b => b.toLowerCase())
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
 * Landing Page SEO Template
 */
export const LandingPageSEO: React.FC<LandingPageSEOProps> = ({
  productName,
  productDescription,
  benefits = [],
  ctaText,
  imageUrl,
  currentPath
}) => {
  const seoTitle = `${productName} | AI-Powered Marketing Solutions`;
  
  const benefitsText = benefits.length > 0 
    ? ` Key benefits: ${benefits.slice(0, 3).join(', ')}.`
    : '';
    
  const ctaTextSuffix = ctaText 
    ? ` ${ctaText} today!`
    : ' Get started today!';
    
  const seoDescription = `${productDescription}${benefitsText}${ctaTextSuffix}`;
  
  const keywords = [
    productName.toLowerCase(),
    'AI marketing tools',
    'digital marketing solutions',
    'marketing automation',
    'business growth',
    ...benefits.map(b => b.toLowerCase())
  ].filter(Boolean).join(', ');

  return (
    <SEOHead
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      pageType="product"
      imageUrl={imageUrl}
      currentPath={currentPath}
    />
  );
};

/**
 * Contact Page SEO Template
 */
export const ContactPageSEO: React.FC<{ currentPath: string; location?: string }> = ({
  currentPath,
  location
}) => {
  const locationSuffix = location ? ` in ${location}` : '';
  const seoTitle = `Contact Digital Frontier AI${locationSuffix} | Get Your Free Marketing Consultation`;
  const seoDescription = `Contact Digital Frontier AI for expert digital marketing services${locationSuffix}. Get your free consultation and discover how AI-powered marketing can grow your business.`;
  
  const keywords = [
    'contact digital marketing agency',
    'free marketing consultation',
    'AI marketing experts',
    'digital marketing contact',
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
 * About Page SEO Template
 */
export const AboutPageSEO: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const seoTitle = 'About Digital Frontier AI | AI-Powered Marketing Experts';
  const seoDescription = 'Learn about Digital Frontier AI, the leading agency specializing in AI-powered digital marketing, Answer Engine Optimization (AEO), and innovative growth strategies for modern businesses.';
  const keywords = 'about digital frontier ai, AI marketing agency, marketing experts, AEO specialists, digital marketing team, AI marketing professionals';

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