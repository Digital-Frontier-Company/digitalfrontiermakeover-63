
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { handleClientRedirect } from "@/utils/redirect";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SEOBreadcrumbs, RelatedLinks, CTASection } from "./InternalLinkEnhancer";
import { getRouteConfig } from "@/utils/routes";

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

  // Only handle redirects in production or for specific cases
  useEffect(() => {
    // Ensure window is available (SSR safety)
    if (typeof window === 'undefined') return;
    
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
    // Ensure window is available (SSR safety)
    if (typeof window === 'undefined') return;
    
    const handleHashChange = () => {
      if (typeof window === 'undefined') return;
      
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
