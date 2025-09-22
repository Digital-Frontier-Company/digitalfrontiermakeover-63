import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Activity, Eye, EyeOff } from 'lucide-react';

interface SecurityEvent {
  id: string;
  event: string;
  details: any;
  timestamp: number;
  severity: 'info' | 'warning' | 'error';
}

const SecurityDashboard = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    blockedAttempts: 0,
    validationFailures: 0,
    rateLimitHits: 0
  });

  useEffect(() => {
    // Listen for security events from our security utilities
    const handleSecurityEvent = (event: CustomEvent) => {
      const { eventType, details } = event.detail;
      
      const newEvent: SecurityEvent = {
        id: Date.now().toString(),
        event: eventType,
        details,
        timestamp: Date.now(),
        severity: getSeverity(eventType)
      };

      setEvents(prev => [newEvent, ...prev.slice(0, 49)]); // Keep last 50 events
      updateStats(eventType);
    };

    // Add event listener
    window.addEventListener('securityEvent', handleSecurityEvent as EventListener);

    return () => {
      window.removeEventListener('securityEvent', handleSecurityEvent as EventListener);
    };
  }, []);

  const getSeverity = (eventType: string): 'info' | 'warning' | 'error' => {
    if (eventType.includes('ERROR') || eventType.includes('BLOCKED')) return 'error';
    if (eventType.includes('VALIDATION_FAILED') || eventType.includes('RATE_LIMIT')) return 'warning';
    return 'info';
  };

  const updateStats = (eventType: string) => {
    setStats(prev => ({
      ...prev,
      totalSubmissions: eventType === 'FORM_SUBMITTED_SUCCESSFULLY' ? prev.totalSubmissions + 1 : prev.totalSubmissions,
      blockedAttempts: eventType.includes('BLOCKED') ? prev.blockedAttempts + 1 : prev.blockedAttempts,
      validationFailures: eventType === 'VALIDATION_FAILED' ? prev.validationFailures + 1 : prev.validationFailures,
      rateLimitHits: eventType === 'RATE_LIMIT_EXCEEDED' ? prev.rateLimitHits + 1 : prev.rateLimitHits
    }));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-green-500/20 text-green-300 border-green-500/30';
    }
  };

  const clearEvents = () => {
    setEvents([]);
    setStats({
      totalSubmissions: 0,
      blockedAttempts: 0,
      validationFailures: 0,
      rateLimitHits: 0
    });
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="bg-dark-card border-electric-azure/30 text-electric-azure hover:bg-electric-azure/10"
        >
          <Shield className="w-4 h-4 mr-2" />
          Security Monitor
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-h-96 overflow-hidden">
      <Card className="bg-dark-card border-electric-azure/20 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-electric-azure flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security Monitor
            </CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="text-electric-azure/60 hover:text-electric-azure"
            >
              <EyeOff className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                <span className="text-green-300">Submissions</span>
              </div>
              <div className="text-lg font-bold text-green-300">{stats.totalSubmissions}</div>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 mr-1 text-red-400" />
                <span className="text-red-300">Blocked</span>
              </div>
              <div className="text-lg font-bold text-red-300">{stats.blockedAttempts}</div>
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
              <div className="flex items-center">
                <Activity className="w-3 h-3 mr-1 text-yellow-400" />
                <span className="text-yellow-300">Rate Limits</span>
              </div>
              <div className="text-lg font-bold text-yellow-300">{stats.rateLimitHits}</div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2">
              <div className="flex items-center">
                <Eye className="w-3 h-3 mr-1 text-blue-400" />
                <span className="text-blue-300">Validations</span>
              </div>
              <div className="text-lg font-bold text-blue-300">{stats.validationFailures}</div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium text-electric-azure/80">Recent Events</h4>
              <Button onClick={clearEvents} variant="ghost" size="sm" className="text-xs">
                Clear
              </Button>
            </div>
            
            {events.length === 0 ? (
              <p className="text-electric-azure/60 text-xs text-center py-4">No security events yet</p>
            ) : (
              events.map((event) => (
                <div key={event.id} className="bg-electric-azure/5 border border-electric-azure/10 rounded p-2">
                  <div className="flex justify-between items-start">
                    <Badge className={`text-xs ${getSeverityColor(event.severity)}`}>
                      {event.event}
                    </Badge>
                    <span className="text-xs text-electric-azure/60">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  {event.details && (
                    <div className="text-xs text-electric-azure/70 mt-1">
                      {JSON.stringify(event.details, null, 2).slice(0, 100)}...
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;