/**
 * SEO Report Generator - Creates comprehensive audit reports
 */

import fs from 'fs';
import path from 'path';
import { SEOAnalysis } from './analyzer';
import { SEOValidation } from './validator';

export interface AuditResult {
  url: string;
  analysis: SEOAnalysis;
  validation: SEOValidation;
  violations: any[];
}

export interface ReportOptions {
  csvPath: string;
  jsonPath: string;
  htmlPath: string;
}

/**
 * Generate comprehensive SEO audit reports
 */
export async function generateReport(results: AuditResult[], options: ReportOptions): Promise<string[]> {
  const generatedFiles: string[] = [];
  
  // Generate CSV Report
  await generateCSVReport(results, options.csvPath);
  generatedFiles.push(options.csvPath);
  
  // Generate JSON Report
  await generateJSONReport(results, options.jsonPath);
  generatedFiles.push(options.jsonPath);
  
  // Generate HTML Report
  await generateHTMLReport(results, options.htmlPath);
  generatedFiles.push(options.htmlPath);
  
  return generatedFiles;
}

/**
 * Generate CSV report for easy analysis
 */
async function generateCSVReport(results: AuditResult[], csvPath: string) {
  const headers = [
    'URL',
    'Old Title',
    'Old Title Length',
    'New Title',
    'New Title Length',
    'Old Meta Description',
    'Old Meta Description Length',
    'New Meta Description',
    'New Meta Description Length',
    'Old H1',
    'Old H1 Length',
    'New H1',
    'New H1 Length',
    'H1 Count',
    'Internal Links Count',
    'Violations Count',
    'SEO Score',
    'Compliant',
    'Critical Issues',
    'Warning Issues',
    'Info Issues',
    'Changed'
  ].join(',');
  
  const rows = results.map(result => {
    const analysis = result.analysis;
    const validation = result.validation;
    
    const criticalIssues = validation.violations.filter(v => v.severity === 'critical').length;
    const warningIssues = validation.violations.filter(v => v.severity === 'warning').length;
    const infoIssues = validation.violations.filter(v => v.severity === 'info').length;
    
    return [
      `"${analysis.url}"`,
      `"${analysis.title}"`,
      analysis.titleLength,
      `"${generateOptimizedTitle(analysis)}"`,
      60, // Target length
      `"${analysis.metaDescription}"`,
      analysis.metaDescLength,
      `"${generateOptimizedMetaDescription(analysis)}"`,
      160, // Target length
      `"${analysis.h1Tags[0] || ''}"`,
      analysis.h1Lengths[0] || 0,
      `"${generateOptimizedH1(analysis)}"`,
      60, // Target length
      analysis.h1Tags.length,
      analysis.internalLinks.length,
      validation.violations.length,
      validation.score,
      validation.compliant ? 'Yes' : 'No',
      criticalIssues,
      warningIssues,
      infoIssues,
      validation.violations.length > 0 ? 'Yes' : 'No'
    ].join(',');
  });
  
  const csvContent = [headers, ...rows].join('\n');
  await fs.promises.writeFile(csvPath, csvContent, 'utf8');
}

/**
 * Generate JSON report for programmatic use
 */
async function generateJSONReport(results: AuditResult[], jsonPath: string) {
  const report = {
    metadata: {
      timestamp: new Date().toISOString(),
      totalPages: results.length,
      pagesWithIssues: results.filter(r => !r.validation.compliant).length,
      totalViolations: results.reduce((sum, r) => sum + r.validation.violations.length, 0),
      averageScore: results.reduce((sum, r) => sum + r.validation.score, 0) / results.length
    },
    summary: {
      criticalIssues: results.reduce((sum, r) => 
        sum + r.validation.violations.filter(v => v.severity === 'critical').length, 0),
      warningIssues: results.reduce((sum, r) => 
        sum + r.validation.violations.filter(v => v.severity === 'warning').length, 0),
      infoIssues: results.reduce((sum, r) => 
        sum + r.validation.violations.filter(v => v.severity === 'info').length, 0)
    },
    pages: results.map(result => ({
      url: result.analysis.url,
      current: {
        title: result.analysis.title,
        titleLength: result.analysis.titleLength,
        metaDescription: result.analysis.metaDescription,
        metaDescLength: result.analysis.metaDescLength,
        h1Tags: result.analysis.h1Tags,
        h1Lengths: result.analysis.h1Lengths
      },
      optimized: {
        title: generateOptimizedTitle(result.analysis),
        metaDescription: generateOptimizedMetaDescription(result.analysis),
        h1: generateOptimizedH1(result.analysis)
      },
      validation: result.validation,
      recommendations: generateRecommendations(result.validation)
    }))
  };
  
  await fs.promises.writeFile(jsonPath, JSON.stringify(report, null, 2), 'utf8');
}

/**
 * Generate HTML report for easy viewing
 */
async function generateHTMLReport(results: AuditResult[], htmlPath: string) {
  const totalPages = results.length;
  const pagesWithIssues = results.filter(r => !r.validation.compliant).length;
  const averageScore = Math.round(results.reduce((sum, r) => sum + r.validation.score, 0) / results.length);
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Audit Report - Digital Frontier</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .metric { background: #ecf0f1; padding: 20px; border-radius: 8px; text-align: center; }
        .metric h3 { margin: 0; color: #34495e; font-size: 2em; }
        .metric p { margin: 5px 0 0 0; color: #7f8c8d; }
        .page-result { border: 1px solid #bdc3c7; border-radius: 8px; margin: 20px 0; padding: 20px; }
        .page-url { font-weight: bold; color: #2980b9; font-size: 1.1em; margin-bottom: 15px; }
        .violation { padding: 10px; margin: 5px 0; border-radius: 5px; }
        .critical { background: #ffebee; border-left: 4px solid #e74c3c; }
        .warning { background: #fff3e0; border-left: 4px solid #f39c12; }
        .info { background: #e8f5e8; border-left: 4px solid #27ae60; }
        .score { float: right; font-weight: bold; padding: 5px 10px; border-radius: 20px; }
        .score.good { background: #d4edda; color: #155724; }
        .score.fair { background: #fff3cd; color: #856404; }
        .score.poor { background: #f8d7da; color: #721c24; }
        .compliant { color: #27ae60; font-weight: bold; }
        .non-compliant { color: #e74c3c; font-weight: bold; }
        .recommendation { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0; }
        .before, .after { padding: 10px; border-radius: 5px; }
        .before { background: #ffebee; }
        .after { background: #e8f5e8; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 SEO Audit Report</h1>
        <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        
        <div class="summary">
            <div class="metric">
                <h3>${totalPages}</h3>
                <p>Total Pages</p>
            </div>
            <div class="metric">
                <h3>${pagesWithIssues}</h3>
                <p>Pages with Issues</p>
            </div>
            <div class="metric">
                <h3>${averageScore}%</h3>
                <p>Average SEO Score</p>
            </div>
            <div class="metric">
                <h3>${results.reduce((sum, r) => sum + r.validation.violations.length, 0)}</h3>
                <p>Total Violations</p>
            </div>
        </div>

        ${results.map(result => `
            <div class="page-result">
                <div class="page-url">${result.analysis.url}</div>
                <div class="score ${getScoreClass(result.validation.score)}">${result.validation.score}% SEO Score</div>
                <div class="${result.validation.compliant ? 'compliant' : 'non-compliant'}">
                    ${result.validation.compliant ? '✅ Compliant' : '❌ Non-Compliant'}
                </div>
                
                ${result.validation.violations.length > 0 ? `
                    <h4>Violations (${result.validation.violations.length})</h4>
                    ${result.validation.violations.map(violation => `
                        <div class="violation ${violation.severity}">
                            <strong>${violation.type.replace('_', ' ').toUpperCase()}:</strong> ${violation.message}<br>
                            <small>Current: ${violation.current} | Expected: ${violation.expected}</small>
                        </div>
                    `).join('')}
                ` : '<p style="color: #27ae60;">✅ No violations found!</p>'}
                
                <div class="recommendation">
                    <h4>📋 Optimized Content</h4>
                    <div class="before-after">
                        <div class="before">
                            <h5>Current</h5>
                            <p><strong>Title (${result.analysis.titleLength} chars):</strong><br>${result.analysis.title}</p>
                            <p><strong>Meta Description (${result.analysis.metaDescLength} chars):</strong><br>${result.analysis.metaDescription}</p>
                            <p><strong>H1:</strong><br>${result.analysis.h1Tags[0] || 'Missing'}</p>
                        </div>
                        <div class="after">
                            <h5>Optimized</h5>
                            <p><strong>Title (60 chars):</strong><br>${generateOptimizedTitle(result.analysis)}</p>
                            <p><strong>Meta Description (160 chars):</strong><br>${generateOptimizedMetaDescription(result.analysis)}</p>
                            <p><strong>H1 (60 chars):</strong><br>${generateOptimizedH1(result.analysis)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</body>
</html>`;
  
  await fs.promises.writeFile(htmlPath, html, 'utf8');
}

/**
 * Generate optimized title (placeholder - will be enhanced)
 */
function generateOptimizedTitle(analysis: SEOAnalysis): string {
  // Simple optimization - truncate to 60 chars while preserving meaning
  if (analysis.title.length <= 60) {
    return analysis.title.padEnd(60, ' ').substring(0, 60);
  }
  
  // Extract key parts and reconstruct
  const parts = analysis.title.split(' | ');
  const mainPart = parts[0];
  const brandPart = parts[1] || 'Digital Frontier';
  
  if (mainPart.length <= 40) {
    const available = 60 - mainPart.length - 3; // 3 for " | "
    const shortBrand = brandPart.substring(0, available);
    return `${mainPart} | ${shortBrand}`;
  }
  
  return mainPart.substring(0, 60);
}

/**
 * Generate optimized meta description (placeholder)
 */
function generateOptimizedMetaDescription(analysis: SEOAnalysis): string {
  if (analysis.metaDescription.length >= 155 && analysis.metaDescription.length <= 160) {
    return analysis.metaDescription;
  }
  
  // Simple truncation/extension logic
  if (analysis.metaDescription.length < 155) {
    return analysis.metaDescription.padEnd(155, ' ').substring(0, 155) + '.';
  }
  
  return analysis.metaDescription.substring(0, 157) + '...';
}

/**
 * Generate optimized H1 (placeholder)
 */
function generateOptimizedH1(analysis: SEOAnalysis): string {
  const currentH1 = analysis.h1Tags[0] || '';
  
  if (currentH1.length === 60) {
    return currentH1;
  }
  
  if (currentH1.length < 60) {
    // Extract keywords from title to extend H1
    const titleWords = analysis.title.split(' ').filter(w => w.length > 3);
    let optimizedH1 = currentH1;
    
    for (const word of titleWords) {
      if ((optimizedH1 + ' ' + word).length <= 60) {
        optimizedH1 += ' ' + word;
      }
    }
    
    return optimizedH1.padEnd(60, ' ').substring(0, 60);
  }
  
  return currentH1.substring(0, 60);
}

/**
 * Get CSS class for SEO score
 */
function getScoreClass(score: number): string {
  if (score >= 80) return 'good';
  if (score >= 60) return 'fair';
  return 'poor';
}

/**
 * Generate recommendations based on violations
 */
function generateRecommendations(validation: SEOValidation): string[] {
  const recommendations: string[] = [];
  
  validation.violations.forEach(violation => {
    switch (violation.type) {
      case 'title':
        recommendations.push(`Optimize title to exactly 60 characters with front-loaded keywords`);
        break;
      case 'meta_description':
        recommendations.push(`Rewrite meta description to 155-160 characters with clear CTA`);
        break;
      case 'h1':
        recommendations.push(`Ensure single H1 tag with exactly 60 characters containing main keywords`);
        break;
      case 'internal_links':
        recommendations.push(`Improve internal linking with descriptive anchor text`);
        break;
      case 'keywords':
        recommendations.push(`Integrate title keywords in first and last paragraphs naturally`);
        break;
    }
  });
  
  return [...new Set(recommendations)]; // Remove duplicates
}