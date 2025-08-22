
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import IAPromptHeroSection from "@/components/ia-prompts/IAPromptHeroSection";
import IAPromptLibrary from "@/components/ia-prompts/IAPromptLibrary";
import IAPromptCallToAction from "@/components/ia-prompts/IAPromptCallToAction";

const InformationArchitecturePrompts = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Information Architecture AI Prompts for SEO | Website Structure Templates"
      subtitle="50 ChatGPT Prompts for Optimizing Website Information Architecture & User Experience"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <IAPromptHeroSection />
      <IAPromptLibrary />
      <IAPromptCallToAction />
    </PageLayout>
  );
};

export default InformationArchitecturePrompts;
