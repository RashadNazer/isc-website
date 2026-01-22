// imports unchanged
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
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user scrolled past 80px to shrink header
  const [activeSection, setActiveSection] = useState(''); // Tracks current section for nav highlighting
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
  const [showBackToTop, setShowBackToTop] = useState(false); // Visibility of back-to-top button
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Persistent theme state

  // --- 2. SCROLL PROGRESS (TOP BAR) ---
  const { scrollYProgress } = useScroll();
  // useSpring creates a "bouncy" effect for the progress bar rather than a rigid move
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // Reusable transition string for CSS properties like height and background-color
  const slowEase =
    'transition-all duration-[900ms] cubic-bezier(0.25, 0.8, 0.25, 1)';

  // --- NAV LINKS ---
  // useMemo prevents the array from being re-created on every render cycle
  const navLinks = useMemo(
    () => [
      { name: 'About Us', path: 'about' },
      { name: 'Services', path: 'services' },
      { name: 'Solutions', path: 'solutions' },
      { name: 'Support', path: 'support' },
      { name: 'Clients', path: 'customers-preview' },
      { name: 'Projects', path: 'projects' },
      { name: 'Products', path: 'products' },
      { name: 'Request Quote', path: 'request-quote-cta' },
      { name: 'Career', path: '/career', type: 'route' }
    ],
    []
  );

  // --- THEME MANAGEMENT ---
  // Side effect to update the HTML root class so Tailwind's 'dark:' classes apply
  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark'
      ? root.classList.add('dark')
      : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // --- SCROLL HANDLER ---
  // Listens to global scroll to trigger UI changes at specific breakpoints
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 80);
      setShowBackToTop(current > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- SMOOTH SCROLL LOGIC ---
  const handleScrollLink = (e, id) => {
    setIsMenuOpen(false); // Close mobile menu if open
    if (id.startsWith('/')) return; // Allow standard routing for links like /career

    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      // Calculate position minus header offset (110px) to prevent header covering the title
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        110;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // If user is on another page, navigate home first then jump to ID
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

  // --- THEME TOGGLE (VIEW TRANSITION API) ---
  const toggleTheme = (event) => {
    // Fallback for browsers that don't support document.startViewTransition
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }

    // Capture click coordinates to start the "circle expansion" effect from the button
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() =>
      setTheme(theme === 'light' ? 'dark' : 'light')
    );

    // Create the circular clip-path animation
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        { clipPath: theme === 'dark' ? [...clipPath].reverse() : clipPath },
        {
          duration: 450,
          easing: 'ease-in-out',
          fill: 'forwards',
          pseudoElement:
            theme === 'dark'
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
        }
      );
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* NAVBAR: Changes height and transparency based on isScrolled */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] border-b ${slowEase} ${
          isScrolled
            ? 'h-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md'
            : 'h-64 md:h-80 bg-white dark:bg-slate-950'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full relative flex items-center">

          {/* 🔥 LOGO ENGINE: Moves from center-middle to top-left on scroll */}
          <motion.div
            layout // Framer Motion handles the interpolation between justify-center and justify-start
            transition={{ type: 'spring', stiffness: 55, damping: 22 }}
            className={`absolute inset-0 z-20 flex items-center pointer-events-none ${
              isScrolled ? 'justify-start' : 'justify-center'
            }`}
          >
            <Link
              to="/"
              onClick={(e) => handleScrollLink(e, 'top')}
              className="pointer-events-auto flex flex-col md:flex-row items-center gap-4"
            >
              {/* Main Logo scales down when scrolled */}
              <motion.img
                layout
                src={logo}
                className={`dark:brightness-125 ${
                  isScrolled ? 'h-10 md:h-12' : 'h-24 md:h-28 lg:h-32'
                }`}
              />
              {/* Secondary Logo container shrinks when scrolled */}
              <motion.div
                layout
                className={`bg-blue-900 rounded-lg shadow-lg ${
                  isScrolled ? 'px-3 py-1.5' : 'px-6 py-4'
                }`}
              >
                <motion.img
                  layout
                  src={footerLogo}
                  className={`${isScrolled ? 'h-5 md:h-6' : 'h-14 md:h-18 lg:h-20'}`}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* 🔥 NAVIGATION MENU: Moves from bottom-center to far-right on scroll */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 70, damping: 26 }}
            className={`hidden lg:flex items-center z-10 pointer-events-auto ${
              isScrolled
                ? 'ml-auto gap-x-3 xl:gap-x-5' // Docked position in top-right
                : 'absolute bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[90vw] justify-center gap-x-6 xl:gap-x-8' // Large hero position
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.type === 'route' ? link.path : '#'}
                onClick={(e) =>
                  link.type !== 'route'
                    ? handleScrollLink(e, link.path)
                    : undefined
                }
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  activeSection === link.path
                    ? 'text-blue-900 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-blue-900 text-white px-5 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg"
            >
              Contact
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 
             text-amber-500 dark:text-amber-400 
             hover:scale-110 transition-transform"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </motion.div>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Spacer to prevent content from going under the fixed navbar */}
      <div className="h-64 md:h-80" />
      
      <main className="flex-grow">{children}</main>
      
      <Footer />
    </div>
  );
}

// ICON COMPONENTS (SVG Assets)
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path d="M6 18L18 6M6 6l12 12" /></svg>;