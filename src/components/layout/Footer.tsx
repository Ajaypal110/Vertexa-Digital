import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { InstagramColorIcon, LinkedinColorIcon, GithubColorIcon, FiverrColorIcon } from '../ui/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFBF9] pt-24 pb-12 border-t border-black/[0.05] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
             <Link to="/" className="cursor-pointer flex items-center gap-4 inline-flex">
              <img src="/logo-icon.png" alt="" className="h-12 w-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-light tracking-[0.15em] text-primary uppercase">Vertexa</span>
                <span className="text-[10px] font-medium tracking-[0.6em] text-secondary uppercase mt-1">Digital</span>
              </div>
            </Link>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              Crafting high-performance digital experiences for forward-thinking startups and established businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <InstagramColorIcon size={32} />, href: "https://www.instagram.com/vertexadigital.dev/" },
                { icon: <LinkedinColorIcon size={32} />, href: "https://www.linkedin.com/company/vertexa-digital-agency" },
                { icon: <GithubColorIcon size={36} />, href: "https://github.com/Ajaypal110" },
                { icon: <FiverrColorIcon size={36} />, href: "https://www.fiverr.com/vertexa_digital" },
              ].map((social) => (
                <a 
                  key={social.href}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 drop-shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-dark font-semibold text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              {[
                { name: 'Services', to: '/services' },
                { name: 'About', to: '/about' },
                { name: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-dark font-semibold text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', to: '/about', label: 'Go to About Us page' },
                { name: 'Privacy Policy', to: '/privacy-policy', label: 'Read our Privacy Policy' },
                { name: 'Terms & Conditions', to: '/terms', label: 'Read our Terms and Conditions' },
                { name: 'Refund Policy', to: '/refund-policy', label: 'Read our Refund Policy' },
                { name: 'Service Agreement', to: '/service-agreement', label: 'Read our Service Agreement' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-sm"
                    aria-label={link.label}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-dark font-semibold text-sm uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Udaipur, RJ, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:support@vertexadigital.online" className="text-gray-600 hover:text-primary transition-colors text-sm" aria-label="Email support@vertexadigital.online">support@vertexadigital.online</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918094548637" className="text-gray-600 hover:text-primary transition-colors text-sm" aria-label="Call us at +91 8094548637">+91 8094548637</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs tracking-wide">
            © {currentYear} VERTEXA DIGITAL. BUILT BY AJAYPAL SINGH.
          </p>
          <div className="flex gap-6 items-center">
            <span className="h-4 w-px bg-black/10 hidden md:block" />
            <a href="https://github.com/Ajaypal110" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-all flex items-center gap-2 text-xs uppercase font-bold tracking-widest">
              Design by Ajaypal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
