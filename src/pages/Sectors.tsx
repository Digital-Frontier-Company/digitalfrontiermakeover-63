
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Banknote, HeartPulse, MessageSquare, Briefcase } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Sectors = () => {
  const location = useLocation();
  
  const sectors = [
    {
      id: 1,
      title: "Retail & E-Commerce",
      uses: "Personalization, recommendations, dynamic pricing, in-store tracking.",
      challenges: "Price discrimination concerns, fairness of dynamic pricing, privacy intrusion (tracking), filter bubbles limiting choice, avoiding stereotypes.",
      practices: "Transparency on pricing/recommendations, opt-outs, careful consent for tracking, avoiding marginalization of customer segments.",
      icon: <ShoppingCart className="h-6 w-6 text-rose-400" />
    },
    {
      id: 2,
      title: "Financial Services & Fintech",
      uses: "Targeting offers (loans, cards), lead scoring, personalized app experiences.",
      challenges: "High risk of algorithmic bias reinforcing inequality (violating fair lending laws), transparency in recommendations (disclosing commissions), privacy of sensitive financial data.",
      practices: "Rigorous fairness testing of models, compliance with financial regulations (ECOA), strong data security, using AI for inclusion (finding underbanked creditworthy customers).",
      icon: <Banknote className="h-6 w-6 text-green-400" />
    },
    {
      id: 3,
      title: "Healthcare & Pharmaceuticals",
      uses: "Targeting health content/ads, tailoring messages (doctors vs. patients).",
      challenges: "Extreme sensitivity of health data (HIPAA), obtaining explicit consent, risk of misinformation from generative AI, fairness in advertising treatments (not excluding based on perceived ability to pay), avoiding exploitative targeting.",
      practices: "Strict adherence to privacy laws, medical-legal review of all AI content, focus on education over pushiness, prioritizing patient well-being.",
      icon: <HeartPulse className="h-6 w-6 text-red-400" />
    },
    {
      id: 4,
      title: "Social Media & Ad Tech Platforms",
      uses: "Platforms (Google, Meta) provide the AI ad ecosystem, algorithms decide ad delivery.",
      challenges: "Platform responsibility for preventing discriminatory targeting (housing, jobs, credit), political ad microtargeting impact, brand safety (ads near harmful content), content moderation failures.",
      practices: "Platforms implementing fairness systems (Meta's VRS), restricting sensitive targeting options, brand safety tools (GARM), advertiser use of platform ethical features (Special Ad Categories).",
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />
    },
    {
      id: 5,
      title: "B2B and Professional Services",
      uses: "Targeting prospects, lead scoring, personalized outreach.",
      challenges: "Less personal data but still risks (denying opportunities based on inferred business health), avoiding spam, ensuring accuracy in communications (contracts involved).",
      practices: "Focus on accuracy and honesty, maintaining human touch in relationships, respecting communication preferences.",
      icon: <Briefcase className="h-6 w-6 text-amber-400" />
    }
  ];

  const sectorFaqs: FAQItem[] = [
    {
      question: "How do ethical AI challenges differ between B2B and B2C marketing?",
      answer: "In B2B marketing, ethical challenges focus more on accuracy of business predictions, preventing spam, maintaining relationship authenticity, and data security between organizations. B2C marketing faces more intense challenges around personal data privacy, preventing manipulation of individual consumers, targeting vulnerable populations, and creating filter bubbles. B2B typically deals with less sensitive personal data but higher stakes business decisions."
    },
    {
      question: "What are the unique ethical considerations when using AI for healthcare marketing?",
      answer: "Healthcare marketing involves extremely sensitive personal data protected by regulations like HIPAA. Ethical considerations include: avoiding exploitation of vulnerable patients, ensuring medical accuracy in AI-generated content, maintaining clear boundaries between educational content and promotion, obtaining explicit consent for personalization, and ensuring fairness in how treatments are marketed across different demographic groups."
    },
    {
      question: "How can retailers balance personalization benefits with privacy concerns?",
      answer: "Retailers can balance personalization and privacy by: implementing clear opt-in/opt-out mechanisms, being transparent about what data is collected and how it's used, anonymizing data where possible, focusing on contextual rather than persistent tracking, using differential privacy techniques, providing genuine value in exchange for data sharing, and creating ethical guidelines specifically for personalization practices."
    }
  ];

  return (
    <PageLayout 
      title="Sector Spotlights: AI Ethics in Action Across Industries"
      subtitle="AI marketing ethics vary by industry context. Here are key considerations:"
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/sectors" />
      </Helmet>
      
      <div className="space-y-6">
        {sectors.map((sector) => (
          <Card key={sector.id} className="bg-slate-800/80 border-slate-700 hover:border-[#00BFFF] transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-700/50 rounded-md">
                  {sector.icon}
                </div>
                <CardTitle className="text-xl text-slate-100">{sector.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-semibold text-[#00BFFF]">Uses:</span>
                <span className="text-slate-300 ml-2">{sector.uses}</span>
              </div>
              <div>
                <span className="font-semibold text-[#00BFFF]">Ethical Challenges:</span>
                <span className="text-slate-300 ml-2">{sector.challenges}</span>
              </div>
              <div>
                <span className="font-semibold text-[#00BFFF]">Best Practices:</span>
                <span className="text-slate-300 ml-2">{sector.practices}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="text-slate-300 mt-6 text-center italic">
        Context matters, but human oversight and ethical judgment are vital across all sectors.
      </p>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Industry-Specific AI Ethics FAQ" 
        faqs={sectorFaqs} 
        className="mt-12" 
      />
    </PageLayout>
  );
};

export default Sectors;
