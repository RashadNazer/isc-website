import React, { useRef, useState } from "react";
import { serviceData } from "../../data/homeData";
import { motion, useScroll, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";

const ServicesSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We use a small threshold (0.99) to prevent jumping to the next section at the very end
    const index = Math.min(
      Math.floor(latest * serviceData.length),
      serviceData.length - 1
    );
    if (index !== activeIndex) setActiveIndex(index);
  });

  const scrollToService = (index) => {
    if (!containerRef.current) return;

    // 1. Get the absolute distance of this section from the top of the page
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;

    // 2. Calculate the height of one "service block" 
    // Since the section is (length * 100vh), one block is exactly window.innerHeight
    const blockSize = window.innerHeight;

    // 3. Target the exact pixel
    // We add a +10px buffer to ensure the scroll lands inside the trigger zone
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
      style={{ height: `${serviceData.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="mb-10">
            <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-2">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Our Services</h3>
            {/* Normal spacing and alignment */}
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Comprehensive engineering and system integration services designed
            to deliver reliability, performance, and long-term industrial value.
          </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT NAV */}
            <div className="lg:col-span-5 relative z-10">
              <div className="space-y-1 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
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
                    <div className={`mt-2 w-6 h-6 rounded-full border-2 z-10 bg-slate-50 dark:bg-slate-950 flex items-center justify-center transition-all ${
                      activeIndex === i ? "border-blue-600 scale-110 shadow-lg" : "border-slate-300 dark:border-slate-800"
                    }`}>
                      {activeIndex === i && <motion.div layoutId="dot" className="w-2 h-2 bg-blue-600 rounded-full" />}
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeIndex === i ? "text-blue-600" : "text-slate-400 opacity-50"}`}>
                      {service.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT DISPLAY CARD */}
            <div className="lg:col-span-7">
              <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-white/5 min-h-[480px] flex flex-col justify-center">
                
                <div className="absolute -right-4 -bottom-4 text-[15rem] font-black text-slate-100 dark:text-slate-800/10 select-none pointer-events-none">
                  {activeIndex + 1}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                      {serviceData[activeIndex].title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      {serviceData[activeIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;