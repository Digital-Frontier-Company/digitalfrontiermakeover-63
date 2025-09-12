
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Target, Shield, Users, LineChart, Scale, AlertCircle, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const KPIs = () => {
  const location = useLocation();

  const kpis = [
    {
      id: 1,
      title: "Marketing Performance Metrics",
      description: "Standard metrics (ROI, CTR, CAC, CLV) remain relevant but must be balanced with ethical considerations. Example: An AI model with high CTR but demographic skew requires adjustment.",
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />,
      link: "/search-engine-optimization"
    },
    {
      id: 2,
      title: "AI-Specific Technical KPIs",
      description: "Accuracy, precision, recall of ML models. AI hallucination rate. Speed of content generation. Training data representativeness score. Algorithmic confidence intervals.",
      icon: <Target className="h-6 w-6 text-purple-400" />,
      link: "/technical"
    },
    {
      id: 3,
      title: "Privacy & Data Usage Metrics",
      description: "Consent rate (opt-in %). Data minimization score. PII usage reduction %. Data retention compliance. DSAR resolution time. Encryption coverage %.",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      link: "/regulations"
    },
    {
      id: 4,
      title: "Fairness & Inclusion Metrics",
      description: "Demographic parity across segments. Equal opportunity measures. Disparate impact scores. Accessibility compliance %. Readability scores for AI-generated content.",
      icon: <Users className="h-6 w-6 text-amber-400" />,
      link: "/ai-bias-in-advertising"
    },
    {
      id: 5,
      title: "Transparency & Trust Measurements",
      description: "AI disclosure compliance. Explanation quality score. Customer trust index. Feedback resolution time. Ethics support ticket volume/resolution.",
      icon: <LineChart className="h-6 w-6 text-cyan-400" />,
      link: "/about-us"
    },
    {
      id: 6,
      title: "Governance & Compliance Metrics",
      description: "Ethics training completion %. Policy compliance score. Risk assessment completion rate. Ethics review turnaround time. Audit findings resolution rate.",
      icon: <Scale className="h-6 w-6 text-pink-400" />,
      link: "/regulations"
    },
    {
      id: 7,
      title: "Incident & Response Metrics",
      description: "AI ethics incidents per quarter. Mean time to detection/resolution. Post-mortem completion rate. Recurring issue prevention score.",
      icon: <AlertCircle className="h-6 w-6 text-red-400" />,
      link: "/technical"
    },
    {
      id: 8,
      title: "Stakeholder Impact Metrics",
      description: "Employee ethics satisfaction. Customer experience scores. Social impact measurements. Investor ESG alignment scores. Community perception index.",
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
      link: "/sectors"
    },
  ];

  return (
    <PageLayout 
      title="Key Performance Indicators for Ethical AI Marketing"
      subtitle="Measuring both business and ethical performance is essential for digital marketing success"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>AI Marketing KPIs | Performance Metrics | Digital Frontier</title>
        <meta name="keywords" content="AI marketing KPIs, digital marketing metrics, ethical AI, marketing performance, data privacy metrics, AI ethics" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Key Performance Indicators for Ethical AI Marketing",
            "description": "Measuring both business and ethical performance is essential for digital marketing success",
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
              "@id": "https://digitalfrontier.app/kpis"
            }
          })}
        </script>
      </Helmet>
      
      <div className="mb-6">
        <p className="text-slate-300">
          In the world of <Link to="/ai-and-digital-marketing" className="text-blue-400 hover:underline">AI-powered digital marketing</Link>, 
          tracking the right metrics is crucial for success. Below are the essential KPIs that balance business performance with 
          ethical considerations, ensuring your AI marketing strategies are both effective and responsible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((kpi) => (
          <Link to={kpi.link} key={kpi.id}>
            <Card className="bg-slate-800/80 border-slate-700 hover:border-[#00BFFF] transition-colors group h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700/50 rounded-md group-hover:bg-[#00BFFF]/20 transition-colors">
                    {kpi.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-100 group-hover:text-[#00BFFF] transition-colors">
                    {kpi.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{kpi.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-300 mb-4 italic">
          Balanced measurement frameworks ensure ethical AI creates sustainable business value.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/technical" className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 rounded-md text-blue-300 transition-colors">
            Learn How AI Works
          </Link>
          <Link to="/ai-bias-in-advertising" className="px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-md text-purple-300 transition-colors">
            Explore AI Bias in Advertising
          </Link>
          <Link to="/search-engine-optimization" className="px-4 py-2 bg-green-600/30 hover:bg-green-600/50 rounded-md text-green-300 transition-colors">
            Discover SEO Strategies
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default KPIs;
