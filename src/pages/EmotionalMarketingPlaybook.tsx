
import React, { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ChevronDown } from "lucide-react";

const EmotionalMarketingPlaybook = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Strategy data
  const strategies = [
    {
      id: 1,
      title: "SWOT Analysis",
      description: "Identify strengths, weaknesses, opportunities, and threats to inform strategic planning.",
      category: "business",
      icon: "fas fa-clipboard-list",
      color: "bg-cyan-400/20 text-cyan-400"
    },
    {
      id: 2,
      title: "Porter's Five Forces", 
      description: "Analyze industry competition and profitability through five key forces.",
      category: "business",
      icon: "fas fa-chess-board",
      color: "bg-blue-400/20 text-blue-400"
    },
    {
      id: 3,
      title: "Blue Ocean Strategy",
      description: "Create uncontested market space by making competition irrelevant.",
      category: "business", 
      icon: "fas fa-water",
      color: "bg-cyan-400/20 text-cyan-400"
    },
    {
      id: 4,
      title: "Growth Hacking",
      description: "Rapid experimentation across marketing channels to identify efficient growth.",
      category: "growth",
      icon: "fas fa-chart-line", 
      color: "bg-green-400/20 text-green-400"
    },
    {
      id: 5,
      title: "OKR Framework",
      description: "Set and track objectives with measurable key results for alignment.",
      category: "personal",
      icon: "fas fa-bullseye",
      color: "bg-purple-400/20 text-purple-400"
    },
    {
      id: 6,
      title: "Inbound Marketing",
      description: "Attract customers through valuable content rather than interruptive ads.",
      category: "marketing",
      icon: "fas fa-magnet",
      color: "bg-amber-400/20 text-amber-400"
    },
    {
      id: 7,
      title: "Lean Startup",
      description: "Build-measure-learn feedback loop to develop products efficiently.",
      category: "business",
      icon: "fas fa-leaf",
      color: "bg-emerald-400/20 text-emerald-400"
    },
    {
      id: 8,
      title: "Content Marketing",
      description: "Create and distribute valuable content to attract and retain customers.",
      category: "marketing",
      icon: "fas fa-pen-fancy",
      color: "bg-pink-400/20 text-pink-400"
    },
    {
      id: 9,
      title: "Personal Branding",
      description: "Establish a prescribed image in the minds of others for career growth.",
      category: "personal",
      icon: "fas fa-user-tie",
      color: "bg-orange-400/20 text-orange-400"
    }
  ];

  const faqItems = [
    {
      question: "How do I choose the right strategy for my business?",
      answer: "Choosing the right strategy depends on several factors including your business size, industry, competitive landscape, and goals. Start by conducting a SWOT analysis to understand your strengths, weaknesses, opportunities, and threats. Then match these insights with strategy frameworks that address your specific challenges."
    },
    {
      question: "How long does it take to implement these strategies?",
      answer: "Implementation timelines vary significantly based on the complexity of the strategy and your organization's readiness. Some marketing strategies can show results in weeks, while comprehensive business transformations may take months or years. We recommend starting with pilot projects to test strategies before full implementation."
    },
    {
      question: "Can these strategies be combined?",
      answer: "Absolutely! Many successful organizations combine elements from different strategic frameworks to create a customized approach. For example, you might use Blue Ocean Strategy to identify new market opportunities while employing Lean methodology to optimize operations."
    },
    {
      question: "Do you offer consulting services for strategy implementation?",
      answer: "Yes, we have a team of experienced strategy consultants who can guide you through the entire process from selection to implementation. Our services include workshops, training programs, and ongoing support to ensure successful execution."
    }
  ];

  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => scrollObserver.observe(el));

    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  const filteredStrategies = activeTab === 'all' 
    ? strategies 
    : strategies.filter(strategy => strategy.category === activeTab);

  return (
    <PageLayout
      title="Emotional Marketing Playbook"
      subtitle="Master the Art of Strategic Marketing"
      currentPath="/emotional-marketing-playbook"
    >
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .scroll-animate.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .strategy-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(6, 182, 212, 0.2);
        }
        .strategy-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 30px rgba(6, 182, 212, 0.25);
          border-color: #06b6d4;
        }
        .tab-button {
          transition: all 0.3s ease;
        }
        .tab-button.active {
          background-color: rgba(6, 182, 212, 0.2);
          color: #22d3ee;
          border-color: #06b6d4;
        }
      `}</style>

      {/* Full width content */}
      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12 scroll-animate">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master the Art of <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Strategic Marketing</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-300">
                Discover proven strategies to elevate your business, personal growth, and competitive edge in any market.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Strategy Tabs */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Explore Our Strategy Frameworks</h2>
            
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {['all', 'business', 'marketing', 'growth', 'personal'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`tab-button px-6 py-2 rounded-full font-medium border ${
                    activeTab === category 
                      ? 'active' 
                      : 'bg-slate-800/30 text-slate-300 border-slate-600 hover:border-cyan-400/50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} 
                  {category === 'all' && ' Strategies'}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStrategies.map((strategy) => (
                <div key={strategy.id} className="strategy-card bg-slate-800/30 rounded-lg p-6 flex flex-col h-full scroll-animate">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${strategy.color} flex items-center justify-center mr-4`}>
                      <i className={`${strategy.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-6 flex-grow">{strategy.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium capitalize">
                      {strategy.category}
                    </span>
                    <button className="text-cyan-400 font-medium hover:text-cyan-300 transition">
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Strategy */}
          <section className="mb-12 scroll-animate">
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 bg-slate-800/30">
                  <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    Featured Strategy
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">Blue Ocean Strategy</h3>
                  <p className="text-slate-300 mb-6">
                    Create uncontested market space and make the competition irrelevant by reconstructing market boundaries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium">Innovation</span>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium">Market Creation</span>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium">Value Innovation</span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition">
                    Learn More
                  </button>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h4 className="text-xl font-semibold mb-4 text-white">Key Principles</h4>
                  <div className="space-y-4">
                    {[
                      "Eliminate factors your industry takes for granted but don't create value",
                      "Reduce factors below industry standard that have been over-designed",
                      "Raise factors that should be boosted well above industry standard",
                      "Create new factors the industry has never offered to unlock new demand"
                    ].map((principle, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center">
                            <span className="text-sm font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-slate-300">{principle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Frequently Asked Questions</h2>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-slate-700 rounded-lg overflow-hidden scroll-animate">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 bg-slate-800/30 hover:bg-slate-800/50 transition text-left"
                  >
                    <h3 className="font-bold text-white">{item.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === index && (
                    <div className="bg-slate-800/20 p-6 text-slate-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12 scroll-animate">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Approach?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                Join thousands of businesses and professionals who have revolutionized their strategies with our frameworks.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Get Started Now
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 transition">
                  <i className="fas fa-calendar-alt mr-2"></i> Book a Consultation
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </PageLayout>
  );
};

export default EmotionalMarketingPlaybook;
