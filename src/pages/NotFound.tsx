
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead 
        path="/404"
        title="Page Not Found - Digital Frontier"
        description="The page you're looking for doesn't exist. Return to Digital Frontier's homepage or browse our AI-powered content marketing services."
        keywords="404, page not found, digital frontier"
      />
      
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              404
            </h2>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Oops! The page you're looking for seems to have vanished into the digital frontier.
            </p>
          </div>

          {/* Search Suggestions */}
          <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-6 mb-8">
            <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              What were you looking for?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-slate-200 mb-2">Our Services:</h4>
                <ul className="space-y-1 text-slate-400">
                  <li><Link to="/answer-engine-optimization" className="hover:text-blue-400 transition-colors">Answer Engine Optimization</Link></li>
                  <li><Link to="/generative-engine-optimization" className="hover:text-blue-400 transition-colors">Generative Engine Optimization</Link></li>
                  <li><Link to="/search-engine-optimization" className="hover:text-blue-400 transition-colors">SEO Services</Link></li>
                  <li><Link to="/crypto-marketing" className="hover:text-blue-400 transition-colors">Crypto Marketing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-200 mb-2">Popular Pages:</h4>
                <ul className="space-y-1 text-slate-400">
                  <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog & Insights</Link></li>
                  <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                  <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-100 hover:bg-slate-800">
              <Link to="/contact" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-sm text-slate-500">
            <p>
              If you believe this is an error, please{' '}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact our support team
              </Link>
              {' '}and we'll help you find what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
