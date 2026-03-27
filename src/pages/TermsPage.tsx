import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Vertexa Digital</title>
        <meta name="description" content="Read our terms and conditions for web development services. Project scope, payment terms, and client responsibilities explained clearly." />
        <link rel="canonical" href="https://vertexadigital.online/terms" />
        <meta property="og:title" content="Terms & Conditions | Vertexa Digital" />
        <meta property="og:description" content="Clear and transparent terms for all our digital service engagements." />
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
                Terms & <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-gray-500 text-sm">Vertexa Digital • Last updated 2026</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              By using Vertexa Digital services you agree to the following terms. Please read them carefully before engaging our services.
            </p>

            {/* Services */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Services
              </h2>
              <p className="text-gray-600">
                Vertexa Digital provides web development, website design, and software development services based on agreed project requirements. The scope of services is determined during the initial consultation and documented before development begins.
              </p>
            </motion.section>

            {/* Project Scope & Payments */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                Project Scope & Payments
              </h2>
              <p className="text-gray-600 mb-4">
                Project features and timelines depend on requirements agreed before development starts. Any additional features beyond the original scope may require additional cost and timeline adjustments.
              </p>
              <p className="text-gray-600">
                Projects may require partial or full advance payment depending on scope. Work begins after payment confirmation. Payment terms will be communicated clearly before project commencement.
              </p>
            </motion.section>

            {/* Delivery & Client Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                Delivery & Client Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                Delivery timelines depend on project complexity and client communication. Estimated timelines are provided at the start of each project.
              </p>
              <p className="text-gray-600">
                Clients must provide necessary content, requirements, and feedback on time to avoid delays. Delays caused by late client responses may extend the project timeline accordingly.
              </p>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                Intellectual Property
              </h2>
              <p className="text-gray-600">
                After full payment, the client owns the final delivered project unless otherwise agreed. Vertexa Digital retains the right to showcase the project in its portfolio unless a non-disclosure agreement is in place.
              </p>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                Vertexa Digital is not responsible for losses resulting from website downtime, third party services, or misuse of delivered software. Our liability is limited to the amount paid for the specific service in question.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10"
            >
              <h2 className="text-xl font-black text-primary mb-3">Questions?</h2>
              <p className="text-gray-600">
                If you have any questions about these terms, please contact us at:{' '}
                <a href="mailto:support@vertexadigital.online" className="text-primary hover:underline font-medium">
                  support@vertexadigital.online
                </a>
              </p>
            </motion.div>

            <p className="mt-12 text-center text-sm text-gray-400 italic">
              We may update terms anytime without prior notice. By using our services you agree to these terms.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
