
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import UXPromptHeroSection from "@/components/ux-prompts/UXPromptHeroSection";
import UXPromptLibrary from "@/components/ux-prompts/UXPromptLibrary";
import UXPromptCallToAction from "@/components/ux-prompts/UXPromptCallToAction";

const UserExperiencePrompts = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="User Experience AI Prompts for SEO | 300 UX Optimization Templates"
      subtitle="300 ChatGPT Prompts to Improve User Experience & Boost SEO Performance"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <UXPromptHeroSection />
      <UXPromptLibrary />
      <UXPromptCallToAction />
    </PageLayout>
  );
};

export default UserExperiencePrompts;
