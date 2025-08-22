
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
  structured?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "",
  structured = true
}) => {
  // Generate JSON-LD schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-12 ${className}`}>
      {structured && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}
      
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">{title}</h2>
        )}

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-700">
                <AccordionTrigger className="text-lg font-medium py-5 text-left hover:text-purple-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-5 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
