
import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Shield, Swords, Check, ArrowRight } from "lucide-react";

const PredictiveAnalyticsAgent = () => {
  const location = useLocation();

  const features = [
    { icon: TrendingUp, title: "Future-Focused Insights", description: "Advanced machine learning models that analyze historical data to predict future market trends, customer behaviors, and business opportunities." },
    { icon: Shield, title: "Risk Mitigation", description: "Identify potential risks and challenges before they impact your business, enabling proactive strategies and damage prevention." },
    { icon: Swords, title: "Strategic Advantage", description: "Gain competitive edge with data-driven insights that help you make informed decisions faster than your competitors." },
  ];

  const applications = [
    { title: "Market Trend Forecasting", items: ["Consumer behavior prediction", "Seasonal demand fluctuations", "Market saturation analysis", "Competitive landscape shifts"] },
    { title: "Customer Analytics", items: ["Lifetime value prediction", "Churn risk assessment", "Purchase behavior forecasting", "Segment evolution tracking"] },
    { title: "Financial Forecasting", items: ["Revenue optimization", "Budget allocation insights", "Cash flow predictions", "Investment opportunity scoring"] },
    { title: "Operational Intelligence", items: ["Supply chain optimization", "Resource allocation planning", "Quality control predictions", "Maintenance scheduling"] },
  ];

  return (
    <PageLayout 
      title="Predictive Analytics Agent: AI-Powered Business Forecasting"
      subtitle="Master predictive AI with proven forecasting techniques and actionable insights"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-10-01"
      modifiedDate="2024-10-01"
    >
      <Helmet>
        <title>Predictive Analytics Agent - AI-Powered Forecasting | Digital Frontier</title>
        <meta name="keywords" content="predictive analytics, AI forecasting, market trends, business intelligence, data analytics" />
      </Helmet>

      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Brain className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Predictive Analytics Agent</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your business decision-making with AI-powered predictive analytics that forecast market trends, customer behavior, and identify untapped opportunities.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-lg group">
              Unlock Future Insights
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Predictive Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Card key={i} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{f.title}</h3>
                    <p className="text-slate-400">{f.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Dashboard Preview */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Predictive Analytics Dashboard</h2>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Revenue Forecast</h3>
                <div className="text-3xl font-bold text-slate-100">+32.5%</div>
                <p className="text-sm text-slate-400">Next Quarter</p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-lg font-semibold mb-2 text-green-400">Market Opportunity</h3>
                <div className="text-3xl font-bold text-slate-100">$2.4M</div>
                <p className="text-sm text-slate-400">Potential Value</p>
              </div>
              <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">Risk Level</h3>
                <div className="text-3xl font-bold text-slate-100">Low</div>
                <p className="text-sm text-slate-400">Current Period</p>
              </div>
              <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Customer Churn</h3>
                <div className="text-3xl font-bold text-slate-100">-15%</div>
                <p className="text-sm text-slate-400">Predicted Drop</p>
              </div>
            </div>
            <p className="text-center text-slate-400">Real-time predictive insights powered by advanced AI algorithms</p>
          </div>
        </section>

        {/* Applications */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Predictive Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">{app.title}</h3>
                  <ul className="space-y-3">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-start text-slate-300">
                        <Check className="h-4 w-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-12 border border-cyan-800/30 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">See the Future of Your Business</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform uncertainty into opportunity with AI-powered predictive analytics that give you the strategic advantage you need.
          </p>
          <Link to="/modern-contact-form">
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg group">
              Start Predicting Success
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </PageLayout>
  );
};

export default PredictiveAnalyticsAgent;
