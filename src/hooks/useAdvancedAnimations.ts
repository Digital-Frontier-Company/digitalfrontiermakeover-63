
import { useEffect, useRef } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, once]);
};

export const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const useMagneticEffect = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number;
    let cachedRect: DOMRect | null = null;
    let lastTime = 0;
    
    const updateRect = () => {
      if (element) {
        cachedRect = element.getBoundingClientRect();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (cachedRect) {
          const x = e.clientX - cachedRect.left - cachedRect.width / 2;
          const y = e.clientY - cachedRect.top - cachedRect.height / 2;
          element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        }
      });
    };

    const handleMouseLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      element.style.transform = 'translate(0, 0)';
    };

    // Cache rect on mount and resize
    updateRect();
    window.addEventListener('resize', updateRect, { passive: true });
    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('resize', updateRect);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export const useTextRevealAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || '';
    const chars = text.split('');
    
    element.innerHTML = chars
      .map((char, index) => 
        `<span style="animation-delay: ${index * 0.05}s" class="inline-block opacity-0 animate-fade-in">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const spans = element.querySelectorAll('span');
          spans.forEach((span) => {
            span.classList.add('opacity-100');
            span.classList.remove('opacity-0');
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return ref;
};
