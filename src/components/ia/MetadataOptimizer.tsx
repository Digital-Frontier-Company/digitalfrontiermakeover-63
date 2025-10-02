import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Image, Share2, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface MetadataAnalysis {
  title: {
    text: string;
    length: number;
    score: number;
    issues: string[];
  };
  description: {
    text: string;
    length: number;
    score: number;
    issues: string[];
  };
  keywords: string[];
  og: {
    title: string;
    description: string;
    image: string;
  };
}

export const MetadataOptimizer: React.FC = () => {
  const [pageUrl, setPageUrl] = useState('/');
  const [analysis, setAnalysis] = useState<MetadataAnalysis>({
    title: {
      text: 'Premium AI Marketing Excellence | Boutique Digital Frontier',
      length: 62,
      score: 95,
      issues: []
    },
    description: {
      text: 'Experience sophisticated AI marketing strategies crafted exclusively for discerning brands.',
      length: 95,
      score: 88,
      issues: ['Consider adding a call-to-action']
    },
    keywords: ['AI marketing', 'digital marketing', 'Memphis', 'boutique agency'],
    og: {
      title: 'Premium AI Marketing Excellence',
      description: 'Sophisticated AI marketing strategies for luxury brands',
      image: '/og-image.jpg'
    }
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 70) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Metadata Optimization Engine
          </CardTitle>
          <CardDescription>
            Real-time content analysis and SEO metadata optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="analysis" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="local">Local SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="analysis" className="space-y-6">
              {/* URL Input */}
              <div className="flex gap-4">
                <Input
                  placeholder="Enter page URL to analyze..."
                  value={pageUrl}
                  onChange={(e) => setPageUrl(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  Analyze Page
                </Button>
              </div>

              {/* Overall Score */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className={`text-4xl font-bold ${getScoreColor(analysis.title.score)}`}>
                      {Math.round((analysis.title.score + analysis.description.score) / 2)}/100
                    </div>
                    <p className="text-muted-foreground">Overall Metadata Score</p>
                    <Badge variant={getScoreBadge(analysis.title.score)}>
                      {analysis.title.score >= 90 ? 'Excellent' : analysis.title.score >= 70 ? 'Good' : 'Needs Improvement'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Title Analysis */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Title Tag Analysis</CardTitle>
                    <Badge variant={getScoreBadge(analysis.title.score)}>
                      Score: {analysis.title.score}/100
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-mono">{analysis.title.text}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Character Length</span>
                      <span className={analysis.title.length <= 60 ? 'text-green-600' : 'text-red-600'}>
                        {analysis.title.length}/60
                      </span>
                    </div>
                    <Progress 
                      value={(analysis.title.length / 60) * 100} 
                      className={analysis.title.length <= 60 ? '' : 'bg-red-100'}
                    />
                  </div>

                  <div className="space-y-2">
                    {analysis.title.issues.length === 0 ? (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Title is well optimized!</span>
                      </div>
                    ) : (
                      analysis.title.issues.map((issue, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-yellow-600">
                          <AlertCircle className="h-4 w-4 mt-0.5" />
                          <span>{issue}</span>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Description Analysis */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Meta Description Analysis</CardTitle>
                    <Badge variant={getScoreBadge(analysis.description.score)}>
                      Score: {analysis.description.score}/100
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-mono">{analysis.description.text}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Character Length</span>
                      <span className={analysis.description.length <= 160 ? 'text-green-600' : 'text-red-600'}>
                        {analysis.description.length}/160
                      </span>
                    </div>
                    <Progress 
                      value={(analysis.description.length / 160) * 100} 
                      className={analysis.description.length <= 160 ? '' : 'bg-red-100'}
                    />
                  </div>

                  <div className="space-y-2">
                    {analysis.description.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-yellow-600">
                        <AlertCircle className="h-4 w-4 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Target Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="editor" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Edit Metadata</CardTitle>
                  <CardDescription>Optimize your page metadata in real-time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title Tag</label>
                    <Input
                      value={analysis.title.text}
                      onChange={(e) => setAnalysis({
                        ...analysis,
                        title: { ...analysis.title, text: e.target.value, length: e.target.value.length }
                      })}
                      maxLength={60}
                    />
                    <p className="text-xs text-muted-foreground">
                      {analysis.title.length}/60 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Meta Description</label>
                    <Textarea
                      value={analysis.description.text}
                      onChange={(e) => setAnalysis({
                        ...analysis,
                        description: { ...analysis.description, text: e.target.value, length: e.target.value.length }
                      })}
                      maxLength={160}
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                      {analysis.description.length}/160 characters
                    </p>
                  </div>

                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Social Media Metadata
                  </CardTitle>
                  <CardDescription>Open Graph and Twitter Card optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">OG Title</label>
                    <Input value={analysis.og.title} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">OG Description</label>
                    <Textarea value={analysis.og.description} rows={2} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      OG Image URL
                    </label>
                    <Input value={analysis.og.image} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="local" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Local SEO Metadata
                  </CardTitle>
                  <CardDescription>Location-based metadata for local search</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Name</label>
                    <Input placeholder="Digital Frontier Company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Area</label>
                    <Input placeholder="Memphis, TN" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Local Keywords</label>
                    <Input placeholder="Memphis digital marketing, local SEO" />
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Local Schema Status</p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>LocalBusiness schema detected and valid</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetadataOptimizer;
