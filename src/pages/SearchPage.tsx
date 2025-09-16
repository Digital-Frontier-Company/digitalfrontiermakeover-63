import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, FileTextIcon, BookOpenIcon, TrendingUpIcon } from "lucide-react";
import { ROUTE_CONFIGS } from "@/utils/routes";

const SearchPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setIsSearching(true);
    
    // Update URL with search query
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }

    // Filter routes based on search query
    const filteredResults = ROUTE_CONFIGS.filter(route => {
      const searchText = searchQuery.toLowerCase();
      return (
        route.title.toLowerCase().includes(searchText) ||
        route.description.toLowerCase().includes(searchText) ||
        route.path.toLowerCase().includes(searchText)
      );
    }).slice(0, 10);

    // Simulate search delay
    setTimeout(() => {
      setResults(filteredResults);
      setIsSearching(false);
    }, 300);
  };

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const getIconForPage = (path: string) => {
    if (path.includes('/blog/')) return <FileTextIcon className="w-5 h-5" />;
    if (path.includes('/services/')) return <TrendingUpIcon className="w-5 h-5" />;
    return <BookOpenIcon className="w-5 h-5" />;
  };

  const getTypeForPage = (path: string) => {
    if (path.includes('/blog/')) return 'Blog Post';
    if (path.includes('/services/')) return 'Service';
    return 'Page';
  };

  return (
    <PageLayout
      title="Search Results | Digital Frontier Company"
      subtitle="Find the content and services you need"
      currentPath={location.pathname}
      pageType="page"
      publishedDate="2025-01-01"
      modifiedDate="2025-08-18"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-4">Search</h2>
            <p className="text-lg text-muted-foreground">
              Search our content, services, and resources
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search for content, services, or topics..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={isSearching}>
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </form>

          {query && (
            <div className="mb-6">
              <p className="text-muted-foreground">
                {isSearching ? 'Searching...' : `Found ${results.length} results for "${query}"`}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {results.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {getIconForPage(result.path)}
                      <div>
                        <CardTitle className="text-lg">
                          <a
                            href={result.path}
                            className="text-primary hover:underline"
                          >
                            {result.title}
                          </a>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {window.location.origin}{result.path}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {getTypeForPage(result.path)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-3">
                    {result.description}
                  </p>
                  {result.keywords && (
                    <div className="flex flex-wrap gap-1">
                      {result.keywords.split(', ').slice(0, 4).map((keyword: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {keyword.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {query && results.length === 0 && !isSearching && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No results found for "{query}"</p>
                <p className="text-sm">Try different keywords or browse our content below</p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <a href="/blog">Browse Blog</a>
                </Button>
                <Button variant="outline" asChild className="ml-4">
                  <a href="/digital-frontier-services">View Services</a>
                </Button>
              </div>
            </div>
          )}

          {!query && (
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileTextIcon className="w-5 h-5" />
                    Latest Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Discover our latest insights on AI marketing and digital strategies.
                  </p>
                  <Button variant="outline" asChild className="mt-4">
                    <a href="/blog">Browse Blog</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUpIcon className="w-5 h-5" />
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Explore our AI-powered marketing and optimization services.
                  </p>
                  <Button variant="outline" asChild className="mt-4">
                    <a href="/digital-frontier-services">View Services</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpenIcon className="w-5 h-5" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Access our comprehensive guides and documentation.
                  </p>
                  <Button variant="outline" asChild className="mt-4">
                    <a href="/docs">Browse Docs</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default SearchPage;