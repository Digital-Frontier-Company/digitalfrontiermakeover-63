import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const RealEstateDemo: React.FC = () => {
  return (
    <MainLayout>
      
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real Estate Property Search Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the future of property search with our AI-powered solutions. 
              Get personalized property recommendations, market insights, and instant answers 
              to all your real estate questions.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 border-b border-border/50 p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  AI Property Search Solutions
                </h2>
                <p className="text-muted-foreground">
                  Our AI-powered tools help you find properties, analyze neighborhoods, understand market trends, and get personalized recommendations
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Coming Soon: Advanced AI Property Assistant
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're building an intelligent property search assistant that will revolutionize how you find and evaluate real estate opportunities.
                  </p>
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Get Notified When Available
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Smart Property Search</h3>
                <p className="text-sm text-muted-foreground">
                  Find properties that match your exact criteria with AI-powered recommendations
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Market Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time market data, trends, and neighborhood analytics
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">24/7 Assistance</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant answers to your real estate questions anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RealEstateDemo;