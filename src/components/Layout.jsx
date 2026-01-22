import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // --- 1. UI STATE ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // --- 2. SCROLL PROGRESS (TOP BAR) ---
  const { scrollYProgress } = useScroll();
  // useSpring creates the "smoothness" for the thin blue progress bar under the nav
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Uniform transition for background color, height, and border changes
  const slowEase = "transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)";

  // useMemo prevents the array from being recreated on every render
  const navLinks = useMemo(() => [
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'Support', path: 'support' },
    { name: 'Clients', path: 'customers-preview' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Request Quote', path: 'request-quote-cta' },
    { name: 'Career', path: '/career', type: 'route' },
  ], []);

  // --- 3. THEME MANAGEMENT ---
  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // --- 4. SCROLL & INTERSECTION LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const shouldBeScrolled = currentScroll > 60;
      
      // Update scrolled state (triggers logo move and nav shrink)
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
        // Refresh AOS animations if present to account for height changes
        if (window.AOS) setTimeout(() => window.AOS.refresh(), 100);
      }
      
      // Show back-to-top button after 400px
      setShowBackToTop(currentScroll > 400);
      if (currentScroll < 100) setActiveSection(navLinks[0].path);
    };

    // Tracks which section of the page is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // RootMargin adjusts the "detection zone" to account for the sticky header
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    if (pathname === '/') {
      navLinks.forEach(link => {
        if (link.type !== 'route') {
          const el = document.getElementById(link.path);
          if (el) observer.observe(el);
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [navLinks, pathname, isScrolled]);

  // --- 5. SMOOTH NAVIGATION HANDLER ---
  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false);
    if (id.startsWith('/')) return; // Allow normal routing for /career

    if (pathname === '/') {
      e.preventDefault();
      if (id === 'top' || id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.getElementById(id);
      if (target) {
        const headerOffset = 110; 
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
      }
    } else {
      // If on a different page, go home first then scroll
      e.preventDefault();
      navigate(id === 'top' ? '/' : `/#${id}`);
    }
  };

  // --- 6. VIEW TRANSITION THEME TOGGLE ---
  const toggleTheme = (event) => {
    // Fallback for browsers that don't support document.startViewTransition
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    
    // Circular expansion transition
    const transition = document.startViewTransition(() => setTheme(theme === 'light' ? 'dark' : 'light'));
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        { clipPath: theme === 'dark' ? [...clipPath].reverse() : clipPath },
        { 
          duration: 400, 
          easing: 'ease-in-out', 
          fill: 'forwards', 
          pseudoElement: theme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)' 
        }
      );
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col transition-colors duration-700">
      
      {/* MAIN NAVBAR CONTAINER */}
      <nav className={`fixed top-0 left-0 w-full z-[100] border-b ${slowEase} ${
        isScrolled 
          ? 'h-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-slate-200 dark:border-slate-800' 
          : 'h-64 md:h-80 bg-white dark:bg-slate-950 border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full relative">
          
          {/* LOGO ENGINE: 
              We toggle 'justify-center' (top) vs 'justify-start' (scrolled).
              The 'layout' prop on motion.div tells Framer Motion to animate the 
              physical change in position smoothly instead of jumping.
          */}
          <div className={`absolute inset-0 flex items-center pointer-events-none transition-[justify-content] duration-[1000ms] ${
            isScrolled ? 'justify-start' : 'justify-center'
          }`}>
            <motion.div 
              layout 
              transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
              className={`pointer-events-auto transform-gpu ${
                isScrolled ? 'translate-y-0' : '-translate-y-8'
              }`}
            >
              <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <motion.img 
                  layout
                  src={logo} 
                  alt="ISC" 
                  className={`w-auto dark:brightness-125 ${isScrolled ? 'h-10 md:h-12' : 'h-20 md:h-24'}`} 
                />
                <motion.div 
                  layout
                  className={`bg-blue-900 rounded-lg flex items-center shadow-lg ${isScrolled ? 'px-3 py-1.5' : 'px-5 py-2.5 md:px-8 md:py-5'}`}
                >
                  <motion.img 
                    layout
                    src={footerLogo} 
                    alt="Wordmark" 
                    className={`w-auto ${isScrolled ? 'h-5 md:h-6' : 'h-8 md:h-14'}`} 
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="flex items-center justify-between w-full h-full relative pointer-events-none">
            <div className={`hidden lg:flex items-center ${slowEase} pointer-events-auto
              ${isScrolled 
                ? 'ml-auto gap-x-3 xl:gap-x-5' 
                : 'absolute bottom-8 left-1/2 -translate-x-1/2 gap-x-6 xl:gap-x-8'
              }`}
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link 
                    to={link.type === 'route' ? link.path : '#'} 
                    onClick={link.type !== 'route' ? (e) => handleScrollLink(e, link.path) : undefined} 
                    className={`font-bold uppercase tracking-widest text-[11px] whitespace-nowrap transition-colors ${
                      activeSection === link.path ? 'text-blue-900 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* CONTACT BUTTON */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
                <Link to="/contact" className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-bold uppercase tracking-widest text-[11px] hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap block">
                  Contact Us
                </Link>
              </motion.div>

              {/* THEME TOGGLE (DESKTOP) */}
              <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:scale-110 transition-transform">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            {/* MOBILE ICONS */}
            <div className={`lg:hidden flex items-center gap-2 ml-auto z-[120] pointer-events-auto ${slowEase} ${!isScrolled ? 'absolute top-6 right-4' : ''}`}>
              <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400"><MoonIcon /></button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-blue-900 dark:text-blue-400"><MenuIcon /></button>
            </div>
          </div>
        </div>
        {/* THIN PROGRESS BAR AT THE BOTTOM OF THE NAV */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 origin-[0%] z-[110]" style={{ scaleX }} />
      </nav>

      {/* SPACER: Prevents content from jumping under the fixed header */}
      <div className="h-64 md:h-80 w-full flex-shrink-0" /> 
      
      <main className="flex-grow w-full relative">{children}</main>

      {/* FLOATING DOT NAVIGATION (RIGHT SIDE) */}
      {pathname === '/' && (
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-6 items-end group">
          {navLinks.filter(l => l.type !== 'route').map((link) => (
            <button key={link.path} onClick={(e) => handleScrollLink(e, link.path)} className="flex items-center gap-4 group/item relative">
              <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 whitespace-nowrap px-2 py-1 ${activeSection === link.path ? 'text-blue-900 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {link.name}
              </span>
              <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 ${activeSection === link.path ? 'bg-blue-600 border-blue-600 scale-150 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-500'}`} />
            </button>
          ))}
          
          {/* BACK TO TOP BUTTON WITH CIRCULAR PROGRESS */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="mt-4 relative flex items-center justify-center w-2.5">
                <div className="relative group flex items-center justify-center">
                  <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl">
                    Go to Top
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-slate-900 dark:border-l-slate-800" />
                  </span>
                  <button onClick={(e) => handleScrollLink(e, 'top')} className="absolute w-10 h-10 bg-white dark:bg-slate-950 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center active:scale-90 transition-transform">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100 dark:text-slate-900" />
                      <motion.circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round" style={{ pathLength: scrollYProgress }} className="text-blue-600" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-slate-700 dark:text-slate-200 relative z-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      )}

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.4 }} className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 flex flex-col p-6 pt-24 overflow-y-auto">
            <div className="flex justify-between items-center mb-10 flex-shrink-0">
              <img src={logo} className="h-8 dark:brightness-125" alt="Logo" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"><CloseIcon /></button>
            </div>
            <div className="flex flex-col gap-6 text-center pb-10">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.type === 'route' ? link.path : '#'} onClick={(e) => handleScrollLink(e, link.path)} className="text-2xl font-bold dark:text-white uppercase tracking-tight border-b border-slate-100 dark:border-slate-800 pb-3">{link.name}</Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-blue-900 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest whitespace-nowrap">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// ICON COMPONENTS
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path d="M6 18L18 6M6 6l12 12" /></svg>;