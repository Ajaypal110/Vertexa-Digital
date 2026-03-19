import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Wrench, Bug, Code2, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built from scratch with modern technologies tailored to your business needs.',
    icon: <Monitor className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn your visitors into customers with beautiful, optimized layouts.',
    icon: <Smartphone className="w-8 h-8 text-[var(--color-secondary)]" />
  },
  {
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast, and responsive digital experience that users love.',
    icon: <Wrench className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: 'Bug Fixing',
    description: 'Fast and reliable resolution of technical issues to ensure your website runs smoothly without interruptions.',
    icon: <Bug className="w-8 h-8 text-[var(--color-secondary)]" />
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and services to extend the functionality of your web applications.',
    icon: <Code2 className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your website to improve user experience and SEO rankings with our advanced optimization techniques.',
    icon: <Zap className="w-8 h-8 text-[var(--color-secondary)]" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive digital solutions designed to elevate your brand and drive measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-full blur-2xl group-hover:bg-[var(--color-primary)]/40 transition-all duration-500" />
              
              <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-[var(--color-primary)]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
