import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
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
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.projectDetails}`;
    window.location.href = `mailto:vertexadigital.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsappNumber = "+918094548637";

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0B0F19]">
      {/* Decorative Orbs */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="section-container">
        <SectionHeader 
          title="Ready to Scale?" 
          subtitle="Let's build something exceptional together. Reach out for a consultation."
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-20 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 space-y-6"
          >
            <div className="premium-card space-y-10 group">
              <h3 className="text-3xl font-black text-white">Contact Info</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 group-hover:bg-primary transition-colors group-hover:text-white">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">Email Us</p>
                    <a href="mailto:vertexadigital.dev@gmail.com" className="text-white font-bold text-xl hover:text-primary transition-colors">vertexadigital.dev@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 group-hover:bg-primary transition-colors group-hover:text-white">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">Call Us</p>
                    <a href="tel:+918094548637" className="text-white font-bold text-xl hover:text-primary transition-colors">+91 8094548637</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 group-hover:bg-primary transition-colors group-hover:text-white">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">Visit Us</p>
                    <p className="text-white font-bold text-xl">Udaipur, RJ, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 px-8 rounded-2xl bg-[#25D366] text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-2xl shadow-[#25D366]/20"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="premium-card !p-12 space-y-8 h-full flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-700"
                    placeholder="Steve Jobs"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-700"
                    placeholder="steve@apple.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3 flex-grow">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Project Details</label>
                <textarea 
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-gray-700"
                  placeholder="Tell us about your digital goals, timeline, and budget..."
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                className="btn-primary w-full py-5 flex items-center justify-center gap-3 group"
              >
                Launch Project <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
