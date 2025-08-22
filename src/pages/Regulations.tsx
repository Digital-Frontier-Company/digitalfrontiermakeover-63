import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Gavel, Shield, BookOpen } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Regulations = () => {
  const regulationsFaqs: FAQItem[] = [
    {
      question: "What is the EU AI Act and how will it affect marketers?",
      answer: "The EU AI Act is a comprehensive regulation expected to come into effect around 2025. For marketers, it categorizes AI systems by risk level, with many marketing applications falling into the 'limited risk' category. This means requirements for transparency (disclosing when AI is used in content creation, chatbots, etc.), documentation of systems, and alignment with existing GDPR requirements. Non-compliance can result in significant fines."
    },
    {
      question: "How do privacy laws like GDPR and CCPA impact AI marketing?",
      answer: "Privacy laws significantly impact AI marketing by requiring: explicit consent for data processing, data minimization (only collecting what's necessary), rights for consumers to access/delete their data, special protections for sensitive attributes, transparency about automated decision-making, and impact assessments for high-risk processing. These laws effectively set guardrails for how AI can be trained and deployed in marketing contexts."
    },
    {
      question: "What should be included in an AI ethics committee for a marketing team?",
      answer: "An effective AI ethics committee should include cross-functional representation from: marketing leadership, legal/compliance, data science/engineering, privacy officers, customer advocacy, and diversity/inclusion specialists. The committee should meet regularly to review AI initiatives, set ethical guidelines, monitor for potential issues, evaluate vendor solutions, and provide governance for AI deployments across marketing operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/regulations" />
      </Helmet>
      
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
            <Link to="/regulations" className="text-blue-400 border-b border-blue-400">Regulations</Link>
            <Link to="/sectors" className="text-slate-300 hover:text-blue-400 transition-colors">Sectors</Link>
            <Link to="/future" className="text-slate-300 hover:text-blue-400 transition-colors">Future Trends</Link>
            <Link to="/kpis" className="text-slate-300 hover:text-blue-400 transition-colors">KPIs</Link>
            <Link to="/faq" className="text-slate-300 hover:text-blue-400 transition-colors">FAQ</Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select 
              className="bg-slate-800 text-slate-300 rounded-md border border-slate-700 px-2 py-1"
              onChange={(e) => window.location.href = e.target.value}
              defaultValue="/regulations"
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
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Gavel className="h-8 w-8 text-amber-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                Global Regulations and Standards <span className="text-amber-400">Shaping AI Marketing Ethics</span>
              </h2>
            </div>
            <p className="text-slate-300 mb-8">
              Compliance with evolving laws and standards is critical. The landscape includes:
            </p>

            <div className="space-y-8">
              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Europe - Pioneering AI Legislation</h3>
                <p className="text-slate-300">
                  The EU AI Act (expected effect ~2025) uses a risk-based approach. Marketing AI is likely low/moderate risk but aspects like profiling or manipulation could trigger rules. Key impacts: Transparency requirements (disclosing AI content/chatbots), alignment with GDPR (data rights, automated decision explanations). Strict penalties enforce compliance.
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">United States - Sectoral and State Approaches</h3>
                <p className="text-slate-300">
                  No single federal law yet. FTC uses consumer protection mandate against biased/deceptive AI. Sector-specific rules (finance, health) apply. States like CA, CO are introducing AI accountability laws (bias assessments, transparency). Self-regulation (e.g., ANA Ethics Code) sets industry standards.
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Asia-Pacific & Other Regions</h3>
                <p className="text-slate-300">
                  Varies. China regulates recommendation algorithms and requires labeling of "deep synthesis" (AI media). Japan, South Korea focus on ethical guidelines. Canada has proposed AIDA. Australia, Singapore have ethical frameworks. OECD, UNESCO provide global principles.
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Advertising Standards and Self-Regulation</h3>
                <p className="text-slate-300">
                  Industry codes (ICC, ANA) fill gaps. Emphasize marketer responsibility (cannot blame AI), honesty, decency. Prohibit misleading manipulated/AI images. Compliance avoids reputational damage.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-emerald-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                Building an AI Ethics & <span className="text-emerald-400">Governance Framework</span>
              </h2>
            </div>
            <p className="text-slate-300 mb-8">
              A robust framework ensures responsible AI deployment. Key components:
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Define Clear AI Principles</h4>
                  <p className="text-slate-300 mt-1">
                    Articulate ethical AI goals (fairness, transparency, privacy, accountability) tied to company values. Create an internal charter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Establish an AI Ethics Committee</h4>
                  <p className="text-slate-300 mt-1">
                    Cross-functional group (marketing, IT, legal, compliance) to review plans, monitor implementation, set requirements, handle incidents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Implement AI Project Checkpoints (Ethics by Design)</h4>
                  <p className="text-slate-300 mt-1">
                    Integrate ethics checks at key stages: Data phase (bias audit, consent), Model phase (bias testing, explainability), Output phase (QA, red-teaming), Deployment phase (monitoring, feedback channels, tracking regulations).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">4</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Create Accountability and Oversight Roles</h4>
                  <p className="text-slate-300 mt-1">
                    Assign roles (e.g., AI Ethics Officer) with authority. Include ethics in performance evals. Extend governance to vendors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">5</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Documentation and Auditability</h4>
                  <p className="text-slate-300 mt-1">
                    Keep records (training data, decisions, model cards, incidents) for audit trails and transparency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">6</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Employee Training and Culture</h4>
                  <p className="text-slate-300 mt-1">
                    Train teams on AI ethics, bias recognition, compliance. Foster a culture where concerns can be raised safely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-center bg-emerald-900/50 h-8 w-8 rounded-full text-emerald-400 font-bold">7</div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300">Consumer-Centric Measures</h4>
                  <p className="text-slate-300 mt-1">
                    Incorporate user feedback (focus groups), provide opt-outs, publish AI usage FAQs, make public commitments (e.g., no selling data).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-300 italic flex items-center">
                <BookOpen className="h-5 w-5 inline-block mr-2 text-emerald-400" />
                A strong governance framework prevents disasters, ensures compliance, builds trust, and enables confident innovation.
              </p>
            </div>
          </Card>
          
          {/* FAQ Section */}
          <Card className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
            <FAQSection 
              title="Regulatory & Governance FAQ" 
              faqs={regulationsFaqs} 
            />
          </Card>
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

export default Regulations;
