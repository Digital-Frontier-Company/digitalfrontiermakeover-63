
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartBarIcon, ChartPieIcon, ChartLineIcon, SquareIcon, ArrowRight, TrendingUp, Search, Zap } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const GenerativeEngineOptimization = () => {
  const location = useLocation();

  // Sample data for optimization performance chart
  const optimizationData = [
    { month: 'Jan', standard: 35, optimized: 65 },
    { month: 'Feb', standard: 38, optimized: 72 },
    { month: 'Mar', standard: 40, optimized: 78 },
    { month: 'Apr', standard: 38, optimized: 82 },
    { month: 'May', standard: 42, optimized: 87 },
    { month: 'Jun', standard: 45, optimized: 92 },
  ];

  // Updated data for SEO vs AEO vs GEO comparison based on research
  const optimizationComparisonData = [
    { name: 'Search Visibility (%)', seo: 53, aeo: 41, geo: 46 },
    { name: 'Direct Traffic (%)', seo: 40, aeo: 0, geo: 45 },
    { name: 'Conversion Rate (%)', seo: 2.8, aeo: 24, geo: 20 },
    { name: 'Content ROI (%)', seo: 550, aeo: 400, geo: 400 },
  ];

  // GEO FAQ questions and answers
  const geoFaqs: FAQItem[] = [
    {
      question: "What's the fastest GEO win?",
      answer: "The fastest GEO win is adding FAQPage schema and 40-word answers to top blog posts. Chatbots can scrape and start citing these within weeks, giving you quick visibility in AI-generated responses."
    },
    {
      question: "Do backlinks still matter?",
      answer: "Yes, but clear entities and passage-level relevance now outrank raw link volume. While traditional backlinks remain important for SEO, GEO prioritizes content quality, factual accuracy, and structured data that helps AI engines understand your content."
    },
    {
      question: "How soon can I see results?",
      answer: "Brands tracking with our platform typically report new AI citations in 4-6 weeks post-implementation. The timeline varies depending on content quality, update frequency, and the competitive landscape of your industry."
    },
    {
      question: "What's the difference between SEO and GEO?",
      answer: "SEO (Search Engine Optimization) focuses on ranking in traditional search engines like Google, while GEO (Generative Engine Optimization) aims to get your content cited and quoted in AI responses from tools like ChatGPT, Claude, and Bard."
    },
    {
      question: "Which industries benefit most from GEO?",
      answer: "Industries with complex products or services that people frequently ask questions about benefit most, including finance, healthcare, technology, travel, and e-commerce. However, any business providing factual information can leverage GEO effectively."
    }
  ];

  // Sample data for quote distribution chart
  const quoteDistributionData = [
    { name: 'First Position', value: 65 },
    { name: 'Second Position', value: 20 },
    { name: 'Third Position', value: 10 },
    { name: 'Lower Positions', value: 5 },
  ];

  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  // Custom label function for percentage display
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Sample data for optimization factors
  const factorsData = [
    { factor: 'Keyword Relevance', impact: 90 },
    { factor: 'Content Quality', impact: 85 },
    { factor: 'Semantic Structure', impact: 75 },
    { factor: 'Technical Optimization', impact: 70 },
    { factor: 'User Engagement', impact: 65 },
    { factor: 'Entity Recognition', impact: 60 },
  ];

  // Sample data for monthly improvement
  const monthlyImprovementData = [
    { month: 'Jan', improvement: 15 },
    { month: 'Feb', improvement: 30 },
    { month: 'Mar', improvement: 45 },
    { month: 'Apr', improvement: 60 },
    { month: 'May', improvement: 75 },
    { month: 'Jun', improvement: 90 },
  ];

  return (
    <PageLayout
      title="Generative Engine Optimization: Expert GEO Strategies & Proven AI Citation Techniques | Get Quoted by AI"
      subtitle="Master Generative Engine Optimization with expert GEO strategies, proven AI citation techniques, and actionable methods to dominate generative search"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-12-01"
      modifiedDate="2024-12-18"
    >
      {/* Hero Image Section */}
      <section className="mb-24">
        <img 
          src="/lovable-uploads/7856abf2-126d-4fbb-87da-fe5143707423.png" 
          alt="SEO-AEO-GEO Blog Optimizer" 
          className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12" 
        />
        <h2 className="text-2xl font-bold mb-8 text-slate-100">Understanding GEO: The Next Frontier</h2>
        <p className="text-slate-300 text-lg mb-6">
          Generative Engine Optimization (GEO) is the emerging practice of optimizing content 
          to be prominently featured in AI-generated responses. As large language models increasingly 
          mediate information access, appearing in AI responses is becoming as crucial as ranking 
          in traditional search engines.
        </p>
        <p className="text-slate-300 text-lg">
          Our data-driven approach ensures your content isn't just found—it's quoted, referenced, and 
          prioritized by leading AI engines, driving visibility in this new paradigm of content discovery.
        </p>
      </section>

      {/* 5-Step Framework Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 text-slate-100">Our 5-Step GEO Framework</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img 
            src="/lovable-uploads/3b21fa11-2a1d-4153-98dd-07178e0da505.png" 
            alt="5-Step GEO Framework" 
            className="w-full max-w-md rounded-lg shadow-lg border border-slate-700" 
          />
          <div className="space-y-6">
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                Entity Audit
              </h3>
              <p className="text-slate-300 ml-10">We comprehensively map every brand, product, expert, and FAQ into structured schemas that AI engines can easily process.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                RAG-Ready Content
              </h3>
              <p className="text-slate-300 ml-10">We format your content with question-first headers and concise answer blocks (≤50 words) to maximize citation potential.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                Vector Friendliness
              </h3>
              <p className="text-slate-300 ml-10">We optimize your content structure by chunking pages under 800 tokens and strategically embedding them for AI retrieval.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                LLM Sentiment Tracking
              </h3>
              <p className="text-slate-300 ml-10">We implement weekly bot prompting to gauge tone and citation frequency across major AI platforms.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
                Zero-Click KPI Loop
              </h3>
              <p className="text-slate-300 ml-10">We measure AI citations, not just clicks, through comprehensive dashboards that track your content's performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison Card - Replaced Chart with Cards */}
      <Card className="mb-28 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartBarIcon className="h-6 w-6 text-purple-400" />
            Performance Comparison: Standard vs GEO-Optimized
          </CardTitle>
          <p className="text-slate-300 text-lg">AI quotability performance over 6 months</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {optimizationData.map((data, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-100">{data.month} 2024</h3>
                    <div className="flex items-center gap-1 text-purple-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">+{data.optimized - data.standard}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400">Standard Content</span>
                        <span className="text-slate-300 font-medium">{data.standard}%</span>
                      </div>
                      <Progress value={data.standard} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-400">GEO-Optimized</span>
                        <span className="text-purple-300 font-medium">{data.optimized}%</span>
                      </div>
                      <Progress value={data.optimized} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO vs AEO vs GEO Comparison - Replaced Chart with Cards */}
      <Card className="mb-32 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartLineIcon className="h-6 w-6 text-purple-400" />
            Optimization Strategy Comparison
          </CardTitle>
          <p className="text-slate-300 text-lg">SEO vs AEO vs GEO: Performance across key metrics</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* SEO Card */}
            <Card className="bg-green-900/20 border-green-800/30 border">
              <CardHeader className="pb-4">
                <CardTitle className="text-green-400 text-xl flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  SEO
                </CardTitle>
                <p className="text-slate-300 text-sm">Traditional search engine optimization focused on Google rankings</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Search Visibility</span>
                    <span className="text-slate-200 font-medium">53%</span>
                  </div>
                  <Progress value={53} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Direct Traffic</span>
                    <span className="text-slate-200 font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Conversion Rate</span>
                    <span className="text-slate-200 font-medium">2.8%</span>
                  </div>
                  <Progress value={(2.8/30)*100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Content ROI</span>
                    <span className="text-slate-200 font-medium">550%</span>
                  </div>
                  <Progress value={(550/1000)*100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* AEO Card */}
            <Card className="bg-blue-900/20 border-blue-800/30 border">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-400 text-xl flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AEO
                </CardTitle>
                <p className="text-slate-300 text-sm">Answer Engine Optimization targeting featured snippets</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Search Visibility</span>
                    <span className="text-slate-200 font-medium">41%</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Direct Traffic</span>
                    <span className="text-slate-200 font-medium">0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Conversion Rate</span>
                    <span className="text-slate-200 font-medium">24%</span>
                  </div>
                  <Progress value={(24/30)*100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Content ROI</span>
                    <span className="text-slate-200 font-medium">400%</span>
                  </div>
                  <Progress value={(400/1000)*100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* GEO Card */}
            <Card className="bg-purple-900/20 border-purple-800/30 border">
              <CardHeader className="pb-4">
                <CardTitle className="text-purple-400 text-xl flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  GEO
                </CardTitle>
                <p className="text-slate-300 text-sm">Generative Engine Optimization for maximum AI quotability</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Search Visibility</span>
                    <span className="text-slate-200 font-medium">46%</span>
                  </div>
                  <Progress value={46} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Direct Traffic</span>
                    <span className="text-slate-200 font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Conversion Rate</span>
                    <span className="text-slate-200 font-medium">20%</span>
                  </div>
                  <Progress value={(20/30)*100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm">Content ROI</span>
                    <span className="text-slate-200 font-medium">400%</span>
                  </div>
                  <Progress value={(400/1000)*100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Multiple Chart Views - Replaced Charts with Cards */}
      <Tabs defaultValue="distribution" className="mb-32">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="distribution" className="text-base py-3">Quote Position</TabsTrigger>
          <TabsTrigger value="factors" className="text-base py-3">Optimization Factors</TabsTrigger>
          <TabsTrigger value="improvement" className="text-base py-3">Improvement Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="distribution" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Quote Position Distribution</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our GEO-optimized content achieves first position in AI responses 65% of the time.
              </p>
              
              {quoteDistributionData.map((item, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="font-semibold text-slate-100">{item.name}</span>
                      </div>
                      <span className="text-2xl font-bold text-slate-100">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="mb-3" />
                    <p className="text-slate-400 text-sm">
                      {item.name === 'First Position' && 'Highest visibility and click-through rate'}
                      {item.name === 'Second Position' && 'Good visibility with strong performance'}
                      {item.name === 'Third Position' && 'Moderate visibility but still impactful'}
                      {item.name === 'Lower Positions' && 'Limited visibility in AI responses'}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-700">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-100">65%</div>
                      <div className="text-slate-400">First Position</div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-3">Premium Positioning</h4>
                <p className="text-slate-300">Top-tier visibility in AI-generated responses</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="factors" className="space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Key Optimization Factors</h3>
            <p className="text-slate-300 text-lg">
              Critical factors that influence AI quote selection and positioning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factorsData.map((factor, index) => {
              const icons = [TrendingUp, Zap, Search, ChartBarIcon, ChartLineIcon, ChartPieIcon];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-slate-100">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-lg">{factor.factor}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-300">Impact Score</span>
                      <span className="text-2xl font-bold text-purple-400">{factor.impact}%</span>
                    </div>
                    <Progress value={factor.impact} className="mb-4" />
                    <p className="text-slate-400 text-sm">
                      {factor.factor === 'Keyword Relevance' && 'Strategic use of semantically-related terms that AI engines recognize as authoritative'}
                      {factor.factor === 'Content Quality' && 'Clear, factual, and well-structured content that AI systems identify as reliable'}
                      {factor.factor === 'Semantic Structure' && 'Proper entity relationships and structured data for AI understanding'}
                      {factor.factor === 'Technical Optimization' && 'Vector-friendly formatting and token optimization'}
                      {factor.factor === 'User Engagement' && 'High-quality interactions that signal content value'}
                      {factor.factor === 'Entity Recognition' && 'Clear identification of brands, products, and key concepts'}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="improvement" className="space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Progressive Improvement Timeline</h3>
            <p className="text-slate-300 text-lg">
              GEO strategy delivers continuous improvement in AI quotability over time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyImprovementData.map((month, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">{month.month}</span>
                  </div>
                  <CardTitle className="text-slate-100">{month.improvement}%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Progress value={month.improvement} className="mb-4" />
                  <p className="text-slate-400 text-sm">
                    {month.month === 'Jan' && 'Initial optimization phase'}
                    {month.month === 'Feb' && 'Content restructuring effects'}
                    {month.month === 'Mar' && 'Entity mapping implementation'}
                    {month.month === 'Apr' && 'Vector optimization results'}
                    {month.month === 'May' && 'Authority signal enhancement'}
                    {month.month === 'Jun' && 'Full GEO strategy maturation'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-lg border border-slate-700 text-center">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-slate-100 mb-3">90% Peak Improvement</h4>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Clients typically see up to 90% improvement in AI quotability within 6 months of implementing our GEO strategies.
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Interactive Cards Section - Increased spacing */}
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Our GEO Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartLineIcon className="h-6 w-6 text-purple-400" />
              Content Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our AI-powered analysis engine examines your existing content to identify optimization opportunities
              specifically for generative AI quotability, focusing on structure, authority signals, and semantic relevance.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <SquareIcon className="h-6 w-6 text-purple-400" />
              Semantic Enhancement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We enhance your content with AI-friendly semantic structures, entity relationships, and
              information architecture that helps generative engines understand, value, and prioritize your content.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartPieIcon className="h-6 w-6 text-purple-400" />
              Citation Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We implement proprietary techniques to increase the likelihood that AI engines will cite your 
              content as an authoritative source, incorporating citation-friendly formatting and structure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartBarIcon className="h-6 w-6 text-purple-400" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our specialized monitoring tools track how frequently and prominently your content appears
              in AI-generated responses, providing actionable insights for continuous improvement.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* FAQ Section with JSON-LD Schema */}
      <FAQSection 
        title="Frequently Asked Questions About GEO" 
        faqs={geoFaqs} 
        className="mb-16"
      />
      
      {/* Benefits Section with Gradients - Added additional spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Benefits of GEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-800/30">
            <div className="text-purple-400 mb-4 text-3xl font-bold">01</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Zero-Click Visibility</h3>
            <p className="text-slate-300">Gain visibility without requiring users to click through to your website, expanding your content's reach.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 border border-fuchsia-800/30">
            <div className="text-fuchsia-400 mb-4 text-3xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Authority Positioning</h3>
            <p className="text-slate-300">Establish your brand as the authoritative source that AI engines trust and quote ahead of competitors.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-800/30">
            <div className="text-blue-400 mb-4 text-3xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Future-Proof Strategy</h3>
            <p className="text-slate-300">Adapt to the shifting search landscape where AI-mediated content discovery is becoming increasingly dominant.</p>
          </div>
        </div>
      </section>
      
      {/* Comparison Table - Improved spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">GEO vs. Traditional Optimization</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Feature</th>
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Traditional SEO</th>
                <th className="p-5 text-left text-purple-300 border-b border-slate-700 text-lg">GEO Strategy</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Primary Target</td>
                <td className="p-5 border-b border-slate-800">Search Engine Rankings</td>
                <td className="p-5 border-b border-slate-800">AI Citations & Quotes</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Content Format</td>
                <td className="p-5 border-b border-slate-800">Keyword-optimized content</td>
                <td className="p-5 border-b border-slate-800">Entity-rich, factual, structured</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Success Metric</td>
                <td className="p-5 border-b border-slate-800">Clicks & Traffic</td>
                <td className="p-5 border-b border-slate-800">Citation Frequency & Position</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">User Journey</td>
                <td className="p-5 border-b border-slate-800">SERP → Website</td>
                <td className="p-5 border-b border-slate-800">AI Response → Brand Recognition</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 font-medium">Technical Focus</td>
                <td className="p-5">Site speed, backlinks, metadata</td>
                <td className="p-5">Vector embeddings, entity relationships</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Case Studies Section - Improved spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <ChartBarIcon className="h-10 w-10 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">E-commerce Product Descriptions</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    A leading e-commerce retailer saw a 215% increase in AI-driven product mentions after implementing our GEO strategy across 5,000+ product descriptions.
                  </p>
                  <div className="flex items-center">
                    <span className="text-purple-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-purple-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <ChartLineIcon className="h-10 w-10 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">Financial Services Knowledge Base</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    A financial services provider increased their citation rate in AI responses by 340% after restructuring their knowledge base using our GEO framework.
                  </p>
                  <div className="flex items-center">
                    <span className="text-blue-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-blue-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section - Add spacing and improve visual appearance */}
      <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-800/50 text-center mb-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate AI Search Results?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
          As global brands increasingly hire GEO agencies to counter AI chat's threat to Google dominance, 
          don't get left behind. Our specialists can help position your content as the preferred source for AI engines.
        </p>
        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors text-lg">
          Get Your Free GEO Analysis
        </button>
      </div>
    </PageLayout>
  );
};

export default GenerativeEngineOptimization;
