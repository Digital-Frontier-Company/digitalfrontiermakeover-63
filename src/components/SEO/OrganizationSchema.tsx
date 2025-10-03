import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  includeRating?: boolean;
  ratingValue?: string;
  reviewCount?: string;
}

/**
 * Comprehensive Organization Schema Component
 * Provides complete business information for all pages
 */
export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  includeRating = false,
  ratingValue = "4.9",
  reviewCount = "200"
}) => {
  const siteUrl = 'https://digitalfrontier.app';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Digital Frontier Company",
    "alternateName": "Digital Frontier AI",
    "legalName": "Digital Frontier Company LLC",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/lovable-uploads/e7cef708-2992-4277-8f17-0afefe3d7144.png`,
      "width": "512",
      "height": "512"
    },
    "image": `${siteUrl}/lovable-uploads/e7cef708-2992-4277-8f17-0afefe3d7144.png`,
    "description": "AI-powered digital marketing agency specializing in Answer Engine Optimization (AEO), Search Engine Optimization (SEO), and innovative marketing strategies for businesses seeking to thrive in the AI-driven digital landscape.",
    
    "telephone": "+1-901-337-9915",
    "email": "contact@digitalfrontier.app",
    
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8135 Walnut Grove Rd",
      "addressLocality": "Memphis",
      "addressRegion": "TN",
      "postalCode": "38125",
      "addressCountry": "US"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.1495",
      "longitude": "-90.0490"
    },
    
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61572896248731",
      "https://x.com/DigitalFro14616",
      "https://www.youtube.com/@Digital_FrontierCO",
      "https://www.tiktok.com/@digital_frontier_company",
      "https://www.instagram.com/digital_frontier_company/",
      "https://www.linkedin.com/company/digital-frontier-company"
    ],
    
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-901-337-9915",
        "contactType": "customer service",
        "email": "contact@digitalfrontier.app",
        "availableLanguage": ["English"],
        "areaServed": "US"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-901-337-9915",
        "contactType": "sales",
        "email": "contact@digitalfrontier.app",
        "availableLanguage": ["English"]
      }
    ],
    
    "areaServed": [
      {
        "@type": "City",
        "name": "Memphis",
        "containedIn": {
          "@type": "State",
          "name": "Tennessee"
        }
      },
      {
        "@type": "City",
        "name": "Germantown",
        "containedIn": {
          "@type": "State",
          "name": "Tennessee"
        }
      },
      {
        "@type": "City",
        "name": "Collierville",
        "containedIn": {
          "@type": "State",
          "name": "Tennessee"
        }
      },
      {
        "@type": "State",
        "name": "Tennessee"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Answer Engine Optimization (AEO)",
            "description": "Optimize your content for AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)",
            "description": "Comprehensive SEO services to improve organic search rankings and drive qualified traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimization (GEO)",
            "description": "Optimize content for AI-generated search results and conversational search interfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Implementation Consulting",
            "description": "Strategic consulting for implementing AI solutions in your marketing and business operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Strategy",
            "description": "Comprehensive digital marketing strategy development and execution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto & Web3 Marketing",
            "description": "Specialized marketing services for cryptocurrency, blockchain, and Web3 projects"
          }
        }
      ]
    },
    
    "priceRange": "$$",
    "paymentAccepted": "Credit Card, Debit Card, Bank Transfer",
    "currenciesAccepted": "USD",
    
    ...(includeRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": reviewCount
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema, null, 2)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
