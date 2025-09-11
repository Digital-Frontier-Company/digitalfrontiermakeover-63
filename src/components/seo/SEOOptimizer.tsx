import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  pageType?: 'website' | 'article' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

/**
 * Enhanced SEO component based on audit template requirements
 * Ensures all meta tags meet optimal length and quality standards
 */
export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  path,
  title,
  description,
  keywords,
  pageType = 'website',
  publishedDate,
  modifiedDate,
  imageUrl,
  breadcrumbs = []
}) => {
  const baseUrl = 'https://digitalfrontier.app';
  const canonicalUrl = `${baseUrl}${path}`;
  const currentDate = new Date().toISOString();
  
  // Optimize title to meet 45-60 character requirements
  const optimizedTitle = optimizeTitle(title);
  
  // Optimize description to meet 120-160 character requirements
  const optimizedDescription = optimizeDescription(description);
  
  // Generate optimized H1 (max 60 chars)
  const optimizedH1 = optimizeH1(title);
  
  // Default optimized image
  const optimizedImageUrl = imageUrl || '/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png';
  
  // Generate comprehensive JSON-LD structured data
  const schemas = generateSchemas({
    path,
    canonicalUrl,
    optimizedTitle,
    optimizedDescription,
    pageType,
    publishedDate,
    modifiedDate,
    breadcrumbs,
    imageUrl: optimizedImageUrl
  });

  return (
    <Helmet>
      {/* Essential Meta Tags - Optimized Lengths */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Digital Frontier Company" />
      
      {/* Language and Crawling Instructions */}
      <html lang="en" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL - Critical for preventing duplicate content */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Optimized Open Graph Tags */}
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Digital Frontier Company" />
      <meta property="og:image" content={`${baseUrl}${optimizedImageUrl}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={optimizedH1} />
      <meta property="og:locale" content="en_US" />
      {modifiedDate && <meta property="og:updated_time" content={modifiedDate} />}
      
      {/* Optimized Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={`${baseUrl}${optimizedImageUrl}`} />
      <meta name="twitter:image:alt" content={optimizedH1} />
      <meta name="twitter:site" content="@DigitalFro14616" />
      <meta name="twitter:creator" content="@DigitalFro14616" />
      
      {/* Article-specific meta tags */}
      {pageType === 'article' && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:modified_time" content={modifiedDate || currentDate} />
          <meta property="article:author" content="Digital Frontier Company" />
          <meta property="article:section" content="Digital Marketing" />
        </>
      )}
      
      {/* Hreflang for international SEO */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Comprehensive JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

/**
 * Optimize title to meet 45-60 character requirements
 */
function optimizeTitle(title: string): string {
  const MIN_LENGTH = 45;
  const MAX_LENGTH = 60;
  const BRAND = 'Digital Frontier';
  
  // Remove existing brand suffix
  const titleWithoutBrand = title.replace(/\s*\|\s*Digital Frontier.*$/, '').trim();
  
  // If title is already optimal length, return as-is
  if (title.length >= MIN_LENGTH && title.length <= MAX_LENGTH) {
    return title;
  }
  
  // If too long, truncate and add brand
  if (title.length > MAX_LENGTH) {
    const maxContentLength = MAX_LENGTH - BRAND.length - 3; // " | "
    const truncated = titleWithoutBrand.substring(0, maxContentLength).trim();
    return `${truncated} | ${BRAND}`;
  }
  
  // If too short, add brand if not present
  if (!title.includes(BRAND)) {
    const withBrand = `${titleWithoutBrand} | ${BRAND}`;
    if (withBrand.length <= MAX_LENGTH) {
      return withBrand;
    }
  }
  
  // Add power words to extend short titles
  const powerWords = ['Expert', 'Professional', 'Advanced', 'Complete', 'Proven'];
  for (const word of powerWords) {
    const enhanced = `${word} ${titleWithoutBrand} | ${BRAND}`;
    if (enhanced.length >= MIN_LENGTH && enhanced.length <= MAX_LENGTH) {
      return enhanced;
    }
  }
  
  return title; // Fallback to original
}

/**
 * Optimize description to meet 120-160 character requirements
 */
function optimizeDescription(description: string): string {
  const MIN_LENGTH = 120;
  const MAX_LENGTH = 160;
  
  // If already optimal, return as-is
  if (description.length >= MIN_LENGTH && description.length <= MAX_LENGTH) {
    return description;
  }
  
  // If too long, truncate
  if (description.length > MAX_LENGTH) {
    return description.substring(0, MAX_LENGTH - 3).trim() + '...';
  }
  
  // If too short, add compelling CTAs
  const ctas = [
    ' Start today.',
    ' Get expert results.',
    ' Contact us now.',
    ' Learn more.',
    ' Schedule consultation.',
    ' Transform your business.',
    ' Proven strategies included.'
  ];
  
  for (const cta of ctas) {
    const extended = description + cta;
    if (extended.length >= MIN_LENGTH && extended.length <= MAX_LENGTH) {
      return extended;
    }
  }
  
  // Add descriptive words if still too short
  const descriptors = [
    ' Professional solutions available.',
    ' Expert guidance included.',
    ' Comprehensive approach delivered.',
    ' Results-driven methodology.'
  ];
  
  for (const descriptor of descriptors) {
    const extended = description + descriptor;
    if (extended.length >= MIN_LENGTH && extended.length <= MAX_LENGTH) {
      return extended;
    }
  }
  
  return description; // Fallback
}

/**
 * Generate optimized H1 (max 60 characters)
 */
function optimizeH1(title: string): string {
  const MAX_LENGTH = 60;
  
  // Remove brand from H1
  const h1 = title.replace(/\s*\|\s*Digital Frontier.*$/, '').trim();
  
  if (h1.length <= MAX_LENGTH) {
    return h1;
  }
  
  // Truncate if too long
  return h1.substring(0, MAX_LENGTH).trim();
}

/**
 * Generate comprehensive structured data schemas
 */
function generateSchemas(params: {
  path: string;
  canonicalUrl: string;
  optimizedTitle: string;
  optimizedDescription: string;
  pageType: string;
  publishedDate?: string;
  modifiedDate?: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  imageUrl: string;
}): any[] {
  const {
    path,
    canonicalUrl,
    optimizedTitle,
    optimizedDescription,
    pageType,
    publishedDate,
    modifiedDate,
    breadcrumbs,
    imageUrl
  } = params;
  
  const baseUrl = 'https://digitalfrontier.app';
  const currentDate = new Date().toISOString();
  
  const schemas: any[] = [];
  
  // Organization Schema (always include)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#org`,
    "name": "Digital Frontier Company",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png`,
      "width": 400,
      "height": 400
    },
    "description": "Leading AI-powered marketing agency specializing in Answer Engine Optimization and content strategies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "TN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${baseUrl}/contact`
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61572896248731",
      "https://x.com/DigitalFro14616",
      "https://www.youtube.com/@Digital_FrontierCO",
      "https://www.linkedin.com/company/digital-frontier-company"
    ]
  });
  
  // WebSite Schema (for homepage)
  if (path === '/') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Digital Frontier Company",
      "description": optimizedDescription,
      "publisher": { "@id": `${baseUrl}/#org` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    });
  }
  
  // WebPage/Article Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": pageType === 'article' ? "Article" : "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": optimizedTitle,
    "description": optimizedDescription,
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#org` },
    "datePublished": publishedDate || currentDate,
    "dateModified": modifiedDate || currentDate,
    ...(pageType === 'article' && {
      "headline": optimizedTitle,
      "author": { "@id": `${baseUrl}/#org` },
      "publisher": { "@id": `${baseUrl}/#org` },
      "mainEntityOfPage": { "@id": `${canonicalUrl}#webpage` },
      "image": {
        "@type": "ImageObject",
        "url": `${baseUrl}${imageUrl}`,
        "width": 1200,
        "height": 630
      }
    })
  });
  
  // Service Schema for service pages
  if (pageType === 'service') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": optimizedTitle.replace(/\s*\|\s*Digital Frontier.*$/, ''),
      "description": optimizedDescription,
      "provider": { "@id": `${baseUrl}/#org` },
      "url": canonicalUrl,
      "serviceType": "Digital Marketing",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      }
    });
  }
  
  // Breadcrumb Schema
  if (breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }
  
  return schemas;
}

export default SEOOptimizer;