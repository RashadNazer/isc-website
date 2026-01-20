import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { customerData } from "../../data/customers";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";

const CustomerSection = () => {
  const previewClients = customerData?.slice(0, 6) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger for mobile snappiness
        delayChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, // Vertical slide is safer than horizontal for mobile overflow
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
    <MeshBackground className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <section id="customers-preview" className="py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* STATS OVERVIEW - Adjusted for small screens */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-12 md:mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
            <StatCounter value={40} suffix="+" label="Years Experience" />
            <StatCounter value={150} suffix="+" label="Clients Served" />
            <StatCounter value={98} suffix="%" label="Retention Rate" />
            <StatCounter value={24} suffix="/7" label="Support Team" />
          </div>

          {/* HEADER SECTION - Stacked on mobile, side-by-side on desktop */}
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

            <Reveal delay={0.2}>
              {/* Magnetic effect disabled via CSS on mobile, handled by component */}
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

          {/* ANIMATED LOGO GRID */}
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  /* Added 'justify-center' and 'justify-items-center' 
     to ensure logos are centered even if the last row is incomplete 
  */
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 justify-items-center"
>
  {previewClients.map((client) => (
    <motion.div 
      key={client.id} 
      variants={logoVariants}
      className="w-full" // Ensures the motion wrapper fills the grid cell
    >
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        /* Added 'mx-auto' and ensured 'w-full' for responsive centering 
        */
        className="group relative h-24 md:h-32 w-full max-w-[180px] md:max-w-none mx-auto bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/10
                   flex items-center justify-center transition-all duration-500
                   hover:shadow-lg dark:hover:shadow-blue-500/10 active:scale-95 overflow-hidden"
      >
        <img
          src={client.logo}
          alt={client.name}
          className="h-7 md:h-10 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Subtle shine effect */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </a>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>
    </MeshBackground>
  );
};

export default CustomerSection;