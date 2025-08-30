import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { generateEnhancedFAQSchema } from "@/lib/utils";

export interface EnhancedFAQItem {
  question: string;
  answer: string;
  category?: string;
  relatedQuestions?: string[];
  speakable?: boolean;
}

interface AIOptimizedFAQProps {
  title?: string;
  faqs: EnhancedFAQItem[];
  className?: string;
  structured?: boolean;
  voiceOptimized?: boolean;
}

const AIOptimizedFAQ: React.FC<AIOptimizedFAQProps> = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "",
  structured = true,
  voiceOptimized = true
}) => {
  // Generate AI-optimized FAQ schema
  const faqSchema = generateEnhancedFAQSchema(faqs);

  return (
    <section className={`py-12 ${className}`} itemScope itemType="https://schema.org/FAQPage">
      {structured && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}
      
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-soft-white">{title}</h2>
        )}

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-lg font-medium py-5 text-left hover:text-primary"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className={`text-muted-foreground pb-5 text-base faq-answer ${
                    voiceOptimized && faq.speakable ? 'speakable-content' : ''
                  }`}
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text">
                    {faq.answer}
                  </div>
                  
                  {/* Related questions for AI understanding */}
                  {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="font-medium">Related questions:</p>
                      <ul className="list-disc list-inside mt-2">
                        {faq.relatedQuestions.map((relatedQ, idx) => (
                          <li key={idx} className="mb-1">{relatedQ}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Voice search optimization styles */}
      <style>
        {`
          .speakable-content {
            speak: normal;
            speak-punctuation: none;
            voice-rate: medium;
          }
        `}
      </style>
    </section>
  );
};

export default AIOptimizedFAQ;