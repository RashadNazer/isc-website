import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import conceptImage from "../../assets/office.png";
/* UIComponents: Reveal handles scroll-based entry animations,
  MagneticButton adds a cursor-following effect, 
  StatCounter handles the counting animation.
*/
import { 
  Reveal, 
  MagneticButton, 
  StatCounter 
} from "../../components/UIComponents";

const HeroSection = () => {
  const navigate = useNavigate();

  /**
   * Smoothly scrolls to a specific DOM element on the same page.
   * @param {Event} e - Click event 
   * @param {string} id - The ID of the target section
   */
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* MAIN HERO CONTAINER
        min-h-[100svh]: Ensures the section takes up the full mobile viewport height.
        bg-gradient: Defines the blue/slate brand identity across light and dark modes.
      */}
      <section
        id="home"
        className="min-h-[100svh] pt-24 pb-12 md:pt-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center text-white relative overflow-hidden transition-all duration-700"
      >
        {/* ANIMATED AMBIENT GLOW
          Uses Framer Motion to create a pulsating light effect in the background.
        */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* LEFT COLUMN: TEXT CONTENT
            Contains the badge, headline, and description.
          */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <Reveal>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700 rounded-full mb-4">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                <div className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-blue-100 uppercase">
                   Industrial Excellence Since 1984
                </div>
              </div>

              {/* Headline with text-balance for optimized typography across screens */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tighter text-balance">
                Concept to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                  Completion
                </span>
              </h1>

              {/* Value Proposition Description */}
              <p className="text-base md:text-xl text-blue-100 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 text-left md:text-justify hyphens-auto">
                The premier leader in Electronic Systems Integration. ISC provides a
                sophisticated ecosystem of technologies designed for global operational efficiency,
                blending innovation with decades of technical mastery to secure your industrial future.
              </p>
            </Reveal>

            {/* CALL TO ACTION (CTA) BUTTONS 
              Wrapped in MagneticButton for interactive hover physics.
            */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start">
                <MagneticButton>
                  <button
                    onClick={(e) => scrollToSection(e, "solutions")}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-blue-950 font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all text-xs uppercase tracking-widest"
                  >
                    Our Solutions
                  </button>
                </MagneticButton>
                
                <MagneticButton>
                  <button
                    onClick={(e) => scrollToSection(e, "projects")}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-blue-950 font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all text-xs uppercase tracking-widest"
                  >
                    Our Projects
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button
                    onClick={(e) => scrollToSection(e, "request-quote-cta")}
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600/20 backdrop-blur-md border border-white/30 text-white font-black rounded-2xl hover:bg-blue-600/40 transition-all text-xs uppercase tracking-widest"
                  >
                    Request a Quote
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600/20 backdrop-blur-md border border-white/30 text-white font-black rounded-2xl hover:bg-blue-600/40 transition-all text-xs uppercase tracking-widest"
                  >
                    Contact Us
                  </button>
                </MagneticButton>
              </div>
            </Reveal>

            {/* QUICK STATS - Visible at the bottom of the hero content */}
            <Reveal delay={0.4}>
              <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-10 border-t border-white/10 mt-10">
                <StatCounter value={40} suffix="+" label="Years Experience" />
                <StatCounter value={2000} suffix="+" label="Completed Projects" />
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: VISUAL ASSET
            Contains the featured image with a glassmorphism border and floating animation.
          */}
          <Reveal delay={0.3} y={0}>
            <motion.div 
              animate={{ y: [0, -20, 0] }} // Gentle floating movement
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative order-first lg:order-last"
            >
              {/* Featured Image Glass Container */}
              <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-[3.5rem] shadow-2xl">
                <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden">
                  <img
                    src={conceptImage}
                    alt="ISC Concept to Completion"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  />
                </div>
              </div>
              
              {/* Background Decorative Ring for visual depth */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-[3.5rem] -rotate-3 scale-105 -z-10" />
            </motion.div>
          </Reveal>
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;