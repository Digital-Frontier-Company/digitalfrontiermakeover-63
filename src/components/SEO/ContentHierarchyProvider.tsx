import React, { createContext, useContext, ReactNode } from 'react';

// Content hierarchy context for managing page relationships
export interface ContentHierarchy {
  currentPage: {
    path: string;
    title: string;
    type: 'service' | 'guide' | 'blog' | 'location' | 'product' | 'landing';
    level: 'pillar' | 'cluster' | 'supporting';
  };
  parentPage?: {
    path: string;
    title: string;
    type: string;
  };
  childPages?: Array<{
    path: string;
    title: string;
    type: string;
  }>;
  siblingPages?: Array<{
    path: string;
    title: string;
    type: string;
  }>;
  canonicalUrl?: string;
  consolidatedUrls?: string[];
}

const ContentHierarchyContext = createContext<ContentHierarchy | null>(null);

interface ContentHierarchyProviderProps {
  children: ReactNode;
  hierarchy: ContentHierarchy;
}

/**
 * Content Hierarchy Provider
 * Manages page relationships and content structure for SEO optimization
 */
export const ContentHierarchyProvider: React.FC<ContentHierarchyProviderProps> = ({
  children,
  hierarchy
}) => {
  return (
    <ContentHierarchyContext.Provider value={hierarchy}>
      {children}
    </ContentHierarchyContext.Provider>
  );
};

/**
 * Hook to access content hierarchy context
 */
export const useContentHierarchy = (): ContentHierarchy | null => {
  return useContext(ContentHierarchyContext);
};

/**
 * Content relationship definitions for different page types
 */
export const CONTENT_RELATIONSHIPS = {
  // Digital Marketing Services Hierarchy
  'digital-marketing': {
    pillar: '/digital-marketing',
    clusters: [
      '/search-engine-optimization',
      '/answer-engine-optimization', 
      '/ai-digital-marketing',
      '/ai-implementation-consulting'
    ],
    supporting: [
      '/complete-aeo-guide',
      '/seo-vs-aeo-vs-geo',
      '/ai-prompt-templates',
      '/user-experience-prompts',
      '/information-architecture-prompts'
    ]
  },

  // Local SEO Services Hierarchy
  'local-seo': {
    pillar: '/search-engine-optimization',
    clusters: [
      '/memphis-digital-marketing',
      '/germantown-digital-marketing', 
      '/collierville-seo'
    ],
    supporting: [
      '/contact-digital-marketing',
      '/team-expertise'
    ]
  },

  // Answer Engine Optimization Hierarchy
  'aeo': {
    pillar: '/answer-engine-optimization',
    clusters: [
      '/complete-aeo-guide',
      '/generative-engine-optimization',
      '/seo-vs-aeo-vs-geo'
    ],
    supporting: [
      '/ai-prompt-templates',
      '/blog/aeo-crypto-marketing',
      '/blog/ai-revolution-2025'
    ]
  },

  // AI & Digital Marketing Hierarchy
  'ai-marketing': {
    pillar: '/ai-digital-marketing',
    clusters: [
      '/ai-implementation-consulting',
      '/ai-voice-assistants',
      '/content-creation-agent',
      '/predictive-analytics-agent'
    ],
    supporting: [
      '/ai-prompt-templates',
      '/user-experience-prompts',
      '/information-architecture-prompts',
      '/saas-ai-agent-packages'
    ]
  },

  // Crypto Marketing Hierarchy
  'crypto-marketing': {
    pillar: '/crypto-marketing',
    clusters: [
      '/digital-frontier-crypto-ai-marketing'
    ],
    supporting: [
      '/blog/aeo-crypto-marketing',
      '/blog/protecting-from-ai-misinformation'
    ]
  },

  // Blog Content Hierarchy
  'blog': {
    pillar: '/blog',
    clusters: [
      '/blog/digital-marketing-revolution-2025',
      '/blog/ai-revolution-2025',
      '/blog/death-of-traditional-ads',
      '/blog/marketing-agencies-2025'
    ],
    supporting: [
      '/blog/ai-accountability-future',
      '/blog/ai-citation-crisis',
      '/blog/ai-truth-gap',
      '/blog/protecting-from-ai-misinformation'
    ]
  }
};

/**
 * Get content hierarchy for a given path
 */
export const getContentHierarchy = (currentPath: string): ContentHierarchy | null => {
  // Find which hierarchy the current path belongs to
  for (const [key, hierarchy] of Object.entries(CONTENT_RELATIONSHIPS)) {
    if (hierarchy.pillar === currentPath) {
      return {
        currentPage: {
          path: currentPath,
          title: getPageTitle(currentPath),
          type: getPageType(currentPath),
          level: 'pillar'
        },
        childPages: [
          ...hierarchy.clusters.map(path => ({
            path,
            title: getPageTitle(path),
            type: getPageType(path)
          })),
          ...hierarchy.supporting.map(path => ({
            path,
            title: getPageTitle(path),
            type: getPageType(path)
          }))
        ]
      };
    }

    if (hierarchy.clusters.includes(currentPath)) {
      return {
        currentPage: {
          path: currentPath,
          title: getPageTitle(currentPath),
          type: getPageType(currentPath),
          level: 'cluster'
        },
        parentPage: {
          path: hierarchy.pillar,
          title: getPageTitle(hierarchy.pillar),
          type: getPageType(hierarchy.pillar)
        },
        siblingPages: hierarchy.clusters
          .filter(path => path !== currentPath)
          .map(path => ({
            path,
            title: getPageTitle(path),
            type: getPageType(path)
          })),
        childPages: hierarchy.supporting.map(path => ({
          path,
          title: getPageTitle(path),
          type: getPageType(path)
        }))
      };
    }

    if (hierarchy.supporting.includes(currentPath)) {
      return {
        currentPage: {
          path: currentPath,
          title: getPageTitle(currentPath),
          type: getPageType(currentPath),
          level: 'supporting'
        },
        parentPage: {
          path: hierarchy.pillar,
          title: getPageTitle(hierarchy.pillar),
          type: getPageType(hierarchy.pillar)
        },
        siblingPages: hierarchy.supporting
          .filter(path => path !== currentPath)
          .map(path => ({
            path,
            title: getPageTitle(path),
            type: getPageType(path)
          }))
      };
    }
  }

  return null;
};

// Helper functions to get page metadata
const getPageTitle = (path: string): string => {
  const titleMap: Record<string, string> = {
    '/digital-marketing': 'Digital Marketing Services',
    '/search-engine-optimization': 'Search Engine Optimization',
    '/answer-engine-optimization': 'Answer Engine Optimization',
    '/ai-digital-marketing': 'AI & Digital Marketing',
    '/memphis-digital-marketing': 'Memphis Digital Marketing',
    '/germantown-digital-marketing': 'Germantown Digital Marketing',
    '/collierville-seo': 'Collierville SEO Services',
    '/complete-aeo-guide': 'Complete AEO Guide',
    '/ai-prompt-templates': 'AI Prompt Templates',
    '/user-experience-prompts': 'UX AI Prompts',
    '/information-architecture-prompts': 'IA AI Prompts',
    '/crypto-marketing': 'Crypto Marketing Services',
    '/blog': 'Digital Marketing Blog'
  };

  return titleMap[path] || path.replace(/[/-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const getPageType = (path: string): 'service' | 'guide' | 'blog' | 'location' | 'product' | 'landing' => {
  if (path.includes('/blog/')) return 'blog';
  if (path.includes('memphis') || path.includes('germantown') || path.includes('collierville')) return 'location';
  if (path.includes('guide') || path.includes('prompts')) return 'guide';
  if (path.includes('marketing') || path.includes('seo') || path.includes('aeo')) return 'service';
  return 'service';
};

export default ContentHierarchyProvider;