import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, Sparkles, Search, Target, TrendingUp, Users, Zap, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResearchPrompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

const researchPrompts: ResearchPrompt[] = [
  {
    id: 'market-sizing',
    title: 'AI-Powered Market Sizing Analysis',
    description: 'Comprehensive market size estimation using multiple data sources and validation methods',
    prompt: `Conduct a comprehensive market sizing analysis for {industry} in {region}. Include:

1. **Total Addressable Market (TAM) Analysis**
   - Primary research methodology and data sources
   - Market size calculation with 3-year projections
   - Key growth drivers and market dynamics

2. **Serviceable Addressable Market (SAM) Estimation**
   - Target segment identification and sizing
   - Geographic and demographic constraints
   - Competitive landscape impact on addressable market

3. **Serviceable Obtainable Market (SOM) Projection**
   - Realistic market penetration scenarios (conservative, likely, optimistic)
   - Resource requirements and scaling timeline
   - Go-to-market strategy alignment with market capture

4. **Validation Framework**
   - Cross-reference with industry reports and expert interviews
   - Bottom-up vs top-down sizing comparison
   - Sensitivity analysis for key assumptions

**Deliverables:** Market sizing model, data source documentation, assumption validation report

**AI Enhancement:** Use machine learning models to identify market patterns and predict sizing accuracy confidence intervals.`,
    category: 'Market Analysis',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  {
    id: 'competitor-intelligence',
    title: 'Competitive Intelligence Deep Dive',
    description: 'AI-enhanced competitive analysis with real-time monitoring and strategic positioning insights',
    prompt: `Develop a comprehensive competitive intelligence framework for {industry} focusing on {competitor_focus}:

1. **Competitive Landscape Mapping**
   - Direct and indirect competitor identification
   - Market positioning analysis and competitive gaps
   - Pricing strategy and value proposition comparison

2. **Digital Footprint Analysis**
   - Website traffic, SEO performance, and content strategy
   - Social media presence and engagement analysis
   - Digital advertising spend and channel optimization

3. **Product & Feature Comparison**
   - Feature matrix and capability assessment
   - Technology stack and infrastructure analysis
   - User experience and customer journey evaluation

4. **Strategic Monitoring Setup**
   - Real-time competitive intelligence dashboard
   - Alert system for competitive moves and announcements
   - Market share tracking and performance benchmarking

**AI Tools:** Web scraping, sentiment analysis, predictive competitive modeling, automated report generation

**Outcome:** Competitive strategy recommendations with ongoing monitoring framework`,
    category: 'Competitive Analysis',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  {
    id: 'customer-persona',
    title: 'AI-Generated Customer Persona Development',
    description: 'Data-driven persona creation using behavioral analytics and predictive modeling',
    prompt: `Create comprehensive customer personas for {product/service} in {target_market} using AI-enhanced research:

1. **Data Collection & Analysis**
   - Customer interview program (50+ interviews across segments)
   - Behavioral data analysis from existing customer base
   - Social listening and online community research
   - Survey deployment with statistical significance

2. **Persona Segmentation & Modeling**
   - Demographic, psychographic, and behavioral clustering
   - Pain point identification and prioritization
   - Journey mapping with emotional state analysis
   - Decision-making process and influence factors

3. **AI-Enhanced Insights**
   - Predictive modeling for persona evolution
   - Sentiment analysis of customer feedback
   - Pattern recognition in purchasing behavior
   - Propensity scoring for conversion likelihood

4. **Persona Validation & Refinement**
   - A/B testing of persona-based messaging
   - Continuous feedback loop implementation
   - Performance tracking and optimization

**Deliverables:** Detailed persona profiles, journey maps, messaging frameworks, validation reports

**Success Metrics:** Improved conversion rates, better product-market fit, enhanced customer satisfaction`,
    category: 'Customer Research',
    difficulty: 'Intermediate',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'pricing-strategy',
    title: 'Dynamic Pricing Strategy Optimization',
    description: 'AI-powered pricing research with elasticity modeling and competitive benchmarking',
    prompt: `Develop an optimal pricing strategy for {product/service} using advanced analytics and market research:

1. **Market Price Analysis**
   - Competitive pricing landscape mapping
   - Value-based pricing model development
   - Price elasticity research and modeling
   - Customer willingness-to-pay studies

2. **AI-Powered Price Optimization**
   - Dynamic pricing model development
   - Demand forecasting with price sensitivity
   - A/B testing framework for price points
   - Revenue optimization scenarios

3. **Customer Segmentation Pricing**
   - Segment-specific pricing strategies
   - Bundle and tiered pricing analysis
   - Geographic and temporal pricing variations
   - Customer lifetime value impact assessment

4. **Implementation & Monitoring**
   - Pricing strategy rollout plan
   - Performance tracking dashboard
   - Continuous optimization framework
   - Competitive response monitoring

**Tools:** Price optimization algorithms, statistical modeling, market research platforms

**Expected Outcome:** 15-25% revenue increase through optimized pricing strategies`,
    category: 'Pricing Research',
    difficulty: 'Advanced',
    estimatedTime: '3-5 weeks'
  },
  {
    id: 'go-to-market-validation',
    title: 'GTM Strategy Validation Framework',
    description: 'Comprehensive validation methodology for go-to-market strategies before full implementation',
    prompt: `Design and execute a validation framework for {product/service} go-to-market strategy in {target_market}:

1. **Hypothesis Development & Testing**
   - Core GTM assumptions identification
   - Testable hypothesis formulation
   - Success criteria and KPI definition
   - Risk assessment and mitigation planning

2. **Market Validation Experiments**
   - Minimum viable product (MVP) testing
   - Landing page conversion optimization
   - Pre-launch campaign effectiveness
   - Channel partnership validation

3. **Customer Development Program**
   - Early adopter identification and recruitment
   - Customer discovery interview program
   - Product-market fit assessment
   - Feedback integration and iteration cycles

4. **Channel Strategy Validation**
   - Multi-channel pilot program execution
   - Channel partner evaluation and selection
   - Sales process optimization and training
   - Customer acquisition cost validation

**Deliverables:** Validation report, refined GTM strategy, implementation roadmap, risk mitigation plan

**Success Metrics:** Validated product-market fit, optimized customer acquisition channels, reduced GTM risk`,
    category: 'Strategy Validation',
    difficulty: 'Advanced',
    estimatedTime: '6-8 weeks'
  }
];

const industries = [
  'Technology & Software',
  'Healthcare & MedTech', 
  'Financial Services',
  'E-commerce & Retail',
  'Manufacturing',
  'Professional Services',
  'Education Technology',
  'Real Estate Technology',
  'Food & Beverage',
  'Transportation & Logistics'
];

const regions = [
  'North America',
  'Europe',
  'Asia-Pacific',
  'Latin America',
  'Middle East & Africa',
  'Global'
];

export function ResearchToolGenerator() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<ResearchPrompt | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { toast } = useToast();

  const handleGeneratePrompt = (prompt: ResearchPrompt) => {
    if (!selectedIndustry) {
      toast({
        title: "Industry Required",
        description: "Please select an industry before generating prompts.",
        variant: "destructive"
      });
      return;
    }

    let customizedPrompt = prompt.prompt
      .replace(/{industry}/g, selectedIndustry)
      .replace(/{region}/g, selectedRegion || 'your target region')
      .replace(/{product\/service}/g, companyName ? `${companyName}'s products/services` : 'your product/service')
      .replace(/{target_market}/g, `${selectedIndustry} ${selectedRegion ? `in ${selectedRegion}` : 'market'}`)
      .replace(/{competitor_focus}/g, `key players in ${selectedIndustry}`)
      .replace(/{company_name}/g, companyName || 'your company');

    if (additionalContext) {
      customizedPrompt += `\n\n**Additional Context:**\n${additionalContext}`;
    }

    setSelectedPrompt(prompt);
    setGeneratedPrompt(customizedPrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast({
      title: "Copied to Clipboard",
      description: "The research prompt has been copied to your clipboard."
    });
  };

  const downloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedPrompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedPrompt?.title.replace(/\s+/g, '_')}_Research_Prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toast({
      title: "Download Started",
      description: "Your research prompt has been downloaded."
    });
  };

  return (
    <div className="space-y-8">
      {/* Configuration Panel */}
      <Card className="p-6">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Research Configuration
          </CardTitle>
          <CardDescription>
            Customize the research prompts based on your industry, market, and specific needs
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Target Region</Label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/Product Name</Label>
              <Input
                id="company"
                placeholder="Enter company or product name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="context">Additional Context (Optional)</Label>
            <Textarea
              id="context"
              placeholder="Provide any additional context, specific requirements, or constraints for your research..."
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Research Prompt Templates */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Research Templates</h3>
          
          <div className="space-y-4">
            {researchPrompts.map((prompt) => (
              <Card 
                key={prompt.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPrompt?.id === prompt.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleGeneratePrompt(prompt)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{prompt.title}</CardTitle>
                      <CardDescription>{prompt.description}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={
                        prompt.difficulty === 'Beginner' ? 'secondary' :
                        prompt.difficulty === 'Intermediate' ? 'outline' : 'default'
                      }>
                        {prompt.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {prompt.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {prompt.estimatedTime}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Zap className="h-3 w-3 mr-1" />
                      Generate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Generated Prompt Display */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Generated Research Prompt</h3>
          
          {generatedPrompt ? (
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{selectedPrompt?.title}</CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadPrompt}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{selectedPrompt?.category}</Badge>
                  <Badge variant="outline">{selectedPrompt?.estimatedTime}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">
                    {generatedPrompt}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="p-12 text-center">
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-foreground">Select a Research Template</h4>
                  <p className="text-muted-foreground">
                    Choose a research template from the left panel to generate a customized prompt based on your configuration.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Additional Resources */}
      <Card className="p-6">
        <CardHeader className="pb-4">
          <CardTitle>Additional Research Resources</CardTitle>
          <CardDescription>
            Enhance your market research with these complementary tools and methodologies
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-foreground">Customer Interview Scripts</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Structured interview guides for customer discovery and validation
              </p>
              <Button variant="outline" size="sm">Access Scripts</Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-foreground">Survey Templates</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ready-to-use survey templates for market validation and feedback
              </p>
              <Button variant="outline" size="sm">Download Templates</Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-foreground">Analysis Frameworks</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic frameworks for organizing and analyzing research findings
              </p>
              <Button variant="outline" size="sm">View Frameworks</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}