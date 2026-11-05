import React from "react";
import { Link } from "react-router-dom";
import { Reveal, MeshBackground } from "../components/UIComponents";
import { Cookie, Settings, BarChart3, Megaphone, Shield } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const CookiePolicy = () => {
  usePageTitle("Cookie Policy", "Legal");
  return (
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <MeshBackground />
      </div>

      {/* FULL WIDTH wrapper with readable inner column */}
      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
              <Cookie className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Cookie Policy
            </h1>
          </Reveal>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-mono text-sm">
              Last Updated: {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <div className="space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files stored on your device when you
                  visit a website. They help the site remember your preferences,
                  understand how you navigate, and improve your overall
                  experience. Cookies do not contain personal information that
                  can identify you individually.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  2. Cookies We Use
                </h2>

                <div className="space-y-5">
                  <CookieTypeCard
                    icon={Shield}
                    title="Strictly Necessary Cookies"
                    status="Always Active"
                    accent="blue"
                    description="These cookies are required for the website to function and cannot be disabled. They enable basic features such as page navigation, security, and theme preferences."
                    examples={[
                      "isc-theme (remembers your light/dark mode choice)",
                      "isc-cookie-consent-v1 (remembers your consent choices)",
                    ]}
                  />

                  <CookieTypeCard
                    icon={BarChart3}
                    title="Analytics Cookies"
                    status="Optional"
                    accent="emerald"
                    description="These cookies help us understand how visitors interact with our site — which pages are popular, where users drop off, and how they arrived. All data is aggregated and anonymized."
                    examples={[
                      "Google Analytics 4 (_ga, _ga_*) — if enabled",
                      "Page view counters",
                    ]}
                  />

                  <CookieTypeCard
                    icon={Megaphone}
                    title="Marketing Cookies"
                    status="Optional"
                    accent="violet"
                    description="These cookies are used to deliver relevant content and measure the effectiveness of marketing campaigns. They may be set by third-party advertising platforms."
                    examples={[
                      "LinkedIn Insight Tag",
                      "Meta Pixel",
                    ]}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Managing Your Preferences
                </h2>
                <p className="mb-4">
                  You can manage your cookie preferences at any time by clicking
                  the button below. This reopens the consent banner where you can
                  accept, reject, or customize which cookies we may use.
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem("isc-cookie-consent-v1");
                    window.location.reload();
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Manage Cookie Preferences
                </button>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Browser-Level Controls
                </h2>
                <p>
                  In addition to the consent banner, you can control cookies
                  through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
                  <li>View cookies currently stored on your device</li>
                  <li>Delete specific or all cookies</li>
                  <li>Block cookies from all or specific sites</li>
                  <li>Set exceptions for trusted sites</li>
                </ul>
                <p className="mt-4">
                  Disabling essential cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Third-Party Cookies
                </h2>
                <p>
                  Some cookies may be set by third-party services we use, such as
                  analytics or advertising platforms. These providers have their
                  own privacy and cookie policies, and we recommend reviewing
                  them for full transparency.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Legal Basis (Saudi PDPL)
                </h2>
                <p>
                  Under the Saudi Personal Data Protection Law (PDPL), we only
                  deploy non-essential cookies with your explicit consent. You
                  may withdraw consent at any time by reopening the preference
                  banner above.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Contact
                </h2>
                <p>
                  For questions about this Cookie Policy, contact our digital
                  portal administrator at{" "}
                  <a
                    href="mailto:pdadmin@iscksa.com"
                    className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                  >
                    pdadmin@iscksa.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CookieTypeCard = ({ icon: Icon, title, status, accent, description, examples }) => {
  const accentMap = {
    blue: "bg-blue-600/10 border-blue-600/20 text-blue-600 dark:text-blue-400",
    emerald: "bg-emerald-600/10 border-emerald-600/20 text-emerald-600 dark:text-emerald-400",
    violet: "bg-violet-600/10 border-violet-600/20 text-violet-600 dark:text-violet-400",
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl ${accentMap[accent]} flex items-center justify-center flex-shrink-0 border`}>
          <Icon className="w-5 h-5" strokeWidth={2.2} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {title}
            </h3>
            <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${accentMap[accent]}`}>
              {status}
            </span>
          </div>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {examples && examples.length > 0 && (
        <div className="ml-13 border-l-2 border-slate-200 dark:border-slate-700 pl-4 mt-3">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Examples
          </p>
          <ul className="space-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
            {examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CookiePolicy;