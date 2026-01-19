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
    // Reduced top padding for mobile (pt-24 vs pt-32)
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          {/* FONT SCALING: text-3xl for mobile, text-5xl for desktop */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
            Our Valued Clients
          </h1>
          <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Trusted by the Kingdom's leading industrial, healthcare, and infrastructure organizations.
          </p>
        </div>

        {/* Filter Bar: Horizontal scroll on mobile to keep buttons on one line */}
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center gap-2 md:gap-3 mb-10 md:mb-16 pb-4 md:pb-0 no-scrollbar -mx-6 px-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 md:px-6 py-2 rounded-full text-[11px] md:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                activeFilter === cat.id 
                ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20" 
                : "bg-slate-50 text-slate-600 hover:bg-blue-50 border border-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Logo Grid: Optimized for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredCustomers.map((client) => (
            <a 
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center active:bg-slate-50"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  /* Responsive max-width for logos */
                  className="max-h-full max-w-[110px] md:max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-blue-900 transition-colors uppercase tracking-widest leading-tight">
                {client.name}
              </p>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">No clients found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}