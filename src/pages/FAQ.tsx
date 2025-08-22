
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What is AI-powered marketing and why are ethics important?",
      answer: "AI-powered marketing uses AI techniques (machine learning, automation, generative models) for tasks like segmentation, personalization, chatbots, ad buying, and content creation. Ethics are vital because unchecked AI can cause harm through bias, privacy violations, or lack of transparency, eroding consumer trust. Ethical AI marketing aligns with laws and values, fostering trust.",
      isOpen: false
    },
    {
      question: "What are responsible AI marketing strategies?",
      answer: "These strategies proactively address ethical and legal concerns. They involve using quality, consented data, mitigating bias, being transparent about AI use, maintaining human oversight, protecting privacy, and aligning with regulations. The goal is to maximize AI benefits while minimizing harm through fairness, transparency, and accountability.",
      isOpen: false
    },
    {
      question: "How can AI bias in advertising be prevented or minimized?",
      answer: "Minimizing bias requires using diverse training data, excluding/managing sensitive attributes, testing models for biased outcomes, implementing human review checkpoints, ensuring team diversity, ongoing monitoring, setting clear ethical guidelines, and utilizing platform anti-bias features.",
      isOpen: false
    },
    {
      question: "Are there regulations for AI in marketing in 2025?",
      answer: "Yes, a mix exists. The EU AI Act is emerging with specific requirements (transparency, risk assessment). US states are also acting. Existing privacy laws (GDPR, CCPA) heavily impact AI data use, mandating consent and user rights over automated decisions. Anti-discrimination and consumer protection laws (FTC rules, Fair Housing Act) apply to AI outcomes. Industry codes (ANA, ICC) also provide standards.",
      isOpen: false
    },
    {
      question: "What is AEO (Answer Engine Optimization) and why does it matter in marketing?",
      answer: "AEO optimizes content for AI-driven answer engines (voice assistants, AI chatbots). Instead of ranking links (SEO), it aims to have content presented as the direct answer. This involves structured Q&A content, schema markup, and concise, authoritative answers. It matters because consumer search behavior is shifting towards asking questions and getting direct AI responses. Ignoring AEO risks losing visibility in these channels. Ethical AEO also demands accuracy.",
      isOpen: false
    },
    {
      question: "How can companies maintain consumer trust when using AI in marketing?",
      answer: "Trust relies on transparency (disclose AI use), providing value (relevant, non-creepy personalization), giving user control (opt-outs, human fallback), ensuring fairness internally, responding quickly to issues, safeguarding data/privacy, adding a human touch where appropriate, and demonstrating clear benefits over time.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              The Digital Frontier
            </h2>
            <p className="text-slate-300 mt-1">Navigating the Future of Technology & Ethics</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/technical" className="text-slate-300 hover:text-blue-400 transition-colors">Technical Breakdown</Link>
            <Link to="/evolution" className="text-slate-300 hover:text-blue-400 transition-colors">Evolution</Link>
            <Link to="/regulations" className="text-slate-300 hover:text-blue-400 transition-colors">Regulations</Link>
            <Link to="/sectors" className="text-slate-300 hover:text-blue-400 transition-colors">Sectors</Link>
            <Link to="/future" className="text-slate-300 hover:text-blue-400 transition-colors">Future Trends</Link>
            <Link to="/kpis" className="text-slate-300 hover:text-blue-400 transition-colors">KPIs</Link>
            <Link to="/faq" className="text-blue-400 border-b border-blue-400">FAQ</Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select 
              className="bg-slate-800 text-slate-300 rounded-md border border-slate-700 px-2 py-1"
              onChange={(e) => window.location.href = e.target.value}
              defaultValue="/faq"
            >
              <option value="/">Home</option>
              <option value="/technical">Technical Breakdown</option>
              <option value="/evolution">Evolution</option>
              <option value="/regulations">Regulations</option>
              <option value="/sectors">Sectors</option>
              <option value="/future">Future Trends</option>
              <option value="/kpis">KPIs</option>
              <option value="/faq">FAQ</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 flex items-center">
              <HelpCircle className="inline-block mr-3 text-blue-400" />
              Frequently Asked Questions
              <span className="ml-2 text-blue-400">:</span>
              <span className="text-purple-400 ml-2">AI Marketing Ethics</span>
            </h2>
            <p className="text-slate-300 mb-8">
              Get answers to common questions about the ethical implications of AI in marketing, 
              responsible strategies, regulations, and maintaining consumer trust.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className={`bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden ${faq.isOpen ? 'ring-1 ring-blue-400/30' : ''}`}
                >
                  <Collapsible open={faq.isOpen} onOpenChange={() => toggleFAQ(index)}>
                    <CollapsibleTrigger className="w-full p-5 flex justify-between items-center text-left">
                      <h3 className="font-semibold text-lg text-blue-300">
                        Q{index + 1}: {faq.question}
                      </h3>
                      {faq.isOpen ? 
                        <ChevronUp className="text-blue-400 h-5 w-5 flex-shrink-0 ml-2" /> : 
                        <ChevronDown className="text-blue-400 h-5 w-5 flex-shrink-0 ml-2" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-5 pb-5 pt-1">
                      <div className="border-t border-slate-700 pt-4 mt-1">
                        <p className="text-slate-300">
                          A{index + 1}: {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Schema Markup for SEO</h3>
            <p className="text-slate-300 mb-4">
              This page uses JSON-LD schema markup for better SEO and AEO (Answer Engine Optimization).
            </p>
            <div className="bg-slate-800 rounded-lg p-4 text-xs md:text-sm text-slate-300 overflow-x-auto">
              <pre>
                <code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI-powered marketing and why are ethics important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI-powered marketing uses artificial intelligence technologies..."
      }
    },
    // Additional FAQs...
  ]
}`}</code>
              </pre>
            </div>
            <p className="text-slate-400 mt-4 text-sm italic">
              Using structured data helps AI-powered search engines better understand and feature your content.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; 2025 The Digital Frontier - <a href="https://thedigitalfrontier.ai" className="text-blue-400 hover:underline">thedigitalfrontier.ai</a>
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
