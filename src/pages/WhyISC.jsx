import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Factory,
  Handshake,
  FlaskConical,
  Download,
  LifeBuoy,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import Breadcrumbs from "../components/Breadcrumbs";
import { usePageTitle } from "../hooks/usePageTitle";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const differentiators = [
  {
    icon: Award,
    title: "40+ Years in the Kingdom",
    summary:
      "Founded in 1984, we've been part of Saudi infrastructure through five decades of change — from first-generation telephony to today's fully integrated smart facilities.",
    proof: [
      "Founded in 1984, headquartered in Al Khobar",
      "Continuously operating under Saudi ownership",
      "Deep institutional relationships built over decades",
    ],
    accent: "from-blue-600 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "HCIS-Approved Since 2018",
    summary:
      "We are certified by the High Commission for Industrial Security to deliver security and fire protection systems for the Kingdom's most sensitive industrial assets.",
    proof: [
      "HCIS-approved contractor since 2018",
      "Dozens of HCIS-regulated facilities delivered",
      "First-submission approvals on qualifying projects",
    ],
    accent: "from-emerald-600 to-teal-500",
  },
  {
    icon: Handshake,
    title: "Direct OEM Relationships",
    summary:
      "We are an authorized dealer and systems integrator for over 30 global manufacturers — which means genuine equipment, factory-trained engineers, and full warranty coverage.",
    proof: [
      "Authorized dealer for 30+ OEMs",
      "Direct technical escalations to manufacturers",
      "Genuine spare parts with manufacturer warranty",
    ],
    accent: "from-indigo-600 to-violet-500",
  },
  {
    icon: MapPin,
    title: "Kingdom-Wide Deployment",
    summary:
      "From the Red Sea coast to the Eastern Province to the northern borders — we maintain field teams, warehouses, and support operations across Saudi Arabia.",
    proof: [
      "Active projects in all major industrial regions",
      "Warehouse and logistics facility in Al Khobar",
      "Field teams deployable Kingdom-wide on short notice",
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: FlaskConical,
    title: "In-House Lab & Training Facility",
    summary:
      "Our engineers are certified in our own lab before deployment. We prototype, configure, and stress-test systems before they reach your site.",
    proof: [
      "Dedicated workshop for integration and staging",
      "Pre-deployment configuration and QA",
      "Continuous training on new platforms",
    ],
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: LifeBuoy,
    title: "Lifecycle Partnership",
    summary:
      "We don't disappear after handover. Our Maintenance Contract (MC) and 24/7 support ensure systems stay operational for their full design life.",
    proof: [
      "Structured Maintenance Contracts (MC)",
      "24/7 emergency support for critical faults",
      "In-house team handles upgrades and evolution",
    ],
    accent: "from-cyan-500 to-sky-500",
  },
];

const stats = [
  { value: "40+", label: "Years in Saudi Arabia" },
  { value: "2000+", label: "Projects Delivered" },
  { value: "30+", label: "Global OEM Partners" },
  { value: "100%", label: "Saudi-Based Operations" },
];

const WhyISC = () => {
  usePageTitle("Why ISC");
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
            <Breadcrumbs items={[{ label: "Why ISC" }]} />
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Why Choose ISC
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Built to Deliver.{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  Proven for Decades.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Six reasons why the Kingdom's most demanding clients choose ISC
                for their most critical low-current systems.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="/ISC_CompanyProfile.pdf"
                  download="ISC_CompanyProfile.pdf"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-lg"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  Download Company Profile
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FullWidth>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-16 md:py-24">
        <FullWidth>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
                >
                  <div className={`h-1 bg-gradient-to-r ${item.accent}`} />

                  <div className="p-7 md:p-8 flex flex-col flex-1">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                      {item.summary}
                    </p>

                    <ul className="space-y-2.5 pt-5 border-t border-slate-100 dark:border-slate-800">
                      {item.proof.map((p, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                            strokeWidth={3}
                          />
                          <span className="leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* COMPARISON */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900">
        <FullWidth>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                  The Difference
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  What Sets Us Apart.
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "One Integrator, Not Five",
                  desc: "You get a single point of accountability across design, procurement, installation, and support. No finger-pointing when trades collide.",
                },
                {
                  title: "Engineering, Not Reselling",
                  desc: "We design the systems, not just quote them. Our in-house engineers specify what your facility actually needs.",
                },
                {
                  title: "Compliance-First",
                  desc: "HCIS, SCA, Saudi Building Code — we design to compliance from day one, not retrofit it at audit time.",
                },
                {
                  title: "Long-Term Partnership",
                  desc: "Our relationships average a decade or more. We plan for the systems you'll need in year ten, not just year one.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <h4 className="text-base font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Factory
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      strokeWidth={2.5}
                    />
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FullWidth>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <FullWidth>
          <Reveal>
            <div className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkles
                    className="w-3.5 h-3.5 text-blue-100"
                    strokeWidth={2.5}
                  />
                  <span className="text-blue-50 text-[10px] font-black uppercase tracking-[0.3em]">
                    Ready to Talk
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Let's discuss your next project.
                </h3>
                <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Whether it's a new facility or an upgrade to an existing one,
                  our team is ready to scope it with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  <MagneticButton>
                    <Link
                      to="/enquiry"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                    >
                      Request a Quote
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </Link>
                  </MagneticButton>
                  <Link
                    to="/contact"
                    data-cursor="hover"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="/ISC_CompanyProfile.pdf"
                    download="ISC_CompanyProfile.pdf"
                    data-cursor="hover"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
                  >
                    <Download className="w-4 h-4" strokeWidth={2.5} />
                    Company Profile
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
};

export default WhyISC;