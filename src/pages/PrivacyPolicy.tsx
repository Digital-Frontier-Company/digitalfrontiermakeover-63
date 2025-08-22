import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const PrivacyPolicy = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Privacy Policy | Digital Frontier Company"
      subtitle="How We Protect Your Data"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2025-01-01"
      modifiedDate="2025-08-18"
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: August 18, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Service preferences and requirements</li>
              <li>Payment information (processed securely)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about services</li>
              <li>Process payments</li>
              <li>Send marketing communications (with consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist in providing our services, subject to confidentiality agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. GDPR Compliance</h2>
            <p>
              For EU residents, we comply with the General Data Protection Regulation (GDPR). We have a lawful basis for processing your data and respect your rights under GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;