import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './PageWrapper';
import FAQSection, { FAQItem } from './FAQSection';

/**
 * HTML-first version of the home page content for SEO and progressive enhancement
 * This component provides structured, semantic HTML that renders immediately for search engines
 * while maintaining the same visual design and content as the JavaScript-heavy version
 */

const HomePageHTML: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "What makes Digital Frontier different from other AI marketing agencies?",
      answer: "We've invested $50,000+ testing over 100 AI tools to find what actually works for small businesses. Unlike agencies that just talk about AI, we deliver proven solutions with measurable results."
    },
    {
      question: "How quickly can I see results from AI marketing implementation?",
      answer: "Most clients see initial improvements within 30-60 days, with significant results by 90 days. Our two-sided framework targets both visibility (customer acquisition) and efficiency (cost reduction) simultaneously."
    },
    {
      question: "What is Answer Engine Optimization (AEO) and why do I need it?",
      answer: "AEO optimizes your content for AI-powered search engines like ChatGPT, Claude, and Google AI. With 60% of searches now generating zero-click results, AEO ensures your business gets found in AI responses."
    },
    {
      question: "Do you work with small businesses or just large enterprises?",
      answer: "We specialize in small to medium businesses. Our pilot programs start at $2,500-$7,500, designed specifically for businesses ready to leverage AI without enterprise-level budgets."
    },
    {
      question: "What's included in the free 30-minute strategy session?",
      answer: "We'll audit your current digital presence, identify AI opportunities specific to your industry, and create a custom roadmap. No sales pitch—just actionable insights you can use immediately."
    }
  ];

  const seoData = {
    title: "AI Marketing Agency Memphis | Digital Frontier - Proven AI Solutions",
    description: "Memphis AI marketing agency that spent $50K+ testing 100+ AI tools. Get proven AI solutions for visibility & efficiency. Answer Engine Optimization, automation & more.",
    keywords: "AI marketing agency Memphis, Answer Engine Optimization, AI automation, digital marketing Memphis, AI solutions small business",
    pageType: "website" as const,
    imageUrl: "/lovable-uploads/0a290708-5a9c-4d58-8a79-88d6ed6a5e66.png"
  };

  return (
    <PageWrapper seo={seoData}>
      {/* Hero Section - HTML-first structure */}
      <section className="relative min-h-screen bg-slate-950 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          {/* Company Logo and Branding */}
          <header className="mb-12">
            <img 
              src="/lovable-uploads/0a290708-5a9c-4d58-8a79-88d6ed6a5e66.png" 
              alt="Digital Frontier Company - Leading Memphis AI Marketing Agency" 
              className="h-80 w-auto mx-auto mb-8"
              width="480"
              height="320"
            />
          </header>

          {/* Main Headline - Single H1 for SEO */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Feeling Lost in AI?
          </h1>

          {/* Value Proposition */}
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            We spent $50K+ testing 100+ AI tools so you don't have to
          </p>

          {/* Supporting Message */}
          <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto">
            Get only proven AI solutions that actually work for small businesses—not just hype.
          </p>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-cyan-400">$50,000+</div>
              <div className="text-sm text-slate-300">Invested in AI testing</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-green-400">15+ Hours</div>
              <div className="text-sm text-slate-300">Saved weekly</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-purple-400">25%</div>
              <div className="text-sm text-slate-300">Average revenue boost</div>
            </div>
          </div>

          {/* Primary Call-to-Action */}
          <div className="mb-16">
            <Link 
              to="/modern-contact-form" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-green-500 hover:shadow-xl transition-all duration-300"
            >
              Get Your AI Crew Chief →
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Free 30-minute strategy session • No sales pitch
            </p>
          </div>
        </div>
      </section>

      {/* AI Evolution Philosophy Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              AI Evolution Follows Nature's Laws
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Just as gravity shapes planets and seasons dictate growth, AI follows predictable patterns. 
              We've decoded the natural laws of digital transformation.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <article className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">From Seed to Giant Oak</h3>
              <p className="text-slate-300">
                Your business AI transformation starts as a small seed. With the right conditions—proper tools, 
                expert guidance, and consistent nurturing—it grows into a powerful revenue engine that towers above competition.
              </p>
            </article>

            <article className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Breaking Free from Gravity</h3>
              <p className="text-slate-300">
                Traditional marketing feels heavy, expensive, and limiting—like Earth's gravity holding you down. 
                AI gives you the escape velocity to reach new heights of efficiency and profitability.
              </p>
            </article>

            <article className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Natural Growth Cycles</h3>
              <p className="text-slate-300">
                Like seasons that bring renewal, AI creates cycles of optimization. Each iteration harvests better 
                results while planting seeds for the next level of growth and discovery.
              </p>
            </article>
          </div>

          <div className="text-center">
            <Link 
              to="/ai-plans" 
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-green-500 hover:shadow-xl transition-all duration-300"
            >
              Explore AI Evolution Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust and Client Logos */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-16 text-cyan-300 font-bold text-xl">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            <img src="/lovable-uploads/c9b27200-e1d4-4fa8-a9d1-6e929aba1499.png" alt="Beat AI Search Partner" className="h-16 object-contain" />
            <img src="/lovable-uploads/8a3a4ac6-afc9-40fa-b252-4f574c36292e.png" alt="Lindy Certified Partner" className="h-16 object-contain" />
            <img src="/lovable-uploads/f14ede69-5062-48c3-9a6a-491161c2646d.png" alt="Memphis Earth Movers" className="h-16 object-contain" />
            <img src="/lovable-uploads/a4d4b0f1-79a6-4e7c-a6f2-5da73456b7e3.png" alt="MakeMentors.io Platform" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Two-Sided AI Framework */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              AI That Works Both Ways
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get found online. Run smarter inside. Digital Frontier delivers visibility + efficiency with AI systems built for growth.
            </p>
          </header>

          {/* Framework Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <article className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-cyan-400 mb-2">What is it?</h3>
              <p className="text-slate-300 text-sm">A digital strategy firm helping businesses grow in the AI era.</p>
            </article>
            
            <article className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-cyan-400 mb-2">Who is it for?</h3>
              <p className="text-slate-300 text-sm">Companies that want both more customers and better efficiency.</p>
            </article>
            
            <article className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-cyan-400 mb-2">How it works:</h3>
              <p className="text-slate-300 text-sm">AI visibility: dominate search results<br/>AI backend: streamline operations<br/>End-to-end integrated system</p>
            </article>
            
            <article className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-cyan-400 mb-2">Investment:</h3>
              <p className="text-slate-300 text-sm">Pilots start from $2,500–$7,500 depending on scope.</p>
            </article>
          </div>

          {/* The Problem and Solution */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 p-8 rounded-2xl mb-20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Internet Changed. Most Businesses Didn't.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">The Pain</h3>
                <p className="text-slate-300">Customers now ask ChatGPT and Google AI for answers—not just search engines. If you're not showing up, you don't exist.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">The Reality</h3>
                <p className="text-slate-300">Meanwhile, competitors are using AI to automate their backend, cutting costs and scaling faster while you stay stuck.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">The Solution</h3>
                <p className="text-slate-300">Digital Frontier builds end-to-end AI systems so you win on both fronts—visible outside, efficient inside.</p>
              </div>
            </div>
          </div>

          {/* Our Framework Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <article className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Visibility (Front-End)</h3>
              <ul className="space-y-4 text-slate-300">
                <li>• Generative Engine Optimization (GEO)</li>
                <li>• Answer Engine Optimization (AEO)</li>
                <li>• Conversion funnels + omnichannel campaigns</li>
              </ul>
            </article>
            
            <article className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Efficiency (Backend)</h3>
              <ul className="space-y-4 text-slate-300">
                <li>• AI workflows & automation</li>
                <li>• Data-driven ops intelligence</li>
                <li>• Cost-cutting + scaling systems</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Marketing Services</h2>
            <p className="text-xl text-slate-300">Proven solutions that drive real results for businesses like yours</p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
              <img 
                src="/lovable-uploads/e54d0fa9-0841-4307-be48-9729f84a20b3.png" 
                alt="AI-Powered Marketing Solutions" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">AI-Powered Marketing</h3>
              <p className="text-slate-300 mb-6">
                Leverage cutting-edge artificial intelligence to automate and optimize your marketing campaigns for maximum impact.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ Smart automation</li>
                <li>✓ Predictive analytics</li>
                <li>✓ Real-time optimization</li>
                <li>✓ ROI maximization</li>
              </ul>
              <Link 
                to="/modern-contact-form" 
                className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Explore AI Solutions
              </Link>
            </article>

            <article className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
              <img 
                src="/lovable-uploads/46440d18-7e50-459a-9423-09e65df49121.png" 
                alt="Answer Engine Optimization AEO" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Answer Engine Optimization</h3>
              <p className="text-slate-300 mb-6">
                Dominate AI-powered search results and voice assistants to capture high-intent traffic before your competition.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ AI search optimization</li>
                <li>✓ Voice search ready</li>
                <li>✓ Featured snippets</li>
                <li>✓ Future-proof SEO</li>
              </ul>
              <Link 
                to="/answer-engine-optimization" 
                className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Learn About AEO
              </Link>
            </article>

            <article className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
              <img 
                src="/lovable-uploads/72dd30ec-d978-4ba9-baad-aba941aa15c4.png" 
                alt="Data-Driven Marketing Insights" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Data-Driven Insights</h3>
              <p className="text-slate-300 mb-6">
                Transform raw data into actionable strategies that drive measurable business growth and competitive advantage.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ Advanced analytics</li>
                <li>✓ Performance tracking</li>
                <li>✓ Custom reporting</li>
                <li>✓ Strategic insights</li>
              </ul>
              <Link 
                to="/modern-contact-form" 
                className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                See Our Analytics
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
            <p className="text-xl text-slate-300">Real metrics from real clients</p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-slate-700/60 p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">32% Lower</div>
              <p className="text-slate-300">ad costs with AI-optimized funnels</p>
            </div>
            <div className="text-center bg-slate-700/60 p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">3x More</div>
              <p className="text-slate-300">leads from GEO visibility strategies</p>
            </div>
            <div className="text-center bg-slate-700/60 p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">15 Hours/Week</div>
              <p className="text-slate-300">saved with backend AI automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Based Services */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Serving Memphis and Surrounding Areas</h2>
            <p className="text-xl text-slate-300">Local expertise with global AI capabilities</p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Memphis Digital Marketing</h3>
              <p className="text-slate-300 mb-4">
                Comprehensive digital marketing services for Memphis businesses, powered by AI and local market expertise.
              </p>
              <Link to="/memphis-digital-marketing" className="text-green-400 hover:text-green-300">
                Learn More →
              </Link>
            </article>

            <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Collierville SEO Services</h3>
              <p className="text-slate-300 mb-4">
                Advanced SEO and Answer Engine Optimization services specifically designed for Collierville businesses.
              </p>
              <Link to="/collierville-seo-services" className="text-green-400 hover:text-green-300">
                Learn More →
              </Link>
            </article>

            <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Germantown Marketing</h3>
              <p className="text-slate-300 mb-4">
                Full-service digital marketing for Germantown businesses, including AI automation and local optimization.
              </p>
              <Link to="/germantown-digital-marketing" className="text-green-400 hover:text-green-300">
                Learn More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions" 
        faqs={faqData}
        className="py-20 bg-slate-900"
      />

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-800 text-center">
        <div className="container mx-auto px-6">
          <img 
            src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" 
            alt="Digital Frontier Company Logo" 
            width="80" 
            height="80" 
            className="mx-auto mb-8"
          />
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Own Your Digital Space?
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            If you're ready to dominate your market and make your competitors irrelevant, let's talk. 
            Click below, and let's build something legendary.
          </p>
          
          <Link 
            to="/modern-contact-form" 
            className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your AI Transformation
          </Link>
          
          <p className="mt-6 text-slate-400 font-semibold">
            Digital Frontier—Marketing That Actually Works.
          </p>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digital Frontier Company",
          "url": "https://digitalfrontier.app",
          "logo": "https://digitalfrontier.app/lovable-uploads/0a290708-5a9c-4d58-8a79-88d6ed6a5e66.png",
          "description": "AI marketing agency in Memphis specializing in Answer Engine Optimization, AI automation, and data-driven digital marketing solutions for small businesses.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Memphis",
            "addressRegion": "TN",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-901-555-0123",
            "contactType": "customer service",
            "areaServed": ["Memphis", "Collierville", "Germantown", "Tennessee"],
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.linkedin.com/company/digitalfrontiercompany",
            "https://twitter.com/digitalfrontier"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 35.1495,
              "longitude": -90.0490
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Answer Engine Optimization",
                  "description": "Optimize for AI-powered search engines and voice assistants"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Marketing Automation",
                  "description": "Automated marketing workflows powered by artificial intelligence"
                }
              }
            ]
          }
        })
      }} />
    </PageWrapper>
  );
};

export default HomePageHTML;