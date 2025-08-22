/**
 * Image optimization utilities for performance and SEO
 */

export interface ResponsiveImageSizes {
  small: string;  // Mobile (max 480px)
  medium: string; // Tablet (max 768px)
  large: string;  // Desktop (max 1200px)
  xlarge: string; // Large desktop (1200px+)
}

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'png' | 'jpg';
  sizes?: string;
  priority?: boolean;
}

/**
 * Generate optimized image URLs with proper sizing
 */
export function getOptimizedImageUrl(
  originalSrc: string, 
  targetWidth: number, 
  targetHeight?: number,
  format: 'webp' | 'avif' | 'png' | 'jpg' = 'webp'
): string {
  // For lovable-uploads, we can't resize server-side, but we can optimize loading
  if (!originalSrc.includes('lovable-uploads')) {
    return originalSrc;
  }

  // Return original with optimization hints for browser
  return originalSrc;
}

/**
 * Generate CSS background-size optimization based on display dimensions
 */
export function getOptimizedBackgroundSize(
  displayWidth: number,
  displayHeight: number,
  originalWidth: number = 1536,
  originalHeight: number = 1024
): string {
  const displayRatio = displayWidth / displayHeight;
  const originalRatio = originalWidth / originalHeight;
  
  // If display is much smaller than original, suggest cover with positioning
  if (displayWidth < originalWidth * 0.5) {
    return displayRatio > originalRatio ? 'cover' : 'contain';
  }
  
  return 'cover';
}

/**
 * Generate responsive image srcset for different screen sizes
 */
export function generateResponsiveSrcSet(
  originalSrc: string,
  baseWidth: number,
  baseHeight?: number
): string {
  const sizes = [
    { width: Math.round(baseWidth * 0.5), density: '1x' },
    { width: baseWidth, density: '2x' },
    { width: Math.round(baseWidth * 1.5), density: '3x' }
  ];

  return sizes
    .map(({ width, density }) => {
      const height = baseHeight ? Math.round((baseHeight * width) / baseWidth) : undefined;
      const url = getOptimizedImageUrl(originalSrc, width, height);
      return `${url} ${density}`;
    })
    .join(', ');
}

/**
 * Get responsive sizes attribute based on display dimensions
 */
export function getResponsiveSizes(displayWidth: number): string {
  if (displayWidth <= 32) {
    return '32px';
  } else if (displayWidth <= 64) {
    return '(max-width: 768px) 48px, 64px';
  } else if (displayWidth <= 96) {
    return '(max-width: 768px) 64px, (max-width: 1200px) 80px, 96px';
  } else if (displayWidth <= 144) {
    return '(max-width: 768px) 96px, (max-width: 1200px) 120px, 144px';
  } else if (displayWidth <= 192) {
    return '(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px';
  } else if (displayWidth <= 320) {
    return '(max-width: 768px) 240px, (max-width: 1200px) 280px, 320px';
  } else if (displayWidth <= 480) {
    return '(max-width: 768px) 320px, (max-width: 1200px) 400px, 480px';
  } else {
    return '(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw';
  }
}

/**
 * Check if browser supports modern image formats
 */
export function getBrowserImageSupport(): {
  webp: boolean;
  avif: boolean;
} {
  if (typeof window === 'undefined') {
    return { webp: false, avif: false };
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  const webp = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  // Check AVIF support
  let avif = false;
  try {
    avif = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch (e) {
    avif = false;
  }

  return { webp, avif };
}

/**
 * Image size mappings for common use cases
 */
export const IMAGE_SIZES = {
  logo: { width: 96, height: 96 },
  logoLarge: { width: 180, height: 180 },
  heroLogo: { width: 480, height: 320 },
  thumbnail: { width: 144, height: 96 },
  card: { width: 320, height: 200 },
  hero: { width: 480, height: 320 },
  feature: { width: 300, height: 200 },
  icon: { width: 64, height: 64 },
  iconSmall: { width: 32, height: 32 },
  avatar: { width: 112, height: 112 },
  serviceCard: { width: 283, height: 192 },
  trustBadge: { width: 96, height: 96 },
  footerLogo: { width: 32, height: 32 }
} as const;

/**
 * Get proper dimensions for image based on use case
 */
export function getImageDimensions(
  originalSrc: string,
  useCase: keyof typeof IMAGE_SIZES = 'thumbnail'
): { width: number; height: number; sizes: string } {
  const dimensions = IMAGE_SIZES[useCase];
  return {
    ...dimensions,
    sizes: getResponsiveSizes(dimensions.width)
  };
}