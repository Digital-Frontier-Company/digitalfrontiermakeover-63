
import React from "react";
import { Link } from "react-router-dom";

const IAPromptCallToAction = () => {
  return (
    <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 text-center mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Transform Your Website Architecture with AI</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
        These Information Architecture prompts are designed to optimize your website structure for both users and search engines. 
        Combine them with our Answer Engine Optimization services for maximum impact.
      </p>
      <div className="bg-slate-800/40 p-4 rounded-lg mb-8 max-w-xl mx-auto">
        <p className="text-indigo-200 font-medium">
          Websites with optimized information architecture see 67% better user engagement 
          and 40% improvement in task completion rates.
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
          to="/answer-engine-optimization"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors text-lg"
        >
          Learn About Answer Engine Optimization
        </Link>
      </div>
      <p className="text-slate-400 mt-4 text-sm">
        Need help implementing these strategies? Get a free website architecture audit
      </p>
    </div>
  );
};

export default IAPromptCallToAction;
