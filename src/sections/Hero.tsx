import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -7, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[0%] -right-[5%] w-[700px] h-[700px] rounded-full bg-tertiary/20 blur-[150px]"
        />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* Floating Shapes Animation - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 8 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className={`absolute w-32 h-32 rounded-3xl border border-primary/10 bg-white/40 shadow-sm`}
            style={{ 
              left: `${15 + i * 20}%`, 
              top: `${20 + (i % 2) * 30}%` 
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 mb-8 group cursor-default">
            <Sparkles className="text-primary w-4 h-4" />
            <span className="text-sm font-bold tracking-tight text-primary">Premium Web agency for Modern Startups</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-dark">
            Modern Websites That <br className="hidden md:block" />
            <span className="gradient-text">Grow Your Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            We design and develop high-performance websites for startups and businesses. Scale your brand with precision-engineered digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="contact" 
              spy={true} smooth={true} offset={-80} duration={600}
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="portfolio" 
              spy={true} smooth={true} offset={-80} duration={600}
              className="btn-secondary text-lg"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator animation */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-dark">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-dark/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
