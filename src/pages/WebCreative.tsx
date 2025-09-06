import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import OnboardingForm from "@/components/OnboardingForm";
import "@/styles/aiCrewChief.css";

const WebCreative = () => {
  return (
    <PageLayout 
      title="Official Pricing Guide"
      subtitle="Comprehensive pricing guide for Digital Frontier Company's web design packages, monthly retainers, and add-on services. Professional digital solutions from $1,500."
      currentPath="/web-creative"
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
            
            <div className="eyebrow">Web Creative & Design Solutions</div>
            <h1 className="main-headline">Official Web Creative and Design Pricing Guide</h1>
            <p className="sub-headline">We empower businesses to succeed online by providing comprehensive digital solutions that deliver measurable results.</p>
          </div>

          {/* One-Time Web Design Packages */}
          <div className="pricing-section">
            <div className="section-header pricing-header">
              <div className="eyebrow">Web Design Solutions</div>
              <h2 className="main-headline">One-Time Web Design Packages</h2>
              <p className="sub-headline">Three tiers of web design packages, each tailored to different business needs and budgets</p>
            </div>
            
            <div className="pricing-grid">
              {/* Basic Package */}
              <div className="pricing-card starter-card">
                <div className="package-badge">🥉 BASIC</div>
                <h3 className="package-name">Your First Step into the Digital World</h3>
                <div className="package-price">
                  <div className="price-main">$1,500</div>
                  <div className="price-sub">one-time</div>
                </div>
                <div className="package-target">Best For: Very small businesses and startups</div>
                
                <ul className="package-features">
                  <li>Professional, responsive 4-5 page website</li>
                  <li>User-friendly contact form</li>
                  <li>Light branding alignment</li>
                  <li>Mobile-friendly design</li>
                </ul>
              </div>

              {/* Professional Package */}
              <div className="pricing-card growth-card featured-package">
                <div className="package-badge">🥈 PROFESSIONAL</div>
                <h3 className="package-name">Polished, Optimized, and Ready for Growth</h3>
                <div className="package-price">
                  <div className="price-main">$3,000</div>
                  <div className="price-sub">one-time</div>
                </div>
                <div className="package-target">Best For: Local businesses aiming for lead-generation</div>
                
                <ul className="package-features">
                  <li>Semi-custom website design</li>
                  <li>Built on leading CMS (WordPress/Webflow)</li>
                  <li>SEO-ready structure</li>
                  <li>One round of revisions</li>
                </ul>
              </div>

              {/* Premium Package */}
              <div className="pricing-card elite-card">
                <div className="package-badge">🥇 PREMIUM</div>
                <h3 className="package-name">The Ultimate All-in-One Solution</h3>
                <div className="package-price">
                  <div className="price-main">$6,000</div>
                  <div className="price-sub">one-time</div>
                </div>
                <div className="package-target">Best For: Businesses requiring advanced features</div>
                
                <ul className="package-features">
                  <li>Fully custom website design</li>
                  <li>Advanced lead forms & CRM integration</li>
                  <li>Robust SEO structure</li>
                  <li>Google Analytics setup</li>
                  <li>Professional copywriting</li>
                  <li>Speed optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monthly Retainer */}
          <div className="content-grid">
            <div className="left-content">
              <div className="credibility-badge">
                <div className="credibility-number">$500</div>
                <div className="credibility-text">Monthly Digital Care Plan - Ongoing support for your digital presence</div>
              </div>
            </div>
            
            <div className="solution-preview">
              <h2 className="solution-title">The Digital Care Plan</h2>
              <ul className="benefits-list">
                <li><strong>Website Hosting & Domain Management:</strong> All technical aspects handled</li>
                <li><strong>Routine Maintenance:</strong> Content updates and site improvements</li>
                <li><strong>Basic Local SEO:</strong> Keep you visible in local search results</li>
                <li><strong>Light Social Media:</strong> 2-4 posts per month to engage audience</li>
                <li><strong>Basic Reporting:</strong> Monthly traffic, uptime, and ranking reports</li>
              </ul>
            </div>
          </div>

          {/* Add-On Services */}
          <div className="pricing-section">
            <div className="section-header pricing-header">
              <div className="eyebrow">Scale Your Marketing</div>
              <h2 className="main-headline">Add-On Services</h2>
              <p className="sub-headline">Ready to take your digital marketing to the next level? Stack these services onto your monthly plan</p>
            </div>
            
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3 className="package-name">Advanced SEO</h3>
                <div className="package-price">
                  <div className="price-main">+$1,000</div>
                  <div className="price-sub">per month</div>
                </div>
                <p className="package-target">Deep keyword research, link building, and content optimization</p>
              </div>

              <div className="pricing-card">
                <h3 className="package-name">Full Social Media Management</h3>
                <div className="package-price">
                  <div className="price-main">+$1,500</div>
                  <div className="price-sub">per month</div>
                </div>
                <p className="package-target">Complete social media strategy, content creation, and growth campaigns</p>
              </div>

              <div className="pricing-card">
                <h3 className="package-name">Google Ads Management</h3>
                <div className="package-price">
                  <div className="price-main">+$2,000</div>
                  <div className="price-sub">per month</div>
                </div>
                <p className="package-target">Full Google Ads campaign management and optimization (Media spend separate)</p>
              </div>

              <div className="pricing-card">
                <h3 className="package-name">Conversion Rate Optimization</h3>
                <div className="package-price">
                  <div className="price-main">+$1,000</div>
                  <div className="price-sub">per month</div>
                </div>
                <p className="package-target">User behavior analysis and sales funnel optimization</p>
              </div>

              <div className="pricing-card">
                <h3 className="package-name">CRM Setup & Automation</h3>
                <div className="package-price">
                  <div className="price-main">$3,000</div>
                  <div className="price-sub">one-time</div>
                </div>
                <p className="package-target">CRM integration with automated follow-up sequences</p>
              </div>

              <div className="pricing-card">
                <h3 className="package-name">Analytics & Reporting</h3>
                <div className="package-price">
                  <div className="price-main">+$750</div>
                  <div className="price-sub">per month</div>
                </div>
                <p className="package-target">Custom dashboards and advanced tracking setup</p>
              </div>
            </div>
          </div>

          {/* Onboarding Form Section */}
          <div className="value-justification">
            <h3 className="value-title">Ready to Get Started?</h3>
            <p className="sub-headline">Complete our comprehensive onboarding form to begin your digital transformation journey with Digital Frontier Company.</p>
            <OnboardingForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebCreative;