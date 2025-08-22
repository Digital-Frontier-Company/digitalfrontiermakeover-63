import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function LaunchCalendar() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Launch Calendar</CardTitle>
        <CardDescription>Drag-and-drop launch planning calendar</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Launch Calendar Component - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}