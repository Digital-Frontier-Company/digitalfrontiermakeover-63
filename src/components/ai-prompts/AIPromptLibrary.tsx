
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const AIPromptLibrary = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const memphisPrompts = [
    {
      category: "Local SEO",
      title: "Memphis Local SEO Content Strategy",
      prompt: "Create a comprehensive local SEO content strategy for a [BUSINESS TYPE] in Memphis, Tennessee. Include 10 blog post topics that target Memphis-specific keywords, local landmark references, and neighborhood-focused content. Consider Memphis culture, local events, and seasonal opportunities. Format as a content calendar with publishing schedule."
    },
    {
      category: "Local SEO", 
      title: "Google My Business Optimization",
      prompt: "Analyze and optimize a Google My Business listing for a [BUSINESS TYPE] located in [MEMPHIS NEIGHBORHOOD]. Provide specific recommendations for business description, services, posts, and Q&A that highlight Memphis local expertise. Include 5 GMB post ideas that reference Memphis landmarks and local events."
    },
    {
      category: "Social Media",
      title: "Memphis Community Engagement Strategy",
      prompt: "Develop a social media engagement strategy for a [BUSINESS TYPE] to connect with the Memphis community. Include 15 post ideas that reference Memphis culture, Beale Street, BBQ scene, blues music, and local sports teams. Create captions that feel authentically Memphis while promoting [BUSINESS SERVICES]."
    },
    {
      category: "Social Media",
      title: "Memphis Event Marketing Campaign",
      prompt: "Create a social media marketing campaign for [EVENT/PROMOTION] targeting Memphis residents. Include platform-specific content for Facebook, Instagram, and LinkedIn that references Memphis neighborhoods, local influencers, and community values. Provide hashtag strategy with Memphis-specific tags."
    },
    {
      category: "Competitor Analysis",
      title: "Memphis Market Competitor Research",
      prompt: "Conduct a comprehensive competitor analysis for [BUSINESS TYPE] in the Memphis market. Identify top 5 competitors, analyze their digital marketing strategies, pricing models, and local market positioning. Highlight opportunities for differentiation in the Memphis market specifically."
    },
    {
      category: "Content Creation",
      title: "Memphis Business Blog Post Generator",
      prompt: "Write a 1,500-word blog post titled '[TOPIC]' for a Memphis [BUSINESS TYPE]. Include references to Memphis culture, local landmarks, and community values. Optimize for SEO with Memphis-related keywords while providing valuable information about [BUSINESS SERVICES]. Include local statistics and Memphis-specific examples."
    },
    {
      category: "Customer Service",
      title: "Memphis Customer FAQ Generator", 
      prompt: "Generate 20 frequently asked questions and detailed answers for a [BUSINESS TYPE] serving Memphis customers. Include questions about Memphis-specific services, local delivery areas, neighborhood coverage, and references to Memphis culture. Format for website FAQ section with local SEO optimization."
    },
    {
      category: "Campaign Planning",
      title: "Memphis Seasonal Marketing Campaign",
      prompt: "Plan a [SEASON] marketing campaign for a [BUSINESS TYPE] in Memphis. Consider Memphis weather patterns, local events calendar, tourist seasons, and community traditions. Include promotional ideas, content themes, and local partnership opportunities. Create timeline with Memphis-specific holidays and events."
    },
    {
      category: "Local SEO",
      title: "Memphis Neighborhood Landing Pages",
      prompt: "Create content outline for neighborhood-specific landing pages targeting [NEIGHBORHOOD] Memphis customers for [BUSINESS TYPE]. Include local landmarks, community features, demographic insights, and services tailored to that area. Optimize for '[BUSINESS TYPE] in [NEIGHBORHOOD] Memphis' keywords."
    },
    {
      category: "Social Media",
      title: "Memphis Influencer Collaboration Strategy",
      prompt: "Identify potential Memphis-based influencers and content creators for [BUSINESS TYPE] collaboration. Include micro-influencers, local celebrities, and community leaders. Provide outreach templates and collaboration ideas that authentically connect with Memphis audiences while promoting [BUSINESS SERVICES]."
    }
  ];

  const generalPrompts = [
    {
      category: "Content Creation",
      title: "Blog Post Idea Generator",
      prompt: "Generate 20 blog post ideas for a [BUSINESS TYPE] targeting [TARGET AUDIENCE]. Include trending topics, evergreen content, and seasonal themes. For each idea, provide a compelling headline, key points to cover, and suggested word count. Focus on topics that drive engagement and conversions."
    },
    {
      category: "Social Media",
      title: "Social Media Content Calendar",
      prompt: "Create a 30-day social media content calendar for [BUSINESS TYPE]. Include post types (educational, promotional, behind-the-scenes, user-generated content), optimal posting times, platform-specific adaptations, and engagement strategies. Provide caption templates and hashtag suggestions for each post."
    },
    {
      category: "Email Marketing",
      title: "Email Newsletter Template",
      prompt: "Write a compelling email newsletter for [BUSINESS TYPE] targeting [AUDIENCE]. Include subject line variations, personalized greeting, valuable content sections, clear call-to-action, and footer. Optimize for mobile viewing and include A/B testing suggestions for better open rates."
    },
    {
      category: "SEO",
      title: "Keyword Research & Strategy",
      prompt: "Conduct keyword research for [BUSINESS TYPE] in [INDUSTRY]. Identify 20 primary keywords, 30 long-tail keywords, and analyze search intent. Provide keyword difficulty assessment, monthly search volume estimates, and content creation recommendations for each keyword cluster."
    },
    {
      category: "Customer Service",
      title: "Customer Support Script Generator",
      prompt: "Create customer support scripts for [BUSINESS TYPE] handling [SPECIFIC ISSUE]. Include greeting, problem identification questions, solution steps, escalation procedures, and closing. Provide variations for phone, email, and live chat interactions with empathetic language."
    },
    {
      category: "Sales",
      title: "Sales Pitch Template",
      prompt: "Develop a persuasive sales pitch for [PRODUCT/SERVICE] targeting [TARGET CUSTOMER]. Include attention-grabbing opening, problem identification, solution presentation, objection handling, and closing techniques. Provide variations for different customer personas and buying stages."
    },
    {
      category: "Content Creation",
      title: "Product Description Optimizer",
      prompt: "Write compelling product descriptions for [PRODUCT] targeting [CUSTOMER TYPE]. Include key features, benefits, technical specifications, and emotional triggers. Optimize for SEO with relevant keywords while maintaining readability. Add urgency elements and social proof suggestions."
    },
    {
      category: "PPC",
      title: "Google Ads Copy Generator",
      prompt: "Create Google Ads copy for [PRODUCT/SERVICE] targeting [KEYWORD]. Include 5 headline variations, 3 description options, ad extensions suggestions, and landing page recommendations. Focus on high click-through rates and quality score optimization."
    },
    {
      category: "Content Creation",
      title: "Video Script Writer",
      prompt: "Write a script for a [VIDEO LENGTH] marketing video about [TOPIC] for [BUSINESS TYPE]. Include hook, problem statement, solution explanation, testimonial placeholder, and call-to-action. Provide scene descriptions, visual cues, and engagement techniques for [PLATFORM]."
    },
    {
      category: "Lead Generation",
      title: "Lead Magnet Content Creator",
      prompt: "Design a lead magnet for [BUSINESS TYPE] targeting [AUDIENCE PAIN POINT]. Create outline for [CONTENT TYPE] including title, chapter breakdown, key takeaways, and promotional copy. Include opt-in form suggestions and follow-up email sequence ideas."
    },
    {
      category: "Social Media",
      title: "Instagram Story Strategy",
      prompt: "Develop an Instagram Stories strategy for [BUSINESS TYPE]. Include 15 story ideas, interactive elements (polls, questions, quizzes), behind-the-scenes content, and highlight categories. Provide templates for consistent branding and engagement boosting techniques."
    },
    {
      category: "Competitor Analysis",
      title: "Competitive Analysis Framework",
      prompt: "Analyze top 5 competitors for [BUSINESS TYPE] in [INDUSTRY]. Examine their pricing strategies, marketing channels, content themes, customer reviews, and unique value propositions. Identify market gaps and opportunities for differentiation."
    },
    {
      category: "Email Marketing",
      title: "Welcome Email Series",
      prompt: "Create a 5-email welcome series for new [BUSINESS TYPE] customers. Include welcome message, company story, product/service highlights, customer success stories, and exclusive offers. Optimize timing, subject lines, and personalization for maximum engagement."
    },
    {
      category: "Content Creation",
      title: "Case Study Template",
      prompt: "Write a detailed case study for [BUSINESS TYPE] showcasing [CLIENT SUCCESS]. Include client background, challenges faced, solution implemented, results achieved, and lessons learned. Use data, quotes, and visuals to make it compelling and credible."
    },
    {
      category: "SEO",
      title: "Local SEO Optimization",
      prompt: "Optimize local SEO for [BUSINESS TYPE] in [CITY]. Include Google My Business optimization, local keyword targeting, citation building strategy, review management, and local content creation ideas. Provide checklist for NAP consistency across directories."
    },
    {
      category: "Social Media",
      title: "LinkedIn Content Strategy",
      prompt: "Develop a LinkedIn content strategy for [BUSINESS TYPE] targeting [PROFESSIONAL AUDIENCE]. Include thought leadership posts, industry insights, company updates, and networking approaches. Provide posting schedule and engagement tactics for B2B lead generation."
    },
    {
      category: "Customer Service",
      title: "FAQ Content Generator",
      prompt: "Generate comprehensive FAQ content for [BUSINESS TYPE]. Include 25 common questions about [PRODUCTS/SERVICES], billing, shipping, returns, and technical support. Provide clear, helpful answers optimized for both customers and search engines."
    },
    {
      category: "Sales",
      title: "Cold Email Template",
      prompt: "Write effective cold email templates for [BUSINESS TYPE] targeting [PROSPECT TYPE]. Include subject line options, personalized opening, value proposition, credibility builders, and clear call-to-action. Provide follow-up sequence for non-responders."
    },
    {
      category: "Content Creation",
      title: "Podcast Episode Planning",
      prompt: "Plan a podcast episode about [TOPIC] for [TARGET AUDIENCE]. Include episode outline, talking points, guest interview questions, sponsor placement opportunities, and promotion strategy. Provide show notes template and key takeaways summary."
    },
    {
      category: "PPC",
      title: "Facebook Ads Strategy",
      prompt: "Create Facebook Ads strategy for [BUSINESS TYPE] promoting [PRODUCT/SERVICE]. Include audience targeting, ad creative concepts, budget allocation, campaign objectives, and performance metrics. Provide A/B testing recommendations for optimization."
    },
    {
      category: "Content Creation",
      title: "White Paper Outline",
      prompt: "Create an outline for a white paper on [INDUSTRY TOPIC] for [BUSINESS TYPE]. Include executive summary, problem statement, research methodology, findings, recommendations, and conclusion. Provide content depth suggestions and credibility elements."
    },
    {
      category: "Email Marketing",
      title: "Re-engagement Campaign",
      prompt: "Design a re-engagement email campaign for inactive [BUSINESS TYPE] subscribers. Include win-back offers, content highlights, feedback requests, and unsubscribe alternatives. Provide subject line variations and segmentation strategies for better results."
    },
    {
      category: "Social Media",
      title: "TikTok Content Ideas",
      prompt: "Generate 20 TikTok content ideas for [BUSINESS TYPE] targeting [AUDIENCE AGE]. Include trending hashtags, popular audio suggestions, educational content, behind-the-scenes videos, and user-generated content campaigns. Focus on authentic, engaging content."
    },
    {
      category: "SEO",
      title: "Technical SEO Audit",
      prompt: "Perform a technical SEO audit for [BUSINESS TYPE] website. Check site speed, mobile responsiveness, crawlability, indexation issues, URL structure, and internal linking. Provide prioritized recommendations with implementation difficulty and impact assessment."
    },
    {
      category: "Customer Service",
      title: "Complaint Resolution Process",
      prompt: "Design a complaint resolution process for [BUSINESS TYPE]. Include initial response templates, escalation procedures, resolution timelines, and follow-up protocols. Provide training materials for customer service team and quality assurance measures."
    },
    {
      category: "Content Creation",
      title: "Infographic Content Planner",
      prompt: "Plan an infographic about [TOPIC] for [BUSINESS TYPE]. Include data points, visual flow, color scheme suggestions, and promotional copy. Provide distribution strategy across social media, blog, and email marketing channels."
    },
    {
      category: "Sales",
      title: "Objection Handling Guide",
      prompt: "Create an objection handling guide for [BUSINESS TYPE] sales team. Include common objections about price, timing, competition, and authority. Provide response strategies, supporting data, and techniques to move prospects toward purchase decision."
    },
    {
      category: "Email Marketing",
      title: "Abandoned Cart Recovery",
      prompt: "Design an abandoned cart email sequence for [ECOMMERCE BUSINESS]. Include reminder emails, incentive offers, product recommendations, and urgency elements. Provide timing strategy and personalization techniques to maximize recovery rates."
    },
    {
      category: "Content Creation",
      title: "Webinar Planning Template",
      prompt: "Plan a webinar on [TOPIC] for [BUSINESS TYPE]. Include presentation outline, audience engagement activities, promotional timeline, registration page copy, and follow-up strategy. Provide technical requirements and best practices for delivery."
    },
    {
      category: "Social Media",
      title: "User-Generated Content Campaign",
      prompt: "Launch a user-generated content campaign for [BUSINESS TYPE]. Include campaign hashtag, participation incentives, content guidelines, judging criteria, and promotional strategy. Provide legal considerations and content moderation guidelines."
    },
    {
      category: "SEO",
      title: "Content Gap Analysis",
      prompt: "Perform content gap analysis for [BUSINESS TYPE] against top competitors. Identify missing topics, keyword opportunities, and content formats. Provide content creation roadmap with priority levels and resource requirements for each piece."
    },
    {
      category: "Customer Service",
      title: "Chatbot Conversation Flow",
      prompt: "Design chatbot conversation flows for [BUSINESS TYPE] customer service. Include greeting, intent recognition, solution paths, and human handoff triggers. Provide response templates for common queries and escalation procedures."
    },
    {
      category: "Sales",
      title: "Referral Program Design",
      prompt: "Create a referral program for [BUSINESS TYPE]. Include incentive structure, referral process, promotional materials, tracking methods, and success metrics. Provide implementation timeline and legal considerations for program terms."
    },
    {
      category: "Content Creation",
      title: "Newsletter Content Strategy",
      prompt: "Develop a newsletter content strategy for [BUSINESS TYPE]. Include content pillars, frequency schedule, subscriber segmentation, and engagement tactics. Provide templates for different newsletter sections and growth strategies."
    },
    {
      category: "PPC",
      title: "Landing Page Optimization",
      prompt: "Optimize landing page for [BUSINESS TYPE] promoting [OFFER]. Include headline variations, value proposition, trust signals, and call-to-action placement. Provide A/B testing plan and conversion rate optimization recommendations."
    },
    {
      category: "Social Media",
      title: "Crisis Communication Plan",
      prompt: "Develop a crisis communication plan for [BUSINESS TYPE] social media. Include response templates, escalation procedures, monitoring protocols, and recovery strategies. Provide team roles, approval processes, and post-crisis analysis framework."
    },
    {
      category: "Email Marketing",
      title: "Customer Onboarding Sequence",
      prompt: "Create a customer onboarding email sequence for [BUSINESS TYPE]. Include account setup guidance, feature tutorials, success tips, and support resources. Provide timing optimization and engagement tracking for sequence improvement."
    },
    {
      category: "Content Creation",
      title: "Thought Leadership Articles",
      prompt: "Write thought leadership articles for [BUSINESS TYPE] executives on [INDUSTRY TREND]. Include expert insights, data analysis, future predictions, and actionable advice. Provide distribution strategy for maximum industry visibility and credibility building."
    },
    {
      category: "SEO",
      title: "Featured Snippet Optimization",
      prompt: "Optimize content for featured snippets targeting [KEYWORD] for [BUSINESS TYPE]. Include question-based content structure, concise answers, and supporting details. Provide formatting guidelines and tracking methods for snippet capture."
    },
    {
      category: "Customer Service",
      title: "Knowledge Base Content",
      prompt: "Create comprehensive knowledge base content for [BUSINESS TYPE]. Include article categories, search optimization, user journey mapping, and content maintenance procedures. Provide templates for different article types and user feedback integration."
    },
    {
      category: "Sales",
      title: "Proposal Template",
      prompt: "Design a winning proposal template for [BUSINESS TYPE] targeting [CLIENT TYPE]. Include executive summary, problem analysis, solution overview, timeline, pricing, and terms. Provide customization guidelines and follow-up strategies."
    },
    {
      category: "Content Creation",
      title: "Annual Report Content",
      prompt: "Create content for [BUSINESS TYPE] annual report. Include executive summary, financial highlights, achievements, challenges, and future outlook. Provide visual suggestions, stakeholder messaging, and distribution recommendations."
    },
    {
      category: "Social Media",
      title: "Employee Advocacy Program",
      prompt: "Launch an employee advocacy program for [BUSINESS TYPE]. Include participation guidelines, content sharing protocols, training materials, and incentive structures. Provide social media best practices and brand voice guidelines for employees."
    },
    {
      category: "Email Marketing",
      title: "Holiday Campaign Strategy",
      prompt: "Plan holiday email campaigns for [BUSINESS TYPE] during [HOLIDAY SEASON]. Include promotional calendar, offer strategies, design themes, and audience segmentation. Provide performance benchmarks and optimization techniques for seasonal campaigns."
    },
    {
      category: "Content Creation",
      title: "Corporate Blog Strategy",
      prompt: "Develop a corporate blog strategy for [BUSINESS TYPE]. Include content themes, posting frequency, author guidelines, and SEO optimization. Provide editorial calendar template, promotion tactics, and performance measurement framework."
    },
    {
      category: "SEO",
      title: "Voice Search Optimization",
      prompt: "Optimize [BUSINESS TYPE] website for voice search. Include conversational keyword research, FAQ optimization, local search considerations, and structured data implementation. Provide content formatting guidelines for voice assistant responses."
    },
    {
      category: "Customer Service",
      title: "Customer Feedback System",
      prompt: "Design a customer feedback collection system for [BUSINESS TYPE]. Include survey templates, feedback channels, response protocols, and improvement implementation processes. Provide analysis methods and action plan development guidelines."
    },
    {
      category: "Sales",
      title: "Upselling Strategy",
      prompt: "Create an upselling strategy for [BUSINESS TYPE] existing customers. Include product/service recommendations, timing optimization, communication channels, and success metrics. Provide training materials and ethical selling guidelines."
    },
    {
      category: "Content Creation",
      title: "Interactive Content Ideas",
      prompt: "Generate interactive content ideas for [BUSINESS TYPE] targeting [AUDIENCE]. Include quizzes, polls, calculators, and assessments. Provide engagement strategies, lead capture methods, and content promotion tactics for maximum participation."
    },
    {
      category: "Social Media",
      title: "Community Building Strategy",
      prompt: "Build an online community strategy for [BUSINESS TYPE]. Include platform selection, community guidelines, engagement activities, and moderation policies. Provide growth tactics, content curation methods, and member retention strategies."
    }
  ];

  const allPrompts = [...memphisPrompts, ...generalPrompts];

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(index);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Complete AI Prompt Library</h2>
      <p className="text-slate-300 text-lg mb-8">
        Copy and paste these proven ChatGPT prompts for marketing success. Replace bracketed placeholders with your specific business details.
      </p>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 text-slate-100">Memphis-Specific Marketing Prompts</h3>
        <div className="space-y-6">
          {memphisPrompts.map((item, index) => (
            <Card key={index} className="border-slate-800 bg-slate-900/80">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-semibold text-slate-100">{item.title}</h4>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.prompt, index)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    {copiedPrompt === index ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedPrompt === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                
                <div className="bg-slate-800/40 p-4 rounded-lg">
                  <p className="text-slate-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                    {item.prompt}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-slate-100">Universal Business AI Prompts</h3>
        <p className="text-slate-300 mb-6">
          These prompts work for any business, anywhere. Customize the bracketed placeholders for your specific needs.
        </p>
        <div className="space-y-6">
          {generalPrompts.map((item, index) => {
            const promptIndex = memphisPrompts.length + index;
            return (
              <Card key={promptIndex} className="border-slate-800 bg-slate-900/80">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full mb-2">
                        {item.category}
                      </span>
                      <h4 className="text-xl font-semibold text-slate-100">{item.title}</h4>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.prompt, promptIndex)}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                    >
                      {copiedPrompt === promptIndex ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copiedPrompt === promptIndex ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <p className="text-slate-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                      {item.prompt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIPromptLibrary;
