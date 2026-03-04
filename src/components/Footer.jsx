// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/footerlogo.png';

export default function Footer() {
  // Automatically updates the copyright year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MAIN GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand/Company Identity & Social Media */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/">
              <img 
                src={logo} 
                alt="ISC Logo" 
                className="h-10 md:h-12 w-auto mb-6 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs mb-6">
              International Security & Communications Co. (ISC) is a leader in electronic systems integration, providing state-of-the-art solutions since 1980.
            </p>
            
            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/ISC.KSA.HQ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/company/international-security-and-communications-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Full Page Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-blue-400 transition-colors">Our Solutions</Link>
              </li>
              <li>
                <Link to="/customers" className="hover:text-blue-400 transition-colors">Our Clients</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Portals */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              
              <li>
                <Link to="/enquiry" className="hover:text-blue-400 transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-blue-400 transition-colors">Technical Support</Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li>
                <a 
                  href="https://e-service.iscksa.com/portal/#/mcportal/login/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  MC Portal 
                  <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded tracking-tighter">LOGIN</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Information */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="leading-relaxed">
                  <span className="text-white font-medium block">Bldg. 7739, Madinat Al Umal 34441</span>
                  PO Box 4034, Al Khobar 31952<br /> Kingdom of Saudi Arabia
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@iscksa.com" className="hover:text-white transition-colors">info@iscksa.com</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+966138962000" className="hover:text-white transition-colors">+966-13-8962000</a>
              </div>
              <div className="pt-2">
                 <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold py-2.5 px-5 rounded-md uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   Contact Us
                 </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-medium text-slate-500 text-center">
          <p className="order-2 lg:order-1">
            Copyright © {currentYear} - International Security & Communications Co. <span className="hidden md:inline">|</span> <br className="md:hidden" /> All rights reserved
          </p>
          
          <div className="flex gap-8 order-1 lg:order-2">
            <Link to="/privacy" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}