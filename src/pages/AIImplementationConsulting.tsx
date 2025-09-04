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
          
          {/* Pricing Section */}
          <div className="pricing-section">
            <div className="section-header pricing-header">
              <div className="eyebrow">Strategic Pricing</div>
              <h2 className="main-headline">AI Crew Chief Package Pricing Structure</h2>
              <p className="sub-headline">Based on market data and proven ROI - positioned below enterprise consultants but above basic automation</p>
            </div>
            
            <div className="pricing-grid">
              {/* Starter Package */}
              <div className="pricing-card starter-card">
                <div className="package-badge">🥉 STARTER</div>
                <h3 className="package-name">AI Crew Chief Reconnaissance</h3>
                <div className="package-price">
                  <div className="price-main">$2,997</div>
                  <div className="price-sub">one-time</div>
                  <div className="price-recurring">+ $497/month</div>
                </div>
                <div className="package-target">Target: $100K-$500K revenue businesses</div>
                
                <ul className="package-features">
                  <li>AI audit & strategy (normally $5K value)</li>
                  <li>2-3 AI tool implementations</li>
                  <li>Basic automation setup</li>
                  <li>Monthly optimization & monitoring</li>
                </ul>
                
                <Link to="/modern-contact-form" className="package-cta">Start Reconnaissance</Link>
              </div>
              
              {/* Growth Package */}
              <div className="pricing-card growth-card featured-package">
                <div className="package-badge">🥈 GROWTH</div>
                <h3 className="package-name">AI Crew Chief Command</h3>
                <div className="package-price">
                  <div className="price-main">$7,997</div>
                  <div className="price-sub">one-time</div>
                  <div className="price-recurring">+ $1,497/month</div>
                </div>
                <div className="package-target">Target: $500K-$2M revenue businesses</div>
                
                <ul className="package-features">
                  <li>Everything in Starter</li>
                  <li>5-7 AI tool implementations</li>
                  <li>Advanced automation workflows</li>
                  <li>Custom integrations</li>
                  <li>Bi-weekly strategy sessions</li>
                </ul>
                
                <Link to="/modern-contact-form" className="package-cta">Take Command</Link>
              </div>
              
              {/* Elite Package */}
              <div className="pricing-card elite-card">
                <div className="package-badge">🥇 ELITE</div>
                <h3 className="package-name">AI Crew Chief Dominance</h3>
                <div className="package-price">
                  <div className="price-main">$19,997</div>
                  <div className="price-sub">one-time</div>
                  <div className="price-recurring">+ $2,997/month</div>
                </div>
                <div className="package-target">Target: $2M+ revenue businesses</div>
                
                <ul className="package-features">
                  <li>Everything in Growth</li>
                  <li>Custom AI development</li>
                  <li>Enterprise-level integrations</li>
                  <li>Weekly strategy sessions</li>
                  <li>Priority support & implementation</li>
                </ul>
                
                <Link to="/modern-contact-form" className="package-cta">Achieve Dominance</Link>
              </div>
            </div>
            
            {/* Hidden Cost Warning */}
            <div className="content-grid">
              <div className="left-content">
                <div className="credibility-badge">
                  <div className="credibility-number">⚠️</div>
                  <div className="credibility-text">The Hidden Cost of Ignoring AI Integration</div>
                </div>
                
                <ul className="pain-points">
                  <li>You're seeing competitors move faster while you're stuck in manual processes</li>
                  <li>Customers expect instant responses that you can't deliver efficiently</li>
                  <li>Manual processes are eating your profit margins daily</li>
                  <li>What breaks first when inefficiency slows growth?</li>
                </ul>
              </div>
              
              <div className="solution-preview">
                <h2 className="solution-title">McKinsey's 2024 AI Report Reveals</h2>
                <ul className="benefits-list">
                  <li><strong>23% faster growth</strong> for small businesses using AI</li>
                  <li><strong>19% cost reduction</strong> within the first year</li>
                  <li><strong>73% of AI projects fail</strong> because they try everything at once</li>
                  <li><strong>The real question:</strong> What happens to your market position if you're still doing manually what competitors automate?</li>
                </ul>
              </div>
            </div>

            {/* Why Projects Fail */}
            <div className="value-justification">
              <h3 className="value-title">🚫 Why Most AI Integration Projects Fail (And How We Fix It)</h3>
              
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>The Problem</h4>
                  <p>Companies treat AI like magic. They expect to flip a switch and transform overnight.</p>
                </div>
                
                <div className="justification-card">
                  <h4>The Reality</h4>
                  <p>AI integration works when you solve specific problems with proven tools, not when you chase shiny objects.</p>
                </div>
                
                <div className="justification-card">
                  <h4>Our Difference</h4>
                  <p>We start with your biggest pain point, prove ROI in 30 days, then expand systematically.</p>
                </div>
              </div>
            </div>

            {/* Real Results */}
            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">📊</div>
                <div className="proof-text">Proof: Real Results from Real Businesses</div>
              </div>
            </div>

            <div className="implementation-strategy">
              <h3 className="strategy-title">Case Studies from Our AI Crew Chief Implementations</h3>
              
              <div className="strategy-phases">
                <div className="phase-card">
                  <h4>Memphis Earth Movers - Construction Equipment Rental</h4>
                  <p><strong>Challenge:</strong> Manual time tracking costing 8 hours/week</p>
                  <p><strong>Solution:</strong> Automated timesheet system with AI validation</p>
                  <p><strong>Result:</strong> 86% time savings, $4,200/month recovered productivity</p>
                  <p><strong>Timeline:</strong> 3 weeks to full deployment</p>
                </div>

                <div className="phase-card">
                  <h4>Valley Legal Group - Law Practice</h4>
                  <p><strong>Challenge:</strong> Document review taking 12+ hours per case</p>
                  <p><strong>Solution:</strong> AI-powered contract analysis and summarization</p>
                  <p><strong>Result:</strong> 67% faster document processing, 2.3x case throughput</p>
                  <p><strong>Timeline:</strong> 6 weeks including training</p>
                </div>

                <div className="phase-card">
                  <h4>Precision Manufacturing Co - Metal Fabrication</h4>
                  <p><strong>Challenge:</strong> Quality control requiring full-time inspector</p>
                  <p><strong>Solution:</strong> Computer vision for defect detection</p>
                  <p><strong>Result:</strong> 94% accuracy improvement, $78K annual savings</p>
                  <p><strong>Timeline:</strong> 8 weeks from concept to production</p>
                </div>
              </div>
            </div>

            {/* Digital Frontier Method */}
            <div className="content-grid">
              <div className="left-content">
                <div className="credibility-badge">
                  <div className="credibility-number">⚙️</div>
                  <div className="credibility-text">The Digital Frontier Integration Method</div>
                </div>
                
                <p className="method-subtitle">Unlike consultants who disappear after planning, we stay until you're profitable.</p>
              </div>
              
              <div className="solution-preview">
                <h2 className="solution-title">Our 3-Phase Battle-Tested Process</h2>
                <ul className="benefits-list">
                  <li><strong>Phase 1:</strong> Foundation & Quick Wins (Weeks 1-2)</li>
                  <li><strong>Phase 2:</strong> Core Integration (Weeks 3-8)</li>
                  <li><strong>Phase 3:</strong> Scale & Optimize (Weeks 9-12)</li>
                  <li><strong>Result:</strong> Complete AI-powered business system for your specific needs</li>
                </ul>
              </div>
            </div>

            <div className="value-justification">
              <h3 className="value-title">📋 Detailed Implementation Phases</h3>
              
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>Phase 1: Foundation & Quick Wins (Weeks 1-2)</h4>
                  <ul>
                    <li>Complete AI readiness assessment of your current systems</li>
                    <li>Identify 3 highest-impact automation opportunities</li>
                    <li>Implement one quick-win solution for immediate ROI</li>
                    <li>Establish success metrics and tracking systems</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Phase 2: Core Integration (Weeks 3-8)</h4>
                  <ul>
                    <li>Deploy primary AI solutions for your biggest bottlenecks</li>
                    <li>Integrate with existing software (CRM, accounting, project management)</li>
                    <li>Build custom automation workflows specific to your industry</li>
                    <li>Train core team on new systems and processes</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Phase 3: Scale & Optimize (Weeks 9-12)</h4>
                  <ul>
                    <li>Expand AI capabilities to additional departments</li>
                    <li>Fine-tune algorithms based on real performance data</li>
                    <li>Implement advanced features and predictive analytics</li>
                    <li>Create internal documentation and support systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">🏭</div>
                <div className="proof-text">Industry-Specific AI Integration Solutions</div>
              </div>
            </div>

            <div className="value-justification">
              <h3 className="value-title">Proven Solutions by Industry</h3>
              
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>Manufacturing & Production</h4>
                  <ul>
                    <li>Predictive maintenance reducing equipment downtime by 35-50%</li>
                    <li>Quality control automation catching defects before shipping</li>
                    <li>Supply chain optimization preventing stockouts and overstock</li>
                    <li>Production scheduling maximizing throughput and efficiency</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Professional Services</h4>
                  <ul>
                    <li>Document automation eliminating repetitive paperwork</li>
                    <li>Client communication with AI-powered chatbots and scheduling</li>
                    <li>Billing optimization reducing collection time by 40-60%</li>
                    <li>Research assistance finding relevant case law, regulations, precedents</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Retail & E-commerce</h4>
                  <ul>
                    <li>Inventory forecasting preventing stockouts during peak seasons</li>
                    <li>Customer service automation handling 80% of routine inquiries</li>
                    <li>Price optimization maximizing profit margins dynamically</li>
                    <li>Personalization engines increasing average order value 15-25%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="content-grid">
              <div className="left-content">
                <div className="credibility-badge">
                  <div className="credibility-number">📦</div>
                  <div className="credibility-text">What's Included in Every AI Crew Chief Package</div>
                </div>
              </div>
              
              <div className="solution-preview">
                <h2 className="solution-title">Complete Implementation & Support</h2>
                <ul className="benefits-list">
                  <li><strong>Technical Implementation:</strong> Custom AI solutions & system integrations</li>
                  <li><strong>Business Support:</strong> Team training & change management</li>
                  <li><strong>Risk Elimination:</strong> Performance guarantees & rollback procedures</li>
                  <li><strong>90-day post-launch support</strong> and adjustments included</li>
                </ul>
              </div>
            </div>

            <div className="value-justification">
              <h3 className="value-title">Complete Service Breakdown</h3>
              
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>Technical Implementation</h4>
                  <ul>
                    <li>✓ Custom AI solution design and development</li>
                    <li>✓ Integration with existing business systems</li>
                    <li>✓ Data migration and system optimization</li>
                    <li>✓ Security setup and compliance verification</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Business Support</h4>
                  <ul>
                    <li>✓ Team training and change management</li>
                    <li>✓ Process documentation and SOPs</li>
                    <li>✓ Performance monitoring and optimization</li>
                    <li>✓ 90-day post-launch support and adjustments</li>
                  </ul>
                </div>
                
                <div className="justification-card">
                  <h4>Risk Elimination</h4>
                  <ul>
                    <li>✓ Phased implementation reducing disruption</li>
                    <li>✓ Rollback procedures if systems don't perform</li>
                    <li>✓ Data backup and recovery systems</li>
                    <li>✓ Performance guarantees with measurable ROI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section using proper component */}
            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">❓</div>
                <div className="proof-text">Frequently Asked Questions</div>
              </div>
            </div>

            <div className="value-justification">
              <h3 className="value-title">Common Questions About AI Integration</h3>
              
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>Q: How long does AI integration take for small business?</h4>
                  <p>A: Most projects complete in 30-90 days using our phased approach. Quick wins start in week 1, with full systems operational by week 12. Timeline depends on complexity and existing system integration needs.</p>
                </div>
                
                <div className="justification-card">
                  <h4>Q: What if the AI doesn't work as promised?</h4>
                  <p>A: Every project includes performance guarantees tied to specific metrics. If agreed-upon results aren't achieved within 90 days, we continue working at no additional cost until targets are met or provide a full refund.</p>
                </div>
                
                <div className="justification-card">
                  <h4>Q: Do we need technical staff to maintain AI systems?</h4>
                  <p>A: No. We design systems for business users, not programmers. Training includes everything your team needs to operate and maintain AI tools without technical expertise. We also provide ongoing support.</p>
                </div>
              </div>
            </div>

            <div className="value-justification">
              <div className="justification-grid">
                <div className="justification-card">
                  <h4>Q: Can AI integrate with our existing software?</h4>
                  <p>A: Yes. We specialize in connecting AI to existing CRM, accounting, project management, and industry-specific software. Most integrations work through standard APIs without replacing current systems.</p>
                </div>
                
                <div className="justification-card">
                  <h4>Q: What's the real ROI of AI integration?</h4>
                  <p>A: Our clients typically see 3-5x ROI within the first year through cost savings and efficiency gains. Common benefits include 40-60% time savings on routine tasks, 25-35% faster customer response times, and 15-30% reduction in operational costs.</p>
                </div>
              </div>
            </div>

            {/* Final Investment Info */}
            <div className="content-grid">
              <div className="left-content">
                <div className="credibility-badge">
                  <div className="credibility-number">💰</div>
                  <div className="credibility-text">Ready to Stop Watching Competitors Pull Ahead?</div>
                </div>
                
                <ul className="pain-points">
                  <li>The cost of waiting is your market position</li>
                  <li>Every month you delay, competitors get further ahead</li>
                  <li>Customer expectations rise while you're stuck in manual processes</li>
                  <li>Manual processes become more expensive relative to automated alternatives</li>
                </ul>
              </div>
              
              <div className="solution-preview">
                <h2 className="solution-title">Here's What Happens Next</h2>
                <ul className="benefits-list">
                  <li><strong>Free 30-Minute AI Strategy Call</strong> - We audit your current systems and identify the 3 highest-impact AI opportunities</li>
                  <li><strong>Custom Implementation Roadmap</strong> - Get a detailed plan with timelines, costs, and expected ROI</li>
                  <li><strong>Pilot Project Proposal</strong> - Start with one high-value automation to prove ROI before larger investment</li>
                </ul>
              </div>
            </div>

            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">$5,000</div>
                <div className="proof-text">Investment starts for pilot implementation</div>
              </div>
              <div className="proof-item">
                <div className="proof-number">$15K-$25K</div>
                <div className="proof-text">Full integration range</div>
              </div>
              <div className="proof-item">
                <div className="proof-number">60 Days</div>
                <div className="proof-text">Average positive ROI timeline</div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-headline">Ready for Your AI Crew Chief?</h2>
            <p className="cta-subtext">Get a free 30-minute strategy session where we'll show you exactly which AI tools your business needs (and which ones to avoid)</p>
            <Link to="/modern-contact-form" className="cta-button">Get Your Free AI Crew Chief Strategy</Link>
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