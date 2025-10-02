import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  url: string;
  description: string;
}

interface InternalLinkEnhancerProps {
  relatedLinks: RelatedLink[];
  heading?: string;
  className?: string;
}

/**
 * InternalLinkEnhancer - Smart component for adding contextual internal links
 * Helps eliminate orphan pages and improve internal linking structure
 */
export const InternalLinkEnhancer: React.FC<InternalLinkEnhancerProps> = ({
  relatedLinks,
  heading = 'Related Resources',
  className = ''
}) => {
  if (!relatedLinks || relatedLinks.length === 0) return null;

  return (
    <div className={`my-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedLinks.map((link, index) => (
          <Link key={index} to={link.url} className="group">
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
