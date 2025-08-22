
import React from "react";
import { Link } from "react-router-dom";

const UXPromptCallToAction = () => {
  return (
    <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-800/50 text-center mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Transform Your Website with AI-Powered UX</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
        These User Experience prompts are designed to optimize every aspect of your website's UX. 
        Combine them with our Answer Engine Optimization services for maximum SEO impact.
      </p>
      <div className="bg-slate-800/40 p-4 rounded-lg mb-8 max-w-xl mx-auto">
        <p className="text-green-200 font-medium">
          Websites with optimized UX see 200% higher conversion rates 
          and 67% improvement in user engagement metrics.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/ai-prompt-templates"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-lg"
        >
          View Marketing Prompts
        </Link>
        <Link 
          to="/information-architecture-prompts"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors text-lg"
        >
          Architecture Prompts
        </Link>
        <Link 
          to="/answer-engine-optimization"
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors text-lg"
        >
          Learn About AEO
        </Link>
      </div>
      <p className="text-slate-400 mt-4 text-sm">
        Need help implementing these UX strategies? Get a free website audit consultation
      </p>
    </div>
  );
};

export default UXPromptCallToAction;
