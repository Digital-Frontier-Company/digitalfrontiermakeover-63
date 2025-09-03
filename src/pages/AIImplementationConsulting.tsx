import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import "@/styles/aiCrewChief.css";

const AIImplementationConsulting = () => {
  return (
    <PageLayout 
      title="AI Crew Chief Package"
      subtitle="Feeling lost in AI? We spent $50K+ testing so you don't have to. Get proven AI solutions for your business."
      currentPath="/services/ai-implementation-consulting"
    >
      <section className="ai-integration-section">
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i + 1) * 10}%`,
                animationDelay: i % 2 === 0 ? `${-i * 2}s` : `${-i}s`
              }}
            />
          ))}
        </div>
        
        <div className="ai-container">
          {/* Header */}
          <div className="section-header">
            {/* Company Logo */}
            <div className="company-logo">
              <svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circles */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#logoGradient)" strokeWidth="4" opacity="0.9"/>
                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#secondaryGradient)" strokeWidth="3" opacity="0.7"/>
                
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#4EE2EC", stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:"#8FB31D", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#4EE2EC", stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#8FB31D", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#4EE2EC", stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="peakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#4EE2EC", stopOpacity:0.9}} />
                    <stop offset="50%" style={{stopColor:"#8FB31D", stopOpacity:0.7}} />
                    <stop offset="100%" style={{stopColor:"#4EE2EC", stopOpacity:0.5}} />
                  </linearGradient>
                </defs>
                
                {/* Main Peak */}
                <polygon points="100,35 135,100 65,100" fill="url(#peakGradient)" stroke="url(#logoGradient)" strokeWidth="3"/>
                
                {/* Side Peaks */}
                <polygon points="65,55 95,100 45,100" fill="url(#peakGradient)" opacity="0.8" stroke="url(#secondaryGradient)" strokeWidth="2.5"/>
                <polygon points="135,55 155,100 105,100" fill="url(#peakGradient)" opacity="0.8" stroke="url(#secondaryGradient)" strokeWidth="2.5"/>
                
                {/* Mountain Lines */}
                <path d="M 20,120 L 40,100 L 60,120 L 80,100 L 100,120 L 120,100 L 140,120 L 160,100 L 180,120" 
                      fill="none" stroke="url(#logoGradient)" strokeWidth="2.5" opacity="0.8"/>
                <path d="M 25,130 L 45,110 L 65,130 L 85,110 L 105,130 L 125,110 L 145,130 L 165,110 L 175,120" 
                      fill="none" stroke="url(#secondaryGradient)" strokeWidth="2" opacity="0.6"/>
                <path d="M 30,140 L 50,120 L 70,140 L 90,120 L 110,140 L 130,120 L 150,140 L 170,125" 
                      fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.4"/>
              </svg>
            </div>
            
            <div className="eyebrow">AI Crew Chief Command Center</div>
            <h1 className="main-headline">Feeling Lost in AI? We Spent $50K+ Testing So You Don't Have To</h1>
            <p className="sub-headline">The AI landscape changes monthly. We've tested 100+ tools to find what actually works for small businesses—not what's just hyped.</p>
          </div>
          
          {/* Main Content Grid */}
          <div className="content-grid">
            <div className="left-content">
              {/* Credibility Badge */}
              <div className="credibility-badge">
                <div className="credibility-number">$50,000+</div>
                <div className="credibility-text">Invested in testing AI tools, models, and systems over 2 years so you get only proven solutions</div>
              </div>
              
              {/* Pain Points */}
              <ul className="pain-points">
                <li>Drowning in AI tool recommendations that don't fit your business</li>
                <li>Wasting money on "game-changing" AI that sits unused</li>
                <li>Falling behind while competitors get more efficient daily</li>
                <li>No time to test every new AI tool that launches weekly</li>
              </ul>
            </div>
            
            {/* Solution Preview */}
            <div className="solution-preview">
              <h2 className="solution-title">Your AI Crew Chief Package</h2>
              <ul className="benefits-list">
                <li><strong>Only verified tools</strong> that passed our rigorous testing</li>
                <li><strong>Save 15+ hours weekly</strong> with the right AI automation</li>
                <li><strong>25% average revenue boost</strong> from improved efficiency</li>
                <li><strong>Zero tech headaches</strong> - we handle all implementation</li>
                <li><strong>Avoid costly mistakes</strong> we've already made for you</li>
              </ul>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="social-proof">
            <div className="proof-item">
              <div className="proof-number">200+</div>
              <div className="proof-text">Small businesses transformed</div>
            </div>
            <div className="proof-item">
              <div className="proof-number">100+</div>
              <div className="proof-text">AI tools tested & filtered</div>
            </div>
            <div className="proof-item">
              <div className="proof-number">30 Days</div>
              <div className="proof-text">Average implementation time</div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-headline">Ready for Your AI Crew Chief?</h2>
            <p className="cta-subtext">Get a free 30-minute strategy session where we'll show you exactly which AI tools your business needs (and which ones to avoid)</p>
            <Link to="/contact" className="cta-button">Get Your Free AI Crew Chief Strategy</Link>
            <div className="risk-reversal">
              ✅ No sales pitch - just actionable insights<br/>
              ✅ Custom AI roadmap for your specific business<br/>
              ✅ Learn what $50K+ of testing revealed
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIImplementationConsulting;