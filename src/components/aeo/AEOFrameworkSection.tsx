
import React from "react";

const AEOFrameworkSection = () => {
  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-12 text-slate-100">Your 6-Step AEO Playbook</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img 
          alt="6-Step Answer Engine Optimization Framework - Digital Frontier Company AEO Methodology" 
          className="w-full max-w-md rounded-lg shadow-lg border border-slate-700" 
          src="/lovable-uploads/6c3d2d6e-7ff3-40e9-be46-918e6ee0996c.png" 
          loading="lazy"
        />
        <div className="space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
              Find the Questions
            </h3>
            <p className="text-slate-300 ml-10">Use Google's "People Also Ask" or tools like Ahrefs to uncover queries your audience is asking about your industry or products.</p>
          </div>
          
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
              Keep It Short
            </h3>
            <p className="text-slate-300 ml-10">Write answers in 40-60 words—perfect for answer boxes and featured snippets while still providing complete information.</p>
          </div>
          
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
              Add Schema
            </h3>
            <p className="text-slate-300 ml-10">Implement structured data like FAQ schema to signal your content's structure to search engines and enhance visibility.</p>
          </div>
          
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
              Talk Naturally
            </h3>
            <p className="text-slate-300 ml-10">Optimize for voice search with conversational phrases and natural language that matches how people actually speak.</p>
          </div>
          
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
              Prioritize Quality
            </h3>
            <p className="text-slate-300 ml-10">Deliver accurate, valuable answers that genuinely help users—search engines increasingly reward content that serves user intent.</p>
          </div>
          
          <div className="bg-slate-800/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">6</span>
              Track Results
            </h3>
            <p className="text-slate-300 ml-10">Use analytics to see what's working, monitor featured snippet performance, and continuously refine your approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AEOFrameworkSection;
