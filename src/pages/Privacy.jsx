import React from "react";
import { motion } from "framer-motion";
import { Reveal, MeshBackground } from "../components/UIComponents";

const Privacy = () => {
  return (
    /* Main Container:
       'min-h-screen' ensures the background covers the full height of the viewport.
       'overflow-hidden' prevents the MeshBackground from creating unwanted scrollbars.
    */
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors overflow-hidden">
      {/* Background visual component - set to absolute to stay behind content */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <MeshBackground />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
            Privacy Policy
          </h1>
        </Reveal>

        {/* Content Card:
            Uses 'backdrop-blur' for a frosted glass effect over the MeshBackground.
            'prose' handles base typography, and 'dark:prose-invert' handles dark mode text colors.
        */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-slate-200/50 shadow-2xl prose dark:prose-invert max-w-none">
          
          {/* Automatic date generation for the policy */}
          <p className="text-slate-500 dark:text-slate-400 mb-6 font-mono text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          {/* Paragraph Styles:
              'text-justify' ensures that both the left and right edges of the text are straight.
              'leading-relaxed' adds line-height for better readability of legal text.
          */}
          <h3 className="text-xl font-bold mb-4">1. Information Collection</h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            When you use our Enquiry form, we collect personal information such as your name, company, email, and mobile number. This data is used solely to respond to your quote requests and provide technical consultations.
          </p>

          <h3 className="text-xl font-bold mb-4">2. Data Usage</h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            Your information is used to generate PDF records and facilitate email communication via our service providers. We do not sell or lease your personal data to third parties.
          </p>

          <h3 className="text-xl font-bold mb-4">3. Document Security</h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            Any technical specifications or files uploaded through our portal are treated as confidential project data. These are used only for the purpose of engineering evaluation and bidding.
          </p>

          <h3 className="text-xl font-bold mb-4">4. Your Rights</h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            You may request to view, edit, or delete your personal information from our records at any time by contacting our digital portal administrator.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;