import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation } from "react-router-dom";

const ContentCreationAgent = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Content Creation Agent: Expert AI Writing Tools & SEO Content Strategies | Generate High-Converting Copy"
      subtitle="Master AI content creation with proven writing tools, expert SEO strategies, and actionable techniques for high-converting marketing copy"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-10-01"
      modifiedDate="2024-12-18"
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">AI Content Creation Tools</h2>
        <p className="mb-6 text-slate-300">
          Use our AI-powered content creation tools to generate high-quality blog posts, 
          articles, and marketing copy that are optimized for search engines and aligned 
          with your digital marketing strategy.
        </p>

        {/* AI Marketing Assistant */}
        <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-green-300">🎯 Advanced AI Marketing Assistant</h3>
          <p className="text-slate-300 mb-4">
            Access our advanced AI marketing assistant for specialized content creation and strategic guidance.
          </p>
          
          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
            <iframe 
              src="https://app.stammer.ai/en/chatbot/embed/9603fd5b-2bb3-4053-89e8-756bcc28c2f5" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allow='microphone'
              title="Advanced AI Marketing Assistant"
            />
          </div>
        </div>

        {/* SEO Blog Post Generator */}
        <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-cyan-300">📝 SEO Blog Post Generator</h3>
          <p className="text-slate-300 mb-4">
            Generate comprehensive blog posts optimized for search engines using our advanced content creation tool.
          </p>
          
          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
            <iframe 
              src="https://www.create.xyz/app/dda0d2b8-5786-42dc-a538-0968081c598d"
              title="SEO Blog Post Generator"
              style={{width: "100%", height: "600px", border: "none"}}
            ></iframe>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-cyan-300">How to Use These Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-300 mb-2">AI Marketing Assistant</h4>
              <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm">
                <li>Start a conversation by typing your question</li>
                <li>Ask for content ideas, SEO tips, or marketing strategies</li>
                <li>Get instant, personalized recommendations</li>
                <li>Refine your requests for more specific guidance</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-300 mb-2">Blog Post Generator</h4>
              <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm">
                <li>Enter your target keywords or topic</li>
                <li>Specify your desired tone and content length</li>
                <li>Click generate to create your content</li>
                <li>Edit and refine the output to match your brand voice</li>
                <li>Download or copy your finalized content</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContentCreationAgent;
