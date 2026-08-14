// Content duplication analysis interface
export interface DuplicationIssue {
  type: 'duplicate' | 'near-duplicate' | 'keyword-overlap' | 'internal-competition';
  severity: 'high' | 'medium' | 'low';
  pages: Array<{
    url: string;
    title: string;
    similarity: number;
  }>;
  description: string;
  recommendation: string;
  consolidationStrategy?: 'merge' | 'redirect' | 'canonical' | 'differentiate';
}


/**
 * Sample duplication issues for demonstration
 * In a real implementation, this would come from an automated analysis
 */
export const SAMPLE_DUPLICATION_ISSUES: DuplicationIssue[] = [
  {
    type: 'duplicate',
    severity: 'high',
    pages: [
      { url: '/answer-engine-optimization', title: 'Answer Engine Optimization', similarity: 95 },
      { url: '/complete-aeo-guide-2025', title: 'Complete AEO Guide', similarity: 95 }
    ],
    description: 'These pages contain nearly identical content about Answer Engine Optimization, potentially confusing search engines and users.',
    recommendation: 'Consolidate content into a single comprehensive guide and redirect the other page. Differentiate by making one focus on services and the other on implementation.',
    consolidationStrategy: 'merge'
  },
  {
    type: 'keyword-overlap',
    severity: 'medium',
    pages: [
      { url: '/memphis-digital-marketing', title: 'Memphis Digital Marketing', similarity: 75 },
      { url: '/germantown-digital-marketing', title: 'Germantown Digital Marketing', similarity: 75 }
    ],
    description: 'Both pages target similar keywords for local digital marketing services, creating internal competition.',
    recommendation: 'Differentiate content by focusing on unique local factors, client testimonials, and area-specific case studies.',
    consolidationStrategy: 'differentiate'
  },
  {
    type: 'near-duplicate',
    severity: 'medium',
    pages: [
      { url: '/ai-and-digital-marketing', title: 'AI & Digital Marketing', similarity: 80 },
      { url: '/services/ai-implementation-consulting', title: 'AI Implementation Consulting', similarity: 80 }
    ],
    description: 'Similar content structure and topics with overlapping information about AI in marketing.',
    recommendation: 'Use canonical tags to indicate the primary page and differentiate content focus - one on strategy, one on implementation.',
    consolidationStrategy: 'canonical'
  },
  {
    type: 'internal-competition',
    severity: 'low',
    pages: [
      { url: '/ai-prompt-templates', title: 'AI Prompt Templates', similarity: 60 },
      { url: '/user-experience-prompts', title: 'UX AI Prompts', similarity: 60 },
      { url: '/information-architecture-prompts', title: 'IA AI Prompts', similarity: 60 }
    ],
    description: 'Multiple pages competing for AI prompt-related keywords, though with different focuses.',
    recommendation: 'Create a hub page for AI prompts and make these specialized pages as sub-categories with clear internal linking.',
    consolidationStrategy: 'differentiate'
  }
];
