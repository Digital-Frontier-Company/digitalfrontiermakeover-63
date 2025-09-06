import React from "react";
import { Helmet } from "react-helmet-async";
import OnboardingForm from "@/components/OnboardingForm";
const WebCreative = () => {
  return <>
      <Helmet>
        <title>Official Pricing Guide | Digital Frontier Company</title>
        <meta name="description" content="Comprehensive pricing guide for Digital Frontier Company's web design packages, monthly retainers, and add-on services. Professional digital solutions from $1,500." />
        <meta name="keywords" content="web design pricing, digital marketing packages, SEO services, monthly retainer, Digital Frontier Company pricing" />
        <link rel="canonical" href="/web-creative" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
            color: '#07f07f'
          }}>
              Digital Frontier Company
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6" style={{
            color: '#07e2fa'
          }}>Official Web Creative and Design Pricing Guide</h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{
            color: '#07f07f'
          }}>
              Welcome to Digital Frontier Company's official pricing guide. We empower businesses to succeed online by 
              providing comprehensive digital solutions that deliver measurable results.
            </p>
          </div>

          {/* One-Time Web Design Packages */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8" style={{
            color: '#07e2fa'
          }}>
              One-Time Web Design Packages
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Basic Package */}
              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-2xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Basic Package</h4>
                <p className="text-lg mb-4" style={{
                color: '#07e2fa'
              }}>Your First Step into the Digital World</p>
                <div className="text-3xl font-bold mb-4" style={{
                color: '#86ed07'
              }}>$1,500</div>
                <p className="text-sm mb-4" style={{
                color: '#07f07f'
              }}>
                  Best For: Very small businesses and startups looking to establish a professional online presence.
                </p>
                <ul className="space-y-2 text-sm" style={{
                color: '#07f07f'
              }}>
                  <li>• Professional, responsive 4-5 page website</li>
                  <li>• User-friendly contact form</li>
                  <li>• Light branding alignment</li>
                  <li>• Mobile-friendly design</li>
                </ul>
              </div>

              {/* Professional Package */}
              <div className="rounded-lg p-6 border-2 border-yellow-400 relative" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h4 className="text-2xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Professional Package</h4>
                <p className="text-lg mb-4" style={{
                color: '#07e2fa'
              }}>Polished, Optimized, and Ready for Growth</p>
                <div className="text-3xl font-bold mb-4" style={{
                color: '#86ed07'
              }}>$3,000</div>
                <p className="text-sm mb-4" style={{
                color: '#07f07f'
              }}>
                  Best For: Local businesses aiming for a more polished, lead-generation-focused website.
                </p>
                <ul className="space-y-2 text-sm" style={{
                color: '#07f07f'
              }}>
                  <li>• Semi-custom website design</li>
                  <li>• Built on leading CMS (WordPress/Webflow)</li>
                  <li>• SEO-ready structure</li>
                  <li>• One round of revisions</li>
                </ul>
              </div>

              {/* Premium Package */}
              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-2xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Premium Package</h4>
                <p className="text-lg mb-4" style={{
                color: '#07e2fa'
              }}>The Ultimate All-in-One Solution</p>
                <div className="text-3xl font-bold mb-4" style={{
                color: '#86ed07'
              }}>$6,000</div>
                <p className="text-sm mb-4" style={{
                color: '#07f07f'
              }}>
                  Best For: Businesses requiring advanced features, automation, and integrations.
                </p>
                <ul className="space-y-2 text-sm" style={{
                color: '#07f07f'
              }}>
                  <li>• Fully custom website design</li>
                  <li>• Advanced lead forms & CRM integration</li>
                  <li>• Robust SEO structure</li>
                  <li>• Google Analytics setup</li>
                  <li>• Professional copywriting</li>
                  <li>• Speed optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monthly Retainer */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8" style={{
            color: '#07e2fa'
          }}>
              Monthly Retainer: The Digital Care Plan
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg p-8 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-4" style={{
                  color: '#86ed07'
                }}>$500/month</div>
                  <p className="text-lg" style={{
                  color: '#07f07f'
                }}>
                    Ongoing support to keep your digital presence strong and effective.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-sm" style={{
                  color: '#07f07f'
                }}>
                    <li>• Website Hosting & Domain Management</li>
                    <li>• Routine Site Maintenance & Content Updates</li>
                    <li>• Basic Local SEO</li>
                  </ul>
                  <ul className="space-y-3 text-sm" style={{
                  color: '#07f07f'
                }}>
                    <li>• Light Social Media Management (2-4 posts/month)</li>
                    <li>• Basic Reporting</li>
                    <li>• Google My Business Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Add-On Services */}
          <section>
            <h3 className="text-3xl font-bold text-center mb-8" style={{
            color: '#07e2fa'
          }}>
              Add-On Services: Scale Your Digital Marketing
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Advanced SEO</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>+$1,000/month</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  Deep keyword research, link building, and content optimization.
                </p>
              </div>

              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Full Social Media Management</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>+$1,500/month</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  Complete social media strategy, content creation, and growth campaigns.
                </p>
              </div>

              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Google Ads Management</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>+$2,000/month</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  Full Google Ads campaign management and optimization. (Media spend separate)
                </p>
              </div>

              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Conversion Rate Optimization</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>+$1,000/month</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  User behavior analysis and sales funnel optimization.
                </p>
              </div>

              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>CRM Setup & Automation</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>$3,000 (one-time)</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  CRM integration with automated follow-up sequences.
                </p>
              </div>

              <div className="rounded-lg p-6 border border-gray-600" style={{
              background: 'linear-gradient(135deg, #1a0b4d 0%, #2d1b69 100%)'
            }}>
                <h4 className="text-xl font-bold mb-2" style={{
                color: '#07f07f'
              }}>Analytics & Reporting</h4>
                <div className="text-2xl font-bold mb-2" style={{
                color: '#86ed07'
              }}>+$750/month</div>
                <p className="text-sm" style={{
                color: '#07f07f'
              }}>
                  Custom dashboards and advanced tracking setup.
                </p>
              </div>
            </div>
          </section>

          {/* Onboarding Form Section */}
          <section className="mt-16 pt-16 border-t border-gray-600">
            <h3 className="text-3xl font-bold text-center mb-8" style={{
            color: '#07e2fa'
          }}>
              Ready to Get Started?
            </h3>
            <p className="text-center mb-8 max-w-2xl mx-auto" style={{
            color: '#07f07f'
          }}>
              Complete our comprehensive onboarding form to begin your digital transformation journey with Digital Frontier Company.
            </p>
            <OnboardingForm />
          </section>
        </div>
      </div>
    </>;
};
export default WebCreative;