import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, Keyboard, Volume2, Contrast, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  severity: 'critical' | 'serious' | 'moderate' | 'minor';
  category: string;
  issue: string;
  impact: string;
  recommendation: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
}

const accessibilityIssues: AccessibilityIssue[] = [
  {
    id: '1',
    severity: 'critical',
    category: 'Images',
    issue: 'Missing alt text on 3 images',
    impact: 'Screen reader users cannot understand image content',
    recommendation: 'Add descriptive alt text to all images',
    wcagLevel: 'A'
  },
  {
    id: '2',
    severity: 'serious',
    category: 'Color Contrast',
    issue: 'Low contrast ratio (3.2:1) on 5 text elements',
    impact: 'Users with visual impairments may struggle to read content',
    recommendation: 'Ensure minimum 4.5:1 contrast ratio for normal text',
    wcagLevel: 'AA'
  },
  {
    id: '3',
    severity: 'moderate',
    category: 'Keyboard Navigation',
    issue: 'Focus indicators not visible on 8 interactive elements',
    impact: 'Keyboard-only users cannot see which element has focus',
    recommendation: 'Add visible focus styles to all interactive elements',
    wcagLevel: 'AA'
  },
  {
    id: '4',
    severity: 'minor',
    category: 'Semantic HTML',
    issue: 'Using divs instead of semantic elements',
    impact: 'Reduced content structure clarity for assistive technologies',
    recommendation: 'Use semantic HTML5 elements (nav, main, section, etc.)',
    wcagLevel: 'A'
  }
];

const wcagCompliance = {
  levelA: { passed: 42, failed: 3, total: 45 },
  levelAA: { passed: 35, failed: 7, total: 42 },
  levelAAA: { passed: 18, failed: 12, total: 30 }
};

export const AccessibilityDashboard: React.FC = () => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'serious':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'moderate':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'destructive';
      case 'serious':
        return 'destructive';
      case 'moderate':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Accessibility Compliance Dashboard
          </CardTitle>
          <CardDescription>
            WCAG 2.1 compliance monitoring and accessibility optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="wcag">WCAG Levels</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Overall Score */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold">82/100</div>
                    <p className="text-muted-foreground">Overall Accessibility Score</p>
                    <Badge variant="secondary" className="mt-2">WCAG 2.1 AA Compliant</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Issue Summary */}
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-2xl font-bold text-red-600">1</div>
                    <p className="text-sm text-muted-foreground mt-1">Critical</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-2xl font-bold text-orange-600">2</div>
                    <p className="text-sm text-muted-foreground mt-1">Serious</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-2xl font-bold text-yellow-600">4</div>
                    <p className="text-sm text-muted-foreground mt-1">Moderate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <p className="text-sm text-muted-foreground mt-1">Minor</p>
                  </CardContent>
                </Card>
              </div>

              {/* Category Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Category Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Images & Media', icon: Eye, score: 78 },
                    { name: 'Color Contrast', icon: Contrast, score: 85 },
                    { name: 'Keyboard Navigation', icon: Keyboard, score: 82 },
                    { name: 'Screen Reader', icon: Volume2, score: 90 }
                  ].map((category) => (
                    <div key={category.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <category.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm font-semibold">{category.score}%</span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues" className="space-y-4">
              {accessibilityIssues.map((issue) => (
                <Alert key={issue.id} variant={issue.severity === 'critical' ? 'destructive' : 'default'}>
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(issue.severity)}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <AlertDescription className="font-semibold">{issue.issue}</AlertDescription>
                        <div className="flex items-center gap-2">
                          <Badge variant={getSeverityColor(issue.severity) as any}>
                            {issue.severity}
                          </Badge>
                          <Badge variant="outline">WCAG {issue.wcagLevel}</Badge>
                        </div>
                      </div>
                      <AlertDescription className="text-sm">
                        <p className="mb-1"><strong>Impact:</strong> {issue.impact}</p>
                        <p><strong>Fix:</strong> {issue.recommendation}</p>
                      </AlertDescription>
                    </div>
                  </div>
                </Alert>
              ))}
            </TabsContent>

            <TabsContent value="wcag" className="space-y-4">
              {Object.entries(wcagCompliance).map(([level, data]) => {
                const percentage = Math.round((data.passed / data.total) * 100);
                return (
                  <Card key={level}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">WCAG {level.replace('level', '').toUpperCase()}</CardTitle>
                        <Badge variant={percentage >= 90 ? 'default' : 'secondary'}>
                          {percentage}% Compliant
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={percentage} className="h-3" />
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">{data.passed}</div>
                          <p className="text-xs text-muted-foreground">Passed</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">{data.failed}</div>
                          <p className="text-xs text-muted-foreground">Failed</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{data.total}</div>
                          <p className="text-xs text-muted-foreground">Total Checks</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Accessibility Testing Tools</CardTitle>
                  <CardDescription>Run automated checks and manual audits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      <strong>Screen Reader Test:</strong> Content is properly structured with semantic HTML and ARIA labels
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      <strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription>
                      <strong>Color Contrast:</strong> Some text elements need contrast adjustment for AA compliance
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessibilityDashboard;
