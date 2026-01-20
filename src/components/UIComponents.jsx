import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';


/**
 * 1. MESH BACKGROUND WRAPPER
 * A container that adds decorative, blurred gradient blobs behind its content.
 * Uses pointer-events-none on the blobs to ensure they don't interfere with clicks.
 */
export const MeshBackground = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {/* Background Decorative Layer */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-right blue glow */}
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[120px]" />
      {/* Bottom-left indigo glow */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
    </div>
    {/* Content Layer (elevated via z-index) */}
    <div className="relative z-10">{children}</div>
  </div>
);

/**
 * 2. ANGLED SECTION DIVIDER
 * Creates a diagonal SVG transition between sections.
 * The translate-y-[98%] ensures no pixel gaps appear between the SVG and the section below.
 */
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

/**
 * 3. SCROLL REVEAL (Motion Orchestration)
 * Animates children into view when they enter the viewport.
 * Uses 'whileInView' with a custom cubic-bezier ease for a professional, "slick" feel.
 */
export const Reveal = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y: y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }} // Triggers 100px before the element hits the top/bottom
    transition={{ 
      duration: 0.8, 
      delay: delay, 
      ease: [0.21, 0.47, 0.32, 0.98] // Custom out-quart easing
    }}
  >
    {children}
  </motion.div>
);

/**
 * 4. MAGNETIC BUTTON
 * Tracks mouse position and pulls the button slightly toward the cursor.
 * Uses a spring transition to ensure the 'snap back' feels organic and smooth.
 */
export const MagneticButton = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    // Calculate the bounding box of the element to find the exact center
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Multiplied by 0.3 to dampen the effect (the button follows at 30% intensity)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      // Mass and Stiffness configured for a lightweight, responsive feel
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * 5. SMART DATA VISUALIZATION (Counter)
 * An auto-incrementing number that starts when the component is visible on screen.
 * Uses Framer Motion's 'animate' function to handle the interpolation logic.
 */
export const StatCounter = ({ value, suffix = "", label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Hook to detect if element is in viewport

  useEffect(() => {
    if (isInView) {
      // Logic to animate numbers from 0 to 'value'
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
      {/* Large Numerical Value */}
      <div className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-2">
        {displayValue}{suffix}
      </div>
      {/* Subtext/Label */}
      <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
        {label}
      </p>
    </div>
  );
};