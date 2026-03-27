import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import TrustIndicators from '../sections/TrustIndicators';
import WhyChooseUs from '../sections/WhyChooseUs';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Vertexa Digital | Premium Web Development Company</title>
        <meta name="description" content="Vertexa Digital is a leading web development company building high-performance websites & MERN stack apps. Scale your brand with our premium digital solutions." />
        <link rel="canonical" href="https://vertexadigital.online/" />
        <meta property="og:title" content="Vertexa Digital | Premium Web Development Company" />
        <meta property="og:description" content="High-performance websites & MERN stack apps for startups. Expert React & WordPress developers." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a website take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, a website takes between 3 to 7 business days to launch, depending on the complexity and scope of the project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies do you use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in modern tech stacks including React, Next.js, Tailwind CSS, Node.js, and MongoDB."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Every project includes a free support period starting from 1 month."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <TrustIndicators />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
};

export default HomePage;
