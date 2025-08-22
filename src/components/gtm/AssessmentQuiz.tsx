import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AssessmentQuiz() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>GTM Readiness Assessment</CardTitle>
        <CardDescription>Interactive quiz to evaluate your go-to-market readiness</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Assessment Quiz Component - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}