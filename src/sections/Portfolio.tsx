import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const projects = [
  {
    title: 'KhammaGhani',
    category: 'Restaurant Website',
    image: '/projects/khammaghani.png',
    description: 'A modern, elegant website for a premium restaurant featuring an interactive menu and table reservation system.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Responsive Design'],
    demoUrl: 'https://khammaghani.online/',
    githubUrl: 'https://github.com/Ajaypal110/KhammaGhani',
    cost: '30,000',
    costUSD: '360'
  },
  {
    title: 'Arlyon',
    category: 'Dating Platform',
    image: '/projects/arlyon.png',
    description: 'A modern and intuitive dating platform designed to foster meaningful connections with real-time matching and chat features.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Real-time Chat', 'User Auth'],
    demoUrl: 'https://arlyon.vercel.app/',
    githubUrl: 'https://github.com/Ajaypal110/Arlyon',
    cost: '20,000',
    costUSD: '240'
  },
  {
    title: 'Wanderlust',
    category: 'Listing Platform',
    image: '/projects/wanderlust.png',
    description: 'A comprehensive travel and property listing platform that allows users to explore, book, and review unique accommodations worldwide.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API', 'MVC Architecture'],
    demoUrl: 'https://wanderlust-4mjx.onrender.com/listings',
    githubUrl: 'https://github.com/Ajaypal110/Wanderlust',
    cost: '15,000',
    costUSD: '180'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 relative bg-white">
      <div className="section-container">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Explore some of our recent work and see how we help businesses achieve their digital goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group premium-card overflow-hidden !p-0 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demoUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white text-primary rounded-full shadow-2xl hover:bg-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white text-secondary rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
                
                <div className="absolute top-4 right-4 translate-y-[-10px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    <Sparkles size={10} className="text-secondary" /> Featured
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest leading-none">
                    {project.category}
                  </span>
                  <span className="text-secondary text-xs font-black bg-secondary/5 px-2 py-1 rounded-md flex flex-col items-end">
                    <span>₹{project.cost}</span>
                    <span className="text-[10px] opacity-60">${project.costUSD}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-black text-dark group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05]">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 rounded-lg text-[10px] font-bold bg-primary/5 text-primary border border-primary/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Links (Visible only on mobile) */}
                <div className="flex md:hidden gap-3 pt-4 border-t border-black/[0.05]">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                  >
                    <ExternalLink size={14} /> Visit Website
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-secondary/20"
                  >
                    <Github size={14} /> GitHub
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
