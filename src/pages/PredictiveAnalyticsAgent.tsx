import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";

const PredictiveAnalyticsAgent = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Predictive Analytics Agent: AI-Powered Business Forecasting & Market Trend Analysis | Expert Insights & Strategies"
      subtitle="Master predictive AI with proven forecasting techniques, expert market analysis strategies, and actionable insights to outperform competitors"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-10-01"
      modifiedDate="2024-10-01"
    >
      <Helmet>
        <title>Predictive Analytics Agent - AI-Powered Forecasting | Digital Frontier</title>
        <meta name="keywords" content="predictive analytics, AI forecasting, market trends, business intelligence, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full">
              <i className="fa-solid fa-brain text-6xl text-cyan-400"></i>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">Predictive Analytics Agent</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transform your business decision-making with AI-powered predictive analytics that forecast market trends, customer behavior, and identify untapped opportunities.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
          >
            Unlock Future Insights
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Predictive Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-chart-trend-up"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Future-Focused Insights</h3>
              <p className="text-gray-600">
                Advanced machine learning models that analyze historical data to predict future market trends, customer behaviors, and business opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Risk Mitigation</h3>
              <p className="text-gray-600">
                Identify potential risks and challenges before they impact your business, enabling proactive strategies and damage prevention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-chess-knight"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strategic Advantage</h3>
              <p className="text-gray-600">
                Gain competitive edge with data-driven insights that help you make informed decisions faster than your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Predictive Analytics Dashboard</h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-cyan-500/20 p-6 rounded-lg border border-cyan-500/30">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Revenue Forecast</h3>
                <div className="text-3xl font-bold text-white">+32.5%</div>
                <p className="text-sm text-gray-300">Next Quarter</p>
              </div>
              <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-semibold mb-2 text-green-400">Market Opportunity</h3>
                <div className="text-3xl font-bold text-white">$2.4M</div>
                <p className="text-sm text-gray-300">Potential Value</p>
              </div>
              <div className="bg-yellow-500/20 p-6 rounded-lg border border-yellow-500/30">
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">Risk Level</h3>
                <div className="text-3xl font-bold text-white">Low</div>
                <p className="text-sm text-gray-300">Current Period</p>
              </div>
              <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Customer Churn</h3>
                <div className="text-3xl font-bold text-white">-15%</div>
                <p className="text-sm text-gray-300">Predicted Drop</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-300 mb-4">Real-time predictive insights powered by advanced AI algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Predictive Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Market Trend Forecasting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Consumer behavior prediction
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Seasonal demand fluctuations
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Market saturation analysis
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Competitive landscape shifts
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customer Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Lifetime value prediction
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Churn risk assessment
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Purchase behavior forecasting
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Segment evolution tracking
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Financial Forecasting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Revenue optimization
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Budget allocation insights
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Cash flow predictions
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Investment opportunity scoring
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Operational Intelligence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Supply chain optimization
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Resource allocation planning
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Quality control predictions
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-cyan-500 mt-1 mr-3"></i>
                  Maintenance scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">See the Future of Your Business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform uncertainty into opportunity with AI-powered predictive analytics that give you the strategic advantage you need.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
          >
            Start Predicting Success
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default PredictiveAnalyticsAgent;