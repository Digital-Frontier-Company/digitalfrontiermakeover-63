import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AdFunnelCaseStudies = () => {
  const caseStudies = [
    {
      icon: "💼",
      title: "E-commerce Retailer",
      description: "Implemented AI-powered audience discovery and dynamic retargeting, resulting in a 42% increase in ROAS and 35% reduction in customer acquisition cost.",
      metrics: [
        { label: "ROAS Increase", value: "+42%" },
        { label: "CAC Reduction", value: "-35%" },
        { label: "Conversion Rate", value: "+28%" }
      ],
      color: "blue"
    },
    {
      icon: "🏥",
      title: "Healthcare Provider",
      description: "Used AI-driven lead scoring and conversion optimization to reduce patient acquisition costs by 35% while increasing appointment bookings by 67%.",
      metrics: [
        { label: "Acquisition Cost", value: "-35%" },
        { label: "Bookings Increase", value: "+67%" },
        { label: "Lead Quality", value: "+89%" }
      ],
      color: "purple"
    },
    {
      icon: "🎓",
      title: "Education Platform",
      description: "Leveraged AI funnel optimization to increase course enrollments by 68% while maintaining acquisition costs through intelligent targeting.",
      metrics: [
        { label: "Enrollments", value: "+68%" },
        { label: "Cost Stability", value: "0%" },
        { label: "Student Retention", value: "+45%" }
      ],
      color: "indigo"
    },
    {
      icon: "🏦",
      title: "Financial Services",
      description: "Deployed AI-powered personalization across the entire funnel, achieving 156% improvement in conversion rates and 78% increase in customer lifetime value.",
      metrics: [
        { label: "Conversion Rate", value: "+156%" },
        { label: "Customer LTV", value: "+78%" },
        { label: "Churn Reduction", value: "-42%" }
      ],
      color: "green"
    },
    {
      icon: "🛒",
      title: "SaaS Company",
      description: "Implemented predictive analytics and automated nurturing sequences, resulting in 94% increase in trial-to-paid conversions and 52% boost in monthly revenue.",
      metrics: [
        { label: "Trial Conversion", value: "+94%" },
        { label: "Revenue Growth", value: "+52%" },
        { label: "User Engagement", value: "+73%" }
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; border: string } } = {
      blue: { bg: "bg-blue-900/20", icon: "text-blue-400", border: "border-blue-800/30" },
      purple: { bg: "bg-purple-900/20", icon: "text-purple-400", border: "border-purple-800/30" },
      indigo: { bg: "bg-indigo-900/20", icon: "text-indigo-400", border: "border-indigo-800/30" },
      green: { bg: "bg-green-900/20", icon: "text-green-400", border: "border-green-800/30" },
      orange: { bg: "bg-orange-900/20", icon: "text-orange-400", border: "border-orange-800/30" },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Success Stories</h2>
      <p className="text-slate-300 mb-12 text-lg">
        Real results from businesses that transformed their ad funnels with AI-powered optimization
      </p>
      
      <Carousel className="w-full">
        <CarouselContent>
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={`border-slate-800 bg-slate-900/80 h-full transition-all hover:shadow-lg hover:-translate-y-1 ${colors.border}`}>
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className={`${colors.bg} self-start p-3 rounded-lg ${colors.icon} mb-4 text-2xl`}>
                        {study.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-100">{study.title}</h3>
                      <p className="text-slate-300 mb-6 flex-grow text-sm leading-relaxed">{study.description}</p>
                      
                      <div className="space-y-3">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center">
                            <span className="text-slate-400 text-sm">{metric.label}</span>
                            <span className={`font-semibold ${colors.icon}`}>{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`${colors.icon} text-sm mt-4 font-medium cursor-pointer hover:underline`}>
                        View Full Case Study →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default AdFunnelCaseStudies;