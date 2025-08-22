
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, Compass, Users, Scale, ShieldCheck, Brain, Share2, Heart } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Future = () => {
  const location = useLocation();
  
  const trends = [
    {
      id: 1,
      title: "Hyper-Personalization & Pushback",
      description: "Ultra-tailored, 1-to-1 marketing at scale. Risk of crossing the \"creepy\" line. Expect demand for more consumer control and transparency.",
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />
    },
    {
      id: 2,
      title: "Answer Engines and AEO",
      description: "Shift from SEO to optimizing for AI answers (voice, chatbots). Accuracy, authority, and structured content are crucial. Ethical sourcing and attribution become key.",
      icon: <Compass className="h-6 w-6 text-purple-400" />
    },
    {
      id: 3,
      title: "Rise of Virtual Influencers & Synthetic Media",
      description: "AI-created characters/avatars for promotion. Deepfakes for personalized messages. Ethical focus on disclosure, authenticity, avoiding manipulation.",
      icon: <Users className="h-6 w-6 text-green-400" />
    },
    {
      id: 4,
      title: "Regulatory Clarity and Enforcement (AI Audits)",
      description: "Laws like EU AI Act coming into force. Expect required AI audits, certifications, and registrations. Ethical practices become compliance necessity.",
      icon: <Scale className="h-6 w-6 text-amber-400" />
    },
    {
      id: 5,
      title: "Consumer Savviness & Demand for Ethical AI",
      description: "Consumers become more AI-aware, favoring brands using AI responsibly. \"Digital ethics\" becomes brand equity. Companies may advertise ethical practices.",
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />
    },
    {
      id: 6,
      title: "AI Augmentation of Marketers",
      description: "Marketers focus on strategy, creativity, ethics as AI handles execution. New roles (AI Ethics Officer). Improved AI tools assist with ethical checks.",
      icon: <Brain className="h-6 w-6 text-pink-400" />
    },
    {
      id: 7,
      title: "Multi-modal and Contextual AI Marketing",
      description: "AI blends physical/digital (AR ads, in-car recommendations). Risks of overwhelm, intrusion. Need for consent norms, accessibility considerations.",
      icon: <Share2 className="h-6 w-6 text-indigo-400" />
    },
    {
      id: 8,
      title: "AI for Good in Marketing",
      description: "Using AI marketing techniques for social good (public health messages, nonprofit support). Ethics still apply, especially with vulnerable groups.",
      icon: <Heart className="h-6 w-6 text-red-400" />
    }
  ];

  const futureFaqs: FAQItem[] = [
    {
      question: "How will AI impact marketing jobs in the next 5 years?",
      answer: "AI will transform rather than eliminate marketing roles. Routine tasks will be automated, while roles focusing on strategy, ethics, creativity, and AI oversight will grow. New positions like AI Ethics Officers, AI-Human Collaboration Specialists, and Creative Prompt Engineers are emerging. Marketers who adapt by learning to collaborate with AI will thrive."
    },
    {
      question: "What is the next frontier in AI marketing personalization?",
      answer: "The next frontier is context-aware, emotionally intelligent personalization across the entire customer journey. This includes multi-modal personalization (spanning text, voice, visual content), adaptive messaging based on emotional state, personalization that respects evolving privacy norms, and ethical frameworks that prevent manipulation while delivering value."
    },
    {
      question: "How can marketers prepare for the emerging Answer Engine Optimization (AEO) paradigm?",
      answer: "To prepare for AEO, marketers should focus on structured data implementation (schema markup), optimize content for conversational queries, develop concise, authoritative answers to common questions, maintain impeccable E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), and begin testing with AI platforms like ChatGPT plugins and Microsoft's Bing Chat."
    }
  ];

  return (
    <PageLayout 
      title="Future Trends: The Road Ahead for Ethical AI Marketing" 
      subtitle="Innovation continues, and ethical considerations must keep pace. Key trends include:"
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/future" />
      </Helmet>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend) => (
          <Card key={trend.id} className="bg-slate-800/80 border-slate-700 hover:border-[#00BFFF] transition-colors group">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-700/50 rounded-md group-hover:bg-[#00BFFF]/20 transition-colors">
                  {trend.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-[#00BFFF] transition-colors">
                  {trend.id}. {trend.title}
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{trend.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="text-slate-300 mt-6 text-center italic">
        Ethics remain the linchpin for sustainable innovation. Responsible AI marketing strategies will evolve with technology.
      </p>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Future AI Marketing Trends FAQ" 
        faqs={futureFaqs} 
        className="mt-12" 
      />
    </PageLayout>
  );
};

export default Future;
