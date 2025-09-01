import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";

const AIImplementationConsulting = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="AI Implementation Consulting: Expert Business Integration Strategies & Proven Deployment Methods | Transform Your Operations"
      subtitle="Expert guidance on integrating AI solutions into your business with proven strategies, practical tips, and actionable implementation roadmaps"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-10-01"
      modifiedDate="2024-10-01"
    >
      <Helmet>
        <title>AI Implementation Consulting - Expert AI Integration | Digital Frontier</title>
        <meta name="keywords" content="AI implementation, AI consulting, business AI integration, AI strategy, artificial intelligence consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full">
              <i className="fa-solid fa-comments text-6xl text-cyan-400"></i>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">AI Implementation Consulting</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transform your business with expert AI integration guidance. We help you implement AI solutions that drive real results, maximize efficiency, and give you a competitive edge.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
          >
            Start Your AI Journey
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our AI Implementation Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-route"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customized AI Roadmap</h3>
              <p className="text-gray-600">
                Comprehensive strategy development tailored to your business goals, industry requirements, and organizational readiness for AI adoption.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-cogs"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technical Expertise</h3>
              <p className="text-gray-600">
                Deep technical knowledge across AI technologies including machine learning, natural language processing, computer vision, and automation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 text-4xl mb-4">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Change Management Support</h3>
              <p className="text-gray-600">
                Comprehensive support for organizational transformation, team training, and cultural adaptation to maximize AI adoption success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">AI Implementation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-search"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Discovery & Assessment</h3>
              <p className="text-gray-600">Analyze your current processes, identify AI opportunities, and assess organizational readiness.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-drafting-compass"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Strategy Development</h3>
              <p className="text-gray-600">Create a comprehensive AI roadmap with clear milestones, timelines, and success metrics.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-hammer"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Implementation</h3>
              <p className="text-gray-600">Deploy AI solutions with hands-on support, testing, and iterative improvements.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Optimization</h3>
              <p className="text-gray-600">Monitor performance, optimize results, and scale successful AI implementations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">AI Solutions We Implement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Intelligent Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and complex workflows with AI-powered solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-comments"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Conversational AI</h3>
              <p className="text-gray-600">Implement chatbots and virtual assistants for customer service and support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Predictive Analytics</h3>
              <p className="text-gray-600">Leverage machine learning for forecasting and data-driven decision making.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Computer Vision</h3>
              <p className="text-gray-600">Image recognition and visual processing for quality control and analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-language"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Natural Language Processing</h3>
              <p className="text-gray-600">Text analysis, sentiment analysis, and content generation capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Recommendation Systems</h3>
              <p className="text-gray-600">Personalized recommendations for e-commerce and content platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Our AI Consulting</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Proven Track Record</h3>
                    <p className="text-gray-600">Successfully implemented AI solutions across various industries with measurable ROI.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Team</h3>
                    <p className="text-gray-600">Team of AI specialists, data scientists, and implementation experts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">End-to-End Support</h3>
                    <p className="text-gray-600">From strategy to implementation and ongoing optimization.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="mb-6">Get a custom AI implementation roadmap tailored to your specific needs and goals.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-check mr-3"></i>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check mr-3"></i>
                  <span>Custom AI opportunity assessment</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check mr-3"></i>
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Business with AI</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Start your AI transformation journey today with expert guidance and proven strategies.
          </p>
          <Link 
            to="/modern-contact-form"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
          >
            Schedule Your AI Consultation
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIImplementationConsulting;