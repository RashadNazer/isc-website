import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Added Link import
import { solutionData } from "../data/homeData";
import { Reveal } from "../components/UIComponents";
import { CheckCircle2 } from "lucide-react";

const Solutions = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="bg-white dark:bg-slate-950">
      
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.4em] mb-4">Enterprise Solutions</h2>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
              Integrated <span className="text-blue-600">Systems.</span>
            </h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
              We provide comprehensive Low Current System design and integration, 
              meeting stringent international standards and local KSA requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS LISTING */}
      <div className="flex flex-col">
        {solutionData.map((sol, index) => (
          <section 
            key={sol.id} 
            id={sol.id}
            className={`py-24 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'} dark:bg-slate-950 scroll-mt-24`}
          >
            <div className="max-w-[1400px] mx-auto">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* TEXT CONTENT - Takes 40% */}
                <div className="lg:flex-[0.4] w-full">
                  <Reveal x={index % 2 === 0 ? -30 : 30}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{sol.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                          {sol.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="pt-6 grid grid-cols-1 gap-4">
                        {sol.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* IMAGE BLOCK - Takes 60% */}
                <div className="lg:flex-[0.6] w-full">
                  <Reveal delay={0.2} x={index % 2 === 0 ? 30 : -30}>
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group border border-slate-200 dark:border-slate-800">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </Reveal>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. FINAL STATEMENT SECTION */}
      <section className="py-28 bg-blue-900 text-center relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto px-4 relative z-10">
          <Reveal threshold={0.5}>
            {/* Added whitespace-nowrap and responsive text scaling */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white italic mb-12 leading-none whitespace-nowrap tracking-tight">
              "Quality Is Our Objective."
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/enquiry" 
                className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Request a Quote
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
        
        {/* Background Design Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          ISC
        </div>
      </section>
    </main>
  );
};

export default Solutions;