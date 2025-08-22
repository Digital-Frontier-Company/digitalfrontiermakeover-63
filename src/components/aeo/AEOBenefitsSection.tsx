
import React from "react";

const AEOBenefitsSection = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Benefits of AEO</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-800/30">
          <div className="text-blue-400 mb-4 text-3xl font-bold">01</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Trust & Authority</h3>
          <p className="text-slate-300">Build credibility by directly answering your audience's questions, establishing your brand as the go-to resource in your industry.</p>
        </div>
        
        <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/30">
          <div className="text-cyan-400 mb-4 text-3xl font-bold">02</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Zero-Click Visibility</h3>
          <p className="text-slate-300">Capture attention even without website visits through prominent placement in featured snippets and voice search results.</p>
        </div>
        
        <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-800/30">
          <div className="text-indigo-400 mb-4 text-3xl font-bold">03</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Voice Search Ready</h3>
          <p className="text-slate-300">Future-proof your content strategy by optimizing for the rapidly growing segment of voice-activated searches and devices.</p>
        </div>
      </div>
    </section>
  );
};

export default AEOBenefitsSection;
