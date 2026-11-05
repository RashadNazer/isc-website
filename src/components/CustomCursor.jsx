import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const CustomCursor = () => {
  const prefersReduced = useReducedMotion();
  const [variant, setVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast dot follows exactly; slow ring follows with spring
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 1000, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 1000, mass: 0.2 });
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.6 });

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Theme detection
  useEffect(() => {
    if (isTouchDevice) return;
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [isTouchDevice]);

  const handleMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsVisible(true);
  }, [cursorX, cursorY]);

  const handleOver = useCallback((e) => {
    const target = e.target.closest("[data-cursor]");
    if (target) setVariant(target.dataset.cursor);
    else if (e.target.closest("a, button, [role='button']")) setVariant("hover");
    else setVariant("default");
  }, []);

  useEffect(() => {
    if (isTouchDevice || prefersReduced) return;
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [handleMove, handleOver, isTouchDevice, prefersReduced]);

  if (isTouchDevice || prefersReduced) return null;

  const palette = isDark
    ? { dot: "#ffffff", ring: "rgba(255,255,255,0.6)" }
    : { dot: "#0f172a", ring: "rgba(15,23,42,0.4)" };

  const ringSize = variant === "hover" ? 48 : variant === "view" ? 64 : variant === "drag" ? 56 : 32;
  const dotSize = variant === "hover" ? 4 : 6;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          animate={{ width: ringSize, height: ringSize }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full border-2"
          style={{ borderColor: palette.ring }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <motion.div
          animate={{ width: dotSize, height: dotSize }}
          className="rounded-full"
          style={{ backgroundColor: palette.dot }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;