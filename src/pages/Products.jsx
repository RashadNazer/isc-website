import { useState } from 'react';
import { partnerData } from '../data/products';

export default function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Security', label: 'Integrated Security & Access Control' },
    { id: 'Fire', label: 'Life Safety & Fire Alarm' },
    { id: 'ICT', label: 'ICT Systems' },
    { id: 'TETRA', label: 'TETRA Systems' }
  ];

  const filteredPartners = activeFilter === 'All' 
    ? partnerData 
    : partnerData.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            Advanced Portfolio
          </h2>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight transition-colors">
            Our Technology Solutions
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            We offer a comprehensive selection of <span className="text-blue-900 dark:text-blue-300 font-bold">industry-leading products</span> engineered for the Kingdom's critical industrial sectors.
          </p>
          
          <div className="mt-8 md:mt-10 flex justify-center gap-2">
            <div className="h-1 w-10 md:w-12 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <div className="h-1 w-3 md:w-4 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
            <div className="h-1 w-3 md:w-4 bg-blue-100 dark:bg-blue-900 rounded-full"></div>
          </div>
        </div>

{/* Compact Translucent Filter Bar */}
<div className="sticky top-[75px] md:top-24 z-30 px-6 pb-8 transition-colors duration-500">
  <div className="max-w-4xl mx-auto"> {/* Constrained width to keep it centered and small */}
    <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl py-2 md:py-3 rounded-full border border-slate-200/30 dark:border-slate-800/50 shadow-sm dark:shadow-none px-4">
      <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:justify-center gap-1.5 md:gap-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 border whitespace-nowrap active:scale-95 ${
              activeFilter === cat.id 
                ? "bg-blue-900 dark:bg-blue-600 border-blue-900 dark:border-blue-600 text-white shadow-md" 
                : "bg-white/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:border-blue-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPartners.map((partner) => (
            <a 
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 flex flex-col h-full animate-in fade-in zoom-in-95"
            >
              <div className="flex justify-end mb-6 md:mb-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                  {partner.category}
                </span>
              </div>

              {/* Logo container: Using the Glass Tile effect for consistent visibility */}
              <div className="h-20 md:h-24 w-full bg-white dark:bg-white/95 rounded-2xl p-4 mb-6 md:mb-8 flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain md:grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-900 dark:group-hover:text-blue-400 text-center md:text-left transition-colors">
                {partner.name}
              </h4>
              
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 md:mb-8 flex-grow text-center md:text-left">
                {partner.desc}
              </p>

              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between text-[12px] md:text-sm uppercase tracking-wider group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                <span>Explore Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Zero Results State */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-16 md:py-24 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 mx-auto max-w-lg">
            <p className="text-slate-400 dark:text-slate-500 text-lg font-medium px-6">No partners found in this category.</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-blue-600 dark:text-blue-400 font-bold hover:underline active:scale-95"
            >
              View all partners
            </button>
          </div>
        )}
      </div>
    </div>
  );
}