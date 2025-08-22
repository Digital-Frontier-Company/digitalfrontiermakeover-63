import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Zap, Building, Shield, Rocket, ShoppingCart, Factory, ArrowRight } from 'lucide-react';

interface MarketSegment {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  marketSize: string;
  growthRate: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  challenges: string[];
  opportunities: string[];
  strategies: string[];
  caseStudy: {
    company: string;
    result: string;
    metric: string;
  };
}

const segments: MarketSegment[] = [
  {
    id: 'technology',
    title: 'Technology & SaaS',
    description: 'Fast-moving tech companies and SaaS platforms requiring rapid market penetration and scalable growth strategies.',
    icon: Rocket,
    color: 'bg-primary',
    marketSize: '$2.3T',
    growthRate: '+23% YoY',
    keyMetrics: [
      { label: 'Average CAC', value: '$180' },
      { label: 'LTV:CAC Ratio', value: '4.2:1' },
      { label: 'Churn Rate', value: '5.2%' }
    ],
    challenges: [
      'High competition and market saturation',
      'Rapid technology evolution',
      'Customer acquisition cost optimization',
      'Product-market fit validation'
    ],
    opportunities: [
      'AI-driven personalization at scale',
      'Predictive customer behavior analytics',
      'Automated growth optimization',
      'Real-time competitive intelligence'
    ],
    strategies: [
      'Product-led growth implementation',
      'Multi-channel attribution modeling',
      'Behavioral segmentation & targeting',
      'Freemium conversion optimization'
    ],
    caseStudy: {
      company: 'CloudFlow SaaS',
      result: '340% increase in qualified leads',
      metric: '85% reduction in CAC'
    }
  },
  {
    id: 'healthcare',
    title: 'Healthcare & MedTech',
    description: 'Healthcare organizations and medical technology companies navigating complex regulatory environments while scaling patient reach.',
    icon: Shield,
    color: 'bg-secondary',
    marketSize: '$1.8T',
    growthRate: '+15% YoY',
    keyMetrics: [
      { label: 'Patient Acquisition', value: '$420' },
      { label: 'Compliance Score', value: '98.5%' },
      { label: 'Provider Adoption', value: '67%' }
    ],
    challenges: [
      'HIPAA and regulatory compliance',
      'Long sales cycles and decision processes',
      'Trust and credibility establishment',
      'Complex stakeholder ecosystems'
    ],
    opportunities: [
      'Telehealth market expansion',
      'AI-powered patient insights',
      'Automated compliance monitoring',
      'Provider education platforms'
    ],
    strategies: [
      'Compliance-first marketing approach',
      'Medical professional education programs',
      'Patient outcome-focused messaging',
      'Multi-stakeholder journey mapping'
    ],
    caseStudy: {
      company: 'MedTech Innovations',
      result: '250% increase in provider sign-ups',
      metric: '92% compliance maintenance'
    }
  },
  {
    id: 'finance',
    title: 'FinTech & Financial Services',
    description: 'Financial technology companies and traditional financial institutions modernizing customer experiences and expanding market reach.',
    icon: TrendingUp,
    color: 'bg-accent',
    marketSize: '$1.5T',
    growthRate: '+18% YoY',
    keyMetrics: [
      { label: 'Customer LTV', value: '$3,200' },
      { label: 'Trust Score', value: '89%' },
      { label: 'Mobile Adoption', value: '73%' }
    ],
    challenges: [
      'Regulatory compliance and security',
      'Trust and security perception',
      'Traditional banking competition',
      'Complex product education needs'
    ],
    opportunities: [
      'Open banking integration',
      'AI fraud detection marketing',
      'Personalized financial advice',
      'Cryptocurrency market entry'
    ],
    strategies: [
      'Security-first positioning',
      'Educational content marketing',
      'Partnership channel development',
      'Mobile-first user experience'
    ],
    caseStudy: {
      company: 'NextGen Financial',
      result: '180% increase in app downloads',
      metric: '65% improvement in trust metrics'
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Retail',
    description: 'Online retailers and e-commerce platforms focused on customer acquisition, retention, and marketplace expansion.',
    icon: ShoppingCart,
    color: 'bg-primary',
    marketSize: '$4.2T',
    growthRate: '+27% YoY',
    keyMetrics: [
      { label: 'ROAS', value: '4.8:1' },
      { label: 'Cart Abandonment', value: '12%' },
      { label: 'Repeat Purchase', value: '45%' }
    ],
    challenges: [
      'High advertising costs and competition',
      'Cart abandonment optimization',
      'Customer retention challenges',
      'Inventory and supply chain visibility'
    ],
    opportunities: [
      'AI-powered personalization',
      'Voice commerce integration',
      'Social commerce expansion',
      'Subscription model adoption'
    ],
    strategies: [
      'Omnichannel customer journey',
      'Dynamic pricing optimization',
      'Influencer partnership programs',
      'Retargeting automation'
    ],
    caseStudy: {
      company: 'StyleTech Retail',
      result: '420% increase in repeat purchases',
      metric: '78% reduction in cart abandonment'
    }
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'Manufacturing companies and industrial businesses modernizing B2B sales processes and expanding into new markets.',
    icon: Factory,
    color: 'bg-secondary',
    marketSize: '$14.7T',
    growthRate: '+8% YoY',
    keyMetrics: [
      { label: 'Deal Size', value: '$125K' },
      { label: 'Sales Cycle', value: '8.2 months' },
      { label: 'Win Rate', value: '34%' }
    ],
    challenges: [
      'Long B2B sales cycles',
      'Complex decision-making units',
      'Technical product education',
      'Digital transformation adoption'
    ],
    opportunities: [
      'Industry 4.0 positioning',
      'IoT integration marketing',
      'Sustainability messaging',
      'Supply chain transparency'
    ],
    strategies: [
      'Technical content marketing',
      'Trade show digital integration',
      'Account-based marketing',
      'Partner channel development'
    ],
    caseStudy: {
      company: 'IndusTech Solutions',
      result: '290% increase in qualified leads',
      metric: '45% reduction in sales cycle'
    }
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Consulting firms, agencies, and professional service providers scaling expertise and expanding client relationships.',
    icon: Building,
    color: 'bg-accent',
    marketSize: '$1.1T',
    growthRate: '+12% YoY',
    keyMetrics: [
      { label: 'Client LTV', value: '$85K' },
      { label: 'Referral Rate', value: '67%' },
      { label: 'Utilization', value: '78%' }
    ],
    challenges: [
      'Commoditization of services',
      'Scaling expertise and knowledge',
      'Client retention and expansion',
      'Thought leadership establishment'
    ],
    opportunities: [
      'AI-augmented service delivery',
      'Remote collaboration tools',
      'Data-driven insights offering',
      'Subscription service models'
    ],
    strategies: [
      'Thought leadership content',
      'Case study storytelling',
      'Client success programs',
      'Partnership ecosystems'
    ],
    caseStudy: {
      company: 'Strategic Consultants Group',
      result: '200% increase in client retention',
      metric: '150% growth in project value'
    }
  }
];

export function SegmentFlipCards() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleCardHover = (segmentId: string) => {
    setFlippedCard(segmentId);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  const filteredSegments = selectedFilter === 'all' 
    ? segments 
    : segments.filter(segment => segment.id === selectedFilter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant={selectedFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setSelectedFilter('all')}
          size="sm"
        >
          All Industries
        </Button>
        {segments.map((segment) => (
          <Button
            key={segment.id}
            variant={selectedFilter === segment.id ? 'default' : 'outline'}
            onClick={() => setSelectedFilter(segment.id)}
            size="sm"
          >
            {segment.title.split(' ')[0]}
          </Button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSegments.map((segment) => {
          const IconComponent = segment.icon;
          const isFlipped = flippedCard === segment.id;

          return (
            <div
              key={segment.id}
              className="group h-96 [perspective:1000px]"
              onMouseEnter={() => handleCardHover(segment.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}>
                
                {/* Front Card */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${segment.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {segment.growthRate}
                      </Badge>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {segment.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {segment.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Market Size</span>
                          <span className="text-lg font-bold text-primary">{segment.marketSize}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                          {segment.keyMetrics.slice(0, 2).map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">{metric.label}</span>
                              <span className="font-medium text-foreground">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Hover for insights</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back Card */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Strategic Insights
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        Case Study
                      </Badge>
                    </div>

                    <div className="flex-1 space-y-4 text-sm">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Opportunities</h4>
                        <ul className="space-y-1">
                          {segment.opportunities.slice(0, 3).map((opportunity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <Target className="h-3 w-3 mt-1 flex-shrink-0 text-primary" />
                              {opportunity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Success Story</h4>
                        <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                          <p className="font-medium text-foreground">{segment.caseStudy.company}</p>
                          <p className="text-muted-foreground">{segment.caseStudy.result}</p>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 text-primary" />
                            <span className="text-primary font-medium">{segment.caseStudy.metric}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button size="sm" className="w-full">
                        View Full Case Study
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Get Industry Report
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      {/* Industry Statistics */}
      <Card className="p-6 mt-12">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Cross-Industry Impact</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered GTM strategies have driven measurable results across diverse industry verticals
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">$2.1B+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">850+</div>
              <div className="text-sm text-muted-foreground">Successful Launches</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">15M+</div>
              <div className="text-sm text-muted-foreground">Customers Acquired</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Client Success Rate</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}