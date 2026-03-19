import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Wrench, Bug, Code2, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built from scratch with modern technologies tailored to your business needs.',
    icon: <Monitor className="w-6 h-6 text-primary" />,
    gradient: 'from-primary/20 to-secondary/20'
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn your visitors into customers with beautiful, optimized layouts.',
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    gradient: 'from-secondary/20 to-tertiary/20'
  },
  {
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast, and responsive digital experience that users love.',
    icon: <Wrench className="w-6 h-6 text-primary" />,
    gradient: 'from-tertiary/20 to-primary/20'
  },
  {
    title: 'Bug Fixing',
    description: 'Fast and reliable resolution of technical issues to ensure your website runs smoothly without interruptions.',
    icon: <Bug className="w-6 h-6 text-secondary" />,
    gradient: 'from-primary/20 to-secondary/20'
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and services to extend the functionality of your web applications.',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    gradient: 'from-secondary/20 to-tertiary/20'
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your website to improve user experience and SEO rankings with our advanced optimization techniques.',
    icon: <Zap className="w-6 h-6 text-secondary" />,
    gradient: 'from-tertiary/20 to-primary/20'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-white">
      <div className="section-container">
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
              className="gradient-border group"
            >
              <div className="p-10 flex flex-col h-full bg-white rounded-2xl relative overflow-hidden group-hover:bg-primary/5 transition-all duration-300">
                <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="mb-8 inline-flex p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-[0px] transition-all duration-500">
                  Learn More <Zap size={14} className="fill-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
