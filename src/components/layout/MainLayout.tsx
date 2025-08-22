
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
    if (existingScript) return;
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${hubspotId}.js`;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.querySelector(`script[src*="${hubspotId}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
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
