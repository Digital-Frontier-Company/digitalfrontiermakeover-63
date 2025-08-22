import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import FAQSection from "@/components/FAQSection";
import { ChevronDown } from "lucide-react";

const PsychologicalDigitalMarketingInsights = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseFloat((entry.target as HTMLElement).style.animationDelay) || 0;
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, delay * 1000);
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => scrollObserver.observe(el));

    // Animated Number Counters
    const counterElements = document.querySelectorAll('.animated-counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = +(el.getAttribute('data-target') || 0);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1500;
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * target);
            el.textContent = currentValue.toLocaleString();
            if (suffix) {
              el.textContent += suffix;
            }
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    return () => {
      scrollObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  const faqItems = [
    {
      question: "How does behavioral economics impact ROI?",
      answer: (
        <div>
          <p className="mb-3">Behavioral economics principles can dramatically improve marketing ROI by aligning your strategies with how people actually make decisions (rather than how we think they should). For example:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scarcity tactics can increase conversion rates by <span className="animated-counter text-cyan-400 font-semibold" data-target="30">0</span>% (approx.)</li>
            <li>Social proof can reduce cart abandonment by up to <span className="animated-counter text-cyan-400 font-semibold" data-target="15">0</span>%</li>
            <li>Anchoring in pricing can increase average order value by <span className="animated-counter text-cyan-400 font-semibold" data-target="25">0</span>% (approx.)</li>
          </ul>
          <p className="mt-3">The key is testing which principles resonate most with your specific audience.</p>
        </div>
      )
    },
    {
      question: "What are the top 3 emotional triggers for B2B?",
      answer: (
        <div>
          <p className="mb-3">While B2B decisions are often considered more rational, emotions still play a crucial role. The top three emotional triggers in B2B marketing are:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Fear of Missing Out (FOMO):</strong> The anxiety about falling behind competitors or missing industry trends</li>
            <li><strong>Trust & Security:</strong> The need to feel confident in their vendor choices to protect their career and company</li>
            <li><strong>Pride & Achievement:</strong> The desire to be recognized as innovative or high-performing within their organization</li>
          </ol>
        </div>
      )
    },
    {
      question: "How can I use social proof with a new product?",
      answer: (
        <div>
          <p className="mb-3">Even with new products, you can leverage social proof effectively:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Expert endorsements:</strong> Get industry influencers or thought leaders to try your product first</li>
            <li><strong>Beta tester testimonials:</strong> Share feedback from your beta testing phase</li>
            <li><strong>Pilot program results:</strong> Highlight results from early adopters or pilot customers</li>
            <li><strong>Media mentions:</strong> Showcase any press coverage or industry analyst recognition</li>
            <li><strong>Analyst predictions:</strong> Reference market trends that position your product as the future</li>
          </ul>
          <p className="mt-3">The key is framing early adoption as exclusive and forward-thinking.</p>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="The Psychology of Digital Marketing"
      subtitle="Influencing Behavior Online"
      currentPath="/psychological-digital-marketing-insights"
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
        .psych-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(6, 182, 212, 0.2);
        }
        .psych-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 30px rgba(6, 182, 212, 0.25);
          border-color: #06b6d4;
        }
        .emotion-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(6, 182, 212, 0.1);
        }
        .emotion-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.15);
          border-color: #06b6d4;
        }
        .emotion-card:hover .emotion-icon {
          transform: scale(1.2) rotate(5deg);
          color: #22d3ee;
        }
        .emotion-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .animated-counter {
          display: inline-block;
          font-weight: bold;
          color: #22d3ee;
        }
      `}</style>

      {/* Override the default container width with minimal margins */}
      <div className="w-full max-w-none">
        {/* Main Content - Full Width */}
        <article className="w-full">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-xl relative scroll-animate">
            <img 
              src="/lovable-uploads/6e340f33-4f2f-4d06-a240-7f89dbb8bd17.png" 
              alt="The Psychology of Digital Marketing - Influencing Behavior Online with brain illustration and social media icons" 
              className="w-full h-64 md:h-96 object-contain"
              width="1470"
              height="980"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
              <div>
                <span className="bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">PSYCHOLOGY</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight text-white">
                  The Psychology of Digital Marketing:<br/>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Influencing Behavior Online</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-8 scroll-animate">
            <div className="flex items-center text-sm text-slate-400">
              <span>Published on June 15, 2023</span>
              <span className="mx-2">•</span>
              <span>12 min read</span>
              <span className="mx-2">•</span>
              <span className="text-cyan-400">Marketing Psychology</span>
            </div>
          </header>

          {/* Introduction Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-key mr-2"></i> Unlocking the Digital Mind: Why Psychology is Your Marketing Superpower
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">In today's crowded digital landscape, understanding why people click, buy, and engage is no longer a luxury—it's essential. This guide reveals how psychological principles can transform your marketing from mere noise into a resonant, action-driving force.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-chess-king mr-2"></i> The Cornerstone of Effective Digital Marketing
                </h3>
                <p className="text-sm">Learn how tapping into human behavior enhances every aspect of your strategy, from initial engagement to long-term loyalty, positioning you at the forefront of the digital frontier.</p>
                <a href="#" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition">
                  Explore Foundational Principles <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-hand-holding-heart mr-2"></i> Ethical Persuasion: Marketing with Integrity
                </h3>
                <p className="text-sm">Discover the fine line between powerful persuasion and unethical manipulation. We champion strategies that build trust and provide genuine value, fostering sustainable growth.</p>
                <a href="#" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition">
                  Learn Ethical Practices <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </section>

          {/* Behavioral Economics Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-chart-line mr-2"></i> Behavioral Economics: The Irrational Consumer & Decision Making
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">Humans aren't always rational, especially when making purchasing decisions. Dive into how cognitive biases and emotional factors shape consumer choices, and learn to design strategies that align with these natural tendencies.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-hourglass-half mr-2"></i> Scarcity: "Want What You Can't (Easily) Have"
                </h3>
                <p className="text-sm mb-3">Products seem more valuable when availability is limited. Implement countdown timers, stock indicators, and exclusive offers to trigger immediate action.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Behavioral Bias</span>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                    See Examples <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-bolt mr-2"></i> Urgency: "The Power of Now"
                </h3>
                <p className="text-sm mb-3">Compel immediate decisions with time-sensitive offers. Flash sales and 'ends tonight' banners create a fear of missing out that drives conversions.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Psychological Trigger</span>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                    Learn Techniques <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-anchor mr-2"></i> Anchoring: "First Impressions Count (A Lot)"
                </h3>
                <p className="text-sm mb-3">The first piece of information heavily influences subsequent judgments. Strategically present pricing and information to set favorable anchors.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Cognitive Bias</span>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                    Pricing Strategies <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
                  <i className="fas fa-users mr-2"></i> Bandwagon Effect: "Everyone's Doing It!"
                </h3>
                <p className="text-sm mb-3">Leverage the human tendency to follow the crowd. Showcase testimonials, user counts, and trending items to encourage adoption.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Social Proof</span>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                    Ethical Implementation <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 scroll-animate">
              <Link 
                to="/emotional-marketing-playbook"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition"
              >
                <i className="fas fa-book mr-2"></i> Explore All Cognitive Biases
              </Link>
            </div>
          </section>

          {/* Emotional Triggers Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-heart mr-2"></i> Emotional Triggers: The Heart of Customer Engagement
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">Emotions are the engine of decision-making. Learn to craft messages that evoke specific feelings, creating deeper bonds, unwavering trust, and lasting loyalty with your audience.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-laugh-beam text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">Joy & Happiness</h3>
                <p className="text-xs">Use uplifting content to make your brand a source of positivity</p>
              </div>
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-clock text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">FOMO</h3>
                <p className="text-xs">Leverage fear of missing out with limited-time offers</p>
              </div>
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-lock text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">Trust & Security</h3>
                <p className="text-xs">Reinforce that your brand is reliable and trustworthy</p>
              </div>
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-fire text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">Anticipation</h3>
                <p className="text-xs">Create excitement around launches and updates</p>
              </div>
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-users text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">Belonging</h3>
                <p className="text-xs">Make users feel part of something bigger</p>
              </div>
              <div className="emotion-card bg-slate-800/30 p-4 rounded-lg text-center scroll-animate">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <i className="fas fa-book-open text-xl emotion-icon"></i>
                </div>
                <h3 className="font-bold mb-2">Storytelling</h3>
                <p className="text-xs">Weave narratives that captivate and engage</p>
              </div>
            </div>
            
            <div className="text-center mt-6 scroll-animate">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-medium rounded-lg transition">
                <i className="fas fa-download mr-2"></i> Get Emotional Marketing Playbook
              </a>
            </div>
          </section>

          {/* Social Influence Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-users mr-2"></i> Social Influence: The Power of the Crowd and Authority
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">We are inherently social creatures, constantly looking to others for cues on how to act and what to believe. Understand and leverage these dynamics to amplify your marketing impact.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <i className="fas fa-thumbs-up text-cyan-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">Social Proof</h3>
                    <p className="text-sm">Showcase testimonials, reviews, user-generated content, and influencer endorsements to build credibility and reduce purchase anxiety.</p>
                  </div>
                </div>
                <div className="bg-slate-700/30 p-4 rounded">
                  <h4 className="font-bold text-sm mb-2 text-cyan-400">Implementation Ideas:</h4>
                  <ul className="text-xs space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span>Customer testimonials with photos</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span>User-generated content campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span><span className="animated-counter" data-target="1000" data-suffix="+">0</span> customers served counters</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <i className="fas fa-user-tie text-cyan-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">Authority</h3>
                    <p className="text-sm">Position your brand (or associate it with) recognized experts, certifications, and media mentions to gain instant credibility and trust.</p>
                  </div>
                </div>
                <div className="bg-slate-700/30 p-4 rounded">
                  <h4 className="font-bold text-sm mb-2 text-cyan-400">Implementation Ideas:</h4>
                  <ul className="text-xs space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span>Expert interviews and quotes</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span>Media logos and press mentions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mr-2 mt-1 text-xs"></i>
                      <span>Certifications and awards display</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-star mr-2"></i> Case Study: Nike's Psychological Mastery
            </h2>
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">Nike doesn't just sell shoes; they sell aspiration, achievement, and belonging. Deconstruct their iconic campaigns to see how they masterfully weave psychological principles into their digital frontier marketing, creating a global tribe.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h3 className="font-bold text-lg text-cyan-400">Emotional Storytelling</h3>
                </div>
                <p className="text-sm mb-4">The "Just Do It" campaign taps into universal human desires for achievement and self-improvement, creating powerful emotional connections.</p>
                <div className="flex items-center text-xs text-slate-400">
                  <i className="fas fa-chart-line mr-1 text-cyan-400"></i>
                  <span>Result: <span className="animated-counter" data-target="31">0</span>% increase in sales after campaign launch</span>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="font-bold text-lg text-cyan-400">Community Building</h3>
                </div>
                <p className="text-sm mb-4">Nike+ transformed customers into a community of athletes, leveraging the powerful psychological need for belonging and social validation.</p>
                <div className="flex items-center text-xs text-slate-400">
                  <i className="fas fa-chart-line mr-1 text-cyan-400"></i>
                  <span>Result: <span className="animated-counter" data-target="28" data-suffix=" million">0</span> active Nike+ members worldwide</span>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h3 className="font-bold text-lg text-cyan-400">Authority Endorsements</h3>
                </div>
                <p className="text-sm mb-4">Strategic partnerships with elite athletes provide credibility and aspiration, leveraging the authority bias and halo effect.</p>
                <div className="flex items-center text-xs text-slate-400">
                  <i className="fas fa-chart-line mr-1 text-cyan-400"></i>
                  <span>Result: <span className="animated-counter" data-target="10">0</span>:1 ROI on athlete endorsement deals</span>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3 className="font-bold text-lg text-cyan-400">Personalization at Scale</h3>
                </div>
                <p className="text-sm mb-4">Nike By You customization options tap into the psychological ownership effect, making customers feel their product is uniquely theirs.</p>
                <div className="flex items-center text-xs text-slate-400">
                  <i className="fas fa-chart-line mr-1 text-cyan-400"></i>
                  <span>Result: <span className="animated-counter" data-target="40">0</span>% higher retention for customized product buyers</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 scroll-animate">
              <a href="#" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition">
                <i className="fas fa-book-open mr-2"></i> Download Full Case Study Analysis
              </a>
            </div>
          </section>

          {/* Actionable Insights Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-rocket mr-2"></i> Actionable Insights: Implementing Psychological Marketing
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-lg mb-6 scroll-animate">
              <p className="text-lg">Ready to put these powerful insights into action? This section provides a practical roadmap for integrating psychological principles into your day-to-day digital marketing efforts for measurable results.</p>
            </div>
            
            <div className="space-y-6">
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <i className="fas fa-user-circle text-cyan-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">Know Your Audience Deeply</h3>
                    <p className="text-sm mb-4">Develop rich buyer personas and empathy maps to truly understand your audience's motivations, fears, and desires. Go beyond demographics to uncover psychological triggers.</p>
                    <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition">
                      <i className="fas fa-download mr-2"></i> Download Buyer Persona Template
                    </a>
                  </div>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <i className="fas fa-funnel-dollar text-cyan-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">Integrate Across the Funnel</h3>
                    <p className="text-sm mb-4">Apply psychological tactics strategically at each stage of the customer journey, from awareness (social proof) to consideration (authority) to decision (scarcity) to retention (reciprocity).</p>
                    <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition">
                      <i className="fas fa-external-link-alt mr-2"></i> View Funnel Integration Guide
                    </a>
                  </div>
                </div>
              </div>
              <div className="psych-card bg-slate-800/30 p-6 rounded-lg scroll-animate">
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <i className="fas fa-vial text-cyan-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">A/B Test Relentlessly</h3>
                    <p className="text-sm mb-4">Continuously experiment with different psychological triggers to discover what resonates most effectively with your specific audience. What works for one brand may not work for another.</p>
                    <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition">
                      <i className="fas fa-file-alt mr-2"></i> Get A/B Testing Checklist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-question-circle mr-2"></i> FAQ: Psychological Marketing Questions Answered
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-slate-700 rounded-lg overflow-hidden scroll-animate">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 bg-slate-800/30 hover:bg-slate-800/50 transition text-left"
                  >
                    <h3 className="font-bold">{item.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === index && (
                    <div className="bg-slate-800/20 p-4 text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6 scroll-animate">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-medium rounded-lg transition">
                <i className="fas fa-question-circle mr-2"></i> View All FAQs
              </a>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="mb-12 scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2">
              <i className="fas fa-flag-checkered mr-2"></i> Conclusion: The Future is Human-Centric
            </h2>
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center scroll-animate">
              <div className="max-w-3xl mx-auto">
                <i className="fas fa-brain text-5xl mb-4 text-cyan-400 scroll-animate"></i>
                <h3 className="text-2xl font-bold mb-4 scroll-animate">Lead with Psychological Insight</h3>
                <p className="text-lg mb-6 scroll-animate">In an increasingly automated world, a deep understanding of human psychology is your ultimate competitive advantage. Embrace these strategies to not just reach customers, but to truly connect with them, building lasting relationships and leading the charge on the digital frontier.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 scroll-animate">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition">
                    <i className="fas fa-play mr-2"></i> Start Your Journey Today
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-medium rounded-lg transition">
                    <i className="fas fa-calendar-alt mr-2"></i> Book Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Author Bio */}
          <div className="flex items-center mt-12 p-6 bg-slate-800/30 rounded-lg scroll-animate">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className="w-16 h-16 rounded-full mr-4 scroll-animate" />
            <div className="scroll-animate">
              <h3 className="font-bold text-lg">Sarah Johnson</h3>
              <p className="text-sm text-slate-400 mb-2">Chief Marketing Strategist</p>
              <p className="text-sm">Sarah specializes in behavioral marketing strategies and has helped over <span className="animated-counter" data-target="200">0</span> brands transform their digital presence through psychological insights.</p>
            </div>
          </div>
        </article>
      </div>

      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </PageLayout>
  );
};

export default PsychologicalDigitalMarketingInsights;
