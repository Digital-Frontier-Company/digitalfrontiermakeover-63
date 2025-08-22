import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, DollarSign, Target, Download, RefreshCw } from 'lucide-react';

interface KPIMetrics {
  revenue: number;
  customers: number;
  conversionRate: number;
  cac: number;
  ltv: number;
  roi: number;
}

interface SimulatorSettings {
  companySize: number; // 1-5 (startup to enterprise)
  industry: number; // 1-5 (different industries)
  investment: number; // 1-5 (investment level)
  timeline: number; // 1-4 (3, 6, 12, 24 months)
}

const industryLabels = ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Manufacturing'];
const companySizeLabels = ['Startup', 'Small', 'Medium', 'Large', 'Enterprise'];
const investmentLabels = ['Basic', 'Standard', 'Professional', 'Premium', 'Enterprise'];
const timelineLabels = ['3 Months', '6 Months', '12 Months', '24 Months'];

export function KPISimulator() {
  const [settings, setSettings] = useState<SimulatorSettings>({
    companySize: 3,
    industry: 1,
    investment: 3,
    timeline: 2
  });

  const [currentMetrics, setCurrentMetrics] = useState<KPIMetrics>({
    revenue: 0,
    customers: 0,
    conversionRate: 0,
    cac: 0,
    ltv: 0,
    roi: 0
  });

  const [targetMetrics, setTargetMetrics] = useState<KPIMetrics>({
    revenue: 0,
    customers: 0,
    conversionRate: 0,
    cac: 0,
    ltv: 0,
    roi: 0
  });

  const calculateMetrics = (settings: SimulatorSettings): KPIMetrics => {
    const baseMultipliers = {
      companySize: [0.5, 1, 2, 4, 8],
      industry: [1.2, 0.8, 1.1, 1.3, 0.9],
      investment: [0.6, 0.8, 1, 1.3, 1.6],
      timeline: [0.4, 0.7, 1, 1.8]
    };

    const multiplier = 
      baseMultipliers.companySize[settings.companySize - 1] *
      baseMultipliers.industry[settings.industry - 1] *
      baseMultipliers.investment[settings.investment - 1] *
      baseMultipliers.timeline[settings.timeline - 1];

    return {
      revenue: Math.round(50000 * multiplier),
      customers: Math.round(500 * multiplier),
      conversionRate: Math.min(95, Math.round(5 + (settings.investment * 3) + (settings.timeline * 2))),
      cac: Math.max(50, Math.round(200 / (settings.investment * 0.5 + 0.5))),
      ltv: Math.round(2000 * multiplier * 0.8),
      roi: Math.min(500, Math.round(150 + (settings.investment * 30) + (settings.timeline * 25)))
    };
  };

  useEffect(() => {
    const newTargetMetrics = calculateMetrics(settings);
    setTargetMetrics(newTargetMetrics);

    // Animate metrics
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCurrentMetrics(prev => ({
        revenue: Math.round(prev.revenue + (newTargetMetrics.revenue - prev.revenue) * easeOutQuart * 0.1),
        customers: Math.round(prev.customers + (newTargetMetrics.customers - prev.customers) * easeOutQuart * 0.1),
        conversionRate: Math.round((prev.conversionRate + (newTargetMetrics.conversionRate - prev.conversionRate) * easeOutQuart * 0.1) * 10) / 10,
        cac: Math.round(prev.cac + (newTargetMetrics.cac - prev.cac) * easeOutQuart * 0.1),
        ltv: Math.round(prev.ltv + (newTargetMetrics.ltv - prev.ltv) * easeOutQuart * 0.1),
        roi: Math.round(prev.roi + (newTargetMetrics.roi - prev.roi) * easeOutQuart * 0.1)
      }));

      if (step >= steps) {
        clearInterval(timer);
        setCurrentMetrics(newTargetMetrics);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [settings]);

  const handleSettingChange = (key: keyof SimulatorSettings, value: number[]) => {
    setSettings(prev => ({ ...prev, [key]: value[0] }));
  };

  const resetSettings = () => {
    setSettings({
      companySize: 3,
      industry: 1,
      investment: 3,
      timeline: 2
    });
  };

  const metricCards = [
    {
      title: 'Monthly Revenue',
      value: `$${currentMetrics.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-primary',
      growth: '+45%'
    },
    {
      title: 'New Customers',
      value: currentMetrics.customers.toLocaleString(),
      icon: Users,
      color: 'text-secondary',
      growth: '+62%'
    },
    {
      title: 'Conversion Rate',
      value: `${currentMetrics.conversionRate}%`,
      icon: Target,
      color: 'text-accent',
      growth: '+38%'
    },
    {
      title: 'Customer CAC',
      value: `$${currentMetrics.cac}`,
      icon: TrendingUp,
      color: 'text-primary',
      growth: '-23%'
    },
    {
      title: 'Customer LTV',
      value: `$${currentMetrics.ltv.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-secondary',
      growth: '+87%'
    },
    {
      title: 'Marketing ROI',
      value: `${currentMetrics.roi}%`,
      icon: TrendingUp,
      color: 'text-accent',
      growth: '+156%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <Card className="p-6">
        <CardHeader className="pb-6">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Simulation Parameters</CardTitle>
              <CardDescription>
                Adjust the settings below to see projected KPIs for your GTM strategy
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetSettings}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Company Size</label>
                <Badge variant="secondary">{companySizeLabels[settings.companySize - 1]}</Badge>
              </div>
              <Slider
                value={[settings.companySize]}
                onValueChange={(value) => handleSettingChange('companySize', value)}
                min={1}
                max={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Startup</span>
                <span>Enterprise</span>
              </div>
            </div>

            {/* Industry */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Industry</label>
                <Badge variant="secondary">{industryLabels[settings.industry - 1]}</Badge>
              </div>
              <Slider
                value={[settings.industry]}
                onValueChange={(value) => handleSettingChange('industry', value)}
                min={1}
                max={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Tech</span>
                <span>Manufacturing</span>
              </div>
            </div>

            {/* Investment Level */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Investment Level</label>
                <Badge variant="secondary">{investmentLabels[settings.investment - 1]}</Badge>
              </div>
              <Slider
                value={[settings.investment]}
                onValueChange={(value) => handleSettingChange('investment', value)}
                min={1}
                max={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Basic</span>
                <span>Enterprise</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Timeline</label>
                <Badge variant="secondary">{timelineLabels[settings.timeline - 1]}</Badge>
              </div>
              <Slider
                value={[settings.timeline]}
                onValueChange={(value) => handleSettingChange('timeline', value)}
                min={1}
                max={4}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>3 Months</span>
                <span>24 Months</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Dashboard */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricCards.map((metric, index) => (
          <Card key={index} className="p-6 hover-scale transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    <span className="text-xs text-primary font-medium">{metric.growth}</span>
                    <span className="text-xs text-muted-foreground">vs baseline</span>
                  </div>
                </div>
              </div>
              <div className={`p-2 rounded-lg bg-background/50 ${metric.color}`}>
                <metric.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Progress Comparison */}
      <Card className="p-6">
        <CardHeader className="pb-6">
          <CardTitle>Performance Comparison</CardTitle>
          <CardDescription>Traditional vs AI-Enhanced GTM Strategy Results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            { label: 'Time to Market', traditional: 45, enhanced: 78, unit: '%' },
            { label: 'Customer Acquisition', traditional: 35, enhanced: 68, unit: '%' },
            { label: 'Conversion Rate', traditional: 28, enhanced: 72, unit: '%' },
            { label: 'Marketing ROI', traditional: 42, enhanced: 85, unit: '%' }
          ].map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">Traditional: {item.traditional}{item.unit}</span>
                  <span className="text-primary font-medium">AI-Enhanced: {item.enhanced}{item.unit}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Progress value={item.traditional} className="h-2 bg-muted" />
                <Progress value={item.enhanced} className="h-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}