import React from 'react';
import { SEOTemplateManager, SEOTemplateConfig } from './SEOTemplateManager';

/**
 * Pre-configured SEO templates for common page types
 * Addresses content duplication by providing structured, unique templates
 */

// Service Page Templates
export const ServicePageSEO: React.FC<{
  service: string;
  location?: string;
  currentPath: string;
}> = ({ service, location, currentPath }) => {
  const config: SEOTemplateConfig = {
    contentType: 'service',
    hierarchyLevel: 'pillar',
    duplicationConfig: {
      targetKeywords: [service, `${service} services`, location && `${service} ${location}`].filter(Boolean),
      searchIntent: 'commercial',
      relatedContent: [
        {
          title: `${service} Guide`,
          path: `/${service.toLowerCase().replace(/\s+/g, '-')}-guide`,
          type: 'guide',
          relationship: 'child'
        },
        {
          title: `${service} Case Studies`,
          path: `/${service.toLowerCase().replace(/\s+/g, '-')}-case-studies`,
          type: 'blog',
          relationship: 'child'
        }
      ]
    },
    service,
    location,
    currentPath,
    schemaType: 'Service',
    organizationInfo: {
      name: 'Digital Frontier AI',
      phone: '+1-901-337-9915',
      serviceArea: ['Memphis', 'Germantown', 'Collierville', 'Tennessee']
    }
  };

  return <SEOTemplateManager {...config} />;
};

// Location-Based Service Templates
export const LocationServiceSEO: React.FC<{
  service: string;
  location: string;
  currentPath: string;
}> = ({ service, location, currentPath }) => {
  const config: SEOTemplateConfig = {
    contentType: 'location',
    hierarchyLevel: 'cluster',
    duplicationConfig: {
      targetKeywords: [
        `${service} ${location}`,
        `${service} near me`,
        `${location} ${service}`,
        `${service} services ${location}`
      ],
      searchIntent: 'commercial',
      relatedContent: [
        {
          title: `${service} Services`,
          path: `/${service.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'service',
          relationship: 'parent'
        }
      ]
    },
    service,
    location,
    currentPath,
    schemaType: 'LocalBusiness',
    organizationInfo: {
      name: 'Digital Frontier AI',
      phone: '+1-901-337-9915',
      address: `${location}, Tennessee`,
      serviceArea: [location, 'Tennessee']
    }
  };

  return <SEOTemplateManager {...config} />;
};

// Guide/Educational Content Templates
export const GuideSEO: React.FC<{
  topic: string;
  guideType: 'beginner' | 'advanced' | 'complete';
  currentPath: string;
}> = ({ topic, guideType, currentPath }) => {
  const config: SEOTemplateConfig = {
    contentType: 'guide',
    hierarchyLevel: guideType === 'complete' ? 'pillar' : 'supporting',
    duplicationConfig: {
      targetKeywords: [
        `${topic} guide`,
        `how to ${topic}`,
        `${topic} tutorial`,
        `${topic} best practices`
      ],
      searchIntent: 'informational',
      relatedContent: [
        {
          title: `${topic} Services`,
          path: `/${topic.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'service',
          relationship: 'parent'
        }
      ]
    },
    service: topic,
    currentPath,
    pageType: 'article',
    schemaType: 'Article'
  };

  return <SEOTemplateManager {...config} />;
};

// Blog Post Templates
export const BlogPostSEO: React.FC<{
  title: string;
  category: string;
  publishedDate: string;
  currentPath: string;
  modifiedDate?: string;
}> = ({ title, category, publishedDate, currentPath, modifiedDate }) => {
  const config: SEOTemplateConfig = {
    contentType: 'blog',
    hierarchyLevel: 'supporting',
    duplicationConfig: {
      targetKeywords: [title, category, `${category} insights`, `${category} trends`],
      searchIntent: 'informational',
      relatedContent: [
        {
          title: 'Digital Marketing Blog',
          path: '/blog',
          type: 'blog',
          relationship: 'parent'
        }
      ]
    },
    service: title,
    industry: category,
    currentPath,
    pageType: 'article',
    publishedDate,
    modifiedDate,
    schemaType: 'Article'
  };

  return <SEOTemplateManager {...config} />;
};

// Product/Solution Templates
export const ProductSEO: React.FC<{
  productName: string;
  category: string;
  currentPath: string;
}> = ({ productName, category, currentPath }) => {
  const config: SEOTemplateConfig = {
    contentType: 'product',
    hierarchyLevel: 'cluster',
    duplicationConfig: {
      targetKeywords: [
        productName,
        `${productName} features`,
        `${productName} benefits`,
        `${category} solution`
      ],
      searchIntent: 'commercial',
      relatedContent: [
        {
          title: `${category} Services`,
          path: `/${category.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'service',
          relationship: 'parent'
        }
      ]
    },
    service: productName,
    industry: category,
    currentPath,
    schemaType: 'Product'
  };

  return <SEOTemplateManager {...config} />;
};

// Landing Page Templates
export const LandingPageSEO: React.FC<{
  campaign: string;
  service: string;
  location?: string;
  currentPath: string;
}> = ({ campaign, service, location, currentPath }) => {
  const config: SEOTemplateConfig = {
    contentType: 'landing',
    hierarchyLevel: 'supporting',
    duplicationConfig: {
      targetKeywords: [
        campaign,
        service,
        `${service} consultation`,
        location && `${service} ${location}`
      ].filter(Boolean),
      searchIntent: 'transactional',
      canonicalPath: `/${service.toLowerCase().replace(/\s+/g, '-')}`, // Point to main service page
      relatedContent: [
        {
          title: `${service} Services`,
          path: `/${service.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'service',
          relationship: 'parent'
        }
      ]
    },
    service: campaign,
    location,
    currentPath,
    noIndex: true, // Landing pages often shouldn't be indexed
    schemaType: 'WebPage'
  };

  return <SEOTemplateManager {...config} />;
};

// Template Selector Component
export const SEOTemplateSelector: React.FC<{
  pageType: 'service' | 'location' | 'guide' | 'blog' | 'product' | 'landing';
  pageData: {
    service?: string;
    location?: string;
    topic?: string;
    title?: string;
    category?: string;
    publishedDate?: string;
    modifiedDate?: string;
    productName?: string;
    campaign?: string;
    guideType?: 'beginner' | 'advanced' | 'complete';
  };
  currentPath: string;
}> = ({ pageType, pageData, currentPath }) => {
  switch (pageType) {
    case 'service':
      return (
        <ServicePageSEO
          service={pageData.service!}
          location={pageData.location}
          currentPath={currentPath}
        />
      );
    
    case 'location':
      return (
        <LocationServiceSEO
          service={pageData.service!}
          location={pageData.location!}
          currentPath={currentPath}
        />
      );
    
    case 'guide':
      return (
        <GuideSEO
          topic={pageData.topic!}
          guideType={pageData.guideType || 'complete'}
          currentPath={currentPath}
        />
      );
    
    case 'blog':
      return (
        <BlogPostSEO
          title={pageData.title!}
          category={pageData.category!}
          publishedDate={pageData.publishedDate!}
          modifiedDate={pageData.modifiedDate}
          currentPath={currentPath}
        />
      );
    
    case 'product':
      return (
        <ProductSEO
          productName={pageData.productName!}
          category={pageData.category!}
          currentPath={currentPath}
        />
      );
    
    case 'landing':
      return (
        <LandingPageSEO
          campaign={pageData.campaign!}
          service={pageData.service!}
          location={pageData.location}
          currentPath={currentPath}
        />
      );
    
    default:
      return null;
  }
};

export default SEOTemplateSelector;