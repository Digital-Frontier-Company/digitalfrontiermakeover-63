import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database, TrendingUp, FileText } from "lucide-react";

const AdFunnelIntegrationCards = () => {
  const integrations = [
    {
      icon: Database,
      title: "Unified Data Analysis",
      description: "Ensure data from ad platforms, CRM, website analytics, and other sources flows into a central repository for holistic AI analysis.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "AI models constantly learn from new data. Regularly review performance, refine inputs, and allow the AI to adapt strategies.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Leverage AI tools to automate performance reporting and surface key insights or anomalies that might be missed in manual analysis.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; border: string; hover: string } } = {
      blue: { 
        bg: "bg-blue-500/20", 
        icon: "text-blue-400", 
        border: "border-blue-800/30",
        hover: "hover:shadow-blue-900/20"
      },
      purple: { 
        bg: "bg-purple-500/20", 
        icon: "text-purple-400", 
        border: "border-purple-800/30",
        hover: "hover:shadow-purple-900/20"
      },
      indigo: { 
        bg: "bg-indigo-500/20", 
        icon: "text-indigo-400", 
        border: "border-indigo-800/30",
        hover: "hover:shadow-indigo-900/20"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Overarching AI Integration</h2>
      <p className="text-slate-300 mb-12 text-lg">
        Essential components for creating a unified, intelligent ad funnel ecosystem
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((integration, index) => {
          const colors = getColorClasses(integration.color);
          const IconComponent = integration.icon;
          
          return (
            <Card 
              key={index}
              className={`border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg ${colors.hover} hover:-translate-y-1 ${colors.border}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className={`${colors.bg} p-2 rounded-lg`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </span>
                  <span className="text-slate-100">{integration.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdFunnelIntegrationCards;