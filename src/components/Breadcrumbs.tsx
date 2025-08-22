import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { ROUTE_CONFIGS } from '@/utils/seo';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    // Find current route configuration
    const currentRoute = ROUTE_CONFIGS.find(route => route.path === pathname);
    
    if (currentRoute) {
      // For blog posts, add blog section
      if (pathname.startsWith('/blog/') && pathname !== '/blog') {
        breadcrumbs.push({ label: 'Blog', href: '/blog' });
      }
      
      // Add current page
      breadcrumbs.push({
        label: currentRoute.title.split(' | ')[0].split(' - ')[0],
        href: pathname,
        isCurrentPage: true
      });
    } else {
      // Fallback for pages not in route config
      const segments = pathname.split('/').filter(Boolean);
      let currentPath = '';
      
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === segments.length - 1;
        
        breadcrumbs.push({
          label: segment.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          href: currentPath,
          isCurrentPage: isLast
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Generate JSON-LD for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": `https://thedigitalfrontier.ai${breadcrumb.href}`
    }))
  };

  return (
    <>
      {/* JSON-LD Schema for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 px-4 sm:px-6 lg:px-8"
        aria-label="Breadcrumb navigation"
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/60" />
              )}
              
              {breadcrumb.isCurrentPage ? (
                <span 
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    breadcrumb.label
                  )}
                </span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-sm px-1"
                  aria-label={`Navigate to ${breadcrumb.label}`}
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    breadcrumb.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};