import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingCalculator() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Investment Calculator</CardTitle>
        <CardDescription>Calculate GTM strategy investment requirements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Pricing Calculator Component - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}