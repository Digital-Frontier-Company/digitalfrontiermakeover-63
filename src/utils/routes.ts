/**
 * Route configurations for navigation and basic page information
 */

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
}

/**
 * Basic route configuration for navigation
 */
export const ROUTE_CONFIGS: RouteConfig[] = [
  {
    path: '/',
    title: 'AI Marketing Memphis | Digital Frontier Company Solutions',
    description: 'Digital marketing agency providing SEO, content strategy, and business growth solutions.'
  },
  {
    path: '/about-us',
    title: 'About Digital Frontier | AI Marketing Team & Mission Story',
    description: 'Learn about Digital Frontier\'s mission to revolutionize content marketing with AI-powered solutions.'
  },
  {
    path: '/contact',
    title: 'Contact Digital Frontier | Free Marketing Consultation Call',
    description: 'Ready to scale your content marketing? Contact Digital Frontier for a free consultation.'
  },
  {
    path: '/blog',
    title: 'Marketing Blog | AI Strategy Insights Digital Frontier Co',
    description: 'Expert insights on AI-powered content marketing, SEO strategies, and digital marketing trends.'
  },
  {
    path: '/faq',
    title: 'FAQ | Digital Frontier Marketing Questions & Expert Answers',
    description: 'Frequently asked questions about Digital Frontier\'s AI-powered content marketing services.'
  },
  {
    path: '/docs',
    title: 'Documentation - Digital Frontier Service Guides',
    description: 'Comprehensive documentation and guides for Digital Frontier\'s AI-powered content marketing services.'
  },
  {
    path: '/newsletter',
    title: 'Marketing Newsletter | AI Trends Digital Frontier Updates',
    description: 'Subscribe to Digital Frontier\'s newsletter for the latest AI marketing insights.'
  },
  {
    path: '/site-map',
    title: 'Site Map - Digital Frontier Navigation',
    description: 'Complete site map of Digital Frontier\'s resources, services, and content marketing insights.'
  },
  {
    path: '/insights',
    title: 'Insights Hub - Marketing Intelligence & Analytics',
    description: 'Access comprehensive marketing insights, analytics, and strategic resources.'
  },
  {
    path: '/browse-playbooks',
    title: 'Marketing Playbooks - Proven Content Strategies',
    description: 'Browse our collection of proven marketing playbooks and strategies.'
  },
  {
    path: '/search',
    title: 'Search - Find Digital Frontier Content',
    description: 'Search through Digital Frontier\'s content, resources, and services.'
  }
];

/**
 * Get route configuration by path
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  return ROUTE_CONFIGS.find(route => route.path === path);
}