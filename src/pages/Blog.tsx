import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/utils";

const Blog = () => {
  const location = useLocation();
  const canonicalUrl = `https://digitalfrontier.app${location.pathname}`;
  
  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://digitalfrontier.app" },
    { name: "Blog", url: canonicalUrl }
  ]);

  const blogPosts = [
    {
      id: 1,
      title: "The AI Revolution in Digital Marketing: 5 Game-Changing Trends Reshaping 2025",
      excerpt: "Discover the 5 game-changing AI trends revolutionizing digital marketing in 2025. From hyper-personalization to voice search optimization and quantum computing applications.",
      category: "AI Trends",
      readTime: "12 min read",
      date: "2025-01-16",
      slug: "ai-revolution-digital-marketing-2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Digital Marketing Revolution of July 2025: AI Overviews, Algorithm Upheavals & the Future of Search",
      excerpt: "July 2025 recap: Google's huge core update, AI Overviews, social-media algorithm shifts, privacy rules & winning tactics for marketers.",
      category: "Digital Marketing Trends",
      readTime: "10 min read",
      date: "2025-07-22",
      slug: "digital-marketing-revolution-july-2025",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Resilience in Businesses with AI-Driven Risk Management",
      excerpt: "Discover how AI-driven risk management strategies can transform reactive approaches into proactive defenses, helping businesses build resilience in an uncertain world.",
      category: "AI & Risk Management",
      readTime: "12 min read",
      date: "2025-01-18",
      slug: "ai-driven-risk-management-business-resilience",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Mastering Digital Marketing in 2024",
      excerpt: "Discover the latest strategies and trends that are shaping the digital marketing landscape this year.",
      category: "Digital Marketing",
      readTime: "8 min read",
      date: "2024-12-15",
      slug: "mastering-digital-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Ultimate Guide to Tax Reduction & All-Weather Wealth-Building",
      excerpt: "Master advanced tax reduction tactics and build resilient wealth with proven strategies from financial experts.",
      category: "Financial Strategy",
      readTime: "15 min read",
      date: "2025-01-13",
      slug: "tax-reduction-wealth-building-guide",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Answer Engine Optimization for Crypto Startups",
      excerpt: "Deep dive into AEO strategies specifically designed for cryptocurrency and blockchain startups to dominate AI-powered search results.",
      category: "AEO Strategy",
      readTime: "8 min read",
      date: "2025-01-10",
      slug: "aeo-crypto-marketing",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Blog listing page schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Digital Frontier Blog",
    "description": "Latest insights on digital marketing, AI, and business transformation",
    "url": canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": "Digital Frontier Company"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Frontier Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalfrontier.app/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://digitalfrontier.app/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Digital Frontier Company"
      },
      "image": `https://digitalfrontier.app${post.image}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Blog | The Digital Frontier</title>
        <meta name="description" content="Latest insights on digital marketing, AI, and business transformation from Digital Frontier experts." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="digital marketing blog, AI marketing insights, business transformation, Digital Frontier" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="df-hero-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="df-logo mx-auto mb-6" width="180" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h2>
            <h2 className="text-xl text-slate-300">Insights on Digital Marketing, AI, and Business Transformation</h2>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-slate-900/60 border border-slate-800/80">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={post.image} alt={post.title} className="mb-4 rounded-md" />
                <CardDescription className="text-slate-400">{post.excerpt}</CardDescription>
                <div className="flex items-center mt-4">
                  <Badge className="mr-2">{post.category}</Badge>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.slug}`}>
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
