import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, X, Moon, Sun, Menu } from 'lucide-react'; 
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
      
      {/* 1. LARGE HEADER (AL BAWANI STYLE) */}
      <header className="relative z-110 bg-slate-900 flex flex-col items-center">
        <div className="w-full bg-blue-900 py-10 md:py-14 flex justify-center items-center px-4 border-b border-blue-800/50">
          <Link to="/" onClick={(e) => handleScrollLink(e, 'top')} className="flex flex-col md:flex-row items-center gap-8">
            <img src={logo} className="w-auto h-24 md:h-28 lg:h-32 dark:brightness-125" alt="Logo" />
            <div className="hidden md:block h-20 w-px bg-white/20"></div>
            <img src={footerLogo} className="w-auto h-16 md:h-16 lg:h-20" alt="Footer Logo" />
          </Link>
        </div>

        <nav className="hidden lg:flex w-full bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between h-20">
            <div className="flex items-center justify-between grow mr-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={(e) => handleScrollLink(e, link.id || link.path)}
                  className="font-black uppercase tracking-[0.15em] text-[10px] xl:text-[11px] text-slate-300 hover:text-blue-400 transition-all hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 transition-colors">
                Contact Us
              </Link>
              <button onClick={toggleTheme} className="p-2 text-amber-500 hover:bg-slate-800 rounded-lg transition-colors">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </nav>

        <div className="lg:hidden w-full flex justify-between items-center p-5 bg-slate-900">
           <img src={logo} className="h-10 w-auto" alt="Logo" />
           <button onClick={() => setIsMenuOpen(true)} className="p-2 text-blue-400"><Menu size={32}/></button>
        </div>
      </header>

      {/* 2. STICKY NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full h-20 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800 z-120 transition-transform duration-500 ${isStickyVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
            <button onClick={toggleTheme} className="hidden lg:block p-1.5 rounded-full bg-slate-800 text-amber-600 ml-2">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
          <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-blue-400"><Menu size={28} /></button>
          </div>
        </div>
        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-0.75 origin-[0%] transition-colors duration-500 ${getProgressColor()}`} 
          style={{ scaleX }} 
        />
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-150"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-slate-900 border-l border-slate-800 z-160 p-8 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <img src={logo} className="h-8 w-auto" alt="Mobile Logo" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:text-white"><X className="w-8 h-8" /></button>
              </div>

              <div className="flex flex-col gap-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={(e) => handleScrollLink(e, link.id || link.path)}
                    className="text-lg font-bold uppercase tracking-widest text-slate-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-900 text-white py-4 rounded-xl font-black text-center uppercase tracking-widest text-sm shadow-xl">Contact Us</Link>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Switch Theme</span>
                <button onClick={(e) => { toggleTheme(e); setIsMenuOpen(false); }} className="p-3 rounded-2xl bg-slate-800 text-amber-600">
                  {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="grow w-full relative bg-slate-900 transition-colors duration-700">{children}</main>

      {/* SIDE DOTS (PROGRESS INDICATOR) */}
      {pathname === '/' && (
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-90 hidden md:flex flex-col gap-6 items-end group">
          {navLinks.filter(l => l.id || l.type !== 'route').map((link) => {
            const targetId = link.id || link.path;
            return (
              <button key={targetId} onClick={(e) => handleScrollLink(e, targetId)} className="flex items-center gap-4 group/item relative">
                {/* Updated span: removed bg-slate-900 and shadow-xl for transparency */}
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 px-2 py-1 ${activeSection === targetId ? 'text-blue-400 opacity-100 translate-x-0' : 'text-slate-300'}`}>
                  {link.name}
                </span>
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 ${activeSection === targetId ? 'bg-blue-600 border-blue-600 scale-150 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-slate-800 border-slate-500'}`} />
              </button>
            )
          })}
        </aside>
      )}

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-100 p-4 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl text-blue-400 hover:text-white hover:bg-blue-600 transition-all active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}