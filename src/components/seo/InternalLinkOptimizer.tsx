import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InternalLink {
  url: string;
  anchor: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface InternalLinkOptimizerProps {
  currentPath: string;
  variant?: 'horizontal' | 'vertical' | 'grid';
  showTitle?: boolean;
  maxLinks?: number;
}

/**
 * Strategic internal linking component based on SEO audit requirements
 * Ensures every page has 3+ relevant internal links
 */
export const InternalLinkOptimizer: React.FC<InternalLinkOptimizerProps> = ({
  currentPath,
  variant = 'horizontal',
  showTitle = true,
  maxLinks = 6
}) => {
  const relevantLinks = getRelevantLinks(currentPath, maxLinks);

  if (relevantLinks.length === 0) return null;

  const containerClasses = {
    horizontal: 'flex flex-wrap gap-4 justify-center',
    vertical: 'flex flex-col gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
  };

  return (
    <section className="py-8 px-4" itemScope itemType="https://schema.org/WebPageElement">
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Related Services & Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered marketing solutions and expert insights.
          </p>
        </div>
      )}
      
      <div className={`${containerClasses[variant]} max-w-6xl mx-auto`}>
        {relevantLinks.map((link, index) => (
          <Card 
            key={`${link.url}-${index}`}
            className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-background/50 backdrop-blur-sm"
            itemScope 
            itemType="https://schema.org/WebPage"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                <Link 
                  to={link.url}
                  className="text-decoration-none hover:underline"
                  itemProp="url"
                >
                  <span itemProp="name">{link.anchor}</span>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm" itemProp="description">
                {link.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityBadgeClasses(link.priority)}`}>
                  {link.priority === 'high' ? 'Featured' : 
                   link.priority === 'medium' ? 'Popular' : 'Explore'}
                </span>
                <Link 
                  to={link.url}
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  aria-label={`Learn more about ${link.anchor}`}
                >
                  Learn More →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

/**
 * Get contextually relevant links based on current page
 */
function getRelevantLinks(currentPath: string, maxLinks: number): InternalLink[] {
  // Comprehensive internal linking strategy
  const linkingStrategy: Record<string, InternalLink[]> = {
    '/': [
      {
        url: '/answer-engine-optimization',
        anchor: 'Answer Engine Optimization Services',
        description: 'Get featured in AI search results with our proven AEO strategies and expert implementation.',
        priority: 'high'
      },
      {
        url: '/generative-engine-optimization',
        anchor: 'Generative Engine Optimization',
        description: 'Scale content production with AI while maintaining expert-level quality and SEO performance.',
        priority: 'high'
      },
      {
        url: '/search-engine-optimization',
        anchor: 'SEO Services Memphis',
        description: 'Data-driven SEO strategies that drive organic traffic and qualified leads for B2B companies.',
        priority: 'medium'
      },
      {
        url: '/seo-audit-dashboard',
        anchor: 'SEO Audit Dashboard',
        description: 'Comprehensive website analysis and optimization recommendations with real-time audit tools.',
        priority: 'medium'
      },
      {
        url: '/gtm-strategy-blueprint',
        anchor: 'Go-to-Market Strategy',
        description: 'Complete GTM blueprint for launching products and services with proven conversion tactics.',
        priority: 'medium'
      },
      {
        url: '/blog',
        anchor: 'Marketing Insights Blog',
        description: 'Latest AI marketing strategies, case studies, and industry insights from our expert team.',
        priority: 'low'
      }
    ],
    
    '/answer-engine-optimization': [
      {
        url: '/generative-engine-optimization',
        anchor: 'Generative Engine Optimization',
        description: 'Complement your AEO strategy with scalable AI content generation and optimization.',
        priority: 'high'
      },
      {
        url: '/seo-audit-dashboard',
        anchor: 'SEO Audit Tools',
        description: 'Analyze your current SEO performance and identify AEO optimization opportunities.',
        priority: 'high'
      },
      {
        url: '/ai-prompt-templates',
        anchor: 'AI Prompt Templates',
        description: 'Ready-to-use prompts for creating AEO-optimized content and improving search visibility.',
        priority: 'medium'
      },
      {
        url: '/blog/aeo-crypto-marketing',
        anchor: 'AEO for Crypto Marketing',
        description: 'Specialized AEO strategies for cryptocurrency and blockchain marketing campaigns.',
        priority: 'medium'
      },
      {
        url: '/complete-aeo-guide',
        anchor: 'Complete AEO Guide',
        description: 'Comprehensive guide to Answer Engine Optimization strategies and implementation.',
        priority: 'low'
      }
    ],
    
    '/generative-engine-optimization': [
      {
        url: '/answer-engine-optimization',
        anchor: 'Answer Engine Optimization',
        description: 'Optimize your AI-generated content for maximum visibility in search results.',
        priority: 'high'
      },
      {
        url: '/content-creation-agent',
        anchor: 'AI Content Creation Tool',
        description: 'Advanced AI assistant for generating high-quality marketing content and copy.',
        priority: 'high'
      },
      {
        url: '/ai-prompt-templates',
        anchor: 'AI Prompt Library',
        description: 'Proven prompt templates for content creation, copywriting, and marketing campaigns.',
        priority: 'medium'
      },
      {
        url: '/psychological-digital-marketing-insights',
        anchor: 'Marketing Psychology Insights',
        description: 'Apply consumer psychology principles to your AI-generated content for better engagement.',
        priority: 'medium'
      }
    ],
    
    '/blog': [
      {
        url: '/ai-prompt-templates',
        anchor: 'AI Prompt Templates',
        description: 'Professional prompt library for content creation and marketing automation.',
        priority: 'high'
      },
      {
        url: '/information-architecture-prompts',
        anchor: 'Information Architecture Prompts',
        description: 'AI prompts for creating effective website structure and user experience.',
        priority: 'medium'
      },
      {
        url: '/user-experience-prompts',
        anchor: 'UX Content Prompts',
        description: 'Specialized prompts for user-centered content and UX optimization.',
        priority: 'medium'
      },
      {
        url: '/psychological-digital-marketing-insights',
        anchor: 'Marketing Psychology',
        description: 'Deep insights into consumer behavior and psychological triggers in marketing.',
        priority: 'low'
      }
    ],
    
    '/seo-audit-dashboard': [
      {
        url: '/answer-engine-optimization',
        anchor: 'AEO Optimization Services',
        description: 'Implement AEO strategies based on your audit results for better AI search visibility.',
        priority: 'high'
      },
      {
        url: '/search-engine-optimization',
        anchor: 'Professional SEO Services',
        description: 'Expert SEO implementation to address all technical and content optimization needs.',
        priority: 'high'
      },
      {
        url: '/content-creation-agent',
        anchor: 'AI Content Generator',
        description: 'Create optimized content based on your SEO audit findings and recommendations.',
        priority: 'medium'
      },
      {
        url: '/gtm-strategy-blueprint',
        anchor: 'Marketing Strategy Planning',
        description: 'Develop comprehensive marketing strategies based on your technical SEO foundation.',
        priority: 'medium'
      }
    ]
  };
  
  // Get links for current path or use default homepage links
  const links = linkingStrategy[currentPath] || linkingStrategy['/'];
  
  // Filter out links to current page and limit results
  return links
    .filter(link => link.url !== currentPath)
    .slice(0, maxLinks);
}

/**
 * Get CSS classes for priority badges
 */
function getPriorityBadgeClasses(priority: 'high' | 'medium' | 'low'): string {
  switch (priority) {
    case 'high':
      return 'bg-primary/10 text-primary border border-primary/20';
    case 'medium':
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    case 'low':
      return 'bg-muted text-muted-foreground border border-muted';
  }
}

export default InternalLinkOptimizer;