import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { customerData } from "../../data/customers";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  // We'll use your Particles or LiquidEther component here
} from "../../components/UIComponents";
// Ensure this path matches where your Light Rays/Liquid background is stored
import Particles from '../../component/Particles'; 

const CustomerSection = () => {
  // Limit the display to the first 6 clients for the homepage preview
  const previewClients = customerData?.slice(0, 6) || [];

  /**
   * Framer Motion: Parent Container Variants
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  /**
   * Framer Motion: Individual Logo Variants
   */
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 18 
      }
    }
  };

  return (
    /* Changed from <MeshBackground> to a relative section with 'isolate' 
       to ensure the light rays stay contained within this section's stack.
    */
    <section 
      id="customers-preview" 
      className="relative isolate py-12 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      
      {/* --- LIGHT RAYS / PARTICLES BACKGROUND --- */}
      <div className="absolute inset-0 z-[-1] pointer-events-auto opacity-40 dark:opacity-60">
        <Particles
          particleCount={500}              // High density
          particleSpread={10}
          speed={0.2}
          particleColors={["#3b82f6", "#ffffff", "#93c5fd"]} 
          moveParticlesOnHover={false}       // Reacts to mouse pointer
          particleHoverFactor={1}         // Sensitivity of the interaction
          alphaParticles={true}             
          particleBaseSize={100}             
          sizeRandomness={1}              
          cameraDistance={20}
          disableRotation={false}
          pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        />
      </div>

      {/* Main Content: pointer-events-none allows rays to be "felt" behind text */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pointer-events-none">
        
        {/* STATS OVERVIEW: pointer-events-auto restores interaction for this row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-12 md:mb-16 pb-12 border-b border-slate-200 dark:border-slate-800 pointer-events-auto">
          <StatCounter value={40} suffix="+" label="Years Experience" />
          <StatCounter value={150} suffix="+" label="Clients Served" />
          <StatCounter value={98} suffix="%" label="Retention Rate" />
          <StatCounter value={24} suffix="/7" label="Support Team" />
        </div>

        {/* HEADER SECTION: pointer-events-auto restores link/button interaction */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-8 pointer-events-auto">
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

          <Reveal delay={0.2}>
            <div className="w-full sm:w-auto">
              <Link
                to="/customers"
                className="group flex items-center justify-center gap-3 bg-white dark:bg-slate-900 px-6 py-4 md:py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white"
              >
                View All Clients
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ANIMATED LOGO GRID: pointer-events-auto restores logo link interaction */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 justify-items-center pointer-events-auto"
        >
          {previewClients.map((client) => (
            <motion.div 
              key={client.id} 
              variants={logoVariants}
              className="w-full" 
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-24 md:h-32 w-full max-w-[180px] md:max-w-none mx-auto bg-white dark:bg-slate-900 p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/10
                           flex items-center justify-center transition-all duration-500
                           hover:shadow-lg dark:hover:shadow-blue-500/10 active:scale-95 overflow-hidden"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 md:h-10 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                />
                
                {/* Shine effect */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSection;