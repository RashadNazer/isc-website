import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Custom UI components for animation and interaction
import { 
  Reveal, 
  MagneticButton, 
} from "../../components/UIComponents";
// Interactive background component
import DotGrid from '../../component/DotGrid'; 

/**
 * RequestQuoteCTA Component
 * A high-conversion call-to-action section featuring an interactive dot grid 
 * and a magnetic button to lead users to the enquiry form.
 */
const RequestQuoteCTA = () => {
  return (
    <section className="relative isolate py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* --- FULL SECTION DOT GRID BACKGROUND --- 
          Positioned absolutely to cover the entire section.
          z-[-1] keeps it behind content while pointer-events-none allows 
          users to click things through the grid.
      */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-60 dark:opacity-30">
        <DotGrid
          dotSize={3}
          gap={25}
          // Neutral slate base color that works in both light and dark modes
          baseColor="#64748b" 
          // Your brand blue for the interactive active state
          activeColor="#2563eb" 
          proximity={120}    // Distance at which dots start reacting to mouse
          shockRadius={250}  // Radius of the mouse interaction effect
          shockStrength={5}  // How much the dots move away from the cursor
          resistance={750}   // How hard it is to push the dots
          returnDuration={1.5} // Time taken for dots to return to original position
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Reveal component handles the scroll-entry animation */}
        <Reveal>
          {/* Main Card Container 
              Uses a high-contrast blue background in light mode and a 
              subtle translucent blue tint in dark mode for a premium feel.
          */}
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-blue-600 dark:bg-blue-600/10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-blue-500/20 shadow-2xl backdrop-blur-sm">
            
            {/* Background Decorative Overlay 
                Adds a subtle glowing 'blob' in the corner for visual depth.
            */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 dark:bg-blue-400/5 blur-[100px] pointer-events-none"></div>

            {/* Text Content Area */}
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white dark:text-white mb-4 tracking-tight">
                Request a Project Quote
              </h3>
              <p className="text-blue-50 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                Tell us about your requirement and our sales team will review your enquiry 
                and get back to you with the right solution for your infrastructure.
              </p>
            </div>

            {/* Action Area 
                Contains the MagneticButton which pulls toward the user's 
                cursor for a high-end interactive feel.
            */}
            <div className="relative z-10 shrink-0">
              <MagneticButton>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 dark:text-white font-black text-sm md:text-base transition-all hover:shadow-xl active:scale-95 group"
                >
                  Get Started
                  {/* Icon with hover translation effect */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RequestQuoteCTA;