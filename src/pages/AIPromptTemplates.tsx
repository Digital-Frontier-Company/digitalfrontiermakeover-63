
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import AIPromptHeroSection from "@/components/ai-prompts/AIPromptHeroSection";
import AIPromptCategories from "@/components/ai-prompts/AIPromptCategories";
import AIPromptLibrary from "@/components/ai-prompts/AIPromptLibrary";
import AIPromptAdvancedSection from "@/components/ai-prompts/AIPromptAdvancedSection";
import AIPromptUsageGuide from "@/components/ai-prompts/AIPromptUsageGuide";
import AIPromptCallToAction from "@/components/ai-prompts/AIPromptCallToAction";

const AIPromptTemplates = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Master AI Prompt Engineering: 50+ ChatGPT Templates for Digital Marketing Success | Expert Strategies & Advanced Techniques"
      subtitle="Transform your marketing with proven AI prompt templates, advanced chains, and recursive techniques. Get actionable strategies that drive real results for your business."
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <AIPromptHeroSection />
      <AIPromptCategories />
      <AIPromptLibrary />
      <AIPromptAdvancedSection />
      <AIPromptUsageGuide />
      <AIPromptCallToAction />
    </PageLayout>
  );
};

export default AIPromptTemplates;
