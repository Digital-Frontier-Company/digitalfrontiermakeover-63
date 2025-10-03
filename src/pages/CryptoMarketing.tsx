import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, TrendingUp, Brain, Eye, Zap, Shield, MessageSquare, BarChart3 } from "lucide-react";
const CryptoMarketing = () => {
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
        <title>Digital Frontier Crypto Marketing: ROI-Guaranteed Growth | Digital Frontier</title>
        <meta name="description" content="Stop renting attention. Start owning demand. AI-first growth partner for creators & crypto pioneers. ROI guaranteed or fee credits back. 200+ success stories." />
        <link rel="canonical" href="https://digitalfrontier.app/crypto-marketing" />
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

          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-300">
            AI-First, ROI Guaranteed Growth Partner
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
                <img src="/lovable-uploads/creator_icon.png" alt="Independent Content Creator Marketing" className="w-full h-full object-cover" />
                <div className="absolute contain-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
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
                <img src="/lovable-uploads/crypto_icon.png" alt="Crypto marketing strategies" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400">
                    Crypto Visionaries
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 pt-4 pb-2">
                <p className="text-sm text-blue-300 font-semibold italic">How to market my crypto project</p>
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
                <img src="/lovable-uploads/ai-crypto-marketing.png" alt="Ai and Crypto Marketing help" className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400">
                    Hybrid Crypto-Creatives
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 pt-4 pb-2">
                <p className="text-sm text-purple-300 font-semibold italic">Ai and Cryptocurrency Marketing Experts</p>
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

      {/* Service Pods */}
      <section id="service-pods" className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Service Pods</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three specialized programs designed for sustainable, scalable growth in the creator economy and Web3 space.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Creator Growth Pod */}
            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-cyan-500/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Creator Growth Pod</h3>
                </div>
                
                <p className="text-lg text-cyan-300 mb-6 font-semibold">Monetize your mind, grow without the grind</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What You Get:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Revenue diversification strategy</li>
                    <li>• Community monetization systems</li>
                    <li>• Content multiplication frameworks</li>
                    <li>• Brand partnership pipeline</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-3">Outcomes:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• 3-7 new revenue streams</li>
                    <li>• 40-70% less time creating</li>
                    <li>• Sustainable 6-7 figure business</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                  Start Creator Growth <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Crypto Marketing Accelerator */}
            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-blue-500/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Crypto Marketing Accelerator</h3>
                </div>
                
                <p className="text-lg text-blue-300 mb-6 font-semibold">Trust, traction, tactically compliant</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What You Get:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Regulatory-safe marketing frameworks</li>
                    <li>• Community growth & engagement</li>
                    <li>• Thought leadership positioning</li>
                    <li>• Launch & adoption strategies</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-3">Outcomes:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• 5-10x user acquisition</li>
                    <li>• Compliant growth systems</li>
                    <li>• Market leadership positioning</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Launch Crypto Strategy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Hybrid Arts/Web3 Program */}
            <Card className="interactive-card bg-slate-900/50 border-slate-700 hover:border-purple-500/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Hybrid Arts/Web3 Program</h3>
                </div>
                
                <p className="text-lg text-purple-300 mb-6 font-semibold">Culture x Code = Commerce</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What You Get:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• NFT collection strategy & launch</li>
                    <li>• Collector community building</li>
                    <li>• Phygital experience design</li>
                    <li>• Royalty optimization systems</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-3">Outcomes:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Premium art positioning</li>
                    <li>• Sustainable collector base</li>
                    <li>• Cross-platform monetization</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Explore Art+Web3 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Capabilities */}
      <section id="ai-capabilities" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background AI Network */}
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/6c3d2d6e-7ff3-40e9-be46-918e6ee0996c.png')`
      }} />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI-Powered Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Our AI systems work 24/7 to optimize your growth while you focus on creating and building.
            </p>
            <div className="flex justify-center">
              <img src="/lovable-uploads/5aa13ef4-6453-462e-b5bf-bd88c1b20988.png" alt="AI Network Intelligence Hub" className="max-w-md opacity-90" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
                <p className="text-slate-300 text-sm">AI-driven insights for market trends and opportunity identification</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-secondary/50">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Audience Segmentation</h3>
                <p className="text-slate-300 text-sm">Precision targeting for highest-value prospects and collectors</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-accent/50">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Content Generation</h3>
                <p className="text-slate-300 text-sm">AI-powered creation that maintains your authentic brand voice</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-primary/50 overflow-hidden">
              <div className="relative">
                <img src="/lovable-uploads/72dd30ec-d978-4ba9-baad-aba941aa15c4.png" alt="Performance Analytics Dashboard" className="w-full h-32 object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent" />
              </div>
              <CardContent className="p-6 text-center relative">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Performance Optimization</h3>
                <p className="text-slate-300 text-sm">Real-time campaign optimization and conversion improvement</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-secondary/50">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Privacy Compliance</h3>
                <p className="text-slate-300 text-sm">Zero-party data strategies and regulatory compliance automation</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-800/50 border-slate-700 hover:border-accent/50">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Community Management</h3>
                <p className="text-slate-300 text-sm">AI-assisted community building and engagement optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories & Team */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proven Results</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real growth, real clients, real outcomes. Here's what we've achieved together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-slate-300">Generated Revenue</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-slate-300">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-slate-300">Success Stories</div>
            </div>
          </div>

          {/* Team & Executive Photos */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="interactive-card bg-slate-900/50 border-slate-700 overflow-hidden">
              <div className="h-64">
                <img src="/lovable-uploads/marketing-expert-no-bg.png" alt="Digital Frontier Marketing Expert" className="max-w-fit " />
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-sm text-slate-300 font-semibold italic">No one knows how to market Crypto and Ai like us</p>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-white mb-2">Executive Leadership</h3>
                <p className="text-slate-300 text-sm">Proven expertise in crypto marketing and growth strategies</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-900/50 border-slate-700 overflow-hidden">
              <div className="h-64">
                <img src="/lovable-uploads/crypto-team-collaboration.png" alt="Crypto expert marketing teams" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-sm text-slate-300 font-semibold italic">this is how crypto experts market projects</p>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-white mb-2">Collaborative Approach</h3>
                <p className="text-slate-300 text-sm">Working closely with clients to ensure sustainable growth</p>
              </CardContent>
            </Card>

            <Card className="interactive-card bg-slate-900/50 border-slate-700 overflow-hidden">
              <div className="h-64">
                <img src="/lovable-uploads/72af43ac-c761-4297-8265-6fc81826e793.png" alt="Performance Analytics Dashboard" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-white mb-2">Proven ROI Results</h3>
                <p className="text-slate-300 text-sm">Real performance data showing measurable growth and success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Definition & Education Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why AI-First Marketing Works
              </h2>
              <p className="text-xl text-slate-400 mb-6">
                While others guess, we know. Our AI systems process millions of data points to identify patterns, predict trends, and optimize performance in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Predictive Intelligence:</span> Anticipate market changes before they happen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Continuous Optimization:</span> 24/7 performance improvements without human intervention
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Scalable Personalization:</span> Deliver the right message to the right audience at the perfect moment
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/lovable-uploads/966b64a4-e3f7-488f-b15e-0d2d8e61d442.png" alt="Artificial Intelligence Brain Network" className="max-w-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Frequently Asked Questions" faqs={cryptoFAQs} className="bg-slate-900" />

      {/* Final CTA Section */}
      <section id="get-started" className="py-24 bg-slate-800 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Stop Renting Attention?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and discover how our ROI-guaranteed approach can transform your creator or crypto business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
              Book Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">
            90-day ROI guarantee • No long-term contracts • Results or fee credits back
          </p>
        </div>
      </section>
    </>;
};
export default CryptoMarketing;