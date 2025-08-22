
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CheckCircle } from "lucide-react";

const IAPromptLibrary = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const iaPrompts = [
    {
      title: "Information Architecture with User Flow Mapping",
      prompt: "Map out user flows to identify potential bottlenecks and optimize the website's structure. Analyze the current user journey for [WEBSITE/BUSINESS TYPE] and create a comprehensive user flow map that identifies pain points, drop-off areas, and optimization opportunities. Include entry points, decision nodes, and conversion paths. Provide recommendations for improving the information architecture based on user behavior patterns."
    },
    {
      title: "Information Architecture through Card Sorting",
      prompt: "Conduct card sorting exercises to gather insights and organize content based on user preferences and mental models. Design a card sorting study for [WEBSITE/BUSINESS TYPE] with [NUMBER] content items. Create categories that reflect user mental models, provide instructions for participants, and analyze results to inform site structure decisions. Include both open and closed card sorting methodologies."
    },
    {
      title: "Information Architecture with Hierarchical Taxonomies",
      prompt: "Develop hierarchical taxonomies to categorize and organize information, improving findability and navigation. Create a multi-level taxonomy for [WEBSITE/BUSINESS TYPE] that includes primary categories, subcategories, and content tags. Ensure logical relationships between levels and provide clear naming conventions that users can easily understand and navigate."
    },
    {
      title: "Information Architecture via Content Chunking",
      prompt: "Chunk content into smaller, more digestible sections to enhance readability and improve user experience. Analyze [CONTENT TYPE/PAGE] and break it down into logical chunks using headings, bullet points, and visual separators. Optimize for scanability, cognitive load reduction, and mobile-friendly consumption. Include recommendations for content hierarchy and formatting."
    },
    {
      title: "Information Architecture with Faceted Navigation",
      prompt: "Implement faceted navigation to allow users to filter and refine search results based on specific attributes or criteria. Design a faceted navigation system for [PRODUCT/CONTENT CATEGORY] that includes relevant filters such as [FILTER OPTIONS]. Create intuitive filter combinations and provide clear visual feedback for active filters and result counts."
    },
    {
      title: "Information Architecture through Content Inventory",
      prompt: "Conduct a comprehensive content inventory to assess the quality, relevance, and structure of existing content. Audit all content on [WEBSITE] and create a spreadsheet documenting page URLs, titles, content types, word counts, last updated dates, and quality scores. Identify outdated content, gaps, and consolidation opportunities for improved site architecture."
    },
    {
      title: "Information Architecture with Breadcrumb Navigation",
      prompt: "Incorporate breadcrumb navigation to provide users with clear paths and improve overall website navigation. Design breadcrumb systems for [WEBSITE TYPE] that show hierarchical relationships, current location, and easy navigation back to parent pages. Include schema markup recommendations and best practices for different page types and user scenarios."
    },
    {
      title: "Information Architecture via Content Hierarchy Analysis",
      prompt: "Analyze the content hierarchy to ensure important information is prominently displayed and easily accessible. Evaluate [WEBSITE/PAGE] content hierarchy and create recommendations for improving information priority, visual hierarchy, and user attention flow. Include analysis of heading structures, content placement, and call-to-action positioning."
    },
    {
      title: "Information Architecture with Progressive Disclosure",
      prompt: "Implement progressive disclosure techniques to reveal information gradually, reducing cognitive overload and improving user engagement. Design a progressive disclosure system for [COMPLEX CONTENT/PROCESS] that reveals information based on user needs and interaction levels. Include expand/collapse sections, tabbed content, and stepped processes."
    },
    {
      title: "Information Architecture through Persona-based Scenarios",
      prompt: "Create user personas and develop scenarios to guide the organization and presentation of content based on user needs. Develop 3-5 user personas for [BUSINESS TYPE] including demographics, goals, pain points, and technical proficiency. Create user scenarios that inform content organization, navigation design, and information prioritization strategies."
    },
    {
      title: "Information Architecture with Mobile-first Design",
      prompt: "Prioritize mobile-friendly information architecture to ensure a seamless user experience across different devices. Redesign [WEBSITE] information architecture with mobile-first principles, including collapsible navigation, thumb-friendly interactions, and progressive enhancement for larger screens. Consider touch targets, screen real estate, and mobile user behavior patterns."
    },
    {
      title: "Information Architecture via Information Scent",
      prompt: "Enhance information scent by using clear and descriptive labels, headings, and navigation elements to guide users through the website. Improve information scent for [WEBSITE SECTION] by creating descriptive labels, clear headings, and intuitive navigation cues that help users predict what they'll find. Include link text optimization and contextual clues."
    },
    {
      title: "Information Architecture with Content Siloing",
      prompt: "Group related content into distinct silos to improve website structure and help users find information more easily. Create content silos for [WEBSITE/BUSINESS TYPE] that group related topics, products, or services. Design internal linking strategies within silos and establish clear relationships between different content groups for better SEO and user navigation."
    },
    {
      title: "Information Architecture through Heatmap Analysis",
      prompt: "Analyze heatmaps to identify user behavior patterns and optimize the placement and visibility of key information. Review heatmap data for [WEBSITE/PAGE] and identify high and low engagement areas. Provide recommendations for relocating important content, improving call-to-action placement, and optimizing page layout based on user interaction patterns."
    },
    {
      title: "Information Architecture with Contextual Linking",
      prompt: "Incorporate contextual links within content to provide additional information and facilitate seamless navigation. Develop a contextual linking strategy for [CONTENT TYPE] that provides relevant internal links, related articles, and supplementary resources. Create guidelines for anchor text, link placement, and maintaining context while encouraging exploration."
    },
    {
      title: "Information Architecture via Content Mapping",
      prompt: "Map content to specific user goals or tasks to ensure relevant information is easily accessible and logically organized. Create a content map for [WEBSITE/BUSINESS TYPE] that aligns content with user goals, task completion, and conversion paths. Include content gaps, redundancies, and optimization opportunities for better user task completion."
    },
    {
      title: "Information Architecture with Site Search Optimization",
      prompt: "Optimize site search functionality by refining search algorithms, enhancing search filters, and improving search result relevance. Improve site search for [WEBSITE] by analyzing search queries, optimizing result ranking, implementing autocomplete, and providing search filters. Include recommendations for search result presentation and user guidance for better results."
    },
    {
      title: "Information Architecture through Content Clustering",
      prompt: "Cluster related content together based on common themes or topics to simplify navigation and enhance discoverability. Analyze [WEBSITE] content and create topic clusters that group related articles, products, or services. Design navigation systems that highlight these clusters and create clear pathways between related content for improved user experience."
    },
    {
      title: "Information Architecture with Error Prevention",
      prompt: "Anticipate user errors and provide clear instructions, feedback, and error prevention mechanisms to improve user experience. Design error prevention strategies for [WEBSITE/PROCESS] including form validation, helpful instructions, progress indicators, and recovery options. Create user-friendly error messages and guidance for common mistakes."
    },
    {
      title: "Information Architecture via Content Gap Analysis",
      prompt: "Identify content gaps by analyzing user needs and expectations, and develop a plan to fill those gaps effectively. Conduct a content gap analysis for [WEBSITE/BUSINESS TYPE] by comparing current content against user needs, competitor offerings, and search demand. Prioritize content creation opportunities and create a roadmap for filling identified gaps."
    },
    {
      title: "Information Architecture with Homepage Optimization",
      prompt: "Optimize the homepage layout and structure to provide a clear overview of the website's content and direct users to key sections. Redesign [WEBSITE] homepage to improve user orientation, highlight key content areas, and provide clear navigation paths. Include value proposition communication, key action promotion, and intuitive section access."
    },
    {
      title: "Information Architecture via Content Personalization",
      prompt: "Implement content personalization based on user preferences and behavior to enhance relevance and engagement. Design a content personalization strategy for [WEBSITE/BUSINESS TYPE] that adapts content presentation, recommendations, and navigation based on user behavior, preferences, and demographic data. Include implementation approaches and measurement strategies."
    },
    {
      title: "Information Architecture with Task-based Navigation",
      prompt: "Design navigation menus based on user tasks and goals to provide a more intuitive browsing experience. Create task-based navigation for [WEBSITE/BUSINESS TYPE] that organizes content around what users want to accomplish rather than internal business structure. Include primary task identification, navigation labeling, and user flow optimization."
    },
    {
      title: "Information Architecture through User Testing",
      prompt: "Conduct user testing sessions to gather insights and refine the website's information architecture based on user feedback. Design user testing protocols for [WEBSITE] information architecture including task scenarios, success metrics, and feedback collection methods. Create testing scripts and analysis frameworks for iterative improvements."
    },
    {
      title: "Information Architecture with Contextual Help",
      prompt: "Provide contextual help and guidance throughout the website to assist users in finding and understanding relevant information. Implement contextual help systems for [WEBSITE/PROCESS] including tooltips, help overlays, guided tours, and just-in-time assistance. Design help content that appears when and where users need it most."
    },
    {
      title: "Information Architecture via Content Categorization",
      prompt: "Categorize content based on user needs and mental models to improve discoverability and facilitate information retrieval. Develop content categorization systems for [WEBSITE/BUSINESS TYPE] that reflect user mental models and search patterns. Create category hierarchies, tagging systems, and cross-references that make content easy to find and browse."
    },
    {
      title: "Information Architecture with Intuitive Iconography",
      prompt: "Use intuitive and universally recognized icons to enhance navigation and improve user comprehension. Design an iconography system for [WEBSITE/APPLICATION] that uses recognizable symbols to support navigation and content understanding. Include icon guidelines, accessibility considerations, and cultural sensitivity for global audiences."
    },
    {
      title: "Information Architecture through Task Flows",
      prompt: "Identify common user tasks and create task flows to guide users through a series of steps for successful completion. Map task flows for [WEBSITE/BUSINESS PROCESS] including user entry points, decision points, required actions, and success indicators. Optimize flows for efficiency, clarity, and error reduction."
    },
    {
      title: "Information Architecture with Content Prioritization",
      prompt: "Prioritize content based on user needs, business goals, and relevance to ensure important information is prominently displayed. Create content prioritization framework for [WEBSITE/BUSINESS TYPE] that balances user needs with business objectives. Include scoring systems, placement strategies, and regular review processes for maintaining optimal content hierarchy."
    },
    {
      title: "Information Architecture via User Feedback Integration",
      prompt: "Integrate user feedback mechanisms, such as surveys or feedback forms, to continuously improve the website's information architecture. Design feedback collection systems for [WEBSITE] that gather insights about navigation difficulties, content findability, and user satisfaction. Include feedback analysis and implementation processes for ongoing improvements."
    },
    {
      title: "Information Architecture with Intuitive Navigation Labels",
      prompt: "Use clear and concise navigation labels that accurately represent the content and guide users to relevant sections. Optimize navigation labels for [WEBSITE/BUSINESS TYPE] using user-friendly language, avoiding jargon, and ensuring labels accurately represent destination content. Include label testing methodologies and refinement processes."
    },
    {
      title: "Information Architecture through Content Repurposing",
      prompt: "Repurpose existing content into different formats to cater to different user preferences and increase engagement. Develop content repurposing strategy for [CONTENT TYPE/WEBSITE] that transforms existing content into videos, infographics, podcasts, and interactive formats. Include format selection criteria and distribution strategies."
    },
    {
      title: "Information Architecture with Accessibility Considerations",
      prompt: "Ensure the website's information architecture complies with accessibility guidelines to provide equal access to all users. Audit [WEBSITE] information architecture for accessibility compliance including screen reader compatibility, keyboard navigation, color contrast, and cognitive accessibility. Provide WCAG 2.1 compliance recommendations."
    },
    {
      title: "Information Architecture via Content Filtering",
      prompt: "Implement filtering options to allow users to refine and narrow down content based on specific criteria or attributes. Design content filtering systems for [WEBSITE/CONTENT TYPE] that help users find relevant information quickly. Include filter types, user interface design, and search result optimization for filtered content."
    },
    {
      title: "Information Architecture with Content Versioning",
      prompt: "Implement version control for content updates to maintain consistency and ensure users access the most up-to-date information. Create content versioning systems for [WEBSITE/BUSINESS TYPE] including update tracking, change notifications, and historical content management. Include workflows for content review and publication."
    },
    {
      title: "Information Architecture through User Journey Mapping",
      prompt: "Map out user journeys to understand their navigation paths and optimize the website's information architecture accordingly. Create comprehensive user journey maps for [WEBSITE/BUSINESS TYPE] including touchpoints, emotions, pain points, and opportunities. Design information architecture improvements based on journey insights."
    },
    {
      title: "Information Architecture with Visual Hierarchy",
      prompt: "Use visual cues, such as font size, color, and placement, to establish a clear hierarchy of information and guide user attention. Optimize visual hierarchy for [WEBSITE/PAGE TYPE] using typography, color, spacing, and layout to guide user attention to important information. Include responsive design considerations and accessibility requirements."
    },
    {
      title: "Information Architecture via Content Tagging",
      prompt: "Tag content with relevant keywords and metadata to improve searchability and facilitate content discovery. Develop content tagging strategy for [WEBSITE/BUSINESS TYPE] including tag taxonomy, tagging guidelines, and tag-based navigation systems. Create processes for consistent tagging and tag maintenance."
    },
    {
      title: "Information Architecture with Content Duplication Management",
      prompt: "Identify and address content duplication issues to maintain a cohesive and user-friendly information architecture. Audit [WEBSITE] for duplicate content including similar pages, redundant information, and overlapping topics. Provide consolidation strategies, redirect planning, and content optimization recommendations."
    },
    {
      title: "Information Architecture through Error Messaging",
      prompt: "Provide clear and helpful error messages that guide users back on track when they encounter navigation or content-related errors. Design error messaging systems for [WEBSITE/APPLICATION] including 404 pages, form errors, and system failures. Create helpful, actionable error messages that guide users toward successful task completion."
    },
    {
      title: "Information Architecture with Content Archiving",
      prompt: "Implement a content archiving system to manage outdated or irrelevant content and maintain a streamlined information architecture. Create content archiving strategy for [WEBSITE/BUSINESS TYPE] including archival criteria, archive organization, and retrieval systems. Balance content preservation with site performance and user experience."
    },
    {
      title: "Information Architecture through Content Gap Analysis",
      prompt: "Identify gaps in your content coverage and structure to improve the overall user experience. Conduct comprehensive content gap analysis for [WEBSITE/BUSINESS TYPE] comparing current content against user needs, competitor content, and industry standards. Prioritize gap-filling opportunities and create implementation roadmaps."
    },
    {
      title: "Information Architecture with Multilingual Support",
      prompt: "Create a language-specific structure to accommodate multilingual content and optimize user navigation. Design multilingual information architecture for [WEBSITE/BUSINESS TYPE] including language selection, content organization, and navigation adaptation for different languages and cultures. Include technical implementation and maintenance considerations."
    },
    {
      title: "Information Architecture via Contextual Search",
      prompt: "Integrate contextual search functionality to provide users with more targeted and relevant search results. Implement contextual search for [WEBSITE/CONTENT TYPE] that provides results based on user location, previous searches, and current page context. Include search result ranking and presentation optimization."
    },
    {
      title: "Information Architecture with Progressive Disclosure",
      prompt: "Gradually reveal content to users based on their interaction and level of interest. Design progressive disclosure systems for [COMPLEX CONTENT/WEBSITE] that reveal information incrementally based on user engagement. Include interaction design, content layering, and user guidance strategies."
    },
    {
      title: "Information Architecture through Visual Sitemaps",
      prompt: "Develop visual sitemaps to visualize the website's structure and facilitate content organization. Create comprehensive visual sitemaps for [WEBSITE/BUSINESS TYPE] that show page hierarchy, content relationships, and user pathways. Include site map optimization for both users and search engines."
    },
    {
      title: "Information Architecture with Content Relevance Assessment",
      prompt: "Regularly assess the relevance of your content to ensure it aligns with user needs and interests. Develop content relevance assessment framework for [WEBSITE/BUSINESS TYPE] including relevance criteria, assessment frequency, and content optimization strategies. Create processes for maintaining content currency and usefulness."
    },
    {
      title: "Information Architecture via Conversational Interfaces",
      prompt: "Incorporate conversational interfaces to assist users in navigating and retrieving information more efficiently. Design conversational interfaces for [WEBSITE/BUSINESS TYPE] including chatbots, voice interfaces, and interactive help systems. Create conversation flows that guide users to relevant information and complete tasks efficiently."
    },
    {
      title: "Information Architecture with Content Metadata Optimization",
      prompt: "Optimize content metadata to improve search engine visibility and enhance user discoverability. Audit and optimize metadata for [WEBSITE/CONTENT TYPE] including title tags, meta descriptions, structured data, and internal tagging systems. Create metadata standards and maintenance processes for consistent optimization."
    },
    {
      title: "Information Architecture through Content Modularity",
      prompt: "Break down content into modular components that can be easily rearranged and repurposed across different sections. Design modular content systems for [WEBSITE/BUSINESS TYPE] that allow flexible content arrangement, reuse, and maintenance. Include component libraries, content templates, and governance frameworks for modular content management."
    }
  ];

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
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Information Architecture AI Prompt Library</h2>
      <p className="text-slate-300 text-lg mb-8">
        Copy and paste these proven ChatGPT prompts to optimize your website's information architecture. 
        Replace bracketed placeholders with your specific website or business details.
      </p>
      
      <div className="space-y-6">
        {iaPrompts.map((item, index) => (
          <Card key={index} className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-indigo-900/30 text-indigo-300 text-sm rounded-full mb-2">
                    Information Architecture
                  </span>
                  <h4 className="text-xl font-semibold text-slate-100">{item.title}</h4>
                </div>
                <button
                  onClick={() => copyToClipboard(item.prompt, index)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors ml-4 flex-shrink-0"
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
    </section>
  );
};

export default IAPromptLibrary;
