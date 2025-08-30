import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
const InfluencerMarketing2025 = () => {
  useEffect(() => {
    // Add console logging to track component mounting
    console.log('InfluencerMarketing2025 component mounted successfully');
    console.log('Current pathname:', window.location.pathname);
    console.log('Current URL:', window.location.href);
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handlersMap = new Map();
    anchors.forEach(anchor => {
      const handler = function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      };
      handlersMap.set(anchor, handler);
      anchor.addEventListener('click', handler);
    });

    // Animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.hover-grow').forEach(element => {
      observer.observe(element);
    });
    return () => {
      anchors.forEach(anchor => {
        const handler = handlersMap.get(anchor);
        if (handler) {
          anchor.removeEventListener('click', handler);
        }
      });
      observer.disconnect();
    };
  }, []);
  return <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Helmet>
        <title>Memphis Influencer Marketing | Digital Frontier Company</title>
        <meta name="description" content="Connect with Memphis-based influencers and content creators. Digital Frontier Company's guide to collaborating with local micro-influencers, celebrities, and community leaders." />
        <link rel="canonical" href="https://digitalfrontier.app/influencer-marketing-2025" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hover-grow {
          transition: transform 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.03);
        }
        
        .platform-icon {
          transition: all 0.3s ease;
        }
        
        .platform-icon:hover {
          transform: translateY(-5px);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-delay {
          animation: float 6s ease-in-out infinite 1.5s;
        }
        
        .scroll-indicator {
          width: 24px;
          height: 40px;
          border: 2px solid white;
          border-radius: 12px;
          position: relative;
        }
        
        .scroll-indicator::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }
        
        @keyframes scroll {
          0% { opacity: 1; top: 6px; }
          100% { opacity: 0; top: 18px; }
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
      </div>


      {/* Hero Section */}
      <section className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text font-extrabold text-6xl my-[10px] mx-0 px-0 text-center">Memphis Influencer</span> Partnership Hub
            </h2>
            <p className="text-xl mb-8 max-w-lg text-slate-50">
              Digital Frontier Company connects with Memphis-based micro-influencers, local celebrities, and community leaders to create authentic collaborations that resonate with our city's unique culture and AI-driven digital marketing expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#differences" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
                Explore Strategies
              </a>
              <a href="#" className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition border border-gray-700">
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Influencer Marketing Client Testimonial 1" width="40" height="40" loading="lazy" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Influencer Marketing Client Testimonial 2" width="40" height="40" loading="lazy" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Influencer Marketing Client Testimonial 3" width="40" height="40" loading="lazy" />
              </div>
              <p className="text-gray-400">Trusted by <span className="text-white">850+</span> creators worldwide</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-indigo-900/30 blur-xl"></div>
            <div className="relative">
              <div className="glass-card p-1 rounded-2xl inline-block">
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Influencer creating content" className="rounded-2xl w-full max-w-md" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-xl shadow-xl w-64">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full">Live Analytics</span>
                  <span className="text-xs text-gray-500">Updated: Now</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-indigo-400">Engagement Rate</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold text-white">8.7%</p>
                      <p className="text-xs text-green-400 ml-2"><i className="fas fa-arrow-up mr-1"></i> 12%</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{
                    width: '87%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 -right-20 floating">
              <div className="glass-card p-4 rounded-xl w-40">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-xs text-gray-300">Active Now</span>
                </div>
                <p className="text-sm font-medium text-white">@digitalcreator</p>
                <p className="text-xs text-gray-400">+24% engagement</p>
              </div>
            </div>
            <div className="absolute bottom-10 -left-16 floating-delay">
              <div className="glass-card p-3 rounded-xl w-32">
                <p className="text-xs text-gray-300 mb-1">New Trend Alert</p>
                <p className="text-sm font-medium text-white">#CreatorEconomy</p>
                <p className="text-xs text-purple-300">+1.2M posts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Why Memphis Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-xl font-bold">MEMPHIS CREATORS</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-5xl">Why <span className="gradient-text">Memphis Influencers</span> Are Perfect Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Memphis creators understand authentic storytelling and AI-driven innovation in unique ways that resonate with our culture.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Authentic Memphis Voice</h3>
            <p className="text-gray-400">Local creators bring genuine Southern hospitality and cultural connection to digital marketing.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6">
              <i className="fas fa-robot text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Forward Mindset</h3>
            <p className="text-gray-400">Memphis creators are embracing AI tools and innovative tech solutions in their content strategies.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Community-First</h3>
            <p className="text-gray-400">Memphis influencers prioritize authentic community building over follower count metrics.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6">
              <i className="fas fa-music text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Cultural Storytelling</h3>
            <p className="text-gray-400">Drawing from Memphis's rich music and cultural heritage to create compelling brand narratives.</p>
          </div>
        </div>
      </section>

      {/* Core Differences Section */}
      <section id="differences" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-lg">KEY INSIGHTS</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-5xl">Influencer Marketing <span className="gradient-text">vs Digital Marketing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Traditional businesses and creators operate differently in the digital space.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900/50 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
                <th className="p-4 text-left text-gray-300 font-medium"></th>
                <th className="p-4 text-center text-gray-300 font-medium">Traditional Digital Marketing</th>
                <th className="p-4 text-center text-gray-300 font-medium">Influencer Marketing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Brand Voice</td>
                <td className="p-4 text-center text-gray-400">Institutional, standardized</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Personal, relatable</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Audience Connection</td>
                <td className="p-4 text-center text-gray-400">Broad targeting, analytics-based</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Community-based, comment-driven</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Funnel Structure</td>
                <td className="p-4 text-center text-gray-400">Awareness → Consideration → Action</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Attention → Engagement → Affinity → Action</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">KPIs</td>
                <td className="p-4 text-center text-gray-400">CTR, ROAS, Conversion Rate</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Engagement Rate, Save/Share Ratio</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Media Spend</td>
                <td className="p-4 text-center text-gray-400">Paid-first approach</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Organic-first, amplified with paid</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Feedback Speed</td>
                <td className="p-4 text-center text-gray-400">Weeks to measure impact</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Real-time in hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Memphis Outreach Templates Section */}
      <section id="outreach" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-xl">MEMPHIS OUTREACH</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-5xl">Proven <span className="gradient-text">Memphis Creator</span> Outreach Templates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Authentic outreach messages that resonate with Memphis influencers and content creators.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-900/30 text-indigo-400 rounded-lg p-3 mr-4">
                <i className="fas fa-user-tie text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Micro-Influencer Template</h3>
                <p className="text-gray-400 mb-4">For creators with 1K-10K followers</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300 italic">
                    "Hey [Name], I love your Memphis content, especially [specific post/video]. I'm [Your Name] from Digital Frontier Company - we're a local Memphis digital marketing agency specializing in AI-driven solutions. We'd love to collaborate on showcasing Memphis businesses embracing AI technology. Interested in a coffee chat at [local Memphis spot]?"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-indigo-400">
              <i className="fas fa-chart-line mr-2"></i>
              <span>80% response rate</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-purple-900/30 text-purple-400 rounded-lg p-3 mr-4">
                <i className="fas fa-crown text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Celebrity Template</h3>
                <p className="text-gray-400 mb-4">For established Memphis personalities</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300 italic">
                    "Hi [Name], as a prominent Memphis voice, you perfectly embody our city's innovative spirit. Digital Frontier Company is pioneering AI-powered marketing solutions here in Memphis. Would you be interested in a strategic partnership to showcase how Memphis businesses are leading the AI revolution? We believe your authentic voice could inspire other local entrepreneurs."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-purple-400">
              <i className="fas fa-chart-line mr-2"></i>
              <span>65% response rate</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-pink-900/30 text-pink-400 rounded-lg p-3 mr-4">
                <i className="fas fa-hands-helping text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Leader Template</h3>
                <p className="text-gray-400 mb-4">For Memphis community advocates</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300 italic">
                    "Hello [Name], your work in the Memphis community is inspiring. Digital Frontier Company is committed to empowering local Memphis businesses with cutting-edge AI marketing tools. We'd love to collaborate on content that showcases how technology can strengthen our local economy and community. Could we set up a time to discuss how we can support your mission?"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-pink-400">
              <i className="fas fa-chart-line mr-2"></i>
              <span>75% response rate</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-blue-900/30 text-blue-400 rounded-lg p-3 mr-4">
                <i className="fas fa-music text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Memphis Music Creator Template</h3>
                <p className="text-gray-400 mb-4">For music and arts content creators</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300 italic">
                    "Hey [Name], your Memphis music content captures our city's soul perfectly. Digital Frontier Company is working with local artists to showcase how AI can enhance creative processes without losing authenticity. Would you be interested in exploring how AI tools can amplify your music and reach while keeping that genuine Memphis sound? Let's create something that honors our musical heritage."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-blue-400">
              <i className="fas fa-chart-line mr-2"></i>
              <span>70% response rate</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
            Get More Memphis Outreach Templates <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Memphis Collaboration Ideas Section */}
      <section id="collaboration" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-extrabold text-lg">MEMPHIS COLLABORATIONS</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-4xl">Authentic <span className="gradient-text">Memphis Partnership</span> Ideas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Creative collaboration concepts that showcase Memphis culture while promoting Digital Frontier Company's AI expertise.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6">
              <i className="fas fa-video text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">"Memphis AI Stories" Series</h3>
            <p className="text-gray-400 mb-4">Partner with local creators to document Memphis businesses adopting AI technology, highlighting success stories and local innovation.</p>
            <div className="text-sm text-indigo-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Monthly series</span>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6">
              <i className="fas fa-utensils text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Memphis Food Tech Reviews</h3>
            <p className="text-gray-400 mb-4">Collaborate with Memphis food influencers to showcase how local restaurants use AI for ordering, customer service, and marketing.</p>
            <div className="text-sm text-purple-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Weekly content</span>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6">
              <i className="fas fa-microphone text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Memphis Music & AI Podcast</h3>
            <p className="text-gray-400 mb-4">Create a podcast series with Memphis musicians exploring how AI can enhance music production, promotion, and fan engagement.</p>
            <div className="text-sm text-pink-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Bi-weekly episodes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6">
              <i className="fas fa-shopping-bag text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Local Business Spotlights</h3>
            <p className="text-gray-400 mb-4">Partner with Memphis lifestyle influencers to create authentic content about local businesses using our AI marketing solutions.</p>
            <div className="text-sm text-blue-400">
              <i className="fas fa-clock mr-2"></i>
              <span>2-3 times per month</span>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6">
              <i className="fas fa-graduation-cap text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Memphis Creator Workshops</h3>
            <p className="text-gray-400 mb-4">Host educational workshops with Memphis influencers teaching other creators how to use AI tools for content creation and business growth.</p>
            <div className="text-sm text-green-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Monthly workshops</span>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-orange-900/30 flex items-center justify-center text-orange-400 mb-6">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Memphis Community Challenges</h3>
            <p className="text-gray-400 mb-4">Create viral challenges with Memphis creators that promote local businesses, community involvement, and showcase AI innovation in a fun way.</p>
            <div className="text-sm text-orange-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Quarterly challenges</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
            Partner With Digital Frontier Company <i className="fas fa-handshake ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Platform Specific Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-lg font-bold">PLATFORM STRATEGIES</span>
          <h2 className="text-3xl mt-2 mb-4 md:text-5xl font-extrabold"><span className="gradient-text">Platform-Specific</span> Influencer Tactics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Optimized strategies for each major platform in 2025's creator landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-indigo-900/20 text-indigo-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-tiktok"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">TikTok Dominance</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Micro-hooks in first 0.5 seconds</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Use auto-captions for accessibility</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Cross-pollinate with micro-niches</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-pink-900/20 text-pink-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Instagram Evolution</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Strategic Story Highlights</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Create two-way engagement loops</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Leverage interactive stickers daily</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-red-900/20 text-red-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">YouTube Authority</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Optimize for watch time over views</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Use clickable timestamps</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Create predictable content rhythms</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-blue-900/20 text-blue-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Twitter/X Engagement</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Post threaded content</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Quote tweets strategically</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Engage in trending topics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-xl">MONETIZATION</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-6xl">Influencer Marketing <span className="gradient-text">Packages</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Understanding and pricing your influencer marketing packages effectively in 2025.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 hover-grow rounded-xl overflow-hidden border border-gray-800 transition">
            <div className="bg-gray-800 p-6">
              <h3 className="font-bold text-xl text-white">Starter Package</h3>
              <p className="text-indigo-400">For micro-influencers & emerging creators</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$800-1,500</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>3 TikTok videos (concept + execution)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>5 Instagram Story mentions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>Basic analytics report</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition border border-gray-700">
                Choose Starter
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 hover-grow rounded-xl overflow-hidden border border-purple-800 shadow-lg transform scale-[1.02] z-10 transition">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">Premium Package</h3>
                  <p>For mid-tier influencers with established followings</p>
                </div>
                <span className="bg-white text-purple-800 px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$2,500-5,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>3 TikTok videos + 1 full YouTube review</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>10 Instagram Story mentions with swipe-ups</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>Twitter & email newsletter mention</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>Advanced influencer marketing KPIs report</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-md">
                Choose Premium
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 hover-grow rounded-xl overflow-hidden border border-gray-800 transition">
            <div className="bg-black p-6 text-white">
              <h3 className="font-bold text-xl">Elite Package</h3>
              <p>For macro-influencers & top creators</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$8,000-20,000+</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Custom content series across all platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Co-created product or campaign</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Long-term ambassadorship</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Exclusive rights and performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Custom video production and editing</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition">
                Contact for Elite
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 italic max-w-3xl mx-auto">Pro Tip: Don't price by follower count—price by audience quality and conversion power. Brands pay for impact, not impressions.</p>
        </div>
      </section>

      {/* KPIs Section */}
      <section id="kpis" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-xl font-normal">PERFORMANCE METRICS</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-5xl">Influencer Marketing <span className="gradient-text">KPIs to Track</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Move beyond vanity metrics with these advanced influencer marketing KPIs that matter in 2025.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400">
                <i className="fas fa-bookmark text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">1:3</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Saves-to-Likes Ratio</h3>
            <p className="text-gray-400">Indicates content value and repeat viewing potential beyond initial engagement.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                <i className="fas fa-star text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">92%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">Engagement Quality Score</h3>
            <p className="text-gray-400">Weighted metric considering comment depth and response rates rather than just likes.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-400">
                <i className="fas fa-eye text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text">79%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400">Audience Retention</h3>
            <p className="text-gray-400">Percentage of viewers who watch your video content through to completion.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400">
                <i className="fas fa-play text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">85%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">Story Completion Rate</h3>
            <p className="text-gray-400">How often viewers watch your Instagram or Snapchat stories all the way through.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400">
                <i className="fas fa-exchange-alt text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">3.2x</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Conversion by Platform</h3>
            <p className="text-gray-400">Relative performance of DMs, link clicks, and coupon usage across different platforms.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                <i className="fas fa-smile text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">9.5/10</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">Sentiment Score</h3>
            <p className="text-gray-400">AI-analyzed tone and emotion from comments and mentions.</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
            <i className="fas fa-download mr-2"></i> Get KPI Dashboard Template
          </Link>
        </div>
      </section>

      {/* The Role Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-lg font-bold">TEAM STRATEGY</span>
            <h2 className="text-3xl mt-2 mb-6 font-extrabold md:text-5xl">The Role of an <span className="gradient-text">Influencer Marketing Manager</span></h2>
            <p className="text-gray-400 mb-8">Behind every thriving influencer is often a sharp influencer marketing manager who coordinates the strategic and operational aspects of building a personal brand at scale.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-900/30 text-indigo-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Campaign Coordination</h4>
                  <p className="text-gray-400">Negotiates brand deals and ensures alignment with creator's personal brand.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-900/30 text-purple-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Data Analysis</h4>
                  <p className="text-gray-400">Tracks KPIs and optimizes content strategy based on performance data.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-900/30 text-pink-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Brand Protection</h4>
                  <p className="text-gray-400">Ensures consistency across all touchpoints and prevents brand dilution.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-900/20 rounded-2xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Influencer marketing manager at work" className="rounded-2xl shadow-lg w-full object-cover" style={{
              minHeight: '400px'
            }} />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Frontier Approach Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-lg font-bold">DIGITAL FRONTIER APPROACH</span>
          <h2 className="text-3xl mt-2 mb-4 font-extrabold md:text-5xl">Our <span className="gradient-text">Memphis-First</span> Strategy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">How Digital Frontier Company combines AI-powered marketing with authentic Memphis creator partnerships.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-bold">AI-Powered Memphis Marketing</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">For Local Businesses</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>AI sentiment analysis for Memphis market trends</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>Automated local influencer matching and outreach</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>Predictive analytics for Memphis consumer behavior</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">For Memphis Creators</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>AI content optimization for Memphis audiences</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>Authentic Memphis storytelling with AI insights</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>Local collaboration opportunities through AI matching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold">Community-Centered Partnerships</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">Memphis Values</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>Genuine relationships over transactional deals</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>Supporting local creator growth and success</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>Celebrating Memphis culture and heritage</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">Digital Innovation</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>Cutting-edge AI tools for creative enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>Data-driven insights for Memphis market success</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>Future-focused strategies with local authenticity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl my-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with <span className="gradient-text">Digital Frontier Company</span>?</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8">Join Memphis's most innovative creators in partnerships that blend authentic local culture with cutting-edge AI marketing solutions. Let's build something amazing together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Get Memphis Creator Kit <i className="fas fa-download ml-2"></i>
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition">
              Schedule Partnership Call
            </Link>
          </div>
          <div className="mt-8 text-indigo-200 text-sm">
            <p>📍 Based in Memphis, TN | 🤖 AI-Powered Marketing | 🎵 Authentic Memphis Culture</p>
          </div>
        </div>
      </section>

    </div>;
};
export default InfluencerMarketing2025;