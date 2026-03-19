import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Headphones } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '5+', icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
  { label: 'Technologies used', value: 'Modern Stack', icon: <Zap className="w-5 h-5 text-secondary" /> },
  { label: 'Support', value: 'Fast Response', icon: <Headphones className="w-5 h-5 text-primary" /> },
];

const TrustIndicators: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] border-y border-black/[0.05] py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-dark leading-none">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
