import React from "react";
import { Helmet } from "react-helmet-async";
import webCreativePricing from "@/assets/web-creative-pricing.jpg";

const WebCreative = () => {
  return (
    <>
      <Helmet>
        <title>Web-Creative | Digital Frontier Company</title>
        <meta name="description" content="Comprehensive web design and digital services pricing from Digital Frontier Company. Tailored solutions for your business needs." />
        <meta name="keywords" content="web design, digital services, pricing, Digital Frontier Company, web creative" />
        <link rel="canonical" href="/web-creative" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div 
          className="w-full max-w-[1280px] min-h-[720px] rounded-lg shadow-2xl p-8 flex flex-col justify-center items-center"
          style={{
            background: 'linear-gradient(135deg, #120640 70%, #86ed07 30%)',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" 
              style={{ color: '#07f07f' }}>
            Digital Frontier Company
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-center mb-8" 
              style={{ color: '#07e2fa' }}>
            Web Design & Digital Services Pricing
          </h2>
          
          <div className="mb-8">
            <img 
              src={webCreativePricing} 
              alt="Digital Frontier Company Web Design Services Pricing Tiers"
              className="max-w-full max-h-[400px] w-auto h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
          <p className="text-xl md:text-2xl max-w-4xl text-center leading-relaxed"
             style={{ color: '#07f07f' }}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </div>
    </>
  );
};

export default WebCreative;