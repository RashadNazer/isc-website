import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

/* =========================================================
   1. REVEAL — Stagger-friendly entrance animation
   ========================================================= */
export const Reveal = ({
  children,
  delay = 0,
  y = 30,
  x = 0,
  duration = 0.8,
  className = "",
  once = true,
}) => {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   2. MAGNETIC BUTTON — Follows cursor on hover
   ========================================================= */
export const MagneticButton = ({ children, strength = 0.35, className = "" }) => {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    if (!ref.current || prefersReduced) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   3. STAT COUNTER — Animated number counter
   ========================================================= */
export const StatCounter = ({
  value = 0,
  suffix = "",
  label = "",
  duration = 2,
  className = "",
  variant = "default", // "default" | "hero"
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    const totalFrames = duration * 60;
    let frame = 0;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = easeOut(progress);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  // ---- Variant-based styling ----
  const isHero = variant === "hero";

  const numberColor = isHero
    ? "text-white"
    : "text-slate-900 dark:text-white";

  const suffixColor = isHero
    ? "text-blue-400"
    : "text-blue-600 dark:text-blue-400";

  const labelColor = isHero
    ? "text-white/70"
    : "text-slate-500 dark:text-slate-400";

  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-1">
        <span
          className={`text-3xl md:text-5xl font-black tabular-nums ${numberColor}`}
        >
          {count}
        </span>
        <span className={`text-xl md:text-3xl font-black ${suffixColor}`}>
          {suffix}
        </span>
      </div>
      <span
        className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1 ${labelColor}`}
      >
        {label}
      </span>
    </div>
  );
};

/* =========================================================
   4. MESH BACKGROUND — Animated gradient blobs
   ========================================================= */
export const MeshBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -80, 80, 0, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 80, -100, 0],
            y: [0, -60, 100, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* =========================================================
   5. SECTION DIVIDER — SVG wave transition
   ========================================================= */
export const SectionDivider = ({ colorClass = "fill-white" }) => {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full h-[60px] md:h-[100px] ${colorClass}`}
        aria-hidden="true"
      >
        <path d="M0,40 C240,100 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
};

/* =========================================================
   6. PARALLAX WRAPPER — Scroll-linked Y movement
   ========================================================= */
export const Parallax = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/* =========================================================
   7. TEXT SCRAMBLE — Letter-by-letter decode effect
   ========================================================= */
export const TextScramble = ({ text = "", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const queue = text.split("").map((char, i) => ({
      from: chars[Math.floor(Math.random() * chars.length)],
      to: char,
      start: i * 3,
      end: i * 3 + 20,
    }));
    const total = queue[queue.length - 1].end + 20;

    const tick = () => {
      let output = "";
      let done = 0;
      for (const q of queue) {
        if (frame >= q.end) {
          done++;
          output += q.to;
        } else if (frame >= q.start) {
          output += `<span style="opacity:0.5">${q.from}</span>`;
        } else {
          output += " ";
        }
      }
      setDisplay(output);
      if (done < queue.length) {
        frame++;
        requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    requestAnimationFrame(tick);
  }, [inView, text]);

  return (
    <span
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: display }}
    />
  );
};

/* =========================================================
   8. SPOTLIGHT CARD — Card with cursor spotlight
   ========================================================= */
export const SpotlightCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.12), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};