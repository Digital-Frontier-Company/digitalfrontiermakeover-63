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
  client: "Memphis Coffee Co.",
  industry: "Local Business",
  image: "/lovable-uploads/5c0de3ce-56aa-4bfa-875d-da66db91d1b0.png",
  metrics: {
    kpi1: {
      label: "Traffic Growth",
      value: "+120%",
      icon: TrendingUp
    },
    kpi2: {
      label: "Qualified Leads",
      value: "2x",
      icon: Target
    },
    kpi3: {
      label: "Online Presence",
      value: "+300%",
      icon: Users
    }
  },
  description: "Transformed their online presence with digital marketing strategies that doubled qualified leads in three months."
}, {
  id: 2,
  client: "Patriot Plunges",
  industry: "Local Services", 
  image: "/lovable-uploads/cdbb5e53-2796-4c33-95db-6f79c692958b.png",
  metrics: {
    kpi1: {
      label: "Local Search",
      value: "#1 Ranking",
      icon: TrendingUp
    },
    kpi2: {
      label: "Phone Calls",
      value: "+400%",
      icon: Target
    },
    kpi3: {
      label: "Customer Base",
      value: "+250%",
      icon: Users
    }
  },
  description: "Dialed in their local search optimization and their phone hasn't stopped ringing with new customers."
}, {
  id: 3,
  client: "Memphis Earth Movers",
  industry: "Construction",
  image: "/lovable-uploads/5e7e88e1-49a1-4ebc-a098-0f23603a69e8.png",
  metrics: {
    kpi1: {
      label: "Project Bids",
      value: "2x",
      icon: TrendingUp
    },
    kpi2: {
      label: "AEO Results",
      value: "+180%",
      icon: Target
    },
    kpi3: {
      label: "Market Position",
      value: "Industry Leader",
      icon: Users
    }
  },
  description: "Project bids doubled after implementing our Answer Engine Optimization roadmap for heavy equipment services."
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
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          <img src={currentCase.image} alt={`${currentCase.client} case study`} className="max-w-fit h-72 object-cover rounded-tl-xl shadow-lg" />
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