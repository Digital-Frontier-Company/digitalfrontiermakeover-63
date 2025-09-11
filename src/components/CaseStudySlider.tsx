import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target } from 'lucide-react';
interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  image: string;
  metrics: {
    kpi1: {
      label: string;
      value: string;
      icon: any;
    };
    kpi2: {
      label: string;
      value: string;
      icon: any;
    };
    kpi3: {
      label: string;
      value: string;
      icon: any;
    };
  };
  description: string;
}
const caseStudies: CaseStudy[] = [{
  id: 1,
  client: "TechCorp Solutions",
  industry: "B2B SaaS",
  image: "/lovable-uploads/a2ac7ae8-1bc5-411f-9ef9-ff10d8fdd4a7.png",
  metrics: {
    kpi1: {
      label: "SQL Increase",
      value: "+247%",
      icon: TrendingUp
    },
    kpi2: {
      label: "Lead Quality",
      value: "+189%",
      icon: Target
    },
    kpi3: {
      label: "Conversion Rate",
      value: "+156%",
      icon: Users
    }
  },
  description: "Transformed their demand generation with AI-powered content marketing and AEO optimization."
}, {
  id: 2,
  client: "DataFlow Analytics",
  industry: "Enterprise Software",
  image: "/lovable-uploads/0d2360a9-25e2-44f5-be84-ff6da9ee399d.png",
  metrics: {
    kpi1: {
      label: "Pipeline Value",
      value: "+$2.4M",
      icon: TrendingUp
    },
    kpi2: {
      label: "CAC Reduction",
      value: "-43%",
      icon: Target
    },
    kpi3: {
      label: "Sales Velocity",
      value: "+67%",
      icon: Users
    }
  },
  description: "Revolutionized their go-to-market strategy with predictive analytics and automated nurturing."
}, {
  id: 3,
  client: "CloudScale Inc",
  industry: "Cloud Infrastructure",
  image: "/lovable-uploads/bc4175bf-e990-48ba-b6c6-bf010230dd00.png",
  metrics: {
    kpi1: {
      label: "Organic Traffic",
      value: "+312%",
      icon: TrendingUp
    },
    kpi2: {
      label: "Market Share",
      value: "+28%",
      icon: Target
    },
    kpi3: {
      label: "Brand Authority",
      value: "+198%",
      icon: Users
    }
  },
  description: "Dominated their category with strategic Answer Engine Optimization and thought leadership."
}];
const CaseStudySlider = () => {
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
  return <div className="relative w-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 p-8 px-[33px] py-[62px] mx-0">
        {/* Image Section */}
        <div className="relative">
          <img src={currentCase.image} alt={`${currentCase.client} case study`} className="max-w-fit max-h object-cover rounded-tl-xl shadow-lg" />
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-primary">{currentCase.industry}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{currentCase.client}</h3>
            <p className="text-muted-foreground">{currentCase.description}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(currentCase.metrics).map(([key, metric]) => {
            const Icon = metric.icon;
            return <div key={key} className="text-center">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>;
          })}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between p-6 border-t border-border/50">
        <button onClick={prevSlide} className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {caseStudies.map((_, index) => <button key={index} onClick={() => {
          setCurrentSlide(index);
          setIsAutoPlaying(false);
        }} className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'}`} />)}
        </div>

        <button onClick={nextSlide} className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>;
};
export default CaseStudySlider;