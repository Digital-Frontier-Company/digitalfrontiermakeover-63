import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, TwitterIcon, GlobeIcon } from "lucide-react";

const AuthorPage = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Digital Frontier Team | AI Marketing Experts"
      subtitle="Meet Our Expert Authors and Consultants"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2025-01-01"
      modifiedDate="2025-08-18"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the AI marketing specialists and digital strategists behind Digital Frontier Company's cutting-edge content and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DF
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Frontier Team</h3>
              <p className="text-muted-foreground mb-4">
                Our team of AI marketing experts, data scientists, and digital strategists brings years of experience in cutting-edge marketing technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">AI Marketing</Badge>
                <Badge variant="secondary">AEO Strategy</Badge>
                <Badge variant="secondary">Content Strategy</Badge>
                <Badge variant="secondary">SEO</Badge>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="https://digitalfrontier.app" className="text-muted-foreground hover:text-primary">
                  <GlobeIcon className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AI
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Division</h3>
              <p className="text-muted-foreground mb-4">
                Specialists in Answer Engine Optimization, Generative Engine Optimization, and emerging AI marketing technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Answer Engine Optimization</Badge>
                <Badge variant="secondary">GEO</Badge>
                <Badge variant="secondary">AI Research</Badge>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://digitalfrontier.app/docs" className="text-muted-foreground hover:text-primary">
                  <GlobeIcon className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CS
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Strategy Team</h3>
              <p className="text-muted-foreground mb-4">
                Expert content creators and strategists specializing in B2B tech company content engines and scalable content systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Content Strategy</Badge>
                <Badge variant="secondary">B2B Marketing</Badge>
                <Badge variant="secondary">Content Systems</Badge>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://digitalfrontier.app/blog" className="text-muted-foreground hover:text-primary">
                  <GlobeIcon className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground mb-6">
                Digital Frontier Company's team combines deep technical expertise with practical marketing experience. Our authors and consultants have:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Technical Credentials</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Advanced AI and machine learning expertise</li>
                    <li>• SEO certifications and specializations</li>
                    <li>• Data science and analytics backgrounds</li>
                    <li>• Software engineering experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Marketing Experience</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 10+ years in digital marketing</li>
                    <li>• B2B SaaS marketing specialization</li>
                    <li>• Content strategy and creation</li>
                    <li>• Performance marketing and analytics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AuthorPage;