
import React from "react";
import { Link } from "react-router-dom";

const IAPromptHeroSection = () => {
  return (
    <section className="text-center mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
          Information Architecture AI Prompts for SEO
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          50 proven ChatGPT prompts to optimize your website's structure, improve user experience, 
          and boost SEO performance through better information architecture.
        </p>
        
        <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Why Information Architecture Matters for SEO</h2>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-300 mb-2">Better Crawlability</h3>
              <p className="text-slate-300 text-sm">Logical site structure helps search engines understand and index your content more effectively.</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-300 mb-2">Improved User Signals</h3>
              <p className="text-slate-300 text-sm">Better navigation reduces bounce rates and increases time on site - key ranking factors.</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-300 mb-2">Enhanced Relevance</h3>
              <p className="text-slate-300 text-sm">Proper content organization helps search engines understand topical relationships.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/ai-prompt-templates"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
          >
            ← Back to Marketing Prompts
          </Link>
          <Link 
            to="/answer-engine-optimization"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
          >
            Learn About AEO →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IAPromptHeroSection;
