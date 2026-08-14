import React, { type ReactNode } from 'react';
import { ContentHierarchyContext, type ContentHierarchy } from './content-hierarchy';

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

export default ContentHierarchyProvider;
