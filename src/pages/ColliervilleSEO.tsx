import React from "react";
import { useLocation } from "react-router-dom"; 
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, TrendingUp, Target, Zap, Award, Building, Star } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const ColliervilleSEO = () => {
  const location = useLocation();

  const colliervilleFaqs: FAQItem[] = [
    {
      question: "Why choose a Collierville-based SEO company?",
      answer: "Local Collierville businesses benefit from our deep understanding of the Mid-South market, Shelby County demographics, and Greater Memphis competition. We understand local search patterns, seasonal trends, and what Collierville customers are actually searching for."
    },
    {
      question: "What SEO services do you provide in Collierville?",
      answer: "We provide comprehensive SEO services including AI Overviews optimization, local SEO, Google My Business optimization, Answer Engine Optimization (AEO), website optimization, and ongoing SEO management specifically tailored for Collierville businesses."
    },
    {
      question: "How long does SEO take to work for Collierville businesses?",
      answer: "Collierville businesses typically see initial improvements in local search rankings within 30-60 days. Significant organic traffic growth usually occurs within 90-120 days. Our Memphis area clients average 180% traffic increase within 6 months."
    },
    {
      question: "Do you work with other Shelby County businesses?",
      answer: "Yes! We serve businesses throughout Shelby County including Memphis, Germantown, Bartlett, Cordova, Lakeland, and Arlington. Our local expertise extends across the entire Greater Memphis metropolitan area."
    },
    {
      question: "What makes your Collierville SEO different?",
      answer: "We specialize in Answer Engine Optimization (AEO) and AI Overviews optimization - getting Collierville businesses featured in ChatGPT responses, Google AI search results, and voice search. This is cutting-edge SEO that most agencies don't offer."
    }
  ];

  const services = [
    {
      title: "Local SEO Collierville",
      description: "Dominate Collierville Google My Business listings and local pack rankings",
      icon: <MapPin className="w-6 h-6 text-green-400" />
    },
    {
      title: "AI Overviews Optimization",
      description: "Get your Collierville business featured in Google's AI search results",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Answer Engine Optimization",
      description: "Optimize to be cited by ChatGPT and AI assistants for local queries",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Website SEO Optimization", 
      description: "Technical SEO, content optimization, and site speed improvements",
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />
    }
  ];

  const colliervilleStats = [
    { label: "Collierville Businesses Served", value: "45+" },
    { label: "Average Ranking Improvement", value: "340%" },
    { label: "Local Pack Rankings", value: "Top 3" },
    { label: "Avg. Traffic Increase", value: "285%" }
  ];

  const colliervilleIndustries = [
    "Real Estate Agents",
    "Healthcare Providers", 
    "Legal Services",
    "Home Services",
    "Restaurants",
    "Retail Businesses",
    "Professional Services",
    "Auto Services"
  ];

  return (
    <PageLayout
      title="Collierville SEO Services | Local SEO Company Shelby County TN | Digital Frontier"
      subtitle="Leading Collierville SEO company specializing in local search optimization, AI Overviews optimization, and proven strategies for Shelby County businesses"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-24"
      modifiedDate="2024-12-24"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Building className="w-4 h-4 mr-2" />
            Proudly Serving Collierville, Tennessee
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Collierville SEO Services
            <span className="block text-blue-400">Dominate Local Search Results</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Digital Frontier is the leading SEO company serving Collierville, TN. We specialize in local SEO, 
            AI Overviews optimization, and Answer Engine Optimization to help Collierville businesses rank #1 
            in Google search results and get found by local customers.
          </p>
          
          {/* Collierville Area Coverage */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Collierville', 'Germantown', 'Bartlett', 'Cordova', 'Memphis', 'Lakeland'].map((area) => (
              <Badge key={area} variant="outline" className="text-blue-300 border-blue-300">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        <LazyImage
          src="/lovable-uploads/783ff8d4-b039-4c59-bf19-1ecdb0b9fb9a.png"
          alt="Collierville SEO Services - Digital Frontier serving Shelby County businesses"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-12"
          displayWidth={800}
          displayHeight={400}
        />
      </section>

      {/* Collierville Local Connection */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardContent className="p-8">
            <LazyImage
              src="/lovable-uploads/fb2060aa-aaca-4d19-979f-1a9cc9129e41.png"
              alt="Collierville Tennessee Historic Mural - Showcasing local landmarks and community pride"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-xl mb-6"
              displayWidth={900}
              displayHeight={400}
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Proud to Serve Collierville, Tennessee
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                As a local digital marketing agency, we understand Collierville's unique character, from historic 
                downtown landmarks to thriving business districts. Our local SEO expertise helps Collierville 
                businesses connect with customers who appreciate our community's rich heritage and vibrant economy.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Collierville SEO Stats */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Proven Results for Collierville Businesses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {colliervilleStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Collierville SEO Services
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

      {/* Industries We Serve */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white mb-4 text-center">
              Collierville Industries We Serve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colliervilleIndustries.map((industry, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Collierville SEO */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white mb-4">
              Why Choose Digital Frontier for Collierville SEO?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Local Collierville Expertise
                </h3>
                <p className="text-slate-300">
                  We understand Collierville's unique market - from the historic Town Square to the new developments. 
                  Our team knows local competition, seasonal trends, and what Collierville residents search for.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Cutting-Edge AI SEO
                </h3>
                <p className="text-slate-300">
                  We're the only Collierville SEO company specializing in AI Overviews optimization and Answer Engine 
                  Optimization. Get your business featured in ChatGPT responses and Google AI search results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Fast Response Times
                </h3>
                <p className="text-slate-300">
                  Same time zone, local support. No waiting for responses from out-of-state agencies. 
                  Quick communication and immediate support when your Collierville business needs it.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Proven Collierville Results
                </h3>
                <p className="text-slate-300">
                  Track record of success with Collierville businesses across industries. We know what SEO strategies 
                  work in this market and have the case studies to prove it.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <Card className="bg-blue-900/20 border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Ready to Dominate Collierville Search Results?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Let's discuss how our proven SEO strategies can help your Collierville business 
              rank #1 in Google and attract more local customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Serving Collierville, TN</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>Local Shelby County Team</span>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Free Collierville SEO Audit →
            </a>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Collierville SEO FAQ"
        faqs={colliervilleFaqs}
        className="mb-16"
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digital Frontier Company - Collierville SEO Services",
            "alternateName": "Collierville SEO Company",
            "description": "Leading Collierville SEO company specializing in local search optimization, AI Overviews optimization, and proven strategies for Shelby County businesses",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Collierville",
              "addressRegion": "TN",
              "addressCountry": "US"
            },
            "areaServed": [
              "Collierville, TN",
              "Memphis, TN", 
              "Germantown, TN",
              "Bartlett, TN",
              "Cordova, TN",
              "Lakeland, TN"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "35.0420",
                "longitude": "-89.6645"
              },
              "geoRadius": "25000"
            },
            "url": "https://digitalfrontier.app/collierville-seo-services",
            "priceRange": "$$",
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "sameAs": [
              "https://www.linkedin.com/company/digital-frontier-company"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Collierville SEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO Collierville",
                    "description": "Dominate Collierville Google My Business listings and local pack rankings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Overviews Optimization",
                    "description": "Get your Collierville business featured in Google's AI search results"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Answer Engine Optimization",
                    "description": "Optimize to be cited by ChatGPT and AI assistants for local queries"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website SEO Optimization",
                    "description": "Technical SEO, content optimization, and site speed improvements"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": colliervilleFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </PageLayout>
  );
};

export default ColliervilleSEO;