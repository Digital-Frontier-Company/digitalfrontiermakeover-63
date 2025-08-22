
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const HubSpotSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    hubspotId: localStorage.getItem('hubspot_id') || '',
    portalId: localStorage.getItem('hubspot_portal_id') || '',
    formId: localStorage.getItem('hubspot_form_id') || '',
    enableTracking: localStorage.getItem('hubspot_enable_tracking') === 'true'
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSettings({
      ...settings,
      [id]: value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setSettings({
      ...settings,
      enableTracking: checked
    });
  };

  const saveSettings = () => {
    setIsSaving(true);
    
    // Save settings to localStorage
    localStorage.setItem('hubspot_id', settings.hubspotId);
    localStorage.setItem('hubspot_portal_id', settings.portalId);
    localStorage.setItem('hubspot_form_id', settings.formId);
    localStorage.setItem('hubspot_enable_tracking', settings.enableTracking.toString());
    
    // In a real app, you might want to save these to your backend
    
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Settings Saved",
        description: "Your HubSpot integration settings have been saved."
      });
      
      // Reload the page to apply the new HubSpot tracking if enabled
      if (settings.enableTracking && settings.hubspotId) {
        window.location.reload();
      }
    }, 1000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-slate-800/40 border-slate-700">
      <CardHeader>
        <CardTitle>HubSpot CRM Integration</CardTitle>
        <CardDescription>
          Connect your website to HubSpot CRM to track visitors and capture leads
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="hubspotId">HubSpot Tracking ID</Label>
          <Input
            id="hubspotId"
            placeholder="e.g., 1234567"
            value={settings.hubspotId}
            onChange={handleInputChange}
          />
          <p className="text-sm text-slate-400">
            Found in HubSpot under Settings &gt; Tracking Code
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="portalId">HubSpot Portal ID</Label>
          <Input
            id="portalId"
            placeholder="e.g., 1234567"
            value={settings.portalId}
            onChange={handleInputChange}
          />
          <p className="text-sm text-slate-400">
            Your HubSpot account's portal ID
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="formId">Form ID</Label>
          <Input
            id="formId"
            placeholder="e.g., abcde123-abcd-1234-5678-abcdef123456"
            value={settings.formId}
            onChange={handleInputChange}
          />
          <p className="text-sm text-slate-400">
            Found in HubSpot under Marketing &gt; Lead Capture &gt; Forms
          </p>
        </div>
        
        <div className="flex items-center space-x-4 pt-2">
          <Switch
            id="enableTracking"
            checked={settings.enableTracking}
            onCheckedChange={handleSwitchChange}
          />
          <Label htmlFor="enableTracking">Enable HubSpot visitor tracking</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={saveSettings} 
          disabled={isSaving}
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
        >
          {isSaving ? "Saving..." : "Save Settings"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HubSpotSettings;
