import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const AdFunnelPerformanceChart = () => {
  const performanceData = [
    { month: 'Jan', standard: 45, aiOptimized: 75 },
    { month: 'Feb', standard: 50, aiOptimized: 78 },
    { month: 'Mar', standard: 52, aiOptimized: 82 },
    { month: 'Apr', standard: 55, aiOptimized: 86 },
    { month: 'May', standard: 57, aiOptimized: 90 },
    { month: 'Jun', standard: 60, aiOptimized: 95 },
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/80 animate-fade-in mb-16 relative">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span className="bg-blue-500/20 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-400" />
          </span>
          Performance Comparison
        </CardTitle>
        <p className="text-slate-300 text-lg">Standard vs AI-Powered Ad Funnel Performance</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[450px] w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#9F9EA1" />
              <YAxis stroke="#9F9EA1" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
              <Bar dataKey="standard" fill="#9F9EA1" name="Standard Funnel" radius={[4, 4, 0, 0]} />
              <Bar dataKey="aiOptimized" fill="#8B5CF6" name="AI-Powered Funnel" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-slate-100 mb-3">Standard Funnel</h4>
            <p className="text-slate-300 text-sm mb-3">Traditional approach with manual optimization and basic targeting</p>
            <div className="text-3xl font-bold text-slate-400">60%</div>
            <div className="text-slate-400 text-sm">Average Performance</div>
          </div>
          <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-800/30">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">AI-Powered Funnel</h4>
            <p className="text-slate-300 text-sm mb-3">Intelligent automation with predictive analytics and personalization</p>
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <div className="text-purple-300 text-sm">Peak Performance</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdFunnelPerformanceChart;