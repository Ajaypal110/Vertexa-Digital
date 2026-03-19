import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Wrench, Bug, Code2, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built from scratch with modern technologies tailored to your business needs.',
    icon: <Monitor className="w-6 h-6 text-primary" />,
    gradient: 'from-primary/20 to-secondary/20',
    details: {
      features: ['Full-stack MERN development', 'Custom architecture', 'Scalable database design', 'Admin dashboard', 'Deployment & hosting'],
      approach: 'We follow a rigorous development cycle from database indexing to frontend state management, ensuring your enterprise-grade application is ready for millions of users.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS']
    }
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn your visitors into customers with beautiful, optimized layouts.',
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    gradient: 'from-secondary/20 to-tertiary/20',
    details: {
      features: ['Conversion optimization', 'A/B tested layouts', 'Fast load speeds', 'Mobile-first design', 'Copywriting assistance'],
      approach: 'Every pixel of our landing pages is designed to guide the user towards a single goal: Conversion. We prioritize speed and psychological triggers.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel']
    }
  },
  {
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast, and responsive digital experience that users love.',
    icon: <Wrench className="w-6 h-6 text-primary" />,
    gradient: 'from-tertiary/20 to-primary/20',
    details: {
      features: ['Modern accessibility', 'SEO preservation', 'Brand realignment', 'Performance boost', 'UX/UI audit'],
      approach: 'We don’t just reskin your site; we rebuild the foundation to meet modern standards while keeping your existing SEO equity and improving engagement.',
      tech: ['Figma', 'React', 'Lighthouse', 'SEO Tools']
    }
  },
  {
    title: 'Bug Fixing',
    description: 'Fast and reliable resolution of technical issues to ensure your website runs smoothly without interruptions.',
    icon: <Bug className="w-6 h-6 text-secondary" />,
    gradient: 'from-primary/20 to-secondary/20',
    details: {
      features: ['Security patching', 'Logic error resolution', 'Database cleanup', 'API troubleshooting', 'Legacy code refactoring'],
      approach: 'Our deep-dive debugging process identifies root causes within hours. We provide thorough testing to ensure the issue never returns.',
      tech: ['Chrome DevTools', 'Postman', 'Sentry', 'Unit Tests']
    }
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and services to extend the functionality of your web applications.',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    gradient: 'from-secondary/20 to-tertiary/20',
    details: {
      features: ['Payment gateways', 'CRM synchronization', 'Auth0/Firebase setup', 'Custom webhooks', 'Third-party SaaS links'],
      approach: 'We specialize in making disparate systems talk to each other securely and efficiently, ensuring data flows where it needs to without bottlenecks.',
      tech: ['REST', 'GraphQL', 'Stripe', 'Twilio', 'Firebase']
    }
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your website to improve user experience and SEO rankings with our advanced optimization techniques.',
    icon: <Zap className="w-6 h-6 text-secondary" />,
    gradient: 'from-tertiary/20 to-primary/20',
    details: {
      features: ['Core Web Vitals improvement', 'Image compression', 'Code splitting', 'Asset minification', 'Server-side rendering'],
      approach: 'We push for 90+ scores on PageSpeed Insights. Speed is a competitive advantage, and we make your site faster than the competition.',
      tech: ['Next.js', 'Cloudflare', 'Gzip', 'Vercel Edge']
    }
  }
];

interface ServicesProps {
  onLearnMore?: (service: any) => void;
}

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  return (
    <section id="services" className="py-20 relative bg-white">
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
                <button 
                  onClick={() => onLearnMore?.(service)}
                  className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 transform md:translate-x-[-10px] md:group-hover:translate-x-[0px] transition-all duration-500 hover:scale-105"
                >
                  Learn More <Zap size={14} className="fill-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
