
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const AEOPerformanceChart = () => {
  const comparisonData = [
    { month: 'Jan', traditional: 35, aeo: 65, difference: 30 },
    { month: 'Feb', traditional: 38, aeo: 72, difference: 34 },
    { month: 'Mar', traditional: 40, aeo: 78, difference: 38 },
    { month: 'Apr', traditional: 38, aeo: 82, difference: 44 },
    { month: 'May', traditional: 42, aeo: 87, difference: 45 },
    { month: 'Jun', traditional: 45, aeo: 92, difference: 47 }
  ];

  return (
    <Card className="mb-28 border-slate-800 bg-slate-900/80">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <BarChart3 className="h-6 w-6 text-blue-400" />
          Performance Comparison: Traditional SEO vs AEO
        </CardTitle>
        <p className="text-slate-300 text-lg">Answer visibility performance over 6 months</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {comparisonData.map((data, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-100">{data.month} 2024</h3>
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+{data.difference}%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Traditional Content</span>
                      <span className="text-slate-300 font-medium">{data.traditional}%</span>
                    </div>
                    <Progress value={data.traditional} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-400">AEO-Optimized</span>
                      <span className="text-blue-300 font-medium">{data.aeo}%</span>
                    </div>
                    <Progress value={data.aeo} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-800/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-gray-400" />
              <div>
                <h4 className="text-xl font-semibold text-gray-300">Traditional Content</h4>
                <p className="text-gray-400">Average: 40% visibility</p>
              </div>
            </div>
            <ul className="text-slate-400 space-y-2">
              <li>• Limited to traditional search results</li>
              <li>• Slower growth trajectory</li>
              <li>• Lower answer visibility rates</li>
            </ul>
          </div>
          
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div>
                <h4 className="text-xl font-semibold text-blue-300">AEO-Optimized</h4>
                <p className="text-blue-400">Average: 79% visibility</p>
              </div>
            </div>
            <ul className="text-slate-300 space-y-2">
              <li>• Featured in answer boxes</li>
              <li>• Voice search compatible</li>
              <li>• 97% higher answer visibility</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AEOPerformanceChart;
