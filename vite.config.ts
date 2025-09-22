import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { marketingSSG } from "./vite-plugin-marketing-ssg";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    target: 'esnext',
    minify: mode === 'production' ? 'terser' : false,
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
          const name = chunkInfo.name || 'chunk';
          return `js/${name}-[hash].js`;
        }
      },
    },
    ...(mode === 'production' && {
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
    })
  },
  esbuild: {
    ...(mode === 'production' && {
      drop: ['console', 'debugger'],
      legalComments: 'none'
    })
  },
  preview: {
    port: 8080,
    host: true,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
    ...(mode === 'production' ? [marketingSSG({
      generateSitemap: true,
    })] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp', '**/*.avif'],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'framer-motion',
      'react-helmet-async'
    ]
  }
}));
