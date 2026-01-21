import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import conceptImage from "../../assets/office.png";
import officeFront from "../../assets/officefront.png"; // New Image Imported

import { 
  Reveal, 
  MagneticButton, 
  StatCounter 
} from "../../components/UIComponents";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <section
        id="home"
        className="min-h-[100svh] pt-32 pb-20 md:pt-40 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center text-white relative overflow-hidden transition-all duration-700"
      >
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* LEFT CONTENT: (Occupies 7 columns on large screens) */}
          <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6">
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                <div className="text-[10px] md:text-xs font-black tracking-[0.4em] text-blue-100 uppercase">
                   Industrial Excellence Since 1984
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.9] mb-8 tracking-tighter text-balance">
                Concept to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
                  Completion
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-50/80 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                The premier leader in Electronic Systems Integration. ISC provides a
                sophisticated ecosystem of technologies designed for global operational efficiency,
                blending innovation with decades of technical mastery to secure your industrial future.
              </p>
            </Reveal>

            {/* CTA GRID */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-col gap-4">
                   <MagneticButton>
                    <button onClick={(e) => scrollToSection(e, "solutions")} className="w-full py-5 bg-white text-blue-950 font-black rounded-xl shadow-xl hover:shadow-blue-500/20 transition-all text-[11px] uppercase tracking-widest">
                      Our Solutions
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button onClick={(e) => scrollToSection(e, "projects")} className="w-full py-5 bg-blue-600/20 backdrop-blur-md border border-white/20 text-white font-black rounded-xl hover:bg-blue-600/40 transition-all text-[11px] uppercase tracking-widest">
                      Our Projects
                    </button>
                  </MagneticButton>
                </div>
                <div className="flex flex-col gap-4">
                  <MagneticButton>
                    <button onClick={(e) => scrollToSection(e, "request-quote-cta")} className="w-full py-5 bg-white text-blue-950 font-black rounded-xl shadow-xl hover:shadow-blue-500/20 transition-all text-[11px] uppercase tracking-widest">
                      Request a Quote
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button onClick={() => navigate("/contact")} className="w-full py-5 bg-blue-600/20 backdrop-blur-md border border-white/20 text-white font-black rounded-xl hover:bg-blue-600/40 transition-all text-[11px] uppercase tracking-widest">
                      Contact Us
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-12 flex flex-wrap justify-center lg:justify-start gap-12 border-t border-white/10 mt-12">
                <StatCounter value={40} suffix="+" label="Years Experience" />
                <StatCounter value={2000} suffix="+" label="Completed Projects" />
              </div>
            </Reveal>
          </div>

          {/* RIGHT CONTENT: VISUAL COMPOSITION (Occupies 5 columns) */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[650px] mt-12 lg:mt-0">
            {/* Primary Image: Office Front (The Foundation) */}
            <Reveal delay={0.3} y={40}>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[85%] aspect-[4/5] z-10"
              >
                <div className="w-full h-full bg-slate-900 rounded-[2rem] md:rounded-[4rem] overflow-hidden border-4 border-white/10 shadow-2xl relative group">
                  <img
                    src={officeFront}
                    alt="ISC Office Front"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
                </div>
              </motion.div>
            </Reveal>

            {/* Secondary Image: Concept Interior (The Vision) */}
            <Reveal delay={0.5} y={60}>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-0 w-[65%] aspect-square z-20"
              >
                <div className="w-full h-full bg-blue-900 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-8 border-blue-950 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] relative group">
                  <img
                    src={conceptImage}
                    alt="ISC Concept Interior"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </motion.div>
            </Reveal>

            {/* Decorative Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-400/10 rounded-full -z-10 animate-spin-slow" />
          </div>
          
        </div>
      </section>

      {/* Tailwind Custom Animation Injection */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;