import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Heart } from "lucide-react";

const AdFunnelFrameworkTabs = () => {
  const [activePhase, setActivePhase] = useState("awareness");

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-slate-100">The AI-Powered Ad Funnel Blueprint</h2>
      
      <Tabs defaultValue="awareness" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-12">
          <TabsTrigger value="awareness" onClick={() => handlePhaseClick("awareness")} className="text-base py-3">
            <Brain className="w-4 h-4 mr-2" />
            AWARENESS
          </TabsTrigger>
          <TabsTrigger value="consideration" onClick={() => handlePhaseClick("consideration")} className="text-base py-3">
            <Target className="w-4 h-4 mr-2" />
            CONSIDERATION
          </TabsTrigger>
          <TabsTrigger value="conversion" onClick={() => handlePhaseClick("conversion")} className="text-base py-3">
            <Zap className="w-4 h-4 mr-2" />
            CONVERSION
          </TabsTrigger>
          <TabsTrigger value="loyalty" onClick={() => handlePhaseClick("loyalty")} className="text-base py-3">
            <Heart className="w-4 h-4 mr-2" />
            LOYALTY
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="awareness" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in mt-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Phase 1: AWARENESS (TOFU)</h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-blue-300">Objective:</strong> Reach the right broad audience efficiently and make a strong first impression.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-blue-300">Traditional Approach:</strong> Broad targeting based on simple demographics or interests.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-blue-300">AI-Powered Approach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>AI Audience Discovery:</strong> Utilize AI algorithms to analyze vast datasets and identify high-potential Ideal Customer Profiles.
                </li>
                <li>
                  <strong>Predictive Targeting:</strong> Leverage AI to predict which audience segments are most likely to engage with specific content.
                </li>
                <li>
                  <strong>AI Creative Assistance:</strong> Generate diverse ad copy variations tailored to predicted audience preferences.
                </li>
                <li>
                  <strong>Cross-Platform Budget Optimization:</strong> Automatically allocate budget across channels based on real-time performance.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Card className="bg-blue-900/20 border border-blue-800/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-blue-400 mb-4">Audience Relevance Distribution</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Highly Relevant</span>
                        <span className="text-blue-300 font-medium">65%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Moderately Relevant</span>
                        <span className="text-purple-300 font-medium">20%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Low Relevance</span>
                        <span className="text-orange-300 font-medium">10%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-orange-500 h-3 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Non-relevant</span>
                        <span className="text-red-300 font-medium">5%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="consideration" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in mt-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Phase 2: CONSIDERATION (MOFU)</h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-purple-300">Objective:</strong> Engage interested prospects, educate them about solutions, and capture qualified leads.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-purple-300">Traditional Approach:</strong> Generic landing pages, basic retargeting, manual lead scoring.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-purple-300">AI-Powered Approach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>Dynamic Creative Optimization:</strong> Automatically mix and match ad components based on user data and context.
                </li>
                <li>
                  <strong>Intelligent Content Personalization:</strong> Dynamically recommend relevant content to nurture interest.
                </li>
                <li>
                  <strong>AI-Powered Lead Scoring:</strong> Analyze lead interactions to predict conversion likelihood.
                </li>
                <li>
                  <strong>Conversational AI:</strong> Deploy intelligent chatbots trained on your data to answer prospect questions 24/7.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-6 mt-8 md:mt-0">
              <Card className="bg-purple-900/20 border border-purple-800/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-purple-400 mb-3">Lead Qualification Improvement</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Manual Scoring</span>
                        <span className="text-slate-300">35%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-slate-400 h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Basic Automation</span>
                        <span className="text-slate-300">55%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-slate-400 h-2 rounded-full" style={{ width: "55%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-300">AI-Powered</span>
                        <span className="text-purple-300">83%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="conversion" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in mt-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-indigo-400 mb-6">Phase 3: CONVERSION (BOFU)</h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-indigo-300">Objective:</strong> Convert qualified leads into paying customers or desired actions.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-indigo-300">Traditional Approach:</strong> Standard retargeting ads, fixed bidding strategies.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-indigo-300">AI-Powered Approach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>Predictive Purchase Intent:</strong> AI identifies the optimal moment to present conversion opportunities.
                </li>
                <li>
                  <strong>Dynamic Pricing & Offers:</strong> Personalize pricing and promotional strategies based on individual propensity to buy.
                </li>
                <li>
                  <strong>Intelligent Retargeting:</strong> Create highly personalized retargeting campaigns using browsing behavior analysis.
                </li>
                <li>
                  <strong>Conversion Path Optimization:</strong> AI tests and optimizes checkout flows in real-time.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-6 mt-8 md:mt-0">
              <Card className="bg-indigo-900/20 border border-indigo-800/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-indigo-400 mb-4">Conversion Optimization Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-indigo-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">+94%</div>
                      <div className="text-slate-300 text-sm mt-1">Conversion Rate</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">-28%</div>
                      <div className="text-slate-300 text-sm mt-1">Cart Abandonment</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">+156%</div>
                      <div className="text-slate-300 text-sm mt-1">ROAS</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">-35%</div>
                      <div className="text-slate-300 text-sm mt-1">Acquisition Cost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="loyalty" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in mt-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Phase 4: LOYALTY & ADVOCACY</h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-green-300">Objective:</strong> Retain customers, increase lifetime value, and turn them into brand advocates.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-green-300">Traditional Approach:</strong> Email newsletters, basic loyalty programs, manual customer service.
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-green-300">AI-Powered Approach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>Predictive Customer Lifetime Value:</strong> AI predicts which customers will be most valuable long-term.
                </li>
                <li>
                  <strong>Proactive Churn Prevention:</strong> Identify at-risk customers before they churn and take targeted action.
                </li>
                <li>
                  <strong>Sentiment Analysis:</strong> Monitor social media, reviews, and support interactions to gauge customer sentiment.
                </li>
                <li>
                  <strong>Automated Loyalty Journeys:</strong> Trigger personalized rewards based on customer milestones.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-6 mt-8 md:mt-0">
              <Card className="bg-green-900/20 border border-green-800/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-green-400 mb-4">Customer Lifetime Value Impact</h4>
                  <div className="relative pt-1 mb-6">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-400 bg-green-900/40">
                          CLV Increase
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-400">
                          65%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-4 mb-4 overflow-hidden rounded-full bg-slate-700">
                      <div style={{ width: "65%" }} className="animate-pulse shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">-42%</div>
                      <div className="text-slate-300 text-sm mt-1">Churn Rate</div>
                    </div>
                    <div className="text-center p-3 bg-green-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">+78%</div>
                      <div className="text-slate-300 text-sm mt-1">Repeat Purchase</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdFunnelFrameworkTabs;