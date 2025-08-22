import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const RecommenderSystem = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("introduction");
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageLayout
      title="Recommender System Generalization and Prediction"
      subtitle="Navigating the Digital Frontier"
      currentPath={location.pathname}
    >
      {/* Navigation Tabs - Wrapped in Tabs component */}
      <Tabs value={activeSection} onValueChange={setActiveSection} className="mb-8">
        <div className="overflow-x-auto">
          <TabsList className="w-full justify-start h-auto flex-wrap bg-slate-900/30 p-1">
            {[
              { id: "introduction", label: "Introduction" },
              { id: "generalization", label: "Generalization" },
              { id: "data-efficiency", label: "Data Efficiency" },
              { id: "ml-automation", label: "ML Automation" },
              { id: "model-tuning", label: "Model Tuning" },
              { id: "neural-design", label: "Neural Design" },
              { id: "fairness-transparency", label: "Fairness" },
              { id: "case-studies", label: "Case Studies" },
              { id: "tools-frameworks", label: "Tools" },
              { id: "future-outlook", label: "Future" }
            ].map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className={`py-2 px-3 text-sm ${
                  activeSection === section.id ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      {/* Introduction Section */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Introduction to Recommender Systems</h2>
        <div className="space-y-4">
          <p>
            Recommender systems are algorithms and tools that automatically suggest relevant content to users, such as products, movies, or articles. 
            They have become a cornerstone of the digital economy, personalizing user experiences across e-commerce, streaming media, social networks, and more.
          </p>
          
          <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-900/50 my-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-2">Impact on Digital Business</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Over <span className="text-yellow-300 font-medium">35%</span> of Amazon's product sales driven by recommendation algorithms</li>
              <li><span className="text-yellow-300 font-medium">60%</span> of Netflix views come from personalized recommendations</li>
              <li>About <span className="text-yellow-300 font-medium">70%</span> of YouTube's one billion hours watched daily result from algorithmic recommendations</li>
            </ul>
          </div>
          
          <p>
            For AI researchers, recommender systems pose fascinating challenges in machine learning, such as modeling complex user behavior and ensuring models generalize to new data. 
            For digital marketers and startup founders, they offer practical ways to increase user engagement, conversions, and customer loyalty by delivering the right content 
            to the right person at the right time.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="flex-1 bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-all">
              <h4 className="font-semibold text-blue-300">Collaborative Filtering</h4>
              <p className="text-sm mt-2">Leverages user behavior data like ratings or clicks to find patterns of similarity between users or items</p>
            </div>
            <div className="flex-1 bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-all">
              <h4 className="font-semibold text-blue-300">Content-based Filtering</h4>
              <p className="text-sm mt-2">Uses item or user attribute information to make suggestions based on similarities</p>
            </div>
            <div className="flex-1 bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-all">
              <h4 className="font-semibold text-blue-300">Hybrid Models</h4>
              <p className="text-sm mt-2">Combine collaborative and content-based methods, often layered with deep learning to capture nonlinear relationships</p>
            </div>
          </div>
          
          <p>
            In this comprehensive guide, we explore how recommender systems achieve <strong>generalization and prediction</strong>—that is, how they learn patterns 
            from data that generalize well to new users, new items, and evolving preferences. We focus on practical aspects of building and deploying these systems, 
            rather than just academic theory.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("generalization")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Generalization <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Generalization Section */}
      <section id="generalization" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Understanding Generalization in Recommender Systems</h2>
        
        <div className="space-y-4">
          <p>
            Generalization refers to a model's ability to perform well on new, unseen data—such as new users or new items—after being trained on a historical dataset.
            In the context of recommender systems, good generalization means the recommender can accurately predict what a user will like even if that user's behavior 
            or the item in question was not part of the training data.
          </p>
          
          <div className="my-8 flex justify-center">
            <div className="w-full max-w-2xl bg-white/5 p-4 rounded-lg border border-slate-700">
              <img 
                src="/lovable-uploads/08fd7459-dcfd-4f8a-99fd-edb1fb15a917.png" 
                alt="Model Overfitting Chart - Training Error vs Validation Error" 
                className="w-full h-auto rounded-md"
              />
              <p className="text-center mt-3 text-sm text-slate-400">
                Classic model overfitting: as training error decreases, validation error initially decreases then increases - indicating lost generalization
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">Common Challenges to Generalization</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-yellow-300">Overfitting</h4>
              <p className="mt-2 text-sm">
                When a model learns the training data too specifically and loses the ability to make reliable predictions on fresh data. 
                For example, memorizing that User A liked Item X rather than learning broader preference patterns.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-yellow-300">Cold Start Problem</h4>
              <p className="mt-2 text-sm">
                Making recommendations for new users with no history or new items with no ratings. This often requires using side information 
                or falling back on content-based similarity.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">Strategies for Improving Generalization</h3>
          
          <ul className="space-y-3 pl-5 list-disc">
            <li>
              <strong className="text-blue-300">Regularization techniques</strong> like L2 weight penalties or dropout in neural networks to prevent model complexity
            </li>
            <li>
              <strong className="text-blue-300">Cross-validation</strong> and testing on hold-out datasets that mimic forward-looking scenarios
            </li>
            <li>
              <strong className="text-blue-300">Time splitting</strong> - using earlier data for training and later data for testing
            </li>
            <li>
              <strong className="text-blue-300">Foundation models</strong> - leveraging large-scale pre-trained models that can be adapted to recommendation tasks
            </li>
          </ul>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("data-efficiency")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Data Efficiency <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Data-Efficiency Section */}
      <section id="data-efficiency" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data-Efficient Training Methodologies</h2>
        
        <div className="space-y-4">
          <p>
            Data-efficient training methodologies aim to get the most predictive power out of limited data, addressing issues of data sparsity and 
            reducing the need for enormous interaction logs. One key insight is that <strong>quality beats quantity</strong> when it comes to 
            training data for recommendations.
          </p>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 p-6 rounded-lg border border-blue-900/30 my-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Approaches to Data Efficiency</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="text-blue-400 font-bold text-lg">1.</div>
                <div>
                  <strong className="text-blue-300">Contextual & Side Information</strong>
                  <p className="text-sm mt-1">
                    Incorporating additional user attributes (age, location, preferences) or item attributes (category, price, description text) 
                    provides another basis for similarity beyond pure interaction history.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 font-bold text-lg">2.</div>
                <div>
                  <strong className="text-blue-300">Pre-trained Models & Transfer Learning</strong>
                  <p className="text-sm mt-1">
                    Jump-start a recommender by fine-tuning a model that was trained on related data. For example, using pre-trained image 
                    or text embeddings from models like ResNet or BERT.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 font-bold text-lg">3.</div>
                <div>
                  <strong className="text-blue-300">Few-shot Learning & Active Learning</strong>
                  <p className="text-sm mt-1">
                    Design models that can adapt to recognizing new preferences with only a handful of examples, or systems that intelligently 
                    request feedback to get the most informative data.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 font-bold text-lg">4.</div>
                <div>
                  <strong className="text-blue-300">Data Augmentation & Coreset Selection</strong>
                  <p className="text-sm mt-1">
                    Generate synthetic interactions to train on, or select the most representative samples from a large dataset for more 
                    efficient training.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <p>
            To summarize, data-efficient training of recommender systems is about being smart with what you have. Use additional context 
            to enrich sparse data, transfer learning to import knowledge from outside, few-shot techniques to adapt quickly, and selective 
            training to avoid redundant data.
          </p>
          
          <p>
            This is particularly encouraging for new startups or companies in niche domains: you can still build a powerful recommendation
            engine by focusing on data quality, leveraging open resources, and applying clever training methodologies to generalize well from less data.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("ml-automation")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to ML Automation <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ML Automation Section */}
      <section id="ml-automation" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Machine Learning Automation through AI</h2>
        
        <div className="space-y-4">
          <p>
            <strong>Machine Learning Automation</strong>, often referred to as <strong>AutoML (Automated Machine Learning)</strong>, 
            is the use of AI-driven tools and techniques to automate time-consuming aspects of the ML pipeline. The idea is to let AI 
            systems handle the heavy lifting of experimentation and optimization, allowing data scientists and engineers to focus on 
            higher-level strategy and domain-specific insights.
          </p>
          
          <div className="my-8 flex justify-center">
            <div className="w-full max-w-2xl bg-white/5 p-4 rounded-lg border border-slate-700">
              <img 
                src="/lovable-uploads/340d9d60-dac0-453f-84c9-a89c31fd99bb.png" 
                alt="Multi-Stage Recommender System Pipeline" 
                className="w-full h-auto rounded-md"
              />
              <p className="text-center mt-3 text-sm text-slate-400">
                A typical multi-stage recommender system pipeline: Data Processing → Candidate Generation → Scoring → Personalized Recommendations
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">Key Areas of Automation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h4 className="font-semibold text-blue-300">Feature Engineering</h4>
              <p className="mt-2 text-sm">
                Automating the selection, transformation, and generation of features from raw user and item data. Tools like NVIDIA's Merlin framework 
                provide components that handle common preprocessing steps for recommendation datasets.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h4 className="font-semibold text-blue-300">Model Selection</h4>
              <p className="mt-2 text-sm">
                AutoML systems can explore model architectures and hyperparameters without manual configuration. Google's Cloud AutoML and 
                H2O.ai's Driverless AI automatically try out different model families to find optimal performers.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h4 className="font-semibold text-blue-300">Continuous Learning</h4>
              <p className="mt-2 text-sm">
                Automated systems can monitor performance and trigger re-training when needed as data distributions change. Some pipelines include 
                automatic feedback loops that update models as fresh interaction data arrives.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h4 className="font-semibold text-blue-300">Experiment Management</h4>
              <p className="mt-2 text-sm">
                Tools like Netflix's Metaflow or MLflow automate tracking of experiments, logging parameters and results, and orchestrating 
                parallel runs, making it easier to manage the iterative process of improving recommender systems.
              </p>
            </div>
          </div>
          
          <p className="mt-6">
            By infusing automation into the machine learning process, teams can achieve more reliable and optimized recommenders faster 
            and with less manual trial-and-error. The next sections will dive deeper into specific facets of automation.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("model-tuning")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Model Tuning <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Model Tuning Section */}
      <section id="model-tuning" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Automated Model Tuning for Personalized Predictions</h2>
        
        <div className="space-y-4">
          <p>
            Model tuning involves adjusting various hyperparameters to optimize recommender system performance. Doing this manually 
            can be extremely time-consuming; automated methods can search the hyperparameter space much more efficiently to deliver 
            highly personalized predictions for each user.
          </p>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-5 rounded-lg border border-blue-900/30 my-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Tuning Approaches</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/30 p-3 rounded border border-slate-700">
                <h5 className="font-medium text-blue-400 text-sm">Bayesian Optimization</h5>
                <p className="text-xs mt-2">
                  Models the performance function and picks new parameters to try based on past results, 
                  efficiently exploring promising regions of the hyperparameter space
                </p>
              </div>
              
              <div className="bg-slate-900/30 p-3 rounded border border-slate-700">
                <h5 className="font-medium text-blue-400 text-sm">Multi-armed Bandits</h5>
                <p className="text-xs mt-2">
                  For personalized tuning at the user level, balancing exploration of different recommendation 
                  strategies with exploitation of known successful approaches
                </p>
              </div>
              
              <div className="bg-slate-900/30 p-3 rounded border border-slate-700">
                <h5 className="font-medium text-blue-400 text-sm">Evolutionary Algorithms</h5>
                <p className="text-xs mt-2">
                  Mimicking natural selection to evolve better hyperparameter combinations through mutation, 
                  selection, and crossover operations
                </p>
              </div>
              
              <div className="bg-slate-900/30 p-3 rounded border border-slate-700">
                <h5 className="font-medium text-blue-400 text-sm">Platform-based Tuning</h5>
                <p className="text-xs mt-2">
                  Automated tuning via Azure ML, Optuna, Hyperopt, or Ray Tune, which handle parallel job execution 
                  and results tracking
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">Key Benefits of Automated Tuning</h3>
          
          <ul className="space-y-3 pl-5 list-disc">
            <li>Discovering non-intuitive parameter values that humans might not consider</li>
            <li>Efficiently exploring vast parameter spaces without exhaustive grid searches</li>
            <li>Continuous adaptation to evolving user preferences and new content</li>
            <li>Segment-specific optimization for different user groups</li>
            <li>Reduced engineering time spent on manual trial-and-error tuning</li>
          </ul>
          
          <p className="mt-4">
            Automated model tuning empowers recommender system builders to achieve top-tier personalization without endless manual 
            trial-and-error. It's like having a tireless lab assistant that keeps tweaking the recipe until the dish is perfect 
            for every palate.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("neural-design")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Neural Network Design <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Neural Design Section */}
      <section id="neural-design" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Automatic Design of Neural Networks in Recommender Systems</h2>
        
        <div className="space-y-4">
          <p>
            Neural Architecture Search (NAS) is a branch of AutoML that focuses on discovering the best neural network design 
            for a given task by algorithmically exploring a large space of possible architectures. In recommender systems, 
            NAS can be particularly valuable as the ideal model structure may not be obvious.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 my-8">
            <div className="flex-1">
              <div className="bg-slate-800/40 p-5 rounded-lg h-full border border-slate-700">
                <h4 className="font-semibold text-blue-300 mb-3">Traditional Architecture Design</h4>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Relies on human expertise and intuition</li>
                  <li>Time-consuming trial-and-error process</li>
                  <li>Limited exploration of architecture space</li>
                  <li>Often follows established patterns from literature</li>
                  <li>May miss novel architectural innovations</li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-slate-800/40 p-5 rounded-lg h-full border border-slate-700">
                <h4 className="font-semibold text-blue-300 mb-3">Neural Architecture Search</h4>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Automated exploration of architecture space</li>
                  <li>Can evaluate thousands of candidate architectures</li>
                  <li>Uses weight-sharing for efficiency (e.g., NASRec)</li>
                  <li>Discovers novel, high-performing architectures</li>
                  <li>Adapts to specific data characteristics</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">NAS Decision Points in Recommender Systems</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Embedding Dimensions</h4>
              <p className="text-xs mt-1">Optimal size for user and item embeddings</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Layer Types</h4>
              <p className="text-xs mt-1">Dense, convolutional, attention, or recurrent</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Feature Interaction</h4>
              <p className="text-xs mt-1">How user and item features should combine</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Network Depth</h4>
              <p className="text-xs mt-1">Number of layers and their widths</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Skip Connections</h4>
              <p className="text-xs mt-1">Residual connections between layers</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded border border-blue-900/30 hover:bg-blue-900/30 transition-all">
              <h4 className="text-blue-300 font-medium text-sm">Activation Functions</h4>
              <p className="text-xs mt-1">ReLU, GELU, Swish, or others</p>
            </div>
          </div>
          
          <p className="mt-6">
            While NAS can be computationally expensive, requiring multiple GPUs or TPUs running for days, the trend is that as computing 
            power grows and NAS algorithms improve, automatic neural network design will become more accessible even to smaller teams.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("fairness-transparency")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Fairness & Transparency <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Fairness and Transparency Section */}
      <section id="fairness-transparency" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Ensuring Fairness and Transparency</h2>
        
        <div className="space-y-4">
          <p>
            As recommender systems become ubiquitous in mediating content, questions of <strong>fairness and transparency</strong> have 
            come to the forefront. Fairness ensures the algorithm's outcomes do not unduly favor or disfavor particular groups, while 
            transparency makes the system understandable to users and stakeholders.
          </p>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/20 p-6 rounded-lg border border-slate-700 my-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-4">Common Fairness Issues</h4>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-400">1</span>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-300">Popularity Bias</h5>
                  <p className="text-sm mt-1">
                    Algorithms often disproportionately recommend popular items, creating a feedback loop that makes popular items 
                    even more popular. This can be unfair to niche items or users with niche tastes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-400">2</span>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-300">Demographic Bias</h5>
                  <p className="text-sm mt-1">
                    Recommender systems might perform better for certain demographic groups than others, or perpetuate stereotypes 
                    present in training data. This requires debiasing techniques and careful monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-400">3</span>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-300">Lack of Explanation</h5>
                  <p className="text-sm mt-1">
                    Users often don't understand why certain items are recommended to them, reducing trust. Explanations like "Recommended because 
                    you watched X" can significantly improve the user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-8 mb-3">Approaches to Fairness and Transparency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-blue-300">Fairness-aware Re-ranking</h4>
              <p className="mt-2 text-sm">
                Algorithms that deliberately inject more diversity or give exposure to less popular items in the results, balancing 
                accuracy with fairness metrics through multi-objective optimization.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-blue-300">Explainable AI Techniques</h4>
              <p className="mt-2 text-sm">
                Generating meaningful explanations from complex models, from simpler attribute-based explanations to more complex explainable 
                architectures that provide insight into recommendation reasoning.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-blue-300">Adversarial Debiasing</h4>
              <p className="mt-2 text-sm">
                Using adversarial learning to remove sensitive attributes' influence on the recommendation process, striving for a kind of 
                "counterfactual fairness" where protected characteristics don't determine outcomes.
              </p>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-blue-300">User Feedback Integration</h4>
              <p className="mt-2 text-sm">
                Building feedback mechanisms into recommendation UIs so users can indicate why they aren't interested in certain recommendations, 
                helping improve both personalization and transparency.
              </p>
            </div>
          </div>
          
          <p className="mt-6">
            Integrating fairness and transparency into recommender systems isn't just ethically sound—it also builds user trust 
            and improves long-term engagement. As regulations around algorithmic decision-making tighten, these considerations 
            become increasingly important from both legal and business perspectives.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("case-studies")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Case Studies <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Case Studies and Industry Examples</h2>
        
        <div className="space-y-4">
          <p>
            Let's look at how various companies and industries are leveraging recommender systems, especially with regard to 
            generalization and predictive accuracy. These real-world examples illustrate the practical impact of the methods 
            discussed throughout this guide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-red-900/20 to-slate-900/30 p-5 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Netflix</h3>
              <p className="text-sm">
                Netflix's recommendation engine uses a sophisticated ensemble of algorithms, including deep learning, to personalize 
                content recommendations and even artwork thumbnails. Their system drives around <strong>80%</strong> of viewing on the platform 
                and significantly impacts user retention.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/30 p-5 rounded-lg border border-orange-900/20 hover:border-orange-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Amazon</h3>
              <p className="text-sm">
                Amazon pioneered item-based collaborative filtering for e-commerce recommendations ("Customers who bought this also bought"). 
                They now use more advanced models considering browse history and context to maximize cross-sell and upsell opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/20 to-slate-900/30 p-5 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-red-400 mb-3">YouTube</h3>
              <p className="text-sm">
                YouTube's recommendations drive about <strong>70%</strong> of watch time. Their deep learning system uses a two-stage 
                retrieval and ranking process, considering watch history, video content, and context to surface new content effectively.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-slate-900/30 p-5 rounded-lg border border-green-900/20 hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Spotify</h3>
              <p className="text-sm">
                Spotify's Discover Weekly playlist combines collaborative filtering, NLP on metadata/reviews, and audio analysis. 
                This hybrid approach allows good generalization, even for new artists, driving user engagement and reducing churn.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/30 p-5 rounded-lg border border-blue-900/20 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">LinkedIn</h3>
              <p className="text-sm">
                LinkedIn uses recommendations for "People You May Know," job suggestions, and feed ranking. They employ graph analysis and NLP 
                on profiles/job descriptions to predict good professional connections or job fits.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-slate-900/30 p-5 rounded-lg border border-purple-900/20 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Smaller Organizations</h3>
              <p className="text-sm">
                Smaller companies leverage SaaS solutions (like AWS Personalize) or open-source frameworks (like TensorFlow Recommenders) 
                to add personalized recommendations. Many report significant boosts in engagement and conversion rates.
              </p>
            </div>
          </div>
          
          <p className="mt-6">
            These examples underscore key takeaways: good generalization is vital for dynamic platforms; combining data sources often 
            yields better results; continuous evaluation and tuning are standard practice; and the impact on business metrics (engagement,
            satisfaction, revenue) is undeniable across companies of all sizes.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("tools-frameworks")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Tools & Frameworks <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Tools and Frameworks Section */}
      <section id="tools-frameworks" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Tools and Frameworks for Modern Recommender Systems</h2>
        
        <div className="space-y-4">
          <p>
            Developing a state-of-the-art recommender system is made easier today by a variety of tools, libraries, and frameworks.
            These range from open-source packages to cloud-based managed services that can accelerate implementation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">TensorFlow Recommenders</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>Google's open-source library built on TensorFlow 2</p>
                <p>Provides building blocks for retrieval and ranking models</p>
                <p>Integrates well with TensorFlow ecosystem</p>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">PyTorch-based Frameworks</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>Facebook's DLRM code, TorchRec for large-scale</p>
                <p>PyTorch Lightning for training structure</p>
                <p>RecBole for comprehensive algorithm benchmarking</p>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">NVIDIA Merlin</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>End-to-end GPU-accelerated recommender pipelines</p>
                <p>Includes NVTabular, HugeCTR, and Transformers4Rec</p>
                <p>Ideal for large scale and high performance</p>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">Microsoft Recommenders</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>Linux Foundation AI & Data project</p>
                <p>Best practices, examples, utilities, and notebooks</p>
                <p>Great for learning and prototyping</p>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">Surprise / LightFM</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>Simpler Python libraries for smaller datasets</p>
                <p>Surprise offers classic algorithms (KNN, SVD)</p>
                <p>LightFM for hybrid models with content features</p>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/60 transition-all">
              <h3 className="font-semibold text-blue-300">Cloud Services</h3>
              <div className="text-xs mt-2 space-y-1">
                <p>AWS Personalize, Google Recommendations AI</p>
                <p>Azure Personalizer for managed services</p>
                <p>Upload data and get API-based recommendations</p>
              </div>
            </div>
          </div>
          
          <p className="mt-6">
            When choosing a tool or framework, consider your data scale, team expertise, existing technology stack, and specific needs 
            like real-time capabilities or fairness requirements. Many teams start simple and iterate as they learn more about their 
            users and data patterns.
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={() => scrollToSection("future-outlook")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue to Future Outlook <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section id="future-outlook" className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Future Outlook and Innovations</h2>
        
        <div className="space-y-4">
          <p>
            The field of recommender systems is dynamic, with several exciting innovations shaping the future of personalization.
            Here are some key trends that are transforming how recommendations will work in the coming years.
          </p>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/50 p-6 rounded-lg border border-blue-900/30 my-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-4">Key Future Trends</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-300">Integration of Generative AI and LLMs</h5>
                  <p className="text-sm mt-1">
                    Deeper integration where LLMs understand complex queries, generate personalized descriptions, or enable conversational recommendations.
                    This directly ties into <strong className="text-blue-300">Answer Engine Optimization (AEO)</strong> – optimizing content to be chosen 
                    as the 'answer' by these AI systems.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.25 16.25 15 18"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-300">Contextual and Multimodal Recommendations</h5>
                  <p className="text-sm mt-1">
                    Systems becoming more aware of user context (time, location, device, mood) and using multimodal data (text, image, audio, video) 
                    for richer, more accurate suggestions tailored to specific situations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><rect x="2" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="18" y="4" width="4" height="16"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-300">Real-Time Learning and Edge Deployment</h5>
                  <p className="text-sm mt-1">
                    Moving towards models that learn from interactions almost instantly, and deploying models on user devices (edge computing) 
                    for privacy (federated learning) and efficiency, reducing latency and enhancing personalization speed.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-300">Fairness, Accountability, and Regulation</h5>
                  <p className="text-sm mt-1">
                    Stronger push for standardized fairness metrics, audits, transparency reports, and explainable AI (XAI) to meet 
                    ethical standards and potential regulations as algorithmic systems face increased scrutiny.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p>
            In conclusion, the future of recommender systems is vibrant and rapidly evolving. These systems are becoming smarter, faster, 
            more context-aware, and more ethical. They will integrate more seamlessly into our digital lives, providing highly personalized 
            experiences while respecting privacy and fairness concerns.
          </p>
          
          <p>
            For businesses and innovators like those working with <span className="text-blue-400 font-semibold">Digital Frontier Company</span>, 
            staying at this <em>digital frontier</em> means continuously experimenting and integrating these advancements. Success requires 
            harnessing data and algorithms transparently, fairly, and aligned with user needs, effectively mastering both recommendation 
            science and Answer Engine Optimization.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Digital Frontier for AI Consultation
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecommenderSystem;
