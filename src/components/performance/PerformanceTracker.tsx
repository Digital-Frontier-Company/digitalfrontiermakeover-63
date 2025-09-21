import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number;
}

interface PerformanceTrackerProps {
  showDetails?: boolean;
  trackingEnabled?: boolean;
}

/**
 * Performance tracking component that monitors Core Web Vitals
 */
export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({
  showDetails = false,
  trackingEnabled = true
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!trackingEnabled || typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: Partial<PerformanceMetrics> = {
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.fetchStart
      };

      // First Contentful Paint
      const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        newMetrics.fcp = fcpEntry.startTime;
      }

      setMetrics(newMetrics);
      setIsLoading(false);
    };

    // Measure immediately if page is already loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Web Vitals observer for LCP, FID, CLS
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-input') {
            const fidValue = (entry as any).processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid: fidValue }));
          }
        });
      });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        window.removeEventListener('load', measurePerformance);
      };
    }
  }, [trackingEnabled]);

  const getScoreColor = (metric: string, value: number) => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      loadTime: { good: 3000, poor: 5000 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'text-muted-foreground';

    if (value <= threshold.good) return 'text-signal-lime';
    if (value <= threshold.poor) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreIcon = (metric: string, value: number) => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      loadTime: { good: 3000, poor: 5000 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return <Clock className="h-4 w-4" />;

    if (value <= threshold.good) return <CheckCircle className="h-4 w-4 text-signal-lime" />;
    if (value <= threshold.poor) return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  };

  const formatMetric = (metric: string, value: number) => {
    if (metric === 'cls') return value.toFixed(3);
    return `${Math.round(value)}ms`;
  };

  const calculateOverallScore = () => {
    const scores = {
      fcp: metrics.fcp ? (metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 75 : 25) : 0,
      lcp: metrics.lcp ? (metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 75 : 25) : 0,
      fid: metrics.fid ? (metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 75 : 25) : 0,
      cls: metrics.cls ? (metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 75 : 25) : 0,
      ttfb: metrics.ttfb ? (metrics.ttfb <= 800 ? 100 : metrics.ttfb <= 1800 ? 75 : 25) : 0,
    };

    const validScores = Object.values(scores).filter(score => score > 0);
    const average = validScores.reduce((sum, score) => sum + score, 0) / validScores.length;
    return Math.round(average);
  };

  if (!trackingEnabled) return null;

  if (!showDetails) {
    // Minimal performance indicator
    const overallScore = calculateOverallScore();
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-card/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg">
        <div className="flex items-center gap-2">
          <Zap className={`h-4 w-4 ${overallScore >= 80 ? 'text-signal-lime' : overallScore >= 60 ? 'text-amber-500' : 'text-red-500'}`} />
          <span className="text-sm font-medium">{overallScore}</span>
        </div>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-electric-azure" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <Clock className="h-8 w-8 mx-auto mb-2 animate-spin text-muted-foreground" />
            <p>Measuring performance...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Core Web Vitals */}
            {metrics.fcp && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">First Contentful Paint</p>
                  <p className={`text-lg font-bold ${getScoreColor('fcp', metrics.fcp)}`}>
                    {formatMetric('fcp', metrics.fcp)}
                  </p>
                </div>
                {getScoreIcon('fcp', metrics.fcp)}
              </div>
            )}

            {metrics.lcp && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Largest Contentful Paint</p>
                  <p className={`text-lg font-bold ${getScoreColor('lcp', metrics.lcp)}`}>
                    {formatMetric('lcp', metrics.lcp)}
                  </p>
                </div>
                {getScoreIcon('lcp', metrics.lcp)}
              </div>
            )}

            {metrics.fid && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">First Input Delay</p>
                  <p className={`text-lg font-bold ${getScoreColor('fid', metrics.fid)}`}>
                    {formatMetric('fid', metrics.fid)}
                  </p>
                </div>
                {getScoreIcon('fid', metrics.fid)}
              </div>
            )}

            {metrics.cls && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Cumulative Layout Shift</p>
                  <p className={`text-lg font-bold ${getScoreColor('cls', metrics.cls)}`}>
                    {formatMetric('cls', metrics.cls)}
                  </p>
                </div>
                {getScoreIcon('cls', metrics.cls)}
              </div>
            )}

            {metrics.ttfb && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Time to First Byte</p>
                  <p className={`text-lg font-bold ${getScoreColor('ttfb', metrics.ttfb)}`}>
                    {formatMetric('ttfb', metrics.ttfb)}
                  </p>
                </div>
                {getScoreIcon('ttfb', metrics.ttfb)}
              </div>
            )}

            {metrics.loadTime && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Load Time</p>
                  <p className={`text-lg font-bold ${getScoreColor('loadTime', metrics.loadTime)}`}>
                    {formatMetric('loadTime', metrics.loadTime)}
                  </p>
                </div>
                {getScoreIcon('loadTime', metrics.loadTime)}
              </div>
            )}
          </div>
        )}

        {/* Overall Score */}
        {!isLoading && (
          <div className="mt-6 p-4 bg-gradient-to-r from-electric-azure/10 to-ultraviolet/10 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Performance Score</p>
                <p className="text-3xl font-bold text-foreground">{calculateOverallScore()}/100</p>
              </div>
              <Zap className={`h-8 w-8 ${calculateOverallScore() >= 80 ? 'text-signal-lime' : calculateOverallScore() >= 60 ? 'text-amber-500' : 'text-red-500'}`} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PerformanceTracker;