import React from "react";
import { customerData } from "../../data/customers";
import { Link } from "react-router-dom";

const CustomerSection = () => {
  // SAFETY: Ensure data exists before slicing
  const previewClients = customerData?.slice(0, 6) || [];

  return (
    <section
      id="customers-preview"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="text-left">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
              Our Track Record
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight transition-colors">
              Trusted by Industry Leaders
            </h3>
            
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed transition-colors">
              We are proud to partner with the Kingdom&apos;s most vital
              organizations, delivering mission-critical security and
              communication infrastructure.
            </p>
          </div>

          {/* VIEW ALL LINK */}
          <Link
            to="/customers"
            className="group inline-flex items-center gap-3 text-blue-700 dark:text-blue-400 font-bold text-base md:text-lg
                       hover:text-blue-900 dark:hover:text-blue-300 transition-all border-b-2 border-transparent
                       hover:border-blue-900 dark:hover:border-blue-300 pb-2 w-fit active:scale-95 origin-left"
          >
            View All Clients
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* LOGO GRID */}
        {/* LOGO GRID */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
  {previewClients.map((client) => (
    <a
      key={client.id}
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-white/90 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 dark:border-white/20
                 flex items-center justify-center 
                 transition-all duration-500
                 hover:shadow-xl dark:hover:shadow-blue-500/20 hover:-translate-y-1"
    >
      {/* 1. We use dark:bg-white/90 to create a light "island" for the logo.
          2. We remove the invert/brightness filters to keep original brand colors.
          3. We use grayscale by default to keep the UI clean, removing it on hover.
      */}
      <img
        src={client.logo}
        alt={client.name}
        className="h-10 md:h-16 w-full object-contain
                   grayscale group-hover:grayscale-0
                   transition-all duration-500
                   group-hover:scale-110"
      />
      
      {/* Subtle overlay to make it feel premium in dark mode */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-transparent to-slate-200/50 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </a>
  ))}
</div>
      </div>
    </section>
  );
};

export default CustomerSection;