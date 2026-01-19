// src/components/Footer.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/footerlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MAIN GRID: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand/Company */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src={logo} 
              alt="ISC Logo" 
              className="h-10 md:h-12 w-auto mb-6 brightness-0 invert opacity-90" 
            />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              International Security & Communications Co. (ISC) is a leader in electronic systems integration, providing state-of-the-art solutions since 1980.
            </p>
          </div>

          {/* Column 2: Navigation - Split into 2 columns on small mobile if needed, but 1 is cleaner */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={(e) => handleScrollLink(e, 'top')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleScrollLink(e, 'about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleScrollLink(e, 'services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleScrollLink(e, 'customers-preview')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Our Clients
                </button>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Our Projects</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
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
              <li><Link to="/career" className="hover:text-blue-400 transition-colors">Career Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex flex-col">
                <span className="text-white font-medium">Al Khobar, Saudi Arabia</span>
                Prince Turki St, Al Yarmouk Dist.
              </p>
              <p className="pt-2 hover:text-white transition-colors cursor-default">Email: info@iscksa.com</p>
              <p className="hover:text-white transition-colors cursor-default">Fax: +966-13-898-4602</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Stacked on mobile */}
        <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-medium text-slate-500 text-center">
          <p className="order-2 lg:order-1">
            Copyright © {currentYear} - International Security & Communications Co. <span className="hidden md:inline">|</span> <br className="md:hidden" /> All rights reserved
          </p>
          
          <div className="flex gap-8 order-1 lg:order-2">
            <a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}