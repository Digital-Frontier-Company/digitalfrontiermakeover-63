import React from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import { ArrowRight, Zap, Target, TrendingUp, Search, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const GenerativeSearchProSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-2 rounded-full border border-blue-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Revolutionary AI Search Tool</span>
            </div>
            
            <LazyImage
              src="/lovable-uploads/30207d1d-92e1-4548-8dde-2caa5be7c00c.png"
              alt="GenerativeSearch.pro - AI-Powered Search Optimization"
              className="mx-auto mb-8 h-24 w-auto"
              displayWidth={400}
              displayHeight={96}
            />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Generative Search Pro
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Turn every prompt into a spotlight. The world's first AI-powered tool for 
              <span className="text-blue-400 font-semibold"> Generative Engine Optimization</span> and 
              <span className="text-purple-400 font-semibold"> Answer Engine Optimization</span>.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Search Mastery</h3>
              <p className="text-slate-300 leading-relaxed">
                Optimize your content for ChatGPT, Claude, Perplexity, and all major AI search engines with precision-engineered prompts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-slate-300 leading-relaxed">
                Real-time tracking of your AI search performance with detailed insights and competitive analysis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Future-Proof SEO</h3>
              <p className="text-slate-300 leading-relaxed">
                Stay ahead of the curve with GEO and AEO strategies that adapt to the evolving AI search landscape.
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder & CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Video Placeholder - Ready for when video is provided */}
            <div className="mb-8 bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30">
              <div className="flex items-center justify-center mb-4">
                <LazyImage
                  src="/lovable-uploads/e2c1fe64-5498-4478-b0e8-bf730de084aa.png"
                  alt="GenerativeSearch.pro Demo"
                  className="h-16 w-auto"
                  displayWidth={200}
                  displayHeight={64}
                />
              </div>
              <p className="text-slate-400 text-lg mb-4">Watch the Demo</p>
              <div className="w-full h-64 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl flex items-center justify-center border border-slate-600/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-slate-300">Video Coming Soon</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate AI Search Results?
            </h3>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already winning in the age of AI search with GenerativeSearch.pro
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://generativesearch.pro" 
                target="_blank" 
                rel="dofollow"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Launch GenerativeSearch.pro</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <Link 
                to="/modern-contact-form"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-500 text-slate-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300"
              >
                Get Expert Help
              </Link>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <p>Free trial available • No credit card required • Setup in 5 minutes</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GenerativeSearchProSection;