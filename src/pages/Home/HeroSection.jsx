import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { 
  Reveal, 
  MagneticButton, 
  StatCounter 
} from "../../components/UIComponents";

const HeroSection = () => {
  const navigate = useNavigate();
  
  // --- VIDEO CONFIGURATION ---
  const videos = [
    "/videos/hero-1.mp4", 
    "/videos/hero-2.mp4",
    "/videos/hero-3.mp4",
    "/videos/hero-4.mp4",
    "/videos/hero-5.mp4",
    "/videos/hero-7.mp4",
    "/videos/hero-8.mp4"
  ];
  
  const [currentVideo, setCurrentVideo] = useState(0);

  // Switch video every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <section
        id="home"
        className="relative h-[100svh] w-full bg-black flex flex-col justify-end overflow-hidden"
      >
        {/* --- PERFORMANCE OPTIMIZED VIDEO BACKGROUND --- */}
        <div className="absolute inset-0 z-0 bg-black">
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
                scale: currentVideo === index ? 1 : 1.05 
              }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ 
                // Forces Hardware Acceleration (GPU)
                transform: 'translateZ(0)',
                willChange: 'opacity, transform'
              }}
            />
          ))}
          
          {/* Professional Overlay: Bottom-weighted dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-[1]" />
        </div>

        {/* --- CONTENT OVERLAY (CINEMATIC LOWER THIRD) --- */}
        <div className="relative z-10 w-full pb-10 md:pb-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Minimal Badge */}
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-blue-600" />
                <span className="text-[10px] font-bold tracking-[0.6em] text-white/60 uppercase">
                  Industrial Excellence Since 1984
                </span>
              </div>
            </Reveal>

            {/* Main Content Row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
              <Reveal>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.8]">
                  CONCEPT TO <br />
                  <span className="text-slate-500">COMPLETION</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="max-w-xl text-sm md:text-base text-white leading-relaxed font-light border-l border-white/10 pl-8">
                  The premier leader in Electronic Systems Integration. ISC provides a 
                  sophisticated ecosystem of technologies designed for global operational efficiency, 
                  securing infrastructure with technical mastery.
                </p>
              </Reveal>
            </div>

            {/* Actions and Stats Bar */}
            <div className="flex flex-wrap items-center justify-between gap-10 pt-10 border-t border-white/5">
              
              {/* Professional Button Group */}
              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <button 
                    onClick={(e) => scrollToSection(e, "solutions")} 
                    className="px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500"
                  >
                    Our Solutions
                  </button>
                  <button 
                    onClick={(e) => scrollToSection(e, "projects")} 
                    className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500"
                  >
                    Our Projects
                  </button>
                  <button 
                    onClick={() => navigate("/contact")} 
                    className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500"
                  >
                    Contact Us
                  </button>
                </div>
              </Reveal>

              {/* Stats Display - Updated to White */}
              <Reveal delay={0.4}>
                <div className="flex items-center gap-16 text-white">
                  <div className="flex flex-col">
                    <StatCounter value={40} suffix="+" label="YEARS" />
                  </div>
                  <div className="flex flex-col">
                    <StatCounter value={2000} suffix="+" label="PROJECTS" />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Global CSS to fix video rendering across browsers */}
      <style jsx global>{`
        video {
          outline: none;
          border: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;