
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AEOHeroSection from "@/components/aeo/AEOHeroSection";
import AEOKeyTakeaways from "@/components/aeo/AEOKeyTakeaways";
import AEOFrameworkSection from "@/components/aeo/AEOFrameworkSection";
import AEOPerformanceChart from "@/components/aeo/AEOPerformanceChart";
import AEOComparisonChart from "@/components/aeo/AEOComparisonChart";
import AEOChartTabs from "@/components/aeo/AEOChartTabs";
import AEOApproachCards from "@/components/aeo/AEOApproachCards";
import AEOContrarianSection from "@/components/aeo/AEOContrarianSection";
import AEOMemphisCaseStudy from "@/components/aeo/AEOMemphisCaseStudy";
import AEOBenefitsSection from "@/components/aeo/AEOBenefitsSection";
import AEOComparisonTable from "@/components/aeo/AEOComparisonTable";
import AEOCaseStudies from "@/components/aeo/AEOCaseStudies";
import AEOCallToAction from "@/components/aeo/AEOCallToAction";

const AnswerEngineOptimization = () => {
  const location = useLocation();

  const aeoFaqs: FAQItem[] = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "Answer Engine Optimization (AEO) is a digital marketing strategy that optimizes content to provide direct answers to user queries in AI-powered search results. Unlike traditional SEO, AEO targets ChatGPT, Google's AI overviews, Perplexity AI, and voice search platforms to position your content as the immediate solution users are seeking."
    },
    {
      question: "How does AEO differ from traditional SEO services?",
      answer: "While SEO focuses on ranking pages for broad keywords to drive website traffic, Answer Engine Optimization targets specific questions for zero-click answers through featured snippets, voice search results, and AI citations. AEO uses conversational tones, schema markup, and structured data to optimize for ChatGPT and other AI search engines."
    },
    {
      question: "Why is Answer Engine Optimization important for Memphis businesses?",
      answer: "Memphis businesses using AEO see significant improvements in local visibility through voice search optimization and AI overviews. Our Memphis clients experience an average 180% increase in featured snippet appearances and 43% boost in qualified leads through strategic Answer Engine Optimization implementation."
    },
    {
      question: "What is ChatGPT optimization and how does it work?",
      answer: "ChatGPT optimization involves structuring content so AI models like ChatGPT, Perplexity, and Google's SGE cite your business as a trusted source. This includes implementing FAQ schema markup, creating direct Q&A content, and using natural language patterns that AI systems prefer for generating responses."
    },
    {
      question: "How long does Answer Engine Optimization take to show results?",
      answer: "AEO typically shows faster results than traditional SEO. Most businesses see improvements in AI citations and voice search visibility within 60-90 days. Featured snippet appearances often increase within 30-45 days of implementing proper schema markup and Answer Engine Optimization strategies."
    },
    {
      question: "What's included in your Answer Engine Optimization services?",
      answer: "Our AEO services include ChatGPT SEO optimization, voice search targeting, schema markup implementation, AI-friendly content restructuring, Perplexity AI optimization, and ongoing performance tracking. We focus on getting your business cited in AI responses and featured in answer boxes across all major search platforms."
    }
  ];

  return (
    <PageLayout
      title="Answer Engine Optimization: Expert AEO Services & Proven ChatGPT SEO Strategies | Get Featured in AI Results"
      subtitle="Master Answer Engine Optimization with expert AEO strategies, proven ChatGPT SEO techniques, and actionable tips to dominate AI search results"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-11-15"
      modifiedDate="2024-12-18"
    >
      <div className="w-full mb-8">
        <img 
          src="/lovable-uploads/a8bde719-1330-4c5c-b074-820b649fea92.png"
          alt="Digital Frontier Company - Voice Search and AI Technology"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <AEOHeroSection />
      <AEOKeyTakeaways />
      <AEOFrameworkSection />
      <AEOPerformanceChart />
      <AEOComparisonChart />
      <AEOChartTabs />
      <AEOApproachCards />
      <AEOContrarianSection />
      <AEOMemphisCaseStudy />
      <FAQSection 
        title="Answer Engine Optimization FAQ" 
        faqs={aeoFaqs} 
        className="mb-16"
      />
      <AEOBenefitsSection />
      <AEOComparisonTable />
      <AEOCaseStudies />
      <AEOCallToAction />
    </PageLayout>
  );
};

export default AnswerEngineOptimization;
