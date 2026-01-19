import React, { useState, useMemo } from 'react';
import { partnerData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Security', label: 'Integrated Security & Access Control' },
    { id: 'Fire', label: 'Life Safety & Fire Alarm' },
    { id: 'ICT', label: 'ICT Systems' },
    { id: 'TETRA', label: 'TETRA Systems' }
  ];

  // Memoize the filtering to avoid recalculating on every render
  const filteredPartners = useMemo(() => {
    return activeFilter === 'All' 
      ? partnerData 
      : partnerData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  // Use the high-end spring physics we defined for the customers page
  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            Advanced Portfolio
          </h2>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
            Our Technology Solutions
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive selection of <span className="text-blue-900 dark:text-blue-300 font-bold">industry-leading products</span> engineered for the Kingdom's critical industrial sectors.
          </p>
          
          <div className="mt-8 md:mt-10 flex justify-center gap-2">
            <motion.div animate={{ width: [40, 60, 40] }} transition={{ repeat: Infinity, duration: 3 }} className="h-1 bg-blue-600 rounded-full" />
            <div className="h-1 w-3 bg-blue-200 dark:bg-blue-800 rounded-full" />
            <div className="h-1 w-3 bg-blue-100 dark:bg-blue-900 rounded-full" />
          </div>
        </motion.div>

        {/* Floating Filter Bar */}
        <div className="sticky top-[75px] md:top-24 z-30 px-6 pb-12">
          <div className="max-w-4xl mx-auto"> 
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-200/20 dark:shadow-none px-2">
              <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:justify-center gap-1.5 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className="relative px-5 py-2 rounded-full text-[10px] md:text-xs font-bold transition-colors whitespace-nowrap active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-600 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {activeFilter === cat.id && (
                      <motion.div
                        layoutId="partnerFilterPill"
                        className="absolute inset-0 bg-blue-700 dark:bg-blue-600 rounded-full shadow-md"
                        transition={springTransition}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Partners Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, index) => (
              <motion.a 
                layout
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  ...springTransition,
                  delay: (index % 3) * 0.08 // Stagger based on column count
                }}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex justify-end mb-4">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                    {partner.category}
                  </span>
                </div>

                <div className="h-24 w-full bg-white dark:bg-white/95 rounded-2xl p-4 mb-6 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain md:grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </h4>
                
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {partner.desc}
                </p>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between text-xs md:text-sm uppercase tracking-wider">
                  <span>Explore Website</span>
                  <motion.svg 
                    whileHover={{ x: 5 }}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Zero Results State */}
        <AnimatePresence>
          {filteredPartners.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800"
            >
              <p className="text-slate-400 text-lg font-medium">No partners found in this category.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}