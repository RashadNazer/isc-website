import React from "react";
import { Link } from "react-router-dom";
import { partnerData } from "../../data/products"; // Local data file containing partner names, logos, and URLs
import { motion } from "framer-motion"; // For scroll-triggered entrance animations
import { Reveal, MagneticButton } from "../../components/UIComponents"; // Custom UI wrapper components
import Threads from '../../component/Threads'; // Interactive animated background component
import LogoLoop from '../../component/LogoLoop'; // Infinite horizontal scrolling marquee

const ProductsSection = () => {
  /**
   * DATA TRANSFORMATION
   * Converts the raw partnerData array into the specific shape 
   * required by the LogoLoop component.
   */
  const partnerLogos = partnerData.map((partner) => ({
    src: partner.logo,
    alt: partner.name,
    href: partner.url,
  }));

  return (
    <section 
      id="products" 
      className="relative isolate py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* --- THREADS BACKGROUND --- 
        An interactive, animated line background that responds to mouse movement.
        - z-[-1]: Positions it behind all text/content.
        - opacity: Subtle visibility for light and dark modes.
      */}
      <div className="absolute inset-0 z-[-1] opacity-30 dark:opacity-20">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0.145, 0.388, 0.922]} // Corresponds to Blue-600 (Hex: #2563EB)
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION 
          Responsive flex layout: Stacked on mobile, side-by-side on large screens (lg).
        */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          
          {/* Text Content with Framer Motion Entrance Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} // Starts invisible and slightly lower
            whileInView={{ opacity: 1, y: 0 }} // Moves up and fades in when scrolled into view
            viewport={{ once: true }} // Animation only triggers once
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

          {/* Action Button wrapped in a Magnetic interaction component */}
          <div className="flex justify-start lg:justify-end">
            <Reveal delay={0.2}>
              <MagneticButton>
                <Link to="/products" className="group flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white">
                  Explore All Products
                  {/* Arrow icon with hover translation effect */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>

      {/* --- FULL WIDTH LOGO TRACK --- 
        The infinite horizontal scrolling marquee for partner logos.
      */}
      <div className="relative w-full mt-10 group">
        {/* Gradient Masks: 
          Created with overlay divs to make logos "fade in" from the left and 
          "fade out" to the right for a smoother aesthetic.
        */}
        <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

        {/* Marquee Container with subtle border and backdrop blur */}
        <div className="py-12 border-y border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/[0.02] backdrop-blur-sm">
          <LogoLoop
            logos={partnerLogos}
            speed={50} // Higher number = slower scroll
            direction="left"
            logoHeight={65} 
            gap={100} // Horizontal spacing between logos
            hoverSpeed={15} // Slows down when user hovers mouse over logos
            scaleOnHover={true}
            fadeOut={false} // Disabled because we use custom CSS gradients above for better control
            useCustomRender={false}
          />
        </div>
        
        {/* Bottom Decorative Line: A subtle blue gradient underline for the section */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      </div>
    </section>
  );
};

export default ProductsSection;