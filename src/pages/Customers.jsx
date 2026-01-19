import React, { useState, useMemo } from 'react';
import { customerData } from '../data/customers';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10); // Initial items to show

  const categories = [
    { id: 'All', label: 'All Clients' },
    { id: 'Petrochemical', label: 'Oil, Gas & Petrochemical' },
    { id: 'Hospital', label: 'Healthcare & Hospitals' },
    { id: 'General', label: 'General Contracting & Others' }
  ];

  // Memoize filtered list for performance
  const filteredCustomers = useMemo(() => {
    const filtered = activeFilter === 'All' 
      ? customerData 
      : customerData.filter(c => c.category === activeFilter);
    return filtered;
  }, [activeFilter]);

  const displayedCustomers = filteredCustomers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCustomers.length;

  // Custom Spring for "Weighted" smooth movement
  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30, // Higher damping = less bounce, more "luxury" feel
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Our Valued Clients
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by the Kingdom's leading organizations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-[75px] md:top-24 z-30 px-6 pb-12">
          <div className="max-w-fit mx-auto"> 
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 py-2 px-2 rounded-full shadow-lg shadow-slate-200/20 dark:shadow-none">
              <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1.5 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setVisibleCount(10); // Reset count on filter change
                    }}
                    className="relative px-5 py-2 rounded-full text-[10px] md:text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    <span className={`relative z-10 transition-colors duration-500 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {activeFilter === cat.id && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-md"
                        transition={smoothTransition}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {displayedCustomers.map((client, index) => (
              <motion.a 
                layout
                key={client.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{
                  ...smoothTransition,
                  delay: (index % 5) * 0.05 // Stagger entrance by row
                }}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-white/95 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                  />
                </div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 transition-colors uppercase tracking-widest">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-16 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount(prev => prev + 10)}
                className="group relative px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-sm overflow-hidden transition-all hover:pr-14 active:scale-95"
              >
                <span className="relative z-10">Load More Clients</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-slate-400 dark:text-slate-600 font-medium italic">No clients found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}