import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const skills = [
  'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'REST API'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="About Vertexa" 
          subtitle="We are passionate builders dedicated to creating exceptional digital products."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-30 blur-2xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl glass-card p-2"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Building <span className="gradient-text">Fast, Modern</span> and Scalable Websites
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Vertexa Digital is a web development agency focused on building fast, modern and scalable websites. We help startups and businesses create powerful online presence using modern technologies.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed pt-2">
              Our team of expert developers and designers work collaboratively to deliver cutting-edge solutions tailored to your unique business requirements.
            </p>

            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Technologies We Use</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/50 transition-all duration-300"
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
