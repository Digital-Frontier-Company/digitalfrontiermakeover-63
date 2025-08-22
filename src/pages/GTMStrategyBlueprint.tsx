import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/layout/PageLayout';
import { InteractiveTimeline } from '@/components/gtm/InteractiveTimeline';
import { KPISimulator } from '@/components/gtm/KPISimulator';
import { SegmentFlipCards } from '@/components/gtm/SegmentFlipCards';
import { ResearchToolGenerator } from '@/components/gtm/ResearchToolGenerator';
import { ROIDashboard } from '@/components/gtm/ROIDashboard';
import { LaunchCalendar } from '@/components/gtm/LaunchCalendar';
import { AssessmentQuiz } from '@/components/gtm/AssessmentQuiz';
import { PricingCalculator } from '@/components/gtm/PricingCalculator';
import { OnboardingCarousel } from '@/components/gtm/OnboardingCarousel';
import { GTMHeroSection } from '@/components/gtm/GTMHeroSection';
import FAQSection from '@/components/FAQSection';

interface FAQItem {
  question: string;
  answer: string;
}

const gtmFaqs: FAQItem[] = [
  {
    question: "What makes your Go-to-Market strategy different from traditional approaches?",
    answer: "Our GTM strategy integrates AI-powered insights, predictive analytics, and data-driven decision making at every phase. Unlike traditional approaches, we use machine learning to identify optimal customer segments, predict market responses, and continuously optimize your strategy based on real-time performance data."
  },
  {
    question: "How quickly can we see results from implementing your GTM blueprint?",
    answer: "Most clients see initial traction within 30-60 days, with significant results by 90 days. Our phased approach ensures quick wins early on while building toward sustainable long-term growth. The timeline varies based on market complexity, product maturity, and implementation speed."
  },
  {
    question: "What industries have you successfully launched GTM strategies for?",
    answer: "We've successfully implemented GTM strategies across technology, healthcare, fintech, e-commerce, SaaS, manufacturing, and professional services. Our framework adapts to industry-specific nuances while maintaining core strategic principles that drive results."
  },
  {
    question: "How do you measure and track GTM success?",
    answer: "We track comprehensive KPIs including customer acquisition cost (CAC), lifetime value (LTV), market penetration rate, time-to-revenue, brand awareness metrics, and conversion rates across the entire funnel. Our dashboard provides real-time visibility into all key metrics."
  },
  {
    question: "Can your GTM blueprint scale with our company growth?",
    answer: "Absolutely. Our blueprint is designed to scale from startup to enterprise levels. We build flexible frameworks that adapt as your company grows, with scalable processes, systems, and team structures that evolve with your needs."
  },
  {
    question: "What level of involvement is required from our internal team?",
    answer: "We recommend 20-30% dedicated time from key stakeholders during strategy development, with ongoing collaboration during implementation. We provide comprehensive training and knowledge transfer to ensure your team can execute and optimize the strategy independently."
  }
];

export default function GTMStrategyBlueprint() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Go-to-Market Strategy Blueprint | AI-Powered GTM Framework | The Digital Frontier</title>
        <meta 
          name="description" 
          content="Transform your product launch with our comprehensive Go-to-Market Strategy Blueprint. Interactive tools, proven frameworks, and AI-powered insights for measurable results." 
        />
        <meta 
          name="keywords" 
          content="go-to-market strategy, GTM blueprint, product launch, market entry, AI marketing strategy, customer acquisition, brand positioning" 
        />
        <link rel="canonical" href="https://thedigitalfrontier.ai/gtm-strategy-blueprint" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Go-to-Market Strategy Blueprint | The Digital Frontier" />
        <meta property="og:description" content="Interactive GTM framework with AI-powered tools for successful product launches and market entry strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedigitalfrontier.ai/gtm-strategy-blueprint" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Go-to-Market Strategy Blueprint | The Digital Frontier" />
        <meta name="twitter:description" content="Transform your product launch with our comprehensive Go-to-Market Strategy Blueprint and interactive planning tools." />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Go-to-Market Strategy Blueprint",
            "description": "Comprehensive GTM strategy framework with interactive tools and AI-powered insights",
            "provider": {
              "@type": "Organization",
              "name": "The Digital Frontier",
              "url": "https://thedigitalfrontier.ai"
            },
            "serviceType": "Marketing Strategy Consulting",
            "offers": {
              "@type": "Offer",
              "description": "AI-powered go-to-market strategy development and implementation"
            }
          })}
        </script>
      </Helmet>

      <PageLayout
        title="Go-to-Market Strategy Blueprint"
        subtitle="Transform Your Product Launch with AI-Powered Strategic Framework"
        currentPath={location.pathname}
        pageType="page"
      >
        <div className="space-y-16">
          {/* Hero Section with Animated Elements */}
          <GTMHeroSection />

          {/* Interactive 5-Phase Timeline */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Interactive GTM Roadmap
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Navigate through our proven 5-phase framework. Click each milestone to explore detailed strategies and best practices.
                </p>
              </div>
              <InteractiveTimeline />
            </div>
          </section>

          {/* KPI Progress Simulator */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  KPI Progress Simulator
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Adjust variables to see projected outcomes for your GTM strategy. Model different scenarios and investment levels.
                </p>
              </div>
              <KPISimulator />
            </div>
          </section>

          {/* Target Segment Flip Cards */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Target Market Segments
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore industry-specific strategies and insights. Hover over each card to reveal detailed market intelligence.
                </p>
              </div>
              <SegmentFlipCards />
            </div>
          </section>

          {/* Research Tool Generator */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Market Research Generator
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Generate custom research prompts and strategies tailored to your industry and market conditions.
                </p>
              </div>
              <ResearchToolGenerator />
            </div>
          </section>

          {/* ROI Dashboard */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ROI Impact Dashboard
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Visualize the potential return on investment from AI-enhanced marketing strategies compared to traditional approaches.
                </p>
              </div>
              <ROIDashboard />
            </div>
          </section>

          {/* Launch Calendar */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Launch Planning Calendar
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Plan and visualize your product launch timeline with drag-and-drop functionality and milestone tracking.
                </p>
              </div>
              <LaunchCalendar />
            </div>
          </section>

          {/* Assessment Quiz */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  GTM Readiness Assessment
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Evaluate your current go-to-market readiness and receive personalized recommendations for improvement.
                </p>
              </div>
              <AssessmentQuiz />
            </div>
          </section>

          {/* Pricing Calculator */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Investment Calculator
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Calculate the investment required for your GTM strategy based on company size, market complexity, and desired outcomes.
                </p>
              </div>
              <PricingCalculator />
            </div>
          </section>

          {/* Onboarding Carousel */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Implementation Process
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Understand our step-by-step onboarding process and what to expect during your GTM strategy implementation.
                </p>
              </div>
              <OnboardingCarousel />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <FAQSection 
                title="Frequently Asked Questions"
                faqs={gtmFaqs}
              />
            </div>
          </section>
        </div>
      </PageLayout>
    </>
  );
}