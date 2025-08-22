
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation } from "react-router-dom";
import { submitToHubSpot, initHubSpotTracking } from "@/utils/hubspot";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subscribeToMarketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize HubSpot tracking when component mounts
  useEffect(() => {
    // Replace 'YOUR_HUBSPOT_ID' with your actual HubSpot ID
    const cleanup = initHubSpotTracking('YOUR_HUBSPOT_ID');
    return cleanup;
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Error",
        description: "Please provide your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://public.lindy.ai/api/v1/webhooks/lindy/26e30680-521e-45e0-a00b-0ed2ac52aeef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: `Newsletter subscription. Marketing consent: ${formData.subscribeToMarketing ? 'Yes' : 'No'}`,
          form_type: 'Newsletter Subscription'
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subscribeToMarketing: false
        });
      } else {
        throw new Error('Failed to submit newsletter subscription');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your subscription. Please try again.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Crypto and Macro Markets Newsletter | Digital Frontier</title>
        <meta name="description" content="Subscribe to our Crypto and Macro Markets Newsletter for the latest insights and analysis." />
      </Helmet>
      <PageLayout
        title="Crypto and Macro Markets Newsletter"
        subtitle="Stay informed with our latest insights and analysis"
        currentPath={location.pathname}
      >
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Expert Analysis Delivered to Your Inbox</h2>
            <p className="text-lg text-slate-300">
              Stay ahead of market trends with our in-depth analysis and actionable insights.
            </p>
          </div>

          {/* YouTube Video Section */}
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe 
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/jzYH-whiE4Y" 
                title="Crypto and Macro Markets Newsletter"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Get the latest insights on crypto and macro markets delivered directly to your inbox.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="subscribeToMarketing"
                    checked={formData.subscribeToMarketing}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  <span className="text-sm text-slate-300">I agree to receive marketing communications from Digital Frontier</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-500 transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">What You'll Receive:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weekly market analysis and predictions</li>
              <li>Exclusive insights from our expert team</li>
              <li>Deep dives into emerging crypto trends</li>
              <li>Macro economic impact reports</li>
              <li>Early access to our premium research</li>
            </ul>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Newsletter;
