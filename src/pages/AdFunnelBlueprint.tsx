import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";
import AdFunnelHeroSection from "@/components/ad-funnel/AdFunnelHeroSection";
import AdFunnelPerformanceChart from "@/components/ad-funnel/AdFunnelPerformanceChart";
import AdFunnelConversionChart from "@/components/ad-funnel/AdFunnelConversionChart";
import AdFunnelFrameworkTabs from "@/components/ad-funnel/AdFunnelFrameworkTabs";
import AdFunnelIntegrationCards from "@/components/ad-funnel/AdFunnelIntegrationCards";
import AdFunnelCaseStudies from "@/components/ad-funnel/AdFunnelCaseStudies";
import AdFunnelCallToAction from "@/components/ad-funnel/AdFunnelCallToAction";

const AdFunnelBlueprint = () => {
  const location = useLocation();

  // FAQ data
  const adFunnelFaqs: FAQItem[] = [
    {
      question: "What's the biggest advantage of an AI-powered ad funnel?",
      answer: "The biggest advantage is personalization at scale. AI can analyze thousands of data points to deliver highly relevant experiences to each user without manual intervention, resulting in higher conversion rates and more efficient ad spend."
    },
    {
      question: "How long does it take to implement an AI-powered ad funnel?",
      answer: "Implementation timelines vary based on complexity, but most businesses can expect a phased rollout over 2-3 months. Start with one phase of your funnel (often awareness or consideration) and expand as you collect data and refine your approach."
    },
    {
      question: "Is this approach only for large companies with big budgets?",
      answer: "Not at all. While enterprise-level AI solutions exist, there are numerous affordable tools that small businesses can utilize. Many ad platforms now include AI capabilities in their standard offerings, making this approach accessible regardless of budget size."
    },
    {
      question: "How does AI-powered retargeting differ from traditional retargeting?",
      answer: "Traditional retargeting simply shows ads to previous visitors based on pages they viewed. AI-powered retargeting predicts purchase intent, analyzes browse patterns, identifies optimal timing, personalizes messaging, and adjusts bid strategies for each user, resulting in significantly higher efficiency."
    },
    {
      question: "What metrics should I track to measure success?",
      answer: "Beyond standard metrics like CTR and conversion rate, focus on customer acquisition cost (CAC), customer lifetime value (CLV), CLV:CAC ratio, multi-touch attribution, time to conversion, and AI-specific metrics like prediction accuracy and personalization effectiveness."
    }
  ];
  
  return (
    <div className="relative max-h-fill">
      {/* Background image with overlay */}
      <div 
        style={{ 
          backgroundImage: `url('/lovable-uploads/5aa13ef4-6453-462e-b5bf-bd88c1b20988.png')`,
          opacity: 0.3,
          zIndex: -2
        }}
      />
      <div 
        className="fixed inset-0 bg-slate-950"
        style={{ 
          opacity: 0.4,
          zIndex: -1
        }}
      />
      
      <PageLayout 
        title="AI-Powered Ad Funnel Blueprint: Complete Customer Journey Strategy & Conversion Optimization Guide | Expert Marketing Tactics"
        subtitle="Master AI-powered ad funnels with proven customer journey strategies, expert conversion optimization techniques, and actionable marketing blueprints"
        currentPath={location.pathname}
      >
        <Helmet>
          <link rel="canonical" href="https://digitalfrontier.app/ad-funnel-blueprint" />
        </Helmet>
        
        <div className="space-y-12 relative z-10">
          <AdFunnelHeroSection />
          <AdFunnelPerformanceChart />
          <AdFunnelConversionChart />
          <AdFunnelFrameworkTabs />
          <AdFunnelIntegrationCards />
          <AdFunnelCaseStudies />
          
          {/* FAQ Section with Structured Data */}
          <FAQSection 
            title="Frequently Asked Questions About AI-Powered Ad Funnels" 
            faqs={adFunnelFaqs} 
            className="mb-16"
          />

          <AdFunnelCallToAction />

          {/* Conclusion section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Conclusion for Digital Frontier Followers</h2>
            
            <p className="text-slate-300 mb-6">
              Embracing AI isn't just about adopting new tools; it's about building a more intelligent, adaptive, 
              and customer-centric marketing engine. This AI-Powered Ad Funnel Blueprint provides a framework to navigate 
              the digital frontier effectively. Start by identifying one or two AI applications to implement in your weakest 
              funnel stage and build from there. The future of advertising is intelligent – let's build it together!
            </p>
            
            <p className="text-blue-400 text-sm mt-8">
              #DigitalFrontier #AIAdFunnel #MarketingAI #DigitalMarketing #AdvertisingTechnology #FutureOfAds
            </p>
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default AdFunnelBlueprint;