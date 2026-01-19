import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false); // Close menu on click
    if (id.startsWith('/')) return;

    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  const navLinks = [
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Support', path: 'support' },
    { name: 'Clients', path: 'customers-preview' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Career', path: '/career', type: 'route' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Dynamic Header Height Spacer */}
      <div className={`${isScrolled ? 'h-20' : 'h-32 md:h-52'} w-full transition-all duration-700`} />

      <nav 
        className={`fixed top-0 left-0 w-full bg-white z-[100] transition-all duration-700 ease-in-out ${
          isScrolled ? 'h-20 shadow-md' : 'h-32 md:h-52 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* LOGO GROUP - Responsive positioning */}
          <div className={`transition-all duration-700 flex items-center ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}>
            <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex items-center gap-2 md:gap-6">
              <img 
                src={logo} 
                alt="ISC" 
                className={`w-auto transition-all duration-700 ${isScrolled ? 'h-10' : 'h-16 md:h-24'}`} 
              />
              <div className={`bg-blue-900 rounded-lg flex items-center shadow-md transition-all duration-700 ${
                isScrolled ? 'px-2 py-1' : 'px-4 py-2 md:px-6 md:py-4 md:rounded-2xl'
              }`}>
                <img src={footerLogo} alt="Wordmark" className={`w-auto transition-all duration-700 ${isScrolled ? 'h-3 md:h-4' : 'h-5 md:h-8'}`} />
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-x-6">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link key={link.name} to={link.path} className="font-bold text-slate-600 hover:text-blue-900 text-[11px] uppercase tracking-widest whitespace-nowrap">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={`#${link.path}`} onClick={(e) => handleScrollLink(e, link.path)} className="font-bold text-slate-600 hover:text-blue-900 text-[11px] uppercase tracking-widest whitespace-nowrap">
                  {link.name}
                </a>
              )
            ))}
            <Link to="/contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg font-bold text-[11px] uppercase tracking-widest shadow-md hover:bg-blue-800 transition-all">
              Contact Us
            </Link>
          </div>

          {/* HAMBURGER BUTTON - Visible only on Mobile/Tablet */}
          <button 
            className="lg:hidden p-2 text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE DROPDOWN OVERLAY */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-500 ease-in-out origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col p-6 gap-y-4">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={`#${link.path}`} 
                  onClick={(e) => handleScrollLink(e, link.path)}
                  className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link 
              to="/contact" 
              className="mt-2 bg-blue-900 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}