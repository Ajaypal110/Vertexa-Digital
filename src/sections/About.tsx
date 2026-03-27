import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { InstagramColorIcon, LinkedinColorIcon } from '../components/ui/SocialIcons';


interface AboutProps {
  asH1?: boolean;
}

const About: React.FC<AboutProps> = ({ asH1 = false }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const TitleTag = asH1 ? 'h1' : 'h2';

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="section-container">
        {/* About & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em] bg-primary/5 px-4 py-2 rounded-full border border-primary/10">About Vertexa Digital</span>
              <TitleTag className="text-4xl md:text-5xl font-black text-dark leading-tight">
                Engineering <span className="gradient-text">Scalable Foundations</span> for Future Giants
              </TitleTag>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Vertexa Digital is a specialized web development agency dedicated to transforming complex challenges into high-performance digital products. We bridge the gap between visionary ideas and technical reality, serving as the digital backbone for startups, small businesses, and entrepreneurs worldwide.
            </p>

            <div className="p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-xl font-black text-dark mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Our Mission
              </h3>
              <p className="text-gray-600 text-base leading-relaxed italic">
                "To empower the next generation of businesses with enterprise-grade technical sophistication, ensuring every grand vision is built upon a robust, scalable, and beautifully engineered foundation."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] ${isMobile ? 'blur-lg' : 'blur-2xl'} opacity-50`} />
            <div className="relative z-10 p-2 premium-card overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Digital Strategy"
                className="rounded-[2.5rem] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Capabilities & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 p-10 bg-dark rounded-[2.5rem] text-white flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-6 leading-tight">What We Do <br /><span className="text-primary">Best</span></h3>
            <p className="opacity-70 text-base leading-relaxed mb-8">
              We specialize in high-end digital craftsmanship, focusing on the technologies that drive modern growth.
            </p>
            <div className="flex flex-wrap gap-2">
              {['MERN Stack', 'SaaS Architecture', 'Full-Stack', 'Web Optimization'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>

          <div className="p-10 bg-[#FAFBF9] rounded-[2.5rem] border border-black/5">
            <h4 className="text-xl font-black text-dark mb-4">Core Expertise</h4>
            <ul className="space-y-4">
              {[
                { t: 'Custom MERN Apps', d: 'Scalable React & Node.js products.' },
                { t: 'SaaS Platforms', d: 'Multi-tenant software solutions.' },
                { t: 'Performance Ops', d: 'Lightning fast load times.' }
              ].map(item => (
                <li key={item.t}>
                  <p className="font-bold text-dark text-sm">{item.t}</p>
                  <p className="text-gray-500 text-xs">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-[#FAFBF9] rounded-[2.5rem] border border-black/5">
            <h4 className="text-xl font-black text-dark mb-4">Why Vertexa?</h4>
            <ul className="space-y-4">
              {[
                { t: 'Precision Engineering', d: 'Clean code & scalable architecture.' },
                { t: 'Startup Speed', d: 'Agile development for fast movers.' },
                { t: 'Direct Access', d: 'Work directly with expert developers.' }
              ].map(item => (
                <li key={item.t} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-dark text-sm">{item.t}</p>
                    <p className="text-gray-500 text-xs">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-[3rem] overflow-hidden bg-gradient-to-br from-white to-[#FAFBF9] border border-black/5 p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 p-8 text-primary/10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H4.01705V11C4.01705 9.89543 4.91248 9 6.01705 9H18.017C19.1216 9 20.017 9.89543 20.017 11V21H14.017Z" /></svg>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl shrink-0">
              <img 
                src="/founder.jpeg" 
                alt="Ajaypal Singh - Founder & Lead Developer at Vertexa Digital" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] bg-primary/5 px-3 py-1.5 rounded-full">The Founder</span>
                <h3 className="text-3xl font-black text-dark mt-4">Ajaypal Singh</h3>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase">Lead Full-Stack Developer</p>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Driven by a passion for clean architecture and user-centric design, Ajaypal founded Vertexa Digital to bring enterprise-grade development to the startup ecosystem. With deep expertise in the MERN stack, he leads every project personally to ensure absolute technical perfection.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-dark leading-none">5+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Excellence Rating</span>
                </div>
                <div className="w-px h-10 bg-black/5 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-dark leading-none">100%</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Direct Commitment</span>
                </div>
                <div className="w-px h-10 bg-black/5 hidden sm:block" />
                <div className="flex items-center gap-4 mt-4 sm:mt-0 px-2 lg:px-4">
                  <a href="https://www.linkedin.com/in/ajaypal-singh-745967326/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 drop-shadow-sm">
                    <LinkedinColorIcon size={32} />
                  </a>
                  <a href="https://www.instagram.com/_ajaypal_singh_/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 drop-shadow-sm">
                    <InstagramColorIcon size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
