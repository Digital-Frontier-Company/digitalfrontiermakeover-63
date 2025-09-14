import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOManagerProps {
  title?: string;
  description?: string;
  keywords?: string;
  pageType?: 'website' | 'article' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
  noIndex?: boolean;
  customCanonical?: string;
}

/**
 * Centralized SEO Manager to prevent duplicate meta tags and canonicals
 */
export const SEOManager: React.FC<SEOManagerProps> = ({
  title,
  description,
  keywords,
  pageType = 'website',
  publishedDate,
  modifiedDate,
  imageUrl,
  noIndex = false,
  customCanonical
}) => {
  const location = useLocation();
  const currentDate = new Date().toISOString();
  
  // Ensure consistent domain usage
  const baseUrl = 'https://digitalfrontier.app';
  const canonicalUrl = customCanonical || `${baseUrl}${location.pathname}`;
  
  // Sanitize and optimize title (max 60 characters for Google)
  const siteName = 'Digital Frontier Company';
  const optimizedTitle = title 
    ? (title.length > 60 ? title.substring(0, 57) + '...' : title) + ` | ${siteName}`
    : `${siteName} - AI-Powered Digital Marketing Solutions`;
  
  // Optimize description (max 160 characters)
  const optimizedDescription = description?.length > 160 
    ? description.substring(0, 157) + '...'
    : description || 'AI-powered digital marketing solutions for modern businesses. Expert SEO, content marketing, and automation services.';
  
  // Default keywords
  const optimizedKeywords = keywords || 'digital marketing, AI marketing, SEO, content marketing, automation';
  
  // Default image
  const defaultImage = `${baseUrl}/lovable-uploads/06143896-3705-4777-8c31-5f139371be88.png`;
  const optimizedImage = imageUrl || defaultImage;
  
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet prioritizeSeoTags>
      {/* Single Title Tag */}
      <title>{optimizedTitle}</title>
      
      {/* Single Meta Description */}
      <meta name="description" content={optimizedDescription} />
      
      {/* Single Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Essential Meta Tags */}
      <meta name="keywords" content={optimizedKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      
      {/* Open Graph - Single Set */}
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={optimizedImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - ${title || 'AI Marketing Solutions'}`} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards - Single Set */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={optimizedImage} />
      <meta name="twitter:site" content="@DigitalFro14616" />
      
      {/* Article-specific meta tags */}
      {pageType === 'article' && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:modified_time" content={modifiedDate || currentDate} />
          <meta property="article:author" content={siteName} />
          <meta property="article:section" content="Digital Marketing" />
        </>
      )}
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Basic Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": pageType === 'article' ? "Article" : "WebPage",
          "headline": optimizedTitle,
          "description": optimizedDescription,
          "url": canonicalUrl,
          "image": optimizedImage,
          "datePublished": publishedDate || currentDate,
          "dateModified": modifiedDate || currentDate,
          "author": {
            "@type": "Organization",
            "name": siteName,
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization", 
            "name": siteName,
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": defaultImage
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        })}
      </script>
    </Helmet>
  );
};