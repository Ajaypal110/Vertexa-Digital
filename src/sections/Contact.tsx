import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thanks for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', projectDetails: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-[var(--color-secondary)]/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Let's Build Together" 
          subtitle="Ready to start your next project? Get in touch with us today to discuss your ideas."
        />

        <div className="flex flex-col lg:flex-row gap-16 mt-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg border border-[var(--color-primary)]/20">
                    <MapPin className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Our Location</p>
                    <p className="text-white font-medium text-lg mt-1">Navi Mumbai, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg border border-[var(--color-primary)]/20">
                    <Phone className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-medium text-lg mt-1">+91 XXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg border border-[var(--color-primary)]/20">
                    <Mail className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-medium text-lg mt-1">vertexadigital@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4 border-l-2 border-[var(--color-secondary)] pl-3">
                  We aim to respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="projectDetails" className="text-gray-300 font-medium">Project Details</label>
                <textarea 
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
