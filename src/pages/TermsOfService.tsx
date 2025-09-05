import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const TermsOfService = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Terms of Service | Digital Frontier Company"
      subtitle="Terms and Conditions of Use"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2025-01-01"
      modifiedDate="2025-08-18"
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8">Terms of Service</h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: August 18, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Digital Frontier Company's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p>
              Digital Frontier Company provides AI-powered content marketing, SEO optimization, and digital marketing consulting services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Answer Engine Optimization (AEO)</li>
              <li>Generative Engine Optimization (GEO)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Content strategy and creation</li>
              <li>Digital marketing consulting</li>
              <li>AI implementation consulting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>Users agree to:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Provide accurate and complete information</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in any activity that disrupts our services</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Payment terms vary by service package. All fees are due according to the agreed schedule. Refunds are available according to our refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, trademarks, and other intellectual property on our website and in our services remain the property of Digital Frontier Company or our licensors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              Digital Frontier Company's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </section>
        </div>
        
        {/* Termly Terms of Service Embed */}
        <div 
          dangerouslySetInnerHTML={{
            __html: '<div name="termly-embed" data-id="7629c0aa-cb69-42e4-b58b-9d74375b9541"></div>'
          }}
        />
      </div>
    </PageLayout>
  );
};

export default TermsOfService;