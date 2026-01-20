import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // Tracking for dots
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scrollValue = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const slowEase = "duration-1000 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]";

  // 1. Dot Navigation Links
  const dotLinks = useMemo(() => [
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'Support', path: 'support' },
    { name: 'Our Clients', path: 'customers-preview' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Request Quote', path: 'request-quote-cta' },
  ], []);

  const navLinks = [
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'Support', path: 'support' },
    { name: 'Clients', path: 'customers-preview' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Career', path: '/career', type: 'route' },
  ];

  // 2. Theme Logic
  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (event) => {
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(() => setTheme(theme === 'light' ? 'dark' : 'light'));
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        { clipPath: theme === 'dark' ? [...clipPath].reverse() : clipPath },
        { duration: 400, easing: 'ease-in-out', fill: 'forwards', pseudoElement: theme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)' }
      );
    });
  };

  // 3. Combined Scroll & Observer Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 60); 
      setShowBackToTop(currentScroll > 400);
      if (currentScroll < 100) setActiveSection(dotLinks[0].path);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0.1 }
    );

    dotLinks.forEach(link => {
      const el = document.getElementById(link.path);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [dotLinks]);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false);
    if (id.startsWith('/')) return;
    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
      else {
        const target = document.getElementById(id);
        if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col transition-colors duration-700">
      
      <div className={`transition-all ${slowEase} ${isScrolled ? 'h-24' : 'h-64 md:h-80'}`} />

      <nav className={`fixed top-0 left-0 w-full z-[100] border-b transition-all ${slowEase} ${isScrolled ? 'h-24 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-slate-200 dark:border-slate-800' : 'h-64 md:h-80 bg-white dark:bg-slate-950 shadow-none border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full relative">
          
          {/* LOGO GROUP */}
          <div className={`absolute transition-all ${slowEase} flex items-center z-[110] ${isScrolled ? 'left-6 top-1/2 -translate-y-1/2 translate-x-0 scale-100' : 'left-1/2 top-8 md:top-12 -translate-x-1/2 scale-125 md:scale-150'}`}>
            <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex items-center gap-3 md:gap-5">
              <img src={logo} alt="ISC" className={`w-auto transition-all ${slowEase} ${isScrolled ? 'h-12' : 'h-20 md:h-28'} dark:brightness-125`} />
              <div className={`bg-blue-900 rounded-lg flex items-center shadow-lg transition-all ${slowEase} ${isScrolled ? 'px-4 py-2' : 'px-6 py-3 md:px-8 md:py-5 md:rounded-2xl'}`}>
                <img src={footerLogo} alt="Wordmark" className={`w-auto transition-all ${slowEase} ${isScrolled ? 'h-6 md:h-7' : 'h-10 md:h-14'}`} />
              </div>
            </Link>
          </div>

          {/* NAV LINKS + ACTION BUTTONS */}
          <div className={`absolute transition-all ${slowEase} flex items-center ${isScrolled ? 'right-6 top-1/2 -translate-y-1/2 translate-x-0 w-auto' : 'left-0 bottom-10 w-full justify-center px-6'}`}>
            <div className={`hidden lg:flex items-center transition-all ${slowEase} ${isScrolled ? 'gap-x-4 xl:gap-x-6' : 'gap-x-8 xl:gap-x-10'}`}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.type === 'route' ? link.path : '#'} onClick={link.type !== 'route' ? (e) => handleScrollLink(e, link.path) : undefined} className={`font-bold text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 uppercase tracking-widest whitespace-nowrap transition-all ${slowEase} ${isScrolled ? 'text-[11px]' : 'text-[13px]'}`}>
                  {link.name}
                </Link>
              ))}
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="ml-12">
                <Link to="/contact" className={`bg-blue-900 text-white rounded-lg font-bold uppercase tracking-widest shadow-md hover:bg-blue-800 transition-all ${slowEase} whitespace-nowrap block ${isScrolled ? 'px-5 py-2.5 text-[11px]' : 'px-7 py-3.5 text-[13px]'}`}>
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* THEME & MOBILE BUTTONS */}
            <div className={`flex items-center gap-4 ml-6 transition-all ${slowEase} ${!isScrolled && 'lg:absolute lg:right-6'}`}>
              <button onClick={(e) => toggleTheme(e)} className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:ring-2 ring-blue-500 transition-all overflow-hidden flex-shrink-0">
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><circle cx="12" cy="12" r="4" fill="currentColor" /><g stroke="currentColor"><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></g></svg>
                )}
              </button>
              <button className="lg:hidden p-2 text-blue-900 dark:text-blue-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">{isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}</svg>
              </button>
            </div>
          </div>
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 origin-[0%] z-[110]" style={{ scaleX }} />
      </nav>

      {/* FLOATING DOT NAVIGATION (Restore) */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-5 items-end group">
        {dotLinks.map((link) => (
          <button key={link.path} onClick={(e) => handleScrollLink(e, link.path)} className="flex items-center gap-4 group/item">
            <span className={`text-[10px] font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 whitespace-nowrap`}>
              {link.name}
            </span>
            <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 
              ${activeSection === link.path 
                ? 'bg-blue-900 border-blue-900 scale-150 shadow-[0_0_12px_rgba(30,58,138,0.4)]' 
                : 'bg-transparent border-slate-300 dark:border-slate-600 group-hover:border-blue-400'}`} 
            />
          </button>
        ))}
      </aside>

      <main className="flex-grow">{children}</main>

      {/* RESTORED BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            // Positioned right-8 but with a high z-index and distinct styling
            className="fixed bottom-10 right-10 z-[200] p-4 bg-blue-900 dark:bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-800 transition-all group"
          >
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle 
                cx="50%" cy="50%" r="26" 
                fill="transparent" 
                strokeWidth="3" 
                stroke="rgba(255,255,255,0.2)" 
              />
              <motion.circle 
                cx="50%" cy="50%" r="26" 
                fill="transparent" 
                strokeWidth="3" 
                stroke="white" 
                style={{ pathLength: scrollValue }} 
              />
            </svg>
            
            {/* Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 relative z-10 group-hover:-translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}