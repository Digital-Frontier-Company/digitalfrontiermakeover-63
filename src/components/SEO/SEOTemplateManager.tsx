import React from 'react';
import SEOHead, { SEOHeadProps } from './SEOHead';
import InternalLinkEnhancer from '@/components/layout/InternalLinkEnhancer';

// Content types for SEO optimization
export type ContentType = 'service' | 'guide' | 'blog' | 'location' | 'product' | 'landing';

// Content hierarchy levels
export type HierarchyLevel = 'pillar' | 'cluster' | 'supporting';

// Duplication management interface
export interface ContentDuplicationConfig {
  canonicalPath?: string;
  relatedContent?: Array<{
    title: string;
    path: string;
    type: ContentType;
    relationship: 'parent' | 'child' | 'sibling';
  }>;
  consolidatedFrom?: string[];
  targetKeywords: string[];
  searchIntent: 'informational' | 'navigational' | 'transactional' | 'commercial';
}

// Enhanced SEO template props
export interface SEOTemplateConfig extends Omit<SEOHeadProps, 'title' | 'description'> {
  contentType: ContentType;
  hierarchyLevel: HierarchyLevel;
  duplicationConfig: ContentDuplicationConfig;
  location?: string;
  service?: string;
  industry?: string;
  
  // Dynamic title/description generation
  titleTemplate?: string;
  descriptionTemplate?: string;
  
  // Schema markup config
  schemaType?: 'Article' | 'Service' | 'LocalBusiness' | 'Product' | 'WebPage';
  organizationInfo?: {
    name: string;
    phone?: string;
    address?: string;
    serviceArea?: string[];
  };
}

/**
 * Advanced SEO Template Manager
 * Handles content hierarchy, duplication management, and dynamic SEO generation
 */
export const SEOTemplateManager: React.FC<SEOTemplateConfig> = ({
  contentType,
  hierarchyLevel,
  duplicationConfig,
  location,
  service,
  industry,
  titleTemplate,
  descriptionTemplate,
  schemaType,
  organizationInfo,
  currentPath = '',
  ...seoProps
}) => {
  // Generate dynamic title based on template and content type
  const generateTitle = (): string => {
    if (titleTemplate) {
      return titleTemplate
        .replace('{service}', service || '')
        .replace('{location}', location || '')
        .replace('{industry}', industry || '');
    }

    // Default title patterns based on content type and hierarchy
    const titlePatterns: Record<ContentType, Record<HierarchyLevel, string>> = {
      service: {
        pillar: `${service} Services${location ? ` in ${location}` : ''} | Digital Frontier AI`,
        cluster: `Professional ${service}${location ? ` - ${location}` : ''} | Expert Solutions`,
        supporting: `${service} Guide${location ? ` for ${location}` : ''} | How-To & Tips`
      },
      guide: {
        pillar: `Complete ${service} Guide${location ? ` for ${location}` : ''} | Digital Frontier AI`,
        cluster: `${service} Best Practices${location ? ` - ${location}` : ''} | Expert Guide`,
        supporting: `${service} Tips & Techniques${location ? ` in ${location}` : ''}`
      },
      blog: {
        pillar: `${service} Insights${location ? ` for ${location}` : ''} | Digital Frontier AI Blog`,
        cluster: `${service} Trends & Analysis${location ? ` - ${location}` : ''}`,
        supporting: `${service} Updates${location ? ` in ${location}` : ''} | Latest News`
      },
      location: {
        pillar: `Digital Marketing${location ? ` in ${location}` : ''} | Full-Service Agency`,
        cluster: `${service}${location ? ` in ${location}` : ''} | Local SEO Experts`,
        supporting: `${service} Near Me${location ? ` - ${location}` : ''} | Find Local Services`
      },
      product: {
        pillar: `${service} Solutions${location ? ` for ${location}` : ''} | Digital Frontier AI`,
        cluster: `${service} Features & Benefits${location ? ` - ${location}` : ''}`,
        supporting: `${service} Pricing & Plans${location ? ` in ${location}` : ''}`
      },
      landing: {
        pillar: `Get ${service}${location ? ` in ${location}` : ''} | Start Today`,
        cluster: `${service} Landing Page${location ? ` - ${location}` : ''}`,
        supporting: `${service} Consultation${location ? ` in ${location}` : ''} | Free Quote`
      }
    };

    return titlePatterns[contentType][hierarchyLevel] || `${service} | Digital Frontier AI`;
  };

  // Generate dynamic description
  const generateDescription = (): string => {
    if (descriptionTemplate) {
      return descriptionTemplate
        .replace('{service}', service || '')
        .replace('{location}', location || '')
        .replace('{industry}', industry || '');
    }

    const descriptionPatterns: Record<ContentType, Record<HierarchyLevel, string>> = {
      service: {
        pillar: `Comprehensive ${service} services${location ? ` in ${location}` : ''}. Expert solutions with proven results. Contact Digital Frontier AI for professional ${service} consulting.`,
        cluster: `Professional ${service} solutions${location ? ` serving ${location}` : ''}. Specialized expertise in ${industry || 'digital marketing'} with measurable ROI.`,
        supporting: `Learn ${service} best practices${location ? ` for ${location} businesses` : ''}. Step-by-step guides and expert tips from Digital Frontier AI.`
      },
      guide: {
        pillar: `Complete guide to ${service}${location ? ` for ${location} businesses` : ''}. Expert strategies, tools, and techniques for maximum results.`,
        cluster: `${service} best practices and strategies${location ? ` tailored for ${location}` : ''}. Professional insights from Digital Frontier AI experts.`,
        supporting: `Essential ${service} tips and techniques${location ? ` for ${location}` : ''}. Practical advice for immediate implementation and results.`
      },
      blog: {
        pillar: `Latest ${service} insights and trends${location ? ` affecting ${location} businesses` : ''}. Expert analysis from Digital Frontier AI.`,
        cluster: `${service} industry analysis and trends${location ? ` in ${location}` : ''}. Stay ahead with expert insights and data-driven strategies.`,
        supporting: `${service} news and updates${location ? ` for ${location}` : ''}. Latest developments and their impact on your business.`
      },
      location: {
        pillar: `Top digital marketing agency${location ? ` in ${location}` : ''}. Full-service ${service || 'marketing'} solutions with proven local expertise.`,
        cluster: `Local ${service} experts${location ? ` serving ${location}` : ''}. Specialized knowledge of local market conditions and opportunities.`,
        supporting: `Find ${service} services near you${location ? ` in ${location}` : ''}. Connect with local experts for personalized solutions.`
      },
      product: {
        pillar: `${service} solutions designed for results${location ? ` in ${location}` : ''}. Advanced features with enterprise-grade performance.`,
        cluster: `Explore ${service} features and capabilities${location ? ` available in ${location}` : ''}. Comprehensive solution overview.`,
        supporting: `${service} pricing and plans${location ? ` for ${location} businesses` : ''}. Find the perfect solution for your needs and budget.`
      },
      landing: {
        pillar: `Get started with ${service}${location ? ` in ${location}` : ''} today. Professional consultation and custom solutions available.`,
        cluster: `${service} landing page${location ? ` for ${location}` : ''}. Learn more and get started with expert guidance.`,
        supporting: `Schedule your ${service} consultation${location ? ` in ${location}` : ''}. Free analysis and custom recommendations.`
      }
    };

    return descriptionPatterns[contentType][hierarchyLevel] || `Professional ${service} services from Digital Frontier AI.`;
  };

  // Generate enhanced structured data
  const generateEnhancedSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType || "WebPage",
      "name": generateTitle(),
      "description": generateDescription(),
      "url": `https://digitalfrontier.ai${currentPath}`,
      "provider": {
        "@type": "Organization",
        "name": "Digital Frontier AI",
        "url": "https://digitalfrontier.app",
        ...organizationInfo
      }
    };

    // Add content hierarchy relationships
    if (duplicationConfig.relatedContent?.length) {
      const parentContent = duplicationConfig.relatedContent.find(c => c.relationship === 'parent');
      const childContent = duplicationConfig.relatedContent.filter(c => c.relationship === 'child');
      
      if (parentContent) {
        (baseSchema as any).isPartOf = {
          "@type": "WebPage",
          "name": parentContent.title,
          "url": `https://digitalfrontier.ai${parentContent.path}`
        };
      }

      if (childContent.length) {
        (baseSchema as any).hasPart = childContent.map(child => ({
          "@type": "WebPage",
          "name": child.title,
          "url": `https://digitalfrontier.ai${child.path}`
        }));
      }
    }

    return baseSchema;
  };

  // Generate keywords from duplication config and content type
  const generateKeywords = (): string => {
    const baseKeywords = duplicationConfig.targetKeywords || [];
    const contextKeywords = [
      service,
      location,
      industry,
      contentType,
      'digital marketing',
      'SEO',
      'Digital Frontier AI'
    ].filter(Boolean);

    return [...baseKeywords, ...contextKeywords].join(', ');
  };

  return (
    <>
      <SEOHead
        title={generateTitle()}
        description={generateDescription()}
        keywords={generateKeywords()}
        pageType={contentType === 'blog' ? 'article' : 'website'}
        customCanonical={duplicationConfig.canonicalPath ? 
          `https://digitalfrontier.ai${duplicationConfig.canonicalPath}` : undefined}
        currentPath={currentPath}
        {...seoProps}
      />
      
      {/* Enhanced structured data */}
      <script type="application/ld+json">
        {JSON.stringify(generateEnhancedSchema(), null, 2)}
      </script>

      {/* Internal linking for content hierarchy */}
      {duplicationConfig.relatedContent && (
        <InternalLinkEnhancer
          currentPage={currentPath}
          relatedLinks={duplicationConfig.relatedContent.map(content => ({
            title: content.title,
            description: `Learn more about ${content.title.toLowerCase()}`,
            href: content.path,
            category: content.type === 'service' ? 'strategy' : 
                     content.type === 'location' ? 'local' : 
                     content.type === 'guide' ? 'technical' : 'resources'
          }))}
          showDefaultLinks={false}
        />
      )}
    </>
  );
};

export default SEOTemplateManager;