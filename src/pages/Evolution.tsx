
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Evolution = () => {
  const location = useLocation();

  const evolutionFaqs: FAQItem[] = [
    {
      question: "How has AI's role in marketing evolved over the last decade?",
      answer: "AI's role has evolved from basic automation and simple recommendation systems to sophisticated predictive analytics, personalized customer journeys, AI-generated content, and conversational interfaces. The ethical considerations have similarly evolved from basic privacy concerns to complex issues involving bias, transparency, data rights, and societal impacts."
    },
    {
      question: "What was the Cambridge Analytica scandal and why was it a turning point?",
      answer: "The Cambridge Analytica scandal (2018) involved the harvesting of millions of Facebook users' data without proper consent for political microtargeting. It was a turning point because it highlighted the ethical risks of advanced data practices, eroded public trust in data-driven marketing, and accelerated privacy regulations like GDPR and CCPA."
    },
    {
      question: "What can marketers learn from the historical evolution of AI ethics?",
      answer: "The key lesson is that ethical considerations often lag behind technological capabilities. Proactive ethical frameworks are better than reactive regulations. Also, transparency builds trust—as AI becomes more powerful, being open about its use becomes more important. Finally, ethical AI is becoming a competitive advantage as consumers grow more AI-aware."
    }
  ];

  return (
    <PageLayout 
      title="Historical Evolution of AI in Marketing"
      subtitle="Understanding the history highlights why ethical considerations are critical today."
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/evolution" />
      </Helmet>
      
      {/* Timeline Section */}
      <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Timeline of AI & Marketing Milestones vs. Ethical Turning Points</h3>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="bg-slate-800 text-slate-200 font-bold w-1/5">Era</TableHead>
                <TableHead className="bg-slate-800 text-slate-200 font-bold w-2/5">AI & Marketing Milestones</TableHead>
                <TableHead className="bg-slate-800 text-slate-200 font-bold w-2/5">Ethical Turning Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="font-semibold text-blue-300">2010s</TableCell>
                <TableCell className="text-slate-300">Rise of Big Data, ML for basic targeting/recommendations. Programmatic ads emerge.</TableCell>
                <TableCell className="text-slate-300">Early privacy/profiling concerns (e.g., Target pregnancy prediction).</TableCell>
              </TableRow>
              <TableRow className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="font-semibold text-purple-300">2016-2018</TableCell>
                <TableCell className="text-slate-300">Sophisticated social media algorithms, AI campaign optimization common.</TableCell>
                <TableCell className="text-slate-300">Cambridge Analytica scandal (2018) spotlights data misuse & microtargeting risks.</TableCell>
              </TableRow>
              <TableRow className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="font-semibold text-green-300">2019-2021</TableCell>
                <TableCell className="text-slate-300">Personalization 2.0 (dynamic pricing, chatbots). Pandemic accelerates AI adoption. A/B testing AI mainstream.</TableCell>
                <TableCell className="text-slate-300">GDPR (2018) enforces consent. Bias issues emerge (e.g., discriminatory ad targeting). Responsible AI gains traction.</TableCell>
              </TableRow>
              <TableRow className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="font-semibold text-amber-300">2022-2023</TableCell>
                <TableCell className="text-slate-300">Generative AI (GPT, DALL-E) explodes. Marketers experiment with AI content/influencers.</TableCell>
                <TableCell className="text-slate-300">Deepfakes blur reality. AI ad bias becomes hot topic. Industry ethics codes published. Govts draft AI laws (EU AI Act).</TableCell>
              </TableRow>
              <TableRow className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="font-semibold text-cyan-300">2025 (Today)</TableCell>
                <TableCell className="text-slate-300">AI deeply embedded in marketing stacks. Advanced AI optimizes entire funnel.</TableCell>
                <TableCell className="text-slate-300">High-stakes ethics: Consumer skepticism. Global regulations imminent. Governance frameworks essential.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      
      <p className="text-slate-300 mt-6 text-center italic">
        As AI's role grew, so did calls for ethical guardrails to protect consumer rights and societal values.
      </p>
      
      {/* FAQ Section */}
      <FAQSection 
        title="AI Marketing Evolution FAQ" 
        faqs={evolutionFaqs} 
        className="mt-12" 
      />
    </PageLayout>
  );
};

export default Evolution;
