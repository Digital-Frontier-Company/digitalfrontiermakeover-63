import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FolderTree, Link2, TrendingUp, AlertTriangle } from 'lucide-react';

interface ContentSilo {
  id: string;
  name: string;
  color: string;
  pages: number;
  keywords: string[];
  internalLinks: number;
  topicRelevance: number;
  contentGaps: string[];
}

const contentSilos: ContentSilo[] = [
  {
    id: 'ai-marketing',
    name: 'AI Marketing',
    color: 'bg-blue-500',
    pages: 12,
    keywords: ['AI marketing', 'machine learning', 'automation'],
    internalLinks: 45,
    topicRelevance: 92,
    contentGaps: ['AI ROI Calculator', 'Case Study: E-commerce AI']
  },
  {
    id: 'seo-services',
    name: 'SEO Services',
    color: 'bg-green-500',
    pages: 8,
    keywords: ['SEO', 'search optimization', 'rankings'],
    internalLinks: 32,
    topicRelevance: 88,
    contentGaps: ['Technical SEO Guide', 'Link Building Strategies']
  },
  {
    id: 'local-marketing',
    name: 'Local Marketing',
    color: 'bg-purple-500',
    pages: 6,
    keywords: ['Memphis marketing', 'local SEO', 'GMB'],
    internalLinks: 24,
    topicRelevance: 85,
    contentGaps: ['Local Citation Building', 'Memphis Business Directory']
  },
  {
    id: 'content-strategy',
    name: 'Content Strategy',
    color: 'bg-orange-500',
    pages: 10,
    keywords: ['content marketing', 'blogging', 'copywriting'],
    internalLinks: 38,
    topicRelevance: 90,
    contentGaps: ['Content Calendar Template', 'Copywriting Framework']
  }
];

export const ContentSiloOrganizer: React.FC = () => {
  const [selectedSilo, setSelectedSilo] = useState<string | null>(null);

  const silo = selectedSilo ? contentSilos.find(s => s.id === selectedSilo) : null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderTree className="h-5 w-5 text-primary" />
            Content Silo Organization
          </CardTitle>
          <CardDescription>
            Organize content into topic clusters for better SEO and user navigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="linking">Internal Linking</TabsTrigger>
              <TabsTrigger value="gaps">Content Gaps</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {contentSilos.map(silo => (
                  <Card
                    key={silo.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedSilo(silo.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${silo.color}`} />
                        <CardTitle className="text-base">{silo.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Pages</span>
                        <Badge>{silo.pages}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Internal Links</span>
                        <Badge variant="outline">{silo.internalLinks}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Topic Relevance</span>
                        <Badge variant={silo.topicRelevance >= 85 ? 'default' : 'secondary'}>
                          {silo.topicRelevance}%
                        </Badge>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-xs font-medium mb-1">Primary Keywords:</p>
                        <div className="flex flex-wrap gap-1">
                          {silo.keywords.slice(0, 3).map((keyword, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {silo && (
                <Card className="bg-muted/50 mt-6">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${silo.color}`} />
                      {silo.name} - Detailed View
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Target Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {silo.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Content Gaps</h4>
                      <ul className="space-y-1">
                        {silo.contentGaps.map((gap, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <AlertTriangle className="h-3 w-3 text-yellow-600" />
                            {gap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="linking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Link2 className="h-4 w-4" />
                    Internal Linking Suggestions
                  </CardTitle>
                  <CardDescription>Improve content discoverability with strategic internal links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contentSilos.map(silo => (
                    <div key={silo.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${silo.color}`} />
                          <span className="font-medium">{silo.name}</span>
                        </div>
                        <Badge>{silo.internalLinks} links</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {silo.internalLinks < 30 ? (
                            <span className="flex items-center gap-2">
                              <AlertTriangle className="h-3 w-3 text-yellow-600" />
                              Add more internal links to strengthen this silo
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <TrendingUp className="h-3 w-3 text-green-600" />
                              Good internal linking structure
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gaps" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Content Gap Analysis</CardTitle>
                  <CardDescription>Identify missing content opportunities within each silo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contentSilos.map(silo => (
                    <div key={silo.id} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${silo.color}`} />
                        <h4 className="font-semibold">{silo.name}</h4>
                        <Badge variant="secondary">{silo.contentGaps.length} gaps</Badge>
                      </div>
                      <ul className="ml-5 space-y-1">
                        {silo.contentGaps.map((gap, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {gap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentSiloOrganizer;
