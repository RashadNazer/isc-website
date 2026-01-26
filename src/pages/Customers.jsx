import React, { useState, useMemo, useEffect } from 'react'; // Added useEffect
import { customerData } from '../data/customers';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Reveal } from "../components/UIComponents";
import Aurora from '../component/Aurora';
import SplitText from "../component/SplitText";

// 1. Optimized Image Component for Logos
const LogoImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative h-12 md:h-20 w-full flex items-center justify-center mb-3 md:mb-5">
      <motion.img 
        src={src} 
        alt={alt} 
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          filter: isLoaded ? 'blur(0px)' : 'blur(5px)' 
        }}
        transition={{ duration: 0.5 }}
        className="max-h-full max-w-[100px] md:max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out md:group-hover:scale-110" 
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500/10 border-t-blue-500/40 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default function CustomersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: 'All', label: 'All Clients' },
    { id: 'Petrochemical', label: 'Oil & Gas' },
    { id: 'Hospital', label: 'Healthcare' },
    { id: 'General', label: 'General Contracting' }
  ];

  const filteredCustomers = useMemo(() => {
    return activeFilter === 'All' 
      ? customerData 
      : customerData.filter(c => c.category === activeFilter);
  }, [activeFilter]);

  const displayedCustomers = filteredCustomers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCustomers.length;

  // 2. Optimized transition physics
  const smoothTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8 // Lower mass for faster reaction
  };

  return (
    <div className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40 pointer-events-none">
        <Aurora colorStops={["#2563eb", "#1e40af", "#60a5fa"]} blend={0.5} amplitude={1.0} speed={1} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-10 md:mb-20">
          <Reveal>
            <div className="mb-4">
              <SplitText
                text="Partnerships"
                className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em]"
                delay={20}
              />
            </div>
            <div className="mb-4 md:mb-6">
              <SplitText
                text="Our Valued Clients"
                className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
                delay={40}
                duration={0.8}
                textAlign="center"
              />
            </div>
            <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Trusted by the Kingdom's leading organizations to deliver critical infrastructure and support.
            </p>
          </Reveal>
        </div>

        {/* STICKY FILTER BAR */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-10 md:mb-12">
          <div className="flex justify-center"> 
            <div className="w-full md:w-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-1 md:p-1.5 rounded-2xl md:rounded-full shadow-xl">
              <div className="flex flex-row overflow-x-auto no-scrollbar gap-1 px-1 py-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setVisibleCount(10);
                    }}
                    className="relative px-4 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-full text-[10px] md:text-xs font-black transition-colors whitespace-nowrap flex-shrink-0 active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {activeFilter === cat.id && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-blue-600 rounded-xl md:rounded-full shadow-lg shadow-blue-500/20"
                        transition={smoothTransition}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LOGO GRID */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
        >
          <AnimatePresence mode='popLayout'>
            {displayedCustomers.map((client, index) => (
              <motion.a 
                layout
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                // staggered only on initial load or reset
                transition={{ 
                  duration: 0.4, 
                  delay: shouldReduceMotion ? 0 : (index % 10) * 0.05,
                  ease: [0.25, 1, 0.5, 1]
                }}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100/50 dark:border-slate-800/50 hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-center justify-center text-center h-[140px] md:h-[180px] transform-gpu"
              >
                <LogoImage src={client.logo} alt={client.name} />
                <p className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-600 transition-colors uppercase tracking-[0.2em] line-clamp-1">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE */}
        {hasMore && (
          <div className="mt-12 md:mt-20 flex justify-center">
            <Reveal delay={0.1}>
              <div className="w-full sm:w-auto px-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 10)}
                  className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-white px-10 py-5 rounded-xl md:rounded-2xl text-white dark:text-slate-950 font-black text-sm transition-all active:scale-95 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
                >
                  View More Partners
                  <motion.svg 
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-4 h-4" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
            </Reveal>
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredCustomers.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20 md:py-32">
            <div className="mb-4 text-4xl">🔍</div>
            <p className="text-slate-400 dark:text-slate-600 font-black italic tracking-widest uppercase text-[10px] md:text-xs">
                No clients found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}