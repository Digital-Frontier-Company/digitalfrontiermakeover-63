import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Target, Zap, Users } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startCount) + startCount));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export function GTMHeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const valueProps = [
    "AI-Powered Market Intelligence",
    "Predictive Customer Analytics", 
    "Data-Driven Strategy Framework",
    "Accelerated Time-to-Market"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % valueProps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: TrendingUp, value: 47, suffix: 'B', label: 'AI Marketing Industry Value (2025)', color: 'text-primary' },
    { icon: Target, value: 75, suffix: '%', label: 'SMBs Investing in AI', color: 'text-secondary' },
    { icon: Users, value: 90, suffix: '%', label: 'Fortune 1000 Boosting AI Investments', color: 'text-accent' },
    { icon: Zap, value: 340, suffix: '%', label: 'Average ROI Increase', color: 'text-primary' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Proven GTM Framework</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Launch Smarter with
                <span className="block text-primary">AI-Powered Strategy</span>
              </h2>
              
              {/* Morphing Value Proposition */}
              <div className="h-8 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentText * 32}px)` }}
                >
                  {valueProps.map((text, index) => (
                    <div key={index} className="h-8 flex items-center">
                      <span className="text-xl text-muted-foreground font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Transform your product launch with our comprehensive Go-to-Market Strategy Blueprint. 
              Interactive tools, proven frameworks, and AI-powered insights that deliver measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover-scale animate-pulse">
                Start Your GTM Strategy
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">500+ Successful Launches</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 w-4 text-primary fill-current">⭐</div>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5 Client Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 hover-scale transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-3">
                  <div className={`inline-flex p-3 rounded-lg bg-background/50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter 
                        end={stat.value} 
                        duration={2000} 
                        suffix={stat.suffix}
                        prefix={stat.suffix === 'B' ? '$' : ''}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}