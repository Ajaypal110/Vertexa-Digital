import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ServiceAgreementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Service Agreement | Vertexa Digital</title>
        <meta name="description" content="Vertexa Digital service agreement. Outlining our project process, communication standards, and quality guarantees for web development." />
        <link rel="canonical" href="https://vertexadigital.online/service-agreement" />
        <meta property="og:title" content="Service Agreement | Vertexa Digital" />
        <meta property="og:description" content="Understand how we deliver excellence in every web development project." />
      </Helmet>

      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />
        <div className="absolute left-0 bottom-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/5 rounded-full blur-[50px] md:blur-[100px] -z-10" />

        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em] bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-dark mt-6 mb-4">
                Service <span className="gradient-text">Agreement</span>
              </h1>
              <p className="text-gray-500 text-sm">Vertexa Digital • Last updated 2026</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              This agreement outlines how Vertexa Digital delivers services and what you can expect when working with us.
            </p>

            {/* Services Offered */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Services Offered
              </h2>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Website development (custom & CMS-based)',
                  'Web applications & SaaS platforms',
                  'MERN stack development',
                  'Website improvements & redesign',
                  'Performance optimization & bug fixing',
                  'API integration & third-party services'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Project Process */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                Project Process
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Requirement Discussion', desc: 'We begin by understanding your goals, target audience, and technical needs.' },
                  { step: '2', title: 'Planning & Proposal', desc: 'A detailed project plan with timeline and cost estimates is prepared.' },
                  { step: '3', title: 'Development', desc: 'Our team builds your solution with regular progress updates and check-ins.' },
                  { step: '4', title: 'Testing & QA', desc: 'Rigorous testing across devices and browsers to ensure quality.' },
                  { step: '5', title: 'Delivery & Launch', desc: 'Final handover with deployment support and documentation.' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-black flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-dark text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Communication */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                Policy Details
              </h2>
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-2xl border border-black/5">
                  <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-secondary">Communication</h4>
                  <p className="text-gray-600 text-sm">Project communication happens via email, Fiverr, Upwork, or agreed platforms. We aim to respond to all messages within 24 hours on business days.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-black/5">
                  <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-secondary">Timeline</h4>
                  <p className="text-gray-600 text-sm">Project timelines depend on complexity and client feedback speed. Delays caused by third-party dependencies or scope changes will be communicated promptly.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-black/5">
                  <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-primary">Revisions & Support</h4>
                  <p className="text-gray-600 text-sm">Reasonable revisions may be provided based on the agreed scope. Basic post-delivery support is provided for minor fixes for a period of 7–14 days after launch.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-black/5">
                  <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-tertiary">Confidentiality</h4>
                  <p className="text-gray-600 text-sm">Client project information will remain strictly confidential. We will not share or disclose any proprietary information without written consent.</p>
                </div>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10"
            >
              <h2 className="text-xl font-black text-primary mb-3">Questions About This Agreement?</h2>
              <p className="text-gray-600">
                Contact us at:{' '}
                <a href="mailto:support@vertexadigital.online" className="text-primary hover:underline font-medium">
                  support@vertexadigital.online
                </a>
              </p>
            </motion.div>

            <p className="mt-12 text-center text-sm text-secondary italic">
              By hiring Vertexa Digital you agree to this service agreement.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAgreementPage;
