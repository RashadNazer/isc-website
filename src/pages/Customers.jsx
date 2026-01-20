import React, { useState, useMemo } from 'react';
import { customerData } from '../data/customers';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
  MeshBackground 
} from "../components/UIComponents";

export default function CustomersPage() {
  /**
   * STATE MANAGEMENT
   * activeFilter: Stores the currently selected category ID.
   * visibleCount: Controls how many logos are rendered (pagination/Load More).
   */
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10); 

  /**
   * CATEGORIES DEFINITION
   * label: The text displayed on the filter button.
   * id: Matches the 'category' property in the customer data.
   */
  const categories = [
    { id: 'All', label: 'All Clients' },
    { id: 'Petrochemical', label: 'Oil & Gas' },
    { id: 'Hospital', label: 'Healthcare' },
    { id: 'General', label: 'General Contracting' }
  ];

  /**
   * FILTER LOGIC
   * useMemo ensures filtering only re-runs when the activeFilter or data changes.
   */
  const filteredCustomers = useMemo(() => {
    return activeFilter === 'All' 
      ? customerData 
      : customerData.filter(c => c.category === activeFilter);
  }, [activeFilter]);

  // Slices the array based on visibleCount for "Load More" functionality
  const displayedCustomers = filteredCustomers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCustomers.length;

  /**
   * ANIMATION CONFIG
   * Defining a reusable spring transition for smooth UI movements (like the filter pill).
   */
  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section: Uses Reveal component for entrance animations */}
        <div className="text-center mb-10 md:mb-20">
          <Reveal>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">
              Partnerships
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
              Our Valued Clients
            </h1>
            <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Trusted by the Kingdom's leading organizations to deliver critical infrastructure and support.
            </p>
          </Reveal>
        </div>

        {/* Filter Bar: Sticky positioning follows user on scroll */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-10 md:mb-12">
          <div className="flex justify-center"> 
            <div className="w-full md:w-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-1 md:p-1.5 rounded-2xl md:rounded-full shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden">
              
              {/* Filter List: overflow-x-auto allows swiping categories on small screens */}
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
                    
                    {/* Active Indicator: Framer Motion 'layoutId' creates the sliding pill effect */}
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

        {/* Logo Grid: Responsive grid configuration (2 columns mobile -> 5 columns desktop) */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
        >
          {/* AnimatePresence popLayout ensures items exit gracefully during filtering */}
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
                className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm transition-all duration-500 flex flex-col items-center justify-center text-center h-[140px] md:h-[180px]"
              >
                {/* Logo Container */}
                <div className="h-12 md:h-20 flex items-center justify-center mb-3 md:mb-5">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-[100px] md:max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out md:group-hover:scale-110" 
                  />
                </div>
                {/* Client Name Subtitle */}
                <p className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-600 transition-colors uppercase tracking-[0.2em] line-clamp-1">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button: Only visible if filtered results exceed visibleCount */}
        <AnimatePresence>
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
        </AnimatePresence>

        {/* Empty State: Displayed if no items match the filter criteria */}
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