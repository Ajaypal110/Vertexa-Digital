import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Tag, Search } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const reasons = [
  {
    title: 'Fast Delivery',
    description: 'Launch your website within 3–7 business days. We prioritize speed without compromising quality.',
    icon: <Clock className="w-6 h-6 text-primary" />,
    stats: '3-7 Days'
  },
  {
    title: 'Modern UI Design',
    description: 'Pixel-perfect, premium designs inspired by the best SaaS platforms in the world.',
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    stats: 'Vercel-Grade'
  },
  {
    title: 'Affordable Pricing',
    description: 'High-end agency quality at startup-friendly competitive prices.',
    icon: <Tag className="w-6 h-6 text-primary" />,
    stats: 'Flexible'
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices to ensure your site ranks high on Google and loads lightning fast.',
    icon: <Search className="w-6 h-6 text-secondary" />,
    stats: 'Top Core Vitals'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="py-32 relative overflow-hidden bg-white">
      <div className="section-container">
        <SectionHeader 
          title="Why Choose Vertexa" 
          subtitle="We bridge the gap between complex engineering and beautiful human-centric design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group premium-card h-full flex flex-col justify-between border-black/5"
            >
              <div>
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed mb-8">
                  {reason.description}
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 flex justify-between items-center group-hover:border-primary/10 transition-colors">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-primary/70">{reason.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
