import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { submitToHubSpot } from "@/utils/hubspot";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const AIPlansLanding = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string }>>([]);
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [isLeadFormLoading, setIsLeadFormLoading] = useState(false);
  const [isContactFormLoading, setIsContactFormLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Create particles
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${6 + Math.random() * 4}s`
      });
    }
    setParticles(particleArray);

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setShowLeadPopup(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (element: HTMLElement) => {
    const answer = element.nextElementSibling as HTMLElement;
    const isActive = answer?.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-answer').forEach(faq => {
      faq.classList.remove('active');
    });
    document.querySelectorAll('.faq-question').forEach(question => {
      question.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive && answer) {
      answer.classList.add('active');
      element.classList.add('active');
    }
  };

  const handleLeadFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLeadFormLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;

    try {
      await submitToHubSpot({
        email,
        company,
        lead_source: 'GEO Strategy Guide',
        form_name: 'Free GEO Strategy Guide',
        page_url: window.location.href
      });

      toast({
        title: "Success!",
        description: "Thank you! Your free GEO Strategy Guide will be sent to your email shortly.",
      });

      setShowLeadPopup(false);
    } catch (error) {
      console.error('Error submitting lead form:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLeadFormLoading(false);
    }
  };

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsContactFormLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const interest = formData.get('interest') as string;
    const budget = formData.get('budget') as string;
    const challenge = formData.get('challenge') as string;

    try {
      await submitToHubSpot({
        email,
        company,
        phone,
        primary_interest: interest,
        monthly_budget: budget,
        biggest_challenge: challenge,
        lead_source: 'AI Plans Landing Page',
        form_name: 'Free Strategy Session',
        page_url: window.location.href
      });

      toast({
        title: "Success!",
        description: "Thank you! We'll contact you within 24 hours to schedule your free strategy session.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsContactFormLoading(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Digital Frontier - AI That Works Both Ways | GEO, AEO & AI Agents"
        description="Transform your business with AI-powered marketing, Generative Engine Optimization (GEO), and intelligent automation. Get found online, run smarter inside."
        path="/ai-plans"
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-radial from-indigo-900/20 via-slate-900 to-slate-950 -z-20"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute w-0.5 h-0.5 bg-violet-500 rounded-full opacity-60"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Lead Magnet Popup */}
      {showLeadPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-12 max-w-lg w-full text-center relative">
            <button 
              className="absolute top-4 right-6 text-white text-2xl hover:text-violet-400"
              onClick={() => setShowLeadPopup(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Free GEO Strategy Guide
            </h3>
            <p className="mb-8 text-slate-300">
              Get our step-by-step playbook to dominate ChatGPT, Perplexity & Google AI search results
            </p>
            <form onSubmit={handleLeadFormSubmit} className="space-y-4">
              <input 
                type="email" 
                name="email"
                placeholder="Enter your business email" 
                required 
                className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400"
              />
              <input 
                type="text" 
                name="company"
                placeholder="Company name" 
                required 
                className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400"
              />
              <button 
                type="submit" 
                disabled={isLeadFormLoading}
                className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLeadFormLoading ? "Submitting..." : "Download Free Guide"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-violet-500/20 z-40 py-4">
          <div className="container mx-auto px-5">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Digital Frontier
              </div>
              <ul className="hidden md:flex gap-8 list-none">
                <li><a href="#services" className="text-slate-300 hover:text-violet-500 font-medium transition-colors">Services</a></li>
                <li><a href="#case-studies" className="text-slate-300 hover:text-violet-500 font-medium transition-colors">Results</a></li>
                <li><a href="#pricing" className="text-slate-300 hover:text-violet-500 font-medium transition-colors">Pricing</a></li>
                <li><a href="tel:901-657-5007" className="text-slate-300 hover:text-violet-500 font-medium transition-colors">901-657-5007</a></li>
              </ul>
              <a href="#contact" className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 no-underline">
                Free Strategy Call
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative pt-24 overflow-hidden">
          {/* Animated background with central light */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-5 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  AI That Works Both Ways
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed font-normal mb-8">
                  Get found online. Run smarter inside. Digital Frontier delivers visibility + efficiency with AI systems built for growth.
                </p>
                
                <div className="flex gap-8 mb-10">
                  <div className="text-center">
                    <span className="block text-2xl font-extrabold text-cyan-400">3x</span>
                    <span className="text-sm text-slate-400">More AI Traffic</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-extrabold text-cyan-400">32%</span>
                    <span className="text-sm text-slate-400">Lower Costs</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-extrabold text-cyan-400">15h</span>
                    <span className="text-sm text-slate-400">Weekly Savings</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 md:flex-nowrap">
                  <a 
                    href="#contact" 
                    className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-violet-500/40 hover:shadow-violet-500/60 relative overflow-hidden group no-underline flex-1 md:flex-none"
                  >
                    <span className="relative z-10">Free Strategy Session</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </a>
                  <button 
                    onClick={() => setShowLeadPopup(true)}
                    className="bg-white/10 backdrop-blur-sm border border-violet-500/30 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:-translate-y-1 hover:bg-white/20 flex-1 md:flex-none"
                  >
                    Get Free GEO Guide
                  </button>
                </div>
              </motion.div>

              <motion.div 
                className="relative h-[600px] w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* Animated Logo - Center */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.3 }}
                >
                  <motion.img 
                    src="/lovable-uploads/58631511-c231-437e-a70b-e41404dade2d.png"
                    alt="Digital Frontier Company Logo"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>

                {/* Card 1 - Top Left */}
                <motion.div 
                  className="absolute top-0 left-0 w-72 max-w-[280px] bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-xl p-6 shadow-2xl hover:transform hover:-translate-y-3 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    animation: 'floatCard1 4s ease-in-out infinite'
                  }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    🎯 GEO Optimization
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dominate ChatGPT, Perplexity & Google AI results with our proven Generative Engine Optimization strategies
                  </p>
                </motion.div>

                {/* Card 2 - Top Right */}
                <motion.div 
                  className="absolute top-20 right-0 w-72 max-w-[260px] bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-xl p-6 shadow-2xl hover:transform hover:-translate-y-3 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    animation: 'floatCard2 4s ease-in-out infinite 1s'
                  }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    🤖 AI Agents
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Custom AI assistants that handle customer service, content creation, and business processes 24/7
                  </p>
                </motion.div>

                {/* Card 3 - Bottom Center */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 max-w-[240px] bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-xl p-6 shadow-2xl hover:transform hover:-translate-y-3 hover:-translate-x-1/2 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    animation: 'floatCard3 4s ease-in-out infinite 2s'
                  }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    📈 AEO Strategy
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Answer Engine Optimization to capture voice search and featured snippet traffic
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-24 bg-gradient-to-r from-violet-500/10 to-cyan-400/10 text-center">
          <div className="container mx-auto px-5">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent">
                Free: GEO Strategy Playbook
              </h2>
              <p className="text-xl mb-8 text-slate-300">
                The step-by-step guide to owning AI search results (valued at $497)
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: "📊", title: "KPI Framework", desc: "Track what matters in GEO" },
                  { icon: "🎯", title: "Content Strategy", desc: "Win AI recommendation engines" },
                  { icon: "🚀", title: "Implementation", desc: "90-day action plan included" }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white/5 p-8 rounded-2xl border border-violet-500/20">
                    <span className="text-4xl mb-4 block">{benefit.icon}</span>
                    <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-slate-300">{benefit.desc}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setShowLeadPopup(true)}
                className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-violet-500/40"
              >
                Download Free Guide Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32">
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-center text-3xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Complete AI Marketing Suite
            </motion.h2>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Generative Engine Optimization (GEO)",
                  description: "Own ChatGPT, Perplexity, and Google AI results. Our proven GEO strategies get your business recommended by AI engines.",
                  features: [
                    "AI-first content optimization",
                    "Prompt engineering for visibility", 
                    "Cross-platform AI presence",
                    "Performance tracking & analytics"
                  ]
                },
                {
                  icon: "🤖",
                  title: "AI Agent Packages",
                  description: "Custom AI assistants that work 24/7. From Basic to Enterprise - we have an AI solution for every business need.",
                  features: [
                    "Customer service automation",
                    "Content creation & marketing",
                    "Lead qualification & nurturing",
                    "Industry-specific training"
                  ]
                },
                {
                  icon: "🎙️",
                  title: "AI Voice Assistants",
                  description: "Human-like voice technology that learns and sells. Transform customer experience with cutting-edge voice AI.",
                  features: [
                    "Natural conversation flow",
                    "Sales & support automation",
                    "Multi-language support",
                    "CRM integration"
                  ]
                },
                {
                  icon: "📈",
                  title: "Answer Engine Optimization (AEO)",
                  description: "Capture voice search and featured snippets. Optimize for how people actually search in the AI era.",
                  features: [
                    "Voice search optimization",
                    "Featured snippet targeting",
                    "FAQ optimization",
                    "Local AI search presence"
                  ]
                },
                {
                  icon: "⚡",
                  title: "AI Marketing Automation",
                  description: "Complete marketing automation powered by AI. Predictive analytics, personalization, and intelligent campaigns.",
                  features: [
                    "Predictive lead scoring",
                    "Automated content creation",
                    "Dynamic personalization",
                    "ROI optimization"
                  ]
                },
                {
                  icon: "🏢",
                  title: "Enterprise AI Solutions",
                  description: "Complete digital transformation for B2B, finance, real estate, and crypto sectors. Custom AI systems that scale.",
                  features: [
                    "Custom AI development",
                    "Integration & training",
                    "Ongoing optimization",
                    "Dedicated support team"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 transition-all hover:-translate-y-4 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-t-3xl"></div>
                  
                  <span className="text-5xl mb-6 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 relative pl-6">
                        <span className="absolute left-0 text-emerald-400 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className="inline-block bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full border border-violet-500/30 font-semibold transition-all hover:bg-violet-500/30 hover:-translate-y-1 no-underline"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-32 bg-slate-900/50">
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-center text-3xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Proven Results Across Industries
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  metric: "112%",
                  description: "Increase in booked appointments for local plumbing company"
                },
                {
                  metric: "34%", 
                  description: "Higher average job value through AI optimization"
                },
                {
                  metric: "87%",
                  description: "Boost in Google Business profile engagement"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 transition-all hover:-translate-y-6 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/30"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <p className="text-slate-300 text-lg font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-32">
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-center text-3xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Real Client Success Stories
            </motion.h2>
            
            <div className="space-y-12">
              {[
                {
                  title: "BrightHome Realty - Real Estate Agency",
                  description: "Mid-sized real estate agency transforms with AI Agent Package Pro",
                  results: [
                    { number: "67%", label: "Faster Lead Response" },
                    { number: "43%", label: "More Qualified Leads" },
                    { number: "89%", label: "Client Satisfaction" }
                  ]
                },
                {
                  title: "TechFlow B2B Company - Predictive Analytics", 
                  description: "B2B company implements predictive marketing with 40% sales efficiency increase",
                  results: [
                    { number: "40%", label: "Sales Efficiency" },
                    { number: "156%", label: "Lead Quality Improvement" },
                    { number: "28%", label: "Conversion Rate Lift" }
                  ]
                }
              ].map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-violet-400 mb-4">{caseStudy.title}</h3>
                  <p className="text-slate-300 mb-8">{caseStudy.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <span className="block text-4xl font-extrabold text-cyan-400 mb-2">{result.number}</span>
                        <span className="text-slate-400">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-slate-900/30">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-center text-3xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What is Generative Engine Optimization (GEO) and why do I need it?",
                    answer: "GEO is the process of optimizing your content to appear in AI-generated responses from ChatGPT, Perplexity, Google AI Overviews, and other AI engines. It's crucial because customers increasingly ask AI for recommendations instead of traditional search."
                  },
                  {
                    question: "How quickly can I see results from your AI marketing services?",
                    answer: "AI Agent implementations show immediate efficiency gains. GEO and AEO typically show visibility improvements in 6-12 weeks. Full system optimization usually demonstrates ROI within 90 days."
                  },
                  {
                    question: "What's included in your AI Agent packages?",
                    answer: "We offer Basic, Pro, and Enterprise packages. All include custom AI training, integration setup, ongoing optimization, and support. Pro and Enterprise add advanced features like voice capabilities and custom integrations."
                  },
                  {
                    question: "Do you work with my industry specifically?",
                    answer: "Yes! We specialize in B2B, real estate, finance, crypto, and tech sectors. Our AI solutions are customized for industry-specific workflows, terminology, and compliance requirements."
                  },
                  {
                    question: "What makes Digital Frontier different from other AI marketing agencies?",
                    answer: "We focus on both visibility (GEO/AEO) AND efficiency (AI automation) in one integrated system. Most agencies do one or the other. We also provide ongoing optimization, not just setup-and-forget services."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="mb-4 bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden transition-all hover:border-violet-500/50 faq-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="p-8 cursor-pointer font-semibold text-lg text-white transition-all hover:bg-violet-500/10 relative faq-question"
                      onClick={(e) => toggleFAQ(e.currentTarget)}
                    >
                      {faq.question}
                      <span className="absolute right-8 top-1/2 -translate-y-1/2 text-2xl text-violet-500 transition-transform">+</span>
                    </div>
                    <div className="px-8 pb-8 text-slate-300 leading-relaxed hidden faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Final CTA Section */}
        <section id="contact" className="py-32 text-center relative">
          <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-gradient-radial from-violet-500/30 to-transparent -translate-x-1/2 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-5 relative z-10">
            <motion.div 
              className="inline-block bg-red-500/10 border border-red-500/30 px-8 py-4 rounded-full mb-8 text-red-400 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              ⚠️ AI adoption is accelerating - don't get left behind
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-violet-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Dominate AI Search Results?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 text-slate-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Book your free 30-minute strategy session. We'll analyze your current AI visibility and show you exactly how to get found by AI engines.
            </motion.p>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-center mb-8 text-violet-400 text-2xl font-bold">Free Strategy Session</h3>
              
              <form onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Business Email*</label>
                  <input type="email" name="email" required placeholder="your@company.com" className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400" />
                </div>
                
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Company Name*</label>
                  <input type="text" name="company" required placeholder="Your Company" className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400" />
                </div>
                
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Phone Number*</label>
                  <input type="tel" name="phone" required placeholder="(901) 657-5007" className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400" />
                </div>
                
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Primary Interest*</label>
                  <select name="interest" required className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white">
                    <option value="">Select Service</option>
                    <option value="geo">Generative Engine Optimization (GEO)</option>
                    <option value="ai-agents">AI Agent Packages</option>
                    <option value="voice">AI Voice Assistants</option>
                    <option value="aeo">Answer Engine Optimization (AEO)</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Monthly Marketing Budget</label>
                  <select name="budget" className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white">
                    <option value="">Select Budget</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-slate-300 font-medium">Biggest Challenge</label>
                  <textarea name="challenge" placeholder="What's your biggest challenge with AI marketing or getting found online?" className="w-full p-4 border border-violet-500/30 rounded-xl bg-white/5 text-white placeholder-slate-400 h-32"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isContactFormLoading}
                  className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isContactFormLoading ? "Submitting..." : "Book My Free Strategy Session"}
                </button>
              </form>
              
              <div className="text-center mt-8 text-slate-400">
                <p>📞 Prefer to call? <a href="tel:901-657-5007" className="text-violet-400 no-underline">901-657-5007</a></p>
                <p>✉️ Quick question? <a href="mailto:info@digitalfrontier.app" className="text-violet-400 no-underline">info@digitalfrontier.app</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  );
};

export default AIPlansLanding;