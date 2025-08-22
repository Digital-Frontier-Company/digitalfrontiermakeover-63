
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AEOKeyTakeaways = () => {
  return (
    <Card className="mb-16 border-blue-800/50 bg-gradient-to-r from-blue-900/40 to-cyan-900/40">
      <CardContent className="pt-8">
        <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-2">
          <CheckCircle className="h-6 w-6" />
          Key AEO Takeaways
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">Answer Engine Optimization targets AI search results like ChatGPT, SGE, and Perplexity</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">AEO focuses on voice search optimization and AI overviews for immediate visibility</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">Schema markup and structured data are critical for AEO success</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">Memphis businesses see 180% increase in featured snippets with proper AEO</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">Answer Engine Optimization services deliver faster results than traditional SEO</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-200">AEO strategy includes ChatGPT optimization and AI search visibility</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AEOKeyTakeaways;
