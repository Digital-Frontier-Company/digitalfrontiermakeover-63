/**
 * Information Architecture SEO Templates
 * Specialized templates for IA-optimized pages with focus on user journeys,
 * content hierarchy, and accessibility
 */

export interface IATemplate {
  name: string;
  description: string;
  structure: {
    hero: boolean;
    breadcrumbs: boolean;
    contentHierarchy: 'flat' | 'deep' | 'hybrid';
    navigationStyle: 'mega-menu' | 'sidebar' | 'breadcrumb' | 'tabs';
  };
  seo: {
    schema: string[];
    internalLinkingDensity: 'low' | 'medium' | 'high';
    contentSilos: boolean;
  };
  accessibility: {
    skipLinks: boolean;
    ariaLandmarks: boolean;
    focusManagement: boolean;
  };
}

export const IA_SEO_TEMPLATES: Record<string, IATemplate> = {
  'user-journey-optimized': {
    name: 'User Journey Optimized',
    description: 'Template optimized for clear user journey paths with strategic CTAs and navigation',
    structure: {
      hero: true,
      breadcrumbs: true,
      contentHierarchy: 'hybrid',
      navigationStyle: 'breadcrumb'
    },
    seo: {
      schema: ['BreadcrumbList', 'WebPage', 'FAQPage'],
      internalLinkingDensity: 'high',
      contentSilos: true
    },
    accessibility: {
      skipLinks: true,
      ariaLandmarks: true,
      focusManagement: true
    }
  },
  
  'content-silo-hub': {
    name: 'Content Silo Hub',
    description: 'Hub page template for content silos with strong internal linking',
    structure: {
      hero: true,
      breadcrumbs: true,
      contentHierarchy: 'deep',
      navigationStyle: 'sidebar'
    },
    seo: {
      schema: ['CollectionPage', 'BreadcrumbList'],
      internalLinkingDensity: 'high',
      contentSilos: true
    },
    accessibility: {
      skipLinks: true,
      ariaLandmarks: true,
      focusManagement: false
    }
  },

  'service-comparison': {
    name: 'Service Comparison',
    description: 'Template for comparing services with tabbed navigation and detailed breakdowns',
    structure: {
      hero: true,
      breadcrumbs: true,
      contentHierarchy: 'flat',
      navigationStyle: 'tabs'
    },
    seo: {
      schema: ['Service', 'FAQPage', 'BreadcrumbList'],
      internalLinkingDensity: 'medium',
      contentSilos: false
    },
    accessibility: {
      skipLinks: true,
      ariaLandmarks: true,
      focusManagement: true
    }
  },

  'local-landing': {
    name: 'Local Landing Page',
    description: 'Location-specific landing page with local SEO optimization',
    structure: {
      hero: true,
      breadcrumbs: false,
      contentHierarchy: 'flat',
      navigationStyle: 'mega-menu'
    },
    seo: {
      schema: ['LocalBusiness', 'Service', 'FAQPage'],
      internalLinkingDensity: 'medium',
      contentSilos: false
    },
    accessibility: {
      skipLinks: true,
      ariaLandmarks: true,
      focusManagement: false
    }
  },

  'resource-hub': {
    name: 'Resource Hub',
    description: 'Central resource page with categorized content and search functionality',
    structure: {
      hero: true,
      breadcrumbs: true,
      contentHierarchy: 'deep',
      navigationStyle: 'sidebar'
    },
    seo: {
      schema: ['CollectionPage', 'BreadcrumbList', 'SearchAction'],
      internalLinkingDensity: 'high',
      contentSilos: true
    },
    accessibility: {
      skipLinks: true,
      ariaLandmarks: true,
      focusManagement: true
    }
  }
};

/**
 * Get IA template configuration
 */
export function getIATemplate(templateName: keyof typeof IA_SEO_TEMPLATES): IATemplate {
  return IA_SEO_TEMPLATES[templateName] || IA_SEO_TEMPLATES['user-journey-optimized'];
}

/**
 * Generate internal linking suggestions based on IA template
 */
export function generateInternalLinkingSuggestions(
  template: IATemplate,
  currentPage: string,
  relatedPages: string[]
): string[] {
  const density = template.seo.internalLinkingDensity;
  const maxLinks = density === 'high' ? 10 : density === 'medium' ? 6 : 3;
  
  return relatedPages.slice(0, maxLinks);
}

/**
 * Generate schema markup based on IA template
 */
export function generateIASchema(template: IATemplate, pageData: any): Record<string, any>[] {
  const schemas: Record<string, any>[] = [];
  
  template.seo.schema.forEach(schemaType => {
    switch (schemaType) {
      case 'BreadcrumbList':
        schemas.push({
          '@type': 'BreadcrumbList',
          '@context': 'https://schema.org',
          itemListElement: pageData.breadcrumbs || []
        });
        break;
      case 'FAQPage':
        schemas.push({
          '@type': 'FAQPage',
          '@context': 'https://schema.org',
          mainEntity: pageData.faqs || []
        });
        break;
      case 'CollectionPage':
        schemas.push({
          '@type': 'CollectionPage',
          '@context': 'https://schema.org',
          name: pageData.title,
          description: pageData.description
        });
        break;
      // Add more schema types as needed
    }
  });
  
  return schemas;
}

export default IA_SEO_TEMPLATES;
