import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Clock, TrendingUp } from "lucide-react";

const BlogPromoBlock = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/lovable-uploads/ai-truth-gap-promo-1.png",
    "/lovable-uploads/ai-truth-gap-promo-2.png", 
    "/lovable-uploads/ai-truth-gap-promo-3.png",
    "/lovable-uploads/ai-truth-gap-promo-4.png"
  ];

  const stats = [
    { icon: Eye, label: "Investigation", value: "5 AIs Tested" },
    { icon: Clock, label: "Read Time", value: "12 min" },
    { icon: TrendingUp, label: "Reliability", value: "Truth Gap" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, isHovered ? 5000 : 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)" }}
          transition={{ duration: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Alert Badge */}
          <div className="absolute top-4 left-4 z-20">
            <motion.div 
              className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚨 Breaking Investigation
            </motion.div>
          </div>

          <Link to="/blog/ai-truth-gap" className="block">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="AI Truth Gap Investigation"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-red-500' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-red-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                    Exclusive Report • September 2025
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    The AI Truth Gap: What Happens When You Ask 5 Different AIs for "Today's Narrative"
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Our investigation reveals a shocking truth gap in AI reliability. See how different AIs handle facts, citations, and misinformation - and learn how to protect yourself from dangerous fabrications.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <stat.icon className="w-5 h-5 text-red-400 mx-auto mb-1" />
                        <div className="text-white font-bold text-sm">{stat.value}</div>
                        <div className="text-slate-400 text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div 
                    className="inline-flex items-center gap-2 text-red-400 font-semibold group-hover:text-red-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read the Full Investigation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPromoBlock;