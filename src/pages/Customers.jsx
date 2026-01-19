import React, { useState, useMemo } from 'react';
import { customerData } from '../data/customers';
import { motion, AnimatePresence } from 'framer-motion';
// Adjusted paths for your UI components
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../components/UIComponents";

export default function CustomersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10); 

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

  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Using Reveal for consistency */}
        <div className="text-center mb-12 md:mb-20">
          <Reveal>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Partnerships
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Our Valued Clients
            </h1>
            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Trusted by the Kingdom's leading organizations to deliver critical infrastructure and support.
            </p>
          </Reveal>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-[75px] md:top-24 z-30 mb-12">
          <div className="max-w-fit mx-auto"> 
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-1.5 rounded-full shadow-xl shadow-slate-200/20 dark:shadow-none">
              <div className="flex flex-nowrap gap-1 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setVisibleCount(10);
                    }}
                    className="relative px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black transition-colors whitespace-nowrap"
                  >
                    <span className={`relative z-10 transition-colors duration-500 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {activeFilter === cat.id && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
        >
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
                className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center h-[180px]"
              >
                <div className="h-20 flex items-center justify-center mb-5">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 transition-colors uppercase tracking-[0.2em] line-clamp-1">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button - Magnetic Style */}
        <AnimatePresence>
          {hasMore && (
            <div className="mt-20 flex justify-center">
              <Reveal delay={0.2}>
                <MagneticButton>
                  <button
                    onClick={() => setVisibleCount(prev => prev + 10)}
                    className="group flex items-center gap-3 bg-slate-900 dark:bg-white px-8 py-4 rounded-2xl text-white dark:text-slate-950 font-black text-sm transition-all active:scale-95 shadow-xl hover:shadow-blue-500/20"
                  >
                    Load More Clients
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </MagneticButton>
              </Reveal>
            </div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
            <p className="text-slate-400 dark:text-slate-600 font-black italic tracking-widest uppercase text-xs">No clients found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}