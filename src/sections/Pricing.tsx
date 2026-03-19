import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const plans = [
  {
    name: 'Starter',
    price: '3000',
    description: 'Perfect for small businesses and personal portfolios.',
    features: [
      'Single Page Website',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Free Support'
    ],
    highlighted: false
  },
  {
    name: 'Business',
    price: '7000',
    description: 'Ideal for growing businesses needing more power.',
    features: [
      'Up to 5 Pages',
      'Custom Animations',
      'Advanced SEO Optimization',
      'CMS Integration',
      'Speed Optimization',
      '3 Months Free Support'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    price: '15000',
    description: 'Complete digital solution for scaleups and enterprises.',
    features: [
      'Unlimited Pages',
      'E-commerce Functionality',
      'Custom Database Solutions',
      'Payment Gateway Integration',
      'Performance Monitoring',
      'Priority 24/7 Support'
    ],
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative bg-[#0B0F19]">
      <div className="section-container">
        <SectionHeader 
          title="Transparent Pricing" 
          subtitle="Simple, honest pricing for high-end digital products. No hidden costs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col p-10 rounded-[2.5rem] relative transition-all duration-500 overflow-hidden ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-[#0D1424] to-[#0D1424]/40 border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                  : 'bg-[#0D1117] border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                   <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                    <Sparkles size={12} fill="white" /> Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-xl font-black mb-2 ${plan.highlighted ? 'text-primary' : 'text-white'}`}>{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed h-10">{plan.description}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-gray-400">₹</span>
                  <span className="text-6xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 font-bold ml-2">/ project</span>
                </div>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-300 group">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-500 group-hover:bg-primary group-hover:text-white'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-8 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl ${
                plan.highlighted 
                  ? 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-white/5 text-white hover:bg-white/10 active:scale-[0.98]'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
