import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

const AdFunnelCallToAction = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800/50 mb-16">
      <CardContent className="p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-4 rounded-full">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Ad Funnel?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          Integrate AI at every stage of your customer journey to create a more intelligent, adaptive, 
          and results-driven marketing engine. Our experts will help you implement this blueprint 
          step-by-step for maximum impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact#contact-form">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all text-lg shadow-lg shadow-blue-900/30 flex items-center gap-2 hover:shadow-xl hover:-translate-y-1">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          
          <Link to="/pricing">
            <button className="px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-md font-medium transition-all text-lg">
              View Pricing Plans
            </button>
          </Link>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">30-Day</div>
            <div className="text-slate-300 text-sm">Implementation Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
            <div className="text-slate-300 text-sm">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400 mb-1">ROI</div>
            <div className="text-slate-300 text-sm">Guarantee</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdFunnelCallToAction;