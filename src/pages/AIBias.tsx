
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Check, Scale, Shield, User, UserX } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AIBias = () => {
  const location = useLocation();

  const biasTypes = [
    {
      id: 1,
      title: "Demographic Bias in Ad Targeting",
      description: "AI systems can reinforce stereotypes by targeting specific demographics for certain products or services based on historical data patterns.",
      example: "Job ads shown primarily to one gender or age group, reinforcing workplace disparities.",
      mitigation: "Regular fairness audits of ad campaigns, demographic parity testing across segments.",
      icon: <User className="h-6 w-6 text-amber-400" />,
      link: "/technical"
    },
    {
      id: 2,
      title: "Exclusionary Targeting",
      description: "AI may inadvertently exclude certain protected groups from seeing opportunities like housing, employment, or financial services ads.",
      example: "Digital redlining where housing ads aren't shown to certain neighborhoods or demographic groups.",
      mitigation: "Implement inclusive targeting practices and test campaigns for disparate impact.",
      icon: <UserX className="h-6 w-6 text-red-400" />,
      link: "/sectors"
    },
    {
      id: 3,
      title: "Content and Language Bias",
      description: "AI-generated marketing content can perpetuate stereotypes or use language that resonates differently across cultural contexts.",
      example: "Generative AI producing images that reinforce gender roles or using culturally biased metaphors.",
      mitigation: "Use diverse training data and review AI-generated content before publication.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-400" />,
      link: "/resources/content-creation-agent"
    },
    {
      id: 4,
      title: "Price Discrimination",
      description: "AI pricing algorithms can lead to unfair price differences based on user demographics or behaviors.",
      example: "Charging higher prices to users from certain zip codes or with specific browsing histories.",
      mitigation: "Ethical pricing policies and transparency about how dynamic pricing works.",
      icon: <Scale className="h-6 w-6 text-blue-400" />,
      link: "/pricing"
    },
    {
      id: 5,
      title: "Exploitation of Psychological Vulnerabilities",
      description: "AI may identify and target users at psychologically vulnerable moments for greater ad effectiveness.",
      example: "Targeting ads to users when data suggests they're feeling lonely, anxious, or insecure.",
      mitigation: "Establish clear ethical boundaries for targeting and avoid exploitative practices.",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      link: "/regulations"
    },
    {
      id: 6,
      title: "Building More Ethical AI Marketing Systems",
      description: "Creating more fair and inclusive advertising technology requires proactive design and governance.",
      example: "Diverse training data sets, bias detection systems, and regular algorithm auditing.",
      mitigation: "Establish AI ethics committees and frameworks specifically for marketing applications.",
      icon: <Check className="h-6 w-6 text-emerald-400" />,
      link: "/future"
    },
  ];

  return (
    <PageLayout 
      title="AI Bias in Marketing: Expert Guide to Ethical Advertising Solutions & Bias Prevention Strategies | Build Fair AI Systems"
      subtitle="Master ethical AI marketing with proven bias detection techniques, practical solutions, and actionable strategies for fair advertising"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>AI Bias in Advertising | Ethical Marketing Solutions | Digital Frontier</title>
        <meta name="keywords" content="AI bias, ethical marketing, demographic bias, AI ethics, digital marketing ethics, inclusive marketing, fair advertising" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "AI Bias in Advertising: Ethics & Solutions",
            "description": "Understanding and addressing bias in AI-powered marketing technologies for ethical practice",
            "author": {
              "@type": "Organization",
              "name": "Digital Frontier Company"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Digital Frontier Company",
              "logo": {
                "@type": "ImageObject",
                "url": "/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://digitalfrontier.app/ai-bias-in-advertising"
            }
          })}
        </script>
      </Helmet>
      
      <div className="mb-6">
        <p className="text-slate-300">
          As <Link to="/ai-and-digital-marketing" className="text-blue-400 hover:underline">AI becomes more prevalent in marketing</Link>, 
          understanding and addressing bias is crucial for ethical and effective campaigns. This guide examines key issues 
          and solutions for building more fair and inclusive AI marketing systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {biasTypes.map((item) => (
          <Link to={item.link} key={item.id}>
            <Card className="bg-slate-800/80 border-slate-700 hover:border-[#00BFFF] transition-colors group h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700/50 rounded-md group-hover:bg-[#00BFFF]/20 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-100 group-hover:text-[#00BFFF] transition-colors">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-3">{item.description}</p>
                <CardDescription className="text-slate-400 mb-2">
                  <span className="font-semibold text-amber-400">Example:</span> {item.example}
                </CardDescription>
                <CardDescription className="text-slate-400">
                  <span className="font-semibold text-emerald-400">Solution:</span> {item.mitigation}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-slate-800/60 border border-slate-700 rounded-xl">
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-3">Moving Forward: Responsible AI Marketing</h3>
        <p className="text-slate-300 mb-4">
          Addressing bias in AI marketing systems requires both technical solutions and ethical governance frameworks. 
          Companies that proactively tackle these issues not only minimize regulatory and reputational risks but also 
          build more effective, inclusive marketing that resonates with broader audiences.
        </p>
        <p className="text-slate-300 mb-4">
          The most successful organizations view ethical AI not as a constraint but as a competitive advantage 
          that builds consumer trust and brand loyalty in an increasingly AI-driven marketplace.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/kpis" className="px-4 py-2 bg-cyan-600/30 hover:bg-cyan-600/50 rounded-md text-cyan-300 transition-colors">
            Explore Ethical AI KPIs
          </Link>
          <Link to="/technical" className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 rounded-md text-blue-300 transition-colors">
            How AI Works in Marketing
          </Link>
          <Link to="/future" className="px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-md text-purple-300 transition-colors">
            The Future of Ethical AI
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIBias;
