import React, { useState } from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products"; 
import { motion } from "framer-motion"; 
import { Reveal, MagneticButton } from "../../components/UIComponents"; 
import Threads from '../../component/Threads'; 
import LogoLoop from '../../component/LogoLoop'; 

const ProductsSection = () => {
  // Use state to trigger a slight delay for the "Threads" background 
  // to ensure text renders first (improves perceived speed)
  const [isReady, setIsReady] = useState(false);

  const partnerLogos = partnerData.map((partner) => ({
    src: partner.logo,
    alt: partner.name,
    href: partner.url,
  }));

  // Animation variants for the header text
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section 
      id="products" 
      className="relative isolate py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* --- THREADS BACKGROUND --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        onViewportEnter={() => setIsReady(true)}
        viewport={{ once: true }}
        className="absolute inset-0 z-[-1] dark:opacity-20 pointer-events-none"
      >
        {isReady && (
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
            color={[0.145, 0.388, 0.922]} 
          />
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          
          {/* Text Content - Optimized Motion */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
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

          {/* Action Button */}
          <div className="flex justify-start lg:justify-end">
            <Reveal delay={0.3}>
              <MagneticButton>
                <Link to="/products" className="group flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white active:scale-95 transform-gpu">
                  Explore All Products
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>

      {/* --- FULL WIDTH LOGO TRACK --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative w-full mt-10 group will-change-transform"
      >
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

        {/* Marquee Container */}
        <div className="py-12 border-y border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden">
          <LogoLoop
            logos={partnerLogos}
            speed={50} 
            direction="left"
            logoHeight={65} 
            gap={100} 
            hoverSpeed={15} 
            scaleOnHover={true}
            fadeOut={false} 
            useCustomRender={false}
          />
        </div>
        
        {/* Animated Bottom Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "33.33%" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

export default ProductsSection;