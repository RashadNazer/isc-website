import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Importing centralized data and local components
import { customerData } from "../../data/customers";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter 
} from "../../components/UIComponents";
// Background visual effects
import Particles from '../../component/Particles'; 
// Infinite scrolling logo component
import LogoLoop from '../../component/LogoLoop'; 

const CustomerSection = () => {
  /**
   * DATA TRANSFORMATION:
   * Maps the raw customer data into a format expected by the LogoLoop component.
   * This ensures the loop has access to the logo source, alt text, and link.
   */
  const clientLogos = customerData.map((client) => ({
    src: client.logo,
    alt: client.name,
    href: client.url,
  }));

  return (
    <section 
      id="customers-preview" 
      className="relative isolate py-12 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      
      {/* --- BACKGROUND VISUALS --- 
          Renders 3D/Canvas-based particles behind the content.
          Opacity is adjusted for Dark/Light mode readability.
      */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-60">
        <Particles
          particleCount={500}
          particleSpread={10}
          speed={0.2}
          particleColors={["#3b82f6", "#ffffff", "#93c5fd"]} 
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={true} 
          particleBaseSize={100} 
          sizeRandomness={1} 
          cameraDistance={20}
          disableRotation={false}
          pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* STATS GRID:
            Uses StatCounter to animate numbers (years, client count, etc.) 
            when they enter the viewport.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-12 md:mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <StatCounter value={40} suffix="+" label="Years Experience" />
          <StatCounter value={150} suffix="+" label="Clients Served" />
          <StatCounter value={98} suffix="%" label="Retention Rate" />
          <StatCounter value={24} suffix="/7" label="Support Team" />
        </div>

        {/* HEADER & CTA:
            Wrapped in <Reveal> for scroll-triggered entrance animations.
        */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-8">
          <Reveal>
            <div className="text-left">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] mb-3">
                Our Track Record
              </h2>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                Trusted by <span className="text-slate-400 dark:text-slate-600">Industry Leaders</span>
              </h3>
              <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                We partner with the Kingdom's most vital organizations, delivering mission-critical security and communication infrastructure.
              </p>
            </div>
          </Reveal>

          {/* LINK TO CLIENTS PAGE: Features a subtle hover translate effect on the arrow icon */}
          <Reveal delay={0.2}>
            <div className="w-full sm:w-auto">
              <Link
                to="/customers"
                className="group flex items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 md:py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white"
              >
                View All Clients
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- CLIENT LOGO CAROUSEL --- 
          A full-width container featuring gradient masks on the left and right 
          to create a "fade-in/fade-out" effect for the sliding logos.
      */}
      <div className="relative w-full mt-4 group">
        {/* Left and Right Gradient Overlays for smooth scrolling edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

        <div className="py-8 md:py-12 border-y border-slate-200 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm">
          {/* LOGO LOOP COMPONENT:
              Handles the infinite CSS/Framer animation. 
              Slows down (hoverSpeed) when the user interacts with it.
          */}
          <LogoLoop
            logos={clientLogos}
            speed={30} 
            direction="left"
            logoHeight={50} 
            gap={100}
            hoverSpeed={5} 
            scaleOnHover={true}
            fadeOut={false} // Fade is handled by the parent's gradient masks
            useCustomRender={false}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;