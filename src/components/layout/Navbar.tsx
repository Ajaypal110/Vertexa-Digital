import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <Link to="/" className="cursor-pointer flex items-center gap-3 relative z-10 mr-auto" aria-label="Go to homepage">
          <img src="/logo-icon.png" alt="" className="h-10 md:h-12 w-auto object-contain transition-all duration-300" />
          <span className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-light tracking-[0.15em] text-primary uppercase">Vertexa</span>
            <span className="text-[9px] md:text-[11px] font-medium tracking-[0.6em] text-secondary uppercase mt-0.5 ml-0.5">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`cursor-pointer transition-all text-[13px] font-medium hover:scale-105 ${
                  isActive(link.to) 
                    ? 'text-primary' 
                    : 'text-secondary hover:text-primary'
                }`}
                aria-label={`Navigate to ${link.name} page`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="btn-primary cursor-pointer text-xs !py-2 !px-5"
            aria-label="Get started with our services"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-transform duration-500 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }}
      >
        {/* Content Wrapper */}
        <div className="relative flex flex-col h-full" style={{ backgroundColor: 'white' }}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-black/5 bg-white">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <img src="/logo-icon.png" alt="" className="h-10 w-auto object-contain" />
              <span className="flex flex-col leading-none">
                <span className="text-xl font-light tracking-[0.15em] text-primary uppercase">Vertexa</span>
                <span className="text-[10px] font-medium tracking-[0.6em] text-secondary uppercase mt-0.5 ml-0.5">Digital</span>
              </span>
            </Link>
            <button
              className="text-primary p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col items-start px-10 py-12 gap-8 overflow-y-auto max-h-[calc(100vh-100px)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-2xl font-medium uppercase tracking-wider transition-all w-full group ${
                  isActive(link.to) ? 'text-primary' : 'text-gray-900 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-8 w-full border-t border-black/5 mt-auto">
              <Link
                to="/contact"
                className="btn-primary w-full text-center py-5 text-xl block"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
