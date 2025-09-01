import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";

const DigitalMarketingStrategy = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Digital Marketing Strategy: Complete AI-Enhanced Business Growth Guide & Proven Tactics | Dominate Your Market"
      subtitle="Master comprehensive AI-enhanced marketing strategies with expert tactics, actionable frameworks, and proven techniques for explosive business growth"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-10-01"
      modifiedDate="2024-10-01"
    >
      <Helmet>
        <title>Digital Marketing Strategy - AI-Enhanced Growth | Digital Frontier</title>
        <meta name="keywords" content="digital marketing strategy, AI marketing, marketing consulting, growth strategy, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full">
              <i className="fa-solid fa-chart-line text-6xl text-cyan-400"></i>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">Digital Marketing Strategy</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transform your business with comprehensive AI-enhanced marketing strategies designed for explosive growth, market domination, and sustainable competitive advantage.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
          >
            Dominate Your Market
          </Link>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Strategic Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data-Driven Strategies</h3>
              <p className="text-gray-600">
                Advanced analytics and AI-powered insights that transform raw data into actionable marketing strategies with proven results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Competitive Advantage</h3>
              <p className="text-gray-600">
                Strategic positioning and differentiation tactics that set you apart from competitors and establish market leadership.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-chart-trend-up"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Measurable ROI</h3>
              <p className="text-gray-600">
                Performance-focused campaigns with clear KPIs, tracking mechanisms, and optimization protocols for maximum return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Complete Strategy Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Analysis</h3>
              <p className="text-gray-600">Deep market research, competitor analysis, and opportunity identification.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Audience Targeting</h3>
              <p className="text-gray-600">Precision audience segmentation and personalized messaging strategies.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-megaphone"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Multi-Channel Campaigns</h3>
              <p className="text-gray-600">Integrated campaigns across all digital channels for maximum reach and impact.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-cogs"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Automation & AI</h3>
              <p className="text-gray-600">Advanced marketing automation and AI-powered optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Strategic Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Growth Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-rocket text-cyan-500 mt-1 mr-3"></i>
                  Rapid customer acquisition strategies
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-rocket text-cyan-500 mt-1 mr-3"></i>
                  Viral marketing and referral programs
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-rocket text-cyan-500 mt-1 mr-3"></i>
                  Product-market fit optimization
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-rocket text-cyan-500 mt-1 mr-3"></i>
                  Conversion rate optimization
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Brand Strategy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-star text-cyan-500 mt-1 mr-3"></i>
                  Brand positioning and messaging
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-star text-cyan-500 mt-1 mr-3"></i>
                  Content strategy and storytelling
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-star text-cyan-500 mt-1 mr-3"></i>
                  Visual identity and design
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-star text-cyan-500 mt-1 mr-3"></i>
                  Brand reputation management
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Performance Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-chart-bar text-cyan-500 mt-1 mr-3"></i>
                  Paid advertising optimization
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-chart-bar text-cyan-500 mt-1 mr-3"></i>
                  Search engine marketing (SEM)
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-chart-bar text-cyan-500 mt-1 mr-3"></i>
                  Social media advertising
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-chart-bar text-cyan-500 mt-1 mr-3"></i>
                  Programmatic advertising
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Marketing Technology</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-microchip text-cyan-500 mt-1 mr-3"></i>
                  MarTech stack optimization
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-microchip text-cyan-500 mt-1 mr-3"></i>
                  Customer data platforms (CDP)
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-microchip text-cyan-500 mt-1 mr-3"></i>
                  Marketing automation setup
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-microchip text-cyan-500 mt-1 mr-3"></i>
                  Analytics and attribution modeling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Proven Results</h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <p className="text-gray-300">Average ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <p className="text-gray-300">Lead Generation Boost</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
                <p className="text-gray-300">Market Share Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Industry Expertise</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-coins text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Cryptocurrency</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-shield-halved text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Cybersecurity</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-shopping-cart text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">E-commerce</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-heartbeat text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Healthcare</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-university text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Finance</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-microchip text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Technology</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-home text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Real Estate</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <i className="fa-solid fa-graduation-cap text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-semibold text-gray-800">Education</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with a comprehensive digital marketing strategy designed for explosive growth and market leadership.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default DigitalMarketingStrategy;