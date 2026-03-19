import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'REST API'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#0B0F19]">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative z-10 p-2 glass-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700 w-full"
              />
              <div className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <p className="text-3xl font-black text-white leading-none">5+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-2">Projects Done</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em] bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Our Story</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Building <span className="gradient-text">Scalable Future</span> for Businesses
              </h2>
            </div>
            
            <p className="text-gray-400 text-xl leading-relaxed">
              Vertexa Digital is a web development agency focused on building fast, modern and scalable websites. We help startups and businesses create powerful online presence using modern technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-white font-black text-lg mb-2">Philosophy</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Design with purpose, build with precision. We don't just write code; we craft experiences.</p>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-2">Excellence</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Every pixel matters. Every millisecond counts. We strive for absolute digital perfection.</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-white/60 font-bold uppercase tracking-widest text-xs mb-6">Expertise Stack</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, border: '1px solid var(--color-primary)' }}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 font-bold text-sm transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
