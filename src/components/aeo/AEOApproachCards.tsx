
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartLineIcon, SquareIcon, ChartPieIcon, ChartBarIcon } from "lucide-react";

const AEOApproachCards = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Our AEO Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartLineIcon className="h-6 w-6 text-blue-400" />
              Content Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our AI-powered analysis engine examines your existing content to identify questions users are asking
              about your industry and products, revealing prime opportunities for answer optimization.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <SquareIcon className="h-6 w-6 text-blue-400" />
              Schema Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We implement robust structured data schemas that signal to search engines exactly which parts of your
              content are questions and answers, significantly boosting your chances of featured snippet selection.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartPieIcon className="h-6 w-6 text-blue-400" />
              Voice Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We optimize your content for natural language patterns that match how people actually speak, ensuring
              your answers are selected for voice search results across Google Assistant, Alexa, and Siri.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartBarIcon className="h-6 w-6 text-blue-400" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our specialized monitoring tools track how frequently your content appears in featured snippets, 
              knowledge panels, and voice responses, providing actionable insights for continuous improvement.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AEOApproachCards;
