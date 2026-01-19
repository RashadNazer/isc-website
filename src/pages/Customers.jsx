import React, { useState } from 'react';
import { customerData } from '../data/customers';

export default function CustomersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Clients' },
    { id: 'Petrochemical', label: 'Oil, Gas & Petrochemical' },
    { id: 'Hospital', label: 'Healthcare & Hospitals' },
    { id: 'General', label: 'General Contracting & Others' }
  ];

  const filteredCustomers = activeFilter === 'All' 
    ? customerData 
    : customerData.filter(c => c.category === activeFilter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Our Valued Clients
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by the Kingdom's leading industrial, healthcare, and infrastructure organizations.
          </p>
        </div>

{/* Compact Floating Filter Bar with Spacing Buffer */}
<div className="sticky top-[75px] md:top-24 z-30 transition-colors duration-500 px-6 pb-8">
  <div className="max-w-fit mx-auto"> 
    <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/30 dark:border-slate-800/50 py-2 px-2 rounded-full shadow-sm dark:shadow-none">
      <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1.5 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              activeFilter === cat.id 
                ? "bg-blue-900 dark:bg-blue-600 text-white shadow-md scale-105" 
                : "bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>
        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredCustomers.map((client) => (
            <a 
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-white/95 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center active:bg-slate-50 dark:active:bg-white"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-[110px] md:max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-900 dark:group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
                {client.name}
              </p>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 dark:text-slate-600 font-medium">No clients found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}