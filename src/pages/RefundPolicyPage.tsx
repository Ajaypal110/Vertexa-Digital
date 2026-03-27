import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund Policy | Vertexa Digital</title>
        <meta name="description" content="Vertexa Digital's refund policy. Learn about eligibility, non-refundable situations, and project cancellation terms for our web services." />
        <link rel="canonical" href="https://vertexadigital.online/refund-policy" />
        <meta property="og:title" content="Refund Policy | Vertexa Digital" />
        <meta property="og:description" content="Fair and transparent refund terms for our custom web development projects." />
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
                Refund <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-500 text-sm">Vertexa Digital • Last updated 2026</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              Vertexa Digital aims to provide quality services. Our refund policy is designed to be fair and transparent for all parties involved.
            </p>

            {/* Eligibility */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Eligibility
              </h2>
              <p className="text-gray-600">
                Refunds may be considered only if project work has not started. Once you request a refund within this window, we will review your request and respond within 3–5 business days.
              </p>
            </motion.section>

            {/* Non-refundable Situations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                Non-refundable Situations
              </h2>
              <p className="text-gray-600 mb-4">Refunds will not be issued in the following cases:</p>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Project development has started',
                  'Milestones have been delivered and approved',
                  'Client changes mind after work begins',
                  'Lack of communication from client causing project stall',
                  'Client fails to provide required materials within agreed timeframe'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Partial Refund & Cancellation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                Partial Refund & Cancellation
              </h2>
              <p className="text-gray-600 mb-4">
                In some cases, partial refunds may be considered depending on the amount of work completed. The refund amount will be calculated based on the percentage of deliverables not yet completed.
              </p>
              <p className="text-gray-600">
                Either party may cancel a project before development begins. Once development has started, cancellation terms will be determined based on work completed and resources already allocated.
              </p>
            </motion.section>

            {/* How to Request */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                How to Request a Refund
              </h2>
              <p className="text-gray-600 mb-4">To request a refund, please follow these steps:</p>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Send an email to support@vertexadigital.online with subject "Refund Request"',
                  'Include your project name and payment details',
                  'Explain the reason for your refund request',
                  'Our team will review your request within 3–5 business days'
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10"
            >
              <h2 className="text-xl font-black text-primary mb-3">Refund Requests</h2>
              <p className="text-gray-600 mb-2">
                Contact: <a href="mailto:support@vertexadigital.online" className="text-primary hover:underline font-medium">support@vertexadigital.online</a>
              </p>
              <p className="text-xs text-secondary italic">All decisions are made on a case-by-case basis.</p>
            </motion.div>

            <p className="mt-12 text-center text-sm text-gray-400 italic">
              This refund policy is subject to change. Please review it periodically.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicyPage;
