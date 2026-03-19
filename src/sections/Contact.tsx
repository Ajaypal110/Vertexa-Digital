import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../components/ui/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // EmailJS Configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.projectDetails,
      to_name: 'Vertexa Digital',
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', projectDetails: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setError('Form submission failed. Please try again or use WhatsApp for faster contact.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "+918094548637";

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      {/* Decorative Orbs */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="section-container">
        <SectionHeader 
          title="Ready to Scale?" 
          subtitle="Let's build something exceptional together. Reach out for a consultation."
        />

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mt-10 sm:mt-20 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 space-y-6"
          >
            <div className="premium-card !p-6 sm:p-10 space-y-10 group border-black/5 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-black text-dark">Contact Info</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 group-hover:bg-primary transition-colors group-hover:text-white">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Email Us</p>
                    <a href="mailto:vertexadigital.dev@gmail.com" className="text-dark font-bold text-lg sm:text-xl hover:text-primary transition-colors break-all">vertexadigital.dev@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 group-hover:bg-primary transition-colors group-hover:text-white">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Call Us</p>
                    <a href="tel:+918094548637" className="text-dark font-bold text-lg sm:text-xl hover:text-primary transition-colors">+91 8094548637</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 group-hover:bg-primary transition-colors group-hover:text-white">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Visit Us</p>
                    <p className="text-dark font-bold text-xl">Udaipur, RJ, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-black/5">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 px-8 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-xl shadow-primary/20"
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
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="premium-card p-8 sm:!p-12 h-full flex flex-col items-center justify-center text-center space-y-6 shadow-sm border-black/5"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-dark">Message Received!</h3>
                  <p className="text-gray-600 text-base sm:text-lg max-w-sm">
                    Thank you for reaching out. Your project details have been sent successfully. We will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="premium-card p-6 sm:!p-12 space-y-6 sm:space-y-8 h-full flex flex-col justify-between shadow-sm border-black/5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/[0.02] border border-black/5 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300"
                        placeholder="Steve Jobs"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/[0.02] border border-black/5 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300"
                        placeholder="steve@apple.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Project Details</label>
                    <textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-black/[0.02] border border-black/5 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                      placeholder="Tell us about your digital goals, timeline, and budget..."
                    />
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm bg-red-500/5 p-4 rounded-xl border border-red-500/10"
                    >
                      <AlertCircle size={16} />
                      {error}
                    </motion.div>
                  )}

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-primary w-full py-5 flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending Lead...' : 'Launch Project'} 
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
