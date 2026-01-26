import React, { useState, useEffect } from "react"; // Added hooks
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { customerData } from "../../data/customers";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter 
} from "../../components/UIComponents";
import Particles from '../../component/Particles'; 
import LogoLoop from '../../component/LogoLoop'; 

const CustomerSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Delay particle rendering slightly to prioritize text and layout speed
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clientLogos = customerData.map((client) => ({
    src: client.logo,
    alt: client.name,
    href: client.url,
  }));

  // Stagger variants for the stats grid
  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const statItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="customers-preview" 
      className="relative isolate py-12 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      
      {/* --- OPTIMIZED BACKGROUND --- */}
      <AnimatePresence>
        {isMounted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} // Fade in particles smoothly
            transition={{ duration: 2 }}
            className="absolute inset-0 z-[-1] pointer-events-none"
          >
            <Particles
              particleCount={400} // Slightly reduced for better performance
              particleSpread={10}
              speed={0.15} // Slower is smoother
              particleColors={["#3b82f6", "#ffffff", "#93c5fd"]} 
              moveParticlesOnHover={false}
              alphaParticles={true} 
              particleBaseSize={100} 
              sizeRandomness={1} 
              cameraDistance={20}
              pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* STATS GRID: Staggered entry */}
        <motion.div 
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-12 md:mb-16 pb-12 border-b border-slate-200 dark:border-slate-800"
        >
          {[
            { value: 40, suffix: "+", label: "Years Experience" },
            { value: 150, suffix: "+", label: "Clients Served" },
            { value: 98, suffix: "%", label: "Retention Rate" },
            { value: 24, suffix: "/7", label: "Support Team" }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={statItem}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* HEADER & CTA */}
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

          <Reveal delay={0.3}>
            <div className="w-full sm:w-auto">
              <Link
                to="/customers"
                className="group flex items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 md:py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white active:scale-95"
              >
                View All Clients
                <motion.svg 
                  whileHover={{ x: 5 }}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </motion.svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- LOGO CAROUSEL: Performance Optimized --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full mt-4 group"
      >
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

        <div className="py-8 md:py-12 border-y border-slate-200 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm">
          <LogoLoop
            logos={clientLogos}
            speed={40} // Faster scroll feels smoother for high-count logos
            direction="left"
            logoHeight={50} 
            gap={100}
            hoverSpeed={10} 
            scaleOnHover={true}
            fadeOut={false} 
            useCustomRender={false}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CustomerSection;