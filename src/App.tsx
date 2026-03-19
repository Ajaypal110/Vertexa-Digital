import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import WhatsAppButton from './components/ui/WhatsAppButton';
import LoadingScreen from './components/ui/LoadingScreen';
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
  return (
    <div className="bg-[#0B0F19]">
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

      <Footer />
    </div>
  );
}

export default App;
