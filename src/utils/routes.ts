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
    title: 'Premium AI Marketing Excellence | Boutique Digital Frontier Consultancy',
    description: 'Experience sophisticated AI marketing strategies crafted exclusively for discerning brands. Our boutique consultancy delivers bespoke solutions with white-glove service and exceptional results.'
  },
  {
    path: '/about-us',
    title: 'About Digital Frontier | Boutique AI Marketing Excellence & Distinguished Expertise',
    description: 'Discover Digital Frontier, the boutique consultancy redefining AI marketing with sophisticated strategies, personalized service, and exceptional results for discerning clients.'
  },
  {
    path: '/contact',
    title: 'Contact Our Boutique Marketing Consultancy | Exclusive Private Consultation',
    description: 'Schedule your private consultation with our boutique marketing experts. Experience white-glove service and bespoke strategies crafted exclusively for sophisticated brands.'
  },
  {
    path: '/blog',
    title: 'Luxury Marketing Insights | Sophisticated Strategies & Premium Content',
    description: 'Exclusive insights from our boutique marketing experts. Discover sophisticated strategies, premium approaches, and luxury marketing content for discerning brands.'
  },
  {
    path: '/faq',
    title: 'FAQ | Boutique Marketing Consultancy Questions & Expert Answers',
    description: 'Frequently asked questions about Digital Frontier\'s boutique AI marketing services, sophisticated strategies, and white-glove consultation process.'
  },
  {
    path: '/docs',
    title: 'Premium Service Guides | Boutique Marketing Documentation & Resources',
    description: 'Comprehensive documentation and sophisticated guides for Digital Frontier\'s boutique AI marketing services and bespoke strategies.'
  },
  {
    path: '/newsletter',
    title: 'Exclusive Marketing Newsletter | Premium AI Insights & Luxury Trends',
    description: 'Subscribe to Digital Frontier\'s exclusive newsletter for sophisticated AI marketing insights, luxury brand strategies, and premium industry trends.'
  },
  {
    path: '/site-map',
    title: 'Site Navigation | Digital Frontier Premium Resources & Services',
    description: 'Complete site map of Digital Frontier\'s boutique resources, premium services, and sophisticated marketing insights for luxury brands.'
  },
  {
    path: '/insights',
    title: 'Exclusive Insights Hub | Premium Marketing Intelligence & Sophisticated Analytics',
    description: 'Access exclusive marketing insights, sophisticated analytics, and premium strategic resources crafted for discerning business leaders.'
  },
  {
    path: '/browse-playbooks',
    title: 'Premium Marketing Playbooks | Sophisticated Strategies & Luxury Brand Blueprints',
    description: 'Browse our exclusive collection of premium marketing playbooks and sophisticated strategies designed for luxury brands and high-caliber businesses.'
  },
  {
    path: '/search',
    title: 'Search Premium Content | Find Digital Frontier Exclusive Resources',
    description: 'Search through Digital Frontier\'s premium content, boutique resources, and sophisticated marketing services for luxury brands.'
  }
];

/**
 * Get route configuration by path
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  return ROUTE_CONFIGS.find(route => route.path === path);
}