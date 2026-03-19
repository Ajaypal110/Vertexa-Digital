import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your requirements, target audience, and business goals to outline the perfect digital strategy.',
    icon: <Search className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: 'Design',
    description: 'Creating stunning, user-centric interfaces with detailed wireframes and high-fidelity mockups.',
    icon: <PenTool className="w-8 h-8 text-[var(--color-secondary)]" />
  },
  {
    title: 'Development',
    description: 'Turning designs into reality using modern tech stacks, ensuring clean code, scaleability, and peak performance.',
    icon: <Code className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: 'Launch',
    description: 'Rigorous testing, SEO optimization, and final deployment to deliver a flawless product to your users.',
    icon: <Rocket className="w-8 h-8 text-[var(--color-secondary)]" />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-[#080d1a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Our Process" 
          subtitle="A proven, transparent workflow designed to deliver stunning results on time, every time."
        />

        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Vertical Line for timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-20 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                `}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0B0F19] border-4 border-[var(--color-primary)] rounded-full items-center justify-center z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-5/12"
                >
                  <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-xl group-hover:bg-[var(--color-primary)]/10 transition-colors" />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        {step.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Empty space for opposite side */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
