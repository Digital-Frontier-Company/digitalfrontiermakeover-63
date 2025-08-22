
/**
 * HubSpot integration utility
 * This file contains functions to interact with HubSpot CRM
 */

// Send form data to HubSpot
export const submitToHubSpot = async (formData: {
  firstName?: string;
  lastName?: string;
  email: string;
  [key: string]: any;
}) => {
  // Validate required fields
  if (!formData.email) {
    throw new Error('Email is required');
  }

  // Use your specific HubSpot portal ID
  const portalId = localStorage.getItem('hubspot_portal_id') || '48401342';
  const formId = localStorage.getItem('hubspot_form_id') || 'YOUR_FORM_ID'; // You'll need to replace this with your actual form ID

  // Format data for HubSpot
  const fields = Object.entries(formData).map(([name, value]) => ({
    name,
    value
  }));

  try {
    const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit to HubSpot');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to HubSpot:', error);
    throw error;
  }
};

// Add HubSpot tracking script to the page
export const initHubSpotTracking = (hubspotId: string) => {
  if (!hubspotId) return;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'hs-script-loader';
  script.async = true;
  script.defer = true;
  script.src = `//js.hs-scripts.com/${hubspotId}.js`;
  document.body.appendChild(script);

  return () => {
    // Cleanup function to remove the script if needed
    const existingScript = document.getElementById('hs-script-loader');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }
  };
};
