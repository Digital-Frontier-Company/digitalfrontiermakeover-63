
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return format(date, 'MMMM d, yyyy')
}

// New SEO utility functions

/**
 * Creates a schema.org Organization schema
 */
export function generateOrganizationSchema(
  name: string = "Digital Frontier Company",
  url: string = "https://digitalfrontier.app",
  logoUrl: string = "https://digitalfrontier.app/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
  socialUrls: string[] = [
    "https://www.facebook.com/profile.php?id=61572896248731",
    "https://x.com/DigitalFro14616",
    "https://www.youtube.com/@Digital_FrontierCO",
    "https://www.tiktok.com/@digital_frontier_company",
    "https://www.instagram.com/digital_frontier_company/",
    "https://www.linkedin.com/company/digital-frontier-company"
  ]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logoUrl,
    "sameAs": socialUrls
  };
}

/**
 * Creates a schema.org BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: {name: string, url: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Creates a schema.org Article schema
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  authorName: string = "Digital Frontier Company",
  publisherName: string = "Digital Frontier Company",
  publisherLogoUrl: string = "https://digitalfrontier.app/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
  datePublished: string = new Date().toISOString().split('T')[0],
  dateModified: string = new Date().toISOString().split('T')[0],
  pageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogoUrl
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };
}

/**
 * Creates meta tags for SEO
 */
export function generateMetaTags(title: string, description: string, keywords: string, canonicalUrl: string) {
  return {
    title: `${title} | Digital Frontier`,
    description,
    keywords,
    canonicalUrl
  };
}

// Advanced Schema Generators for AI Optimization

/**
 * Enhanced Local Business Schema with geo-coordinates and detailed info
 */
export function generateLocalBusinessSchema(
  businessName: string,
  city: string,
  state: string,
  latitude?: number,
  longitude?: number,
  phoneNumber?: string,
  address?: string,
  services?: string[],
  priceRange?: string,
  operatingHours?: object
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://digitalfrontier.app/#localbusiness-${city.toLowerCase()}`,
    "name": businessName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city
      },
      {
        "@type": "State", 
        "name": state
      }
    ],
    "url": "https://digitalfrontier.app",
    "telephone": phoneNumber || "+1-901-555-0123",
    "priceRange": priceRange || "$$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude || 35.1495,
        "longitude": longitude || -90.0490
      },
      "geoRadius": "50000"
    }
  };

  if (address) {
    schema.address.streetAddress = address;
  }

  if (latitude && longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    };
  }

  if (services && services.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "name": service,
        "description": `Professional ${service.toLowerCase()} services in ${city}, ${state}`
      }))
    };
  }

  if (operatingHours) {
    schema.openingHours = operatingHours;
  }

  return schema;
}

/**
 * Enhanced Service Schema with detailed offerings
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  provider: string = "Digital Frontier Company",
  serviceType: string,
  areaServed: string = "Worldwide",
  offers?: Array<{name: string, description: string, price?: string}>
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "@id": "https://digitalfrontier.app/#organization"
    },
    "serviceType": serviceType,
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    }
  };

  if (offers && offers.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${serviceName} Packages`,
      "itemListElement": offers.map(offer => {
        const offerSchema: any = {
          "@type": "Offer",
          "name": offer.name,
          "description": offer.description
        };
        if (offer.price) {
          offerSchema.price = offer.price;
          offerSchema.priceCurrency = "USD";
        }
        return offerSchema;
      })
    };
  }

  return schema;
}

/**
 * AI-Optimized FAQ Schema with enhanced structure
 */
export function generateEnhancedFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
    category?: string;
    relatedQuestions?: string[];
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ".faq-answer"
        }
      },
      ...(faq.category && { "about": faq.category }),
      ...(faq.relatedQuestions && {
        "suggestedAnswer": faq.relatedQuestions.map(q => ({
          "@type": "Answer",
          "text": q
        }))
      })
    }))
  };
}

/**
 * How-To Schema for process documentation
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{name: string, text: string, image?: string}>,
  totalTime?: string,
  estimatedCost?: string
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && {
        "image": {
          "@type": "ImageObject",
          "url": step.image
        }
      })
    }))
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": estimatedCost
    };
  }

  return schema;
}

/**
 * Case Study Schema for project showcases
 */
export function generateCaseStudySchema(
  name: string,
  description: string,
  client: string,
  industry: string,
  challenge: string,
  solution: string,
  results: Array<{metric: string, value: string}>,
  datePublished?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": name,
    "description": description,
    "about": {
      "@type": "Organization",
      "name": client,
      "industry": industry
    },
    "abstract": challenge,
    "text": solution,
    "creator": {
      "@type": "Organization",
      "name": "Digital Frontier Company",
      "@id": "https://digitalfrontier.app/#organization"
    },
    "datePublished": datePublished || new Date().toISOString().split('T')[0],
    "measurementTechnique": results.map(result => ({
      "@type": "PropertyValue",
      "name": result.metric,
      "value": result.value
    }))
  };
}

/**
 * Review Aggregate Schema for testimonials
 */
export function generateReviewAggregateSchema(
  itemName: string,
  ratingValue: number,
  reviewCount: number,
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    datePublished?: string;
  }>
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    }
  };

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.text,
      "datePublished": review.datePublished || new Date().toISOString().split('T')[0]
    }));
  }

  return schema;
}

/**
 * Defined Term Schema for glossary and terminology
 */
export function generateDefinedTermSchema(
  term: string,
  definition: string,
  category?: string,
  sameAs?: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term,
    "description": definition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": category || "Digital Marketing Glossary"
    },
    ...(sameAs && { "sameAs": sameAs })
  };
}

/**
 * Course Schema for educational content
 */
export function generateCourseSchema(
  courseName: string,
  description: string,
  provider: string = "Digital Frontier Company",
  courseMode: string = "Online",
  duration?: string,
  skillLevel?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "@id": "https://digitalfrontier.app/#organization"
    },
    "courseMode": courseMode,
    "educationalLevel": skillLevel || "Beginner to Advanced",
    ...(duration && { "timeRequired": duration })
  };
}

/**
 * Video Object Schema for multimedia content
 */
export function generateVideoObjectSchema(
  name: string,
  description: string,
  videoUrl: string,
  thumbnailUrl: string,
  duration?: string,
  uploadDate?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "contentUrl": videoUrl,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate || new Date().toISOString(),
    ...(duration && { "duration": duration })
  };
}

/**
 * Speakable Schema for voice search optimization
 */
export function generateSpeakableSchema(selectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    "cssSelector": selectors
  };
}
