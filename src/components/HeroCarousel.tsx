
import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselSlide {
  text: string;
  highlightText?: string;
  subText?: string;
  type: 'text-only';
}

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: CarouselSlide[] = [{
    text: "Digital Frontier",
    highlightText: "Marketing",
    type: "text-only"
  }, {
    text: "If you were truly Honest about it. We both know..",
    highlightText: "Your Web-site",
    subText: "could be........ MORE",
    type: "text-only"
  }, {
    text: "How about a",
    highlightText: "Money-Printing Machine",
    type: "text-only"
  }, {
    text: "Ready for a",
    highlightText: "Money-Printing Machine",
    type: "text-only"
  }, {
    text: "Build your",
    highlightText: "Money-Printing Machine",
    type: "text-only"
  }, {
    text: "Deploy your",
    highlightText: "Money-Printing Machine",
    type: "text-only"
  }, {
    text: "Stop paying for pretty pixels.",
    highlightText: "",
    subText: "Your site should print money. We design pages around the only metric that matters in 2025 - Attention.",
    type: "text-only"
  }];

  const autoPlayInterval = 5000; // 5 seconds

  const scrollToNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const nextIndex = emblaApi.selectedScrollSnap();
    setCurrentIndex(nextIndex);
  }, [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      scrollToNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [scrollToNext]);

  // Update current slide index when carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="df-hero-carousel relative">
      <Carousel ref={emblaRef} className="w-full overflow-hidden" opts={{
        loop: true,
        align: "center",
        dragFree: false
      }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-w-full">
              <div className="relative z-10 flex flex-col items-center justify-center h-80 md:h-96 text-center px-6">
                {slide.text && (
                  <h2 className="text-3xl md:text-5xl mb-4 text-white text-center font-extrabold">
                    {slide.text}
                  </h2>
                )}
                
                {slide.highlightText && (
                  <h2 className="text-4xl md:text-6xl mb-6 text-[var(--df-light-blue)] mx-0 my-8 px-2 py-2 font-extrabold border border-cyan-500 text-cyan-400 capitalize shadow-[0_0_15px_rgba(0,255,255,0.6)] rounded-sm">
                    {slide.highlightText}
                  </h2>
                )}
                
                {slide.subText && (
                  <h2 className="text-xl md:text-3xl text-[var(--df-light-blue)] max-w-4xl text-cyan-400 font-extrabold">
                    {slide.subText}
                  </h2>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-[var(--df-light-blue)]" : "w-2 bg-white/30"
            }`} 
            aria-label={`Go to slide ${index + 1}`} 
            onClick={() => {
              emblaApi?.scrollTo(index);
              setCurrentIndex(index);
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
