import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 1. Go up two levels to reach src, then into data
import { stats } from "../../data/homeData"; 

// 2. Go up two levels to reach src, then into components
import { Reveal, StatCounter } from "../../components/UIComponents";


const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-slate-950 py-24 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Designed for Today, <br />
              <span className="text-blue-600">Ready for Tomorrow.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              At ISC, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners by designing and maintaining Low Current Systems.
            </p>
            
            {/* LINK TO THE FULL ABOUT PAGE */}
            <button 
              onClick={() => navigate("/about")}
              className="group flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all"
            >
              Learn our story <span>→</span>
            </button>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800"
              >
                <StatCounter value={parseInt(stat.value)} suffix="+" label={stat.label} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;