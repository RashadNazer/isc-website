import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        style={{ scaleX }}
        className="scroll-progress-bar fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 origin-left z-[500] shadow-[0_0_12px_rgba(59,130,246,0.6)]"
      />
      {/* Glow under the bar */}
      <motion.div
        style={{ scaleX }}
        className="scroll-progress-bar fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-blue-600/30 via-cyan-400/30 to-blue-600/30 origin-left z-[499] blur-md"
      />
    </>
  );
};

export default ScrollProgress;