
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Bitcoin, CheckCircle, Coins, ArrowRight, Wallet, Sliders } from "lucide-react";

const CryptoMarketing = () => {
  const location = useLocation();

  const cryptoFAQs: FAQItem[] = [
    {
      question: "Why is specialized UX important for crypto platforms?",
      answer: "Crypto platforms face unique challenges due to the technical complexity and the irreversible nature of transactions. Specialized UX design can reduce the 70% abandonment rate by making complex processes more intuitive and providing proper safeguards for irreversible actions."
    },
    {
      question: "What are the key elements of a successful crypto user experience?",
      answer: "Successful crypto UX includes clear transaction confirmation flows, progressive disclosure of complex information, real-time feedback, familiar patterns adapted for blockchain interactions, and educational elements that build confidence while users navigate the platform."
    },
    {
      question: "How can Digital Frontier help improve our crypto platform's conversion rate?",
      answer: "We implement our battle-tested UX Playbook specifically designed for crypto platforms, including frictionless discovery-to-contract flows, interaction micro-enhancements, ultra-light checkout patterns, and trust-building elements that have been proven to reduce abandonment by 43% and increase retention by 37%."
    },
    {
      question: "What metrics should we track to measure UX improvements in our crypto platform?",
      answer: "Beyond standard conversion metrics, crypto platforms should track time-to-first-transaction, wallet connection success rate, transaction completion rate, support ticket frequency by user journey stage, and user confidence ratings at key interaction points."
    }
  ];

  return (
    <PageLayout
      title="Digital Frontier Marketing for Crypto"
      subtitle="From Friction to Conversion: The UX Playbook for Crypto Success"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Digital Frontier Marketing for Crypto | Digital Frontier</title>
        <meta name="description" content="Specialized UX solutions for crypto platforms to reduce abandonment and increase conversions. Our battle-tested approach combines growth marketing with user experience design." />
        <link rel="canonical" href="https://thedigitalfrontier.ai/crypto-marketing" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is specialized UX important for crypto platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crypto platforms face unique challenges due to the technical complexity and the irreversible nature of transactions. Specialized UX design can reduce the 70% abandonment rate by making complex processes more intuitive and providing proper safeguards for irreversible actions."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key elements of a successful crypto user experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Successful crypto UX includes clear transaction confirmation flows, progressive disclosure of complex information, real-time feedback, familiar patterns adapted for blockchain interactions, and educational elements that build confidence while users navigate the platform."
                }
              },
              {
                "@type": "Question",
                "name": "How can Digital Frontier help improve our crypto platform's conversion rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement our battle-tested UX Playbook specifically designed for crypto platforms, including frictionless discovery-to-contract flows, interaction micro-enhancements, ultra-light checkout patterns, and trust-building elements that have been proven to reduce abandonment by 43% and increase retention by 37%."
                }
              },
              {
                "@type": "Question", 
                "name": "What metrics should we track to measure UX improvements in our crypto platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond standard conversion metrics, crypto platforms should track time-to-first-transaction, wallet connection success rate, transaction completion rate, support ticket frequency by user journey stage, and user confidence ratings at key interaction points."
                }
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* Hero Section with Crypto Wallet UI Mockup */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
              <p className="font-medium mb-2 text-slate-300">The stark reality?</p>
              <p className="text-3xl font-bold text-yellow-300">70% of potential users abandon crypto platforms</p>
              <p className="mt-2 text-slate-300">before completing their first transaction - not because they don't believe in the technology, but because the experience feels unnecessarily complex.</p>
            </div>
            <p className="mb-4 text-slate-300">Our battle-tested approach combines growth marketing with user experience design specifically for legitimate crypto startups.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#playbook" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors">Explore the Playbook</a>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 px-6 py-3 rounded-lg font-medium text-center transition-colors">Get UX Audit</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
                  <DialogHeader>
                    <DialogTitle className="text-slate-100">Request UX Audit</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right text-slate-300">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3 bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right text-slate-300">
                        Email
                      </Label>
                      <Input id="email" type="email" className="col-span-3 bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right text-slate-300">
                        Message
                      </Label>
                      <textarea id="message" className="col-span-3 border rounded-md p-2 h-24 bg-slate-800 border-slate-700 text-slate-200"></textarea>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" className="bg-cyan-500 hover:bg-cyan-600">
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-slate-400">crypto-ux.digitalfrontier.ai</div>
              </div>
              <div className="p-6 bg-slate-800">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-slate-200">Crypto Wallet</div>
                    <div className="text-sm text-slate-400">Connect your wallet</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center">
                        <Coins className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-slate-200">ETH</div>
                        <div className="text-sm text-slate-400">Ethereum</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-200">2.45</div>
                      <div className="text-sm text-slate-400">≈ $4,500</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center">
                        <Bitcoin className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-slate-200">BTC</div>
                        <div className="text-sm text-slate-400">Bitcoin</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-200">0.12</div>
                      <div className="text-sm text-slate-400">≈ $4,800</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                    <span>Send Transaction</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Section */}
      <section id="advantage" className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Our Crypto Marketing Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">75+</div>
            <div className="text-slate-300 mt-1">Crypto Brands</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">1M+</div>
            <div className="text-slate-300 mt-1">Users Scaled</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">43%</div>
            <div className="text-slate-300 mt-1">Less Abandonment</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">37%</div>
            <div className="text-slate-300 mt-1">More Retention</div>
          </div>
        </div>
      </section>

      {/* Playbook Section */}
      <section id="playbook" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">The High-Stakes Journey: Converting Visitors to Loyal Users</h2>
        <p className="mb-8 text-slate-300">Our battle-tested approach combines growth marketing with user experience design specifically for legitimate crypto startups.</p>
      
        <div className="space-y-8">
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">1</div>
              <h3 className="text-xl font-bold text-slate-100">Frictionless Discovery-to-Contract Flow</h3>
            </div>
            <p className="ml-14 text-slate-300">The first interaction with your platform sets the tone for everything that follows. We prioritize above-the-fold social proof with real-time industry metrics to establish immediate credibility.</p>
          </div>
          
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">2</div>
              <h3 className="text-xl font-bold text-slate-100">Interaction Micro-Enhancements That Convert</h3>
            </div>
            <p className="ml-14 text-slate-300">Small details make significant differences in crypto UX. Our approach combines side-sliding confirmations, pulse animations after periods of inactivity, and multi-stage button feedback to prevent user uncertainty.</p>
          </div>
          
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">3</div>
              <h3 className="text-xl font-bold text-slate-100">Ultra-Light Crypto Checkout Patterns</h3>
            </div>
            <p className="ml-14 text-slate-300">Crypto transactions carry unique anxiety due to their irreversible nature. Our checkout patterns use progressive disclosure, visual confirmation, and familiar patterns adapted for blockchain interactions.</p>
          </div>
        </div>
      </section>

      {/* Navigation Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Navigation Architecture: Bottom Tabs vs. Hamburger</h2>
        <p className="mb-6 text-slate-300">Research shows that different crypto applications require different navigation paradigms to maximize user engagement.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bottom Tabs */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-900/50 p-2 rounded-lg mr-3">
                  <Wallet className="h-5 w-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-100">For Crypto Wallets (≤4 core screens)</h4>
              </div>
              <p className="text-slate-300 mb-4">Bottom tab bars outperform hamburger menus by 23% for feature discovery and daily use.</p>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="flex justify-between items-center bg-slate-700 rounded-lg p-2">
                  <button className="flex flex-col items-center p-2 text-cyan-400">
                    <Wallet className="h-4 w-4 mb-1" />
                    <span className="text-xs">Wallet</span>
                  </button>
                  <button className="flex flex-col items-center p-2 text-slate-400">
                    <Coins className="h-4 w-4 mb-1" />
                    <span className="text-xs">Swap</span>
                  </button>
                  <button className="flex flex-col items-center p-2 text-slate-400">
                    <Bitcoin className="h-4 w-4 mb-1" />
                    <span className="text-xs">Markets</span>
                  </button>
                  <button className="flex flex-col items-center p-2 text-slate-400">
                    <Sliders className="h-4 w-4 mb-1" />
                    <span className="text-xs">Settings</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Hamburger Menu */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-900/50 p-2 rounded-lg mr-3">
                  <Sliders className="h-5 w-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-100">For Analytics Dashboards (10+ sections)</h4>
              </div>
              <p className="text-slate-300 mb-4">Hierarchical hamburger menus win for complex data platforms with multiple feature sets.</p>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="flex justify-between items-center bg-slate-700 rounded-lg p-3">
                  <div className="font-medium text-slate-200">Analytics Dashboard</div>
                  <button className="text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Fatigue Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Form Fatigue Solutions for KYC & Onboarding</h2>
        <p className="mb-6 text-slate-300">Most crypto platforms suffer from abandonment around question 7 in lengthy forms. Our approach uses progressive disclosure and visual progress indicators.</p>
        
        <Card className="bg-slate-900/50 border-slate-700 max-w-3xl mx-auto">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-semibold text-slate-100">Identity Verification (KYC)</h4>
              <div className="text-sm text-slate-400">Step 2 of 5</div>
            </div>
            
            <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
              <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-slate-200">Full Legal Name</Label>
                <Input id="fullName" className="bg-slate-800 border-slate-700 text-slate-200" />
              </div>
              <div>
                <Label htmlFor="dob" className="text-slate-200">Date of Birth</Label>
                <Input id="dob" type="date" className="bg-slate-800 border-slate-700 text-slate-200" />
              </div>
              <div>
                <Label htmlFor="country" className="text-slate-200">Country of Residence</Label>
                <select id="country" className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200">
                  <option>Select country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="border-slate-700 text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Back
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-sm text-cyan-400 hover:text-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 inline h-4 w-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                Save & Resume Later
              </button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Strategic Gamification Elements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Strategic Gamification Elements</h2>
        <p className="mb-6 text-slate-300">Habit formation drives crypto platform retention. Our approach implements carefully designed gamification elements that increase user engagement.</p>

        <div className="bg-slate-800/50 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-100">User Activity</h3>
            <div className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="mr-1">●</span> 3-day streak
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div 
                key={day}
                className={`h-8 rounded flex items-center justify-center ${
                  day >= 3 && day <= 5 ? 'bg-cyan-900/30 border border-cyan-700/50' : 'bg-slate-700/50'
                }`}
              >
                {day >= 3 && day <= 5 && <span className="text-cyan-400 text-xs">✓</span>}
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-400 mb-6">Keep using the platform daily to build your streak and earn rewards.</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                  <span className="text-cyan-400">🪙</span>
                </div>
                <div>
                  <div className="font-medium text-slate-200">Daily Check-in</div>
                  <div className="text-sm text-slate-400">Earn 5 XP for logging in today</div>
                </div>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Claim
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                  <span className="text-cyan-400">💱</span>
                </div>
                <div>
                  <div className="font-medium text-slate-200">First Trade</div>
                  <div className="text-sm text-slate-400">Make your first trade to earn 20 XP</div>
                </div>
              </div>
              <button className="bg-slate-600 text-slate-300 px-3 py-1 rounded text-sm cursor-not-allowed">
                Locked
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Protection */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Critical Transaction Protection</h2>
        <p className="mb-6 text-slate-300">Balancing security with usability is essential for crypto platforms.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Irreversible Operations */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-900/30 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-100">For Irreversible Operations</h4>
              </div>
              <p className="text-slate-300 mb-4">Confirmation dialogs with clearly differentiated action buttons.</p>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 h-6 w-6"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                  <h5 className="text-lg font-medium mt-2 text-slate-100">Confirm Transaction</h5>
                  <p className="text-sm text-slate-300 mt-1">This action cannot be undone.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-slate-600 text-slate-300">Cancel</Button>
                  <Button className="bg-red-600 hover:bg-red-700">Confirm</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Reversible Actions */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-900/30 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 h-5 w-5"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-100">For Reversible Actions</h4>
              </div>
              <p className="text-slate-300 mb-4">Immediate execution with 10-second undo functionality.</p>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-slate-200">Preferences Saved</div>
                      <div className="text-sm text-slate-400">Your changes have been applied</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="text-sm text-cyan-400 hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 inline h-4 w-4"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
                    Undo Changes
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="mb-12 bg-slate-800/60 rounded-xl p-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 text-slate-100">The Digital Frontier Advantage</h2>
          <p className="text-xl max-w-3xl mx-auto text-cyan-300">By implementing these UX principles, crypto platforms reduce abandonment by an average of 43% while increasing user retention by 37%.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 h-6 w-6"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/><path d="M13 2v7h7"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Frictionless Onboarding</h3>
            <p className="text-slate-300">Streamlined processes that guide users from discovery to action without unnecessary complexity.</p>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Trust Through Design</h3>
            <p className="text-slate-300">Visual cues and micro-interactions that build confidence in every transaction.</p>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 h-6 w-6"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Data-Driven Decisions</h3>
            <p className="text-slate-300">Continuous testing and optimization based on real user behavior and feedback.</p>
          </div>
        </div>
        
        <div className="mt-10 bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-slate-700/50">
          <div className="text-center">
            <p className="text-xl font-bold mb-6 text-slate-100">The result? Crypto projects that don't just impress developers but convert and retain the mainstream users essential for widespread adoption.</p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-6 rounded-lg text-lg font-medium">
              Transform Your Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Contact Digital Frontier for Crypto UX Solutions</h2>
        
        <div className="bg-slate-800/50 p-6 rounded-xl">
          <p className="mb-6 text-slate-300">Ready to transform your crypto platform? Contact Digital Frontier today for a comprehensive UX audit and implementation roadmap.</p>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request UX Audit
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-slate-100">Contact Us</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-slate-300">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3 bg-slate-800 border-slate-700 text-slate-200" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right text-slate-300">
                    Email
                  </Label>
                  <Input id="email" type="email" className="col-span-3 bg-slate-800 border-slate-700 text-slate-200" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className="text-right text-slate-300">
                    Message
                  </Label>
                  <textarea id="message" className="col-span-3 border rounded-md p-2 h-24 bg-slate-800 border-slate-700 text-slate-200"></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" className="bg-cyan-500 hover:bg-cyan-600">
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <h3 className="font-bold mb-4 text-slate-100">Why Choose Digital Frontier for Crypto?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Crypto-Specific Expertise:</span> Deep understanding of blockchain UX challenges and opportunities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Proven Methodology:</span> Battle-tested framework that delivers measurable results.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Rapid Implementation:</span> See improvements in weeks, not months.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <FAQSection faqs={cryptoFAQs} title="Crypto Marketing FAQs" />
    </PageLayout>
  );
};

export default CryptoMarketing;

