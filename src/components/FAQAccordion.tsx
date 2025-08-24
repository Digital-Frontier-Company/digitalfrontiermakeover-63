import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes your AI marketing different from other agencies?",
    answer: "We don't just use AI tools—we build custom AI systems for each client. Our proprietary Answer Engine Optimization (AEO) methodology positions you to dominate AI-powered search results, giving you a massive first-mover advantage that most agencies can't replicate."
  },
  {
    question: "How quickly can we expect to see results?",
    answer: "Most clients see initial improvements within 30 days, with significant results by 90 days. However, our AI systems continuously learn and optimize, meaning your results compound over time. We focus on sustainable, long-term growth rather than quick fixes."
  },
  {
    question: "Do you work with companies outside of B2B tech?",
    answer: "While our sweet spot is B2B tech companies, we work with any business that values data-driven marketing and measurable results. Our methodology adapts to different industries, though we maintain our focus on companies ready to invest seriously in growth."
  },
  {
    question: "What's included in your Answer Engine Optimization service?",
    answer: "AEO includes optimizing your content for AI search engines like ChatGPT, Claude, and voice assistants. We restructure your content for featured snippets, implement schema markup, create AI-friendly content formats, and position your brand as the definitive answer to industry questions."
  },
  {
    question: "How do you measure and report on campaign performance?",
    answer: "We provide real-time dashboards tracking everything from traffic and leads to pipeline value and ROI. Our reports focus on business metrics that matter—not vanity metrics. You'll have full visibility into how your investment translates to revenue."
  },
  {
    question: "What's the minimum commitment to work with you?",
    answer: "Our project-based engagements start at 30 days for our Growth Sprint. For ongoing partnerships, we typically recommend at least 6 months to see transformational results, though many clients work with us for years as their strategic growth partner."
  },
  {
    question: "Can you integrate with our existing marketing stack?",
    answer: "Absolutely. We integrate with HubSpot, Salesforce, Marketo, and most major CRM/marketing automation platforms. Our AI systems can enhance your existing tools rather than replace them, maximizing your current technology investments."
  },
  {
    question: "What if our industry is highly regulated or competitive?",
    answer: "Regulated and competitive industries are where our methodology shines brightest. We've helped companies in finance, healthcare, and enterprise software dominate their categories by being first to market with AI-optimized content and strategic positioning."
  }
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-soft-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-lg text-soft-white/70">
            Everything you need to know about working with Digital Frontier
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-electric-azure/50"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-electric-azure/5 transition-colors duration-300"
              >
                <h3 className="font-poppins font-medium text-lg text-soft-white pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-electric-azure flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="font-inter text-soft-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-soft-white/60 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-electric-azure hover:text-electric-azure/80 font-medium"
          >
            Get answers from our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;