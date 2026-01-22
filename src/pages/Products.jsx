import React, { useState, useMemo } from 'react';
import { partnerData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../component/Aurora'; 
import SplitText from "../component/SplitText"; 

export default function PartnersPage() {
  /** * --- STATE & FILTERING ---
   * activeFilter: Stores the currently selected category ID.
   * categories: Defines the available filter options for the UI.
   */
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Security', label: 'Security & Access' },
    { id: 'Fire', label: 'Life Safety & Fire' },
    { id: 'ICT', label: 'ICT Systems' },
    { id: 'TETRA', label: 'TETRA Systems' }
  ];

  /** * useMemo: Optimizes performance by only re-filtering the partner list
   * when the activeFilter or the raw partnerData changes.
   */
  const filteredPartners = useMemo(() => {
    return activeFilter === 'All' 
      ? partnerData 
      : partnerData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  /** * --- ANIMATION CONFIG ---
   * springTransition: A reusable physics-based configuration for high-end, 
   * "snappy" animations (used for the filter pill and grid items).
   */
  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      
      {/* --- AURORA BACKGROUND --- 
          Provides a subtle, animated glow behind the content. 
          The overlay div creates a smooth fade into the page background.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30">
        <Aurora
          colorStops={["#020617", "#2563eb", "#93c5fd"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5} 
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- HEADER SECTION --- 
            Fades in from the top on page load.
        */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Animated Sub-heading */}
          <div className="mb-3">
            <SplitText
              text="Advanced Portfolio"
              className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]"
              delay={30}
            />
          </div>

          {/* Animated Main Heading */}
          <div className="mb-4 md:mb-8">
            <SplitText
              text="Our Technology Solutions"
              className="text-2xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
              delay={50}
              textAlign="center"
            />
          </div>

          <p className="text-sm md:text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed px-2">
            We offer a comprehensive selection of <span className="text-blue-900 dark:text-blue-400 font-bold">industry-leading products</span> engineered for critical industrial sectors.
          </p>
        </motion.div>

        {/* --- FLOATING FILTER BAR --- 
            Sticky-positioned menu that stays at the top during scroll.
        */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-8 md:mb-12">
          <div className="max-w-fit mx-auto w-full"> 
            <div className="relative group">
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl py-1.5 px-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-blue-900/5 overflow-hidden">
                <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:justify-center gap-1 no-scrollbar px-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id)}
                      className="relative px-4 py-2.5 md:py-2 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap active:scale-90 touch-manipulation"
                    >
                      <span className={`relative z-10 transition-colors duration-300 ${
                        activeFilter === cat.id ? "text-white" : "text-slate-500 dark:text-slate-400"
                      }`}>
                        {cat.label}
                      </span>
                      {/* Active Pill Indicator: layoutId creates the sliding motion between buttons */}
                      {activeFilter === cat.id && (
                        <motion.div
                          layoutId="partnerFilterPill"
                          className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
                          transition={springTransition}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ANIMATED PARTNERS GRID --- 
            layout: Handless the smooth repositioning of cards when the list changes.
        */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center"
        >
          {/* mode="popLayout": Ensures cards "pop" out of their space when removed, allowing the grid to adjust smoothly */}
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, index) => (
              <motion.a 
                layout
                key={partner.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ...springTransition, delay: index * 0.03 }} // Staggered entrance
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-7 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full active:scale-[0.98]"
              >
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-5">
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">
                    {partner.category}
                  </span>
                </div>

                {/* Logo Container with Grayscale-to-Color hover effect */}
                <div className="h-20 w-full bg-white rounded-xl p-4 mb-5 flex items-center justify-center shadow-sm border border-slate-50">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h4>
                
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  {partner.desc}
                </p>

                {/* Card Footer Interaction */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between text-[10px] uppercase tracking-widest">
                  <span>Explore Partner</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- EMPTY STATE --- 
            Visible only when a filter returns zero results.
        */}
        <AnimatePresence>
          {filteredPartners.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800"
            >
              <p className="text-slate-500 text-sm font-bold">No partners match this category.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-4 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline">
                View All Portfolio
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}