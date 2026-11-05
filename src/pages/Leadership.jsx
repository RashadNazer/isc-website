import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, MagneticButton } from "../components/UIComponents";
import { usePageTitle } from "../hooks/usePageTitle";
import Aurora from "../component/Aurora";
import { leadership } from "../data/leadership";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   LeaderCard — always horizontal (photo left, text right)
   ========================================================= */
const LeaderCard = ({ leader, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
  >
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(180px,_40%)_1fr] h-full">
      {/* PHOTO — left */}
      <div className="relative overflow-hidden h-64 sm:h-full min-h-[260px]">
        <img
          src={leader.photo}
          alt={leader.name}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add(
              "bg-gradient-to-br",
              "from-blue-600",
              "to-indigo-600",
              "flex",
              "items-center",
              "justify-center"
            );
            const initials = document.createElement("div");
            initials.className = "text-white font-black text-6xl";
            initials.textContent = leader.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            e.target.parentElement.appendChild(initials);
          }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-slate-950/20" />
      </div>

      {/* TEXT — right */}
      <div className="p-7 md:p-8 flex flex-col">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
          {leader.name}
        </h3>
        <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-5">
          {leader.role}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
          {leader.bio}
        </p>

        <div className="flex items-center gap-2 pt-5 border-t border-slate-100 dark:border-slate-800">
          <a
            href={`mailto:${leader.email}`}
            aria-label={`Email ${leader.name}`}
            data-cursor="hover"
            className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
          >
            <Mail className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${leader.name} on LinkedIn`}
            data-cursor="hover"
            className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Leadership() {
  usePageTitle("Leadership");
  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative text-center">
        <FullWidth>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Our Leadership
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                The People Behind{" "}
                <span className="text-slate-400 dark:text-slate-600">ISC.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Four decades of accumulated expertise — led by a team that has
                built the Kingdom's most complex electronic systems.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-16 md:py-20 relative">
        <FullWidth>
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Users className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Leadership Team
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
          </Reveal>

          {/* 2 cards per row on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((leader, i) => (
              <LeaderCard key={leader.id} leader={leader} index={i} />
            ))}
          </div>
        </FullWidth>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24">
        <FullWidth>
          <Reveal>
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkles
                    className="w-3.5 h-3.5 text-blue-100"
                    strokeWidth={2.5}
                  />
                  <span className="text-blue-50 text-[10px] font-black uppercase tracking-[0.3em]">
                    Join Our Team
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Build Your Career With Us.
                </h3>
                <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  We're always looking for talented engineers and professionals
                  who share our commitment to quality.
                </p>
                <MagneticButton>
                  <Link
                    to="/career"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                  >
                    View Open Positions
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={3}
                    />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
}