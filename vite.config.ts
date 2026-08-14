import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";
import { marketingPrerender } from "./vite-plugin-marketing-prerender.ts";

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
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }
          if (id.includes("/react/") || id.includes("react-dom") || id.includes("/scheduler/")) {
            return "react";
          }
          if (id.includes("@supabase")) {
            return "supabase";
          }
          if (id.includes("@radix-ui") || id.includes("lucide-react")) {
            return "ui";
          }
          if (id.includes("framer-motion")) {
            return "motion";
          }
          if (id.includes("recharts")) {
            return "charts";
          }
          if (id.includes("/d3-") || id.includes("victory-vendor")) {
            return "chart-utils";
          }
          if (id.includes("react-router")) {
            return "router";
          }
          if (id.includes("@tanstack")) {
            return "query";
          }
          if (id.includes("react-hook-form") || id.includes("@hookform") || id.includes("/zod/")) {
            return "forms";
          }
          if (id.includes("react-icons")) {
            return "icons";
          }
          if (id.includes("date-fns") || id.includes("react-day-picker")) {
            return "calendar";
          }
          if (id.includes("embla-carousel")) {
            return "carousel";
          }
          return "vendor";
        },
        assetFileNames: (assetInfo) => {
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
        chunkFileNames: (chunkInfo) => {
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
        },
        format: {
          comments: false
        }
      }
    })
  },
  preview: {
    port: 8080,
    host: true,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
    ...(mode === 'production' ? [marketingPrerender()] : []),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
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
