import React, { useState } from 'react';
import { customerData } from '../data/customers';

export default function CustomersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Define the categories based on your data
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
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Valued Clients</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Trusted by the Kingdom's leading industrial, healthcare, and infrastructure organizations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat.id 
                ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20" 
                : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredCustomers.map((client) => (
            <a 
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <p className="text-xs font-bold text-slate-400 group-hover:text-blue-900 transition-colors uppercase tracking-widest">
                {client.name}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}