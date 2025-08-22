import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function OnboardingCarousel() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Implementation Process</CardTitle>
        <CardDescription>Step-by-step onboarding and implementation guide</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Onboarding Carousel Component - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}