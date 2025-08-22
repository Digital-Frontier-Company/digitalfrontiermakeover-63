
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Settings, Target } from "lucide-react";

const AIPromptUsageGuide = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">How to Use Memphis Marketing AI Prompts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="border-blue-800/50 bg-blue-900/20">
          <CardContent className="pt-6">
            <Settings className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-blue-300 mb-4">1. Customize the Prompts</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Replace [BUSINESS TYPE] with your specific industry</li>
              <li>• Add [MEMPHIS NEIGHBORHOOD] details</li>
              <li>• Include your [BUSINESS SERVICES] specifics</li>
              <li>• Adjust [TOPIC] to your content needs</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-green-800/50 bg-green-900/20">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-green-300 mb-4">2. Target Memphis Market</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Reference local Memphis landmarks</li>
              <li>• Mention Memphis culture and values</li>
              <li>• Include neighborhood-specific details</li>
              <li>• Connect with Memphis community events</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-purple-800/50 bg-purple-900/20">
          <CardContent className="pt-6">
            <Lightbulb className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-purple-300 mb-4">3. Optimize Results</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Follow up with specific questions</li>
              <li>• Request Memphis-focused examples</li>
              <li>• Ask for local keyword variations</li>
              <li>• Iterate based on AI responses</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-slate-800/40 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-slate-100">Pro Tips for Memphis Marketing AI Prompts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-300 mb-2">Best Practices:</h4>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• Be specific about Memphis neighborhoods</li>
              <li>• Include your business goals in prompts</li>
              <li>• Reference Memphis competitors by name</li>
              <li>• Ask for measurable outcomes</li>
              <li>• Request Memphis-specific keywords</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange-300 mb-2">Common Mistakes:</h4>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• Using generic prompts without Memphis context</li>
              <li>• Not specifying your target Memphis audience</li>
              <li>• Forgetting to mention local competitors</li>
              <li>• Asking for content without Memphis culture</li>
              <li>• Not requesting local SEO optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPromptUsageGuide;
