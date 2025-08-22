
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin, Calendar } from "lucide-react";

const AEOMemphisCaseStudy = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Memphis AEO Success Story</h2>
      <Card className="border-slate-800 bg-slate-900/80">
        <CardContent className="pt-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <MapPin className="h-10 w-10 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-slate-100">Local Marketing Agency Transformation</h3>
              <div className="flex items-center gap-4 text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>6-month campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Memphis, TN</span>
                </div>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                A Memphis-based marketing agency struggled with visibility in AI search results. Our Answer Engine Optimization 
                services transformed their digital presence through strategic ChatGPT optimization and voice search targeting.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-slate-800/40 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-400 mb-2">180%</div>
              <p className="text-slate-300">Increase in Featured Snippets</p>
            </div>
            <div className="text-center p-6 bg-slate-800/40 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-400 mb-2">43%</div>
              <p className="text-slate-300">Boost in Qualified Leads</p>
            </div>
            <div className="text-center p-6 bg-slate-800/40 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-2">290%</div>
              <p className="text-slate-300">Voice Search Visibility</p>
            </div>
          </div>
          
          <div className="bg-slate-800/20 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-slate-100">AEO Strategy Implementation:</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Implemented comprehensive FAQ schema markup for AI understanding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Optimized content for ChatGPT and Perplexity AI citations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Created voice search optimization strategy for local queries
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Developed AI-friendly content structure with direct answers first
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Built internal linking hub connecting all AEO-optimized content
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AEOMemphisCaseStudy;
