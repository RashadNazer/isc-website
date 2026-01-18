import React from "react";
import { customerData } from "../../data/customers";
import { Link } from "react-router-dom";

const CustomerSection = () => {
  return (
    <section
      id="customers-preview"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Our Track Record
            </h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              We are proud to partner with the Kingdom&apos;s most vital
              organizations, delivering mission-critical security and
              communication infrastructure.
            </p>
          </div>

          {/* View All Customers */}
          <Link
            to="/customers"
            className="group inline-flex items-center gap-3 text-blue-700 font-bold text-lg
                       hover:text-blue-900 transition-all border-b-2 border-transparent
                       hover:border-blue-900 pb-2 w-fit"
          >
            View All Clients
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Preview Logos (First 6 Only) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {customerData.slice(0, 6).map((client) => (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-3xl border border-slate-100
                         flex items-center justify-center grayscale
                         hover:grayscale-0 transition-all duration-500
                         hover:shadow-xl"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain
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
