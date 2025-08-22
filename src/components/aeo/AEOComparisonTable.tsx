
import React from "react";

const AEOComparisonTable = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">AEO vs. Traditional SEO</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Feature</th>
              <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Traditional SEO</th>
              <th className="p-5 text-left text-blue-300 border-b border-slate-700 text-lg">AEO Strategy</th>
            </tr>
          </thead>
          <tbody className="text-base">
            <tr className="hover:bg-slate-800/20">
              <td className="p-5 border-b border-slate-800 font-medium">Primary Target</td>
              <td className="p-5 border-b border-slate-800">Search Engine Rankings</td>
              <td className="p-5 border-b border-slate-800">Featured Snippets & Voice Results</td>
            </tr>
            <tr className="hover:bg-slate-800/20">
              <td className="p-5 border-b border-slate-800 font-medium">Content Format</td>
              <td className="p-5 border-b border-slate-800">Keyword-optimized articles</td>
              <td className="p-5 border-b border-slate-800">Direct Q&A with structured data</td>
            </tr>
            <tr className="hover:bg-slate-800/20">
              <td className="p-5 border-b border-slate-800 font-medium">Success Metric</td>
              <td className="p-5 border-b border-slate-800">Traffic & Rankings</td>
              <td className="p-5 border-b border-slate-800">Answer Box Appearances</td>
            </tr>
            <tr className="hover:bg-slate-800/20">
              <td className="p-5 border-b border-slate-800 font-medium">User Journey</td>
              <td className="p-5 border-b border-slate-800">SERP → Website</td>
              <td className="p-5 border-b border-slate-800">Direct Answer → Brand Recognition</td>
            </tr>
            <tr className="hover:bg-slate-800/20">
              <td className="p-5 font-medium">Technical Focus</td>
              <td className="p-5">Site speed, backlinks, metadata</td>
              <td className="p-5">Schema markup, concise answers</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AEOComparisonTable;
