import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, TrendingUp, Brain, Eye, Zap, Shield, MessageSquare, BarChart3 } from "lucide-react";

const DigitalFrontierCryptoAIMarketing = () => {
  const location = useLocation();
  const cryptoFAQs: FAQItem[] = [{
    question: "How do you guarantee ROI for crypto marketing campaigns?",
    answer: "We provide a 90-day ROI guarantee backed by our proven frameworks. If you don't see measurable growth in user acquisition and revenue, we'll continue working until you do - or provide fee credits."
  }, {
    question: "What makes Digital Frontier different from other crypto marketing agencies?",
    answer: "We specialize exclusively in creator economy and crypto/Web3 brands. Our AI-powered approach combines deep market knowledge with 24/7 optimization systems that most agencies can't match."
  }, {
    question: "How quickly can we expect to see results?",
    answer: "Most clients see initial traction within 30 days, with significant growth typically occurring within 60-90 days. Our systematic approach ensures sustainable, long-term growth rather than quick wins that don't last."
  }, {
    question: "Do you work with projects in regulatory gray areas?",
    answer: "We only work with legitimate, compliant crypto projects and creators. Our regulatory-safe frameworks ensure your marketing efforts build long-term trust and avoid compliance issues."
  }];

  return <>
    <Helmet>
        <title>Digital Frontier: Where Crypto, AI, and Marketing Collide | Digital Frontier</title>
        <meta name="description" content="Stop renting attention. Start owning demand. AI-first growth partner for creators & crypto pioneers. ROI guaranteed or fee credits back. 200+ success stories." />
        <link rel="canonical" href="https://digitalfrontier.app/digital-frontier-where-crypto-ai-and-marketing-collide" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Frontier",
            "description": "AI-first growth partner for creators and crypto pioneers",
            "url": "https://digitalfrontier.app",
            "@id": "https://digitalfrontier.app/#organization"
          }
        `}
        </script>
    </Helmet>

    {/* Full-Screen Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/27a4ca3c-8937-4c3d-b392-ed55289c7152.png')`
      }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-800/30 to-slate-900/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Logo with Shimmer Effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/e7cef708-2992-4277-8f17-0afefe3d7144.png" alt="Digital Frontier Logo" className="h-32 w-auto" />
            </div>
          </div>

          
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-slate-300">
            Where Crypto, AI, and Marketing Collide
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Stop renting attention. Start owning demand. For creators and crypto pioneers ready to scale beyond algorithmic dependency.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="hover-scale border-primary/50 hover:border-primary" onClick={() => document.getElementById('expertise')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Our Expertise
            </Button>
            <Button variant="outline" size="lg" className="hover-scale border-secondary/50 hover:border-secondary" onClick={() => document.getElementById('service-pods')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Service Pods
            </Button>
            <Button variant="outline" size="lg" className="hover-scale border-accent/50 hover:border-accent" onClick={() => document.getElementById('ai-capabilities')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              AI Capabilities
            </Button>
            <Button size="lg" className="hover-scale bg-primary hover:bg-primary/90" onClick={() => document.getElementById('get-started')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="interactive-card bg-slate-800/50 border-primary/20 hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">ROI Guarantee</div>
                <p className="text-slate-300">90-day results or fee credits back</p>
              </CardContent>
            </Card>
            
            <Card className="interactive-card bg-slate-800/50 border-secondary/20 hover:border-secondary/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7 AI-Powered</div>
                <p className="text-slate-300">Never-sleeping optimization systems</p>
              </CardContent>
            </Card>
            
            <Card className="interactive-card bg-slate-800/50 border-accent/20 hover:border-accent/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">200+ Success Stories</div>
                <p className="text-slate-300">Proven growth across verticals</p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    {/* Who We Serve - Three Personas */}
    <section id="expertise" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Who We Serve</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three distinct paths to sustainable growth. Each with specialized frameworks proven to work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Independent Creators */}
            <Card className="interactive-card bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-cyan-500/30 hover:border-cyan-400/50 overflow-hidden">
              <div className="relative h-64">
                <img src="/lovable-uploads/108a6190-a689-4e67-8494-edae10aa78d2.jpg" alt="Female Content Creator in Home Studio" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-400">
                    Independent Creators
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 mr-3 text-cyan-400" />
                  <h3 className="text-xl font-bold text-cyan-300">For Independent Creators</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Pain Points We Solve:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Algorithm dependency killing reach</li>
                    <li>• Inconsistent revenue streams</li>
                    <li>• Burnout from constant content creation</li>
                    <li>• Difficulty monetizing loyal fans</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Our Solutions:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Profitable merch & NFT collections</li>
                    <li>• Private fan communities & subscriptions</li>
                    <li>• Sustainable revenue diversification</li>
                    <li>• Authentic brand narrative development</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
                  Learn Creator Strategy
                </Button>
              </CardContent>
            </Card>

            {/* Crypto Visionaries */}
            <Card className="interactive-card bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/30 hover:border-blue-400/50 overflow-hidden">
              <div className="relative h-64">
                <img src="/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png" alt="Team Collaboration" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400">
                    Crypto Visionaries
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 mr-3 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-300">For Crypto Visionaries</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Pain Points We Solve:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Regulatory compliance uncertainty</li>
                    <li>• Public skepticism & trust issues</li>
                    <li>• High customer acquisition costs</li>
                    <li>• Complex community management</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Our Solutions:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Regulatory-safe growth frameworks</li>
                    <li>• NFT launch playbooks & strategies</li>
                    <li>• Web3 education hubs & content</li>
                    <li>• Trust-building PR & thought leadership</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full border-blue-500 text-blue-300 hover:bg-blue-500/10">
                  Explore Crypto Strategy
                </Button>
              </CardContent>
            </Card>

            {/* Hybrid Crypto-Creatives */}
            <Card className="interactive-card bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30 hover:border-purple-400/50 overflow-hidden">
              <div className="relative h-64">
                <img src="/lovable-uploads/05e5d28b-90bc-4666-9f8c-eb24aa8f2db4.png" alt="Digital Art Creator with Futuristic Elements" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400">
                    Hybrid Crypto-Creatives
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 mr-3 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-300">For Hybrid Crypto-Creatives</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Pain Points We Solve:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Balancing art integrity with commerce</li>
                    <li>• NFT market oversaturation</li>
                    <li>• Technical barriers to Web3</li>
                    <li>• Finding the right collector audience</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Our Solutions:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Curated NFT rollout strategies</li>
                    <li>• Token-gated loyalty programs</li>
                    <li>• Phygital art integration</li>
                    <li>• Collector community development</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full border-purple-500 text-purple-300 hover:bg-purple-500/10">
                  Discover Art+Web3 Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    {/* AI Capabilities Section */}
    <section id="ai-capabilities" className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI-Powered Marketing Revolution</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Where artificial intelligence meets creative strategy. Our AI systems work 24/7 to optimize your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-cyan-500/50">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
                <p className="text-slate-300 text-sm">AI forecasts market trends and optimizes campaigns in real-time</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-blue-500/50">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Audience Intelligence</h3>
                <p className="text-slate-300 text-sm">Deep behavioral analysis to find your perfect customers</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-purple-500/50">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Content Optimization</h3>
                <p className="text-slate-300 text-sm">AI-powered content that converts at scale</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-green-500/50">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Performance Tracking</h3>
                <p className="text-slate-300 text-sm">Real-time ROI monitoring and optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    {/* Get Started Section */}
    <section id="get-started" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Dominate Your Market?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Join 200+ successful creators and crypto projects who've scaled beyond algorithmic dependency with our AI-powered growth systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-lg">
              Schedule Strategy Call
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">🛡️ ROI Guaranteed • 🚀 Results in 90 Days • 🔒 Regulatory Compliant</p>
          </div>
        </div>
    </section>

    {/* FAQ Section */}
    <FAQSection 
        title="Frequently Asked Questions" 
        faqs={cryptoFAQs} 
        className="bg-slate-900"
    />
  </>;
};

export default DigitalFrontierCryptoAIMarketing;