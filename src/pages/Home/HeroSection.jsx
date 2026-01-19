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
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        /* Changed min-h-screen to be more flexible on mobile devices with browser toolbars */
        className="min-h-[100svh] pt-24 pb-12 md:pt-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center text-white relative overflow-hidden"
      >
        {/* Background Blur Circle - Scaled down for mobile */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* CONTENT COLUMN: Center-aligned on mobile, left-aligned on desktop */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-800/50 border border-blue-700 rounded-full">
                40+ Years of Excellence
              </span>

              {/* FONT SCALING: text-4xl on mobile, text-7xl on desktop */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                From Concept to <br />
                <span className="text-blue-400">Completion</span>
              </h1>

              <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                As a premier leader in Electronic Systems Integration, ISC provides a
                sophisticated ecosystem of technologies designed to drive operational
                efficiency.
              </p>
            </div>

            {/* BUTTONS: Stacked on small screens, row on larger screens */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <button
                onClick={(e) => scrollToSection(e, "solutions")}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95 text-sm md:text-base"
              >
                Our Solutions
              </button>

              <button
                onClick={(e) => scrollToSection(e, "projects")}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95 text-sm md:text-base"
              >
                Our Projects
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-blue-400 text-white font-bold rounded-lg hover:bg-blue-800/40 transition-all active:scale-95 text-sm md:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* IMAGE COLUMN: Visible but smaller on mobile, full size on desktop */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 md:p-4 rounded-2xl shadow-2xl max-w-[280px] md:max-w-none mx-auto">
              <div className="bg-blue-950/50 aspect-square rounded-xl flex items-center justify-center border border-blue-700/50 overflow-hidden">
                <img
                  src={conceptImage}
                  alt="Concept to Completion"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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