import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Reveal,
  MagneticButton,
  StatCounter,
} from "../../components/UIComponents";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const HeroSection = () => {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const videos = [
    "/videos/hero-1.mp4",
    "/videos/hero-2.mp4",
    "/videos/hero-3.mp4",
    "/videos/hero-4.mp4",
    "/videos/hero-5.mp4",
    "/videos/hero-7.mp4",
    "/videos/hero-8.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const words = ["CONCEPT", "TO", "COMPLETION"];

  return (
    <div className="overflow-x-hidden isolate">
      <section
        id="home"
        className="relative isolate h-[100svh] w-full bg-black flex flex-col justify-end overflow-hidden"
      >
        {/* VIDEO BACKGROUND */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 bg-black pointer-events-none"
        >
          {videos.map((src, index) => (
            <motion.video
              key={src}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentVideo === index ? 1 : 0,
                scale: currentVideo === index ? 1 : 1.05,
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: "translateZ(0)",
                willChange: "opacity, transform",
              }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-[1] pointer-events-none" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />

          {/* Scan line */}
          {!prefersReduced && (
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[2px] z-[3] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
              }}
            />
          )}
        </motion.div>

        {/* CONTENT — full width with responsive padding */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-30 w-full pb-32 md:pb-40"
        >
          <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  animate={{ width: [48, 80, 48] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-[1px] bg-blue-600"
                />
                <span className="text-[10px] font-bold tracking-[0.6em] text-white/60 uppercase">
                  Industrial Excellence Since 1984
                </span>
              </div>
            </Reveal>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.85] max-w-5xl">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={
                      prefersReduced
                        ? { opacity: 1 }
                        : { opacity: 0, y: 80, filter: "blur(12px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-3 md:mr-6"
                  >
                    {word === "COMPLETION" ? (
                      <span className="text-slate-500">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </h1>

              <Reveal delay={0.6}>
                <p className="max-w-xl text-sm md:text-base text-white/90 leading-relaxed font-light border-l border-white/10 pl-8">
                  The premier leader in Electronic Systems Integration. ISC
                  provides a sophisticated ecosystem of technologies designed
                  for global operational efficiency, securing infrastructure
                  with technical mastery.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-10 pt-10 border-t border-white/5">
              <Reveal delay={0.7}>
                <div className="relative z-50 flex flex-wrap items-center gap-4">
                  <MagneticButton>
                    <button
                      type="button"
                      onClick={(e) => scrollToSection(e, "solutions")}
                      data-cursor="hover"
                      className="relative z-50 px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer"
                    >
                      Our Solutions
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button
                      type="button"
                      onClick={(e) => scrollToSection(e, "projects")}
                      data-cursor="hover"
                      className="relative z-50 px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 cursor-pointer"
                    >
                      Our Projects
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button
                      type="button"
                      onClick={() => navigate("/contact")}
                      data-cursor="hover"
                      className="relative z-50 px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </MagneticButton>
                </div>
              </Reveal>

              <Reveal delay={0.8}>
                <div className="flex items-center gap-16 text-white">
                  <StatCounter
                    value={40}
                    suffix="+"
                    label="YEARS"
                    variant="hero"
                  />
                  <StatCounter
                    value={2000}
                    suffix="+"
                    label="PROJECTS"
                    variant="hero"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;