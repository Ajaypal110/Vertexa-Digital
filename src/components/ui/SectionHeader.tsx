import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
  asH1?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, alignment = 'center', asH1 = false }) => {
  const TitleTag = asH1 ? 'h1' : 'h2';
  
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TitleTag className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 break-words text-dark tracking-tight">
          {title}
        </TitleTag>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-gray-500 text-lg md:text-xl max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} leading-relaxed font-medium`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
