import React from "react";
import { Link } from "react-router-dom";
import { Reveal, MeshBackground } from "../components/UIComponents";
import { Shield, AlertCircle, Mail } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const AntiBribery = () => {
  usePageTitle("Anti-Bribery Policy", "Legal");
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
              <Shield className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Corporate Policy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Anti-Bribery & Corruption Policy
            </h1>
          </Reveal>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-mono text-sm">
              Effective Date: 1 January 2025
            </p>

            <div className="space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Policy Statement
                </h2>
                <p>
                  International Security & Communications Co. (ISC) is committed
                  to conducting business with the highest standards of ethics and
                  integrity, in strict compliance with the laws of the Kingdom of
                  Saudi Arabia and all jurisdictions in which we operate. We have
                  a zero-tolerance approach to bribery, corruption, extortion,
                  and facilitation payments in any form.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Scope
                </h2>
                <p>
                  This policy applies to all ISC employees, officers, directors,
                  agents, consultants, subcontractors, and business partners,
                  regardless of location or seniority. Every individual acting on
                  behalf of ISC is expected to understand and comply with this
                  policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Prohibited Conduct
                </h2>
                <p className="mb-4">
                  ISC strictly prohibits the following:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    Offering, promising, giving, or authorizing any financial or
                    other advantage to any person with the intent to obtain or
                    retain business or an improper advantage
                  </li>
                  <li>
                    Requesting, agreeing to receive, or accepting any bribe or
                    improper payment
                  </li>
                  <li>
                    Making facilitation payments to expedite routine government
                    actions
                  </li>
                  <li>
                    Providing or receiving gifts, hospitality, or entertainment
                    that could improperly influence a business decision
                  </li>
                  <li>
                    Using intermediaries, agents, or third parties to carry out
                    any act prohibited by this policy
                  </li>
                  <li>
                    Engaging in money laundering or any form of financial
                    impropriety
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Gifts & Hospitality
                </h2>
                <p>
                  Modest, customary gifts and hospitality may be acceptable in
                  certain circumstances, provided they are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                  <li>Reasonable in value and not in cash</li>
                  <li>Given openly and transparently</li>
                  <li>Not intended to influence a business decision</li>
                  <li>Compliant with local laws and client policies</li>
                  <li>Recorded in our gift register where required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Third-Party Due Diligence
                </h2>
                <p>
                  ISC conducts risk-based due diligence on all intermediaries,
                  agents, joint venture partners, and significant subcontractors.
                  We require contractual commitments from third parties to comply
                  with anti-bribery laws, and we reserve the right to audit their
                  compliance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Reporting Concerns
                </h2>
                <p className="mb-4">
                  Employees, clients, suppliers, and other stakeholders are
                  encouraged to report any suspected or actual breach of this
                  policy. Reports can be made confidentially to:
                </p>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/50">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Compliance Officer
                    </p>
                    <a
                      href="mailto:compliance@iscksa.com"
                      className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                    >
                      compliance@iscksa.com
                    </a>
                  </div>
                </div>
                <p className="mt-4">
                  All reports will be treated with discretion. ISC prohibits
                  retaliation against anyone who reports a concern in good faith.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Consequences of Breach
                </h2>
                <p>
                  Any breach of this policy will be treated as a serious matter
                  and may result in disciplinary action up to and including
                  termination of employment or contract, and referral to the
                  appropriate authorities.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Review
                </h2>
                <p>
                  This policy is reviewed annually by the executive team and
                  updated as required to reflect changes in law, regulation, or
                  business practice.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiBribery;