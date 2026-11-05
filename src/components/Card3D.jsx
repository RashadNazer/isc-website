import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const Card3D = ({
  children,
  className = "",
  intensity = 12,
  spotlightColor = "rgba(59,130,246,0.18)",
  glareOpacity = 0.15,
}) => {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e) => {
    if (!ref.current || prefersReduced) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReduced ? 0 : rotateX,
        rotateY: prefersReduced ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-20"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-20"
        style={{
          opacity: hovering ? glareOpacity : 0,
          transition: "opacity 300ms",
          background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.4), transparent 30%)`,
          mixBlendMode: "overlay",
        }}
      />

      {children}
    </motion.div>
  );
};

export default Card3D;