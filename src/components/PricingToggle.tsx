import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const projectPricing: PricingTier[] = [
  {
    name: "Growth Sprint",
    price: "$2,000",
    period: "project",
    description: "Perfect for testing our methodology with a focused campaign",
    features: [
      "30-day intensive campaign",
      "AI-powered content strategy",
      "Answer Engine Optimization setup",
      "Performance analytics dashboard",
      "Weekly strategy calls"
    ],
    cta: "Start Your Sprint"
  },
  {
    name: "Market Domination",
    price: "$12,500",
    period: "one-time",
    description: "Comprehensive solution for serious growth-focused companies",
    features: [
      "90-day transformation program",
      "Full-funnel optimization",
      "Advanced AI automation",
      "Custom analytics & reporting",
      "Dedicated success manager",
      "Competitive intelligence"
    ],
    cta: "Dominate Your Market",
    popular: true
  }
];

const retainerPricing: PricingTier[] = [
  {
    name: "Growth Partner",
    price: "$999.99",
    period: "month",
    description: "Ongoing partnership for sustained growth and optimization",
    features: [
      "Monthly strategy optimization",
      "Continuous content creation",
      "Real-time performance monitoring",
      "Quarterly deep-dive reviews",
      "Priority support access"
    ],
    cta: "Partner With Us"
  },
  {
    name: "Revenue Engine",
    price: "$7,500",
    period: "monthly",
    description: "Full-service revenue acceleration for ambitious companies",
    features: [
      "Complete marketing automation",
      "Advanced AI optimization",
      "Multi-channel campaign management",
      "Executive strategy sessions",
      "Custom integrations & tools",
      "Dedicated growth team"
    ],
    cta: "Accelerate Revenue",
    popular: true
  }
];

export default function PricingToggle() {
  const [selectedModel, setSelectedModel] = useState<'project' | 'retainer'>('project');

  const currentPricing = selectedModel === 'project' ? projectPricing : retainerPricing;

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-soft-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Choose Your Growth Path
          </h2>
          <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto mb-8">
            Whether you need a quick win or long-term partnership, we have the perfect solution
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-card border border-border rounded-lg p-2">
            <button
              onClick={() => setSelectedModel('project')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                selectedModel === 'project'
                  ? 'bg-electric-azure text-deep-navy shadow-lg'
                  : 'text-soft-white/70 hover:text-soft-white'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setSelectedModel('retainer')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                selectedModel === 'retainer'
                  ? 'bg-electric-azure text-deep-navy shadow-lg'
                  : 'text-soft-white/70 hover:text-soft-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentPricing.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:border-electric-azure ${
                tier.popular 
                  ? 'border-signal-lime shadow-lg ring-1 ring-signal-lime/20 scale-105' 
                  : 'border-border hover:scale-102'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-signal-lime text-deep-navy px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-poppins font-medium text-2xl text-soft-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-electric-azure">{tier.price}</span>
                  <span className="text-soft-white/60 ml-2">/{tier.period}</span>
                </div>
                <p className="text-soft-white/70">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-signal-lime flex-shrink-0 mt-0.5" />
                    <span className="text-soft-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/modern-contact-form"
                className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-signal-lime text-deep-navy hover:bg-signal-lime/90 hover:shadow-lg'
                    : 'bg-electric-azure text-deep-navy hover:bg-electric-azure/90 hover:shadow-lg'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-soft-white/60 mb-4">Need something custom?</p>
          <Link 
            to="/modern-contact-form" 
            className="inline-flex items-center text-electric-azure hover:text-electric-azure/80 font-medium"
          >
            Let's build a custom solution →
          </Link>
        </div>
      </div>
    </section>
  );
}