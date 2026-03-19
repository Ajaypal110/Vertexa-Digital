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
           className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
         >
           <div className="relative">
             {/* Pulsing ring rendered with brand colors */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.5, 1],
                 opacity: [0.1, 0.05, 0.1]
               }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 -m-12 rounded-full border border-primary/20"
             />
             
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
               className="flex flex-col items-center gap-8"
             >
               <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                 <img 
                   src="/logo-icon.png" 
                   alt="Vertexa Digital Icon" 
                   className="w-full h-full object-contain"
                 />
               </div>
               
               <div className="w-48 h-1 bg-black/5 rounded-full overflow-hidden">
                 <motion.div
                   initial={{ x: "-100%" }}
                   animate={{ x: "0%" }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="w-full h-full bg-gradient-to-r from-primary via-secondary to-tertiary"
                 />
               </div>

               <div className="flex flex-col items-center">
                 <span className="text-3xl md:text-4xl font-light tracking-[0.15em] text-primary uppercase leading-tight">Vertexa</span>
                 <span className="text-[10px] md:text-xs font-medium tracking-[0.6em] text-secondary uppercase mt-1">Digital</span>
               </div>
             </motion.div>
           </div>
         </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
