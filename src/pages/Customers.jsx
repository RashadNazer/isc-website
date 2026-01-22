import React, { useState, useMemo } from 'react';
import { customerData } from '../data/customers';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
} from "../components/UIComponents";
import Aurora from '../component/Aurora';
import SplitText from "../component/SplitText"; // Ensure path is correct

export default function CustomersPage() {
  /** * STATE MANAGEMENT
   * activeFilter: Tracks the currently selected category (All, Petrochemical, etc.)
   * visibleCount: Controls how many logos are rendered initially for performance
   */
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10); 

  // Configuration for the Filter Bar
  const categories = [
    { id: 'All', label: 'All Clients' },
    { id: 'Petrochemical', label: 'Oil & Gas' },
    { id: 'Hospital', label: 'Healthcare' },
    { id: 'General', label: 'General Contracting' }
  ];

  /** * FILTERING LOGIC
   * useMemo ensures we only re-calculate the filtered list when activeFilter 
   * or the raw data changes, preventing unnecessary renders.
   */
  const filteredCustomers = useMemo(() => {
    return activeFilter === 'All' 
      ? customerData 
      : customerData.filter(c => c.category === activeFilter);
  }, [activeFilter]);

  // Pagination/Slicing logic for the "Load More" functionality
  const displayedCustomers = filteredCustomers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCustomers.length;

  /** * ANIMATION CONFIGURATION
   * Standard spring physics for the "Pill" selector to give it a snappy, premium feel.
   */
  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40 pointer-events-none">
        {/* Aurora provides the flowing animated gradient background */}
        <Aurora
          colorStops={["#2563eb", "#1e40af", "#60a5fa"]} 
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
        {/* Soft gradient mask to ensure readability at the bottom of the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER SECTION: Title and subtitle using reveal animations */}
        <div className="text-center mb-10 md:mb-20">
          <Reveal>
            {/* SplitText animates characters/words individually for a high-end effect */}
            <div className="mb-4">
              <SplitText
                text="Partnerships"
                className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em]"
                delay={30}
              />
            </div>

            <div className="mb-4 md:mb-6">
              <SplitText
                text="Our Valued Clients"
                className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
                delay={50}
                duration={1.2}
                textAlign="center"
              />
            </div>

            <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Trusted by the Kingdom's leading organizations to deliver critical infrastructure and support.
            </p>
          </Reveal>
        </div>

        {/* STICKY FILTER BAR: Remains at the top while scrolling the grid */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-10 md:mb-12">
          <div className="flex justify-center"> 
            <div className="w-full md:w-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-1 md:p-1.5 rounded-2xl md:rounded-full shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden">
              <div className="flex flex-row overflow-x-auto no-scrollbar gap-1 px-1 py-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setVisibleCount(10); // Reset pagination when filter changes
                    }}
                    className="relative px-4 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-full text-[10px] md:text-xs font-black transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    <span className={`relative z-10 transition-colors duration-500 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {/* Active Pill: Animates physically between buttons using layoutId */}
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

        {/* LOGO GRID: Displays filtered clients */}
        <motion.div 
          layout // Smoothly rearranges grid items when others enter/exit
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
        >
          {/* AnimatePresence handles the 'exit' animations when logos are filtered out */}
          <AnimatePresence mode='popLayout'>
            {displayedCustomers.map((client, index) => (
              <motion.a 
                layout
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 5) * 0.05 }}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100/50 dark:border-slate-800/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm transition-all duration-500 flex flex-col items-center justify-center text-center h-[140px] md:h-[180px]"
              >
                {/* Image container with grayscale hover effect */}
                <div className="h-12 md:h-20 flex items-center justify-center mb-3 md:mb-5">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-[100px] md:max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out md:group-hover:scale-110" 
                  />
                </div>
                {/* Client Name Label */}
                <p className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-600 transition-colors uppercase tracking-[0.2em] line-clamp-1">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE: Incremental loading for large data sets */}
        {hasMore && (
          <div className="mt-12 md:mt-20 flex justify-center">
            <Reveal delay={0.2}>
              <div className="w-full sm:w-auto px-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 10)}
                  className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-white px-8 py-4 rounded-xl md:rounded-2xl text-white dark:text-slate-950 font-black text-sm transition-all active:scale-95 shadow-xl"
                >
                  Load More Clients
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </Reveal>
          </div>
        )}

        {/* EMPTY STATE: Fallback if a category has zero clients */}
        {filteredCustomers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 md:py-32">
            <p className="text-slate-400 dark:text-slate-600 font-black italic tracking-widest uppercase text-[10px] md:text-xs">
                No clients found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}