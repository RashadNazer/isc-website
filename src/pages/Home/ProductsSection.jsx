import React from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          
          {/* Title & Description */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 rounded-lg">
              Innovative Portfolio
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Our Technology Solutions
            </h3>

            <p className="text-xl text-slate-500 leading-relaxed">
              We provide a comprehensive range of industry-leading products designed to ensure{" "}
              <span className="text-slate-800 font-semibold">
                seamless integration
              </span>{" "}
              and operational excellence across critical industrial sectors.
            </p>
          </div>

          {/* View All */}
          <div className="flex-shrink-0">
            <Link
              to="/products"
              className="group flex items-center gap-3 text-blue-700 font-bold text-lg
                         hover:text-blue-900 transition-all border-b-2
                         border-transparent hover:border-blue-900 pb-2"
            >
              View All Products
              <div
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center
                           group-hover:bg-blue-900 group-hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Product / Partner Cards (first 6 only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerData.slice(0, 6).map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50
                         hover:bg-white hover:border-blue-500 hover:shadow-xl
                         transition-all duration-300 flex flex-col"
            >
              {/* Logo */}
              <div className="h-16 w-full mb-6 flex items-start grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-[160px] object-contain object-left"
                />
              </div>

              {/* Name */}
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {partner.name}
              </h4>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                {partner.desc}
              </p>

              {/* Hover CTA */}
              <div className="mt-6 text-blue-600 text-xs font-black uppercase tracking-widest
                              opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Partner Site →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
