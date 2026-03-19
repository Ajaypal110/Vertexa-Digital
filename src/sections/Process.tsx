import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your requirements, target audience, and business goals to outline the perfect digital strategy.',
    icon: <Search className="w-8 h-8 text-primary" />
  },
  {
    title: 'Design',
    description: 'Creating stunning, user-centric interfaces with detailed wireframes and high-fidelity mockups.',
    icon: <PenTool className="w-8 h-8 text-secondary" />
  },
  {
    title: 'Development',
    description: 'Turning designs into reality using modern tech stacks, ensuring clean code, scaleability, and peak performance.',
    icon: <Code className="w-8 h-8 text-primary" />
  },
  {
    title: 'Launch',
    description: 'Rigorous testing, SEO optimization, and final deployment to deliver a flawless product to your users.',
    icon: <Rocket className="w-8 h-8 text-secondary" />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeader 
          title="Our Process" 
          subtitle="A proven, transparent workflow designed to deliver stunning results on time, every time."
        />

        <div className="relative mt-24">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-black/5 hidden lg:block -translate-y-1/2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="premium-card h-full text-center group hover:bg-[#FCFDFB] relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black border-4 border-white text-xl transition-all duration-300 group-hover:scale-110 shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="pt-6">
                    <div className="mb-6 inline-flex p-4 rounded-3xl bg-primary/5 border border-primary/10 group-hover:border-primary group-hover:bg-primary transition-all duration-500 group-hover:text-white">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl font-black text-dark mb-4 transition-colors group-hover:text-primary">{step.title}</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
