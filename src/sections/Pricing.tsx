import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const plans = [
  {
    name: 'Starter',
    price: '3,000',
    priceUSD: '35',
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
    price: '7,000',
    priceUSD: '85',
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
    price: '15,000',
    priceUSD: '180',
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
    <section id="pricing" className="py-20 relative bg-white">
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
              className={`flex flex-col p-10 rounded-[2.5rem] relative transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-white border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                  : 'bg-white border border-black/5 hover:border-primary/20 hover:shadow-xl'
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
                <h3 className={`text-xl font-black mb-2 ${plan.highlighted ? 'text-primary' : 'text-dark'}`}>{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed h-10">{plan.description}</p>
                <div className="mt-8 flex flex-col items-start gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-primary">₹</span>
                    <span className="text-6xl font-black text-dark">{plan.price}</span>
                  </div>
                  <div className="flex items-baseline gap-1 opacity-60">
                    <span className="text-lg font-black text-primary">$</span>
                    <span className="text-3xl font-black text-dark">{plan.priceUSD}</span>
                    <span className="text-gray-500 font-bold ml-2 text-xs">/ project</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-600 group">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.highlighted ? 'bg-primary/10 text-primary' : 'bg-black/5 text-gray-400 group-hover:bg-primary group-hover:text-white'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-8 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl ${
                plan.highlighted 
                  ? 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-secondary/5 text-secondary border border-secondary/10 hover:bg-secondary hover:text-white active:scale-[0.98]'
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
