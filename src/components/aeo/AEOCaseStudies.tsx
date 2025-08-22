
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, ChartLineIcon, ArrowRight } from "lucide-react";

const AEOCaseStudies = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-slate-800 bg-slate-900/80">
          <CardContent className="pt-8 pb-6">
            <div className="flex items-start gap-6">
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <ChartBarIcon className="h-10 w-10 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-100">Local Business Success</h3>
                <p className="text-slate-300 mb-6 text-base">
                  A Memphis-based marketing agency saw a 180% increase in featured snippet appearances after implementing our AEO strategy, leading to a 43% boost in qualified leads.
                </p>
                <div className="flex items-center">
                  <span className="text-blue-400 font-semibold">Read Case Study</span>
                  <ArrowRight className="h-4 w-4 ml-1 text-blue-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80">
          <CardContent className="pt-8 pb-6">
            <div className="flex items-start gap-6">
              <div className="bg-cyan-900/30 p-4 rounded-lg">
                <ChartLineIcon className="h-10 w-10 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-100">E-commerce Voice Optimization</h3>
                <p className="text-slate-300 mb-6 text-base">
                  An online retailer increased their visibility in voice search results by 290% after restructuring their product FAQ pages using our AEO framework.
                </p>
                <div className="flex items-center">
                  <span className="text-cyan-400 font-semibold">Read Case Study</span>
                  <ArrowRight className="h-4 w-4 ml-1 text-cyan-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AEOCaseStudies;
