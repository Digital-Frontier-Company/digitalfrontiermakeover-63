import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, TrendingUp, Target } from "lucide-react";

const SEOAuditHero = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ultimate SEO Diagnosis Tool
          </Badge>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Complete SEO Ranking Diagnosis
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive 9-section SEO audit based on Google's latest ranking factors. 
            Get actionable insights to improve your website's search performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Enter your website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-12"
              />
            </div>
            <Button 
              onClick={handleAnalyze}
              disabled={!url || isAnalyzing}
              className="whitespace-nowrap"
            >
              <Search className="w-4 h-4 mr-2" />
              {isAnalyzing ? "Analyzing..." : "Start Audit"}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>9 Core Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive analysis covering crawling, UX, keywords, content, E-E-A-T, and technical SEO
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <CardTitle>Real-time Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Interactive checklist with instant scoring and prioritized recommendations
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Competitor Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Compare your SEO performance against top-ranking competitors
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOAuditHero;