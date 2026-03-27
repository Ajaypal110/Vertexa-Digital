import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Vertexa Digital</title>
        <meta name="description" content="Read Vertexa Digital's privacy policy. Learn how we collect, use, and protect your personal data in compliance with Google AdSense and international standards." />
        <link rel="canonical" href="https://vertexadigital.online/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Vertexa Digital" />
        <meta property="og:description" content="Transparency is our priority. Read about our data protection and cookie policies." />
      </Helmet>

      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        {/* Decorative Orbs */}
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
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-500 text-sm">Vertexa Digital • Last updated 2026</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              Vertexa Digital respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>

            {/* Information We Collect */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">We may collect personal information such as:</p>
              <ul className="space-y-3 text-gray-600">
                {['Name', 'Email address', 'Phone number', 'Project requirements submitted through contact forms', 'Browser type and IP address (via analytics)'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* How We Use Information */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                How We Use Information
              </h2>
              <p className="text-gray-600 mb-4">We use this information to:</p>
              <ul className="space-y-3 text-gray-600">
                {['Respond to inquiries', 'Provide our services', 'Improve our website', 'Communicate regarding projects', 'Analyse website traffic and usage patterns'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Data Protection & Cookies */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                Data Protection & Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We take reasonable security measures to protect your information. We do not sell or share your personal data with third parties except when required for service delivery.
              </p>
              <p className="text-gray-600 mb-4">
                Our website may use cookies to improve user experience and analyze traffic. Cookies are small text files stored on your device that help us understand how visitors interact with our website.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-black/5">
                <p className="text-gray-600 text-sm">
                  <span className="font-bold text-dark">Cookies we use: </span>
                  Analytics cookies (Google Analytics) to track page views and user behavior, and functional cookies that remember your preferences for a better browsing experience.
                </p>
              </div>
            </motion.section>

            {/* Google AdSense */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                Google AdSense & Advertising
              </h2>
              <p className="text-gray-600 mb-4">
                This website uses Google AdSense, a service provided by Google, to display advertisements. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to this website or other websites on the internet.
              </p>
              <p className="text-gray-600 mb-4">
                Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.
              </p>
              <p className="text-gray-600">
                You may opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Google Ads Settings
                </a>.
              </p>
            </motion.section>

            {/* Third Party Services */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-12 p-8 bg-[#FAFBF9] rounded-[2rem] border border-black/5"
            >
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                Third Party Services
              </h2>
              <p className="text-gray-600">
                We may use third-party services such as hosting providers, analytics tools (Google Analytics), advertising services (Google AdSense), or payment processors. These services may collect information as specified in their own privacy policies.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10"
            >
              <h2 className="text-xl font-black text-primary mb-3">Contact Us</h2>
              <p className="text-gray-700 font-medium mb-1">Vertexa Digital</p>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:support@vertexadigital.online" className="text-primary hover:underline font-medium">
                  support@vertexadigital.online
                </a>
              </p>
            </motion.div>

            <p className="mt-12 text-center text-sm text-gray-400 italic">
              By using this website you agree to this privacy policy. We may update this policy from time to time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
