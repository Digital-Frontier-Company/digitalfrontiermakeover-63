/**
 * SEO-focused image optimization utilities
 */

import { IMAGE_SIZES } from './imageOptimization';

// Critical images that should be prioritized for loading
export const CRITICAL_IMAGES = [
  'hero',
  'logoLarge', 
  'heroLogo'
] as const;

// SEO-optimized image dimensions for common use cases
export const SEO_IMAGE_PRESETS = {
  ...IMAGE_SIZES,
  // Enhanced presets for better SEO scores
  heroOptimized: { width: 320, height: 240 }, // Smaller hero for faster LCP
  logoOptimized: { width: 48, height: 48 },   // Smaller logo variants
  cardOptimized: { width: 240, height: 160 }, // Smaller cards for grid layouts
  thumbnailOptimized: { width: 96, height: 64 } // Tiny thumbnails
} as const;

/**
 * Determine if an image should be eagerly loaded for SEO
 */
export function shouldEagerLoad(useCase: string, isAboveFold: boolean = false): boolean {
  const criticalUseCases = ['hero', 'logoLarge', 'heroLogo'];
  return criticalUseCases.includes(useCase) || isAboveFold;
}

/**
 * Get SEO-optimized image props
 */
export function getSEOImageProps(
  src: string,
  useCase: keyof typeof SEO_IMAGE_PRESETS = 'card',
  isAboveFold: boolean = false
) {
  const dimensions = SEO_IMAGE_PRESETS[useCase] || SEO_IMAGE_PRESETS.card;
  const priority = shouldEagerLoad(useCase, isAboveFold);
  
  return {
    displayWidth: dimensions.width,
    displayHeight: dimensions.height,
    loading: priority ? 'eager' as const : 'lazy' as const,
    priority,
    useCase
  };
}

/**
 * Generate proper alt text hints based on image context
 */
export function generateAltTextHints(useCase: keyof typeof SEO_IMAGE_PRESETS): string[] {
  const hints = {
    hero: ['hero image', 'main banner', 'primary visual'],
    logo: ['company logo', 'brand logo', 'logo'],
    logoLarge: ['large company logo', 'main brand logo'],
    heroLogo: ['hero logo', 'main company logo'],
    card: ['feature image', 'content image'],
    thumbnail: ['thumbnail', 'preview image'],
    icon: ['icon', 'small image'],
    feature: ['feature illustration', 'feature image'],
    avatar: ['profile picture', 'user avatar'],
    serviceCard: ['service image', 'service illustration'],
    trustBadge: ['trust badge', 'certification logo'],
    footerLogo: ['footer logo', 'small logo']
  };
  
  return hints[useCase] || ['image'];
}