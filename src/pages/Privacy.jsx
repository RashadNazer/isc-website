import React from "react";
import { Reveal, MeshBackground } from "../components/UIComponents";
import { usePageTitle } from "../hooks/usePageTitle";

const Privacy = () => {
  usePageTitle("Privacy Policy", "Legal");
  return (
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <MeshBackground />
      </div>

      {/* Full-width wrapper, readable inner column */}
      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Privacy Policy
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
                <p className="mb-4">
                  International Security & Communications Co. ("ISC", "we", "us")
                  is committed to protecting the privacy of individuals who visit
                  our website, submit enquiries, or engage with our services. This
                  Privacy Policy describes how we collect, use, store, and
                  protect your personal data in accordance with the{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Saudi Personal Data Protection Law (PDPL)
                  </strong>{" "}
                  and other applicable regulations in the Kingdom of Saudi Arabia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect personal data only when you choose to provide it or
                  when it is necessary to serve you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Contact details</strong> — name, company, email, mobile number, and
                    job title submitted through our enquiry, contact, or vendor
                    registration forms
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Project information</strong> — facility details, technical
                    specifications, and any files you upload for evaluation
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Recruitment data</strong> — CV, qualifications, and references
                    submitted through our Careers page
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Technical data</strong> — IP address, browser type, and pages
                    visited (via cookies, subject to your consent)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Legal Basis for Processing
                </h2>
                <p className="mb-4">
                  Under PDPL, we process your personal data on the following
                  legal bases:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Legitimate interest</strong> — to respond to business enquiries
                    and provide requested information
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Contractual necessity</strong> — to fulfill obligations under a
                    commercial agreement
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Consent</strong> — for non-essential cookies, marketing
                    communication, and optional analytics
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Legal obligation</strong> — for tax, regulatory, and
                    anti-corruption compliance
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  3. How We Use Your Data
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>To respond to quote requests and provide technical consultations</li>
                  <li>To prepare and deliver proposals, contracts, and invoices</li>
                  <li>To process vendor registrations and pre-qualifications</li>
                  <li>To evaluate job applications and manage recruitment</li>
                  <li>To send service updates related to active contracts</li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or lease your personal data to third
                  parties under any circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Data Retention
                </h2>
                <p className="mb-4">
                  We retain personal data only as long as necessary for the
                  purposes for which it was collected:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Enquiries that do not convert to contracts</strong> — 24 months
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Active client and vendor records</strong> — Duration of the
                    relationship + 10 years (in line with Saudi commercial
                    record-keeping requirements)
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Job applications (unsuccessful)</strong> — 12 months
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Website analytics</strong> — 14 months
                  </li>
                </ul>
                <p className="mt-4">
                  At the end of the retention period, data is securely destroyed
                  using industry-standard methods (deletion from production and
                  backup systems, and physical destruction of any paper records).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Your Rights Under PDPL
                </h2>
                <p className="mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to be informed</strong> — know what data we hold and why
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to access</strong> — request a copy of your personal data
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to correction</strong> — have inaccurate data corrected
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to deletion</strong> — request erasure of your data
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to withdraw consent</strong> — at any time for
                    consent-based processing
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Right to object</strong> — to processing based on legitimate
                    interest
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, email{" "}
                  <a
                    href="mailto:pdadmin@iscksa.com"
                    className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                  >
                    pdadmin@iscksa.com
                  </a>
                  . We will respond within 30 days as required by PDPL.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Third-Party Processors
                </h2>
                <p className="mb-4">
                  We use the following third-party services that may process your
                  data on our behalf:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">EmailJS</strong> — to transmit enquiry form submissions to our
                    sales team
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Cloud hosting provider</strong> — to serve this website
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-200">Analytics provider</strong> — if you consent to analytics
                    cookies
                  </li>
                </ul>
                <p className="mt-4">
                  All third-party processors are bound by confidentiality
                  agreements and are prohibited from using your data for any
                  purpose other than the specific service they provide to us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Security Measures
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. These include HTTPS
                  encryption, access controls, and regular security reviews of
                  our systems. No method of transmission over the internet is
                  completely secure, but we take these protections seriously.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  practices or legal requirements. The "Last Updated" date at the
                  top of this page indicates the most recent revision.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Contact
                </h2>
                <p>
                  For questions, requests, or complaints regarding this Privacy
                  Policy or your personal data, contact our data protection
                  officer at{" "}
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

export default Privacy;