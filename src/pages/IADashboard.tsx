import React from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import { SEOHead } from '@/components/SEO/SEOHead';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { UserJourneyVisualizer } from '@/components/ia/UserJourneyVisualizer';
import { VisualSitemapGenerator } from '@/components/ia/VisualSitemapGenerator';
import { ContentSiloOrganizer } from '@/components/ia/ContentSiloOrganizer';
import { AccessibilityDashboard } from '@/components/ia/AccessibilityDashboard';
import { IntelligentContentLoader } from '@/components/ia/IntelligentContentLoader';
import { MetadataOptimizer } from '@/components/ia/MetadataOptimizer';
import { LayoutDashboard, Target, Network, FolderTree, Eye, Zap, FileText } from 'lucide-react';

const IADashboard: React.FC = () => {
  return (
    <PageWrapper seo={{
      title: "Information Architecture Dashboard | Advanced SEO Tools & Templates",
      description: "Comprehensive IA dashboard with user journey mapping, visual sitemaps, content silos, accessibility audits, and intelligent content loading for superior SEO performance.",
      keywords: "information architecture, IA templates, user journey mapping, visual sitemap, content silos, WCAG compliance, accessibility dashboard, SEO optimization, content loading, metadata optimization"
    }}>
      <SEOHead
        title="Information Architecture Dashboard | Advanced SEO Tools & Templates"
        description="Comprehensive IA dashboard with user journey mapping, visual sitemaps, content silos, accessibility audits, and intelligent content loading for superior SEO performance."
        keywords="information architecture, IA templates, user journey mapping, visual sitemap, content silos, WCAG compliance, accessibility dashboard, SEO optimization, content loading, metadata optimization"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LayoutDashboard className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Information Architecture Dashboard
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced SEO templates and tools for optimizing site structure, user experience, and accessibility
            </p>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="journey" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto gap-2">
              <TabsTrigger value="journey" className="flex items-center gap-2 py-3">
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">User Journey</span>
              </TabsTrigger>
              <TabsTrigger value="sitemap" className="flex items-center gap-2 py-3">
                <Network className="h-4 w-4" />
                <span className="hidden sm:inline">Sitemap</span>
              </TabsTrigger>
              <TabsTrigger value="silos" className="flex items-center gap-2 py-3">
                <FolderTree className="h-4 w-4" />
                <span className="hidden sm:inline">Content Silos</span>
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="flex items-center gap-2 py-3">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Accessibility</span>
              </TabsTrigger>
              <TabsTrigger value="loading" className="flex items-center gap-2 py-3">
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Loading</span>
              </TabsTrigger>
              <TabsTrigger value="metadata" className="flex items-center gap-2 py-3">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Metadata</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="journey">
              <UserJourneyVisualizer />
            </TabsContent>

            <TabsContent value="sitemap">
              <VisualSitemapGenerator />
            </TabsContent>

            <TabsContent value="silos">
              <ContentSiloOrganizer />
            </TabsContent>

            <TabsContent value="accessibility">
              <AccessibilityDashboard />
            </TabsContent>

            <TabsContent value="loading">
              <IntelligentContentLoader />
            </TabsContent>

            <TabsContent value="metadata">
              <MetadataOptimizer />
            </TabsContent>
          </Tabs>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">95</div>
              <p className="text-sm text-muted-foreground">SEO Score</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">82</div>
              <p className="text-sm text-muted-foreground">Accessibility Score</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">1.2s</div>
              <p className="text-sm text-muted-foreground">LCP Score</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">87</div>
              <p className="text-sm text-muted-foreground">Avg Sitemap Score</p>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default IADashboard;
