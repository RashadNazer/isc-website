import React from "react";
import { customerData } from "../../data/customers";
import { Link } from "react-router-dom";

const CustomerSection = () => {
  // SAFETY: Ensure data exists before slicing
  const previewClients = customerData?.slice(0, 6) || [];

  return (
    <section
      id="customers-preview"
      className="py-16 md:py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION: Stacks on mobile, Side-by-side on LG screens */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="text-left">
            <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
              Our Track Record
            </h2>
            
            {/* FONT SCALING: text-3xl for mobile, text-4xl for desktop */}
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
              Trusted by Industry Leaders
            </h3>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
              We are proud to partner with the Kingdom&apos;s most vital
              organizations, delivering mission-critical security and
              communication infrastructure.
            </p>
          </div>

          {/* VIEW ALL LINK: Adjusted for better tap-target size on mobile */}
          <Link
            to="/customers"
            className="group inline-flex items-center gap-3 text-blue-700 font-bold text-base md:text-lg
                       hover:text-blue-900 transition-all border-b-2 border-transparent
                       hover:border-blue-900 pb-2 w-fit active:scale-95 origin-left"
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

        {/* LOGO GRID: 2 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {previewClients.map((client) => (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100
                         flex items-center justify-center grayscale
                         hover:grayscale-0 transition-all duration-500
                         hover:shadow-xl active:bg-slate-50"
            >
              <img
                src={client.logo}
                alt={client.name}
                /* Scaled max-height: h-12 on mobile, h-16 on desktop */
                className="h-10 md:h-16 w-full object-contain
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;