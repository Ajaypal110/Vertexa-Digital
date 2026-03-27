import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../sections/About';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Vertexa Digital | Expert Web Development Team</title>
        <meta name="description" content="Discover Vertexa Digital — a premium digital agency specializing in React, WordPress, and SaaS development. Meet our team of expert developers and designers." />
        <link rel="canonical" href="https://vertexadigital.online/about" />
        <meta property="og:title" content="About Vertexa Digital | Expert Web Development Team" />
        <meta property="og:description" content="Learn about our mission to build high-performance digital products for startups and businesses worldwide." />
      </Helmet>

      <About asH1={true} />
    </>
  );
};

export default AboutPage;
