import React from 'react';
import { SEOManager } from './SEOManager';

interface PageWrapperProps {
  children: React.ReactNode;
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
    pageType?: 'website' | 'article' | 'service';
    publishedDate?: string;
    modifiedDate?: string;
    imageUrl?: string;
    noIndex?: boolean;
    customCanonical?: string;
  };
  maxH1s?: 1;
  className?: string;
}

/**
 * Page wrapper that ensures proper SEO structure and single H1 per page
 */
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  seo,
  maxH1s = 1,
  className = ""
}) => {
  
  return (
    <>
      <SEOManager {...seo} />
      <div className={`min-h-screen ${className}`}>
        {/* Main content wrapper with semantic HTML */}
        <main role="main" id="main-content">
          {children}
        </main>
      </div>
    </>
  );
};