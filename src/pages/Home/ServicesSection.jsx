import React, { useRef, useState } from "react";
import { serviceData } from "../../data/homeData";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const ServicesSection = () => {
  // 1. REFS & STATE
  const containerRef = useRef(null); // Ref for the entire scrollable area
  const [activeIndex, setActiveIndex] = useState(0); // Tracks which service is currently "active"

  // 2. SCROLL TRACKING
  // Monitors scroll progress of containerRef. 0 is start, 1 is end.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Creates a smoothed-out spring version of the raw scroll progress for the progress bar
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 3. SCROLL-TO-INDEX LOGIC
  // Listens for scroll changes and calculates which service index we are currently viewing
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Splits the 0-1 range into equal segments based on data length
    const index = Math.min(
      Math.floor(latest * serviceData.length),
      serviceData.length - 1
    );
    if (index !== activeIndex) setActiveIndex(index);
  });

  // Manual scroll function for when a user clicks a service title
  const scrollToService = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const blockSize = window.innerHeight; // Each "segment" is 100vh on desktop
    const targetScroll = sectionTop + (index * blockSize) + 10;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  if (!serviceData || serviceData.length === 0) return null;

  return (
    <section 
      ref={containerRef} 
      className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
      /* DYNAMIC HEIGHT: 
         Mobile: 'auto' so cards stack naturally.
         Desktop: Multiplies data length by 100vh to create enough "scroll distance" 
         for the sticky effect to feel meaningful.
      */
      style={{ height: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'auto' : `${serviceData.length * 100}vh` }}
    >
      {/* STICKY WRAPPER:
          On Desktop, this pins to the top (lg:sticky lg:top-0) while the user 
          scrolls through the parent height. 
      */}
      <div className="relative lg:sticky lg:top-0 lg:h-screen w-full flex items-center py-16 lg:py-0 overflow-hidden">
        
        {/* Decorative Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          
          {/* Section Header */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-2">Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">Our Services</h3>
            <p className="mt-4 lg:mt-6 text-slate-600 dark:text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl">
              Comprehensive engineering and system integration services designed
              to deliver reliability and long-term industrial value.
            </p>
          </div>

          {/* --- DESKTOP VIEW: STICKY INTERACTIVE LAYOUT --- */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Progress Track & Labels */}
            <div className="lg:col-span-5 relative z-10">
              <div className="space-y-1 relative">
                {/* Background Line */}
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
                
                {/* Active Progress Line (Animated by scroll) */}
                <motion.div 
                  className="absolute left-[11px] top-4 w-0.5 bg-blue-600 origin-top" 
                  style={{ scaleY, height: 'calc(100% - 32px)' }} 
                />

                {serviceData.map((service, i) => (
                  <button 
                    key={service.id} 
                    onClick={() => scrollToService(i)} 
                    className="flex items-start gap-6 w-full py-4 group outline-none text-left"
                  >
                    {/* Circle Indicator */}
                    <div className={`mt-2 w-6 h-6 rounded-full border-2 z-10 bg-slate-50 dark:bg-slate-950 flex items-center justify-center transition-all ${
                      activeIndex === i ? "border-blue-600 scale-110 shadow-lg" : "border-slate-300 dark:border-slate-800"
                    }`}>
                      {activeIndex === i && <motion.div layoutId="dot" className="w-2 h-2 bg-blue-600 rounded-full" />}
                    </div>
                    {/* Service Title */}
                    <h4 className={`text-xl font-bold transition-colors ${activeIndex === i ? "text-blue-600" : "text-slate-400 opacity-50"}`}>
                      {service.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Content Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl p-14 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-white/5 min-h-[480px] flex flex-col justify-center overflow-hidden">
                {/* Background Large Number */}
                <div className="absolute -right-4 -bottom-4 text-[15rem] font-black text-slate-100 dark:text-slate-800/10 select-none pointer-events-none">
                  {activeIndex + 1}
                </div>
                
                {/* Content Swap Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                      {serviceData[activeIndex].title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
                      {serviceData[activeIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* --- MOBILE VIEW: VERTICAL STACKED CARDS --- */}
          <div className="lg:hidden flex flex-col gap-6">
            {serviceData.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                {/* Mobile Background Number */}
                <div className="absolute -right-2 -bottom-6 text-8xl font-black text-slate-50 dark:text-slate-800/20 select-none pointer-events-none">
                  {i + 1}
                </div>
                <div className="relative z-10">
                    <div className="text-blue-600 font-bold text-sm mb-2">0{i + 1}</div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                        {service.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        {service.content}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;