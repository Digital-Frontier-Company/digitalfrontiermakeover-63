import React, { useState, useRef, useEffect } from 'react';
import { getImageDimensions } from '@/utils/imageOptimization';
import { LazyImage } from './LazyImage';

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

  // Automatically detect optimal dimensions if not using a preset
  useEffect(() => {
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
        format: 'webp',
        quality: useCase === 'icon' || useCase === 'logo' ? 0.9 : 0.8
      }}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default OptimizedImage;