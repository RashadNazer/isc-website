import React from "react";
import { useNavigate } from "react-router-dom";
import conceptImage from "../../assets/office.png"; // ✅ Update path if needed

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
        className="min-h-screen pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center text-white relative overflow-hidden"
      >
        {/* Background Blur Circle */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-800/50 border border-blue-700 rounded-full">
                40+ Years of Excellence
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                From Concept to <br />
                <span className="text-blue-400">Completion</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                As a premier leader in Electronic Systems Integration, ISC provides a
                sophisticated ecosystem of technologies designed to drive operational
                efficiency.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={(e) => scrollToSection(e, "solutions")}
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95"
              >
                Our Solutions
              </button>

              <button
                onClick={(e) => scrollToSection(e, "projects")}
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95"
              >
                Our Projects
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-transparent border border-blue-400 text-white font-bold rounded-lg hover:bg-blue-800/40 transition-all active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-2xl">
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
