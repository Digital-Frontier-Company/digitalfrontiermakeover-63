import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, TrendingUp, Target, Zap, Award, Building, Star, Music, Truck, Crown } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AIOptimizedFAQ, { EnhancedFAQItem } from "@/components/schema/AIOptimizedFAQ";
import SchemaManager from "@/components/schema/SchemaManager";
import LocationSchemas from "@/components/schema/LocationSchemas";

const MemphisDigitalMarketing = () => {
  const location = useLocation();

  const memphisFaqs: EnhancedFAQItem[] = [
    {
      question: "Why choose a Memphis-based AI marketing agency?",
      answer: "Local Memphis businesses benefit from our deep understanding of the Mid-South market, direct communication, and ability to meet in person. We understand Memphis business culture, local competition, and regional customer behavior patterns that national agencies miss.",
      category: "Local Expertise",
      relatedQuestions: [
        "What makes Memphis marketing different from other cities?",
        "How do you handle both B2B and tourism marketing in Memphis?"
      ],
      speakable: true
    },
    {
      question: "What areas in Memphis do you serve?",
      answer: "We serve all of Greater Memphis including Collierville, Germantown, Bartlett, Cordova, East Memphis, Midtown, Downtown Memphis, and surrounding Shelby County areas. We also work with businesses in West TN, North MS, and Eastern Arkansas.",
      category: "Service Areas",
      relatedQuestions: [
        "Do you work with businesses in Collierville?",
        "Can you help Germantown businesses with digital marketing?"
      ]
    },
    {
      question: "How does AI marketing work for Memphis businesses?",
      answer: "AI marketing uses artificial intelligence to optimize your content for voice search, featured snippets, and AI-powered search results. This is crucial for Memphis businesses as more customers use voice search and AI assistants to find local services and products.",
      category: "AI Technology",
      relatedQuestions: [
        "What is Answer Engine Optimization?",
        "How does voice search affect Memphis businesses?"
      ],
      speakable: true
    },
    {
      question: "What makes your Memphis AI marketing different from traditional marketing?",
      answer: "Traditional marketing focuses on broad reach. Our AI marketing targets specific customer questions and optimizes for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), ensuring Memphis businesses appear when customers ask AI assistants for recommendations.",
      category: "Strategy Differences"
    },
    {
      question: "How quickly can Memphis businesses see AI marketing results?",
      answer: "Memphis businesses typically see improvements in AI citations and voice search visibility within 60-90 days. Featured snippet appearances often increase within 30-45 days. We provide monthly reports showing progress in local search rankings and AI visibility.",
      category: "Results & Timeline",
      relatedQuestions: [
        "What's the typical ROI for Memphis digital marketing campaigns?",
        "How do you measure success for local Memphis businesses?"
      ]
    }
  ];

  const services = [
    {
      title: "AI Overviews Optimization",
      description: "Get your Memphis business featured in Google's AI Overviews and voice search results",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Local SEO Memphis",
      description: "Dominate Memphis Google My Business and local pack rankings",
      icon: <MapPin className="w-6 h-6 text-green-400" />
    },
    {
      title: "Answer Engine Optimization",
      description: "Optimize content to be cited by ChatGPT, Perplexity, and other AI engines",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Memphis Content Strategy", 
      description: "Content marketing strategies tailored for Memphis B2B and local businesses",
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />
    }
  ];

  const memphisStats = [
    { label: "Memphis Businesses Served", value: "150+" },
    { label: "Average Lead Increase", value: "240%" },
    { label: "Local Pack Rankings", value: "Top 3" },
    { label: "Client Retention Rate", value: "87%" }
  ];

  return (
    <PageLayout
      title="Memphis AI Marketing Agency | Digital Marketing Services Collierville, Germantown | Digital Frontier"
      subtitle="Leading Memphis AI marketing agency serving Collierville, Germantown, and Greater Memphis area with proven AI Overviews optimization and local SEO strategies"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-24"
      modifiedDate="2024-12-24"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving Greater Memphis Area
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Memphis AI Marketing Agency
            <span className="block text-blue-400">Stop Guessing, Start Growing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            We're the only Memphis marketing agency specializing in AI Overviews optimization and Answer Engine Optimization (AEO). 
            Get your Collierville, Germantown, or Memphis business featured in ChatGPT responses and Google AI search results.
          </p>
          
          {/* Memphis Service Areas */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Memphis', 'Collierville', 'Germantown', 'Bartlett', 'Cordova', 'East Memphis'].map((area) => (
              <Badge key={area} variant="outline" className="text-blue-300 border-blue-300">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        <LazyImage
          src="/lovable-uploads/e4653f71-faaf-473e-baac-648ae67fce16.png"
          alt="Beale Street Memphis - Home of the Blues and vibrant local business district"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-12"
          displayWidth={800}
          displayHeight={400}
        />
      </section>

      {/* Memphis Heritage Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-3">
              <Music className="w-8 h-8 text-blue-400" />
              Memphis: Where Music Meets Marketing
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              From the birthplace of rock 'n' roll to the home of the blues, Memphis has always been about making noise that matters. 
              We bring that same energy to your digital marketing—bold, authentic, and impossible to ignore.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Music className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Beale Street Energy</h3>
                <p className="text-slate-400">We bring the same passion that made Memphis famous to your marketing campaigns</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">FedEx Innovation</h3>
                <p className="text-slate-400">Like Memphis's logistics leaders, we deliver results efficiently and reliably</p>
              </div>
              <div className="text-center">
                <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Graceland Legacy</h3>
                <p className="text-slate-400">Building legendary brands that stand the test of time, just like the King</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Memphis Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memphisStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Memphis AI Marketing Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 hover:border-blue-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Memphis Agency */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white mb-4">
              Why Choose a Memphis-Based AI Marketing Agency?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Local Market Expertise
                </h3>
                <p className="text-slate-300">
                  We understand Memphis business culture, local competition, and Mid-South customer behavior. 
                  Our strategies are tailored for Tennessee businesses and regional market dynamics.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Personal Relationships
                </h3>
                <p className="text-slate-300">
                  Meet your marketing team in person. Attend strategy sessions at our office. 
                  Build real relationships with people who understand your Memphis business goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Same Time Zone Communication
                </h3>
                <p className="text-slate-300">
                  Central Time Zone means real-time communication. No waiting for responses from agencies 
                  in different time zones. Quick pivots and immediate support when you need it.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Memphis Success Stories
                </h3>
                <p className="text-slate-300">
                  Proven track record with Memphis businesses across industries. We know what works 
                  in this market and have the case studies to prove it.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <Card className="bg-blue-900/20 border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Ready to Dominate Memphis AI Search Results?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Let's discuss how AI marketing can transform your Memphis business. 
              Schedule a free strategy call to learn about our proven AEO and local SEO strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Serving Greater Memphis, TN Area</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>Local Memphis Support Team</span>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Free Memphis Strategy Call →
            </a>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <AIOptimizedFAQ
        title="Memphis AI Marketing FAQ"
        faqs={memphisFaqs}
        className="mb-16"
        voiceOptimized={true}
      />

      {/* Advanced Schema Management */}
      <SchemaManager
        businessName="Digital Frontier Company"
        city="Memphis"
        state="Tennessee"
        latitude={35.1495}
        longitude={-90.0490}
        phoneNumber="+1-901-555-0123"
        services={services.map(s => s.title)}
        priceRange="$$$"
        operatingHours={["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"]}
        serviceName="Memphis Digital Marketing Services"
        serviceDescription="AI-powered digital marketing services specifically designed for Memphis, Tennessee businesses"
        serviceType="Digital Marketing"
        serviceOffers={services.map(s => ({
          name: s.title,
          description: s.description,
          price: "Contact for pricing"
        }))}
        faqs={memphisFaqs}
        reviewsItemName="Memphis Digital Marketing Services"
        reviewsRating={4.9}
        reviewsCount={127}
        reviews={[
          {
            author: "Sarah Johnson",
            rating: 5,
            text: "Digital Frontier transformed our Memphis restaurant's online presence. We're now the top result for 'best BBQ Memphis' and our reservations have doubled.",
            datePublished: "2024-01-15"
          },
          {
            author: "Marcus Williams",
            rating: 5,
            text: "As a Memphis logistics company, we needed marketing that understood our B2B audience. Digital Frontier delivered beyond expectations.",
            datePublished: "2024-02-01"
          }
        ]}
      />

      <LocationSchemas
        city="Memphis"
        state="Tennessee" 
        latitude={35.1495}
        longitude={-90.0490}
        services={services.map(s => s.title)}
        phoneNumber="+1-901-555-0123"
      />
    </PageLayout>
  );
};

export default MemphisDigitalMarketing;