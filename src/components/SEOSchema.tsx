import { Helmet } from 'react-helmet-async';

export default function SEOSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://digitalfrontier.app/#organization",
    "name": "Digital Frontier Company",
    "alternateName": "Digital Frontier",
    "url": "https://digitalfrontier.app/",
    "logo": {
      "@type": "ImageObject",
      "url": "/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
      "width": 512,
      "height": 512
    },
    "description": "The Digital Frontier is an AI-powered content marketing and SEO agency that builds scalable content engines for B2B tech companies.",
    "foundingDate": "2023-01-01",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://digitalfrontier.app/contact"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61572896248731",
      "https://x.com/DigitalFro14616",
      "https://www.youtube.com/@Digital_FrontierCO",
      "https://www.tiktok.com/@digital_frontier_company",
      "https://www.instagram.com/digital_frontier_company/",
      "https://www.linkedin.com/company/digital-frontier-company"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Content Marketing",
    "provider": { "@id": "https://digitalfrontier.app/#organization" },
    "description": "AI-powered content marketing and SEO services that build scalable content engines for B2B tech companies.",
    "serviceType": "Content Marketing",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Content Marketing Services",
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
  };

  const faqSchema = {
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://digitalfrontier.app/#website",
    "url": "https://digitalfrontier.app/",
    "name": "Digital Frontier Company",
    "description": "AI-powered content marketing and SEO agency",
    "publisher": { "@id": "https://digitalfrontier.app/#organization" },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://digitalfrontier.app/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://digitalfrontier.app/"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}