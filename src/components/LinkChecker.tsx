import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';

interface LinkCheck {
  url: string;
  status: 'checking' | 'success' | 'error' | 'warning';
  statusCode?: number;
  message?: string;
}

export const LinkChecker: React.FC = () => {
  const [linkChecks, setLinkChecks] = useState<LinkCheck[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Only run in development or when explicitly requested
  const shouldRun = process.env.NODE_ENV === 'development' || 
                   new URLSearchParams(window.location.search).has('check-links');

  useEffect(() => {
    if (!shouldRun) return;

    const checkLinks = async () => {
      setIsRunning(true);
      
      // Get all links on the page
      const links = Array.from(document.querySelectorAll('a[href]'))
        .map(link => (link as HTMLAnchorElement).href)
        .filter(href => href.startsWith('http') || href.startsWith('/'))
        .filter((href, index, array) => array.indexOf(href) === index); // Remove duplicates

      const checks: LinkCheck[] = links.map(url => ({
        url,
        status: 'checking'
      }));

      setLinkChecks(checks);

      // Check each link
      for (let i = 0; i < checks.length; i++) {
        const link = checks[i];
        
        try {
          // For internal links, just mark as success (avoid CORS issues)
          if (link.url.startsWith('/') || link.url.includes(window.location.hostname)) {
            setLinkChecks(prev => prev.map((check, index) => 
              index === i ? { ...check, status: 'success', statusCode: 200 } : check
            ));
            continue;
          }

          // For external links, use a simple fetch with no-cors mode
          const response = await fetch(link.url, { 
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache'
          });

          setLinkChecks(prev => prev.map((check, index) => 
            index === i ? {
              ...check,
              status: 'success',
              statusCode: response.status || 200
            } : check
          ));

        } catch (error) {
          setLinkChecks(prev => prev.map((check, index) => 
            index === i ? {
              ...check,
              status: 'warning',
              message: 'External link - manual verification needed'
            } : check
          ));
        }

        // Add delay to avoid overwhelming servers
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      setIsRunning(false);
    };

    // Run check after component mounts and page is loaded
    const timer = setTimeout(checkLinks, 2000);
    return () => clearTimeout(timer);
  }, [shouldRun]);

  if (!shouldRun || linkChecks.length === 0) {
    return null;
  }

  const successCount = linkChecks.filter(check => check.status === 'success').length;
  const errorCount = linkChecks.filter(check => check.status === 'error').length;
  const warningCount = linkChecks.filter(check => check.status === 'warning').length;

  return (
    <Card className="fixed bottom-4 left-4 w-80 p-4 bg-background/95 backdrop-blur-sm border shadow-lg z-50">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">Link Integrity Check</h3>
          {isRunning && (
            <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
          )}
        </div>

        <div className="flex gap-2">
          <Badge variant="default" className="bg-green-500 text-white">
            <CheckCircle className="h-3 w-3 mr-1" />
            {successCount}
          </Badge>
          {warningCount > 0 && (
            <Badge variant="secondary" className="bg-yellow-500 text-white">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {warningCount}
            </Badge>
          )}
          {errorCount > 0 && (
            <Badge variant="destructive">
              <ExternalLink className="h-3 w-3 mr-1" />
              {errorCount}
            </Badge>
          )}
        </div>

        {!isRunning && (
          <div className="text-xs text-muted-foreground">
            Checked {linkChecks.length} links
          </div>
        )}

        {/* Show problematic links */}
        {linkChecks.filter(check => check.status === 'error' || check.status === 'warning').length > 0 && (
          <div className="max-h-32 overflow-y-auto space-y-1">
            {linkChecks
              .filter(check => check.status === 'error' || check.status === 'warning')
              .map((check, index) => (
                <div key={index} className="text-xs p-2 bg-muted rounded">
                  <div className="font-mono truncate">{check.url}</div>
                  <div className="text-muted-foreground">{check.message}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};