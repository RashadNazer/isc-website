import React from "react";

const SupportSection = () => {
  return (
    <section
      id="support"
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden transition-colors duration-700"
    >
      {/* Decorative glow - adapts color for dark mode */}
      <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Text Content & Features */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <div>
              <h2 className="text-blue-300 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
                Post-Project Excellence
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Support & Maintenance <br className="hidden md:block" /> Contracts (MC)
              </h3>
              <p className="text-blue-100 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our commitment extends well beyond project delivery. Maintenance
                Contracts ensure uninterrupted operations through structured
                workflows and fast response times.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800 backdrop-blur">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 dark:text-blue-400 mb-4">
                  ✓
                </div>
                <h4 className="font-bold text-lg mb-2">Fast Resolution</h4>
                <p className="text-blue-200 dark:text-slate-400 text-sm">
                  Resolving hundreds of calls annually with internal evaluations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800 backdrop-blur">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 dark:text-blue-400 mb-4">
                  ★
                </div>
                <h4 className="font-bold text-lg mb-2">Client Feedback</h4>
                <p className="text-blue-200 dark:text-slate-400 text-sm">
                  Every service activity is reviewed to ensure consistent quality.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Action Cards */}
          <div className="space-y-6">
            {/* Maintenance Portal Card - Modified for Dark Mode visibility */}
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-[2rem] p-6 md:p-8 shadow-2xl border border-transparent dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h4 className="text-xl md:text-2xl font-black">Maintenance Portal</h4>
                <span className="text-[9px] md:text-[10px] px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 uppercase tracking-wider font-bold">
                  System Update
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Our online portal is currently undergoing updates. For assistance, 
                please use the contact information below.
              </p>

              <div className="space-y-3 md:space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">Email:</span>
                  <a
                    href="mailto:mcsupport@iscksa.com"
                    className="font-bold text-blue-900 dark:text-blue-300 hover:underline break-all text-sm md:text-base"
                  >
                    mcsupport@iscksa.com
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">Fax:</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    966-13-898-4602
                  </span>
                </div>
              </div>

              <a
                href="https://e-service.iscksa.com/portal/#/mcportal/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-xl bg-blue-900 dark:bg-blue-600 text-white font-bold hover:bg-blue-800 dark:hover:bg-blue-500 transition shadow-lg active:scale-[0.98]"
              >
                Go to MC Portal
              </a>
            </div>

            {/* No Contract Card */}
            <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 dark:bg-slate-900/30 border border-white/10 dark:border-slate-800 backdrop-blur text-center lg:text-left">
              <h4 className="text-xl font-bold mb-3">
                No Maintenance Contract?
              </h4>
              <p className="text-blue-100 dark:text-slate-400 text-sm mb-6">
                If you do not have an active contract, please download the service request form and email it to{" "}
                <span className="font-bold text-white dark:text-blue-400 whitespace-nowrap">
                  service@iscksa.com
                </span>
              </p>

              <a
                href="https://www.iscksa.com/documents/SRForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-200 text-blue-900 font-bold hover:bg-blue-50 dark:hover:bg-white transition active:scale-[0.98]"
              >
                Download SR Form
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;