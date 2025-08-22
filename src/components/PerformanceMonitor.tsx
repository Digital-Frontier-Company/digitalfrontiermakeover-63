import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface CoreWebVitals {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  inp?: number;
  ttfb?: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [vitals, setVitals] = useState<CoreWebVitals>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only load in development or if ?debug=performance is in URL
    const showDebug = process.env.NODE_ENV === 'development' || 
                     new URLSearchParams(window.location.search).has('debug');
    
    if (!showDebug) return;

    setIsVisible(true);

    const measureVitals = () => {
      // First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setVitals(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            setVitals(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });

          // First Input Delay (deprecated in favor of INP)
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              setVitals(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            }
          });
          fidObserver.observe({ type: 'first-input', buffered: true });

        } catch (error) {
          console.warn('Performance monitoring not fully supported:', error);
        }
      }

      // Time to First Byte
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        setVitals(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
      }
    };

    // Initial measurement
    if (document.readyState === 'complete') {
      measureVitals();
    } else {
      window.addEventListener('load', measureVitals);
    }

    // Continuous monitoring
    const interval = setInterval(measureVitals, 2000);

    return () => {
      window.removeEventListener('load', measureVitals);
      clearInterval(interval);
    };
  }, []);

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'bg-green-500';
    if (value <= thresholds[1]) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const formatTime = (time: number) => {
    return time < 1000 ? `${Math.round(time)}ms` : `${(time / 1000).toFixed(2)}s`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-background/95 backdrop-blur-sm border rounded-lg p-3 text-xs space-y-2 shadow-lg z-50 max-w-xs">
      <div className="font-semibold text-foreground">Core Web Vitals</div>
      
      {vitals.fcp && (
        <div className="flex items-center justify-between">
          <span>FCP:</span>
          <Badge className={`${getScoreColor(vitals.fcp, [1800, 3000])} text-white`}>
            {formatTime(vitals.fcp)}
          </Badge>
        </div>
      )}
      
      {vitals.lcp && (
        <div className="flex items-center justify-between">
          <span>LCP:</span>
          <Badge className={`${getScoreColor(vitals.lcp, [2500, 4000])} text-white`}>
            {formatTime(vitals.lcp)}
          </Badge>
        </div>
      )}
      
      {vitals.cls !== undefined && (
        <div className="flex items-center justify-between">
          <span>CLS:</span>
          <Badge className={`${getScoreColor(vitals.cls, [0.1, 0.25])} text-white`}>
            {vitals.cls.toFixed(3)}
          </Badge>
        </div>
      )}
      
      {vitals.fid && (
        <div className="flex items-center justify-between">
          <span>FID:</span>
          <Badge className={`${getScoreColor(vitals.fid, [100, 300])} text-white`}>
            {formatTime(vitals.fid)}
          </Badge>
        </div>
      )}
      
      {vitals.ttfb && (
        <div className="flex items-center justify-between">
          <span>TTFB:</span>
          <Badge className={`${getScoreColor(vitals.ttfb, [800, 1800])} text-white`}>
            {formatTime(vitals.ttfb)}
          </Badge>
        </div>
      )}
    </div>
  );
};