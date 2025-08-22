import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, SITE_CONFIG } from '@/utils/seo';

interface SEOHeadProps {
  path: string;
  title?: string;
  description?: string;
  keywords?: string;
  pageType?: 'website' | 'article' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
}

/**
 * Comprehensive SEO Head component that handles all meta tags,
 * canonical URLs, Open Graph, Twitter Cards, and JSON-LD structured data
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  path,
  title,
  description,
  keywords,
  pageType = 'website',
  publishedDate,
  modifiedDate,
  imageUrl
}) => {
  const metaTags = generateMetaTags(path, title, description, keywords);
  const currentDate = new Date().toISOString();
  
  // Enhanced image handling with WebP support
  const optimizedImageUrl = imageUrl || SITE_CONFIG.logoUrl;
  const webpImageUrl = optimizedImageUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Generate JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}/#org`,
    "name": SITE_CONFIG.siteName,
    "url": SITE_CONFIG.baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_CONFIG.logoUrl,
      "width": 400,
      "height": 400
    },
    "description": SITE_CONFIG.defaultDescription,
    "foundingDate": "2023-01-01",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${SITE_CONFIG.baseUrl}/contact`
    },
    "sameAs": SITE_CONFIG.socialUrls
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    "url": SITE_CONFIG.baseUrl,
    "name": SITE_CONFIG.siteName,
    "description": SITE_CONFIG.defaultDescription,
    "publisher": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = path !== '/' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": metaTags.title.replace(` | ${SITE_CONFIG.siteName}`, ''),
        "item": metaTags.canonicalUrl
      }
    ]
  } : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType === 'article' ? "Article" : "WebPage",
    "@id": `${metaTags.canonicalUrl}#webpage`,
    "url": metaTags.canonicalUrl,
    "name": metaTags.title,
    "description": metaTags.description,
    "isPartOf": { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    "about": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
    "datePublished": publishedDate || currentDate,
    "dateModified": modifiedDate || currentDate,
    ...(pageType === 'article' && {
      "headline": metaTags.title,
      "author": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
      "publisher": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
      "mainEntityOfPage": { "@id": `${metaTags.canonicalUrl}#webpage` },
      "image": {
        "@type": "ImageObject",
        "url": imageUrl || SITE_CONFIG.logoUrl,
        "width": 1200,
        "height": 630
      }
    })
  };

  // Enhanced FAQPage schema when applicable
  const faqSchema = path === '/faq' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes your AI marketing different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't just use AI tools—we build custom AI systems for each client. Our proprietary Answer Engine Optimization (AEO) methodology positions you to dominate AI-powered search results, giving you a massive first-mover advantage that most agencies can't replicate."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can we expect to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see initial improvements within 30 days, with significant results by 90 days. However, our AI systems continuously learn and optimize, meaning your results compound over time."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Answer Engine Optimization service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO includes optimizing your content for AI search engines like ChatGPT, Claude, and voice assistants. We restructure your content for featured snippets, implement schema markup, create AI-friendly content formats, and position your brand as the definitive answer to industry questions."
        }
      }
    ]
  } : null;

  // Service schema for service pages
  const serviceSchema = pageType === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": metaTags.title.replace(` | ${SITE_CONFIG.siteName}`, ''),
    "description": metaTags.description,
    "provider": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
    "url": metaTags.canonicalUrl,
    "serviceType": "Digital Marketing",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Answer Engine Optimization",
          "description": "Optimize content for AI-powered search engines and voice assistants"
        },
        {
          "@type": "Offer", 
          "name": "Generative Engine Optimization",
          "description": "Scale content production using AI while maintaining expert-level quality"
        },
        {
          "@type": "Offer",
          "name": "SEO Strategy",
          "description": "Data-driven SEO strategies to drive organic traffic and qualified leads"
        }
      ]
    }
  } : null;

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={SITE_CONFIG.siteName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL - Critical for preventing duplicate content */}
      <link rel="canonical" href={metaTags.canonicalUrl} />
      
      {/* Hreflang for international SEO */}
      <link rel="alternate" hrefLang="en" href={metaTags.canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={metaTags.canonicalUrl} />
      
      {/* Open Graph Meta Tags - Enhanced */}
      <meta property="og:type" content={metaTags.openGraph.type} />
      <meta property="og:title" content={metaTags.openGraph.title} />
      <meta property="og:description" content={metaTags.openGraph.description} />
      <meta property="og:url" content={metaTags.openGraph.url} />
      <meta property="og:site_name" content={metaTags.openGraph.siteName} />
      <meta property="og:image" content={optimizedImageUrl} />
      <meta property="og:image:secure_url" content={optimizedImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={metaTags.openGraph.images[0].alt} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content={modifiedDate || currentDate} />
      
      {/* Twitter Card Meta Tags - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTags.twitter.title} />
      <meta name="twitter:description" content={metaTags.twitter.description} />
      <meta name="twitter:image" content={optimizedImageUrl} />
      <meta name="twitter:image:alt" content={metaTags.openGraph.images[0].alt} />
      <meta name="twitter:site" content="@DigitalFro14616" />
      <meta name="twitter:creator" content="@DigitalFro14616" />
      <meta name="twitter:domain" content="thedigitalfrontier.ai" />
      
      {/* Article-specific meta tags */}
      {pageType === 'article' && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:modified_time" content={modifiedDate || currentDate} />
          <meta property="article:author" content="Digital Frontier Company" />
          <meta property="article:section" content="Digital Marketing" />
          <meta name="news_keywords" content={keywords} />
        </>
      )}
      
      {/* Technical SEO Meta Tags */}
      <meta name="theme-color" content="#0F172A" />
      <meta name="msapplication-TileColor" content="#0F172A" />
      <meta name="application-name" content={SITE_CONFIG.siteName} />
      <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geographic and Language Targeting */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="audience" content="all" />
      
      {/* Mobile and Performance Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="HandheldFriendly" content="true" />
      
      {/* Resource Hints and Preconnections */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://analytics.ahrefs.com" />
      <link rel="dns-prefetch" href="//js.hs-scripts.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Prefetch critical resources */}
      <link rel="prefetch" href="/sitemap.xml" />
      <link rel="prefetch" href="/robots.txt" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};