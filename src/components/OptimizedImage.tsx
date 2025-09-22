import React, { useState, useRef, useEffect } from 'react';
import { getImageDimensions, getBrowserImageSupport } from '@/utils/imageOptimization';
import { LazyImage } from '@/components/LazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  useCase?: 'hero' | 'thumbnail' | 'card' | 'icon' | 'logo' | 'logoLarge' | 'heroLogo' | 'feature' | 'iconSmall' | 'avatar' | 'serviceCard' | 'trustBadge' | 'footerLogo';
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

/**
 * Optimized image component that combines LazyImage with intelligent sizing
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  useCase = 'card',
  className = '',
  loading = 'lazy',
  placeholder,
  onLoad,
  onError,
  priority = false
}) => {
  const [imageDimensions, setImageDimensions] = useState(() => 
    getImageDimensions(src, useCase)
  );
  const [browserSupport, setBrowserSupport] = useState(() => getBrowserImageSupport());

  // Automatically detect optimal dimensions and browser support
  useEffect(() => {
    setBrowserSupport(getBrowserImageSupport());
    
    if (!src.includes('lovable-uploads')) return;
    
    const img = new Image();
    img.onload = () => {
      // Update dimensions based on actual image aspect ratio
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const baseWidth = imageDimensions.width;
      const calculatedHeight = Math.round(baseWidth / aspectRatio);
      
      setImageDimensions({
        ...imageDimensions,
        height: calculatedHeight
      });
    };
    img.src = src;
  }, [src, imageDimensions.width]);

  return (
    <LazyImage
      src={src}
      alt={alt}
      className={className}
      displayWidth={imageDimensions.width}
      displayHeight={imageDimensions.height}
      placeholder={placeholder}
      optimization={{
        priority,
        format: browserSupport.avif ? 'avif' : browserSupport.webp ? 'webp' : 'png',
        quality: useCase === 'icon' || useCase === 'logo' ? 0.9 : 0.8,
        sizes: imageDimensions.sizes
      }}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default OptimizedImage;