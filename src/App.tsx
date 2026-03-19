
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <main className="min-h-screen selection:bg-[var(--color-primary)] selection:text-white">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
