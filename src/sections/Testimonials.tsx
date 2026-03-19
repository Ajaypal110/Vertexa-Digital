import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'Vertexa Digital completely transformed our online presence. The new website is fast, beautiful, and has increased our conversion rate by 40%.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate Fitness',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Working with Vertexa was the best decision for my business. The landing page they built for us is a lead-generating machine. Top-tier design.',
    stars: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, Luxe Restaurante',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'Incredible attention to detail. They took our vague ideas and turned them into a stunning digital experience. Highly recommend their services.',
    stars: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 relative bg-[#0B0F19]">
      <div className="section-container">
        <SectionHeader 
          title="Client Success Stories" 
          subtitle="Don't just take our word for it. Hear from those who have built their future with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card flex flex-col justify-between group h-full relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>
              
              <div className="relative">
                <div className="flex gap-1 mb-8">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#6366F1" className="text-primary shrink-0" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic mb-10">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:blur-lg transition-all" />
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full border-2 border-primary/30 relative z-10 grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-black leading-none">{t.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
