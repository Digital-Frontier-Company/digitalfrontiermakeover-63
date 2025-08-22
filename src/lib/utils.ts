
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
  url: string = "https://thedigitalfrontier.ai",
  logoUrl: string = "https://thedigitalfrontier.ai/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
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
  publisherLogoUrl: string = "https://thedigitalfrontier.ai/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
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
