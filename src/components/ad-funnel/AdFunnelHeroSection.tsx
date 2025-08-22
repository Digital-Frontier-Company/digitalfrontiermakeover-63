import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AdFunnelHeroSection = () => {
  return (
    <section className="mb-24">
      <div className="text-center mb-12">
        <img 
          src="/lovable-uploads/5aa13ef4-6453-462e-b5bf-bd88c1b20988.png"
          alt="AI-Powered Ad Funnel Blueprint - Digital Frontier AI Brain"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-xl mb-8"
        />
      </div>
      
      <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-800/30 animate-fade-in">
        <CardContent className="p-8">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-slate-300 mb-6 relative z-10 text-lg">
            Welcome, Frontiers! In today's rapidly evolving digital ecosystem, a standard ad funnel isn't enough. 
            To truly thrive, businesses need to integrate intelligence at every step. This blueprint outlines 
            how to leverage Artificial Intelligence (AI) to create a smarter, more personalized, and higher-converting ad funnel.
          </p>
          
          <p className="text-slate-300 mb-6 relative z-10 text-lg">
            <strong className="text-blue-300">The Goal:</strong> Move potential customers seamlessly from initial awareness to loyal advocates, using AI to optimize every interaction.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
              <div className="text-2xl font-bold text-blue-400 mb-2">+47%</div>
              <div className="text-slate-300 text-sm">Conversion Rate Increase</div>
            </div>
            <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
              <div className="text-2xl font-bold text-purple-400 mb-2">-35%</div>
              <div className="text-slate-300 text-sm">Customer Acquisition Cost</div>
            </div>
            <div className="text-center p-4 bg-indigo-900/20 rounded-lg border border-indigo-800/30">
              <div className="text-2xl font-bold text-indigo-400 mb-2">+65%</div>
              <div className="text-slate-300 text-sm">Customer Lifetime Value</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AdFunnelHeroSection;