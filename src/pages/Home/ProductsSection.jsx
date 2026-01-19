import React from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products";
import { motion } from "framer-motion";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";

const ProductsSection = () => {
  // SAFETY: Ensure data exists before slicing
  const previewPartners = partnerData?.slice(0, 6) || [];

  return (
    <section id="products" className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          
          {/* Title & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              Innovative Portfolio
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight text-left">
              Our Technology Solutions
            </h3>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed text-left">
              We provide a range of industry-leading products designed for{" "}
              <span className="text-slate-800 dark:text-slate-200 font-bold">
                seamless integration
              </span>{" "}
              across critical industrial sectors.
            </p>
          </motion.div>

          {/* View All - Magnetic Style */}
          <div className="flex-shrink-0">
            <Reveal delay={0.2}>
              <MagneticButton>
                <Link
                  to="/products"
                  className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
                >
                  View All Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        {/* Product / Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {previewPartners.map((partner, i) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
              whileHover={{ y: -8 }}
              className="group p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900
                         hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 
                         shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col active:scale-[0.98]"
            >
              {/* Logo Island */}
              <div className="h-16 md:h-20 w-full mb-6 p-4 rounded-2xl bg-white dark:bg-white/95 flex items-center justify-start grayscale lg:group-hover:grayscale-0 transition-all duration-500 shadow-sm border border-slate-50">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-[140px] md:max-w-[150px] object-contain object-left"
                />
              </div>

              {/* Name */}
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 text-left">
                {partner.name}
              </h4>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 text-left">
                {partner.desc}
              </p>

              {/* Hover CTA */}
              <div className="mt-6 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest
                              opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-left">
                Visit Partner Site →
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;