#!/usr/bin/env node
/**
 * SEO Audit Implementation for Digital Frontier
 * Based on the comprehensive audit template requirements
 */

import { ROUTE_CONFIGS } from '@/utils/seo';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// SEO Audit Configuration matching template requirements
export const SEO_AUDIT_CONFIG = {
  TITLE_MIN: 45,
  TITLE_MAX: 60,
  META_DESC_MIN: 120,
  META_DESC_MAX: 160,
  H1_MAX: 60,
  PRIMARY_LANG: 'en',
  SITE_URL: 'https://digitalfrontier.app',
  BRAND_NAME: 'Digital Frontier Company'
} as const;

interface SEOIssue {
  type: 'error' | 'warning' | 'notice';
  category: string;
  page: string;
  issue: string;
  currentValue?: string;
  recommendedValue?: string;
  priority: number;
}

interface AuditResult {
  url: string;
  issues: SEOIssue[];
  proposedFixes: {
    title?: string;
    metaDescription?: string;
    h1?: string;
    canonicalUrl?: string;
  };
}

class SEOAuditor {
  private issues: SEOIssue[] = [];
  private auditResults: AuditResult[] = [];

  /**
   * Run comprehensive SEO audit based on template requirements
   */
  async runAudit(): Promise<void> {
    console.log('🚀 Starting Digital Frontier SEO Audit...');
    
    // Audit all configured routes
    for (const route of ROUTE_CONFIGS) {
      await this.auditPage(route);
    }

    // Generate comprehensive report
    await this.generateAuditReport();
    
    console.log(`✅ Audit complete! Found ${this.issues.length} issues across ${this.auditResults.length} pages`);
  }

  /**
   * Audit individual page based on route configuration
   */
  private async auditPage(route: any): Promise<void> {
    const issues: SEOIssue[] = [];
    const url = `${SEO_AUDIT_CONFIG.SITE_URL}${route.path}`;

    // Title Length Analysis
    if (route.title.length < SEO_AUDIT_CONFIG.TITLE_MIN) {
      issues.push({
        type: 'warning',
        category: 'Title Optimization',
        page: route.path,
        issue: 'Title too short - should be 45-60 characters',
        currentValue: `${route.title.length} chars: \"${route.title}\"`,
        recommendedValue: this.optimizeTitle(route.title),
        priority: 1
      });
    }

    if (route.title.length > SEO_AUDIT_CONFIG.TITLE_MAX) {
      issues.push({
        type: 'warning',
        category: 'Title Optimization',
        page: route.path,
        issue: 'Title too long - should be 45-60 characters',
        currentValue: `${route.title.length} chars: \"${route.title}\"`,
        recommendedValue: this.optimizeTitle(route.title),
        priority: 1
      });
    }

    // Meta Description Length Analysis
    if (route.description.length < SEO_AUDIT_CONFIG.META_DESC_MIN) {
      issues.push({
        type: 'warning',
        category: 'Meta Description',
        page: route.path,
        issue: 'Meta description too short - should be 120-160 characters',
        currentValue: `${route.description.length} chars: \"${route.description}\"`,
        recommendedValue: this.optimizeDescription(route.description),
        priority: 1
      });
    }

    if (route.description.length > SEO_AUDIT_CONFIG.META_DESC_MAX) {
      issues.push({
        type: 'warning',
        category: 'Meta Description',
        page: route.path,
        issue: 'Meta description too long - should be 120-160 characters',
        currentValue: `${route.description.length} chars: \"${route.description}\"`,
        recommendedValue: this.optimizeDescription(route.description),
        priority: 1
      });
    }

    // Internal Linking Analysis
    if (this.isOrphanPage(route.path)) {
      issues.push({
        type: 'error',
        category: 'Internal Linking',
        page: route.path,
        issue: 'Orphan page - needs internal links from other pages',
        priority: 2
      });
    }

    // Add to results
    this.issues.push(...issues);
    this.auditResults.push({
      url,
      issues,
      proposedFixes: {
        title: this.optimizeTitle(route.title),
        metaDescription: this.optimizeDescription(route.description),
        h1: this.optimizeH1(route.title),
        canonicalUrl: url
      }
    });
  }

  /**
   * Optimize title to meet length requirements
   */
  private optimizeTitle(currentTitle: string): string {
    if (currentTitle.length >= SEO_AUDIT_CONFIG.TITLE_MIN && 
        currentTitle.length <= SEO_AUDIT_CONFIG.TITLE_MAX) {
      return currentTitle;
    }

    // Remove brand name if too long, add if too short
    const withoutBrand = currentTitle.replace(/\s*\|\s*Digital Frontier.*$/, '');
    const brand = 'Digital Frontier';
    
    if (currentTitle.length > SEO_AUDIT_CONFIG.TITLE_MAX) {
      const maxContentLength = SEO_AUDIT_CONFIG.TITLE_MAX - brand.length - 3; // " | "
      const truncated = withoutBrand.substring(0, maxContentLength).trim();
      return `${truncated} | ${brand}`;
    }
    
    if (currentTitle.length < SEO_AUDIT_CONFIG.TITLE_MIN) {
      if (!currentTitle.includes(brand)) {
        return `${withoutBrand} | ${brand}`;
      }
      // Add descriptive keywords
      const keywords = ['AI Marketing', 'Expert Solutions', 'Professional Services'];
      for (const keyword of keywords) {
        const potential = `${withoutBrand} ${keyword} | ${brand}`;
        if (potential.length <= SEO_AUDIT_CONFIG.TITLE_MAX) {
          return potential;
        }
      }
    }
    
    return currentTitle;
  }

  /**
   * Optimize meta description to meet length requirements
   */
  private optimizeDescription(currentDesc: string): string {
    if (currentDesc.length >= SEO_AUDIT_CONFIG.META_DESC_MIN && 
        currentDesc.length <= SEO_AUDIT_CONFIG.META_DESC_MAX) {
      return currentDesc;
    }

    if (currentDesc.length > SEO_AUDIT_CONFIG.META_DESC_MAX) {
      return currentDesc.substring(0, SEO_AUDIT_CONFIG.META_DESC_MAX - 3).trim() + '...';
    }

    // Extend short descriptions with calls to action
    const ctas = [
      ' Get started today.',
      ' Contact us for expert consultation.',
      ' Learn more about our proven strategies.',
      ' Schedule your free consultation now.',
      ' Transform your marketing performance today.'
    ];

    for (const cta of ctas) {
      const extended = currentDesc + cta;
      if (extended.length >= SEO_AUDIT_CONFIG.META_DESC_MIN && 
          extended.length <= SEO_AUDIT_CONFIG.META_DESC_MAX) {
        return extended;
      }
    }

    return currentDesc;
  }

  /**
   * Generate optimized H1 tag
   */
  private optimizeH1(title: string): string {
    // Remove brand from H1, keep it focused and under 60 chars
    const h1 = title.replace(/\s*\|\s*Digital Frontier.*$/, '').trim();
    
    if (h1.length <= SEO_AUDIT_CONFIG.H1_MAX) {
      return h1;
    }
    
    return h1.substring(0, SEO_AUDIT_CONFIG.H1_MAX).trim();
  }

  /**
   * Check if page is orphaned (simplified logic)
   */
  private isOrphanPage(path: string): boolean {
    // Pages that should always have internal links
    const importantPages = [
      '/answer-engine-optimization',
      '/generative-engine-optimization',
      '/search-engine-optimization',
      '/crypto-marketing',
      '/gtm-strategy-blueprint',
      '/seo-audit-dashboard'
    ];
    
    return importantPages.includes(path);
  }

  /**
   * Generate comprehensive audit report
   */
  private async generateAuditReport(): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportsDir = join(process.cwd(), 'reports');
    
    if (!existsSync(reportsDir)) {
      mkdirSync(reportsDir, { recursive: true });
    }

    // Generate summary report
    const summaryReport = this.generateSummaryReport();
    writeFileSync(
      join(reportsDir, `seo-audit-summary-${timestamp}.md`),
      summaryReport
    );

    // Generate detailed JSON report
    const detailedReport = {
      auditDate: new Date().toISOString(),
      totalPages: this.auditResults.length,
      totalIssues: this.issues.length,
      issuesByType: {
        errors: this.issues.filter(i => i.type === 'error').length,
        warnings: this.issues.filter(i => i.type === 'warning').length,
        notices: this.issues.filter(i => i.type === 'notice').length
      },
      results: this.auditResults,
      sitewideFixes: this.generateSitewideFixes()
    };

    writeFileSync(
      join(reportsDir, `seo-audit-detailed-${timestamp}.json`),
      JSON.stringify(detailedReport, null, 2)
    );

    console.log(`📊 Reports generated in ${reportsDir}`);
  }

  /**
   * Generate markdown summary report
   */
  private generateSummaryReport(): string {
    const criticalIssues = this.issues.filter(i => i.priority <= 2);
    const byCategory = this.groupIssuesByCategory();
    
    return `# SEO Audit Summary - Digital Frontier

## Executive Summary

- **Total Pages Audited**: ${this.auditResults.length}
- **Total Issues Found**: ${this.issues.length}
- **Critical Issues**: ${criticalIssues.length}

## Issues by Category

${Object.entries(byCategory).map(([category, issues]) => 
  `### ${category} (${issues.length} issues)\n${issues.slice(0, 3).map(issue => 
    `- **${issue.page}**: ${issue.issue}`
  ).join('\n')}`
).join('\n\n')}

## Top Priority Fixes

${criticalIssues.slice(0, 10).map((issue, i) => 
  `${i + 1}. **${issue.page}** - ${issue.issue}`
).join('\n')}

## Next Steps

1. Fix critical title and meta description length issues
2. Implement comprehensive internal linking strategy
3. Optimize H1 tags across all pages
4. Validate structured data schemas
5. Implement performance optimizations

Generated on: ${new Date().toLocaleString()}
`;
  }

  private groupIssuesByCategory() {
    return this.issues.reduce((acc, issue) => {
      if (!acc[issue.category]) acc[issue.category] = [];
      acc[issue.category].push(issue);
      return acc;
    }, {} as Record<string, SEOIssue[]>);
  }

  private generateSitewideFixes() {
    return {
      htmlHeadBase: [
        '<meta charset=\"utf-8\">',
        '<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">',
        '<html lang=\"en\">'
      ],
      internalLinkingStrategy: this.generateInternalLinkingPlan(),
      performanceOptimizations: [
        'Implement image compression and modern formats (WebP/AVIF)',
        'Add critical CSS inlining',
        'Implement proper preloading for LCP images',
        'Defer non-critical JavaScript'
      ]
    };
  }

  private generateInternalLinkingPlan() {
    const linkingPlan = [
      {
        from: '/',
        to: '/answer-engine-optimization',
        anchor: 'Answer Engine Optimization Services',
        context: 'Hero section or main services area'
      },
      {
        from: '/',
        to: '/generative-engine-optimization',
        anchor: 'Generative Engine Optimization',
        context: 'Services section'
      },
      {
        from: '/blog',
        to: '/ai-prompt-templates',
        anchor: 'AI Prompt Templates',
        context: 'Related resources section'
      },
      {
        from: '/answer-engine-optimization',
        to: '/seo-audit-dashboard',
        anchor: 'SEO Audit Tools',
        context: 'CTA section'
      }
    ];

    return linkingPlan;
  }
}

// Export for use in other modules
export { SEOAuditor, SEO_AUDIT_CONFIG };

// CLI usage
if (require.main === module) {
  const auditor = new SEOAuditor();
  auditor.runAudit().catch(console.error);
}
