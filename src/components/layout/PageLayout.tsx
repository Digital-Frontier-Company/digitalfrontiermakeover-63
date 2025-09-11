
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { InternalLinkOptimizer } from "@/components/seo/InternalLinkOptimizer";
import { handleClientRedirect } from "@/utils/redirect";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SEOAdvanced } from "@/components/SEOAdvanced";
import { SEOBreadcrumbs, RelatedLinks, CTASection } from "./InternalLinkEnhancer";
import { getRouteConfig } from "@/utils/seo";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  currentPath: string;
  pageType?: 'article' | 'page' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentPath,
  pageType = 'page',
  publishedDate,
  modifiedDate
}) => {
  // Get route config for SEO optimization
  const routeConfig = getRouteConfig(currentPath);
  
  // Generate optimized H1 based on route configuration
  const getOptimizedH1 = (path: string): string => {
    const h1Map: Record<string, string> = {
      '/': 'AI Marketing Solutions That Drive Real Business Growth',
      '/about-us': 'About Digital Frontier AI Marketing Team & Expert Solutions',
      '/contact': 'Contact Digital Frontier for Free Marketing Consultation',
      '/answer-engine-optimization': 'Answer Engine Optimization AEO Services for Business Growth',
      '/generative-engine-optimization': 'Generative Engine Optimization GEO Services & AI Content',
      '/blog': 'Marketing Blog with AI Strategy Insights & Expert Analysis',
      '/faq': 'FAQ: Digital Frontier Marketing Questions & Expert Answers',
      '/seo-audit-dashboard': 'SEO Audit Dashboard Website Analysis & Optimization Tools'
    };
    
    return h1Map[path] || routeConfig?.title?.substring(0, 60) || title;
  };

  const optimizedH1 = getOptimizedH1(currentPath);

  // Only handle redirects in production or for specific cases
  useEffect(() => {
    // Skip redirects in development/preview environments
    if (window.location.hostname.includes('lovable') || 
        window.location.hostname === 'localhost' ||
        window.location.hostname.includes('127.0.0.1')) {
      return;
    }
    
    const redirectUrl = handleClientRedirect(window.location);
    if (redirectUrl && redirectUrl !== window.location.href) {
      window.location.replace(redirectUrl);
      return;
    }
  }, []);
    
  // Effect to handle anchor link smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Use smooth scroll behavior
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Run on mount in case of direct anchor link access
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Generate breadcrumbs for better navigation and SEO
  const breadcrumbs = generateBreadcrumbs(currentPath, title);

  return (
    <>
      <SEOOptimizer 
        path={currentPath}
        title={title}
        description={subtitle || routeConfig?.description || ''}
        keywords={routeConfig?.keywords}
        pageType={routeConfig?.pageType || (pageType === 'article' ? 'article' : pageType === 'service' ? 'service' : 'website')}
        publishedDate={publishedDate}
        modifiedDate={modifiedDate}
        breadcrumbs={breadcrumbs}
      />
      <SEOAdvanced 
        enableWebVitals={true}
        enableCriticalCSS={true}
        enablePreloadHints={true}
        criticalImageUrls={["/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png"]}
        lcpImageUrl="/lovable-uploads/437eedfa-5c80-4a7d-9af4-21878ea732d7.png"
      />
      
      {/* Enhanced SEO Breadcrumbs */}
      <div className="w-full px-4 pt-6">
        <SEOBreadcrumbs currentPath={currentPath} />
      </div>
      
      {/* Hero Section */}
      <section className="df-hero-section py-16" itemScope itemType="https://schema.org/WebPageElement">
        <div className="w-full px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" 
              alt="Digital Frontier Company - AI-Powered Marketing Solutions" 
              className="df-logo mx-auto mb-6" 
              width="180" 
              height="180" 
              loading="eager"
              decoding="async"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4" itemProp="headline">
              {optimizedH1}
            </h1>
            {subtitle && <h2 className="text-xl text-slate-300" itemProp="description">{subtitle}</h2>}
          </div>
        </div>
      </section>
      
      {/* Main Content with Semantic HTML */}
      <main className="w-full py-8 px-4 mt-4" role="main">
        <div className="w-full mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article itemScope itemType={pageType === 'article' ? "https://schema.org/Article" : "https://schema.org/WebPage"}>
            {pageType === 'article' && (
              <header className="mb-8">
                <h2 className="sr-only" itemProp="headline">{title}</h2>
                {publishedDate && (
                  <time dateTime={publishedDate} itemProp="datePublished" className="text-sm text-muted-foreground">
                    Published: {new Date(publishedDate).toLocaleDateString()}
                  </time>
                )}
                {modifiedDate && (
                  <time dateTime={modifiedDate} itemProp="dateModified" className="text-sm text-muted-foreground ml-4">
                    Updated: {new Date(modifiedDate).toLocaleDateString()}
                  </time>
                )}
              </header>
            )}
            <div className="space-y-8" itemProp="mainEntity">
              {children}
            </div>
            
            {/* Enhanced Internal Linking - SEO Optimized */}
            <InternalLinkOptimizer 
              currentPath={currentPath} 
              variant="grid"
              showTitle={true}
              maxLinks={6}
            />
            
            {/* Call-to-Action Section */}
            <CTASection variant={pageType === 'article' ? 'blog' : 'service'} />
          </article>
        </div>
      </main>
      
      {/* Performance Monitor */}
      <PerformanceMonitor />
    </>
  );
};

/**
 * Generate breadcrumbs for SEO and navigation
 */
function generateBreadcrumbs(path: string, title: string): Array<{ name: string; url: string }> {
  const breadcrumbs = [{ name: 'Home', url: 'https://digitalfrontier.app/' }];
  
  const pathSegments = path.split('/').filter(Boolean);
  let currentPath = '';
  
  // Map of path segments to readable names
  const segmentNames: Record<string, string> = {
    'answer-engine-optimization': 'Answer Engine Optimization',
    'generative-engine-optimization': 'Generative Engine Optimization',
    'search-engine-optimization': 'SEO Services',
    'seo-audit-dashboard': 'SEO Audit Dashboard',
    'gtm-strategy-blueprint': 'GTM Strategy',
    'ai-prompt-templates': 'AI Prompt Templates',
    'blog': 'Blog',
    'about-us': 'About',
    'contact': 'Contact'
  };
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segmentNames[segment] || 
                 segment.split('-').map(word => 
                   word.charAt(0).toUpperCase() + word.slice(1)
                 ).join(' ');
    
    breadcrumbs.push({
      name,
      url: `https://digitalfrontier.app${currentPath}`
    });
  });
  
  return breadcrumbs;
}

export default PageLayout;
