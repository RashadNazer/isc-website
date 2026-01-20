import React, { useState } from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, MagneticButton } from "../../components/UIComponents";

const ProductsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const previewPartners = partnerData?.slice(0, 5) || [];

  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Innovative Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Global Technology <span className="text-slate-400">Partners.</span>
            </h3>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed text-left">
              We provide a range of industry-leading products designed for{" "}
              <span className="text-slate-800 dark:text-slate-200 font-bold">
                seamless integration
              </span>{" "}
              across critical industrial sectors.
            </p>
          </motion.div>

          <Reveal delay={0.2}>
            <MagneticButton>
              <Link to="/products" className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white">
                Explore All Products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </MagneticButton>
          </Reveal>
        </div>

        {/* Dynamic Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:min-h-[400px]">
          {previewPartners.map((partner, i) => {
            const isHovered = hoveredId === partner.id;
            
            return (
              <motion.div
                key={partner.id}
                layout // Crucial for smooth layout transitions
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: isHovered ? 3 : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, // Lower stiffness for "silkier" movement
                  damping: 20,
                  mass: 1.2 
                }}
                className={`
                  relative cursor-pointer overflow-hidden rounded-[2.5rem] border
                  transition-colors duration-500
                  ${isHovered 
                    ? "border-blue-500/40 bg-white dark:bg-slate-900 shadow-2xl shadow-blue-500/10" 
                    : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40"}
                `}
              >
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full w-full p-6 md:p-10"
                >
                  <div className="h-full flex flex-col items-center lg:items-start justify-center">
                    
                    {/* LOGO AREA */}
                    <motion.div
                      layout="position"
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                        // Center logo when not hovered, push to top when hovered
                        marginBottom: isHovered ? "1.5rem" : "0rem"
                      }}
                      className={`
                        w-full max-w-[140px] md:max-w-[200px] aspect-square
                        flex items-center justify-center transition-all duration-500
                        ${isHovered ? "grayscale-0 opacity-100" : "grayscale opacity-50"}
                      `}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-contain" 
                      />
                    </motion.div>

                    {/* EXPANDABLE CONTENT */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 20 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="w-full"
                        >
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
                            {partner.name}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            {partner.desc}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                            Official Site <span>→</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;