import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getOptimizedImageUrl, generateResponsiveSrcSet, getResponsiveSizes, getBrowserImageSupport, ImageOptimizationOptions } from '@/utils/imageOptimization';
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  placeholder?: React.ReactNode;
  lowQualitySrc?: string;
  optimization?: ImageOptimizationOptions;
  displayWidth?: number;
  displayHeight?: number;
}
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  placeholder,
  lowQualitySrc,
  optimization = {},
  displayWidth,
  displayHeight,
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [browserSupport] = useState(() => getBrowserImageSupport());
  const imgRef = useRef<HTMLImageElement>(null);

  // Determine optimal dimensions
  const finalWidth = displayWidth || (typeof width === 'number' ? width : 300);
  const finalHeight = displayHeight || (typeof height === 'number' ? height : 200);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px 0px'
    });
    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  const handleError = () => {
    setHasError(true);
  };

  // Generate optimized image sources with enhanced format support
  const getOptimizedSources = () => {
    if (hasError || !src.includes('lovable-uploads')) {
      return {
        src: hasError ? fallbackSrc : src
      };
    }

    // Determine best format based on browser support and image type
    const preferredFormat = optimization.format || (browserSupport.avif ? 'avif' : browserSupport.webp ? 'webp' : 'png');
    const optimizedSrc = getOptimizedImageUrl(src, finalWidth, finalHeight, preferredFormat);

    // Enhanced srcset generation for better SEO performance
    const srcSet = generateResponsiveSrcSet(src, finalWidth, finalHeight, preferredFormat);
    const sizes = optimization.sizes || getResponsiveSizes(finalWidth);
    return {
      src: optimizedSrc,
      srcSet,
      sizes,
      // Generate format-specific srcsets for picture element
      avifSrcSet: browserSupport.avif && preferredFormat !== 'avif' ? generateResponsiveSrcSet(src, finalWidth, finalHeight, 'avif') : null,
      webpSrcSet: browserSupport.webp && preferredFormat !== 'webp' ? generateResponsiveSrcSet(src, finalWidth, finalHeight, 'webp') : null
    };
  };
  const imageProps = getOptimizedSources();
  const shouldLoad = isInView || isLoaded || optimization.priority;
  return;
};