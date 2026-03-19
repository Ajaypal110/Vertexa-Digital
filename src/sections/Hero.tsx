import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/20 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/20 blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[var(--color-secondary)] mb-6">
              Welcome to Vertexa Digital
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
              We build modern <br className="hidden md:block" />
              <span className="gradient-text">high-performance</span><br /> websites.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              For businesses and startups. We design digital experiences that elevate your brand and drive actual growth.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link 
                to="portfolio" 
                spy={true} smooth={true} offset={-80} duration={500}
                className="btn-primary cursor-pointer text-lg"
              >
                View Portfolio
              </Link>
              <Link 
                to="contact" 
                spy={true} smooth={true} offset={-80} duration={500}
                className="btn-secondary cursor-pointer text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
