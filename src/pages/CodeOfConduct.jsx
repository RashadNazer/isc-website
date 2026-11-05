import React from "react";
import { Reveal, MeshBackground } from "../components/UIComponents";
import { Users, Handshake, Scale, Lock, Leaf, AlertCircle } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const sections = [
  {
    icon: Handshake,
    title: "1. Integrity & Ethics",
    content: [
      "We act with honesty, fairness, and integrity in all business dealings.",
      "We do not tolerate bribery, corruption, or any form of improper influence.",
      "We compete fairly and do not engage in anti-competitive practices.",
      "We honor commitments and honor the trust placed in us by clients and partners.",
    ],
  },
  {
    icon: Users,
    title: "2. Respect & Inclusion",
    content: [
      "We treat all colleagues, clients, and stakeholders with dignity and respect.",
      "We do not tolerate discrimination or harassment of any kind.",
      "We value diversity and the different perspectives each team member brings.",
      "We foster a workplace where people feel safe to speak up and contribute.",
    ],
  },
  {
    icon: Scale,
    title: "3. Compliance & Legal",
    content: [
      "We comply with all applicable laws of the Kingdom of Saudi Arabia.",
      "We adhere strictly to HCIS regulations and industry-specific codes.",
      "We comply with Saudi labor law, Saudization requirements, and tax obligations.",
      "We cooperate fully with regulators and auditors.",
    ],
  },
  {
    icon: Lock,
    title: "4. Confidentiality & Data Protection",
    content: [
      "We safeguard the confidential information entrusted to us by clients and partners.",
      "We handle personal data in accordance with the Saudi Personal Data Protection Law (PDPL).",
      "We do not disclose proprietary or sensitive information without authorization.",
      "We protect our own intellectual property and respect that of others.",
    ],
  },
  {
    icon: Leaf,
    title: "5. Safety & Environment",
    content: [
      "We prioritize the health and safety of everyone impacted by our work.",
      "We operate in accordance with ISO 45001 (Occupational Health & Safety).",
      "We minimize environmental impact and comply with ISO 14001 (Environmental Management).",
      "We report and investigate every incident to prevent recurrence.",
    ],
  },
  {
    icon: AlertCircle,
    title: "6. Reporting & Accountability",
    content: [
      "Everyone is responsible for raising concerns about potential misconduct.",
      "Reports can be made confidentially to compliance@iscksa.com.",
      "We prohibit retaliation against anyone reporting in good faith.",
      "We investigate all reports promptly and take appropriate action.",
    ],
  },
];

const CodeOfConduct = () => {
  usePageTitle("Code of Conduct", "Legal");
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
              <Users className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Corporate Policy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Code of Conduct
            </h1>
          </Reveal>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-mono text-sm">
              Effective Date: 1 January 2025
            </p>

            <div className="space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Commitment
                </h2>
                <p>
                  Every person who works for or with ISC is expected to uphold
                  the standards set out in this Code of Conduct. Our reputation
                  has been built over four decades on trust, integrity, and
                  dependable delivery — and each of us plays a role in protecting
                  it.
                </p>
                <p className="mt-4">
                  This Code applies to all employees, directors, contractors,
                  subcontractors, consultants, and business partners acting on
                  behalf of ISC, wherever they operate.
                </p>
              </section>

              {sections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <section key={i}>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                      {section.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      {section.content.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </section>
                );
              })}

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Living by the Code
                </h2>
                <p>
                  Complying with this Code is not optional. Breaches may result
                  in disciplinary action up to and including termination of
                  employment or contract, and may be referred to the appropriate
                  authorities. If you are ever unsure how to act, or you witness
                  behavior inconsistent with this Code, raise it with your
                  manager or contact{" "}
                  <a
                    href="mailto:compliance@iscksa.com"
                    className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                  >
                    compliance@iscksa.com
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

export default CodeOfConduct;