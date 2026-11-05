import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowUp,
  X,
  Moon,
  Sun,
  Menu,
  ChevronDown,
  Building2,
  BookOpen,
  Search as SearchIcon,
  Sparkles,
  Users,
  Handshake,
  ShieldCheck,
  Factory,
  Newspaper,
  HelpCircle,
  FileBadge,
} from 'lucide-react';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footerlogo.png';
import Footer from './Footer';
import GlobalSearch from './GlobalSearch';
import { MagneticButton } from './UIComponents';

/* =========================================================
   Icon maps for mega-menu
   ========================================================= */
const COMPANY_ICONS = {
  'About Us': Building2,
  'Why ISC': Sparkles,
  Leadership: Users,
  'Case Studies': BookOpen,
  'Industries We Serve': Factory,
  Clients: Handshake,
  'Compliance & Certifications': ShieldCheck,
};

const RESOURCE_ICONS = {
  'Insights & News': Newspaper,
  'FAQ / Help Center': HelpCircle,
  'Vendor Registration': FileBadge,
};

/* =========================================================
   Full-width wrapper — matches AboutPage padding
   ========================================================= */
const FullWidth = ({ children, className = '' }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   NavLink
   ========================================================= */
const NavLink = ({ link, pathname, onClick, variant = 'default' }) => {
  const isActive =
    pathname === link.path ||
    (link.path !== '/' && pathname.startsWith(link.path + '/'));

  const isSticky = variant === 'sticky';

  const textSize = isSticky
    ? 'text-[10px] xl:text-[11px] tracking-widest'
    : 'text-[10px] xl:text-[11px] tracking-[0.15em]';

  const fontWeight = 'font-black';

  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={`group relative ${fontWeight} uppercase whitespace-nowrap transition-colors duration-300 ${textSize} ${
        isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      <span className="relative inline-block py-1">
        {link.name}

        <span
          className={`absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive
              ? 'scale-x-100 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
              : 'scale-x-0 group-hover:scale-x-100 bg-linear-to-r from-blue-600 to-indigo-500'
          }`}
        />

        {isActive && !isSticky && (
          <motion.span
            layoutId="activeNavDot"
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
      </span>
    </Link>
  );
};

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // --- 1. UI STATE ---
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Top nav dropdowns
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyRef = useRef(null);

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  // Sticky nav dropdowns
  const [isStickyCompanyOpen, setIsStickyCompanyOpen] = useState(false);
  const stickyCompanyRef = useRef(null);

  const [isStickyResourcesOpen, setIsStickyResourcesOpen] = useState(false);
  const stickyResourcesRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  });

  // Theme transition overlay
  const [themeTransition, setThemeTransition] = useState(null);

  // --- NAV SPOTLIGHT ---
  const desktopNavRef = useRef(null);
  const [navSpotlight, setNavSpotlight] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleNavMouseMove = (e) => {
    if (!desktopNavRef.current) return;
    const rect = desktopNavRef.current.getBoundingClientRect();
    setNavSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleNavMouseLeave = () => {
    setNavSpotlight((prev) => ({ ...prev, visible: false }));
  };

  // --- SCROLL-DRIVEN HEADER SHRINK ---
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const unsub = scrollY.on('change', (y) => {
      const p = Math.min(y / 300, 1);
      setScrollProgress(p);
    });
    return () => unsub();
  }, [scrollY]);

  const bannerPadding = {
    paddingTop: `${Math.round(24 - scrollProgress * 16)}px`,
    paddingBottom: `${Math.round(24 - scrollProgress * 16)}px`,
  };
  const logoHeight = `${Math.round(64 - scrollProgress * 28)}px`;
  const footerLogoHeight = `${Math.round(48 - scrollProgress * 16)}px`;
  const dividerHeight = `${Math.round(56 - scrollProgress * 28)}px`;

  // --- 3. NAV STRUCTURE ---
  const primaryLinks = useMemo(
    () => [
      { name: 'Services', path: '/services' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Support', path: '/support' },
      { name: 'Projects', path: '/projects' },
      { name: 'Products', path: '/products' },
      { name: 'Careers', path: '/career' },
      { name: 'Request Quote', path: '/enquiry' },
    ],
    []
  );

  const companyLinks = useMemo(
    () => [
      { name: 'About Us', path: '/about' },
      { name: 'Why ISC', path: '/why-isc' },
      { name: 'Leadership', path: '/leadership' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Industries We Serve', path: '/industries' },
      { name: 'Clients', path: '/customers' },
      { name: 'Compliance & Certifications', path: '/compliance' },
    ],
    []
  );

  const resourceLinks = useMemo(
    () => [
      { name: 'Insights & News', path: '/insights' },
      { name: 'FAQ / Help Center', path: '/faq' },
      { name: 'Vendor Registration', path: '/vendors' },
    ],
    []
  );

  const homeSections = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'solutions', label: 'Solutions' },
      { id: 'support', label: 'Support' },
      { id: 'customers-preview', label: 'Clients' },
      { id: 'projects', label: 'Projects' },
      { id: 'products', label: 'Products' },
      { id: 'request-quote-cta', label: 'Request Quote' },
    ],
    []
  );

  const isCompanySectionActive = useMemo(
    () =>
      companyLinks.some(
        (link) =>
          pathname === link.path ||
          (link.path !== '/' && pathname.startsWith(link.path + '/'))
      ),
    [companyLinks, pathname]
  );

  const isResourcesSectionActive = useMemo(
    () =>
      resourceLinks.some(
        (link) =>
          pathname === link.path ||
          (link.path !== '/' && pathname.startsWith(link.path + '/'))
      ),
    [resourceLinks, pathname]
  );

  // --- THEME: persist preference only ---
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // --- THEME: initial class application (runs once) ---
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');

    if (saved) {
      if (saved === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      root.classList.add('dark');
      setTheme('dark');
    } else {
      root.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  // --- BODY LOCK WHEN MENU OPEN ---
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // --- GLOBAL KEYBOARD SHORTCUT ---
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // --- BROADCAST MEGA-MENU STATE TO <html> ---
  // Used by ScrollProgress to hide itself when a top-nav dropdown is open.
  useEffect(() => {
    const root = document.documentElement;
    if (isCompanyOpen || isResourcesOpen) {
      root.classList.add('mega-menu-open');
    } else {
      root.classList.remove('mega-menu-open');
    }
    return () => root.classList.remove('mega-menu-open');
  }, [isCompanyOpen, isResourcesOpen]);

  // --- CLOSE ALL DROPDOWNS ON OUTSIDE CLICK ---
  useEffect(() => {
    const handler = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setIsCompanyOpen(false);
      }
      if (stickyCompanyRef.current && !stickyCompanyRef.current.contains(e.target)) {
        setIsStickyCompanyOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setIsResourcesOpen(false);
      }
      if (stickyResourcesRef.current && !stickyResourcesRef.current.contains(e.target)) {
        setIsStickyResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // --- CLOSE ALL DROPDOWNS ON ROUTE CHANGE ---
  useEffect(() => {
    setIsCompanyOpen(false);
    setIsStickyCompanyOpen(false);
    setIsResourcesOpen(false);
    setIsStickyResourcesOpen(false);
  }, [pathname]);

  // --- SCROLL OBSERVER + STICKY VISIBILITY ---
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
      homeSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [homeSections, pathname]);

  // --- SMOOTH SCROLL TO ANCHOR ---
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
        const elementPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  // ============================================================
  // THEME TOGGLE
  // ============================================================
  const toggleTheme = (event) => {
    if (themeTransition) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const root = document.documentElement;
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      if (nextTheme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      setTheme(nextTheme);
      return;
    }

    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const isGoingDark = nextTheme === 'dark';

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    setThemeTransition({ phase: 'cover', x, y, isGoingDark });

    setTimeout(() => {
      const root = document.documentElement;
      if (isGoingDark) root.classList.add('dark');
      else root.classList.remove('dark');
      setTheme(nextTheme);
    }, 340);

    setTimeout(() => {
      setThemeTransition((prev) =>
        prev ? { ...prev, phase: 'reveal' } : null
      );
    }, 360);

    setTimeout(() => setThemeTransition(null), 850);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col">
      {/* ============================================================
          1. LARGE HEADER — z-200 for guaranteed stacking above content
          ============================================================ */}
      <header className="relative z-200 bg-white dark:bg-slate-900 flex flex-col items-center">
        {/* Blue logo banner */}
        <div
          style={bannerPadding}
          className="w-full bg-blue-950 border-b border-blue-900/50 dark:border-blue-800/50 transition-[padding] duration-150 ease-out"
        >
          <FullWidth className="flex justify-center items-center">
            <Link
              to="/"
              onClick={(e) => handleScrollLink(e, 'top')}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={logo}
                style={{ height: logoHeight }}
                className="w-auto dark:brightness-125 transition-[height] duration-150 ease-out"
                alt="Logo"
              />
              <div
                style={{ height: dividerHeight }}
                className="hidden md:block w-px bg-white/20 transition-[height] duration-150 ease-out"
              />
              <img
                src={footerLogo}
                style={{ height: footerLogoHeight }}
                className="w-auto transition-[height] duration-150 ease-out"
                alt="Footer Logo"
              />
            </Link>
          </FullWidth>
        </div>

        {/* Desktop nav bar */}
        <nav
          ref={desktopNavRef}
          onMouseMove={handleNavMouseMove}
          onMouseLeave={handleNavMouseLeave}
          className="hidden lg:flex w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-[250]"
        >
          {/* Spotlight */}
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 overflow-hidden"
            style={{
              opacity: navSpotlight.visible ? 1 : 0,
              background: `radial-gradient(400px circle at ${navSpotlight.x}px ${navSpotlight.y}px, rgba(37, 99, 235, 0.08), transparent 60%)`,
            }}
            aria-hidden="true"
          />

          <FullWidth className="relative z-10 flex items-center justify-between h-20">
            {/* LEFT: nav links */}
            <div className="flex items-center gap-6 xl:gap-8">
              {/* COMPANY mega-menu */}
              <div
                ref={companyRef}
                className="relative isolate"
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <button
                  onClick={() => setIsCompanyOpen((v) => !v)}
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  className={`group relative flex items-center gap-1 font-black uppercase tracking-[0.15em] text-[10px] xl:text-[11px] whitespace-nowrap transition-colors ${
                    isCompanyOpen || isCompanySectionActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isCompanyOpen}
                >
                  <span className="relative inline-block py-1">
                    Company
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left transition-transform duration-500 ${
                        isCompanySectionActive
                          ? 'scale-x-100 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                          : 'scale-x-0 group-hover:scale-x-100 bg-linear-to-r from-blue-600 to-indigo-500'
                      }`}
                    />
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isCompanyOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={3}
                  />
                </button>

                <AnimatePresence>
                  {isCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, x: -6 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -4, x: -6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-3 w-135 z-350"
                    >
                      <div className="absolute -top-3 left-0 right-0 h-3" />

                      <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
                        <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-800" />

                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                            Company
                          </p>
                          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                            {companyLinks.length} pages
                          </span>
                        </div>

                        <div className="p-2 grid grid-cols-2 gap-1">
                          {companyLinks.map((link) => {
                            const isItemActive =
                              pathname === link.path ||
                              (link.path !== '/' &&
                                pathname.startsWith(link.path + '/'));
                            const Icon = COMPANY_ICONS[link.name] || Building2;

                            return (
                              <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsCompanyOpen(false)}
                                className={`group/item flex items-start gap-3 px-3 py-3 rounded-xl text-xs transition-colors ${
                                  isItemActive
                                    ? 'bg-blue-50 dark:bg-blue-950/40'
                                    : 'hover:bg-blue-50 dark:hover:bg-blue-950/40'
                                }`}
                              >
                                <div
                                  className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                    isItemActive
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" strokeWidth={2.2} />
                                </div>
                                <div className="min-w-0 pt-1">
                                  <p
                                    className={`font-black uppercase tracking-widest text-[11px] transition-colors leading-tight ${
                                      isItemActive
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-slate-700 dark:text-slate-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'
                                    }`}
                                  >
                                    {link.name}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PRIMARY links (first 5) */}
              {primaryLinks.slice(0, 5).map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  pathname={pathname}
                  onClick={(e) => handleScrollLink(e, link.path)}
                />
              ))}

              {/* PRIMARY links (Careers, Request Quote) */}
              {primaryLinks.slice(5).map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  pathname={pathname}
                  onClick={(e) => handleScrollLink(e, link.path)}
                />
              ))}

              {/* RESOURCES dropdown */}
              <div
                ref={resourcesRef}
                className="relative isolate"
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  onClick={() => setIsResourcesOpen((v) => !v)}
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  className={`group relative flex items-center gap-1 font-black uppercase tracking-[0.15em] text-[10px] xl:text-[11px] whitespace-nowrap transition-colors ${
                    isResourcesOpen || isResourcesSectionActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isResourcesOpen}
                >
                  <span className="relative inline-block py-1">
                    Resources
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left transition-transform duration-500 ${
                        isResourcesSectionActive
                          ? 'scale-x-100 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                          : 'scale-x-0 group-hover:scale-x-100 bg-linear-to-r from-blue-600 to-indigo-500'
                      }`}
                    />
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isResourcesOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={3}
                  />
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, x: -6 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -4, x: -6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-3 w-80 z-350"
                    >
                      <div className="absolute -top-3 left-0 right-0 h-3" />

                      <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
                        <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-800" />

                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                            Resources
                          </p>
                          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                            {resourceLinks.length} pages
                          </span>
                        </div>

                        <div className="p-2 space-y-1">
                          {resourceLinks.map((link) => {
                            const isItemActive =
                              pathname === link.path ||
                              (link.path !== '/' &&
                                pathname.startsWith(link.path + '/'));
                            const Icon = RESOURCE_ICONS[link.name] || BookOpen;

                            return (
                              <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsResourcesOpen(false)}
                                className={`group/item flex items-start gap-3 px-3 py-3 rounded-xl text-xs transition-colors ${
                                  isItemActive
                                    ? 'bg-blue-50 dark:bg-blue-950/40'
                                    : 'hover:bg-blue-50 dark:hover:bg-blue-950/40'
                                }`}
                              >
                                <div
                                  className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                    isItemActive
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" strokeWidth={2.2} />
                                </div>
                                <div className="min-w-0 pt-1">
                                  <p
                                    className={`font-black uppercase tracking-widest text-[11px] transition-colors leading-tight ${
                                      isItemActive
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-slate-700 dark:text-slate-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'
                                    }`}
                                  >
                                    {link.name}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT: Search + Contact + Theme toggle */}
            <div className="flex items-center gap-3 ml-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="group flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <SearchIcon className="w-4 h-4" strokeWidth={2.5} />
                <span className="hidden xl:inline-flex items-center gap-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-[9px] font-black max-w-0 group-hover:max-w-11 group-hover:px-1.5 group-hover:py-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
                  <span className="text-[10px]">⌘</span>K
                </span>
              </button>

              <MagneticButton strength={0.35}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 transition-colors whitespace-nowrap shadow-lg shadow-blue-600/20"
                >
                  Contact Us
                </Link>
              </MagneticButton>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                disabled={!!themeTransition}
                className="p-2 text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </FullWidth>
        </nav>

        {/* Mobile header strip */}
        <div className="lg:hidden w-full flex justify-between items-center p-5 bg-white dark:bg-slate-900">
          <img src={logo} className="h-10 w-auto" alt="Logo" />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="p-2 text-blue-600 dark:text-blue-400"
            >
              <SearchIcon size={24} />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-blue-600 dark:text-blue-400"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================
          2. STICKY NAVBAR — z-[210]
          Note: scroll progress bar is now handled by the standalone
          <ScrollProgress /> component rendered in App.jsx.
          ============================================================ */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-lg dark:shadow-2xl border-b border-slate-200 dark:border-slate-800 z-210 transition-transform duration-500 ${
          isStickyVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-4 md:px-6 h-full flex items-center justify-between relative">
          <Link
            to="/"
            onClick={(e) => handleScrollLink(e, 'top')}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logo}
              className="h-8 md:h-10 w-auto dark:brightness-125"
              alt="Logo Small"
            />
            <div className="bg-blue-950 rounded-lg px-2.5 py-1.5 md:px-3 md:py-2">
              <img
                src={footerLogo}
                className="h-6 md:h-8 w-auto"
                alt="Logo Mini"
              />
            </div>
          </Link>

          {/* CENTER: nav links */}
          <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-7 ml-8 xl:ml-12 flex-1 justify-center">
            {/* COMPANY dropdown (sticky) */}
            <div
              ref={stickyCompanyRef}
              className="relative isolate"
              onMouseLeave={() => setIsStickyCompanyOpen(false)}
            >
              <button
                onClick={() => setIsStickyCompanyOpen((v) => !v)}
                onMouseEnter={() => setIsStickyCompanyOpen(true)}
                className={`group relative flex items-center gap-1 font-black uppercase tracking-widest text-[10px] xl:text-[11px] whitespace-nowrap transition-colors ${
                  isStickyCompanyOpen || isCompanySectionActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                aria-haspopup="true"
                aria-expanded={isStickyCompanyOpen}
              >
                <span className="relative inline-block py-1">
                  Company
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left transition-transform duration-500 ${
                      isCompanySectionActive
                        ? 'scale-x-100 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                        : 'scale-x-0 group-hover:scale-x-100 bg-linear-to-r from-blue-600 to-indigo-500'
                    }`}
                  />
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isStickyCompanyOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={3}
                />
              </button>

              <AnimatePresence>
                {isStickyCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, x: -6 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -4, x: -6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 pt-3 w-135 z-350"
                  >
                    <div className="absolute -top-3 left-0 right-0 h-3" />

                    <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-800" />

                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                          Company
                        </p>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                          {companyLinks.length} pages
                        </span>
                      </div>

                      <div className="p-2 grid grid-cols-2 gap-1">
                        {companyLinks.map((link) => {
                          const isItemActive =
                            pathname === link.path ||
                            (link.path !== '/' &&
                              pathname.startsWith(link.path + '/'));
                          const Icon = COMPANY_ICONS[link.name] || Building2;

                          return (
                            <Link
                              key={link.name}
                              to={link.path}
                              onClick={() => setIsStickyCompanyOpen(false)}
                              className={`group/item flex items-start gap-3 px-3 py-3 rounded-xl text-xs transition-colors ${
                                isItemActive
                                  ? 'bg-blue-50 dark:bg-blue-950/40'
                                  : 'hover:bg-blue-50 dark:hover:bg-blue-950/40'
                              }`}
                            >
                              <div
                                className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                  isItemActive
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white'
                                }`}
                              >
                                <Icon className="w-4 h-4" strokeWidth={2.2} />
                              </div>
                              <div className="min-w-0 pt-1">
                                <p
                                  className={`font-black uppercase tracking-widest text-[11px] transition-colors leading-tight ${
                                    isItemActive
                                      ? 'text-blue-600 dark:text-blue-400'
                                      : 'text-slate-700 dark:text-slate-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'
                                  }`}
                                >
                                  {link.name}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRIMARY links (sticky) */}
            {primaryLinks.slice(0, 5).map((link) => (
              <NavLink
                key={link.name}
                link={link}
                pathname={pathname}
                onClick={(e) => handleScrollLink(e, link.path)}
                variant="sticky"
              />
            ))}

            {primaryLinks.slice(5).map((link) => (
              <NavLink
                key={link.name}
                link={link}
                pathname={pathname}
                onClick={(e) => handleScrollLink(e, link.path)}
                variant="sticky"
              />
            ))}

            {/* RESOURCES dropdown (sticky) */}
            <div
              ref={stickyResourcesRef}
              className="relative isolate"
              onMouseLeave={() => setIsStickyResourcesOpen(false)}
            >
              <button
                onClick={() => setIsStickyResourcesOpen((v) => !v)}
                onMouseEnter={() => setIsStickyResourcesOpen(true)}
                className={`group relative flex items-center gap-1 font-black uppercase tracking-widest text-[10px] xl:text-[11px] whitespace-nowrap transition-colors ${
                  isStickyResourcesOpen || isResourcesSectionActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                aria-haspopup="true"
                aria-expanded={isStickyResourcesOpen}
              >
                <span className="relative inline-block py-1">
                  Resources
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left transition-transform duration-500 ${
                      isResourcesSectionActive
                        ? 'scale-x-100 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                        : 'scale-x-0 group-hover:scale-x-100 bg-linear-to-r from-blue-600 to-indigo-500'
                    }`}
                  />
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isStickyResourcesOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={3}
                />
              </button>

              <AnimatePresence>
                {isStickyResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, x: -6 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -4, x: -6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 pt-3 w-80 z-350"
                  >
                    <div className="absolute -top-3 left-0 right-0 h-3" />

                    <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-800" />

                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                          Resources
                        </p>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                          {resourceLinks.length} pages
                        </span>
                      </div>

                      <div className="p-2 space-y-1">
                        {resourceLinks.map((link) => {
                          const isItemActive =
                            pathname === link.path ||
                            (link.path !== '/' &&
                              pathname.startsWith(link.path + '/'));
                          const Icon = RESOURCE_ICONS[link.name] || BookOpen;

                          return (
                            <Link
                              key={link.name}
                              to={link.path}
                              onClick={() => setIsStickyResourcesOpen(false)}
                              className={`group/item flex items-start gap-3 px-3 py-3 rounded-xl text-xs transition-colors ${
                                isItemActive
                                  ? 'bg-blue-50 dark:bg-blue-950/40'
                                  : 'hover:bg-blue-50 dark:hover:bg-blue-950/40'
                              }`}
                            >
                              <div
                                className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                  isItemActive
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white'
                                }`}
                              >
                                <Icon className="w-4 h-4" strokeWidth={2.2} />
                              </div>
                              <div className="min-w-0 pt-1">
                                <p
                                  className={`font-black uppercase tracking-widest text-[11px] transition-colors leading-tight ${
                                    isItemActive
                                      ? 'text-blue-600 dark:text-blue-400'
                                      : 'text-slate-700 dark:text-slate-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'
                                  }`}
                                >
                                  {link.name}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Search + Contact + Theme toggle */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="group flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <SearchIcon className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden xl:inline-flex items-center gap-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-[9px] font-black max-w-0 group-hover:max-w-11 group-hover:px-1.5 group-hover:py-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
                <span className="text-[10px]">⌘</span>K
              </span>
            </button>

            <MagneticButton strength={0.3}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 transition-colors whitespace-nowrap shadow-lg shadow-blue-600/20"
              >
                Contact Us
              </Link>
            </MagneticButton>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              disabled={!!themeTransition}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-amber-600 disabled:opacity-50"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="p-2 text-blue-600 dark:text-blue-400"
            >
              <SearchIcon size={22} />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-blue-600 dark:text-blue-400"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        {/* NOTE: Sticky nav's own scroll progress bar has been removed —
            the standalone <ScrollProgress /> in App.jsx now handles it
            globally, and hides itself when a mega-menu is open. */}
      </nav>

      {/* ============================================================
          3. MOBILE MENU OVERLAY
          ============================================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-400"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[90%] max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 z-410 flex flex-col shadow-2xl"
            >
              {/* HEADER — pinned at top */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
                <img src={logo} className="h-8 w-auto" alt="Mobile Logo" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">
                {/* COMPANY group */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2
                      className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                      strokeWidth={2.5}
                    />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      Company
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3 pl-1">
                    {companyLinks.map((link) => {
                      const isItemActive =
                        pathname === link.path ||
                        (link.path !== '/' &&
                          pathname.startsWith(link.path + '/'));
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={(e) => handleScrollLink(e, link.path)}
                          className={`text-base font-bold uppercase tracking-widest transition-colors ${
                            isItemActive
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

                {/* PRIMARY links */}
                <div className="flex flex-col gap-y-3 mb-6">
                  {primaryLinks.map((link) => {
                    const isItemActive =
                      pathname === link.path ||
                      (link.path !== '/' &&
                        pathname.startsWith(link.path + '/'));
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={(e) => handleScrollLink(e, link.path)}
                        className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                          isItemActive
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

                {/* RESOURCES group */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen
                      className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                      strokeWidth={2.5}
                    />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      Resources
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3 pl-1">
                    {resourceLinks.map((link) => {
                      const isItemActive =
                        pathname === link.path ||
                        (link.path !== '/' &&
                          pathname.startsWith(link.path + '/'));
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-base font-bold uppercase tracking-widest transition-colors ${
                            isItemActive
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-blue-600 text-white py-4 rounded-xl font-black text-center uppercase tracking-widest text-sm shadow-xl hover:bg-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* FOOTER — pinned at bottom */}
              <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
                <span className="text-slate-600 dark:text-slate-400 font-bold uppercase text-xs tracking-widest">
                  Switch Theme
                </span>
                <button
                  onClick={(e) => {
                    toggleTheme(e);
                    setIsMenuOpen(false);
                  }}
                  aria-label="Toggle theme"
                  disabled={!!themeTransition}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-amber-600 disabled:opacity-50"
                >
                  {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ============================================================
          4. MAIN CONTENT
          ============================================================ */}
      <main className="grow w-full min-w-0 relative bg-white dark:bg-slate-950 overflow-x-clip">
        {children}
      </main>

      {/* ============================================================
          5. SIDE DOTS (homepage only)
          ============================================================ */}
      {pathname === '/' && (
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-90 hidden md:flex flex-col gap-6 items-end group">
          {homeSections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={(e) => handleScrollLink(e, section.id)}
                className="flex items-center gap-4 group/item relative"
                aria-label={`Scroll to ${section.label}`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 px-2 py-1 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 opacity-100 translate-x-0'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {section.label}
                </span>

                <div className="relative">
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 ${
                      isActive
                        ? 'bg-blue-600 border-blue-600 scale-150 shadow-[0_0_10px_rgba(37,99,235,0.4)]'
                        : 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-500'
                    }`}
                  />
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-blue-600"
                      animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </aside>
      )}

      {/* ============================================================
          6. BACK TO TOP
          ============================================================ */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-100 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl dark:shadow-2xl text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ============================================================
          7. GLOBAL SEARCH MODAL
          ============================================================ */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* ============================================================
          8. THEME TRANSITION OVERLAY
          ============================================================ */}
      <AnimatePresence>
        {themeTransition && (
          <motion.div
            key={`theme-${themeTransition.isGoingDark ? 'to-dark' : 'to-light'}`}
            className="fixed inset-0 z-9999 pointer-events-none will-change-[clip-path,opacity,transform]"
            initial={{
              clipPath: `circle(0px at ${themeTransition.x}px ${themeTransition.y}px)`,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              clipPath: `circle(150vmax at ${themeTransition.x}px ${themeTransition.y}px)`,
              opacity: themeTransition.phase === 'reveal' ? 0 : 1,
              scale: themeTransition.phase === 'reveal' ? 1.06 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              clipPath: {
                duration: 0.35,
                ease: [0.83, 0, 0.17, 1],
              },
              opacity: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            style={{
              backgroundColor: themeTransition.isGoingDark
                ? '#020617'
                : '#ffffff',
            }}
          />
        )}
      </AnimatePresence>

      {/* ============================================================
          9. FOOTER
          ============================================================ */}
      <Footer />
    </div>
  );
}