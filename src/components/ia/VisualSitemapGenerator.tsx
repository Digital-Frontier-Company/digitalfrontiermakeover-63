import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Network, Plus, Download, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PageNode {
  id: string;
  title: string;
  url: string;
  level: number;
  seoScore: number;
  children: PageNode[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const sampleSitemap: PageNode[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    level: 0,
    seoScore: 95,
    metadata: {
      title: 'Premium AI Marketing Excellence | Boutique Digital Frontier',
      description: 'Experience sophisticated AI marketing strategies',
      keywords: ['AI marketing', 'digital marketing', 'Memphis']
    },
    children: [
      {
        id: 'services',
        title: 'Services',
        url: '/services',
        level: 1,
        seoScore: 88,
        metadata: {
          title: 'AI Marketing Services',
          description: 'Comprehensive AI-powered marketing solutions',
          keywords: ['SEO', 'AEO', 'GEO']
        },
        children: [
          {
            id: 'seo',
            title: 'SEO',
            url: '/seo',
            level: 2,
            seoScore: 92,
            metadata: {
              title: 'Search Engine Optimization Services',
              description: 'Advanced SEO strategies for growth',
              keywords: ['SEO', 'search optimization']
            },
            children: []
          },
          {
            id: 'aeo',
            title: 'AEO',
            url: '/aeo',
            level: 2,
            seoScore: 90,
            metadata: {
              title: 'Answer Engine Optimization',
              description: 'Optimize for AI search engines',
              keywords: ['AEO', 'AI search']
            },
            children: []
          }
        ]
      },
      {
        id: 'about',
        title: 'About',
        url: '/about-us',
        level: 1,
        seoScore: 85,
        metadata: {
          title: 'About Digital Frontier',
          description: 'Boutique AI marketing consultancy',
          keywords: ['about', 'team', 'company']
        },
        children: []
      },
      {
        id: 'blog',
        title: 'Blog',
        url: '/blog',
        level: 1,
        seoScore: 78,
        metadata: {
          title: 'Marketing Insights Blog',
          description: 'Expert insights and strategies',
          keywords: ['blog', 'insights', 'marketing']
        },
        children: []
      }
    ]
  }
];

const PageNodeComponent: React.FC<{ node: PageNode; depth: number }> = ({ node, depth }) => {
  const [isExpanded, setIsExpanded] = useState(depth < 2);
  
  const getSeoScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className={`ml-${depth * 8} mb-2`}>
      <div className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
        {node.children.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '−' : '+'}
          </Button>
        )}
        <FileText className="h-4 w-4 text-muted-foreground" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{node.title}</span>
            <span className="text-xs text-muted-foreground">{node.url}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs">
              Level {node.level}
            </Badge>
            <span className={`text-xs font-semibold ${getSeoScoreColor(node.seoScore)}`}>
              SEO: {node.seoScore}/100
            </span>
          </div>
        </div>
      </div>
      {isExpanded && node.children.length > 0 && (
        <div className="ml-4 mt-2 border-l-2 pl-2">
          {node.children.map(child => (
            <PageNodeComponent key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const VisualSitemapGenerator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleExportXML = () => {
    console.log('Exporting XML sitemap...');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
          <div>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                Visual Sitemap Generator
              </CardTitle>
              <CardDescription>
                Visualize your site structure and optimize information architecture
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Page
              </Button>
              <Button onClick={handleExportXML} size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export XML
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4">
            <Input
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
          </div>

          {/* SEO Health Overview */}
          <Alert>
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>
              Site structure looks good! Average SEO score: <strong>87/100</strong>. 
              Consider optimizing 2 pages with scores below 80.
            </AlertDescription>
          </Alert>

          {/* Site Structure Visualization */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Site Structure</h3>
            {sampleSitemap.map(node => (
              <PageNodeComponent key={node.id} node={node} depth={0} />
            ))}
          </div>

          {/* SEO Recommendations */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-base">Structure Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Improve Blog SEO Score</p>
                  <p className="text-muted-foreground">
                    Blog section (78/100) could benefit from better internal linking and metadata optimization
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Excellent Hierarchy</p>
                  <p className="text-muted-foreground">
                    Site maintains good depth (max 2 levels) for optimal crawlability
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisualSitemapGenerator;
