import React, { useState, useMemo } from 'react';
import { partnerData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Security', label: 'Security & Access' }, // Shortened for cleaner UI
    { id: 'Fire', label: 'Life Safety & Fire' },
    { id: 'ICT', label: 'ICT Systems' },
    { id: 'TETRA', label: 'TETRA Systems' }
  ];

  const filteredPartners = useMemo(() => {
    return activeFilter === 'All' 
      ? partnerData 
      : partnerData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section: Scaled down typography */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-center mb-10 md:mb-16"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Advanced Portfolio
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
            Our Technology Solutions
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive selection of <span className="text-blue-900 dark:text-blue-300 font-bold">industry-leading products</span> engineered for critical industrial sectors.
          </p>
        </motion.div>

        {/* Floating Filter Bar: More compact padding */}
        <div className="sticky top-[75px] md:top-24 z-30 mb-12">
          <div className="max-w-fit mx-auto"> 
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl py-1.5 px-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-900/5">
              <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:justify-center gap-1 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className="relative px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat.label}
                    </span>
                    {activeFilter === cat.id && (
                      <motion.div
                        layoutId="partnerFilterPill"
                        className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-full"
                        transition={springTransition}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Partners Grid: Equal height and refined text */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, index) => (
              <motion.a 
                layout
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ ...springTransition, delay: (index % 3) * 0.05 }}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 p-6 md:p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-lg border border-blue-100 dark:border-blue-900/50">
                    {partner.category}
                  </span>
                </div>

                <div className="h-20 w-full bg-white rounded-xl p-4 mb-6 flex items-center justify-center shadow-inner">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-[85%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h4>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {partner.desc}
                </p>

                <div className="pt-5 border-t border-slate-50 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between text-[11px] uppercase tracking-widest">
                  <span>Explore Partner</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Zero Results State */}
        <AnimatePresence>
          {filteredPartners.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800"
            >
              <p className="text-slate-500 text-base font-bold">No partners match this category.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-4 text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">
                View All Portfolio
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}