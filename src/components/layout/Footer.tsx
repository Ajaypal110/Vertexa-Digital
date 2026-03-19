import React from 'react';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050812] pt-20 pb-10 border-t border-white/5 text-gray-400">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
             <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer flex items-center">
              <img src="/logo.png" alt="Vertexa Digital" className="h-10 w-auto object-contain scale-[5] origin-left ml-6" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build modern high-performance websites for businesses and startups. Elevate your digital presence with our cutting-edge solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Services', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase().replace(' ', '')} 
                    spy={true} smooth={true} offset={-80} duration={500}
                    className="hover:text-[var(--color-secondary)] cursor-pointer transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Website Redesign</a></li>
              <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">API Integration</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span>Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[var(--color-primary)] shrink-0" />
                <span>+91 XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[var(--color-primary)] shrink-0" />
                <span>vertexadigital@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Vertexa Digital. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
