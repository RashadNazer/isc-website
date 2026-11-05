import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  LayoutGrid,
  FileText,
  BookOpen,
  Map,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const sitemapGroups = [
  {
    title: "Main",
    icon: Home,
    accent: "blue",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Leadership", path: "/leadership" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Services & Solutions",
    icon: LayoutGrid,
    accent: "indigo",
    links: [
      { name: "Services", path: "/services" },
      { name: "Solutions", path: "/solutions" },
      { name: "Products & Partners", path: "/products" },
      { name: "Projects", path: "/projects" },
      { name: "Support", path: "/support" },
    ],
  },
  {
    title: "Company",
    icon: Building2,
    accent: "emerald",
    links: [
      { name: "Case Studies", path: "/case-studies" },
      { name: "Industries We Serve", path: "/industries" },
      { name: "Clients", path: "/customers" },
      { name: "Compliance & Certifications", path: "/compliance" },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    accent: "violet",
    links: [
      { name: "Insights & News", path: "/insights" },
      { name: "FAQ / Help Center", path: "/faq" },
      { name: "Vendor Registration", path: "/vendors" },
    ],
  },
  {
    title: "Get Started",
    icon: ArrowRight,
    accent: "amber",
    links: [
      { name: "Request a Quote", path: "/enquiry" },
      { name: "Careers", path: "/career" },
      {
        name: "MC Portal (login)",
        path: "https://e-service.iscksa.com/portal/#/mcportal/login/",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    icon: FileText,
    accent: "rose",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  },
];

const accentMap = {
  blue: "from-blue-600 to-blue-500",
  indigo: "from-indigo-600 to-indigo-500",
  emerald: "from-emerald-600 to-teal-500",
  violet: "from-violet-500 to-purple-500",
  amber: "from-amber-500 to-orange-500",
  rose: "from-rose-500 to-pink-500",
};

const Sitemap = () => {
  usePageTitle("Sitemap");
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
                <Map className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Site Map
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Everything on{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  One Page.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                A complete index of every page on the ISC website.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* SITEMAP GRID */}
      <section className="pb-24">
        <FullWidth>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6">
            {sitemapGroups.map((group, gi) => {
              const GroupIcon = group.icon;
              const gradient =
                accentMap[group.accent] || "from-blue-600 to-blue-500";

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: gi * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col"
                >
                  <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        <GroupIcon className="w-5 h-5" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h2 className="text-base font-black text-slate-900 dark:text-white tracking-tight">
                          {group.title}
                        </h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                          {group.links.length}{" "}
                          {group.links.length === 1 ? "page" : "pages"}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-1 flex-1">
                      {group.links.map((link) => (
                        <li key={link.path}>
                          {link.external ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/item flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              <span className="truncate">{link.name}</span>
                              <ChevronRight
                                className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                strokeWidth={3}
                              />
                            </a>
                          ) : (
                            <Link
                              to={link.path}
                              className="group/item flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              <span className="truncate">{link.name}</span>
                              <ChevronRight
                                className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                strokeWidth={3}
                              />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                Can't find what you're looking for?
              </p>
              <Link
                to="/contact"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all"
              >
                Contact us — we'll help you find it
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
              </Link>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
};

export default Sitemap;