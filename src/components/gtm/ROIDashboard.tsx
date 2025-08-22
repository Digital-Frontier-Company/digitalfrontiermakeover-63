import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ROIDashboard() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>ROI Dashboard</CardTitle>
        <CardDescription>AI-Enhanced vs Traditional Marketing ROI Comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-muted-foreground">ROI Dashboard Component - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}