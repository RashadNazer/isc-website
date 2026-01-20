import React, { useState } from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, MagneticButton } from "../../components/UIComponents";

const ProductsSection = () => {
  /**
   * STATE MANAGEMENT
   * activeId: Tracks which partner card is currently expanded.
   * On Mobile: Managed via onClick (tap to toggle).
   * On Desktop: Managed via onMouseEnter/onMouseLeave (hover to expand).
   */
  const [activeId, setActiveId] = useState(null);
  
  // Display only the first 5 partners for the landing page preview
  const previewPartners = partnerData?.slice(0, 5) || [];

  /**
   * INTERACTION HANDLER
   * Primarily for mobile users to toggle cards.
   */
  const handleInteraction = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION: Includes responsive typography and a magnetic CTA button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3">
              Innovative Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Global Technology <span className="text-slate-400">Partners.</span>
            </h3>
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              We provide a range of industry-leading products designed for{" "}
              <span className="text-slate-800 dark:text-slate-200 font-bold">
                seamless integration
              </span>{" "}
              across critical industrial sectors.
            </p>
          </motion.div>

          <div className="flex justify-start lg:justify-end">
            <Reveal delay={0.2}>
              <MagneticButton>
                <Link to="/products" className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3.5 md:px-6 md:py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs md:text-sm transition-all hover:bg-blue-600 hover:text-white">
                  Explore All Products
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        {/* RESPONSIVE ACCORDION GRID 
          Mobile: flex-col -> Cards expand vertically using minHeight.
          Desktop: flex-row -> Cards expand horizontally using the 'flex' property.
        */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch min-h-[500px] lg:min-h-[400px]">
          {previewPartners.map((partner) => {
            const isActive = activeId === partner.id;
            
            return (
              <motion.div
                key={partner.id}
                layout // Smoothly animates layout changes (flex/height)
                onClick={() => handleInteraction(partner.id)}
                // Hover behavior restricted to desktop only (screen width > 1024px)
                onMouseEnter={() => window.innerWidth > 1024 && setActiveId(partner.id)}
                onMouseLeave={() => window.innerWidth > 1024 && setActiveId(null)}
                animate={{
                  // Desktop: Active card takes 3x the space of others
                  flex: isActive ? 3 : 1,
                  // Mobile: Active card grows in height to reveal text
                  minHeight: isActive ? "280px" : "120px"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 20,
                  mass: 1.2 
                }}
                className={`
                  relative cursor-pointer overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border
                  transition-colors duration-500 flex flex-col
                  ${isActive 
                    ? "border-blue-500/40 bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/10" 
                    : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40"}
                `}
              >
                <div className="p-6 md:p-10 flex flex-col h-full">
                  <div className={`h-full flex ${isActive ? 'flex-row lg:flex-col' : 'flex-col'} items-center lg:items-start justify-center gap-6`}>
                    
                    {/* LOGO AREA: Becomes more prominent and colorful when active */}
                    <motion.div
                      layout
                      className={`
                        transition-all duration-500 shrink-0
                        ${isActive ? "w-20 md:w-40 grayscale-0 opacity-100" : "w-16 md:w-32 grayscale opacity-50"}
                      `}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-auto object-contain" 
                      />
                    </motion.div>

                    {/* EXPANDABLE CONTENT 
                      AnimatePresence handles the entry/exit animations of the text.
                      mode="wait" ensures old content leaves before new content enters.
                    */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                          className="flex-grow"
                        >
                          <h4 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white mb-1">
                            {partner.name}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                            {partner.desc}
                          </p>
                          <a 
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest"
                          >
                            Visit Site <span>→</span>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;