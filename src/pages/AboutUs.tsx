
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, BarChart, Brain, Rocket, Target, Globe, Briefcase, FileText, Building, Code, BarChart2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutUs = () => {
  return (
    <PageLayout 
      title="About Digital Frontier: Expert Digital Marketing & AI Implementation Team | Memphis-Based Innovation Leaders"
      subtitle="Meet the experts behind cutting-edge digital marketing strategies, AI solutions, and proven business transformation techniques"
      currentPath="/about-us"
    >
      {/* David Thompson Logo Banner */}
      <div className="w-full mb-10 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-900 p-4 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/bdef0584-bc16-4946-90f8-c741502dc157.png" 
            alt="David Thompson, CEO of Digital Frontier Company" 
            className="w-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="text-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">
            Bridging the Gap Between Technology and Trends — Turning Vision into Reality
          </h2>
          
          <div className="mb-6">
            <p className="mb-4"><strong className="text-blue-400">David Thompson, CEO / Founder's Story</strong> – Growing up in Memphis, Tennessee,
              David cultivated a deep appreciation for discipline, innovation, and the transformative power of technology...</p>
            
            <p className="mb-4">With a background in computer science and digital marketing, David founded Digital Frontier in 2025 with a vision to 
              bridge the gap between cutting-edge AI technology and practical business applications. His journey from coding enthusiast to 
              digital marketing pioneer reflects the company's commitment to staying ahead of technological trends while remaining firmly 
              grounded in delivering measurable results for clients.</p>

            <p className="mb-4">Today, under David's leadership, Digital Frontier stands at the forefront of Answer Engine Optimization and 
              AI-driven marketing solutions, helping businesses across various sectors navigate the rapidly evolving digital landscape.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center">
              <span className="mr-2 bg-slate-800/60 p-2 rounded-full"><BarChart size={20} className="text-blue-400" /></span>
              Data-Driven Insights
            </h3>
            <p className="mb-4 pl-10">Utilizing analytics to guide decisions, ensuring smart moves that maximize your marketing efforts.</p>
            
            <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center">
              <span className="mr-2 bg-slate-800/60 p-2 rounded-full"><Target size={20} className="text-blue-400" /></span>
              Enhanced Strategies
            </h3>
            <p className="mb-4 pl-10">We provide tailored strategies that elevate your brand presence and engagement in a competitive market.</p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl mb-8 border border-slate-700/50">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Digital Frontier's Solution</h3>
            <p className="mb-4">Our expertise spans:</p>
            
            <div className="space-y-4 pl-4">
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Code size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">AI Integration</p>
                  <p className="text-slate-300">Deploying intelligent tools to streamline processes in real estate, finance, and cryptocurrency.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Globe size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">Digital Marketing and Social Media</p>
                  <p className="text-slate-300">Crafting campaigns that resonate, leveraging platforms like Facebook, Instagram, and LinkedIn to build authentic connections and measurable results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><BarChart2 size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">Portfolio Optimization in CryptoCurrency Markets</p>
                  <p className="text-slate-300">Using Post-Modern Portfolio Theory (PMPT) to help clients balance risk and reward while considering psychological comfort.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4">Our ultimate ambition is to serve businesses across all industries, offering consultation and tailored solutions for any market. To maximize our impact and deepen our understanding of audience needs, we are focusing initially on the real estate sector and our AEO Software. These areas represents a unique opportunity to create meaningful change, applying our expertise to help real estate professionals unlock new possibilities and achieve their goals.</p>
            
            <p className="mb-4">Digital Frontier's mission is to lead a new paradigm in technology and marketing. While we aim to expand across all sectors, our initial focus on real estate allows us to refine our approach, ensuring we deliver unmatched value. As we grow, our vision remains steadfast: to empower businesses with tools and strategies that balance innovation with humanity.</p>
            
            <p className="mb-4">Our approach is grounded in listening and understanding. Whether through a social media campaign, a digital ad strategy, or an AI-driven solution, we start every project by asking: "How can we amplify your vision?" This commitment to partnership ensures that our clients' goals become the core of our innovations.</p>
          </div>
          
          <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 rounded-xl p-6 border border-slate-700/50 mb-8">
            <h3 className="text-xl font-bold mb-3 text-center text-blue-400 flex items-center justify-center">
              <Globe size={20} className="mr-2" /> What is Our Vision for the Future?
            </h3>
            <p className="mb-4">From Memphis to the global digital landscape, Digital Frontier is at the forefront of technological transformation. With a strong foundation in social media strategy, digital marketing, and advanced analytics, we've built a company that understands both the art and science of business success.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">🧠</div>
            <h3>AI Strategy Development</h3>
            <p>Collaborate with our visionary team to craft a forward-looking AI strategy tailored to your unique business needs. We analyze your current operations, identify opportunities for AI integration, and develop a comprehensive roadmap that ensures seamless adoption and maximum ROI. Our strategic approach balances innovation with practicality, ensuring AI solutions that deliver real business value.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">🚀</div>
            <h3>Accelerate AI Model Design & Build</h3>
            <p>Leverage our world-class machine-learning specialists to supercharge your AI journey. Whether you're starting from scratch or optimizing existing models, our team brings the technical expertise and creative problem-solving skills needed to develop sophisticated AI solutions. From natural language processing to computer vision, we build custom AI models that drive meaningful business outcomes.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">💡</div>
            <h3>Our Value Proposition</h3>
            <p>At Digital Frontier, personalized partnerships are at the heart of everything we do. We don't just implement technology; we build relationships based on trust, transparency, and shared success. Our collaborative approach ensures that we understand your unique challenges and objectives, allowing us to deliver tailored solutions that address your specific needs. With Digital Frontier, you gain more than a service provider – you gain a dedicated partner committed to your long-term success.</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2 text-slate-100">Ready to Unlock Your Potential?</h3>
            <p>Contact <Link to="/" className="text-blue-400 hover:underline">Digital Frontier</Link> today and discover how our transformative solutions can guide you to success in the digital age.</p>
            
            <div className="mt-6 flex justify-center">
              <Link to="/modern-contact-form" className="df-cta-button">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <h4 className="text-center text-lg font-bold mb-4 text-slate-100">Connect With Us</h4>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com/digitalfrontiercompany" aria-label="Digital Frontier on Facebook" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com/digitalfrontiercompany" aria-label="Digital Frontier on Instagram" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com/company/digitalfrontiercompany" aria-label="Digital Frontier on LinkedIn" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/digitalfrontierco" aria-label="Digital Frontier on Twitter" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://youtube.com/@digitalfrontiercompany" aria-label="Digital Frontier on YouTube" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
