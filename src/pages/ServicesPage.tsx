import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../sections/Services';
import BrandedModal from '../components/ui/BrandedModal';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Web Development Services | Vertexa Digital</title>
        <meta name="description" content="Expert web development services: WordPress development, website maintenance, speed optimization, and security. Premium quality MERN stack solutions for startups." />
        <link rel="canonical" href="https://vertexadigital.online/services" />
        <meta property="og:title" content="Web Development Services | Vertexa Digital" />
        <meta property="og:description" content="From WordPress to custom React apps, we provide end-to-end web development and maintenance services." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Vertexa Digital"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "WordPress Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Maintenance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Speed Optimization"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Services onLearnMore={handleLearnMore} asH1={true} />

      {/* Dynamic Service Detail Modal */}
      <BrandedModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        title={selectedService?.title || ''}
        subtitle="Vertexa Digital • Service Details"
      >
        {selectedService && (
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-primary">
                {selectedService.icon}
              </div>
              <div>
                <h4 className="text-xl font-black text-dark mb-1">Overview</h4>
                <p className="text-gray-600 text-sm">{selectedService.description}</p>
              </div>
            </div>

            <section>
              <h3 className="text-lg font-black text-dark mb-4 border-b border-black/5 pb-2">What's Included</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.details.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-black text-dark mb-4 border-b border-black/5 pb-2">Technical Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {selectedService.details.approach}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedService.details.tech.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full text-[10px] font-black text-secondary uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <div className="p-6 bg-dark rounded-[2rem] text-white flex justify-between items-center">
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">Ready to start?</p>
                <p className="text-sm font-bold opacity-80">Let's discuss your project today.</p>
              </div>
              <a 
                href="/contact"
                className="px-6 py-3 bg-primary text-white text-xs font-black rounded-xl hover:scale-105 transition-transform"
              >
                GO TO CONTACT
              </a>
            </div>
          </div>
        )}
      </BrandedModal>
    </>
  );
};

export default ServicesPage;
