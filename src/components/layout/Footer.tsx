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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.52-4.477-10-10-10z"/>
  </svg>
);

const FiverrColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#1dbf73"/>
    <g transform="translate(10, -2)">
      <path d="M34 25 A12 12 0 0 1 46 37 V45 H54 V55 H46 V82 H32 V55 H24 V45 H32 V37 A2 2 0 0 0 30 35 H24 V23 H34 Z" fill="white" />
      <circle cx="68" cy="29" r="7" fill="white" />
      <rect x="61" y="45" width="14" height="37" fill="white" />
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
