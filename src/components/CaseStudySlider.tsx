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
  return;
};
export default CaseStudySlider;