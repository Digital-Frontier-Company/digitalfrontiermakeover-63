import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, TrendingUp, Target, Zap, Award, Building, Star, Shield } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import germantownHeroBg from "@/assets/germantown-hero-bg.jpg";

const GermantownDigitalMarketing = () => {
  const location = useLocation();

  const germantownFaqs: FAQItem[] = [
    {
      question: "Why choose a Germantown digital marketing agency?",
      answer: "Germantown businesses benefit from our local market expertise, understanding of affluent customer demographics, and proximity for in-person meetings. We know Germantown's competitive landscape and what resonates with your target audience."
    },
    {
      question: "What digital marketing services do you offer in Germantown?",
      answer: "We provide comprehensive digital marketing including AI Overviews optimization, local SEO, Google Ads management, social media marketing, content marketing, Answer Engine Optimization (AEO), and website optimization specifically for Germantown businesses."
    },
    {
      question: "How do you help Germantown businesses with local competition?",
      answer: "We use advanced competitive analysis, local keyword research, and AI-powered strategies to help Germantown businesses outrank competitors. Our Answer Engine Optimization ensures you appear in AI search results when customers ask for local recommendations."
    },
    {
      question: "Do you work with other Shelby County areas?",
      answer: "Yes! We serve businesses throughout Shelby County including Memphis, Collierville, Bartlett, Cordova, East Memphis, and surrounding areas. Our local expertise extends across the entire Greater Memphis region."
    },
    {
      question: "What makes your Germantown marketing approach unique?",
      answer: "We combine traditional digital marketing with cutting-edge AI optimization. This includes getting Germantown businesses featured in ChatGPT responses, Google AI Overviews, and voice search results - strategies most agencies don't offer."
    }
  ];

  const services = [
    {
      title: "Local SEO Germantown",
      description: "Dominate local search results and Google My Business for Germantown",
      icon: <MapPin className="w-6 h-6 text-green-400" />
    },
    {
      title: "AI Marketing Strategies",
      description: "Get featured in AI search results and voice assistants",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Google Ads Management",
      description: "Targeted PPC campaigns for Germantown and surrounding areas",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Social Media Marketing", 
      description: "Build brand awareness and engagement on social platforms",
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />
    }
  ];

  const germantownStats = [
    { label: "Germantown Clients Served", value: "35+" },
    { label: "Average ROI Increase", value: "420%" },
    { label: "Local Rankings Top 3", value: "89%" },
    { label: "Lead Generation Boost", value: "350%" }
  ];

  const germantownIndustries = [
    "Luxury Real Estate",
    "Healthcare & Medical", 
    "Legal & Professional Services",
    "Financial Services",
    "High-End Retail",
    "Restaurants & Hospitality",
    "Home Services",
    "Beauty & Wellness"
  ];

  return (
    <PageLayout
      title="Germantown Digital Marketing Agency | AI Marketing Services Shelby County TN | Digital Frontier"
      subtitle="Leading Germantown digital marketing agency specializing in AI marketing, local SEO, and premium digital strategies for affluent market businesses"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-24"
      modifiedDate="2024-12-24"
    >
      {/* Background Hero Section */}
      <section className="relative mb-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${germantownHeroBg})`,
            filter: 'blur(0.5px) brightness(0.5)'
          }}
        />
        <div className="relative z-10 h-32"></div>
      </section>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Premium Digital Marketing for Germantown
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Germantown Digital Marketing
            <span className="block text-blue-400">Luxury Market Expertise</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Digital Frontier is the premier digital marketing agency serving Germantown, TN. We specialize in 
            sophisticated marketing strategies for affluent markets, including AI Overviews optimization, luxury brand 
            positioning, and high-end customer acquisition for Germantown's discerning business community.
          </p>
          
          {/* Germantown Service Areas */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Germantown', 'Collierville', 'East Memphis', 'Cordova', 'Bartlett', 'Memphis'].map((area) => (
              <Badge key={area} variant="outline" className="text-blue-300 border-blue-300">
                {area}
              </Badge>
            ))}
          </div>

          <LazyImage
            src="/lovable-uploads/77a7a6e8-ba24-4511-808d-e7ce4724f3d3.png"
            alt="Germantown Digital Marketing Agency - Digital Frontier luxury market expertise"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            displayWidth={800}
            displayHeight={400}
          />
        </div>
      </section>

      {/* Germantown Results Stats */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Premium Results for Germantown Businesses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {germantownStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Germantown Digital Marketing Services
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

      {/* Germantown Industries */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white mb-4 text-center">
              Germantown Industries We Specialize In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {germantownIndustries.map((industry, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Germantown Advantage */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white mb-4">
              The Germantown Digital Marketing Advantage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Affluent Market Expertise
                </h3>
                <p className="text-slate-300">
                  We understand Germantown's affluent demographics and luxury market preferences. Our strategies 
                  are designed for sophisticated customers who expect premium experiences and quality service.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Advanced AI Marketing
                </h3>
                <p className="text-slate-300">
                  Cutting-edge AI Overviews optimization and Answer Engine Optimization ensure your Germantown 
                  business appears in ChatGPT responses, Google AI search, and premium voice assistant results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Local Market Intelligence
                </h3>
                <p className="text-slate-300">
                  Deep knowledge of Germantown's competitive landscape, seasonal trends, and local customer behavior. 
                  We know what works in this unique market and how to position your brand effectively.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Premium Service Standards
                </h3>
                <p className="text-slate-300">
                  White-glove service that matches Germantown's high standards. Dedicated account management, 
                  detailed reporting, and strategic consultation that reflects your business's premium positioning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Success Story */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Germantown Success Story
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-4 text-lg italic">
              "Digital Frontier transformed our luxury real estate marketing. Their AI optimization strategies 
              helped us capture high-end clients searching for premium Germantown properties. Our qualified 
              leads increased 420% and average sale price grew by $150,000."
            </p>
            <div className="text-blue-400 font-semibold">
              — Sarah Mitchell, Germantown Luxury Realty
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <Card className="bg-blue-900/20 border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Ready to Elevate Your Germantown Marketing?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Let's discuss how our premium digital marketing strategies can help your Germantown business 
              attract high-value customers and dominate your local market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Serving Germantown, TN</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>Premium Local Support</span>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Your Premium Consultation →
            </a>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Germantown Digital Marketing FAQ"
        faqs={germantownFaqs}
        className="mb-16"
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digital Frontier Company - Germantown Digital Marketing",
            "description": "Premier Germantown digital marketing agency specializing in luxury market AI marketing and local SEO services",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Germantown",
              "addressRegion": "TN",
              "addressCountry": "US"
            },
            "areaServed": [
              "Germantown, TN",
              "Memphis, TN", 
              "Collierville, TN",
              "East Memphis, TN",
              "Cordova, TN",
              "Bartlett, TN"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "35.0867",
                "longitude": "-89.8101"
              },
              "geoRadius": "25000"
            },
            "url": "https://digitalfrontier.app/germantown-digital-marketing",
            "priceRange": "$$$",
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "sameAs": [
              "https://www.linkedin.com/company/digital-frontier-company"
            ]
          })
        }}
      />
    </PageLayout>
  );
};

export default GermantownDigitalMarketing;