
import React, { useEffect } from "react";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "./Footer";
import ConversationManager from "../conversation/ConversationManager";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  console.log('MainLayout rendering with children:', !!children);
  useEffect(() => {
    // Load HubSpot tracking script with your specific portal ID
    const hubspotId = '48401342';
    
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src*="${hubspotId}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'hs-script-loader';
      script.async = true;
      script.defer = true;
      script.src = `//js.hs-scripts.com/${hubspotId}.js`;
      document.head.appendChild(script);
    }

    // Load Ahrefs Site Audit deployment script
    // Replace 'YOUR_AHREFS_SCRIPT_URL' with the actual URL provided by Ahrefs
    const ahrefsScriptUrl = 'YOUR_AHREFS_SCRIPT_URL'; // Update this with your Ahrefs snippet URL
    
    if (ahrefsScriptUrl !== 'YOUR_AHREFS_SCRIPT_URL') {
      const existingAhrefsScript = document.querySelector(`script[src*="ahrefs"]`);
      if (!existingAhrefsScript) {
        const ahrefsScript = document.createElement('script');
        ahrefsScript.type = 'text/javascript';
        ahrefsScript.id = 'ahrefs-site-audit';
        ahrefsScript.async = true;
        ahrefsScript.src = ahrefsScriptUrl;
        document.head.appendChild(ahrefsScript);
      }
    }
    
    return () => {
      // Cleanup scripts on unmount
      const hubspotScript = document.querySelector(`script[src*="${hubspotId}"]`);
      if (hubspotScript) {
        hubspotScript.remove();
      }
      
      const ahrefsScript = document.querySelector(`script[src*="ahrefs"]`);
      if (ahrefsScript) {
        ahrefsScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <MainNavigation />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
      
      {/* Conversational Interfaces */}
      <ConversationManager />
    </div>
  );
};

export default MainLayout;
