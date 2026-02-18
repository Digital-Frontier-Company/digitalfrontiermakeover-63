
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PenTool, Search, TrendingUp, Brain, MessageSquare, Mic, Rocket, 
  Check, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "fa-solid fa-pen-fancy": PenTool,
  "fa-solid fa-magnifying-glass": Search,
  "fa-solid fa-chart-line": TrendingUp,
  "fa-solid fa-brain": Brain,
  "fa-solid fa-comments": MessageSquare,
  "fa-solid fa-microphone": Mic,
  "fa-solid fa-rocket": Rocket,
};

const DigitalFrontierServices = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      title: "Content Creation Agent",
      description: "Automated content generation for blogs, social media, and marketing materials with your brand voice and style.",
      features: ["Brand voice consistency", "SEO optimization", "Multi-format outputs"],
      icon: "fa-solid fa-pen-fancy",
      category: "ai",
      badge: "AI AGENT",
      link: "/resources/content-creation-agent"
    },
    {
      id: 3,
      title: "Answer Engine Optimization",
      description: "Optimize for AI-powered search and answer engines to dominate where AI determines relevancy.",
      features: ["Future-proof SEO", "Voice search optimization", "AI visibility enhancement"],
      icon: "fa-solid fa-magnifying-glass",
      category: "marketing",
      badge: "MARKETING",
      link: "/answer-engine-optimization"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      description: "Comprehensive AI-enhanced marketing strategies for businesses seeking growth and market domination.",
      features: ["Data-driven strategies", "Competitive advantage", "Measurable ROI"],
      icon: "fa-solid fa-chart-line",
      category: "marketing",
      badge: "MARKETING",
      link: "/services/digital-marketing-strategy"
    },
    {
      id: 5,
      title: "Predictive Analytics Agent",
      description: "Harness the power of predictive AI to forecast market trends, customer behavior, and business opportunities.",
      features: ["Future-focused insights", "Risk mitigation", "Strategic advantage"],
      icon: "fa-solid fa-brain",
      category: "ai",
      badge: "AI AGENT",
      link: "/services/predictive-analytics-agent"
    },
    {
      id: 6,
      title: "AI Implementation Consulting",
      description: "Expert guidance on integrating AI solutions into your business operations for maximum efficiency and competitive edge.",
      features: ["Customized AI roadmap", "Technical expertise", "Change management support"],
      icon: "fa-solid fa-comments",
      category: "consulting",
      badge: "CONSULTING",
      link: "/services/ai-implementation-consulting"
    },
    {
      id: 7,
      title: "AI Voice Assistants",
      description: "Voice Assistant Capable of Making Calls. Transform customer experience with AI that talks like a human, learns continuously, and closes deals 24/7.",
      features: ["24/7 customer support", "Natural conversation flow", "Lead conversion optimization"],
      icon: "fa-solid fa-microphone",
      category: "ai",
      badge: "AI AGENT",
      link: "/ai-voice-assistants"
    },
    {
      id: 8,
      title: "Total AI Takeover",
      description: "Complete AI transformation package. Get found online with GEO optimization while running smarter inside with custom AI agents and automation.",
      features: ["GEO & AEO optimization", "Custom AI agents", "Marketing automation", "24/7 AI assistance"],
      icon: "fa-solid fa-rocket",
      category: "ai",
      badge: "PREMIUM",
      link: "/ai-plans"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const filterButtons = [
    { key: 'all', label: 'All Services' },
    { key: 'ai', label: 'AI Agents' },
    { key: 'marketing', label: 'Marketing' },
    { key: 'consulting', label: 'Consulting' },
  ];

  return (
    <PageLayout
      title="Digital Frontier Services | AI-Powered Solutions"
      subtitle="AI-Powered Solutions for Market Domination"
      currentPath="/digital-frontier-services"
      pageType="service"
    >
      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Digital Frontier Services</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-10">
            AI-Powered Solutions for Market Domination. From custom AI agents to strategic marketing, we engineer your path to digital supremacy.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((btn) => (
              <Button
                key={btn.key}
                variant={activeFilter === btn.key ? "default" : "outline"}
                onClick={() => setActiveFilter(btn.key)}
                className={activeFilter === btn.key 
                  ? "bg-cyan-500 hover:bg-cyan-400 text-slate-900" 
                  : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon] || Rocket;
              return (
                <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-cyan-400/20 mr-4">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-cyan-300">{service.title}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm mb-2 text-cyan-400 font-medium">KEY BENEFITS:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <Check className="h-4 w-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-300">
            Why Choose Digital Frontier?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-cyan-400">850+</div>
              <p className="text-slate-400">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-cyan-400">4.9/5</div>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-cyan-400">24/7</div>
              <p className="text-slate-400">Support & Assistance</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-12 border border-cyan-800/30 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get started with AI-powered solutions designed for your specific industry and goals.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-lg group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </PageLayout>
  );
};

export default DigitalFrontierServices;
