import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Typically, a website takes between 3 to 7 business days to launch, depending on the complexity and scope of the project. We prioritize speed without sacrificing our premium quality standards."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern, high-performance tech stacks including React, Next.js, Tailwind CSS, Framer Motion, Node.js, and MongoDB. This ensures your site is fast, scalable, and secure."
  },
  {
    question: "Do you provide support?",
    answer: "Yes! Every project includes a free support period (starting from 1 month for Starter plans). We're also available for ongoing maintenance and future feature updates."
  },
  {
    question: "Do you redesign websites?",
    answer: "Absolutely. We can take your existing website and transform it into a modern, high-converting digital experience using our premium design patterns."
  }
];

const FAQItem: React.FC<{ faq: typeof faqs[0], index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-8 flex items-center justify-between text-left transition-all duration-300 rounded-[2rem] border ${
          isOpen ? 'bg-[#111620] border-primary shadow-2xl shadow-primary/10' : 'bg-[#0D1117] border-white/5 hover:border-white/15'
        }`}
      >
        <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-8 pb-10 text-gray-400 leading-relaxed text-lg border-x border-b border-primary/10 rounded-b-[2rem] -mt-8 bg-[#111620]/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 relative bg-[#0B0F19]">
      <div className="section-container">
        <SectionHeader 
          title="Common Questions" 
          subtitle="Everything you need to know about building your digital future with Vertexa."
        />

        <div className="max-w-3xl mx-auto mt-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
