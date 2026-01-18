// src/components/Footer.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/footerlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Logic to handle smooth scroll to top or navigation
  const handleScrollLink = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on other pages, navigate to home (ScrollToTop component handles the rest)
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand/Company */}
          <div className="md:col-span-1">
            <img src={logo} alt="ISC Logo" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-slate-400">
              International Security & Communications Co. (ISC) is a leader in electronic systems integration, providing state-of-the-art solutions since 1980.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link 
                  to="/" 
                  onClick={(e) => handleScrollLink(e, 'top')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScrollLink(e, 'about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollLink(e, 'services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  onClick={(e) => handleScrollLink(e, 'solutions')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Solutions
                </a>
              </li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Our Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Career */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="https://e-service.iscksa.com/portal/#/mcportal/login/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Maintenance Contract Portal
                </a>
              </li>
              <li><Link to="/career" className="hover:text-blue-400 transition-colors">Jobs / Career</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div>
            <h4 className="text-white font-bold mb-6">Headquarters</h4>
            <p className="text-sm text-slate-400 mb-2">Al Khobar, Saudi Arabia</p>
            <p className="text-sm text-slate-400">Email: info@iscksa.com</p>
            <p className="text-sm text-slate-400">Fax: +966-13-898-4602</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>
            Copyright © {currentYear} - International Security & Communications Co. | All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}