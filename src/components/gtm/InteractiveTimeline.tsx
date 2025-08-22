import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, ArrowRight, Target, Users, Rocket, TrendingUp, BarChart } from 'lucide-react';

interface TimelinePhase {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: React.ComponentType<any>;
  color: string;
  tasks: string[];
  deliverables: string[];
  kpis: string[];
  completed: boolean;
}

const phases: TimelinePhase[] = [
  {
    id: 1,
    title: "Market Research & Analysis",
    description: "Deep dive into market dynamics, competitive landscape, and customer insights using AI-powered analytics.",
    duration: "2-3 weeks",
    icon: Target,
    color: "bg-primary",
    tasks: [
      "AI-powered market sizing and segmentation",
      "Competitive intelligence gathering",
      "Customer persona development",
      "Value proposition validation"
    ],
    deliverables: [
      "Market Research Report",
      "Competitive Analysis Matrix",
      "Detailed Customer Personas",
      "Value Proposition Canvas"
    ],
    kpis: [
      "Market size accuracy: 95%+",
      "Competitive gaps identified: 10+",
      "Customer interviews: 50+",
      "Persona validation score: 85%+"
    ],
    completed: false
  },
  {
    id: 2,
    title: "Strategic Positioning & Messaging",
    description: "Craft compelling brand positioning and messaging framework that resonates with target audiences.",
    duration: "2-3 weeks",
    icon: Users,
    color: "bg-secondary",
    tasks: [
      "Brand positioning development",
      "Core messaging framework creation",
      "Content strategy development",
      "Channel-specific message adaptation"
    ],
    deliverables: [
      "Positioning Statement",
      "Messaging Architecture",
      "Content Strategy Guide",
      "Brand Guidelines"
    ],
    kpis: [
      "Message resonance score: 80%+",
      "Brand recall improvement: 60%+",
      "Content engagement rate: 25%+",
      "Message consistency: 95%+"
    ],
    completed: false
  },
  {
    id: 3,
    title: "Product Launch Strategy",
    description: "Design comprehensive launch plan with timing, channels, and resource allocation for maximum impact.",
    duration: "3-4 weeks",
    icon: Rocket,
    color: "bg-accent",
    tasks: [
      "Launch timeline development",
      "Channel strategy planning",
      "Resource allocation optimization",
      "Risk mitigation planning"
    ],
    deliverables: [
      "Launch Timeline & Milestones",
      "Channel Strategy Plan",
      "Resource Allocation Matrix",
      "Risk Management Plan"
    ],
    kpis: [
      "Launch readiness score: 90%+",
      "Channel optimization: 85%+",
      "Resource efficiency: 80%+",
      "Risk mitigation: 95%+"
    ],
    completed: false
  },
  {
    id: 4,
    title: "Customer Acquisition & Onboarding",
    description: "Implement customer acquisition strategies and seamless onboarding processes for optimal conversion.",
    duration: "4-6 weeks",
    icon: TrendingUp,
    color: "bg-primary",
    tasks: [
      "Acquisition channel optimization",
      "Lead generation system setup",
      "Onboarding flow design",
      "Customer success program"
    ],
    deliverables: [
      "Acquisition Strategy Plan",
      "Lead Generation System",
      "Onboarding Process Map",
      "Customer Success Playbook"
    ],
    kpis: [
      "Customer acquisition cost: <$200",
      "Conversion rate: 15%+",
      "Onboarding completion: 85%+",
      "Customer satisfaction: 90%+"
    ],
    completed: false
  },
  {
    id: 5,
    title: "Scale & Optimization",
    description: "Continuously optimize and scale successful strategies while expanding into new markets and segments.",
    duration: "Ongoing",
    icon: BarChart,
    color: "bg-secondary",
    tasks: [
      "Performance monitoring & analytics",
      "A/B testing implementation",
      "Market expansion planning",
      "Continuous optimization"
    ],
    deliverables: [
      "Analytics Dashboard",
      "Optimization Reports",
      "Expansion Strategy",
      "Performance Reviews"
    ],
    kpis: [
      "Revenue growth: 40%+ MoM",
      "Market share increase: 25%+",
      "Customer lifetime value: 3x+",
      "Expansion ROI: 300%+"
    ],
    completed: false
  }
];

export function InteractiveTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);

  const handlePhaseClick = (phaseId: number) => {
    setSelectedPhase(selectedPhase === phaseId ? null : phaseId);
  };

  const togglePhaseCompletion = (phaseId: number) => {
    setCompletedPhases(prev => 
      prev.includes(phaseId) 
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  const progressPercentage = (completedPhases.length / phases.length) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Overview */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Implementation Progress</h3>
              <p className="text-sm text-muted-foreground">
                {completedPhases.length} of {phases.length} phases completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </Card>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const isSelected = selectedPhase === phase.id;
            const isCompleted = completedPhases.includes(phase.id);
            const IconComponent = phase.icon;

            return (
              <div key={phase.id} className="relative flex items-start gap-6">
                {/* Timeline Node */}
                <div 
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background cursor-pointer transition-all duration-300 ${
                    isCompleted ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  } hover:scale-110`}
                  onClick={() => togglePhaseCompletion(phase.id)}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <IconComponent className="h-6 w-6" />
                  )}
                </div>

                {/* Phase Card */}
                <Card 
                  className={`flex-1 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => handlePhaseClick(phase.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                        <CardDescription className="text-base">
                          {phase.description}
                        </CardDescription>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="opacity-60 hover:opacity-100"
                      >
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                          isSelected ? 'rotate-90' : ''
                        }`} />
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Expanded Content */}
                  {isSelected && (
                    <CardContent className="space-y-6 pt-0 animate-fade-in">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Tasks */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Key Tasks</h4>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Circle className="h-3 w-3 mt-1 flex-shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Deliverables</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 mt-1 flex-shrink-0 text-primary" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* KPIs */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Success Metrics</h4>
                          <ul className="space-y-2">
                            {phase.kpis.map((kpi, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <TrendingUp className="h-3 w-3 mt-1 flex-shrink-0 text-accent" />
                                {kpi}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Download Template
                        </Button>
                        <Button size="sm" variant="outline">
                          Schedule Consultation
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center pt-8">
        <Button onClick={() => setCompletedPhases([1, 2, 3, 4, 5])}>
          Mark All Complete
        </Button>
        <Button variant="outline" onClick={() => setCompletedPhases([])}>
          Reset Progress
        </Button>
        <Button variant="outline">
          Export Timeline
        </Button>
        <Button variant="outline">
          Get Custom Quote
        </Button>
      </div>
    </div>
  );
}