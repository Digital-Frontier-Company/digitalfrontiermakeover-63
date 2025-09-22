import React from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';
import { getSEOImageProps, generateAltTextHints, SEO_IMAGE_PRESETS } from '@/utils/seoImageOptimization';
import { IMAGE_SIZES } from '@/utils/imageOptimization';

interface SEOOptimizedImageProps {
  src: string;
  alt: string;
  useCase?: keyof typeof IMAGE_SIZES;
  className?: string;
  isAboveFold?: boolean;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * SEO-focused image component that automatically optimizes for performance and search engines
 */
export const SEOOptimizedImage: React.FC<SEOOptimizedImageProps> = ({
  src,
  alt,
  useCase = 'card',
  className = '',
  isAboveFold = false,
  priority,
  placeholder,
  onLoad,
  onError
}) => {
  const seoProps = getSEOImageProps(src, useCase as keyof typeof SEO_IMAGE_PRESETS, isAboveFold);
  const finalPriority = priority !== undefined ? priority : seoProps.priority;
  
  // Enhanced alt text validation
  const altTextHints = generateAltTextHints(useCase as keyof typeof SEO_IMAGE_PRESETS);
  const hasGoodAlt = alt.length > 3 && !alt.toLowerCase().includes('image');
  
  // Log warning for poor alt text in development
  if (process.env.NODE_ENV === 'development' && !hasGoodAlt) {
    console.warn(`SEO Warning: Image alt text "${alt}" could be improved. Suggestions: ${altTextHints.join(', ')}`);
  }

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      useCase={useCase}
      className={className}
      loading={finalPriority ? 'eager' : 'lazy'}
      placeholder={placeholder}
      onLoad={onLoad}
      onError={onError}
      priority={finalPriority}
    />
  );
};

export default SEOOptimizedImage;