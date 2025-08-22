
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, TrendingUp, MessageSquare, Search, Camera } from "lucide-react";

const AIPromptCategories = () => {
  const categories = [
    {
      icon: MapPin,
      title: "Local SEO Prompts",
      count: "12 prompts",
      description: "ChatGPT prompts for Memphis local SEO, Google My Business optimization, and location-based content",
      color: "blue"
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      count: "15 prompts", 
      description: "AI prompts for Memphis social media campaigns, community engagement, and local influencer outreach",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Competitor Analysis",
      count: "8 prompts",
      description: "ChatGPT templates for analyzing Memphis competitors, market positioning, and opportunity identification",
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "Customer Service AI",
      count: "10 prompts",
      description: "AI prompts for Memphis customer service automation, FAQ generation, and support optimization",
      color: "orange"
    },
    {
      icon: Search,
      title: "Content Creation",
      count: "9 prompts",
      description: "ChatGPT prompts for Memphis-focused blog posts, web copy, and marketing materials",
      color: "cyan"
    },
    {
      icon: Camera,
      title: "Campaign Planning",
      count: "6 prompts",
      description: "AI templates for Memphis marketing campaign strategy, event promotion, and seasonal marketing",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-800/50 bg-blue-900/20 text-blue-300",
      green: "border-green-800/50 bg-green-900/20 text-green-300", 
      purple: "border-purple-800/50 bg-purple-900/20 text-purple-300",
      orange: "border-orange-800/50 bg-orange-900/20 text-orange-300",
      cyan: "border-cyan-800/50 bg-cyan-900/20 text-cyan-300",
      pink: "border-pink-800/50 bg-pink-900/20 text-pink-300"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">AI Prompt Categories for Memphis Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card key={index} className={`${getColorClasses(category.color)} hover:scale-105 transition-transform`}>
              <CardContent className="pt-6">
                <IconComponent className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm opacity-80 mb-3">{category.count}</p>
                <p className="text-slate-300 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default AIPromptCategories;
