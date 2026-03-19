import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'Vertexa Digital completely transformed our online presence. The new website is fast, beautiful, and has increased our conversion rate by 40%. The team was professional and delivered exactly what they promised.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate Fitness',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Working with Vertexa was the best decision for my business. The landing page they built for us is a lead-generating machine. The design is modern, and the animations add that premium feel we wanted.',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, Luxe Restaurante',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'Incredible attention to detail. They took our vague ideas and turned them into a stunning digital experience. Their knowledge of modern web technologies, specifically React and animations, is top-notch.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Client Feedback" 
          subtitle="Don't just take our word for it. Read what our satisfied clients have to say about working with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 text-[var(--color-primary)]/20 w-12 h-12" />
              
              <div className="mb-8">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {/* Star Rating */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed text-lg">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-white/20" />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-[var(--color-secondary)] text-sm">{t.role}</p>
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
