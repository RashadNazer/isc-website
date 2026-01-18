import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to trigger shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollLink = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  const navLinks = [
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'Support', path: 'support' },
    { name: 'Clients', path: 'customers-preview' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Career', path: '/career', type: 'link' },
  ];

  // 1. Updated Scroll Logic with Hysteresis
useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    // Shrink at 120px, but only grow back when scrolled above 20px
    // This gap prevents the "back and forth" flickering
    if (currentScroll > 120) {
      setIsScrolled(true);
    } else if (currentScroll < 20) {
      setIsScrolled(false);
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 2. Updated Render
return (
  <div className="min-h-screen bg-white font-sans flex flex-col">
    {/* OUTER WRAPPER: Fixed height to reserve space in the layout */}
    <div className="h-52 md:h-52 w-full bg-white border-b border-slate-50 relative z-50">
      <nav 
        className={`fixed top-0 left-0 w-full bg-white z-[60] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled 
            ? 'h-20 shadow-md border-b' 
            : 'h-52 border-b-0 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full relative overflow-hidden">
          
          {/* LOGO GROUP */}
          <div className={`absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center ${
            isScrolled 
              ? 'top-1/2 -translate-y-1/2 left-6 translate-x-0' 
              : 'top-10 left-1/2 -translate-x-1/2'
          }`}>
            <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex items-center gap-4 md:gap-8">
              <img 
                src={logo} 
                alt="ISC" 
                className={`w-auto transition-all duration-700 ${isScrolled ? 'h-10 md:h-12' : 'h-24 md:h-28'}`} 
              />
              <div className={`bg-slate-200 hidden md:block transition-all duration-700 ${
                isScrolled ? 'h-6 w-[1px] mx-1' : 'h-16 w-[1.5px] mx-2'
              }`}></div>
              <div className={`bg-blue-900 rounded-xl flex items-center shadow-lg transition-all duration-700 ${
                isScrolled ? 'px-3 py-1.5' : 'px-6 py-4 rounded-2xl'
              }`}>
                <img src={footerLogo} alt="Wordmark" className={`w-auto transition-all duration-700 ${isScrolled ? 'h-4 md:h-5' : 'h-8 md:h-10'}`} />
              </div>
            </Link>
          </div>

          {/* MENU GROUP */}
          <div className={`absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center ${
            isScrolled 
              ? 'top-1/2 -translate-y-1/2 right-6 translate-x-0 translate-y-[-50%]' 
              : 'bottom-6 left-1/2 -translate-x-1/2'
          }`}>
            <div className={`flex items-center transition-all duration-700 ${isScrolled ? 'gap-x-4' : 'gap-x-6 lg:gap-x-8'}`}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.type === 'link' ? link.path : `#${link.path}`}
                  className={`font-bold text-slate-600 hover:text-blue-900 transition-all uppercase tracking-widest whitespace-nowrap ${
                    isScrolled ? 'text-[10px] lg:text-[11px]' : 'text-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Link 
                to="/contact" 
                className={`bg-blue-900 text-white font-bold transition-all shadow-md active:scale-95 uppercase tracking-widest rounded-lg flex items-center justify-center whitespace-nowrap ${
                  isScrolled ? 'px-3 py-1.5 text-[10px]' : 'px-6 py-2.5 text-sm ml-2'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </div>

    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
}