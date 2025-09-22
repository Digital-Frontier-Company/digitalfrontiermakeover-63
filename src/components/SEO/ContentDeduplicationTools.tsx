import React from 'react';
import { AlertTriangle, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Content duplication analysis interface
export interface DuplicationIssue {
  type: 'duplicate' | 'near-duplicate' | 'keyword-overlap' | 'internal-competition';
  severity: 'high' | 'medium' | 'low';
  pages: Array<{
    url: string;
    title: string;
    similarity: number;
  }>;
  description: string;
  recommendation: string;
  consolidationStrategy?: 'merge' | 'redirect' | 'canonical' | 'differentiate';
}

interface ContentDeduplicationAnalysisProps {
  issues: DuplicationIssue[];
  onResolveIssue?: (issueIndex: number) => void;
}

/**
 * Content Duplication Analysis Component
 * Displays identified duplication issues and provides resolution strategies
 */
export const ContentDeduplicationAnalysis: React.FC<ContentDeduplicationAnalysisProps> = ({
  issues,
  onResolveIssue
}) => {
  const getSeverityColor = (severity: DuplicationIssue['severity']) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: DuplicationIssue['type']) => {
    switch (type) {
      case 'duplicate': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'near-duplicate': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'keyword-overlap': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'internal-competition': return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getConsolidationStrategy = (strategy?: DuplicationIssue['consolidationStrategy']) => {
    const strategies = {
      merge: { label: 'Merge Content', color: 'bg-green-100 text-green-800' },
      redirect: { label: '301 Redirect', color: 'bg-blue-100 text-blue-800' },
      canonical: { label: 'Canonical Tag', color: 'bg-purple-100 text-purple-800' },
      differentiate: { label: 'Differentiate Content', color: 'bg-orange-100 text-orange-800' }
    };

    return strategy ? strategies[strategy] : null;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Content Duplication Analysis</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Identified content duplication issues that may be impacting your SEO performance. 
          Address these issues to improve search rankings and user experience.
        </p>
      </div>

      {issues.length === 0 ? (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            No significant content duplication issues detected. Your information architecture is well-structured.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid gap-6">
          {issues.map((issue, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(issue.type)}
                    <CardTitle className="text-lg">
                      {issue.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </CardTitle>
                    <Badge variant={getSeverityColor(issue.severity)}>
                      {issue.severity.toUpperCase()}
                    </Badge>
                  </div>
                  {issue.consolidationStrategy && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConsolidationStrategy(issue.consolidationStrategy)?.color}`}>
                      {getConsolidationStrategy(issue.consolidationStrategy)?.label}
                    </span>
                  )}
                </div>
                <CardDescription>{issue.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Affected Pages */}
                  <div>
                    <h4 className="font-medium mb-2">Affected Pages:</h4>
                    <div className="space-y-2">
                      {issue.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <div className="font-medium">{page.title}</div>
                            <div className="text-sm text-muted-foreground">{page.url}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{Math.round(page.similarity)}% similar</Badge>
                            <Button variant="ghost" size="sm" asChild>
                              <a href={page.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Recommended Action
                    </h4>
                    <p className="text-blue-800 text-sm">{issue.recommendation}</p>
                  </div>

                  {/* Resolution Button */}
                  {onResolveIssue && (
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => onResolveIssue(index)}
                        variant="outline"
                        className="text-sm"
                      >
                        Mark as Resolved
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Sample duplication issues for demonstration
 * In a real implementation, this would come from an automated analysis
 */
export const SAMPLE_DUPLICATION_ISSUES: DuplicationIssue[] = [
  {
    type: 'duplicate',
    severity: 'high',
    pages: [
      { url: '/answer-engine-optimization', title: 'Answer Engine Optimization', similarity: 95 },
      { url: '/complete-aeo-guide', title: 'Complete AEO Guide', similarity: 95 }
    ],
    description: 'These pages contain nearly identical content about Answer Engine Optimization, potentially confusing search engines and users.',
    recommendation: 'Consolidate content into a single comprehensive guide and redirect the other page. Differentiate by making one focus on services and the other on implementation.',
    consolidationStrategy: 'merge'
  },
  {
    type: 'keyword-overlap',
    severity: 'medium',
    pages: [
      { url: '/memphis-digital-marketing', title: 'Memphis Digital Marketing', similarity: 75 },
      { url: '/germantown-digital-marketing', title: 'Germantown Digital Marketing', similarity: 75 }
    ],
    description: 'Both pages target similar keywords for local digital marketing services, creating internal competition.',
    recommendation: 'Differentiate content by focusing on unique local factors, client testimonials, and area-specific case studies.',
    consolidationStrategy: 'differentiate'
  },
  {
    type: 'near-duplicate',
    severity: 'medium',
    pages: [
      { url: '/ai-digital-marketing', title: 'AI & Digital Marketing', similarity: 80 },
      { url: '/ai-implementation-consulting', title: 'AI Implementation Consulting', similarity: 80 }
    ],
    description: 'Similar content structure and topics with overlapping information about AI in marketing.',
    recommendation: 'Use canonical tags to indicate the primary page and differentiate content focus - one on strategy, one on implementation.',
    consolidationStrategy: 'canonical'
  },
  {
    type: 'internal-competition',
    severity: 'low',
    pages: [
      { url: '/ai-prompt-templates', title: 'AI Prompt Templates', similarity: 60 },
      { url: '/user-experience-prompts', title: 'UX AI Prompts', similarity: 60 },
      { url: '/information-architecture-prompts', title: 'IA AI Prompts', similarity: 60 }
    ],
    description: 'Multiple pages competing for AI prompt-related keywords, though with different focuses.',
    recommendation: 'Create a hub page for AI prompts and make these specialized pages as sub-categories with clear internal linking.',
    consolidationStrategy: 'differentiate'
  }
];

export default ContentDeduplicationAnalysis;