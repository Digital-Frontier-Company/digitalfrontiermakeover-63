
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
            <h3 className="text-xl font-bold mb-3 text-blue-400">David Thompson: CEO & Founder's Story</h3>
            
            <p className="mb-4">David Thompson grew up in Memphis, Tennessee, where he developed a strong sense of discipline, creativity, and a real passion for technology. His path took a major turn between 2009 and 2015 during his time in the U.S. Air Force. Those years shaped his mindset—teaching him resilience, precision, and the kind of strategic thinking that would later become the foundation of his business journey.</p>
            
            <p className="mb-4">After the military, David dove into industries like logistics, trucking, earthmoving, and cryptocurrency. These experiences didn't just broaden his skills—they taught him how to adapt and innovate in fast-moving environments.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400">The Birth of Digital Frontier</h3>
            <p className="mb-4">Digital Frontier is the result of David's diverse journey. It's a company built to merge cutting-edge technology with purpose-driven marketing. But it's not just about the latest tools or flashy campaigns—it's about building trust, delivering on promises, and creating meaningful connections in a space that's too often clouded by hype and hollow claims.</p>
            
            <p className="mb-4">In a world overflowing with new AI startups and sketchy players, Digital Frontier was founded to be different—to be the one you can actually count on.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Our Motto: Respect, Ethical Business, and Above All—Love People</h3>
            <p className="mb-4">At Digital Frontier, success starts with our people. Our team is made up of strategists, digital experts, and forward-thinkers who believe in what we're building. We don't just work together—we grow together. Every employee has ownership in our mission, and every client becomes a valued partner. We're here to create tech-driven solutions that are actually built around people.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400">The Problem We Saw</h3>
            <p className="mb-4">As tech continued to evolve, something started to feel off. The tools were getting smarter, but businesses were still struggling to apply them in real, meaningful ways. There was this growing gap between human potential and what tech was actually delivering.</p>
            
            <p className="mb-4">David noticed this disconnect especially in social media and marketing—too much trend-chasing, not enough strategy or soul. That's what sparked the creation of Digital Frontier: to bridge that gap and help businesses harness innovation in ways that truly matter.</p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl mb-8 border border-slate-700/50">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Our Solution</h3>
            <p className="mb-4">Digital Frontier brings together powerful technology and smart, data-driven marketing. Here's how we help:</p>
            
            <div className="space-y-4 pl-4">
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Brain size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">AI Integration</p>
                  <p className="text-slate-300">We build intelligent systems that simplify work in industries like real estate, finance, and crypto.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Globe size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">Digital Marketing & Social Media</p>
                  <p className="text-slate-300">We create campaigns that feel real and actually resonate. Think Facebook, LinkedIn, Instagram—but with purpose and measurable results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Target size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">Portfolio Optimization</p>
                  <p className="text-slate-300">We use Post-Modern Portfolio Theory (PMPT) to help clients balance returns with peace of mind.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-4">Right now, we're doubling down on real estate and our AEO software because it's a space where we can make an immediate difference. But long-term, our mission spans across all industries. Wherever there's potential, we're ready to help unlock it.</p>
          </div>
          
          <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 rounded-xl p-6 border border-slate-700/50 mb-8">
            <h3 className="text-xl font-bold mb-3 text-center text-blue-400 flex items-center justify-center">
              <Rocket size={20} className="mr-2" /> Where We're Headed
            </h3>
            <p className="mb-4">We're not just building a tech company—we're setting a new standard for how businesses use innovation. Our vision is rooted in humanity. Before we launch a campaign or develop a new tool, we ask one simple question: "How can we bring your vision to life?"</p>
            
            <p className="mb-4">That mindset fuels everything we do.</p>
            
            <p className="mb-4">From David's roots in Memphis to helping businesses worldwide, Digital Frontier is leading the charge in human-centered tech and marketing. Our foundation in social media strategy, advanced analytics, and ethical business practices sets us apart—and always will.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400">How We Help You Stay Ahead</h3>
            
            <div className="space-y-4 pl-4 mb-6">
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Brain size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">AI Strategy Development</p>
                  <p className="text-slate-300">Work with our expert team to build AI strategies that fit your business and anticipate what's next.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-blue-400"><Rocket size={18} /></span>
                <div>
                  <p className="font-semibold text-blue-300">Accelerate AI Model Design & Build</p>
                  <p className="text-slate-300">Tap into top-tier ML experts to fast-track your AI projects—from refining problems to training high-performing models.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl mb-8 border border-slate-700/50">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">What Makes Us Different</h3>
            <p className="mb-4">Our value lies in our partnerships. We're not just vendors—we're collaborators. Everything we do is tailored to your goals, your market, and your mission. That's how we drive long-term growth, boost efficiency, and help you lead your industry.</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Let's Build Something Incredible</h3>
            <p className="mb-4">Whether you're a startup looking for traction or an established brand needing a digital edge, we're here to help. Contact Digital Frontier today and claim your free SEO audit—a perfect first step toward greater visibility and impact.</p>
            
            <p className="mb-4">Because at the end of the day, Digital Frontier isn't just a company. It's a movement. One rooted in discipline, built on innovation, and driven by a passion for people.</p>
            
            <div className="mt-6 flex justify-center">
              <Link to="/modern-contact-form" className="df-cta-button">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 pt-12 border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the AI marketing specialists and digital strategists behind Digital Frontier Company's cutting-edge content and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-slate-900/40 p-6 rounded-xl border border-slate-700/50">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              DF
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Digital Frontier Team</h3>
            <p className="text-muted-foreground mb-4">
              Our team of AI marketing experts, data scientists, and digital strategists brings years of experience in cutting-edge marketing technologies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">AI Marketing</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">AEO Strategy</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">Content Strategy</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">SEO</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://digitalfrontier.app" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="text-center bg-slate-900/40 p-6 rounded-xl border border-slate-700/50">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              AI
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-100">AI Research Division</h3>
            <p className="text-muted-foreground mb-4">
              Specialists in Answer Engine Optimization, Generative Engine Optimization, and emerging AI marketing technologies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">Answer Engine Optimization</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">GEO</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">AI Research</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://digitalfrontier.app/docs" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="text-center bg-slate-900/40 p-6 rounded-xl border border-slate-700/50">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              CS
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Content Strategy Team</h3>
            <p className="text-muted-foreground mb-4">
              Expert content creators and strategists specializing in B2B tech company content engines and scalable content systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">Content Strategy</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">B2B Marketing</span>
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">Content Systems</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://digitalfrontier.app/blog" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Expertise Section */}
        <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-700/50">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">Our Expertise</h2>
          <p className="text-muted-foreground mb-6">
            Digital Frontier Company's team combines deep technical expertise with practical marketing experience. Our authors and consultants have:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-slate-100">Technical Credentials</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Advanced AI and machine learning expertise</li>
                <li>• SEO certifications and specializations</li>
                <li>• Data science and analytics backgrounds</li>
                <li>• Software engineering experience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-slate-100">Marketing Experience</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• 10+ years in digital marketing</li>
                <li>• B2B SaaS marketing specialization</li>
                <li>• Content strategy and creation</li>
                <li>• Performance marketing and analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <h4 className="text-center text-lg font-bold mb-4 text-slate-100">Connect With Us</h4>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61572896248731" aria-label="Digital Frontier on Facebook" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/digital_frontier_company/" aria-label="Digital Frontier on Instagram" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com/company/digitalfrontiercompany" aria-label="Digital Frontier on LinkedIn" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/DigitalFro14616" aria-label="Digital Frontier on Twitter" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://www.youtube.com/@Digital_FrontierCO" aria-label="Digital Frontier on YouTube" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
