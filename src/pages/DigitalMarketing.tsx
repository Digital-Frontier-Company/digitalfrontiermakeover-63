import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const DigitalMarketing = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Digital Marketing Services | Complete Website Marketing Analysis Tool"
      subtitle="Comprehensive Digital Marketing Strategy & Performance Optimization"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-white mb-4">Digital Marketing Services</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Complete digital marketing solutions to grow your business online with proven strategies and measurable results.
        </p>
      </div>
    </PageLayout>
  );
};

export default DigitalMarketing;