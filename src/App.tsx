import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import WhatsAppButton from './components/ui/WhatsAppButton';
import LoadingScreen from './components/ui/LoadingScreen';
import BrandedModal from './components/ui/BrandedModal';
import Hero from './sections/Hero';
import TrustIndicators from './sections/TrustIndicators';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <div className="bg-white">
      <LoadingScreen />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <TrustIndicators />
        <WhyChooseUs />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
        onTermsClick={() => setIsTermsOpen(true)}
        onRefundClick={() => setIsRefundOpen(true)}
        onServiceClick={() => setIsServiceOpen(true)}
      />

      {/* Privacy Modal */}
      <BrandedModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
        subtitle="Vertexa Digital • Last updated 2026"
      >
        <p className="text-gray-600 leading-relaxed mb-8">
          Vertexa Digital respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Information We Collect
          </h3>
          <p className="text-gray-600 mb-2">We may collect personal information such as:</p>
          <ul className="space-y-2 text-gray-600 list-disc ml-5">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project requirements submitted through contact forms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            How We Use Information
          </h3>
          <p className="text-gray-600 mb-2">We use this information to:</p>
          <ul className="space-y-2 text-gray-600 list-disc ml-5">
            <li>Respond to inquiries</li>
            <li>Provide our services</li>
            <li>Improve our website</li>
            <li>Communicate regarding projects</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Data Protection & Cookies
          </h3>
          <p className="text-gray-600 mb-4">We take reasonable security measures to protect your information. We do not sell or share your personal data with third parties except when required for service delivery.</p>
          <p className="text-gray-600">Our website may use basic cookies to improve user experience and analyze traffic.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            Third Party Services
          </h3>
          <p className="text-gray-600">We may use services like hosting providers, analytics tools, or payment processors.</p>
        </section>

        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="text-lg font-bold text-primary mb-2">Contact</h3>
          <p className="text-gray-700 font-medium">Vertexa Digital</p>
          <p className="text-gray-600">Email: <a href="mailto:vertexadigital.dev@gmail.com" className="hover:underline">vertexadigital.dev@gmail.com</a></p>
        </div>

        <p className="mt-10 text-center text-sm text-gray-400 italic">
          By using this website you agree to this privacy policy.
        </p>
      </BrandedModal>

      {/* Terms Modal */}
      <BrandedModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)}
        title="Terms & Conditions"
        subtitle="Vertexa Digital • Last updated 2026"
      >
        <p className="text-gray-600 leading-relaxed mb-8">
          By using Vertexa Digital services you agree to the following terms:
        </p>
        
        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Services
          </h3>
          <p className="text-gray-600">Vertexa Digital provides web development, website design, and software development services based on agreed project requirements.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Project Scope & Payments
          </h3>
          <p className="text-gray-600 mb-4">Project features and timelines depend on requirements agreed before development starts. Any additional features may require additional cost.</p>
          <p className="text-gray-600">Projects may require partial or full advance payment depending on scope. Work begins after payment confirmation.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Delivery & Client Responsibilities
          </h3>
          <p className="text-gray-600 mb-4">Delivery timelines depend on project complexity and client communication.</p>
          <p className="text-gray-600">Clients must provide necessary content, requirements and feedback on time to avoid delays.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            Intellectual Property
          </h3>
          <p className="text-gray-600">After full payment, the client owns the final delivered project unless otherwise agreed.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
            Limitation of Liability
          </h3>
          <p className="text-gray-600">Vertexa Digital is not responsible for losses resulting from website downtime, third party services, or misuse of delivered software.</p>
        </section>

        <p className="mt-10 text-center text-sm text-gray-400 italic">
          We may update terms anytime without prior notice. By using our services you agree to these terms.
        </p>
      </BrandedModal>

      {/* Refund Policy Modal */}
      <BrandedModal 
        isOpen={isRefundOpen} 
        onClose={() => setIsRefundOpen(false)}
        title="Refund Policy"
        subtitle="Vertexa Digital • Last updated 2026"
      >
        <p className="text-gray-600 leading-relaxed mb-8">
          Vertexa Digital aims to provide quality services. Our refund policy is as follows:
        </p>
        
        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Eligibility
          </h3>
          <p className="text-gray-600">Refunds may be considered only if project work has not started.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Non-refundable situations
          </h3>
          <ul className="space-y-2 text-gray-600 list-disc ml-5">
            <li>Project development has started</li>
            <li>Milestones have been delivered</li>
            <li>Client changes mind after work begins</li>
            <li>Lack of communication from client</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Partial Refund & Cancellation
          </h3>
          <p className="text-gray-600">In some cases partial refunds may be considered depending on work completed. Either party may cancel a project before development begins.</p>
        </section>

        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="text-lg font-bold text-primary mb-2">Refund Requests</h3>
          <p className="text-gray-600">Contact: <a href="mailto:vertexadigital.dev@gmail.com" className="hover:underline">vertexadigital.dev@gmail.com</a></p>
          <p className="text-xs text-secondary italic mt-2">All decisions are made on a case-by-case basis.</p>
        </div>
      </BrandedModal>

      {/* Service Agreement Modal */}
      <BrandedModal 
        isOpen={isServiceOpen} 
        onClose={() => setIsServiceOpen(false)}
        title="Service Agreement"
        subtitle="Vertexa Digital • Last updated 2026"
      >
        <p className="text-gray-600 leading-relaxed mb-8">
          This agreement outlines how Vertexa Digital delivers services.
        </p>
        
        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Services Offered
          </h3>
          <ul className="space-y-2 text-gray-600 list-disc ml-5">
            <li>Website development</li>
            <li>Web applications</li>
            <li>MERN stack development</li>
            <li>Website improvements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Project Process
          </h3>
          <div className="flex flex-col space-y-2 text-gray-600 ml-5">
            <p>1. Requirement discussion</p>
            <p>2. Planning</p>
            <p>3. Development</p>
            <p>4. Testing</p>
            <p>5. Delivery</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Policy Details
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-secondary">Communication</h4>
              <p className="text-gray-600">Project communication happens via email, Fiverr, Upwork, or agreed platforms.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-secondary">Timeline</h4>
              <p className="text-gray-600">Project timelines depend on complexity and client feedback speed.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-primary">Revisions & Support</h4>
              <p className="text-gray-600">Reasonable revisions may be provided based on scope. Basic post-delivery support is provided for minor fixes.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm mb-1 uppercase tracking-wider text-tertiary">Confidentiality</h4>
              <p className="text-gray-600">Client project information will remain strictly confidential.</p>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-secondary italic">
          By hiring Vertexa Digital you agree to this service agreement.
        </p>
      </BrandedModal>
    </div>
  );
}

export default App;
