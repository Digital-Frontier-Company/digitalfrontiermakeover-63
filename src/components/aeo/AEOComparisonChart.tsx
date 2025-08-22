
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Search, Zap } from "lucide-react";

const AEOComparisonChart = () => {
  const optimizationStrategies = [
    {
      name: "SEO",
      description: "Traditional search engine optimization targeting broad keywords",
      color: "green",
      icon: Search,
      metrics: [
        { name: "Search Visibility", value: 53, max: 100 },
        { name: "Direct Traffic", value: 40, max: 100 },
        { name: "Conversion Rate", value: 2.8, max: 30 },
        { name: "Content ROI", value: 550, max: 1000 }
      ],
      strengths: ["High traffic volume", "Established practices", "Long-term stability"],
      focus: "Drive website traffic through keyword ranking"
    },
    {
      name: "AEO", 
      description: "Answer Engine Optimization for direct responses and voice search",
      color: "blue",
      icon: Zap,
      metrics: [
        { name: "Search Visibility", value: 41, max: 100 },
        { name: "Direct Traffic", value: 0, max: 100 },
        { name: "Conversion Rate", value: 24, max: 30 },
        { name: "Content ROI", value: 400, max: 1000 }
      ],
      strengths: ["High conversion rates", "Voice search ready", "Featured snippets"],
      focus: "Optimize for answer visibility and zero-click searches"
    },
    {
      name: "GEO",
      description: "Generative Engine Optimization for AI quotability and citations",
      color: "purple", 
      icon: TrendingUp,
      metrics: [
        { name: "Search Visibility", value: 46, max: 100 },
        { name: "Direct Traffic", value: 45, max: 100 },
        { name: "Conversion Rate", value: 20, max: 30 },
        { name: "Content ROI", value: 400, max: 1000 }
      ],
      strengths: ["AI citations", "Future-proof", "Thought leadership"],
      focus: "Position content for AI language model citations"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: { bg: "bg-green-900/20", border: "border-green-800/30", text: "text-green-400", badge: "bg-green-900/30 text-green-300" },
      blue: { bg: "bg-blue-900/20", border: "border-blue-800/30", text: "text-blue-400", badge: "bg-blue-900/30 text-blue-300" },
      purple: { bg: "bg-purple-900/20", border: "border-purple-800/30", text: "text-purple-400", badge: "bg-purple-900/30 text-purple-300" }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <Card className="mb-32 border-slate-800 bg-slate-900/80">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <BarChart3 className="h-6 w-6 text-blue-400" />
          Optimization Strategy Comparison
        </CardTitle>
        <p className="text-slate-300 text-lg">
          SEO vs AEO vs <Link to="/generative-engine-optimization" className="text-purple-400 hover:underline">GEO</Link>: Performance across key metrics
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {optimizationStrategies.map((strategy, index) => {
            const colors = getColorClasses(strategy.color);
            const IconComponent = strategy.icon;
            
            return (
              <Card key={index} className={`${colors.bg} ${colors.border} border`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className={`${colors.text} text-xl flex items-center gap-2`}>
                      <IconComponent className="w-5 h-5" />
                      {strategy.name}
                    </CardTitle>
                    <Badge className={colors.badge}>{strategy.focus.split(' ')[0]}</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">{strategy.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {strategy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 text-sm">{metric.name}</span>
                        <span className="text-slate-200 font-medium">
                          {metric.name.includes('Rate') || metric.name.includes('ROI') 
                            ? `${metric.value}${metric.name.includes('Rate') ? '%' : '%'}`
                            : `${metric.value}%`
                          }
                        </span>
                      </div>
                      <Progress 
                        value={(metric.value / metric.max) * 100} 
                        className="h-2" 
                      />
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <h4 className={`${colors.text} font-medium mb-2`}>Key Strengths</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {strategy.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-8 bg-slate-800/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Strategic Recommendation</h3>
          <p className="text-slate-300 text-lg">
            For maximum impact, combine <span className="text-blue-400 font-medium">AEO's high conversion rates</span> with{' '}
            <span className="text-green-400 font-medium">SEO's traffic volume</span> and{' '}
            <span className="text-purple-400 font-medium">GEO's future-proofing</span> in an integrated approach.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AEOComparisonChart;
