import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-gray-400 text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
