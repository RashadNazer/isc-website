import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';


// 1. MESH BACKGROUND WRAPPER
export const MeshBackground = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[120px]" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

// 2. ANGLED SECTION DIVIDER
export const SectionDivider = ({ colorClass = "fill-slate-50 dark:fill-slate-950" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[98%] z-20">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px] ${colorClass}`}
    >
      <path d="M1200 120L0 120 1200 0z"></path>
    </svg>
  </div>
);

// 3. SCROLL REVEAL (Motion Orchestration)
export const Reveal = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y: y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      delay: delay, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    }}
  >
    {children}
  </motion.div>
);

// 4. MAGNETIC BUTTON
export const MagneticButton = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

// 5. SMART DATA VISUALIZATION (Counter)
export const StatCounter = ({ value, suffix = "", label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-2">
        {displayValue}{suffix}
      </div>
      <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
        {label}
      </p>
    </div>
  );
};