import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Smartphone, Monitor, Zap, Clock, Eye, Gauge } from "lucide-react";

const PerformanceMonitor = () => {
  const [activeDevice, setActiveDevice] = useState("mobile");

  const coreWebVitalsData = {
    mobile: {
      lcp: { value: 2.1, threshold: 2.5, status: "good" },
      fid: { value: 85, threshold: 100, status: "good" },
      cls: { value: 0.08, threshold: 0.1, status: "good" },
      performance: 78,
    },
    desktop: {
      lcp: { value: 1.8, threshold: 2.5, status: "good" },
      fid: { value: 45, threshold: 100, status: "good" },
      cls: { value: 0.05, threshold: 0.1, status: "good" },
      performance: 92,
    },
  };

  const performanceHistory = [
    { date: "Jan", mobile: 72, desktop: 85 },
    { date: "Feb", mobile: 75, desktop: 88 },
    { date: "Mar", mobile: 78, desktop: 92 },
    { date: "Apr", mobile: 76, desktop: 90 },
    { date: "May", mobile: 78, desktop: 92 },
  ];

  const pageSpeedMetrics = [
    { metric: "First Contentful Paint", mobile: 1.2, desktop: 0.8, unit: "s" },
    { metric: "Largest Contentful Paint", mobile: 2.1, desktop: 1.8, unit: "s" },
    { metric: "First Input Delay", mobile: 85, desktop: 45, unit: "ms" },
    { metric: "Cumulative Layout Shift", mobile: 0.08, desktop: 0.05, unit: "" },
    { metric: "Time to Interactive", mobile: 3.2, desktop: 2.1, unit: "s" },
    { metric: "Speed Index", mobile: 2.8, desktop: 1.9, unit: "s" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const currentData = coreWebVitalsData[activeDevice as keyof typeof coreWebVitalsData];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Performance Monitor</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time Core Web Vitals monitoring and PageSpeed Insights integration
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="metrics">Detailed Metrics</TabsTrigger>
              <TabsTrigger value="history">Performance History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Device Toggle */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Core Web Vitals</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant={activeDevice === "mobile" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveDevice("mobile")}
                        >
                          <Smartphone className="w-4 h-4 mr-2" />
                          Mobile
                        </Button>
                        <Button
                          variant={activeDevice === "desktop" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveDevice("desktop")}
                        >
                          <Monitor className="w-4 h-4 mr-2" />
                          Desktop
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Overall Performance Score */}
                      <div className="text-center">
                        <div className="relative w-24 h-24 mx-auto mb-4">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              className="text-muted"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 35}`}
                              strokeDashoffset={`${2 * Math.PI * 35 * (1 - currentData.performance / 100)}`}
                              className={getScoreColor(currentData.performance)}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-xl font-bold ${getScoreColor(currentData.performance)}`}>
                              {currentData.performance}
                            </span>
                          </div>
                        </div>
                        <p className="font-medium">Performance</p>
                      </div>

                      {/* LCP */}
                      <div className="text-center">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold mb-1">{currentData.lcp.value}s</div>
                        <p className="text-sm text-muted-foreground mb-2">LCP</p>
                        <Badge variant={currentData.lcp.status === "good" ? "default" : "destructive"}>
                          {currentData.lcp.status === "good" ? "Good" : "Needs Work"}
                        </Badge>
                      </div>

                      {/* FID */}
                      <div className="text-center">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-secondary" />
                        <div className="text-2xl font-bold mb-1">{currentData.fid.value}ms</div>
                        <p className="text-sm text-muted-foreground mb-2">FID</p>
                        <Badge variant={currentData.fid.status === "good" ? "default" : "destructive"}>
                          {currentData.fid.status === "good" ? "Good" : "Needs Work"}
                        </Badge>
                      </div>

                      {/* CLS */}
                      <div className="text-center">
                        <Eye className="w-8 h-8 mx-auto mb-2 text-accent" />
                        <div className="text-2xl font-bold mb-1">{currentData.cls.value}</div>
                        <p className="text-sm text-muted-foreground mb-2">CLS</p>
                        <Badge variant={currentData.cls.status === "good" ? "default" : "destructive"}>
                          {currentData.cls.status === "good" ? "Good" : "Needs Work"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="metrics">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pageSpeedMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{metric.metric}</h4>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <div className="flex items-center gap-1">
                              <Smartphone className="w-4 h-4" />
                              <span className="font-mono">
                                {metric.mobile}{metric.unit}
                              </span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1">
                              <Monitor className="w-4 h-4" />
                              <span className="font-mono">
                                {metric.desktop}{metric.unit}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="mobile" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name="Mobile"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="desktop" 
                          stroke="hsl(var(--secondary))" 
                          strokeWidth={2}
                          name="Desktop"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMonitor;