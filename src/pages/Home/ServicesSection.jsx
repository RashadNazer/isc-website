import React, { useRef, useState } from "react";
import { serviceData } from "../../data/homeData";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent, LayoutGroup } from "framer-motion";
import { Reveal } from "../../components/UIComponents";

const ServicesSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use a slightly softer spring for that "premium" feel
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * serviceData.length),
      serviceData.length - 1
    );
    if (index !== activeIndex) setActiveIndex(index);
  });

  const scrollToService = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const blockSize = window.innerHeight;
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
      style={{ height: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'auto' : `${serviceData.length * 100}vh` }}
    >
      <div className="relative lg:sticky lg:top-0 lg:h-screen w-full flex items-center py-16 lg:py-0 overflow-hidden">
        
        {/* Decorative Background Blur */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-6 w-full">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-8 lg:mb-12">
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-2">Capabilities</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">Our Services</h3>
              <p className="mt-4 lg:mt-6 text-slate-600 dark:text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl">
                Comprehensive engineering and system integration services designed
                to deliver reliability and long-term industrial value.
              </p>
            </div>
          </Reveal>

          {/* --- DESKTOP VIEW --- */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Hardware Accelerated Labels */}
            <div className="lg:col-span-5 relative z-10" style={{ willChange: "transform" }}>
              <div className="space-y-1 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
                
                <motion.div 
                  className="absolute left-[11px] top-4 w-0.5 bg-blue-600 origin-top" 
                  style={{ scaleY, height: 'calc(100% - 32px)', willChange: "scale" }} 
                />

                <LayoutGroup>
                  {serviceData.map((service, i) => (
                    <button 
                      key={service.id} 
                      onClick={() => scrollToService(i)} 
                      className="flex items-start gap-6 w-full py-4 group outline-none text-left"
                    >
                      <div className={`mt-2 w-6 h-6 rounded-full border-2 z-10 bg-slate-50 dark:bg-slate-950 flex items-center justify-center transition-all duration-500 ${
                        activeIndex === i ? "border-blue-600 scale-110 shadow-lg shadow-blue-500/20" : "border-slate-300 dark:border-slate-800"
                      }`}>
                        {activeIndex === i && (
                          <motion.div 
                            layoutId="active-pill" 
                            className="w-2 h-2 bg-blue-600 rounded-full" 
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                      <h4 className={`text-xl font-bold transition-all duration-500 transform ${
                        activeIndex === i ? "text-blue-600 translate-x-2" : "text-slate-400 opacity-50"
                      }`}>
                        {service.title}
                      </h4>
                    </button>
                  ))}
                </LayoutGroup>
              </div>
            </div>

            {/* RIGHT COLUMN: Content Card with GPU acceleration */}
            <div className="lg:col-span-7" style={{ transform: "translateZ(0)" }}>
              <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl p-14 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-white/5 min-h-[480px] flex flex-col justify-center overflow-hidden transition-colors duration-700">
                {/* Background Large Number */}
                <motion.div 
                  key={`num-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -right-4 -bottom-4 text-[15rem] font-black text-slate-100 dark:text-slate-800/10 select-none pointer-events-none"
                >
                  {activeIndex + 1}
                </motion.div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
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

          {/* --- MOBILE VIEW: STAGGERED REVEAL --- */}
          <div className="lg:hidden flex flex-col gap-6">
            {serviceData.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1}>
                <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden active:scale-95 transition-transform">
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
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;