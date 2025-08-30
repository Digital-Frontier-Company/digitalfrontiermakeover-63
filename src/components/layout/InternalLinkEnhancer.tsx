import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_CONFIGS } from '@/utils/seo';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

/**
 * Enhanced internal link component with SEO-optimized anchor text
 */
export const InternalLink: React.FC<InternalLinkProps> = ({ 
  to, 
  children, 
  className = '',
  title 
}) => {
  const route = ROUTE_CONFIGS.find(r => r.path === to);
  const linkTitle = title || route?.title || '';
  
  return (
    <Link 
      to={to}
      className={`text-primary hover:text-primary-glow transition-colors duration-200 ${className}`}
      title={linkTitle}
      aria-label={`Navigate to ${linkTitle}`}
    >
      {children}
    </Link>
  );
};

/**
 * Contextual link suggestions based on current page
 */
export const RelatedLinks: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const getRelatedLinks = (path: string) => {
    // Define related link mappings for better internal linking
    const relations: Record<string, string[]> = {
      '/': ['/answer-engine-optimization', '/seo-audit-dashboard', '/contact'],
      '/answer-engine-optimization': ['/generative-engine-optimization', '/seo-vs-aeo-vs-geo', '/contact'],
      '/generative-engine-optimization': ['/answer-engine-optimization', '/ai-prompt-templates', '/contact'],
      '/search-engine-optimization': ['/answer-engine-optimization', '/seo-audit-dashboard', '/contact'],
      '/seo-audit-dashboard': ['/answer-engine-optimization', '/search-engine-optimization', '/contact'],
      '/blog': ['/answer-engine-optimization', '/ai-prompt-templates', '/newsletter'],
      '/contact': ['/answer-engine-optimization', '/seo-audit-dashboard', '/about-us']
    };
    
    return relations[path] || ['/contact', '/about-us', '/blog'];
  };

  const relatedPaths = getRelatedLinks(currentPath);
  const relatedRoutes = relatedPaths.map(path => 
    ROUTE_CONFIGS.find(r => r.path === path)
  ).filter(Boolean);

  if (relatedRoutes.length === 0) return null;

  return (
    <aside className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
      <h3 className="text-lg font-semibold mb-4 text-slate-100">Related Services</h3>
      <nav className="space-y-2">
        {relatedRoutes.map(route => (
          <InternalLink 
            key={route!.path}
            to={route!.path}
            className="block p-3 rounded-md hover:bg-slate-800/50 border border-transparent hover:border-slate-600"
          >
            <div className="font-medium">{route!.title.split(' | ')[0]}</div>
            <div className="text-sm text-slate-400 mt-1">
              {route!.description.substring(0, 100)}...
            </div>
          </InternalLink>
        ))}
      </nav>
    </aside>
  );
};

/**
 * Breadcrumb navigation with SEO-optimized internal links
 */
export const SEOBreadcrumbs: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  const breadcrumbs = [
    { path: '/', label: 'Home', title: 'AI Marketing Memphis | Digital Frontier Solutions' }
  ];
  
  let currentSegmentPath = '';
  pathSegments.forEach(segment => {
    currentSegmentPath += `/${segment}`;
    const route = ROUTE_CONFIGS.find(r => r.path === currentSegmentPath);
    
    if (route) {
      breadcrumbs.push({
        path: currentSegmentPath,
        label: route.title.split(' | ')[0],
        title: route.title
      });
    }
  });

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className="mb-6"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li 
            key={crumb.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            {index < breadcrumbs.length - 1 ? (
              <>
                <InternalLink 
                  to={crumb.path}
                  title={crumb.title}
                  className="text-slate-400 hover:text-slate-200"
                >
                  <span itemProp="name">{crumb.label}</span>
                </InternalLink>
                <span className="mx-2 text-slate-500">/</span>
                <meta itemProp="position" content={(index + 1).toString()} />
              </>
            ) : (
              <>
                <span className="text-slate-200" itemProp="name">
                  {crumb.label}
                </span>
                <meta itemProp="position" content={(index + 1).toString()} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

/**
 * Call-to-action with internal links
 */
export const CTASection: React.FC<{ variant?: 'default' | 'service' | 'blog' }> = ({ 
  variant = 'default' 
}) => {
  const ctaContent = {
    default: {
      title: 'Ready to Transform Your Marketing?',
      description: 'Get expert AI marketing solutions that drive real business growth.',
      primaryLink: '/contact',
      primaryText: 'Start Your Free Consultation',
      secondaryLink: '/answer-engine-optimization',
      secondaryText: 'Explore AEO Services'
    },
    service: {
      title: 'See This Strategy in Action',
      description: 'Get a comprehensive audit to see how we can optimize your marketing.',
      primaryLink: '/seo-audit-dashboard',
      primaryText: 'Get Free SEO Audit',
      secondaryLink: '/contact',
      secondaryText: 'Schedule Strategy Call'
    },
    blog: {
      title: 'Want Expert Implementation?',
      description: 'Let our team implement these strategies for your business.',
      primaryLink: '/contact',
      primaryText: 'Get Expert Implementation',
      secondaryLink: '/newsletter',
      secondaryText: 'Join Marketing Newsletter'
    }
  };

  const content = ctaContent[variant];

  return (
    <section className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl border border-primary/20">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-slate-100">{content.title}</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{content.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <InternalLink 
            to={content.primaryLink}
            className="bg-primary hover:bg-primary-glow text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            {content.primaryText}
          </InternalLink>
          <InternalLink 
            to={content.secondaryLink}
            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            {content.secondaryText}
          </InternalLink>
        </div>
      </div>
    </section>
  );
};