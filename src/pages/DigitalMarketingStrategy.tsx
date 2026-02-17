import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, Target, Users, Rocket, Star, ChartBar, Cpu, 
  TrendingUp, ArrowRight, Coins, Shield, ShoppingCart, 
  Heart, Building, GraduationCap, Home, Zap
} from "lucide-react";

const DigitalMarketingStrategy = () => {
  const location = useLocation();

  const services = [
    {
      title: "Growth Marketing",
      icon: Rocket,
      items: ["Rapid customer acquisition strategies", "Viral marketing and referral programs", "Product-market fit optimization", "Conversion rate optimization"]
    },
    {
      title: "Brand Strategy",
      icon: Star,
      items: ["Brand positioning and messaging", "Content strategy and storytelling", "Visual identity and design", "Brand reputation management"]
    },
    {
      title: "Performance Marketing",
      icon: BarChart3,
      items: ["Paid advertising optimization", "Search engine marketing (SEM)", "Social media advertising", "Programmatic advertising"]
    },
    {
      title: "Marketing Technology",
      icon: Cpu,
      items: ["MarTech stack optimization", "Customer data platforms (CDP)", "Marketing automation setup", "Analytics and attribution modeling"]
    }
  ];

  const features = [
    { icon: BarChart3, title: "Data-Driven Strategies", description: "Advanced analytics and AI-powered insights that transform raw data into actionable marketing strategies with proven results." },
    { icon: Target, title: "Competitive Advantage", description: "Strategic positioning and differentiation tactics that set you apart from competitors and establish market leadership." },
    { icon: TrendingUp, title: "Measurable ROI", description: "Performance-focused campaigns with clear KPIs, tracking mechanisms, and optimization protocols for maximum return." }
  ];

  const steps = [
    { icon: Target, title: "Market Analysis", description: "Deep market research, competitor analysis, and opportunity identification." },
    { icon: Users, title: "Audience Targeting", description: "Precision audience segmentation and personalized messaging strategies." },
    { icon: Zap, title: "Multi-Channel Campaigns", description: "Integrated campaigns across all digital channels for maximum reach." },
    { icon: Cpu, title: "Automation & AI", description: "Advanced marketing automation and AI-powered optimization." }
  ];

  const stats = [
    { value: "300%", label: "Average ROI Increase", color: "text-cyan-400" },
    { value: "85%", label: "Lead Generation Boost", color: "text-green-400" },
    { value: "60%", label: "Cost Reduction", color: "text-yellow-400" },
    { value: "45%", label: "Market Share Growth", color: "text-purple-400" }
  ];

  const industries = [
    { icon: Coins, name: "Cryptocurrency" },
    { icon: Shield, name: "Cybersecurity" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Heart, name: "Healthcare" },
    { icon: Building, name: "Finance" },
    { icon: Cpu, name: "Technology" },
    { icon: Home, name: "Real Estate" },
    { icon: GraduationCap, name: "Education" }
  ];

  return (
    <PageLayout 
      title="Digital Marketing Strategy | AI-Enhanced Growth"
      subtitle="Comprehensive AI-enhanced marketing strategies for explosive business growth"
      currentPath={location.pathname}
      pageType="service"
      publishedDate="2024-10-01"
      modifiedDate="2025-02-01"
    >
      <Helmet>
        <title>Digital Marketing Strategy - AI-Enhanced Growth | Digital Frontier</title>
        <meta name="keywords" content="digital marketing strategy, AI marketing, marketing consulting, growth strategy, digital transformation" />
      </Helmet>

      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <TrendingUp className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Digital Marketing Strategy</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your business with comprehensive AI-enhanced marketing strategies designed for explosive growth, market domination, and sustainable competitive advantage.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-lg group">
              Dominate Your Market
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Strategic Advantages */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Strategic Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Framework Steps */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Complete Strategy Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Strategic Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card key={i} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-100">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Proven Results */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Proven Results</h2>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Industry Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Card key={i} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-200">{industry.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-12 border border-cyan-800/30 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Ready to Dominate Your Market?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your business with a comprehensive digital marketing strategy designed for explosive growth.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg group">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </PageLayout>
  );
};

export default DigitalMarketingStrategy;
