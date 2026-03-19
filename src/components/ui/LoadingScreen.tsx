import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0B0F19] flex items-center justify-center"
        >
          <div className="relative">
            {/* Pulsing ring */}
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 -m-8 rounded-full border border-primary/30"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative w-48 h-24 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Loading..." 
                  className="w-auto h-12 object-contain scale-[6] origin-center translate-y-2"
                />
              </div>
              
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Vertexa Digital</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
