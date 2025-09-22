import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { ContentDeduplicationAnalysis, SAMPLE_DUPLICATION_ISSUES } from '@/components/SEO/ContentDeduplicationTools';
import useContentDeduplication from '@/hooks/useContentDeduplication';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const ContentDeduplicationDashboard = () => {
  const location = useLocation();
  const { 
    issues, 
    isAnalyzing, 
    lastAnalysis, 
    analyzeContent, 
    resolveIssue, 
    generateConsolidationPlan 
  } = useContentDeduplication();

  // Calculate metrics
  const highPriorityIssues = issues.filter(issue => issue.severity === 'high').length;
  const mediumPriorityIssues = issues.filter(issue => issue.severity === 'medium').length;
  const lowPriorityIssues = issues.filter(issue => issue.severity === 'low').length;
  const totalPages = issues.reduce((acc, issue) => acc + issue.pages.length, 0);
  
  // Calculate content health score (0-100)
  const contentHealthScore = Math.max(0, 100 - (highPriorityIssues * 20) - (mediumPriorityIssues * 10) - (lowPriorityIssues * 5));

  return (
    <PageLayout
      title="Content Deduplication Dashboard | SEO Information Architecture Analysis"
      subtitle="Identify and resolve content duplication issues to improve SEO performance and user experience"
      currentPath={location.pathname}
      pageType="service"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Content Deduplication Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Comprehensive analysis of your website's information architecture to identify 
            and resolve content duplication issues that may be impacting your SEO performance.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={analyzeContent} 
              disabled={isAnalyzing}
              className="bg-primary hover:bg-primary/90"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Run New Analysis
                </>
              )}
            </Button>
          </div>
          {lastAnalysis && (
            <p className="text-sm text-muted-foreground mt-4">
              Last analysis: {lastAnalysis.toLocaleDateString()} at {lastAnalysis.toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Content Health</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{contentHealthScore}%</div>
              <Progress value={contentHealthScore} className="mb-2" />
              <p className="text-xs text-muted-foreground">
                {contentHealthScore >= 80 ? 'Excellent' : 
                 contentHealthScore >= 60 ? 'Good' : 
                 contentHealthScore >= 40 ? 'Needs Improvement' : 'Critical'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">High Priority</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{highPriorityIssues}</div>
              <p className="text-xs text-muted-foreground">Critical issues requiring immediate attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Medium Priority</CardTitle>
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{mediumPriorityIssues}</div>
              <p className="text-xs text-muted-foreground">Issues to address in next optimization cycle</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Affected Pages</CardTitle>
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalPages}</div>
              <p className="text-xs text-muted-foreground">Total pages with duplication issues</p>
            </CardContent>
          </Card>
        </div>

        {/* Priority Actions */}
        {highPriorityIssues > 0 && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Immediate Action Required
              </CardTitle>
              <CardDescription className="text-red-700">
                You have {highPriorityIssues} high-priority content duplication {highPriorityIssues === 1 ? 'issue' : 'issues'} 
                that could be significantly impacting your SEO performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {issues
                  .filter(issue => issue.severity === 'high')
                  .map((issue, index) => (
                    <Badge key={index} variant="destructive">
                      {issue.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Analysis Section */}
        <ContentDeduplicationAnalysis 
          issues={issues.length > 0 ? issues : SAMPLE_DUPLICATION_ISSUES}
          onResolveIssue={resolveIssue}
        />

        {/* Implementation Guide */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
            <CardDescription>
              Step-by-step process to resolve content duplication issues and optimize your information architecture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">Quick Wins (1-2 weeks)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Implement 301 redirects for exact duplicate pages
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Add canonical tags to near-duplicate content
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Update internal linking structure
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Remove low-value duplicate pages
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Strategic Improvements (1-3 months)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Develop content pillar page strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Create comprehensive topic clusters
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Differentiate similar service pages
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Implement advanced schema markup
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Need Help Implementing These Changes?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SEO experts can help you resolve content duplication issues and optimize your 
            information architecture for better search performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule SEO Consultation
            </Button>
            <Button size="lg" variant="outline">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContentDeduplicationDashboard;