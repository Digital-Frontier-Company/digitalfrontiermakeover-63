
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Mail, ArrowRight, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";
import FAQSection from "@/components/FAQSection";

const Pricing: React.FC = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Digital Marketing Services Pricing: Expert SEO, AEO & GEO Solutions | Proven Strategies & ROI-Focused Packages"
      subtitle="Master digital marketing with expert pricing strategies, proven service packages, and actionable solutions for SEO, AEO, GEO & social media marketing" 
      currentPath={location.pathname}
    >
      {/* Hero Section */}
      <section className="mb-12" aria-labelledby="pricing-hero-heading">
        <h2 id="pricing-hero-heading" className="text-3xl font-bold mb-4 text-white">Transform Your Digital Presence</h2>
        <p className="text-xl text-slate-300 mb-6">
          Our specialized services help businesses thrive in the evolving digital landscape with customized solutions for search engines, answer engines, and generative AI platforms. Research by Gartner shows that 30% of search queries will be answered by AI by 2026.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">
              <Mail className="mr-2" size={18} />
              Contact Us Today
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
            <Link to="/technical">
              Learn More
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tab Navigation for Service Categories */}
      <Tabs defaultValue="seo-aeo-geo" className="mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="seo-aeo-geo" className="text-sm md:text-base">SEO, AEO & GEO</TabsTrigger>
          <TabsTrigger value="social-media" className="text-sm md:text-base">Social Media</TabsTrigger>
          <TabsTrigger value="email-marketing" className="text-sm md:text-base">Email Marketing</TabsTrigger>
        </TabsList>
        
        {/* SEO, AEO & GEO Services Tab */}
        <TabsContent value="seo-aeo-geo" className="space-y-12">
          <header className="text-center mb-8">
            <h3 id="seo-services-heading" className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Search & Generative AI Optimization Services
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions to optimize your content for traditional search engines, 
              answer engines, and generative AI platforms. According to Search Engine Land, businesses using multi-engine optimization see 67% higher organic traffic growth compared to SEO-only strategies.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Retainer */}
            <PricingCard 
              title="Monthly Retainer"
              price="$999.99"
              period="/month"
              description="Our most popular option for ongoing optimization and maintenance"
              features={[
                "Continuous SEO, AEO & GEO updates",
                "Monthly performance reports",
                "Content optimization for all engines",
                "Strategic keyword targeting",
                "Technical optimization"
              ]}
              popular={true}
              contactLink="/contact"
              learnMoreLink="/generative-engine-optimization"
            />
            
            {/* Project-Based */}
            <PricingCard 
              title="Project-Based"
              price="$2,000"
              period="/project"
              description="Fixed fee for specific projects with defined deliverables"
              features={[
                "Comprehensive site audit",
                "Content strategy development",
                "Implementation of optimization tactics",
                "Final report with recommendations",
                "One month of follow-up support"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/answer-engine-optimization"
            />
            
            {/* Hourly Rate */}
            <PricingCard 
              title="Hourly Consulting"
              price="$100"
              period="/hour"
              description="Expert consultation for specialized tasks and training"
              features={[
                "On-demand expert advice",
                "Team training sessions",
                "Specialized technical solutions",
                "Crisis management",
                "Strategy development sessions"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/technical"
            />
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-slate-800">
            <h4 className="text-xl font-semibold mb-4">Not sure which service is right for you?</h4>
            <p className="text-slate-400 mb-6">Our team can help you determine the best approach for your specific business needs.</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </TabsContent>
        
        {/* Social Media Marketing Tab */}
        <TabsContent value="social-media" className="space-y-12">
          <header className="text-center mb-8">
            <h3 id="social-media-services-heading" className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Social Media Marketing Services
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Engage your audience and build your brand presence across all social media platforms with our specialized services. Social Media Examiner reports that 73% of marketers believe social media marketing has been effective for their business.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Retainer */}
            <PricingCard 
              title="Monthly Retainer"
              price="$999.99"
              period="/month"
              description="Ongoing social media management and growth strategies"
              features={[
                "Content calendar and creation",
                "Daily platform management",
                "Community engagement",
                "Performance analytics",
                "Strategic campaign planning"
              ]}
              popular={true}
              contactLink="/contact"
              learnMoreLink="/ai-and-digital-marketing"
            />
            
            {/* Project-Based */}
            <PricingCard 
              title="Project-Based"
              price="$500"
              period="/project"
              description="Targeted campaigns with specific goals and timelines"
              features={[
                "Campaign strategy development",
                "Creative content production",
                "Targeted audience development",
                "Performance tracking",
                "Results analysis and reporting"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/ai-and-digital-marketing"
            />
            
            {/* Hourly Rate */}
            <PricingCard 
              title="Hourly Services"
              price="$50"
              period="/hour"
              description="Specialized social media consulting and support"
              features={[
                "Platform-specific consulting",
                "Crisis management",
                "Team training sessions",
                "Content audits",
                "Strategy workshops"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/ai-and-digital-marketing"
            />
          </div>
        </TabsContent>
        
        {/* Email Marketing Tab */}
        <TabsContent value="email-marketing" className="space-y-12">
          <header className="text-center mb-8">
            <h3 id="email-marketing-services-heading" className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Email Marketing Solutions
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Build relationships and drive conversions with targeted, strategic email marketing campaigns and automations. Campaign Monitor data shows email marketing delivers $42 ROI for every $1 spent, making it the highest-performing digital channel.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Monthly Retainer */}
            <PricingCard 
              title="Monthly Retainer"
              price="$499.99"
              period="/month"
              description="Complete email marketing management and optimization"
              features={[
                "Campaign planning and creation",
                "List management and segmentation",
                "A/B testing and optimization",
                "Performance reporting",
                "Subscriber growth strategies"
              ]}
              popular={true}
              contactLink="/contact"
              learnMoreLink="/contact"
            />
            
            {/* Project-Based */}
            <PricingCard 
              title="Project-Based"
              price="$300"
              period="/project"
              description="Focused email campaigns for specific objectives"
              features={[
                "Campaign strategy development",
                "Email template design",
                "Copywriting and content creation",
                "Launch and monitoring",
                "Results analysis"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/contact"
            />
            
            {/* Hourly Rate */}
            <PricingCard 
              title="Hourly Services"
              price="$50"
              period="/hour"
              description="Expert email marketing consulting and support"
              features={[
                "Strategy consulting",
                "Technical troubleshooting",
                "Template development",
                "Content reviews",
                "Performance analysis"
              ]}
              popular={false}
              contactLink="/contact"
              learnMoreLink="/contact"
            />
          </div>
          
          {/* Automation Setup Card */}
          <Card className="border-green-800/40 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ShoppingCart className="h-5 w-5 text-green-400" />
                Email Automation Setup
              </CardTitle>
              <CardDescription>
                One-time setup for powerful, automated email sequences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-3xl font-bold mr-2">$1,000 - $5,000</span>
                <span className="text-slate-400">one-time</span>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Intelligent automation setup with AI-powered email drafting capabilities to engage with your audience at exactly the right moment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Complete workflow automation setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Trigger-based email sequences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">AI-powered content generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Integration with your existing systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Training for your team</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link to="/contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* FAQ Section with Schema Markup */}
      <FAQSection 
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What's included in the monthly retainer packages?",
            answer: "Our monthly retainer packages include ongoing optimization, content strategy, technical improvements, regular reporting, and strategic consultations to continuously improve your digital presence across all relevant platforms. Clients typically see 25-40% improvement in key metrics within the first quarter (based on 200+ client case studies)."
          },
          {
            question: "How do I know which service is right for my business?",
            answer: "We recommend scheduling a consultation with our team. We'll analyze your current digital presence, business goals, and competitive landscape to recommend the most effective approach for your specific situation."
          },
          {
            question: "Do you offer customized packages?",
            answer: "Yes! We understand that every business has unique needs. We're happy to create customized packages that combine different services to address your specific challenges and goals."
          },
          {
            question: "What's the difference between SEO, AEO, and GEO?",
            answer: "SEO focuses on traditional search engines like Google. AEO (Answer Engine Optimization) optimizes for AI assistants and voice search. GEO (Generative Engine Optimization) targets AI-powered content generation platforms like ChatGPT and Claude."
          },
          {
            question: "How long does it take to see results?",
            answer: "Results vary depending on the service and your current digital presence. Typically, you'll see initial improvements within 4-6 weeks, with significant results becoming apparent within 3-6 months of consistent optimization. This timeline is based on data from 500+ client implementations and aligns with industry benchmarks from Search Engine Journal research."
          }
        ]}
        className="mt-16 pt-8 border-t border-slate-800"
      />
      
      <div className="mt-8 text-center">
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/contact">
            Contact Us For Customized Solutions
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </Button>
      </div>
    </PageLayout>
  );
};

// Reusable Pricing Card Component
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  contactLink: string;
  learnMoreLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  popular,
  contactLink,
  learnMoreLink
}) => {
  return (
    <Card className={`border ${popular ? 'border-blue-500/50 shadow-md shadow-blue-800/20' : 'border-slate-800'} 
      bg-gradient-to-br from-slate-900 to-slate-800/80 overflow-hidden relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-xs font-semibold px-3 py-1 rounded-bl-md text-white">
            MOST POPULAR
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-center mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-slate-400 ml-1">{period}</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button asChild className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
          <Link to={contactLink}>Get Started</Link>
        </Button>
        <Button asChild variant="outline" className="w-full border-slate-700 hover:bg-slate-800/70">
          <Link to={learnMoreLink}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
