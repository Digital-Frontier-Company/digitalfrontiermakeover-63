import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  BarChart3
} from "lucide-react";

const ContentQualityAssessment = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const qualityMetrics = {
    originality: 73,
    readability: 88,
    uniqueness: 95,
    grammar: 91,
    structure: 82,
    engagement: 67,
  };

  const overallScore = Math.round(
    Object.values(qualityMetrics).reduce((sum, score) => sum + score, 0) / 
    Object.keys(qualityMetrics).length
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Content Quality Assessment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis of content originality, readability, and user engagement metrics
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Content Quality Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallScore / 100)}`}
                          className="text-primary"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold">{overallScore}</span>
                      </div>
                    </div>
                    <Badge variant={overallScore >= 80 ? "default" : overallScore >= 60 ? "secondary" : "destructive"}>
                      {overallScore >= 80 ? "High Quality" : overallScore >= 60 ? "Good Quality" : "Needs Improvement"}
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Quality Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(qualityMetrics).map(([metric, score]) => (
                        <div key={metric} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium capitalize">
                              {metric.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="font-bold">{score}%</span>
                          </div>
                          <Progress value={score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="detailed">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed content analysis coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Quick Wins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold mb-1">Add Visual Elements</h4>
                        <p className="text-sm text-muted-foreground">
                          Include images, charts, or infographics to break up text
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Long-term Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold mb-1">Add Personal Experience</h4>
                        <p className="text-sm text-muted-foreground">
                          Include first-hand experiences and case studies
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ContentQualityAssessment;