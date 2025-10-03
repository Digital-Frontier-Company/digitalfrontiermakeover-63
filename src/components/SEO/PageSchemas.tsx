import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://digitalfrontier.app';

// Service Page Schema
interface ServicePageSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  priceRange?: string;
  areaServed?: string[];
  serviceType?: string;
}

export const ServicePageSchema: React.FC<ServicePageSchemaProps> = ({
  serviceName,
  description,
  url,
  priceRange = "$$",
  areaServed = ["Memphis, TN", "Germantown, TN", "Collierville, TN"],
  serviceType = "Digital Marketing"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "serviceType": serviceType,
    "url": url,
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

// Local Business Schema for Location Pages
interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  city: string;
  state: string;
  latitude: string;
  longitude: string;
  postalCode?: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  url,
  city,
  state,
  latitude,
  longitude,
  postalCode = "38125"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": "+1-901-337-9915",
    "email": "contact@digitalfrontier.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "parentOrganization": {
      "@id": `${siteUrl}/#organization`
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

// Enhanced Article Schema for Blog Posts
interface BlogArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  keywords?: string[];
}

export const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "Digital Frontier Company",
  keywords = []
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": "1200",
      "height": "630"
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": authorName
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

// Website Search Action Schema
export const WebsiteSearchSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "Digital Frontier AI",
    "description": "AI-powered digital marketing solutions",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

// Contact Page Schema
export const ContactPageSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": `${siteUrl}/contact`,
    "name": "Contact Digital Frontier",
    "description": "Get in touch with Digital Frontier for AI-powered marketing solutions",
    "mainEntity": {
      "@id": `${siteUrl}/#organization`
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

// About Page Schema
export const AboutPageSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": `${siteUrl}/about`,
    "name": "About Digital Frontier",
    "description": "Learn about Digital Frontier's mission to revolutionize digital marketing with AI",
    "mainEntity": {
      "@id": `${siteUrl}/#organization`
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};
