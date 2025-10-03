
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Target, Zap } from "lucide-react";

const AIPromptHeroSection = () => {
  return (
    <section className="mb-24">
      <img 
        alt="AI Prompt Templates for Memphis Marketing - ChatGPT Business Prompts" 
        className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12" 
        src="/lovable-uploads/ee38718a-95d4-48fd-9ffb-203acff704f0.jpg" 
      />
      
      {/* Quick Answer for AI Optimization */}
      <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-6 mb-8">
        <p className="text-xl text-blue-200 font-medium leading-relaxed">
          AI Prompt Templates for Memphis businesses include 50+ proven ChatGPT prompts for local marketing, 
          SEO content creation, social media campaigns, customer service automation, and competitor analysis 
          specifically designed for Memphis market conditions and local business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-blue-800/50 bg-blue-900/20">
          <CardContent className="pt-6">
            <Bot className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-blue-300 mb-2">ChatGPT Optimization</h3>
            <p className="text-slate-300">Prompts designed to get better responses from ChatGPT for Memphis marketing tasks</p>
          </CardContent>
        </Card>
        
        <Card className="border-green-800/50 bg-green-900/20">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-green-300 mb-2">Local Market Focus</h3>
            <p className="text-slate-300">Templates specifically crafted for Memphis businesses and local market conditions</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-800/50 bg-purple-900/20">
          <CardContent className="pt-6">
            <Zap className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Instant Results</h3>
            <p className="text-slate-300">Copy-paste prompts that deliver immediate marketing insights and content</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-slate-100">Memphis Marketing AI Prompt Templates</h2>
      <h3 className="text-xl font-semibold mb-8 text-slate-200">AI-Powered Tools for Local Business Success</h3>
      <p className="text-slate-300 text-lg mb-6">
        These AI prompt templates are specifically designed for Memphis businesses looking to leverage ChatGPT 
        and other AI tools for marketing success. Each prompt has been tested and optimized to provide 
        actionable results for local businesses in the Memphis market.
      </p>
      
      <h3 className="text-xl font-semibold mb-4 text-slate-200">Tailored for Memphis Market Conditions</h3>
      <p className="text-slate-300 text-lg mb-6">
        Whether you're running a restaurant in Beale Street, a medical practice in Germantown, or a 
        tech startup in downtown Memphis, these ChatGPT prompts will help you create better marketing 
        content, analyze competitors, and engage with your local audience more effectively.
      </p>
    </section>
  );
};

export default AIPromptHeroSection;
