import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Code, TrendingUp, Users, Zap, Shield, Star, MapPin } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";

const TeamExpertise = () => {
  const location = useLocation();

  const teamMembers = [
    {
      name: "David Thompson",
      title: "CEO & Founder",
      image: "/lovable-uploads/bdef0584-bc16-4946-90f8-c741502dc157.png",
      credentials: [
        "Computer Science Degree - University of Memphis",
        "Google Analytics Certified",
        "HubSpot Inbound Marketing Certified",
        "6+ Years Digital Marketing Experience",
        "Memphis Business Leader Award 2024"
      ],
      expertise: [
        "Answer Engine Optimization (AEO)",
        "AI Marketing Strategy",
        "Local SEO Memphis Market",
        "B2B Content Marketing",
        "Marketing Automation"
      ],
      bio: "Memphis native with deep roots in the Mid-South business community. David founded Digital Frontier to bridge the gap between cutting-edge AI technology and practical business applications. His combination of technical expertise and local market knowledge makes him uniquely qualified to help Memphis businesses succeed in the digital age."
    },
    {
      name: "Sarah Mitchell",
      title: "Director of SEO Strategy",
      image: "/lovable-uploads/7cb44db8-2a71-4927-bc07-e05c54261377.png",
      credentials: [
        "SEMrush SEO Toolkit Certified",
        "Moz SEO Essentials Certified",
        "Google Search Console Expert",
        "5+ Years Local SEO Experience",
        "Shelby County Business Association Member"
      ],
      expertise: [
        "Local SEO Optimization",
        "Technical SEO Audits", 
        "Keyword Research & Strategy",
        "Google My Business Optimization",
        "Competitive Analysis"
      ],
      bio: "Specialized in local SEO with extensive experience helping Memphis area businesses dominate local search results. Sarah's data-driven approach and deep understanding of Google's algorithms have helped 150+ local businesses achieve top rankings."
    },
    {
      name: "Marcus Johnson",
      title: "AI Marketing Specialist",
      image: "/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png",
      credentials: [
        "Machine Learning Certificate - Stanford Online",
        "OpenAI GPT Certified Developer",
        "Python Programming Expert",
        "4+ Years AI Implementation",
        "Tech Innovation Award 2024"
      ],
      expertise: [
        "Generative Engine Optimization (GEO)",
        "AI Overviews Optimization",
        "ChatGPT Marketing Integration",
        "Voice Search Optimization",
        "AI Content Strategy"
      ],
      bio: "Leading expert in AI marketing applications with proven success in getting businesses featured in ChatGPT responses and Google AI Overviews. Marcus stays on the cutting edge of AI developments to ensure our clients benefit from the latest innovations."
    }
  ];

  const certifications = [
    {
      name: "Google Analytics Certified",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      description: "Advanced web analytics and conversion tracking"
    },
    {
      name: "HubSpot Inbound Marketing",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      description: "Comprehensive inbound marketing methodology"
    },
    {
      name: "SEMrush SEO Toolkit",
      icon: <Award className="w-6 h-6 text-green-400" />,
      description: "Advanced SEO analysis and optimization"
    },
    {
      name: "OpenAI Development Partner",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      description: "Certified in AI integration and optimization"
    }
  ];

  const awards = [
    {
      title: "Memphis Business Leader Award 2024",
      organization: "Memphis Chamber of Commerce",
      year: "2024"
    },
    {
      title: "Tech Innovation Award",
      organization: "Tennessee Technology Association", 
      year: "2024"
    },
    {
      title: "Rising Star Digital Agency",
      organization: "Mid-South Marketing Association",
      year: "2024"
    }
  ];

  return (
    <PageLayout
      title="Expert Team & Credentials | Memphis AI Marketing Agency Leadership | Digital Frontier"
      subtitle="Meet our certified team of Memphis AI marketing experts with proven credentials in SEO, digital marketing, and cutting-edge AI optimization strategies"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2024-12-24"
      modifiedDate="2024-12-24"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Certified Marketing Experts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Meet Our Expert Team
            <span className="block text-blue-400">Proven Credentials & Memphis Expertise</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our certified team combines deep Memphis market knowledge with cutting-edge AI marketing expertise. 
            Every team member holds industry certifications and has proven success helping Mid-South businesses grow.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Leadership Team
        </h2>
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Profile Image & Basic Info */}
                  <div className="text-center">
                    <LazyImage
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-48 h-48 mx-auto rounded-lg object-cover mb-4"
                      displayWidth={192}
                      displayHeight={192}
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{member.title}</p>
                    <Badge variant="outline" className="text-green-300 border-green-300">
                      <MapPin className="w-3 h-3 mr-1" />
                      Memphis Expert
                    </Badge>
                  </div>

                  {/* Credentials & Expertise */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Credentials & Certifications
                      </h4>
                      <ul className="space-y-2">
                        {member.credentials.map((credential, credIndex) => (
                          <li key={credIndex} className="flex items-center gap-2 text-slate-300">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Core Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-slate-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Background
                      </h4>
                      <p className="text-slate-300 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Certifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Company Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-300">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{award.title}</h3>
                  <p className="text-blue-400 font-medium">{award.organization}</p>
                  <p className="text-slate-300 text-sm">{award.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Trust Indicators */}
      <section className="mb-16">
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Why Memphis Businesses Trust Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-300">Combined Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-slate-300">Industry Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-slate-300">Memphis Businesses Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-slate-300">Client Satisfaction Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <Card className="bg-blue-900/20 border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Work With Certified Marketing Experts
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Partner with a team that combines proven credentials with deep Memphis market expertise. 
              Let's discuss how our certified team can help your business dominate local search results.
            </p>
            
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Your Expert Consultation →
            </a>
          </CardContent>
        </Card>
      </section>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Frontier Company",
            "description": "Certified Memphis AI marketing agency team with proven expertise in SEO, digital marketing, and AI optimization",
            "url": "https://digitalfrontier.app/team-expertise",
            "logo": "https://digitalfrontier.app/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Memphis",
              "addressRegion": "TN",
              "addressCountry": "US"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "David Thompson",
                "jobTitle": "CEO & Founder",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Digital Frontier Company"
                }
              },
              {
                "@type": "Person", 
                "name": "Sarah Mitchell",
                "jobTitle": "Director of SEO Strategy",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Digital Frontier Company"
                }
              },
              {
                "@type": "Person",
                "name": "Marcus Johnson", 
                "jobTitle": "AI Marketing Specialist",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Digital Frontier Company"
                }
              }
            ],
            "award": [
              "Memphis Business Leader Award 2024",
              "Tech Innovation Award 2024",
              "Rising Star Digital Agency 2024"
            ]
          })
        }}
      />
    </PageLayout>
  );
};

export default TeamExpertise;