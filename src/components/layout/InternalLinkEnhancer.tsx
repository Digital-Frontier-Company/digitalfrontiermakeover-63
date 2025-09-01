import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Target, Zap, Home, ChevronRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  category: 'strategy' | 'local' | 'technical' | 'resources';
}

interface InternalLinkEnhancerProps {
  currentPage: string;
  relatedLinks?: RelatedLink[];
  showDefaultLinks?: boolean;
}

interface SEOBreadcrumbsProps {
  currentPath: string;
}

interface RelatedLinksProps {
  currentPath: string;
}

interface CTASectionProps {
  variant: 'blog' | 'service';
}

// SEO Breadcrumbs Component
export const SEOBreadcrumbs: React.FC<SEOBreadcrumbsProps> = ({ currentPath }) => {
  const getBreadcrumbs = (path: string) => {
    const breadcrumbs = [{ name: 'Home', href: '/' }];
    
    const pathMap: Record<string, string> = {
      '/ai-and-digital-marketing': 'AI & Digital Marketing',
      '/answer-engine-optimization': 'Answer Engine Optimization',
      '/generative-engine-optimization': 'Generative Engine Optimization',
      '/memphis-digital-marketing': 'Memphis Digital Marketing',
      '/collierville-seo-services': 'Collierville SEO Services',
      '/germantown-digital-marketing': 'Germantown Digital Marketing',
      '/ad-funnel-blueprint': 'Ad Funnel Blueprint',
      '/blog': 'Blog',
      '/about-us': 'About Us',
      '/contact': 'Contact',
      '/pricing': 'Pricing',
      '/team-expertise': 'Our Team',
      '/psychological-digital-marketing-insights': 'Psychology Insights',
      '/emotional-marketing-playbook': 'Emotional Marketing',
      '/ai-bias-in-advertising': 'AI Bias Guide',
      '/ai-prompt-templates': 'AI Prompts',
      '/user-experience-prompts': 'UX Prompts',
      '/information-architecture-prompts': 'IA Prompts'
    };
    
    if (pathMap[path]) {
      breadcrumbs.push({ name: pathMap[path], href: path });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentPath);

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-slate-400">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            {index === 0 && <Home className="h-4 w-4 mr-2" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-slate-200 font-medium">{crumb.name}</span>
            ) : (
              <Link to={crumb.href} className="hover:text-slate-200 transition-colors">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Related Links Component (alias for InternalLinkEnhancer)
export const RelatedLinks: React.FC<RelatedLinksProps> = ({ currentPath }) => {
  return <InternalLinkEnhancer currentPage={currentPath} />;
};

// CTA Section Component
export const CTASection: React.FC<CTASectionProps> = ({ variant }) => {
  const isBlog = variant === 'blog';
  
  return (
    <section className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-slate-700 rounded-xl text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        {isBlog ? 'Ready to Apply These Insights?' : 'Ready to Get Started?'}
      </h3>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
        {isBlog 
          ? 'Transform your marketing strategy with expert guidance from Digital Frontier Company. Book a free consultation to discuss your goals.'
          : 'Contact Digital Frontier Company today for a free marketing audit and strategy session tailored to your business.'
        }
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/modern-contact-form" 
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Book Free Consultation
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
        <Link 
          to="/pricing" 
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-200 hover:bg-slate-800 font-semibold rounded-lg transition-colors"
        >
          View Pricing Plans
        </Link>
      </div>
    </section>
  );
};

const InternalLinkEnhancer: React.FC<InternalLinkEnhancerProps> = ({
  currentPage,
  relatedLinks = [],
  showDefaultLinks = true
}) => {
  // Default related links based on categories
  const defaultLinks: RelatedLink[] = [
    {
      title: "AI & Digital Marketing Guide",
      description: "Comprehensive guide to AI-powered marketing strategies and implementation",
      href: "/ai-and-digital-marketing",
      category: 'strategy'
    },
    {
      title: "Answer Engine Optimization",
      description: "Optimize for ChatGPT, Google SGE, and other AI search engines",
      href: "/answer-engine-optimization",
      category: 'strategy'
    },
    {
      title: "Memphis Digital Marketing",
      description: "Local AI marketing services for Memphis businesses",
      href: "/memphis-digital-marketing",
      category: 'local'
    },
    {
      title: "Ad Funnel Blueprint",
      description: "High-converting advertising strategies and funnel optimization",
      href: "/ad-funnel-blueprint",
      category: 'strategy'
    },
    {
      title: "Psychological Marketing Insights",
      description: "Consumer behavior analysis and psychology-driven strategies",
      href: "/psychological-digital-marketing-insights",
      category: 'resources'
    },
    {
      title: "Emotional Marketing Playbook",
      description: "Leverage emotions to drive conversions and brand loyalty",
      href: "/emotional-marketing-playbook",
      category: 'resources'
    },
    {
      title: "AI Bias in Advertising",
      description: "Understanding and mitigating bias in AI-driven marketing campaigns",
      href: "/ai-bias-in-advertising",
      category: 'technical'
    },
    {
      title: "Collierville SEO Services",
      description: "Local SEO optimization for Collierville businesses",
      href: "/collierville-seo-services",
      category: 'local'
    },
    {
      title: "Germantown Digital Marketing",
      description: "Premium digital marketing for affluent Germantown market",
      href: "/germantown-digital-marketing",
      category: 'local'
    },
    {
      title: "AI Prompt Templates",
      description: "Memphis-specific ChatGPT prompts for digital marketing",
      href: "/ai-prompt-templates",
      category: 'resources'
    },
    {
      title: "User Experience Prompts",
      description: "300+ UX optimization prompts for better website performance",
      href: "/user-experience-prompts",
      category: 'technical'
    },
    {
      title: "Information Architecture Prompts",
      description: "Website structure optimization using AI-powered analysis",
      href: "/information-architecture-prompts",
      category: 'technical'
    }
  ];

  // Filter out current page and combine with custom links
  const allLinks = [...relatedLinks, ...(showDefaultLinks ? defaultLinks : [])];
  const filteredLinks = allLinks
    .filter(link => link.href !== currentPage)
    .slice(0, 6); // Limit to 6 related links

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'strategy':
        return <Target className="h-4 w-4 text-blue-400" />;
      case 'local':
        return <Zap className="h-4 w-4 text-green-400" />;
      case 'technical':
        return <BookOpen className="h-4 w-4 text-purple-400" />;
      case 'resources':
        return <ArrowRight className="h-4 w-4 text-orange-400" />;
      default:
        return <ArrowRight className="h-4 w-4 text-cyan-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'strategy':
        return 'border-blue-500/20 hover:border-blue-400';
      case 'local':
        return 'border-green-500/20 hover:border-green-400';
      case 'technical':
        return 'border-purple-500/20 hover:border-purple-400';
      case 'resources':
        return 'border-orange-500/20 hover:border-orange-400';
      default:
        return 'border-cyan-500/20 hover:border-cyan-400';
    }
  };

  if (filteredLinks.length === 0) return null;

  return (
    <section className="mt-16 p-8 bg-slate-800/40 border border-slate-700 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Related Resources</h2>
        <p className="text-slate-300">Discover more insights and strategies to grow your business</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link, index) => (
          <Link key={index} to={link.href} className="group">
            <Card className={`bg-slate-800/60 border h-full transition-all duration-300 group-hover:transform group-hover:scale-105 ${getCategoryColor(link.category)}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(link.category)}
                  <CardTitle className="text-sm font-medium text-slate-200 group-hover:text-white">
                    {link.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-sm leading-relaxed">
                  {link.description}
                </CardDescription>
                <div className="flex items-center mt-3 text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                  Learn More <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InternalLinkEnhancer;