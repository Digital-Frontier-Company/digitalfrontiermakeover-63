import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Zap, Eye, Clock, Award } from "lucide-react";

const AEOChartTabs = () => {
  const answerDistributionData = [
    { name: 'Featured Snippets', value: 45, color: 'bg-blue-500', description: 'Direct answers at the top of search results' },
    { name: 'Knowledge Panels', value: 28, color: 'bg-purple-500', description: 'Informational boxes for entities and topics' },
    { name: 'Voice Responses', value: 17, color: 'bg-amber-500', description: 'Answers delivered through voice assistants' },
    { name: 'Rich Results', value: 10, color: 'bg-emerald-500', description: 'Enhanced listings with additional information' }
  ];

  const factorsData = [
    { factor: 'Question Relevance', impact: 90, icon: Target, description: 'Directly addressing the questions your audience is asking' },
    { factor: 'Answer Conciseness', impact: 85, icon: Zap, description: 'Complete answers in the optimal 40-60 word range' },
    { factor: 'Structured Data', impact: 80, icon: Eye, description: 'Proper schema markup for search engine understanding' },
    { factor: 'Voice-Search Ready', impact: 75, icon: Clock, description: 'Optimized for voice assistant queries' },
    { factor: 'Content Quality', impact: 70, icon: Award, description: 'High-quality, authoritative content' },
    { factor: 'Page Authority', impact: 65, icon: TrendingUp, description: 'Strong domain and page-level authority signals' }
  ];

  const monthlyImprovementData = [
    { month: 'Jan', improvement: 15, description: 'Initial optimization phase' },
    { month: 'Feb', improvement: 32, description: 'Content restructuring effects' },
    { month: 'Mar', improvement: 48, description: 'Schema markup implementation' },
    { month: 'Apr', improvement: 63, description: 'Voice search optimization' },
    { month: 'May', improvement: 79, description: 'Answer format refinement' },
    { month: 'Jun', improvement: 92, description: 'Full AEO strategy maturation' }
  ];

  return (
    <Tabs defaultValue="distribution" className="mb-32">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="distribution" className="text-base py-3">Answer Distribution</TabsTrigger>
        <TabsTrigger value="factors" className="text-base py-3">Optimization Factors</TabsTrigger>
        <TabsTrigger value="improvement" className="text-base py-3">Improvement Timeline</TabsTrigger>
      </TabsList>
      
      <TabsContent value="distribution" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Answer Format Distribution</h3>
            <p className="text-slate-300 text-lg mb-8">
              Our AEO-optimized content appears in various answer formats across search results, with featured snippets 
              representing the largest percentage at 45%.
            </p>
            
            {answerDistributionData.map((item, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="font-semibold text-slate-100">{item.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-100">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="mb-3" />
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-700">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-100">92%</div>
                    <div className="text-slate-400">Coverage</div>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-3">Total Answer Visibility</h4>
              <p className="text-slate-300">Combined presence across all major answer formats</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="factors" className="space-y-8">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-100 mb-4">Key Optimization Factors</h3>
          <p className="text-slate-300 text-lg">
            Our comprehensive approach targets the critical factors that influence answer selection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {factorsData.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-slate-100">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-lg">{factor.factor}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-300">Impact Score</span>
                    <span className="text-2xl font-bold text-blue-400">{factor.impact}%</span>
                  </div>
                  <Progress value={factor.impact} className="mb-4" />
                  <p className="text-slate-400 text-sm">{factor.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="improvement" className="space-y-8">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-100 mb-4">Progressive Improvement Timeline</h3>
          <p className="text-slate-300 text-lg">
            Our AEO strategy delivers continuous improvement in answer visibility over time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyImprovementData.map((month, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">{month.month}</span>
                </div>
                <CardTitle className="text-slate-100">{month.improvement}%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Progress value={month.improvement} className="mb-4" />
                <p className="text-slate-400 text-sm">{month.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg border border-slate-700 text-center">
          <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-slate-100 mb-3">92% Peak Improvement</h4>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Clients typically see up to 92% improvement in answer visibility within 6 months of implementing our AEO strategies.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AEOChartTabs;
