
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, ChevronDown, Bot, Search, TrendingUp, FileText } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { useLocation } from "react-router-dom";

const SearchEngineOptimization: React.FC = () => {
  const location = useLocation();
  const typewriterRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const typewriterMessages = [
    "SEO has evolved remarkably from its early reliance on keyword stuffing and backlink accumulation.",
    "Modern search engines now use AI to understand the intent and context of user queries.",
    "Digital Frontier helps businesses navigate this new era of semantic search through AI-powered SEO strategies."
  ];

  // Timeline data
  const timelineEvents = [
    { year: "2000", position: "10%", title: "Keywords Rule", description: "Early SEO focused on repeating keywords and optimizing meta tags." },
    { year: "2005", position: "25%", title: "Link Building Era", description: "Search engines prioritize quantity and quality of backlinks." },
    { year: "2011", position: "40%", title: "Panda Update", description: "Content quality becomes crucial as Google cracks down on thin content." },
    { year: "2013", position: "55%", title: "Hummingbird", description: "Google begins understanding user intent and context rather than just keywords." },
    { year: "2019", position: "70%", title: "BERT Update", description: "Google's AI better understands natural language and context in queries." },
    { year: "2023", position: "85%", title: "AI Dominance", description: "Multimodal AI understands across languages and media types." }
  ];

  // Interactive FAQ data
  const interactiveFaqs = [
    {
      question: "How has SEO evolved beyond simply using keywords?",
      answer: "In the early days of SEO, ranking highly involved tactics like keyword stuffing and accumulating backlinks. However, search engines like Google have evolved significantly, moving towards semantic search. This means they now focus on understanding the meaning and context behind user queries, rather than just matching exact keywords. Updates like Google's Hummingbird aimed to interpret the intent behind searches, considering factors like synonyms, user history, and location to deliver more relevant results. Today, SEO is about creating comprehensive content that addresses user intent and covers topics in depth, rather than just repeating specific keywords."
    },
    {
      question: "What is semantic search and why is it important for modern SEO?",
      answer: "Semantic search is the ability of search engines to understand the meaning and intent behind user queries, going beyond literal keyword matching. It analyzes the context of the search, user behavior, location, and related terms to determine what the user is truly looking for. This is crucial for modern SEO because search engines now prioritize content that thoroughly answers a user's question and satisfies their intent (informational, navigational, commercial, or transactional). To succeed, SEO strategies must focus on creating content that addresses the breadth and depth of a topic, utilizing related terms and answering common questions."
    },
    {
      question: "How are AI and machine learning reshaping how search engines work?",
      answer: "AI and machine learning are fundamental to the evolution of search engines. Google has integrated AI systems like RankBrain, which interprets the meaning of queries by relating them to concepts, and neural matching, which understands synonyms and related terms. BERT (Bidirectional Encoder Representations from Transformers) significantly improved the understanding of language context by considering all words in a query, including short, often overlooked words. The latest advancement, MUM (Multitask Unified Model), is even more powerful, understanding multiple languages and modalities (text and images) to answer complex, multi-part questions. These AI advancements enable search engines to learn from vast amounts of data, adapt to new queries (15% of which are new daily), and continuously improve the relevance of search results."
    },
    {
      question: "What is Natural Language Processing (NLP) and how does it impact SEO?",
      answer: "Natural Language Processing (NLP) is the field of AI that focuses on enabling computers to understand and process human language. Search engines use NLP to both understand the meaning of user queries and to analyze the content of web pages. NLP helps search engines grasp context, identify entities and their relationships within text, and assess the topical relevance of content. For SEO, this means that content should be written naturally and clearly, prioritizing the language of the target audience. Focusing on thoroughly covering user intent, using synonyms and related phrases, and answering questions directly aligns with how NLP helps search engines understand and value content."
    },
    {
      question: "How is voice search changing the landscape of SEO, particularly for local businesses?",
      answer: "Voice search is rapidly growing, with over half of users now employing it to find local businesses. Voice queries tend to be longer and more conversational than typed searches (e.g., 'What's the weather in New York City this weekend?' vs. 'weather NYC'). This shift necessitates optimizing for long-tail, conversational keywords and frequently asked questions (FAQs). Local businesses need to ensure their Google Business Profile (GBP) (formerly Google My Business) is fully up-to-date and accurate, as voice searches often pull information from these listings. Using schema markup for local business details and FAQs can also help voice assistants retrieve and deliver the correct information."
    }
  ];

  // Original FAQ items for the existing section
  const seoFaqs = [
    {
      question: "How has SEO evolved beyond simply using keywords?",
      answer: "In the early days of SEO, ranking highly involved tactics like keyword stuffing and accumulating backlinks. However, search engines like Google have evolved significantly, moving towards semantic search. This means they now focus on understanding the meaning and context behind user queries, rather than just matching exact keywords."
    },
    {
      question: "What is semantic search and why is it important for modern SEO?",
      answer: "Semantic search is the ability of search engines to understand the meaning and intent behind user queries, going beyond literal keyword matching. It analyzes the context of the search, user behavior, location, and related terms to determine what the user is truly looking for. This is crucial for modern SEO because search engines now prioritize content that thoroughly answers a user's question and satisfies their intent."
    },
    {
      question: "How are artificial intelligence (AI) and machine learning reshaping how search engines work?",
      answer: "AI and machine learning are fundamental to the evolution of search engines. Google has integrated AI systems like RankBrain, which interprets the meaning of queries by relating them to concepts, and neural matching, which understands synonyms and related terms. BERT and MUM advancements enable search engines to learn from vast amounts of data, adapt to new queries, and continuously improve the relevance of search results."
    },
    {
      question: "What is Natural Language Processing (NLP) and how does it impact SEO?",
      answer: "Natural Language Processing (NLP) is the field of AI that focuses on enabling computers to understand and process human language. Search engines use NLP to both understand the meaning of user queries and to analyze the content of web pages. NLP helps search engines grasp context, identify entities and their relationships within text, and assess the topical relevance of content."
    },
    {
      question: "How is voice search changing the landscape of SEO, particularly for local businesses?",
      answer: "Voice search is rapidly growing, with over half of users now employing it to find local businesses. Voice queries tend to be longer and more conversational than typed searches. This shift necessitates optimizing for long-tail, conversational keywords and frequently asked questions (FAQs). Local businesses need to ensure their Google Business Profile is fully up-to-date and accurate."
    },
    {
      question: "What are some practical ways businesses can leverage AI for content optimization and SEO?",
      answer: "AI offers numerous tools and strategies for content optimization and SEO. AI content optimization tools can analyze top-ranking pages to identify subtopics, keywords, content length, and gaps to inform content creation. Content clustering, organizing content around pillar pages and supporting articles, can be aided by AI in identifying missing pieces and relevant connections."
    },
    {
      question: "Can you describe some real-world examples of businesses successfully using AI and semantic strategies for SEO gains?",
      answer: "Several case studies demonstrate the power of AI and semantic SEO. Bankrate used AI to generate articles reviewed by human experts, resulting in significant organic traffic. Rocky Brands utilized an AI-powered SEO platform to identify high-value keywords and optimize product pages, leading to increased search revenue. STACK Media employed AI for competitor analysis, restructuring content and achieving significant rise in website visits."
    },
    {
      question: "What are some actionable steps local businesses can take immediately to leverage semantic search and AI in their SEO efforts?",
      answer: "Local businesses can conduct an SEO audit using AI tools, optimize their Google Business Profile, implement local schema markup, create topic clusters around main services, leverage AI for content and keyword research, enhance site experience by improving page speed and mobile usability, focus on building E-A-T (Expertise, Authoritativeness, Trustworthiness), and monitor, measure, and iterate on their SEO efforts."
    }
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 50;
    const deleteSpeed = 25;
    const pauseTime = 2000;

    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const fullText = typewriterMessages[currentIndex];
      
      if (isTyping) {
        if (typewriterText.length < fullText.length) {
          setTypewriterText(fullText.slice(0, typewriterText.length + 1));
          timeout = setTimeout(typeText, typeSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
            typeText();
          }, pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
          timeout = setTimeout(typeText, deleteSpeed);
        } else {
          setCurrentIndex((prev) => (prev + 1) % typewriterMessages.length);
          setIsTyping(true);
          timeout = setTimeout(typeText, typeSpeed);
        }
      }
    };

    timeout = setTimeout(typeText, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isTyping]);

  return (
    <PageLayout 
      title="Search Engine Optimization: Complete SEO Guide with AI-Powered Strategies & Proven Techniques | Expert Implementation"
      subtitle="Master modern SEO with expert AI-powered strategies, proven semantic search techniques, and actionable tactics for dominating search results"
      currentPath={location.pathname}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Search Engine Optimization - The AI-Powered Semantic Evolution of SEO",
            "description": "Learn how modern SEO has evolved beyond keywords to embrace semantic search and AI-powered strategies.",
            "author": {
              "@type": "Organization",
              "name": "Digital Frontier Company",
              "url": "https://digitalfrontier.app"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Digital Frontier Company",
              "logo": {
                "@type": "ImageObject",
                "url": "https://digitalfrontier.app/lovable-uploads/c9d38052-a83f-47d4-ab89-a00c237a6ff9.png"
              }
            },
            "datePublished": "2025-05-03T12:00:00+00:00"
          })}
        </script>
      </Helmet>
      
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400 opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-cyan-400 opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 rounded-full bg-cyan-500 opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full bg-cyan-300 opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="space-y-16 relative z-10">
        {/* Hero Typewriter Section */}
        <section className="text-center mb-12 relative">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-800/30 shadow-lg max-w-4xl mx-auto">
            <div 
              ref={typewriterRef}
              className="text-lg md:text-xl h-24 overflow-y-auto text-cyan-100 min-h-[6rem] flex items-center justify-center"
            >
              {typewriterText}
              <span className="ml-1 animate-pulse text-cyan-400">|</span>
            </div>
            <p className="text-center text-slate-400 mt-4 text-sm">
              How artificial intelligence is transforming search engine optimization
            </p>
          </div>
        </section>

        {/* Dashboard Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                AI in SEO Adoption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-300 mb-2">82%</div>
              <p className="text-slate-400 text-sm">Businesses using AI for SEO strategies in 2023</p>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Impact of AI Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-300 mb-2">72%</div>
              <p className="text-slate-400 text-sm">Average improvement in search rankings</p>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Voice Search Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-300 mb-2">62%</div>
              <p className="text-slate-400 text-sm">Percentage of searches expected to be voice by 2024</p>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Timeline */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400 text-shadow-lg">The Evolution of SEO</h2>
          
          <div className="relative h-64 my-12 max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-cyan-400/30 transform -translate-y-1/2"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className="absolute top-1/2 w-6 h-6 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300 group"
                style={{left: event.position}}
              >
                {index === timelineEvents.length - 1 && (
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse"></div>
                )}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 bg-slate-800/95 backdrop-blur-sm p-4 rounded-lg border border-cyan-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-xl">
                  <h4 className="font-bold text-cyan-400 mb-2">{event.year}: {event.title}</h4>
                  <p className="text-slate-300 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-slate-400">
              <div className="flex justify-between max-w-6xl mx-auto">
                <span>1999</span>
                <span>2005</span>
                <span>2011</span>
                <span>2015</span>
                <span>2019</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Key Questions About AI & Semantic SEO</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {interactiveFaqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 cursor-pointer hover:border-cyan-600/50 transition-all duration-300"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-cyan-300">{faq.question}</h3>
                  <ChevronDown 
                    className={`text-cyan-400 text-2xl transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 -mt-4">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools Showcase */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">AI Tools Transforming SEO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                  <Search className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">Keyword Research</h3>
                <p className="text-sm text-slate-300">AI analyzes search patterns to uncover hidden keyword opportunities based on semantic relationships.</p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                  <FileText className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">Content Optimization</h3>
                <p className="text-sm text-slate-300">Natural Language Processing evaluates content for semantic completeness, readability, and intent alignment.</p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                  <TrendingUp className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">Performance Tracking</h3>
                <p className="text-sm text-slate-300">Machine learning models predict ranking potential and identify content gaps before your competitors do.</p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-800 bg-slate-900/80 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                  <Bot className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">Content Generation</h3>
                <p className="text-sm text-slate-300">AI-assisted writing tools help scale content creation while maintaining quality and semantic richness.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Original Content Section */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="bg-blue-900/30 text-cyan-400 border-cyan-500 px-3 py-1">
              SEO Evolution  
            </Badge>
          </div>
          
          <p className="text-slate-300 mb-8">
            SEO has evolved remarkably from its early reliance on keyword stuffing and backlink accumulation. Modern search engines, 
            particularly Google, have embraced <span className="text-cyan-400 font-semibold">semantic search</span>, which prioritizes 
            understanding the intent and context of user queries. This shift has led to significant changes in SEO strategies, as 
            algorithms now take into account factors like synonyms, user history, and geographical context to deliver more relevant search results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">AI-Enhanced Keyword Research</h3>
              <p className="text-slate-300 text-sm">
                Our proprietary AI systems analyze search patterns, competitor strategies, and user intent to identify high-value keywords 
                that your potential customers are actually using.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Data-Driven Strategy Development</h3>
              <p className="text-slate-300 text-sm">
                We don't rely on guesswork. Our approach combines AI analysis with human expertise to create comprehensive SEO strategies 
                tailored to your specific industry, audience, and business goals.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Technical SEO Excellence</h3>
              <p className="text-slate-300 text-sm">
                Our technical experts ensure your website meets and exceeds search engine requirements, from site architecture and page speed 
                to mobile optimization and structured data implementation.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-800/30 backdrop-blur-sm text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Content Optimization at Scale</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Using advanced Natural Language Processing, we optimize existing content and develop new material that satisfies both 
              search algorithms and user needs, driving both rankings and engagement.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-8 rounded-lg bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-800/50 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Ready for the AI-Powered SEO Revolution?</h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Contact us to transform your digital strategy with cutting-edge semantic SEO techniques.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-6 px-10 rounded-lg shadow-lg flex items-center gap-2 group transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl mx-auto">
            <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
            <span>Buy SEO Services</span>
          </Button>
        </section>
      </div>
        
      {/* FAQ Section */}
      <div className="mt-16">
        <FAQSection 
          title="Search Engine Optimization FAQs" 
          faqs={seoFaqs}
          structured={true}
        />
      </div>

      {/* Floating AI Element */}
      <div className="fixed bottom-8 right-8">
        <div className="w-16 h-16 rounded-full bg-cyan-600/20 animate-pulse flex items-center justify-center cursor-pointer hover:bg-cyan-600/30 transition-colors duration-300">
          <div className="w-10 h-10 rounded-full bg-cyan-600/30 animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-cyan-600/50 flex items-center justify-center">
              <span className="text-cyan-300 text-xs font-bold">AI</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SearchEngineOptimization;
