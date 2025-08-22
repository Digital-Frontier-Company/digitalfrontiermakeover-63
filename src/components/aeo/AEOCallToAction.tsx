
import React from "react";
import { Link } from "react-router-dom";

const AEOCallToAction = () => {
  return (
    <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-800/50 text-center mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate AI Search Results?</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
        Get your Memphis business featured in ChatGPT responses, voice search results, and AI overviews. 
        Our Answer Engine Optimization specialists use proven AEO strategies to position your content 
        where AI actually looks for answers.
      </p>
      <div className="bg-slate-800/40 p-4 rounded-lg mb-8 max-w-xl mx-auto">
        <p className="text-blue-200 font-medium">
          Join Memphis businesses seeing 180% increases in featured snippets through our 
          Answer Engine Optimization services.
        </p>
      </div>
      
      {/* AI Citation Hacking Section */}
      <div className="bg-purple-900/30 border border-purple-800/50 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-purple-300 mb-3">🎯 WILD-CARD TACTIC: AI Citation Hacking</h3>
        <p className="text-slate-300 mb-4">
          Want to get your business cited in ChatGPT responses? Our Memphis Marketing AI Prompt Templates 
          help you create content that AI systems naturally reference and cite.
        </p>
        <Link 
          to="/ai-prompt-templates"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
        >
          Get 50+ Memphis AI Prompts →
        </Link>
      </div>
      
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-lg">
        Get Your Free AEO Analysis & ChatGPT Audit
      </button>
      <p className="text-slate-400 mt-4 text-sm">
        Free consultation includes voice search assessment and AI citation opportunities
      </p>
    </div>
  );
};

export default AEOCallToAction;
