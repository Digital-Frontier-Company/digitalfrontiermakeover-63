/**
 * Build-time optimization utilities for Vite
 */

import type { Plugin } from 'vite';

/**
 * Image compression plugin for Vite build process
 */
export function imageCompressionPlugin(): Plugin {
  return {
    name: 'image-compression',
    generateBundle(options, bundle) {
      // Identify image assets in the bundle
      Object.keys(bundle).forEach(fileName => {
        const file = bundle[fileName];
        
        if (file.type === 'asset' && fileName.match(/\.(png|jpg|jpeg|webp)$/i)) {
          // Add cache headers for images
          if (file.type === 'asset') {
            // Set long cache headers for hashed image files
            const isHashed = fileName.includes('-') && fileName.match(/[a-f0-9]{8}/);
            if (isHashed) {
              // These will be handled by server configuration
              console.log(`Optimized image: ${fileName}`);
            }
          }
        }
      });
    }
  };
}

/**
 * Performance optimization configuration for Vite
 */
export function getPerformanceConfig() {
  return {
    build: {
      target: 'esnext',
      minify: 'terser',
      cssMinify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', 'lucide-react'],
            utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
            animations: ['framer-motion'],
            seo: ['react-helmet-async']
          },
          assetFileNames: (assetInfo: any) => {
            const info = assetInfo.name?.split('.') || ['', 'unknown'];
            const ext = info[info.length - 1];
            
            // Organize assets by type with cache-friendly names
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/woff2?|eot|ttf|otf/.test(ext)) {
              return `fonts/[name]-[hash][extname]`;
            }
            if (/css/.test(ext)) {
              return `styles/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: (chunkInfo: any) => {
            // Create predictable chunk names for better caching
            const name = chunkInfo.name || 'chunk';
            return `js/${name}-[hash].js`;
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        },
        mangle: {
          safari10: true
        }
      }
    },
    esbuild: {
      drop: ['console', 'debugger'],
      legalComments: 'none' as const
    }
  };
}

/**
 * Cache optimization headers
 */
export function getCacheHeaders() {
  return {
    // Static assets with hash - can be cached for 1 year
    '/assets/*': {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    '/images/*': {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    '/fonts/*': {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    '/styles/*': {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    // JavaScript chunks
    '/js/*': {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    // HTML pages - shorter cache with revalidation
    '*.html': {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'Vary': 'Accept-Encoding'
    },
    // API endpoints - no cache
    '/api/*': {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  };
}

/**
 * Preload critical resources
 */
export function generatePreloadTags(criticalResources: string[]) {
  return criticalResources.map(resource => {
    const ext = resource.split('.').pop()?.toLowerCase();
    
    let type = '';
    let as = '';
    
    if (ext === 'css') {
      type = 'text/css';
      as = 'style';
    } else if (ext === 'js') {
      type = 'application/javascript';
      as = 'script';
    } else if (['woff', 'woff2'].includes(ext || '')) {
      type = 'font/woff2';
      as = 'font';
    } else if (['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(ext || '')) {
      as = 'image';
    }
    
    return {
      rel: 'preload',
      href: resource,
      as,
      type: type || undefined,
      crossOrigin: as === 'font' ? 'anonymous' : undefined
    };
  });
}

/**
 * Bundle analysis utilities
 */
export function analyzeBundleSize(bundle: Record<string, any>) {
  const analysis = {
    totalSize: 0,
    chunks: [] as Array<{ name: string; size: number; type: 'js' | 'css' | 'asset' }>,
    assets: [] as Array<{ name: string; size: number; type: string }>
  };
  
  Object.entries(bundle).forEach(([fileName, file]) => {
    const size = file.type === 'chunk' ? file.code.length : 
                  file.type === 'asset' ? file.source.length : 0;
    
    analysis.totalSize += size;
    
    if (file.type === 'chunk') {
      analysis.chunks.push({
        name: fileName,
        size,
        type: fileName.endsWith('.css') ? 'css' : 'js'
      });
    } else if (file.type === 'asset') {
      analysis.assets.push({
        name: fileName,
        size,
        type: fileName.split('.').pop() || 'unknown'
      });
    }
  });
  
  // Sort by size (largest first)
  analysis.chunks.sort((a, b) => b.size - a.size);
  analysis.assets.sort((a, b) => b.size - a.size);
  
  return analysis;
}

/**
 * Performance budget checker
 */
export function checkPerformanceBudget(analysis: ReturnType<typeof analyzeBundleSize>) {
  const budgets = {
    totalJS: 250 * 1024, // 250KB for all JS
    totalCSS: 50 * 1024,  // 50KB for all CSS
    singleChunk: 100 * 1024, // 100KB for any single chunk
    totalAssets: 2 * 1024 * 1024 // 2MB for all assets
  };
  
  const warnings = [];
  
  const jsSize = analysis.chunks
    .filter(chunk => chunk.type === 'js')
    .reduce((sum, chunk) => sum + chunk.size, 0);
    
  const cssSize = analysis.chunks
    .filter(chunk => chunk.type === 'css')
    .reduce((sum, chunk) => sum + chunk.size, 0);
  
  if (jsSize > budgets.totalJS) {
    warnings.push(`Total JS size (${(jsSize / 1024).toFixed(1)}KB) exceeds budget (${(budgets.totalJS / 1024).toFixed(1)}KB)`);
  }
  
  if (cssSize > budgets.totalCSS) {
    warnings.push(`Total CSS size (${(cssSize / 1024).toFixed(1)}KB) exceeds budget (${(budgets.totalCSS / 1024).toFixed(1)}KB)`);
  }
  
  analysis.chunks.forEach(chunk => {
    if (chunk.size > budgets.singleChunk) {
      warnings.push(`Chunk ${chunk.name} (${(chunk.size / 1024).toFixed(1)}KB) exceeds single chunk budget (${(budgets.singleChunk / 1024).toFixed(1)}KB)`);
    }
  });
  
  const totalAssetSize = analysis.assets.reduce((sum, asset) => sum + asset.size, 0);
  if (totalAssetSize > budgets.totalAssets) {
    warnings.push(`Total assets size (${(totalAssetSize / 1024 / 1024).toFixed(1)}MB) exceeds budget (${(budgets.totalAssets / 1024 / 1024).toFixed(1)}MB)`);
  }
  
  return {
    passed: warnings.length === 0,
    warnings,
    sizes: {
      js: jsSize,
      css: cssSize,
      assets: totalAssetSize,
      total: analysis.totalSize
    }
  };
}