import React from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products";

const ProductsSection = () => {
  // SAFETY: Ensure data exists before slicing
  const previewPartners = partnerData?.slice(0, 6) || [];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header: Stacks on mobile (flex-col), side-by-side on large (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8 md:gap-10">
          
          {/* Title & Description */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 rounded-lg">
              Innovative Portfolio
            </div>

            {/* FONT SCALING: text-3xl for mobile, text-5xl for desktop */}
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
              Our Technology Solutions
            </h3>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              We provide a range of industry-leading products designed for{" "}
              <span className="text-slate-800 font-semibold">
                seamless integration
              </span>{" "}
              across critical industrial sectors.
            </p>
          </div>

          {/* View All: Better tap target and alignment on mobile */}
          <div className="flex-shrink-0">
            <Link
              to="/products"
              className="group flex items-center gap-3 text-blue-700 font-bold text-base md:text-lg
                         hover:text-blue-900 transition-all border-b-2
                         border-transparent hover:border-blue-900 pb-2 active:scale-95 origin-left"
            >
              View All Products
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center
                           group-hover:bg-blue-900 group-hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
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

        {/* Product / Partner Cards: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {previewPartners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 bg-slate-50
                         hover:bg-white hover:border-blue-500 hover:shadow-xl
                         transition-all duration-300 flex flex-col active:scale-[0.98]"
            >
              {/* Logo: Adjusted height and grayscale behavior */}
              <div className="h-12 md:h-16 w-full mb-4 md:mb-6 flex items-start grayscale lg:group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-[140px] md:max-w-[160px] object-contain object-left"
                />
              </div>

              {/* Name */}
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                {partner.name}
              </h4>

              {/* Description */}
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                {partner.desc}
              </p>

              {/* Hover CTA: Visible by default on mobile (opacity-100 lg:opacity-0) */}
              <div className="mt-4 md:mt-6 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-widest
                              opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
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