import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MousePointer, Target, TrendingUp, Smartphone, Monitor } from 'lucide-react';

interface JourneyStage {
  id: string;
  name: string;
  description: string;
  seoOpportunities: string[];
  conversionRate: number;
  avgTimeSpent: string;
}

const journeyStages: JourneyStage[] = [
  {
    id: 'awareness',
    name: 'Awareness',
    description: 'User discovers your brand through search or social',
    seoOpportunities: [
      'Optimize meta titles for search intent',
      'Create compelling snippets for SERP',
      'Implement Schema.org Organization markup'
    ],
    conversionRate: 12,
    avgTimeSpent: '0:45'
  },
  {
    id: 'consideration',
    name: 'Consideration',
    description: 'User explores your services and compares options',
    seoOpportunities: [
      'Internal linking to related services',
      'FAQ schema for common questions',
      'Video content with transcripts'
    ],
    conversionRate: 35,
    avgTimeSpent: '3:20'
  },
  {
    id: 'decision',
    name: 'Decision',
    description: 'User ready to take action or contact',
    seoOpportunities: [
      'Clear CTA placement and optimization',
      'Trust signals (reviews, testimonials)',
      'Local business schema for contact info'
    ],
    conversionRate: 68,
    avgTimeSpent: '2:15'
  }
];

export const UserJourneyVisualizer: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                User Journey Mapping & SEO Optimization
              </CardTitle>
              <CardDescription>
                Visualize user paths and optimize each stage for search engines
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedDevice === 'desktop' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDevice('desktop')}
              >
                <Monitor className="h-4 w-4 mr-2" />
                Desktop
              </Button>
              <Button
                variant={selectedDevice === 'mobile' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDevice('mobile')}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Journey Flow Visualization */}
            <div className="flex items-center justify-between gap-4">
              {journeyStages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{stage.name}</CardTitle>
                      <CardDescription className="text-sm">{stage.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                        <Badge variant="secondary">{stage.conversionRate}%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Avg. Time</span>
                        <Badge variant="outline">{stage.avgTimeSpent}</Badge>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs font-semibold mb-2">SEO Opportunities:</p>
                        <ul className="space-y-1">
                          {stage.seoOpportunities.map((opportunity, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-primary mt-0.5">•</span>
                              {opportunity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  {index < journeyStages.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Device-Specific Insights */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  {selectedDevice === 'desktop' ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                  {selectedDevice === 'desktop' ? 'Desktop' : 'Mobile'} User Journey Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Total Users</span>
                    </div>
                    <p className="text-2xl font-bold">{selectedDevice === 'desktop' ? '8,543' : '12,891'}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedDevice === 'desktop' ? '40%' : '60%'} of traffic
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MousePointer className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Bounce Rate</span>
                    </div>
                    <p className="text-2xl font-bold">{selectedDevice === 'desktop' ? '32%' : '45%'}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedDevice === 'desktop' ? 'Below average' : 'Industry standard'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Conversion</span>
                    </div>
                    <p className="text-2xl font-bold">{selectedDevice === 'desktop' ? '4.2%' : '2.8%'}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedDevice === 'desktop' ? '+0.8% vs last month' : '+0.3% vs last month'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold mb-3">
                    {selectedDevice === 'desktop' ? 'Desktop' : 'Mobile'} SEO Optimization Tips
                  </h4>
                  <ul className="space-y-2">
                    {selectedDevice === 'desktop' ? (
                      <>
                        <li className="text-sm text-muted-foreground">• Optimize for longer, more detailed content consumption</li>
                        <li className="text-sm text-muted-foreground">• Implement comprehensive internal linking structure</li>
                        <li className="text-sm text-muted-foreground">• Focus on competitive keyword targeting</li>
                      </>
                    ) : (
                      <>
                        <li className="text-sm text-muted-foreground">• Prioritize Core Web Vitals and page speed</li>
                        <li className="text-sm text-muted-foreground">• Optimize for "near me" and local search queries</li>
                        <li className="text-sm text-muted-foreground">• Implement click-to-call and action buttons</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserJourneyVisualizer;
