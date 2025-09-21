import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getRouteConfig } from '@/utils/routes';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  pageType?: 'website' | 'article' | 'service' | 'product';
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
  noIndex?: boolean;
  customCanonical?: string;
  currentPath?: string;
}

/**
 * Comprehensive SEO Head component with structured data and social sharing
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  pageType = 'website',
  publishedDate,
  modifiedDate,
  imageUrl,
  noIndex = false,
  customCanonical,
  currentPath = '/'
}) => {
  const routeConfig = getRouteConfig(currentPath);
  const siteUrl = 'https://digitalfrontier.ai';
  const canonicalUrl = customCanonical || `${siteUrl}${currentPath}`;
  
  // Use route config as fallback
  const finalTitle = title || routeConfig?.title || 'Digital Frontier AI - Marketing Agency';
  const finalDescription = description || routeConfig?.description || 'AI-powered digital marketing solutions';
  
  // Default social image
  const socialImage = imageUrl || `${siteUrl}/lovable-uploads/e7cef708-2992-4277-8f17-0afefe3d7144.png`;
  
  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          "name": "Digital Frontier AI",
          "url": siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/lovable-uploads/e7cef708-2992-4277-8f17-0afefe3d7144.png`
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-901-337-9915",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.linkedin.com/company/digital-frontier-ai"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": siteUrl,
          "name": "Digital Frontier AI",
          "publisher": {
            "@id": `${siteUrl}/#organization`
          }
        }
      ]
    };

    if (pageType === 'article') {
      (baseData["@graph"] as any[]).push({
        "@type": "Article",
        "headline": finalTitle,
        "description": finalDescription,
        "image": socialImage,
        "author": {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`
        },
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "datePublished": publishedDate || new Date().toISOString(),
        "dateModified": modifiedDate || publishedDate || new Date().toISOString(),
        "url": canonicalUrl
      });
    }

    if (pageType === 'service') {
      (baseData["@graph"] as any[]).push({
        "@type": "Service",
        "name": finalTitle,
        "description": finalDescription,
        "provider": {
          "@id": `${siteUrl}/#organization`
        },
        "serviceType": "Digital Marketing",
        "url": canonicalUrl
      });
    }

    return baseData;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content="Digital Frontier AI" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={socialImage} />
      
      {/* Article specific */}
      {pageType === 'article' && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:author" content="Digital Frontier AI" />
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData(), null, 2)}
      </script>
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEOHead;