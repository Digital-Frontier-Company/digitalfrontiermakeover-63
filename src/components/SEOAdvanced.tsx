import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOAdvancedProps {
  enableWebVitals?: boolean;
  enableCriticalCSS?: boolean;
  enablePreloadHints?: boolean;
  criticalImageUrls?: string[];
  preloadFonts?: string[];
  lcpImageUrl?: string;
}

export const SEOAdvanced: React.FC<SEOAdvancedProps> = ({
  enableWebVitals = true,
  enableCriticalCSS = true,
  enablePreloadHints = true,
  criticalImageUrls = [],
  preloadFonts = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
  ],
  lcpImageUrl
}) => {
  
  // Core Web Vitals measurement and reporting
  useEffect(() => {
    if (!enableWebVitals) return;

    const reportWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          // Send to analytics (replace with your analytics service)
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
              custom_map: { metric_value: 'lcp_value' }
            });
          }
        });
        
        try {
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (error) {
          console.warn('LCP observation not supported:', error);
        }

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              custom_map: { metric_value: 'cls_value' }
            });
          }
        });
        
        try {
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        } catch (error) {
          console.warn('CLS observation not supported:', error);
        }

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid),
                custom_map: { metric_value: 'fid_value' }
              });
            }
          }
        });
        
        try {
          fidObserver.observe({ type: 'first-input', buffered: true });
        } catch (error) {
          console.warn('FID observation not supported:', error);
        }
      }
    };

    // Run after page load
    if (document.readyState === 'complete') {
      reportWebVitals();
    } else {
      window.addEventListener('load', reportWebVitals);
    }

    return () => {
      window.removeEventListener('load', reportWebVitals);
    };
  }, [enableWebVitals]);

  return (
    <Helmet>
      {/* Critical CSS inlining hint */}
      {enableCriticalCSS && (
        <style>{`
          /* Critical CSS for above-the-fold content */
          .hero-section { display: block; }
          .navigation { display: flex; }
          body { font-family: Inter, system-ui, sans-serif; }
        `}</style>
      )}

      {/* Font preloading for performance */}
      {enablePreloadHints && preloadFonts.map((fontUrl, index) => (
        <link
          key={index}
          rel="preload"
          href={fontUrl}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}

      {/* LCP image preloading with high priority */}
      {enablePreloadHints && lcpImageUrl && (
        <link
          rel="preload"
          href={lcpImageUrl}
          as="image"
          fetchPriority="high"
        />
      )}

      {/* Critical image preloading */}
      {enablePreloadHints && criticalImageUrls.map((imageUrl, index) => (
        <link
          key={index}
          rel="preload"
          href={imageUrl}
          as="image"
          type="image/webp"
        />
      ))}

      {/* Advanced performance hints */}
      {enablePreloadHints && (
        <>
          {/* Preload critical resources */}
          <link rel="preload" href="/src/index.css" as="style" />
          <link rel="modulepreload" href="/src/main.tsx" />
          
          {/* Prefetch next likely pages */}
          <link rel="prefetch" href="/about-us" />
          <link rel="prefetch" href="/contact" />
          <link rel="prefetch" href="/pricing" />
          
          {/* Early DNS resolution for external services */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//analytics.ahrefs.com" />
          <link rel="dns-prefetch" href="//js.hs-scripts.com" />
          
          {/* Preconnect to critical third parties */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </>
      )}

      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Content Security Policy (basic) */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https: data:; connect-src 'self' https:;"
      />

      {/* Structured data for Software Application */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Digital Frontier AI Platform",
          "description": "AI-powered content marketing and SEO optimization platform",
          "url": "https://thedigitalfrontier.ai",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "provider": {
            "@type": "Organization",
            "name": "Digital Frontier Company",
            "url": "https://thedigitalfrontier.ai"
          }
        })}
      </script>

      {/* Enhanced site search schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://thedigitalfrontier.ai",
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://thedigitalfrontier.ai/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};