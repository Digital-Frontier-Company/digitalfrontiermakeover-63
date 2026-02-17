import React from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, Brain, MessageSquare, TrendingUp, BarChart3, 
  Target, Users, Zap, ArrowRight, CheckCircle, Globe, Mail
} from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const DigitalMarketing = () => {
  const location = useLocation();

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "AI-enhanced SEO strategies that boost your rankings and drive qualified organic traffic to your website.",
      link: "/search-engine-optimization",
      color: "text-cyan-400"
    },
    {
      icon: MessageSquare,
      title: "Answer Engine Optimization",
      description: "Get featured in AI search results, voice assistants, and featured snippets with our AEO strategies.",
      link: "/answer-engine-optimization",
      color: "text-green-400"
    },
    {
      icon: Brain,
      title: "Generative Engine Optimization",
      description: "Optimize your content to be cited by ChatGPT, Claude, Perplexity, and other AI platforms.",
      link: "/generative-engine-optimization",
      color: "text-purple-400"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing Strategy",
      description: "Comprehensive, data-driven marketing strategies tailored to your business goals and target audience.",
      link: "/services/digital-marketing-strategy",
      color: "text-blue-400"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Conversion-optimized websites built with modern technologies and designed for performance.",
      link: "/web-creative",
      color: "text-orange-400"
    },
    {
      icon: Mail,
      title: "Content Marketing",
      description: "Engaging content that builds authority, attracts your ideal audience, and drives measurable results.",
      link: "/ai-prompt-templates",
      color: "text-pink-400"
    }
  ];

  const stats = [
    { value: "200+", label: "Businesses Served" },
    { value: "180%", label: "Avg. Traffic Increase" },
    { value: "43%", label: "Lead Growth" },
    { value: "4.9★", label: "Client Rating" }
  ];

  const benefits = [
    "AI-powered keyword research and content optimization",
    "Multi-channel campaign management and tracking",
    "Transparent reporting with real-time dashboards",
    "Dedicated account manager for every client",
    "Monthly strategy reviews and optimization",
    "Proven frameworks tested across 200+ businesses"
  ];

  const faqs: FAQItem[] = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a full suite of digital marketing services including SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), paid advertising, content marketing, social media management, web design, and marketing automation. Our AI-enhanced approach ensures maximum ROI across all channels."
    },
    {
      question: "How do you measure digital marketing success?",
      answer: "We track key performance indicators (KPIs) including organic traffic growth, conversion rates, lead quality, cost per acquisition, return on ad spend, and AI citation frequency. Every client receives a custom dashboard with real-time performance data."
    },
    {
      question: "What makes your approach different from other agencies?",
      answer: "We combine traditional marketing expertise with cutting-edge AI tools. Our team has tested 100+ AI marketing tools and invested $50K+ in research to identify what actually works. We don't just follow trends — we use data to drive every decision."
    },
    {
      question: "How long does it take to see results?",
      answer: "Timelines vary by service: GEO results appear in 1-3 months, AEO in 2-4 months, and SEO in 3-6 months. Paid advertising can deliver immediate traffic. We set clear expectations and provide monthly progress reports."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely. We work with businesses of all sizes, from local Memphis startups to national brands. Our tiered pricing ensures every business can access professional digital marketing services that fit their budget."
    }
  ];

  return (
    <PageLayout
      title="Digital Marketing Services | AI-Powered Growth"
      subtitle="Complete digital marketing solutions powered by AI"
      currentPath={location.pathname}
      pageType="service"
      publishedDate="2024-12-18"
      modifiedDate="2025-02-01"
    >
      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Digital Marketing Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Complete digital marketing solutions to grow your business online. We combine AI-powered tools with proven strategies to deliver measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/modern-contact-form">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-lg group">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Services Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-4">Our Services</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Everything you need to dominate your market, all under one roof.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={i} to={service.link} className="group">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <Icon className={`w-8 h-8 ${service.color} mb-4`} />
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                      <span className="text-cyan-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-6">Why Choose Digital Frontier?</h2>
              <p className="text-slate-300 mb-6">
                We spent $50K+ testing 100+ AI marketing tools so you don't have to. Our proven frameworks deliver consistent results across industries.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-cyan-500/10 border-cyan-500/20">
                <CardContent className="p-6 text-center">
                  <Search className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-200">SEO</p>
                </CardContent>
              </Card>
              <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-200">AEO</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/10 border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-200">GEO</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-200">AI Tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection 
          title="Digital Marketing FAQ" 
          faqs={faqs} 
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-12 border border-cyan-800/30 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free digital marketing consultation and learn how our AI-powered strategies can accelerate your growth.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-lg group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </PageLayout>
  );
};

export default DigitalMarketing;
