import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onRefundClick?: () => void;
  onServiceClick?: () => void;
}

const FiverrIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onRefundClick, onServiceClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFBF9] pt-24 pb-12 border-t border-black/[0.05] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
             <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer flex items-center gap-4 inline-flex">
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
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/vertexadigital.dev/" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/vertexa-digital-agency" },
                { icon: <Github size={18} />, href: "https://github.com/Ajaypal110" },
                { icon: <FiverrIcon size={32} />, href: "https://www.fiverr.com/vertexa_digital" },
              ].map((social) => (
                <a 
                  key={social.href}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
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
              {['Services', 'Portfolio', 'Process', 'Pricing'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase()} 
                    spy={true} smooth={true} offset={-80} duration={500}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-dark font-semibold text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="about" 
                  spy={true} smooth={true} offset={-80} duration={500}
                  className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li><button onClick={onPrivacyClick} className="text-gray-600 hover:text-primary transition-colors text-sm text-left">Privacy Policy</button></li>
              <li><button onClick={onTermsClick} className="text-gray-600 hover:text-primary transition-colors text-sm text-left">Terms & Conditions</button></li>
              <li><button onClick={onRefundClick} className="text-gray-600 hover:text-primary transition-colors text-sm text-left">Refund Policy</button></li>
              <li><button onClick={onServiceClick} className="text-gray-600 hover:text-primary transition-colors text-sm text-left">Service Agreement</button></li>
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
                <a href="mailto:support@vertexadigital.online" className="text-gray-600 hover:text-primary transition-colors text-sm">support@vertexadigital.online</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918094548637" className="text-gray-600 hover:text-primary transition-colors text-sm">+91 8094548637</a>
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
