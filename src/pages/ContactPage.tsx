import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Vertexa Digital | Get a Free Consultation</title>
        <meta name="description" content="Ready to start your next web project? Contact Vertexa Digital today for a free consultation. Expert React and WordPress developers at your service." />
        <link rel="canonical" href="https://vertexadigital.online/contact" />
        <meta property="og:title" content="Contact Vertexa Digital | Get a Free Consultation" />
        <meta property="og:description" content="Reach out to our team to discuss your web development, maintenance, or security needs." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Vertexa Digital",
              "image": "https://vertexadigital.online/logo.png",
              "@id": "https://vertexadigital.online/#organization",
              "url": "https://vertexadigital.online",
              "telephone": "+918094548637",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Udaipur",
                "addressLocality": "Udaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "313001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.5854,
                "longitude": 73.7125
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              }
            }
          `}
        </script>
      </Helmet>

      <Contact asH1={true} />
    </>
  );
};

export default ContactPage;
