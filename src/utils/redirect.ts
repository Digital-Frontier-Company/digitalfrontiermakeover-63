/**
 * URL Redirect Utilities
 * Handles basic URL redirects
 */

const SITE_CONFIG = {
  baseUrl: 'https://Digitalfrontier.app'
};

function getCanonicalUrl(path: string): string {
  // Remove trailing slash except for root
  const normalizedPath = path === '/' ? path : path.replace(/\/$/, '');
  return `${SITE_CONFIG.baseUrl}${normalizedPath}`;
}

export interface RedirectRule {
  from: string | RegExp;
  to: string | ((match: string) => string);
  type: 'exact' | 'pattern';
  reason: string;
}

/**
 * Comprehensive redirect rules for handling duplicate URLs
 */
export const REDIRECT_RULES: RedirectRule[] = [
  // Remove trailing slashes (except root)
  {
    from: /^(.+)\/$/,
    to: '$1',
    type: 'pattern',
    reason: 'Remove trailing slash'
  },
  
  // Force HTTPS
  {
    from: /^http:\/\/(.*)$/,
    to: 'https://$1',
    type: 'pattern',
    reason: 'Force HTTPS'
  },
  
  // Remove www subdomain if present
  {
    from: /^https:\/\/www\.digitalfrontier\.app(.*)$/,
    to: `${SITE_CONFIG.baseUrl}$1`,
    type: 'pattern',
    reason: 'Remove www subdomain'
  },
  
  // Sitemap redirects (both /sitemap and /site-map should go to same canonical)
  {
    from: '/sitemap',
    to: '/site-map',
    type: 'exact',
    reason: 'Redirect sitemap variant'
  },
  
  // Only remove specific problematic query parameters, not all
  // Commenting out aggressive query/hash removal that breaks navigation
  
  // Case normalization handled separately in checkRedirect function
  
  // Blog URL consolidation
  {
    from: '/blog/',
    to: '/blog',
    type: 'exact',
    reason: 'Remove trailing slash from blog'
  },
  
  // Common URL typos and variations
  {
    from: '/about-us/',
    to: '/about-us',
    type: 'exact',
    reason: 'Remove trailing slash'
  },
  {
    from: '/contact-us',
    to: '/contact',
    type: 'exact',
    reason: 'Standardize contact URL'
  },
  {
    from: '/contact-us/',
    to: '/contact',
    type: 'exact',
    reason: 'Standardize contact URL'
  },
  
  // Service page variations
  {
    from: '/services/answer-engine-optimization',
    to: '/answer-engine-optimization',
    type: 'exact',
    reason: 'Remove services prefix'
  },
  {
    from: '/services/generative-engine-optimization',
    to: '/generative-engine-optimization',
    type: 'exact',
    reason: 'Remove services prefix'
  },
  {
    from: '/services/search-engine-optimization',
    to: '/search-engine-optimization',
    type: 'exact',
    reason: 'Remove services prefix'
  },
  
  // Legacy URL patterns
  {
    from: '/home',
    to: '/',
    type: 'exact',
    reason: 'Redirect home to root'
  },
  {
    from: '/index',
    to: '/',
    type: 'exact',
    reason: 'Redirect index to root'
  },
  {
    from: '/index.html',
    to: '/',
    type: 'exact',
    reason: 'Redirect index.html to root'
  },
  {
    from: '/default.html',
    to: '/',
    type: 'exact',
    reason: 'Redirect default.html to root'
  }
];

/**
 * Check if a URL needs redirection and return the canonical URL
 */
export function checkRedirect(url: string): { shouldRedirect: boolean; canonicalUrl: string; rule?: RedirectRule } {
  try {
    const urlObj = new URL(url, SITE_CONFIG.baseUrl);
    const fullUrl = urlObj.toString();
    const pathname = urlObj.pathname;
    
    // Check each redirect rule
    for (const rule of REDIRECT_RULES) {
      if (rule.type === 'exact') {
        if (pathname === rule.from && typeof rule.to === 'string') {
          return {
            shouldRedirect: true,
            canonicalUrl: getCanonicalUrl(rule.to),
            rule
          };
        }
      } else if (rule.type === 'pattern') {
        if (rule.from instanceof RegExp && typeof rule.to === 'string') {
          if (rule.from.test(fullUrl)) {
            const redirectUrl = fullUrl.replace(rule.from, rule.to);
            return {
              shouldRedirect: true,
              canonicalUrl: redirectUrl,
              rule
            };
          } else if (rule.from.test(pathname)) {
            const redirectPath = pathname.replace(rule.from, rule.to);
            return {
              shouldRedirect: true,
              canonicalUrl: getCanonicalUrl(redirectPath),
              rule
            };
          }
        }
      }
    }
    
    // Check if the URL is already canonical
    const canonicalUrl = getCanonicalUrl(pathname);
    const shouldRedirect = fullUrl !== canonicalUrl;
    
    return {
      shouldRedirect,
      canonicalUrl,
      rule: shouldRedirect ? {
        from: fullUrl,
        to: canonicalUrl,
        type: 'exact',
        reason: 'Normalize to canonical URL'
      } : undefined
    };
  } catch (error) {
    console.error('Error checking redirect:', error);
    return {
      shouldRedirect: false,
      canonicalUrl: getCanonicalUrl(url)
    };
  }
}

/**
 * Generate .htaccess redirects for Apache servers
 */
export function generateHtaccessRedirects(): string {
  const redirects = REDIRECT_RULES
    .filter(rule => rule.type === 'exact' && typeof rule.to === 'string')
    .map(rule => `Redirect 301 ${rule.from} ${rule.to}`)
    .join('\n');
  
  return `# SEO Redirects - Generated automatically
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www
RewriteCond %{HTTP_HOST} ^www\\.digitalfrontier\\.app [NC]
RewriteRule ^(.*)$ https://digitalfrontier.app/$1 [L,R=301]

# Remove trailing slashes (except for root)
RewriteCond %{REQUEST_URI} !^/$
RewriteCond %{REQUEST_URI} /$
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Specific page redirects
${redirects}

# Remove query parameters for clean URLs
RewriteCond %{QUERY_STRING} .
RewriteRule ^(.*)$ /$1? [R=301,L]`;
}

/**
 * Generate Nginx redirects
 */
export function generateNginxRedirects(): string {
  const redirects = REDIRECT_RULES
    .filter(rule => rule.type === 'exact' && typeof rule.to === 'string')
    .map(rule => `location = ${rule.from} { return 301 ${rule.to}; }`)
    .join('\n    ');
  
  return `# SEO Redirects - Generated automatically
server {
    # Force HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
    
    # Remove www
    if ($host = "www.digitalfrontier.app") {
        return 301 https://digitalfrontier.app$request_uri;
    }
    
    # Remove trailing slashes
    rewrite ^/(.*)/$ /$1 permanent;
    
    # Specific page redirects
    ${redirects}
    
    # Remove query parameters
    if ($args) {
        rewrite ^(.*)$ $1? permanent;
    }
}`;
}

/**
 * Client-side redirect handler for React Router
 */
export function handleClientRedirect(location: Location): string | null {
  const currentUrl = `${location.protocol}//${location.host}${location.pathname}${location.search}${location.hash}`;
  const result = checkRedirect(currentUrl);
  
  if (result.shouldRedirect) {
    console.log(`🔄 Redirecting: ${currentUrl} → ${result.canonicalUrl} (${result.rule?.reason})`);
    return result.canonicalUrl;
  }
  
  return null;
}