/**
 * Image compression and optimization utilities
 * Handles client-side image processing and optimization
 */

export interface CompressionOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  format?: 'webp' | 'jpeg' | 'png';
  enableProgressive?: boolean;
}

export interface OptimizedImageResult {
  compressedFile: File;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  format: string;
}

/**
 * Compress and optimize images on the client side
 */
export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<OptimizedImageResult> {
  const {
    quality = 0.8,
    maxWidth = 1920,
    maxHeight = 1080,
    format = 'webp',
    enableProgressive = true
  } = options;

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Canvas context not supported'));
      return;
    }

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;
        
        if (width > height) {
          width = Math.min(width, maxWidth);
          height = width / aspectRatio;
        } else {
          height = Math.min(height, maxHeight);
          width = height * aspectRatio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      // Apply optimization settings
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Image compression failed'));
            return;
          }

          const compressedFile = new File(
            [blob],
            `${file.name.split('.')[0]}.${format}`,
            { type: `image/${format}` }
          );

          const result: OptimizedImageResult = {
            compressedFile,
            originalSize: file.size,
            compressedSize: blob.size,
            compressionRatio: ((file.size - blob.size) / file.size) * 100,
            format
          };

          resolve(result);
        },
        `image/${format}`,
        quality
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Batch compress multiple images
 */
export async function batchCompressImages(
  files: File[],
  options: CompressionOptions = {}
): Promise<OptimizedImageResult[]> {
  const compressionPromises = files.map(file => compressImage(file, options));
  return Promise.all(compressionPromises);
}

/**
 * Get optimal image dimensions for different use cases
 */
export function getOptimalDimensions(useCase: string): CompressionOptions {
  const presets: Record<string, CompressionOptions> = {
    hero: { maxWidth: 1920, maxHeight: 1080, quality: 0.85, format: 'webp' },
    thumbnail: { maxWidth: 400, maxHeight: 300, quality: 0.8, format: 'webp' },
    card: { maxWidth: 600, maxHeight: 400, quality: 0.8, format: 'webp' },
    icon: { maxWidth: 128, maxHeight: 128, quality: 0.9, format: 'png' },
    logo: { maxWidth: 300, maxHeight: 300, quality: 0.9, format: 'png' },
    gallery: { maxWidth: 1200, maxHeight: 800, quality: 0.8, format: 'webp' },
    mobile: { maxWidth: 768, maxHeight: 1024, quality: 0.75, format: 'webp' },
    social: { maxWidth: 1200, maxHeight: 630, quality: 0.85, format: 'webp' }
  };

  return presets[useCase] || presets.card;
}

/**
 * Convert image to WebP format with fallback
 */
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

/**
 * Generate responsive image breakpoints
 */
export function generateResponsiveBreakpoints(
  baseWidth: number,
  baseHeight?: number
): Array<{ width: number; height?: number; density: string }> {
  const breakpoints = [
    { multiplier: 0.5, density: '1x' },
    { multiplier: 1, density: '2x' },
    { multiplier: 1.5, density: '3x' }
  ];

  return breakpoints.map(({ multiplier, density }) => ({
    width: Math.round(baseWidth * multiplier),
    height: baseHeight ? Math.round(baseHeight * multiplier) : undefined,
    density
  }));
}

/**
 * Calculate compression statistics
 */
export function calculateCompressionStats(results: OptimizedImageResult[]) {
  const totalOriginalSize = results.reduce((sum, result) => sum + result.originalSize, 0);
  const totalCompressedSize = results.reduce((sum, result) => sum + result.compressedSize, 0);
  const totalSavings = totalOriginalSize - totalCompressedSize;
  const averageCompressionRatio = results.reduce((sum, result) => sum + result.compressionRatio, 0) / results.length;

  return {
    totalOriginalSize,
    totalCompressedSize,
    totalSavings,
    averageCompressionRatio,
    totalFiles: results.length,
    sizeSavingsPercentage: (totalSavings / totalOriginalSize) * 100
  };
}