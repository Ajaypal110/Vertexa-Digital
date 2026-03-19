import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const projects = [
  {
    title: 'KhammaGhani',
    category: 'Restaurant Website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'A modern, elegant website for a premium restaurant featuring an interactive menu and table reservation system.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://khammaghani.online/',
    githubUrl: 'https://github.com/Ajaypal110/KhammaGhani'
  },
  {
    title: 'Arlyon',
    category: 'Dating Platform',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'A modern and intuitive dating platform designed to foster meaningful connections with real-time matching and chat features.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://arlyon.vercel.app/',
    githubUrl: 'https://github.com/Ajaypal110/Arlyon'
  },
  {
    title: 'Wanderlust',
    category: 'Listing Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive travel and property listing platform that allows users to explore, book, and review unique accommodations worldwide.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://wanderlust-4mjx.onrender.com/listings',
    githubUrl: 'https://github.com/Ajaypal110/Wanderlust'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Explore some of our recent work and see how we help businesses achieve their digital goals."
        />

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden glass-card p-2 border border-white/10">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.demoUrl} className="p-3 bg-white/10 hover:bg-[var(--color-primary)] rounded-full text-white backdrop-blur-md transition-colors border border-white/20">
                      <ExternalLink size={24} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-white/10 hover:bg-[#333] rounded-full text-white backdrop-blur-md transition-colors border border-white/20">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={project.demoUrl} className="flex items-center gap-2 text-white hover:text-[var(--color-primary)] transition-colors font-medium">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
