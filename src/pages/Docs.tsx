import PageLayout from "@/components/layout/PageLayout";

const Docs = () => {
  return (
    <PageLayout
      title="Documentation"
      subtitle="Comprehensive guides and documentation for our services"
      currentPath="/docs"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <iframe 
            src="https://www.digitalfrontier.agency/ebd/145cbc325a1080a3bfefdb0d4aacc231?v=23bcbc325a10800c85ad000c4c42a943" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            allowFullScreen 
            className="w-full"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Docs;