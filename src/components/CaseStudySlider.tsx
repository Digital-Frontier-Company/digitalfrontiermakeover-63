import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  image: string;
  metrics: {
    kpi1: { label: string; value: string; icon: any };
    kpi2: { label: string; value: string; icon: any };
    kpi3: { label: string; value: string; icon: any };
  };
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "TechCorp Solutions",
    industry: "B2B SaaS",
    image: "/lovable-uploads/a2ac7ae8-1bc5-411f-9ef9-ff10d8fdd4a7.png",
    metrics: {
      kpi1: { label: "SQL Increase", value: "+247%", icon: TrendingUp },
      kpi2: { label: "Lead Quality", value: "+189%", icon: Target },
      kpi3: { label: "Conversion Rate", value: "+156%", icon: Users }
    },
    description: "Transformed their demand generation with AI-powered content marketing and AEO optimization."
  },
  {
    id: 2,
    client: "DataFlow Analytics",
    industry: "Enterprise Software",
    image: "/lovable-uploads/0d2360a9-25e2-44f5-be84-ff6da9ee399d.png",
    metrics: {
      kpi1: { label: "Pipeline Value", value: "+$2.4M", icon: TrendingUp },
      kpi2: { label: "CAC Reduction", value: "-43%", icon: Target },
      kpi3: { label: "Sales Velocity", value: "+67%", icon: Users }
    },
    description: "Revolutionized their go-to-market strategy with predictive analytics and automated nurturing."
  },
  {
    id: 3,
    client: "CloudScale Inc",
    industry: "Cloud Infrastructure",
    image: "/lovable-uploads/bc4175bf-e990-48ba-b6c6-bf010230dd00.png",
    metrics: {
      kpi1: { label: "Organic Traffic", value: "+312%", icon: TrendingUp },
      kpi2: { label: "Market Share", value: "+28%", icon: Target },
      kpi3: { label: "Brand Authority", value: "+198%", icon: Users }
    },
    description: "Dominated their category with strategic Answer Engine Optimization and thought leadership."
  }
];

export default function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-soft-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Real Results, Real Impact
          </h2>
          <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto">
            See how we've transformed businesses with our proven methodology
          </p>
        </div>

        <div className="relative">
          {/* Main slide container */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.client}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-electric-azure/20 to-transparent"></div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="font-poppins font-medium text-2xl text-soft-white mb-2">{currentCase.client}</h3>
                  <p className="text-signal-lime font-medium">{currentCase.industry}</p>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.values(currentCase.metrics).map((metric, index) => (
                    <div key={index} className="text-center">
                      <metric.icon className="w-5 h-5 text-electric-azure mx-auto mb-2" />
                      <div className="font-bold text-2xl text-soft-white mb-1">{metric.value}</div>
                      <div className="text-sm text-soft-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="font-inter text-soft-white/80 leading-relaxed">
                  {currentCase.description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 border border-border rounded-full flex items-center justify-center hover:bg-electric-azure/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-soft-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 border border-border rounded-full flex items-center justify-center hover:bg-electric-azure/20 transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5 text-soft-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-electric-azure' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}