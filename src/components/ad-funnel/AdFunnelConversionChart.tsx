import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Filter, ArrowDown } from "lucide-react";

const AdFunnelConversionChart = () => {
  const funnelData = [
    { 
      stage: 'Awareness', 
      traditional: 100, 
      aiPowered: 100,
      description: 'Initial reach and visibility',
      color: 'blue'
    },
    { 
      stage: 'Consideration', 
      traditional: 45, 
      aiPowered: 68,
      description: 'Engagement and interest',
      color: 'purple'
    },
    { 
      stage: 'Conversion', 
      traditional: 18, 
      aiPowered: 35,
      description: 'Purchase or desired action',
      color: 'indigo'
    },
    { 
      stage: 'Loyalty', 
      traditional: 8, 
      aiPowered: 22,
      description: 'Repeat customers and advocacy',
      color: 'green'
    },
  ];

  const getColorClasses = (color: string, isAI = false) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { 
        bg: isAI ? 'bg-blue-500' : 'bg-slate-400', 
        text: isAI ? 'text-blue-300' : 'text-slate-400',
        border: 'border-blue-800/30'
      },
      purple: { 
        bg: isAI ? 'bg-purple-500' : 'bg-slate-400', 
        text: isAI ? 'text-purple-300' : 'text-slate-400',
        border: 'border-purple-800/30'
      },
      indigo: { 
        bg: isAI ? 'bg-indigo-500' : 'bg-slate-400', 
        text: isAI ? 'text-indigo-300' : 'text-slate-400',
        border: 'border-indigo-800/30'
      },
      green: { 
        bg: isAI ? 'bg-green-500' : 'bg-slate-400', 
        text: isAI ? 'text-green-300' : 'text-slate-400',
        border: 'border-green-800/30'
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <Card className="border-slate-800 bg-slate-900/80 animate-fade-in mb-16 relative">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span className="bg-purple-500/20 p-2 rounded-lg">
            <Filter className="w-6 h-6 text-purple-400" />
          </span>
          Funnel Conversion Performance
        </CardTitle>
        <p className="text-slate-300 text-lg">Traditional vs AI-Powered Funnel Conversion Rates</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {funnelData.map((stage, index) => {
            const colors = getColorClasses(stage.color);
            const improvement = stage.aiPowered - stage.traditional;
            
            return (
              <div key={stage.stage}>
                <Card className={`bg-slate-800/40 border ${colors.border}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">{stage.stage}</h3>
                        <p className="text-slate-400 text-sm">{stage.description}</p>
                      </div>
                      <div className={`flex items-center gap-1 ${colors.text}`}>
                        <span className="text-sm font-medium">+{improvement}%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-400">Traditional Funnel</span>
                          <span className="text-slate-300 font-medium">{stage.traditional}%</span>
                        </div>
                        <Progress value={stage.traditional} className="h-3" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className={colors.text}>AI-Powered Funnel</span>
                          <span className={`${colors.text} font-medium`}>{stage.aiPowered}%</span>
                        </div>
                        <Progress value={stage.aiPowered} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < funnelData.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-lg border border-purple-800/30">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Insight</h4>
          <p className="text-slate-300">
            AI-powered funnels show consistent improvement across all stages, with the most dramatic gains 
            in conversion (+94% improvement) and loyalty phases (+175% improvement). This demonstrates the 
            power of AI in personalizing experiences and predicting customer behavior.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdFunnelConversionChart;