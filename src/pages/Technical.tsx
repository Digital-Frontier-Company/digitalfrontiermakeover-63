
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Technical = () => {
  const location = useLocation();
  
  const technicalFaqs: FAQItem[] = [
    {
      question: "What is the difference between AI and machine learning in marketing?",
      answer: "AI is the broader concept of machines making decisions like humans, while machine learning is a subset focused on algorithms that improve through data. In marketing, AI encompasses all intelligent technologies, while machine learning specifically powers predictive analytics, segmentation, and optimization capabilities."
    },
    {
      question: "How can marketers ensure ethical use of AI technologies?", 
      answer: "Marketers can ensure ethical AI use by implementing robust data governance, practicing transparency about AI usage, conducting regular bias audits, maintaining human oversight of AI systems, respecting privacy preferences, and creating clear ethical guidelines for all AI marketing initiatives."
    },
    {
      question: "What technical skills should marketers develop to work effectively with AI?",
      answer: "While marketers don't need to become data scientists, they should develop basic data literacy, understand how AI systems make decisions, learn to interpret AI insights, know the limitations of AI tools, and cultivate the ability to collaborate effectively with technical teams implementing AI solutions."
    }
  ];

  return (
    <PageLayout 
      title="Technical Breakdown of Marketing AI"
      subtitle="Understanding how AI works in marketing helps identify ethical risks. It's a suite of technologies:"
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://digitalfrontier.app/technical" />
      </Helmet>
      
      {/* Data Crunching & Predictive Analytics */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Data Crunching & Predictive Analytics</h3>
        <p className="text-slate-300">
          AI analyzes big data (customer history, behavior) for insights like churn prediction. 
          Uses machine learning models (regression, neural networks). Ethical risk: Biased input 
          data leads to biased predictions. Need representative data.
        </p>
      </section>
      
      {/* Segmentation & Personalization Algorithms */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Segmentation & Personalization Algorithms</h3>
        <p className="text-slate-300">
          AI creates micro-segments, even of one. Recommendation engines analyze behavior to tailor 
          content/products. Uses clustering, collaborative filtering. Ethical risk: Balancing relevance 
          vs. intrusion; avoiding sensitive attributes without consent.
        </p>
      </section>
      
      {/* Programmatic Advertising & Media Buying */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Programmatic Advertising & Media Buying</h3>
        <p className="text-slate-300">
          AI handles real-time bidding for ad impressions, optimizing campaigns. Uses reinforcement learning. 
          Ethical risks: Opaqueness, potential bias leading to under-serving groups, brand safety issues.
        </p>
      </section>
      
      {/* Generative AI in Creative & Content */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-amber-500">
        <h3 className="text-2xl font-bold text-amber-400 mb-4">Generative AI in Creative & Content</h3>
        <p className="text-slate-300">
          AI creates text, images, video (e.g., GPT-4, DALL-E). Turbocharges content production. 
          Ethical risks: Misinformation ("hallucinations"), authenticity, biased outputs, lack of 
          transparency (should AI content be disclosed?). Requires human oversight.
        </p>
      </section>
      
      {/* Chatbots & Conversational AI */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-cyan-500">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Chatbots & Conversational AI</h3>
        <p className="text-slate-300">
          AI bots handle inquiries, recommend products, run promotions using NLP. Ethical risks: 
          Bots pretending to be human, potential for poor service or bias, accessibility issues.
        </p>
      </section>
      
      {/* Marketing Automation & Decision Engines */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-pink-500">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Marketing Automation & Decision Engines</h3>
        <p className="text-slate-300">
          AI orchestrates customer journeys, making autonomous micro-decisions. Ethical risk: 
          Ensuring decisions align with guidelines, avoiding proxy bias (e.g., location as proxy for race). 
          Accountability and explainability needed.
        </p>
      </section>
      
      <p className="text-slate-300 mt-6 text-center italic">
        Technical literacy helps marketers identify potential ethical issues proactively.
      </p>

      {/* FAQ Section */}
      <FAQSection 
        title="Technical AI Marketing FAQ" 
        faqs={technicalFaqs} 
        className="mt-12" 
      />
    </PageLayout>
  );
};

export default Technical;
