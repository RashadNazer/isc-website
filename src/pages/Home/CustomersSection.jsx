import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { customerData } from "../../data/customers";
import { Reveal, StatCounter } from "../../components/UIComponents";
import Particles from "../../component/Particles";
import LogoLoop from "../../component/LogoLoop";

const CustomerSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clientLogos = customerData.map((client) => ({
    src: client.logo,
    alt: client.name,
    href: client.url,
  }));

  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="customers-preview"
      className="relative isolate py-20 md:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      {/* Particles background */}
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-[-1] pointer-events-none"
          >
            <Particles
              particleCount={400}
              particleSpread={10}
              speed={0.15}
              particleColors={["#3b82f6", "#ffffff", "#93c5fd"]}
              moveParticlesOnHover={false}
              alphaParticles={true}
              particleBaseSize={100}
              sizeRandomness={1}
              cameraDistance={20}
              pixelRatio={
                typeof window !== "undefined"
                  ? Math.min(window.devicePixelRatio, 2)
                  : 1
              }
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width wrapper with responsive padding */}
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Stats — grid spans full width */}
        <motion.div
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-16 md:mb-24 pb-16 border-b border-slate-200 dark:border-slate-800"
        >
          {[
            { value: 40, suffix: "+", label: "Years Experience" },
            { value: 150, suffix: "+", label: "Clients Served" },
            { value: 98, suffix: "%", label: "Retention Rate" },
            { value: 24, suffix: "/7", label: "Support Team" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={statItem}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Header — heading left, CTA right, spanning full width */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-10">
          <Reveal>
            <div className="text-left">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.35em] mb-4">
                Our Track Record
              </h2>
              <h3 className="text-3xl md:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight max-w-3xl">
                Trusted by{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  Industry Leaders
                </span>
              </h3>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                We partner with the Kingdom's most vital organizations,
                delivering mission-critical security and communication
                infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="w-full sm:w-auto">
              <Link
                to="/customers"
                data-cursor="hover"
                className="group flex items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-8 py-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white active:scale-95 whitespace-nowrap"
              >
                View All Clients
                <motion.svg
                  whileHover={{ x: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </motion.svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Logo carousel — full viewport bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full group"
      >
        <div className="absolute inset-y-0 left-0 w-24 md:w-56 z-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-56 z-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

        <div className="py-12 md:py-16 border-y border-slate-200 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm">
          <LogoLoop
            logos={clientLogos}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={120}
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