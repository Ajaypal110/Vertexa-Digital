import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={isMobile ? undefined : { 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.35, 0.3]
          }}
          transition={isMobile ? undefined : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-primary/10 blur-[40px] md:blur-[130px] will-change-transform"
        />
        <motion.div 
          animate={isMobile ? undefined : { 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={isMobile ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[0%] -right-[5%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-tertiary/20 blur-[50px] md:blur-[150px] will-change-transform"
        />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ 
              duration: 10 + Math.random() * 5, 
              repeat: Infinity,
            }}
            className={`absolute w-24 h-24 rounded-3xl border border-primary/5 bg-white/20 will-change-transform`}
            style={{ 
              left: `${20 + i * 50}%`, 
              top: `${20 + i * 40}%` 
            }}
          />
        ))}
        {/* Render more only on desktop */}
        <div className="hidden md:block">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i+2}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 8 + Math.random() * 5, repeat: Infinity }}
              className="absolute w-32 h-32 rounded-3xl border border-primary/10 bg-white/40 shadow-sm"
              style={{ left: `${35 + i * 30}%`, top: `${45 + (i % 2) * 20}%` }}
            />
          ))}
        </div>
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-dark">
            Modern Websites That <br className="hidden md:block" />
            <span className="gradient-text">Grow Your Business</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
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
