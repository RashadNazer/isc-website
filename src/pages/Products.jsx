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
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Advanced Portfolio
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Our Technology Solutions
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive selection of <span className="text-blue-900 font-bold">industry-leading products</span> engineered to ensure seamless integration and operational excellence across the Kingdom's critical industrial sectors.
          </p>
          
          {/* Subtle Decorative Line */}
          <div className="mt-10 flex justify-center gap-2">
            <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-4 bg-blue-200 rounded-full"></div>
            <div className="h-1 w-4 bg-blue-100 rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Filter Bar */}
        <div className="sticky top-24 z-30 bg-slate-50/80 backdrop-blur-md py-6 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === cat.id 
                  ? "bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner) => (
            <a 
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 flex flex-col h-full animate-in fade-in zoom-in-95 duration-500"
            >
              {/* Category Badge */}
              <div className="flex justify-end mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {partner.category === 'Security' ? 'Security & Access' : 
                   partner.category === 'Fire' ? 'Fire & Safety' : 
                   partner.category === 'ICT' ? 'ICT' : 'TETRA'}
                </span>
              </div>

              <div className="h-20 w-40 mb-8 flex items-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                {partner.name}
              </h4>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {partner.desc}
              </p>

              <div className="pt-6 border-t border-slate-50 text-blue-600 font-bold flex items-center justify-between text-sm uppercase tracking-wider group-hover:text-blue-800 transition-colors">
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
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400 text-lg font-medium">No partners found in this category.</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              View all partners
            </button>
          </div>
        )}
      </div>
    </div>
  );
}