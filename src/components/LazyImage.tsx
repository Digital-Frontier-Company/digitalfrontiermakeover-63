import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  getOptimizedImageUrl, 
  generateResponsiveSrcSet, 
  getResponsiveSizes,
  getBrowserImageSupport,
  type ImageOptimizationOptions 
} from '@/utils/imageOptimization';

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

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
      return { src: hasError ? fallbackSrc : src };
    }

    // Determine best format based on browser support and image type
    const preferredFormat = browserSupport.avif ? 'avif' : browserSupport.webp ? 'webp' : 'png';
    
    const optimizedSrc = getOptimizedImageUrl(
      src, 
      finalWidth, 
      finalHeight, 
      optimization.format || preferredFormat
    );

    const srcSet = generateResponsiveSrcSet(src, finalWidth, finalHeight);
    const sizes = optimization.sizes || getResponsiveSizes(finalWidth);

    return {
      src: optimizedSrc,
      srcSet,
      sizes,
      avifSrcSet: browserSupport.avif ? generateResponsiveSrcSet(src, finalWidth, finalHeight, 'avif') : null,
      webpSrcSet: browserSupport.webp ? generateResponsiveSrcSet(src, finalWidth, finalHeight, 'webp') : null
    };
  };

  const imageProps = getOptimizedSources();
  const shouldLoad = isInView || isLoaded || optimization.priority;

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-muted/20",
        className
      )}
      style={{ 
        aspectRatio: finalWidth && finalHeight ? `${finalWidth}/${finalHeight}` : undefined,
        width: finalWidth,
        height: finalHeight
      }}
    >
      {/* Low quality placeholder */}
      {!isLoaded && lowQualitySrc && shouldLoad && (
        <img
          src={lowQualitySrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
          width={finalWidth}
          height={finalHeight}
        />
      )}

      {/* Custom placeholder */}
      {!isLoaded && placeholder && !shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center">
          {placeholder}
        </div>
      )}

      {/* Main optimized image */}
      {shouldLoad && (
        <picture>
          {/* AVIF source for modern browsers */}
          {imageProps.avifSrcSet && (
            <source
              srcSet={imageProps.avifSrcSet}
              sizes={imageProps.sizes}
              type="image/avif"
            />
          )}
          
          {/* WebP source for supported browsers */}
          {imageProps.webpSrcSet && (
            <source
              srcSet={imageProps.webpSrcSet}
              sizes={imageProps.sizes}
              type="image/webp"
            />
          )}
          
          {/* Fallback image */}
          <img
            {...props}
            src={imageProps.src}
            srcSet={imageProps.srcSet}
            sizes={imageProps.sizes}
            alt={alt}
            width={finalWidth}
            height={finalHeight}
            onLoad={handleLoad}
            onError={handleError}
            loading={optimization.priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={optimization.priority ? "high" : "auto"}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </picture>
      )}

      {/* Loading overlay */}
      {shouldLoad && !isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 animate-pulse" />
      )}
    </div>
  );
};