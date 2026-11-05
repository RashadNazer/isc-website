import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "../../data/homeData";
import { Reveal, StatCounter } from "../../components/UIComponents";
import Card3D from "../../components/Card3D";

const AboutSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-100 dark:border-slate-900 overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: imageY }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"
        />
        <motion.div
          style={{ y: imageY }}
          className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px]"
        />
      </div>

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: heading + text — 6 of 12 cols */}
          <div className="lg:col-span-6">
            <Reveal>
              <h3 className="text-4xl md:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight max-w-2xl">
                Designed for Today, <br />
                <span className="text-blue-600">Ready for Tomorrow.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                At ISC, we continue to adapt state-of-the-art technology,
                methodology, and practices, helping project owners by designing
                and maintaining Low Current Systems.
              </p>

              <button
                onClick={() => navigate("/about")}
                data-cursor="hover"
                className="group flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all"
              >
                Learn our story
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
            </Reveal>
          </div>

          {/* Right: stat cards — 6 of 12 cols, wider grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <Card3D className="h-full">
                  <div className="p-8 lg:p-10 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 h-full">
                    <StatCounter
                      value={parseInt(stat.value)}
                      suffix="+"
                      label={stat.label}
                    />
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;