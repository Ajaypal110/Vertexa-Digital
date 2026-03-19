import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
    <section id="pricing" className="py-24 relative bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Transparent Pricing" 
          subtitle="Choose the perfect plan for your business needs. No hidden fees, just great results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl relative ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-primary)]/10 border-2 border-[var(--color-primary)] shadow-2xl shadow-[var(--color-primary)]/20 transform md:-translate-y-4' 
                  : 'glass-card border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">₹</span>
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-[var(--color-secondary)] w-5 h-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:opacity-90 hover:scale-105'
                  : 'bg-white/10 text-white hover:bg-[var(--color-primary)]'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
