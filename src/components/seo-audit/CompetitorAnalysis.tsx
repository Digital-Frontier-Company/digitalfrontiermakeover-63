import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { 
  Crown,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const CompetitorAnalysis = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const competitors = [
    {
      name: "Competitor A",
      domain: "competitor-a.com",
      rank: 1,
      score: 92,
      traffic: "2.3M",
      keywords: 15420,
      backlinks: "89K",
      change: "+5%",
      trend: "up",
    },
    {
      name: "Your Site",
      domain: "yoursite.com",
      rank: 2,
      score: 78,
      traffic: "1.8M",
      keywords: 12350,
      backlinks: "67K",
      change: "+2%",
      trend: "up",
    },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <ArrowUpRight className="w-4 h-4 text-green-500" /> : 
      <ArrowDownRight className="w-4 h-4 text-red-500" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-500" : "text-red-500";
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Competitor Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare your SEO performance against top competitors
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {competitors.map((competitor, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 border rounded-lg ${competitor.name === "Your Site" ? "bg-primary/5 border-primary/20" : ""}`}>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {competitor.rank === 1 && <Crown className="w-5 h-5 text-yellow-500" />}
                            <span className="font-bold text-lg">#{competitor.rank}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{competitor.name}</h4>
                            <p className="text-sm text-muted-foreground">{competitor.domain}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-center">
                            <div className="font-semibold">{competitor.score}</div>
                            <div className="text-muted-foreground">Score</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{competitor.traffic}</div>
                            <div className="text-muted-foreground">Traffic</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {getTrendIcon(competitor.trend)}
                            <span className={getTrendColor(competitor.trend)}>{competitor.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keywords">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keyword analysis coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="opportunities">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Opportunity analysis coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CompetitorAnalysis;