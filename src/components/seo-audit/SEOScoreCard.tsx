import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const SEOScoreCard = () => {
  const overallScore = 78;
  const sectionScores = [
    { name: "Crawling & Indexing", score: 95, status: "excellent" },
    { name: "User Experience", score: 72, status: "good" },
    { name: "Keywords", score: 88, status: "excellent" },
    { name: "Content Quality", score: 65, status: "needs-work" },
    { name: "E-E-A-T", score: 70, status: "good" },
    { name: "Technical SEO", score: 92, status: "excellent" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "good":
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case "needs-work":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500";
      case "good":
        return "bg-blue-500";
      case "needs-work":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your SEO Score Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time analysis of your website's SEO performance across all critical ranking factors
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Overall Score */}
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <CardTitle>Overall SEO Score</CardTitle>
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
                  {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement"}
                </Badge>
              </CardContent>
            </Card>

            {/* Section Breakdown */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Section Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectionScores.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(section.status)}
                          <span className="font-medium">{section.name}</span>
                        </div>
                        <span className="font-bold">{section.score}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={section.score} className="h-2" />
                        <div 
                          className={`absolute left-0 top-0 h-2 rounded-full transition-all ${getStatusColor(section.status)}`}
                          style={{ width: `${section.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Priority Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mb-2" />
                  <h4 className="font-semibold mb-1">Content Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Improve originality and add more unique value to your content
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-semibold mb-1">Core Web Vitals</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimize loading speed and user experience metrics
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
                  <h4 className="font-semibold mb-1">E-E-A-T Signals</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhance author credentials and trust signals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOScoreCard;