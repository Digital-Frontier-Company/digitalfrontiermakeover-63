import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Star, BookOpen, Target, Zap, TrendingUp, Brain, Users, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Icon mapping for categories
const categoryIcons = {
  'target': Target,
  'zap': Zap,
  'trending-up': TrendingUp,
  'book-open': BookOpen,
  'brain': Brain,
  'users': Users,
};

interface Playbook {
  id: string;
  title: string;
  description: string;
  category: string;
  read_time: string;
  image_url?: string;
  slug: string;
  featured: boolean;
  tags: string[];
  difficulty_level: string;
  view_count: number;
  published_date: string;
}

interface Category {
  id: string;
  name: string;
  description?: string;
  icon_name?: string;
  color: string;
  sort_order: number;
}

const BrowsePlaybooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState(searchParams.get('difficulty') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'newest');

  useEffect(() => {
    fetchPlaybooks();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterPlaybooks();
  }, [searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  const fetchPlaybooks = async () => {
    try {
      const { data, error } = await supabase
        .from('playbooks')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setPlaybooks(data || []);
    } catch (error) {
      console.error('Error fetching playbooks:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('playbook_categories')
        .select('*')
        .order('sort_order');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterPlaybooks = () => {
    let filtered = [...playbooks];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(playbook =>
        playbook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        playbook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        playbook.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(playbook => playbook.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(playbook => playbook.difficulty_level === selectedDifficulty);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.published_date).getTime() - new Date(b.published_date).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.view_count - a.view_count);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  };

  const updateSearchParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredPlaybooks = filterPlaybooks();
  const featuredPlaybooks = filteredPlaybooks.filter(p => p.featured);
  const regularPlaybooks = filteredPlaybooks.filter(p => !p.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-azure mx-auto mb-4"></div>
          <p className="text-soft-white">Loading playbooks...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Browse AI Marketing Playbooks | Digital Frontier</title>
        <meta name="description" content="Explore our comprehensive collection of AI marketing playbooks covering AEO, GEO, predictive analytics, automation, and more. Free expert guides and strategies." />
        <meta name="keywords" content="AI marketing playbooks, AEO guides, marketing automation, predictive analytics, content strategy, lead generation" />
        <link rel="canonical" href="https://digitalfrontier.marketing/browse-playbooks" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-deep-navy via-card to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-azure/10 via-transparent to-ultraviolet/10"></div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <motion.h1 
                className="font-poppins font-semibold text-soft-white mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '1.2' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Browse AI Marketing <span className="text-electric-azure">Playbooks</span>
              </motion.h1>
              
              <motion.p 
                className="font-inter text-lg md:text-xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover expert-crafted guides covering everything from AEO optimization to AI-powered automation. 
                Find the perfect playbook for your marketing goals.
              </motion.p>

              {/* Search and Filters */}
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-soft-white/60 h-4 w-4" />
                      <Input
                        placeholder="Search playbooks..."
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          updateSearchParams('search', e.target.value);
                        }}
                        className="pl-10"
                      />
                    </div>

                    {/* Category Filter */}
                    <Select value={selectedCategory} onValueChange={(value) => {
                      setSelectedCategory(value);
                      updateSearchParams('category', value);
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Difficulty Filter */}
                    <Select value={selectedDifficulty} onValueChange={(value) => {
                      setSelectedDifficulty(value);
                      updateSearchParams('difficulty', value);
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={(value) => {
                      setSortBy(value);
                      updateSearchParams('sort', value);
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="title">Title A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-soft-white mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const IconComponent = categoryIcons[category.icon_name as keyof typeof categoryIcons] || BookOpen;
                const categoryCount = playbooks.filter(p => p.category === category.name).length;
                
                return (
                  <Card 
                    key={category.id} 
                    className="cursor-pointer hover:border-electric-azure/50 transition-all duration-300 group"
                    onClick={() => {
                      setSelectedCategory(category.name);
                      updateSearchParams('category', category.name);
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-electric-azure/10">
                          <IconComponent className="h-5 w-5 text-electric-azure" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-electric-azure transition-colors">
                          {category.name}
                        </CardTitle>
                      </div>
                      <CardDescription>
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-soft-white/60">
                          {categoryCount} playbook{categoryCount !== 1 ? 's' : ''}
                        </span>
                        <ArrowRight className="h-4 w-4 text-electric-azure group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-soft-white">
                {filteredPlaybooks.length} Playbook{filteredPlaybooks.length !== 1 ? 's' : ''} Found
              </h2>
              
              {(searchTerm || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                    setSortBy('newest');
                    setSearchParams({});
                  }}
                  className="text-sm"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="all">All Playbooks</TabsTrigger>
                <TabsTrigger value="featured">Featured Only</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                {filteredPlaybooks.length === 0 ? (
                  <div className="text-center py-16">
                    <BookOpen className="h-16 w-16 text-soft-white/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-soft-white mb-2">No playbooks found</h3>
                    <p className="text-soft-white/60">Try adjusting your filters or search terms</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPlaybooks.map((playbook, index) => (
                      <PlaybookCard key={playbook.id} playbook={playbook} index={index} />
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="featured">
                {featuredPlaybooks.length === 0 ? (
                  <div className="text-center py-16">
                    <Star className="h-16 w-16 text-soft-white/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-soft-white mb-2">No featured playbooks match your filters</h3>
                    <p className="text-soft-white/60">Try adjusting your search or browse all playbooks</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPlaybooks.map((playbook, index) => (
                      <PlaybookCard key={playbook.id} playbook={playbook} index={index} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

interface PlaybookCardProps {
  playbook: Playbook;
  index: number;
}

const PlaybookCard: React.FC<PlaybookCardProps> = ({ playbook, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:border-electric-azure/50 transition-all duration-300 group"
    >
      {playbook.image_url && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={playbook.image_url} 
            alt={playbook.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-electric-azure/20 to-transparent"></div>
          {playbook.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-signal-lime text-deep-navy font-bold">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge className={getDifficultyColor(playbook.difficulty_level)}>
              {playbook.difficulty_level}
            </Badge>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-electric-azure text-sm font-medium">{playbook.category}</span>
          <span className="text-soft-white/60 text-sm flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {playbook.read_time}
          </span>
        </div>
        
        <h3 className="font-poppins font-medium text-xl text-soft-white mb-3 line-clamp-2 group-hover:text-electric-azure transition-colors">
          {playbook.title}
        </h3>
        
        <p className="font-inter text-soft-white/70 mb-4 leading-relaxed line-clamp-3">
          {playbook.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {playbook.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {playbook.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{playbook.tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <Link 
          to={`/playbooks/${playbook.slug}`} 
          className="inline-flex items-center text-electric-azure hover:text-electric-azure/80 font-medium group-hover:underline"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Read Playbook →
        </Link>
      </div>
    </motion.div>
  );
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export default BrowsePlaybooks;