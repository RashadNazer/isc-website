import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme State Initialization
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme to the HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false);
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
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col transition-colors duration-500">
      <div className={`${isScrolled ? 'h-20' : 'h-32 md:h-52'} w-full transition-all duration-700`} />

      <nav 
        className={`fixed top-0 left-0 w-full bg-white dark:bg-slate-950/90 dark:backdrop-blur-md z-[100] transition-all duration-700 ease-in-out ${
          isScrolled ? 'h-20 shadow-md border-b dark:border-slate-800' : 'h-32 md:h-52 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* LOGO GROUP */}
          <div className={`transition-all duration-700 flex items-center ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex items-center gap-2 md:gap-6">
              <img 
                src={logo} 
                alt="ISC" 
                className={`w-auto transition-all duration-700 dark:brightness-125 ${isScrolled ? 'h-10' : 'h-16 md:h-24'}`} 
              />
              <div className={`bg-blue-900 rounded-lg flex items-center shadow-md transition-all duration-700 ${
                isScrolled ? 'px-2 py-1' : 'px-4 py-2 md:px-6 md:py-4 md:rounded-2xl'
              }`}>
                <img src={footerLogo} alt="Wordmark" className={`w-auto transition-all duration-700 ${isScrolled ? 'h-3 md:h-4' : 'h-5 md:h-8'}`} />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.type === 'route' ? link.path : '#'}
                  onClick={link.type !== 'route' ? (e) => handleScrollLink(e, link.path) : undefined}
                  className="font-bold text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg font-bold text-[11px] uppercase tracking-widest shadow-md hover:bg-blue-800 transition-all">
                Contact Us
              </Link>
            </div>

            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:ring-2 ring-blue-500 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25M5.25 12H3m14.593-5.343l-1.591 1.591M6.757 17.243l-1.591 1.591m12.728 0l-1.591-1.591M6.757 6.757L5.166 5.166M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>

            {/* HAMBURGER BUTTON */}
            <button 
              className="lg:hidden p-2 text-blue-900 dark:text-blue-400"
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
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b dark:border-slate-800 shadow-xl transition-all duration-500 ease-in-out origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col p-6 gap-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.type === 'route' ? link.path : '#'}
                onClick={link.type !== 'route' ? (e) => handleScrollLink(e, link.path) : undefined}
                className="text-lg font-bold text-slate-700 dark:text-slate-200 border-b border-slate-50 dark:border-slate-800 pb-2"
              >
                {link.name}
              </Link>
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