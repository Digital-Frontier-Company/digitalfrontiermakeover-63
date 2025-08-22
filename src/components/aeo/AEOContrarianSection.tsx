
import React from "react";
import { AlertTriangle } from "lucide-react";

const AEOContrarianSection = () => {
  return (
    <section className="mb-24">
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-800/50 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <AlertTriangle className="h-8 w-8 text-orange-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Why Most SEO Agencies Are Falling Behind on AEO</h2>
            <p className="text-slate-300 text-lg mb-6">
              While traditional SEO agencies focus on outdated ranking tactics, Answer Engine Optimization is revolutionizing 
              how businesses capture visibility in AI-powered search results. Here's what they're missing:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-300">Traditional SEO Problems:</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Ignoring ChatGPT optimization and AI search engines
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                No voice search or AI overview strategy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Missing schema markup for AI understanding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Content not optimized for direct answers
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-300">Our AEO Advantage:</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                ChatGPT SEO and AI search optimization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                Voice search and Perplexity AI targeting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                Advanced schema markup implementation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                Answer Engine Optimization methodology
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-slate-900/60 rounded-lg">
          <p className="text-lg text-slate-200 italic">
            "While competitors chase traditional rankings, we position your content where AI actually looks for answers. 
            That's the difference between being found and being forgotten in the age of AI search."
          </p>
          <p className="text-blue-300 mt-2 font-medium">— Digital Frontier AEO Team</p>
        </div>
      </div>
    </section>
  );
};

export default AEOContrarianSection;
