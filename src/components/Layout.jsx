import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // --- 1. UI STATE ---
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // --- 2. SCROLL PROGRESS ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const navLinks = useMemo(() => [
    { name: 'About Us', path: '/about', type: 'route' },
    { name: 'Services', path: '/services', id: 'services', type: 'route' },
    { name: 'Solutions', path: '/solutions', id: 'solutions', type: 'route' },
    { name: 'Support', path: '/support', id: 'support', type: 'route' },
    { name: 'Clients', path: '/customers', id: 'customers-preview', type: 'route' },
    { name: 'Projects', path: 'projects' },
    { name: 'Products', path: 'products' },
    { name: 'Request Quote', path: '/enquiry', id: 'request-quote-cta', type: 'route' },
    { name: 'Careers', path: '/career', type: 'route' },
  ], []);

  const getProgressColor = () => {
    switch(activeSection) {
      case 'services': return 'bg-blue-500';
      case 'solutions': return 'bg-indigo-500';
      case 'support': return 'bg-sky-500';
      case 'projects': return 'bg-emerald-500';
      default: return 'bg-blue-600';
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    if (pathname === '/') {
      navLinks.forEach(link => {
        const targetId = link.id || (link.type !== 'route' ? link.path : null);
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) observer.observe(el);
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [navLinks, pathname]);

  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false);
    if (id.startsWith('/') && pathname !== id) return;

    if (pathname === '/') {
      const targetId = id.replace('/', '');
      if (targetId === 'top' || targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = (event) => {
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }
    const x = event.clientX, y = event.clientY;
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

  return (
    <div className="min-h-screen bg-slate-900 font-sans flex flex-col transition-colors duration-700">
      
      {/* 1. LARGE NAVBAR */}
      <nav className="relative h-64 md:h-80 bg-slate-900 flex items-center justify-center border-b border-slate-800 z-[10]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative h-full">
          <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-8">
            <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <img src={logo} className="w-auto h-24 md:h-28 lg:h-32 dark:brightness-125" alt="Logo" />
              <div className="bg-blue-900 rounded-lg flex items-center shadow-lg px-5 py-2.5 md:px-8 md:py-5">
                <img src={footerLogo} className="w-auto h-14 md:h-14 lg:h-20" alt="Footer Logo" />
              </div>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-x-3 xl:gap-x-5 flex-nowrap w-max">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={(e) => handleScrollLink(e, link.id || link.path)}
                className="font-bold uppercase tracking-widest text-[10px] xl:text-[11px] text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="hidden sm:block bg-blue-900 text-white px-3 py-1.5 rounded-md font-bold uppercase tracking-widest text-[9px] shadow-md ml-2 hover:bg-blue-800 transition-colors">
              Contact Us
            </Link>
            <button onClick={toggleTheme} className="p-1.5 rounded-full bg-slate-800 text-amber-600 ml-2">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. STICKY NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full h-20 bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800 z-[100] transition-transform duration-500 ${isStickyVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex items-center gap-2">
            <img src={logo} className="h-8 md:h-10 w-auto dark:brightness-125" alt="Logo Small" />
            <div className="bg-blue-900 rounded px-2 py-1">
              <img src={footerLogo} className="h-4 md:h-5 w-auto" alt="Logo Mini" />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={(e) => handleScrollLink(e, link.id || link.path)}
                className={`font-bold uppercase tracking-tighter xl:tracking-widest text-[10px] xl:text-[11px] transition-colors ${ (activeSection === (link.id || link.path)) ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] shadow-lg ml-2 hover:bg-blue-800 transition-colors">Contact Us</Link>
            <button onClick={toggleTheme} className="p-1.5 rounded-full bg-slate-800 text-amber-600 ml-2">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
          <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-blue-900 dark:text-blue-400"><MenuIcon /></button>
          </div>
        </div>
        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-[3px] origin-[0%] transition-colors duration-500 ${getProgressColor()}`} 
          style={{ scaleX }} 
        />
      </nav>

      <main className="flex-grow w-full relative bg-slate-900">{children}</main>

      {/* 3. SIDE DOTS */}
      {pathname === '/' && (
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-6 items-end group">
          {navLinks.filter(l => l.id || l.type !== 'route').map((link) => {
            const targetId = link.id || link.path;
            return (
              <button key={targetId} onClick={(e) => handleScrollLink(e, targetId)} className="flex items-center gap-4 group/item relative">
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 px-2 py-1 ${activeSection === targetId ? 'text-blue-400' : 'text-slate-300'}`}>
                  {link.name}
                </span>
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 ${activeSection === targetId ? 'bg-blue-600 border-blue-600 scale-150 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-slate-800 border-slate-500'}`} />
              </button>
            )
          })}
        </aside>
      )}

      {/* 4. BACK TO TOP BUTTON */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl text-blue-400 hover:text-white hover:bg-blue-600 transition-all active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;