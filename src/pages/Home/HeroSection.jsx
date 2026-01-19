import React from "react";
import { useNavigate } from "react-router-dom";
import conceptImage from "../../assets/office.png"; 

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
    <div className="overflow-x-hidden transition-colors duration-500">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        /* LIGHT: Blue Gradient | DARK: Slate/Black Gradient */
        className="min-h-[100svh] pt-24 pb-12 md:pt-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center text-white relative overflow-hidden transition-all duration-700"
      >
        {/* Background Blur Circle - Adapts color in Dark Mode */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl transition-colors"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* CONTENT COLUMN */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-sm font-bold tracking-widest text-blue-200 dark:text-blue-300 uppercase bg-blue-800/50 dark:bg-slate-800/50 border border-blue-700 dark:border-slate-700 rounded-full transition-colors">
                40+ Years of Excellence
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                From Concept to <br />
                <span className="text-blue-400 dark:text-blue-500">Completion</span>
              </h1>

              <p className="text-base md:text-xl text-blue-100 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors">
                As a premier leader in Electronic Systems Integration, ISC provides a
                sophisticated ecosystem of technologies designed to drive operational
                efficiency.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <button
                onClick={(e) => scrollToSection(e, "solutions")}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-blue-600 text-blue-900 dark:text-white font-bold rounded-lg shadow-lg hover:bg-blue-50 dark:hover:bg-blue-500 transition-all active:scale-95 text-sm md:text-base"
              >
                Our Solutions
              </button>

              <button
                onClick={(e) => scrollToSection(e, "projects")}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-blue-600 text-blue-900 dark:text-white font-bold rounded-lg shadow-lg hover:bg-blue-50 dark:hover:bg-blue-500 transition-all active:scale-95 text-sm md:text-base"
              >
                Our Projects
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-blue-400 dark:border-slate-600 text-white dark:text-slate-300 font-bold rounded-lg hover:bg-blue-800/40 dark:hover:bg-slate-800 transition-all active:scale-95 text-sm md:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 dark:border-slate-700 p-2 md:p-4 rounded-2xl shadow-2xl max-w-[280px] md:max-w-none mx-auto transition-colors">
              <div className="bg-blue-950/50 dark:bg-slate-900/80 aspect-square rounded-xl flex items-center justify-center border border-blue-700/50 dark:border-slate-700/50 overflow-hidden">
                <img
                  src={conceptImage}
                  alt="Concept to Completion"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 dark:opacity-80 dark:hover:opacity-100"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;