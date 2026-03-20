import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onRefundClick?: () => void;
  onServiceClick?: () => void;
}

const InstagramColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
    <path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6.5c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5zM17.5 8c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm0 1.5C6.4 5.5 5.5 6.4 5.5 7.5v9c0 1.1.9 2.5 2 2.5h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-9z" fill="white"/>
    <defs>
      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f09433"/>
        <stop offset="0.25" stopColor="#e6683c"/>
        <stop offset="0.5" stopColor="#dc2743"/>
        <stop offset="0.75" stopColor="#cc2366"/>
        <stop offset="1" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
  </svg>
);

const LinkedinColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 8H4.5v11h3V8zM6 6.5C5.17 6.5 4.5 5.83 4.5 5S5.17 3.5 6 3.5 7.5 4.17 7.5 5 6.83 6.5 6 6.5zm13.5 12.5h-3v-5.5c0-1.38-.62-2-1.5-2s-1.5.62-1.5 2v5.5h-3V8h3v1.5c1-1.5 2.5-2 4-2 2 0 3 1.5 3 4.5v7z" fill="white"/>
  </svg>
);

const GithubColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#181717"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38.0-.19-.01-.82-.01-1.49-2.22.48-2.69-.94-2.69-.94-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.32.66.07-.51.28-.5 1.07-1.78.2-3.64.89-3.64 3.95 0 .87.31 1.59.82 2.15-.08.2-.36 1.02.08 2.12 0 0 .67-.21 2.2-.82a7.42 7.42 0 0 1 4 0c1.53 1.04 2.2.82 2.2.82.44-1.1.16-1.92.08-2.12.51-.56.82-1.28.82-2.15 0-3.07-1.87-3.75-3.65-3.95.29-.25.54-.73.54-1.48 0-1.07-.01-1.93-.01-2.2 0-.21.15-.46.55-.38A8.01 8.01 0 0 0 20 12c0-4.42-3.58-8-8-8z" fill="white"/>
  </svg>
);

const FiverrColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#1dbf73"/>
    <g transform="translate(24, 28) scale(2.5)">
      <path d="M18.6 3.9h-2.6c-1 0-1.4.5-1.4 1.3v2H17v3h-2.4v6.8H11v-6.8H8.8v-3H11V4.8c0-2.3 2-3.8 4.6-3.8h3v2.9z" fill="white" />
      <circle cx="4.8" cy="4.8" r="1.8" fill="white" />
      <path d="M3.3 7.2h3v10.6h-3z" fill="white" />
    </g>
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
                { icon: <InstagramColorIcon size={32} />, href: "https://www.instagram.com/vertexadigital.dev/" },
                { icon: <LinkedinColorIcon size={32} />, href: "https://www.linkedin.com/company/vertexa-digital-agency" },
                { icon: <GithubColorIcon size={32} />, href: "https://github.com/Ajaypal110" },
                { icon: <FiverrColorIcon size={32} />, href: "https://www.fiverr.com/vertexa_digital" },
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
