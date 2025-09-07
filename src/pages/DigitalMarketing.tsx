import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEOAuditHero from "@/components/seo-audit/SEOAuditHero";
import InteractiveSEOChecklist from "@/components/seo-audit/InteractiveSEOChecklist";
import PerformanceMonitor from "@/components/seo-audit/PerformanceMonitor";
import ContentQualityAssessment from "@/components/seo-audit/ContentQualityAssessment";
import EEATAnalysis from "@/components/seo-audit/EEATAnalysis";
import CompetitorAnalysis from "@/components/seo-audit/CompetitorAnalysis";
import SEOScoreCard from "@/components/seo-audit/SEOScoreCard";

const DigitalMarketing = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Digital Marketing Services | Complete Website Marketing Analysis Tool"
      subtitle="Comprehensive Digital Marketing Strategy & Performance Optimization"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <SEOAuditHero />
      <SEOScoreCard />
      <InteractiveSEOChecklist />
      <PerformanceMonitor />
      <ContentQualityAssessment />
      <EEATAnalysis />
      <CompetitorAnalysis />
    </PageLayout>
  );
};

export default DigitalMarketing;