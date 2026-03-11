import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, X, Moon, Sun, Menu } from 'lucide-react'; 
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 1. ALL INITIAL MENU ITEMS RETAINED
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

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 180);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 2. THEME TRANSITION ANIMATION RESTORED
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
        { 
          duration: 450, 
          easing: 'ease-in-out', 
          fill: 'forwards', 
          pseudoElement: theme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)' 
        }
      );
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-700 flex flex-col">
      
      {/* LARGE HEADER SECTION */}
      <header className="relative z-[110] bg-slate-900 flex flex-col items-center">
        
        {/* LOGO BOX (Blue Background) */}
        <div className="w-full bg-blue-900 py-10 md:py-14 flex justify-center items-center px-4 border-b border-blue-800/50">
          <Link to="/" className="flex flex-col md:flex-row items-center gap-8">
            <img src={logo} className="w-auto h-24 md:h-28 lg:h-32 dark:brightness-125" alt="Logo" />
            <div className="hidden md:block h-20 w-[1px] bg-white/20"></div>
            <img src={footerLogo} className="w-auto h-16 md:h-16 lg:h-20" alt="Footer Logo" />
          </Link>
        </div>

        {/* FULL WIDTH MENU (Under Logo) */}
        <nav className="hidden lg:flex w-full bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between h-20">
            <div className="flex items-center justify-between flex-grow mr-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
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

        {/* Mobile View Toggle */}
        <div className="lg:hidden w-full flex justify-between items-center p-5 bg-slate-900">
           <img src={logo} className="h-10 w-auto" alt="Logo" />
           <button onClick={() => setIsMenuOpen(true)} className="p-2 text-blue-400"><Menu size={32}/></button>
        </div>
      </header>

      {/* STICKY COMPACT NAV (Shows on scroll) */}
      <nav className={`fixed top-0 left-0 w-full h-20 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800 z-[120] transition-transform duration-500 ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="h-10 w-auto" alt="Logo Sticky" />
            <div className="bg-blue-900 px-2 py-1 rounded">
              <img src={footerLogo} className="h-5 w-auto" alt="Mini Logo" />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-blue-400">
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="text-amber-500 ml-2">
              {theme === 'light' ? <Moon size={18}/> : <Sun size={18}/>}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-blue-400"><Menu size={28}/></button>
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 origin-[0%]" style={{ scaleX }} />
      </nav>

      {/* MOBILE MENU (Full width/Full screen) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-slate-950 z-[200] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img src={logo} className="h-10 w-auto" alt="Logo" />
              <button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32}/></button>
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase text-slate-300 border-b border-slate-800 pb-4">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white py-4 text-center font-black uppercase tracking-widest mt-4">Contact Us</Link>
            </div>
            <div className="mt-auto pt-8 flex justify-between items-center border-t border-slate-800">
               <span className="text-slate-500 font-bold uppercase text-xs">Switch Theme</span>
               <button onClick={(e) => { toggleTheme(e); setIsMenuOpen(false); }} className="p-4 bg-slate-900 rounded-full text-amber-500">
                  {theme === 'light' ? <Moon size={24}/> : <Sun size={24}/>}
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full relative bg-white dark:bg-slate-950 transition-colors duration-700">
        {children}
      </main>

      <Footer />
    </div>
  );
}