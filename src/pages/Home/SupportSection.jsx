import React from "react";

const SupportSection = () => {
  return (
    <section
      id="support"
      className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div>
              <h2 className="text-blue-300 font-bold text-sm uppercase tracking-[0.25em] mb-4">
                Post-Project Excellence
              </h2>
              <h3 className="text-4xl font-extrabold leading-tight mb-6">
                Support & Maintenance <br /> Contracts (MC)
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Our commitment extends well beyond project delivery. Maintenance
                Contracts ensure uninterrupted operations through structured
                workflows, fast response times, and continuous service evaluation.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 mb-4">
                  ✓
                </div>
                <h4 className="font-bold text-lg mb-2">Fast Resolution</h4>
                <p className="text-blue-200 text-sm">
                  Resolving hundreds of maintenance calls annually with internal periodic evaluations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 mb-4">
                  ★
                </div>
                <h4 className="font-bold text-lg mb-2">Client Feedback</h4>
                <p className="text-blue-200 text-sm">
                  Every service activity is reviewed by our clients to ensure
                  consistent quality and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Maintenance Portal Card */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-2xl font-black">Maintenance Portal</h4>
                <span className="text-[10px] px-2 py-1 rounded bg-amber-100 text-amber-700 uppercase tracking-wider">
                  System Update
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-6">
                Our online maintenance portal is currently undergoing system
                updates. For immediate assistance, please contact us using the
                information below.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border">
                  <span className="font-bold text-blue-600">Email:</span>
                  <a
                    href="mailto:mcsupport@iscksa.com"
                    className="font-bold text-blue-900 hover:underline"
                  >
                    mcsupport@iscksa.com
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border">
                  <span className="font-bold text-blue-600">Fax:</span>
                  <span className="font-mono text-slate-700">
                    966-13-898-4602
                  </span>
                </div>
              </div>

              <a
                href="https://e-service.iscksa.com/portal/#/mcportal/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800 transition"
              >
                Go to MC Portal
              </a>
            </div>

            {/* No Contract Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
              <h4 className="text-xl font-bold mb-3">
                No Maintenance Contract?
              </h4>
              <p className="text-blue-100 text-sm mb-6">
                If you do not have an active contract, please download and fill the service request form and email it to{" "}
                <span className="font-bold text-white">
                  service@iscksa.com
                </span>
              </p>

              <a
                href="https://www.iscksa.com/documents/SRForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-bold hover:bg-blue-50 transition"
              >
                Download Service Request Form
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;
