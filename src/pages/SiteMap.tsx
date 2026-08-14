import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import {
  INDEXABLE_MARKETING_PAGES,
  SITE_ORIGIN,
  type MarketingCategory,
} from "@/content/marketingPages";

const CATEGORY_ORDER: MarketingCategory[] = [
  "Main pages",
  "Services",
  "Local services",
  "Guides and playbooks",
  "Blog and insights",
  "Research and topics",
  "Tools and resources",
  "Legal",
];

const SiteMap = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="Site Map"
      subtitle="Navigate Digital Frontier's public pages"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Site Map | Digital Frontier</title>
        <meta
          name="description"
          content="Browse Digital Frontier services, guides, articles, tools, and company information."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/site-map`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="space-y-12">
        {CATEGORY_ORDER.map((category) => {
          const pages = INDEXABLE_MARKETING_PAGES.filter(
            (page) => page.category === category,
          );

          if (pages.length === 0) {
            return null;
          }

          return (
            <section key={category} aria-labelledby={`sitemap-${category.replace(/ /g, "-").toLowerCase()}`}>
              <h2
                id={`sitemap-${category.replace(/ /g, "-").toLowerCase()}`}
                className="text-2xl font-bold mb-6 text-slate-100"
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
                  >
                    <span className="block font-medium text-slate-100">{page.title}</span>
                    <span className="mt-2 block text-sm text-slate-300">{page.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default SiteMap;
