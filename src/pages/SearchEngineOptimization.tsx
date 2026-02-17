
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Bot, Search, TrendingUp, FileText } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { useLocation } from "react-router-dom";

const SearchEngineOptimization: React.FC = () => {
  
  const location = useLocation();
  const typewriterRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  
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

  // Consolidated FAQ data
  const interactiveFaqs = [
    {
      question: "How has SEO evolved beyond simply using keywords?",
      answer: "Search engines have evolved significantly, moving towards semantic search that prioritizes understanding the meaning and context behind user queries. Updates like Hummingbird interpret intent using synonyms, user history, and location. Today, SEO is about creating comprehensive content that addresses user intent and covers topics in depth."
    },
    {
      question: "What is semantic search and why is it important?",
      answer: "Semantic search is the ability of search engines to understand the meaning and intent behind user queries, going beyond literal keyword matching. It analyzes the context of the search, user behavior, location, and related terms. This is crucial because search engines now prioritize content that thoroughly answers a user's question and satisfies their intent."
    },
    {
      question: "How are AI and machine learning reshaping search engines?",
      answer: "Google has integrated AI systems like RankBrain, BERT, and MUM that interpret query meaning, understand language context, and process multiple languages and modalities. These advancements enable search engines to adapt to new queries (15% of which are new daily) and continuously improve result relevance."
    },
    {
      question: "What is NLP and how does it impact SEO?",
      answer: "Natural Language Processing helps search engines understand both user queries and web page content. NLP grasps context, identifies entities, and assesses topical relevance. For SEO, content should be written naturally, using synonyms and related phrases, and answering questions directly."
    },
    {
      question: "How is voice search changing SEO for local businesses?",
      answer: "Voice search is rapidly growing, with over half of users employing it to find local businesses. Voice queries are longer and more conversational. Local businesses should optimize for long-tail conversational keywords, keep their Google Business Profile accurate, and implement FAQ schema markup."
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
                "url": "/lovable-uploads/c9d38052-a83f-47d4-ab89-a00c237a6ff9.png"
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
          <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400 text-shadow-lg">The Evolution of SEO</h2>
          <h3 className="text-xl font-semibold mb-12 text-center text-slate-300">From Keywords to AI-Powered Understanding</h3>
          
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


        {/* AI Tools Showcase */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400">AI Tools Transforming SEO</h2>
          <h3 className="text-xl font-semibold mb-12 text-center text-slate-300">How Modern AI Powers Search Optimization</h3>
          
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
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">How SEO Has Transformed with AI</h2>
          <h3 className="text-xl font-semibold mb-4 text-slate-200">From Keywords to Semantic Understanding</h3>
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

          <h3 className="text-2xl font-semibold mb-6 text-slate-200">Our AI-Powered SEO Services</h3>

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
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Content Optimization at Scale</h3>
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
          faqs={interactiveFaqs}
        />
      </div>
    </PageLayout>
  );
};

export default SearchEngineOptimization;
