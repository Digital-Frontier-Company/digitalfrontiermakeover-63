import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  status: "pass" | "fail" | "warning" | "unchecked";
  priority: "high" | "medium" | "low";
  automated: boolean;
}

const InteractiveSEOChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const seoSections = [
    {
      id: "crawling",
      title: "Crawling & Indexing",
      items: [
        {
          id: "crawlable",
          title: "Page is Crawlable",
          description: "No noindex or nofollow in robots tags, not disallowed in robots.txt",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "indexed",
          title: "Page is Indexed",
          description: "Page appears in Google search results",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "canonical",
          title: "Self-referencing Canonical Tag",
          description: "Canonical tag points to the page itself",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
      ],
    },
    {
      id: "ux",
      title: "User Experience",
      items: [
        {
          id: "core-web-vitals",
          title: "Core Web Vitals Score > 80%",
          description: "PageSpeed Insights score above 80% for mobile and desktop",
          status: "warning" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "mobile-friendly",
          title: "Mobile-Friendly",
          description: "Passes Google's mobile-friendly test",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "ssl-certificate",
          title: "SSL Certificate Grade B+",
          description: "SSL certificate with grade B or higher",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "engagement-rate",
          title: "Engagement Rate > 20%",
          description: "Google Analytics 4 engagement rate above 20%",
          status: "warning" as const,
          priority: "medium" as const,
          automated: false,
        },
      ],
    },
    {
      id: "keywords",
      title: "Keywords",
      items: [
        {
          id: "keyword-in-url",
          title: "Keyword in URL",
          description: "Target keyword appears in the page URL",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "keyword-in-title",
          title: "Keyword in Title Tag",
          description: "Primary keyword present in title tag",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "keyword-in-h1",
          title: "Keyword in H1 Tag",
          description: "Primary keyword appears in main heading",
          status: "pass" as const,
          priority: "high" as const,
          automated: true,
        },
        {
          id: "keyword-first-sentence",
          title: "Keyword in First Sentence",
          description: "Primary keyword appears in opening sentence",
          status: "warning" as const,
          priority: "medium" as const,
          automated: false,
        },
      ],
    },
    {
      id: "content",
      title: "Content Quality",
      items: [
        {
          id: "heading-structure",
          title: "Logical Heading Structure",
          description: "Headings follow H1 > H2 > H3 hierarchy",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
        {
          id: "originality",
          title: "Content Originality > 50%",
          description: "More than 50% original content, not AI-generated",
          status: "warning" as const,
          priority: "high" as const,
          automated: false,
        },
        {
          id: "external-uniqueness",
          title: "External Uniqueness 100%",
          description: "Content is unique across the web (Copyscape check)",
          status: "pass" as const,
          priority: "high" as const,
          automated: false,
        },
        {
          id: "grammar-score",
          title: "Grammar Score > 95%",
          description: "Grammarly score of 95% or higher",
          status: "warning" as const,
          priority: "medium" as const,
          automated: false,
        },
      ],
    },
    {
      id: "eeat",
      title: "E-E-A-T",
      items: [
        {
          id: "first-hand-experience",
          title: "First-hand Experience",
          description: "Content demonstrates direct experience with visual proof",
          status: "warning" as const,
          priority: "high" as const,
          automated: false,
        },
        {
          id: "author-visibility",
          title: "Author Visibility",
          description: "SME author prominently displayed on page",
          status: "fail" as const,
          priority: "high" as const,
          automated: false,
        },
        {
          id: "about-page",
          title: "About Page",
          description: "Easily accessible About page available",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
        {
          id: "contact-page",
          title: "Contact Page",
          description: "Clear and accessible Contact page",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
      ],
    },
    {
      id: "technical",
      title: "Technical SEO",
      items: [
        {
          id: "schema-markup",
          title: "Schema Markup",
          description: "Proper schema implementation for content type",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
        {
          id: "internal-links",
          title: "Internal Links > 5",
          description: "At least 5 internal links pointing to page",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
        {
          id: "crawl-depth",
          title: "Crawl Depth < 3 Clicks",
          description: "Page accessible within 3 clicks from homepage",
          status: "pass" as const,
          priority: "medium" as const,
          automated: true,
        },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSectionScore = (section: typeof seoSections[0]) => {
    const totalItems = section.items.length;
    const passedItems = section.items.filter(item => item.status === "pass").length;
    return Math.round((passedItems / totalItems) * 100);
  };

  const handleItemCheck = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (checkedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive SEO Checklist</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete diagnostic checklist with automated testing and manual verification points
            </p>
          </div>

          <Tabs defaultValue="crawling" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {seoSections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="text-xs">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {seoSections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{section.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {getSectionScore(section)}% Complete
                        </Badge>
                        <Progress value={getSectionScore(section)} className="w-24" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                          <Checkbox
                            id={item.id}
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={() => handleItemCheck(item.id)}
                          />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(item.status)}
                              <label 
                                htmlFor={item.id} 
                                className="font-medium cursor-pointer"
                              >
                                {item.title}
                              </label>
                              <Badge variant={item.priority === "high" ? "destructive" : item.priority === "medium" ? "secondary" : "outline"}>
                                {item.priority}
                              </Badge>
                              {item.automated && (
                                <Badge variant="outline" className="text-xs">
                                  Auto
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSEOChecklist;