
import React from "react";
import { Link } from "react-router-dom";

const UXPromptHeroSection = () => {
  return (
    <section className="text-center mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
          User Experience AI Prompts for SEO
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          300 proven ChatGPT prompts to optimize user experience and boost SEO performance. 
          Better UX signals directly impact search rankings and conversions.
        </p>
        
        <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-300">🚀 Why UX Optimization Drives SEO Success</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-300 mb-2">📊 Core Web Vitals Impact</h3>
                <p className="text-slate-300 text-sm">Page loading speed, interactivity, and visual stability are official Google ranking factors. Better UX = higher rankings.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-300 mb-2">⏱️ Dwell Time & Bounce Rate</h3>
                <p className="text-slate-300 text-sm">Users stay longer on well-designed sites. Low bounce rates and high dwell time signal content quality to search engines.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-300 mb-2">📱 Mobile-First Indexing</h3>
                <p className="text-slate-300 text-sm">Google primarily uses mobile versions for ranking. Mobile UX optimization is critical for SEO success.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-300 mb-2">🔗 User Engagement Signals</h3>
                <p className="text-slate-300 text-sm">Click-through rates, social shares, and return visits all influenced by UX quality. These signals boost organic visibility.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-300 mb-2">🎯 Conversion Rate Impact</h3>
                <p className="text-slate-300 text-sm">Better UX increases conversions by 200-400%. Higher conversion rates signal page quality and relevance to search engines.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">🔍 Crawlability & Structure</h3>
                <p className="text-slate-300 text-sm">Clear navigation and logical site structure help search engines crawl and understand your content hierarchy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-300 mb-4">💡 Pro UX-SEO Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
            <ul className="space-y-2 text-slate-300">
              <li>• Optimize above-the-fold content for immediate value</li>
              <li>• Use schema markup for better rich snippets</li>
              <li>• Implement breadcrumb navigation for clear hierarchy</li>
              <li>• Design for thumb-friendly mobile interactions</li>
            </ul>
            <ul className="space-y-2 text-slate-300">
              <li>• Create scannable content with headers and bullets</li>
              <li>• Use internal linking to guide user journeys</li>
              <li>• Optimize images for faster loading and accessibility</li>
              <li>• Test and iterate based on user behavior data</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/ai-prompt-templates"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
          >
            ← Marketing Prompts
          </Link>
          <Link 
            to="/information-architecture-prompts"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors"
          >
            Architecture Prompts →
          </Link>
          <Link 
            to="/answer-engine-optimization"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
          >
            Learn AEO →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UXPromptHeroSection;
