import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion directly
import { customerData } from "../../data/customers";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";

const CustomerSection = () => {
  const previewClients = customerData?.slice(0, 6) || [];

  // Animation Variants for the Container (Staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each logo
        delayChildren: 0.2,    // Wait before starting the sequence
      },
    },
  };

  // Animation Variants for Individual Logos (Slide from Right)
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      x: 50, // Start 50px to the right
      filter: "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <MeshBackground className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <section id="customers-preview" className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* STATS OVERVIEW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
            <StatCounter value={40} suffix="+" label="Years of Excellence" />
            <StatCounter value={150} suffix="+" label="Clients Served" />
            <StatCounter value={98} suffix="%" label="Client Retention" />
            <StatCounter value={24} suffix="/7" label="Critical Support" />
          </div>

          {/* HEADER SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <Reveal>
              <div className="text-left">
                <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3">
                  Our Track Record
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-5 leading-[1.2]">
                  Trusted by <span className="text-slate-400 dark:text-slate-600">Industry Leaders</span>
                </h3>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                  We partner with the Kingdom's most vital organizations, delivering mission-critical security and communication infrastructure.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <MagneticButton>
                <Link
                  to="/customers"
                  className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  View All Clients
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>

          {/* ANIMATED LOGO GRID */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
          >
            {previewClients.map((client) => (
              <motion.div key={client.id} variants={logoVariants}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-28 md:h-32 bg-white p-5 rounded-2xl border border-slate-100 dark:border-white/10
                             flex items-center justify-center transition-all duration-500
                             hover:shadow-xl dark:hover:shadow-blue-500/10 hover:-translate-y-1.5 overflow-hidden"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 md:h-10 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Glass-shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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