import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/UIComponents";

// Asset Imports
import project_management from "../assets/project_management.jpg";
import procurement from "../assets/procurement.jpg";
import installation from "../assets/installation.jpg";
import documentation from "../assets/documentation.jpg";

const serviceSections = [
  {
    id: "pm-design",
    title: "Project Management, Design and Engineering",
    image: project_management,
    content: "It is essential for the successful integration of any Low Current Systems (LCS) to have a professional project management. Our certified engineers follow proven industry standards to interface with all necessary trades in your project to guarantee that ISC is a productive team member. We work closely with your project team to deliver your project on time, on budget and to ensure clear communication with all point of contact throughout the life of the project. All aspects are considered: technical, architectural, environmental, culture, budgetary, workflow and expansion.",
    features: ["Certified Engineers", "Industry Standards", "Budget Optimization", "Optimal Design"]
  },
  {
    id: "procurement",
    title: "Vendor Selection & Material Procurement",
    image: procurement,
    content: "As a partner and authorized dealer for many top manufacturers and leveraging long-time relationship with technology leaders, ISC is here to help you sort out the options and select the right equipment to accomplish your unique requirements. We select equipment for our projects based on matching customer objectives and budget to the latest technology available. Whether you are looking for a basic system with simplicity, or seeking more comprehensive technology for advanced features, we can help you achieve a powerful, lasting impact.",
    features: ["Authorized Dealer", "Latest Technology", "Strategic Sourcing", "Objective Matching"]
  },
  {
    id: "installation",
    title: "Programming & Installation",
    image: installation,
    content: "ISC provides low current system programming services on all scales; whether it is a new job or retrofit. Our programmers and installation teams are factory-trained by our technology partners. We maintain a well-equipped lab for continuous training and to perform critical post-installation activities including assembly, configuration, prototyping, and rigorous cable testing. ISC has been trusted by primary general contractors and consultants in KSA for years.",
    features: ["IP-Based Integration", "Factory Trained", "In-house Lab", "Quality Control"]
  },
  {
    id: "training",
    title: "Training & Document Submittal",
    image: documentation,
    content: "At ISC, we do not just deliver a finished project. We ensure the installed systems can be operated by the end-user through two-phase training: Initial Handover and Final Handover. Our engineering back-office ensures complete documentation is submitted, including shop-drawings, as-built drawings, diagrams, system specs, and manuals along with project warranty and certificates.",
    features: ["End-User Certification", "Complete Submittals", "Operation Manuals", "Warranty Support"]
  }
];

const ServicesPage = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      
      {/* 1. HERO SECTION - Pure White Background */}
      <section className="pt-48 pb-20 px-6 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.4em] mb-4">Capabilities</h2>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">Our Services</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
              At ISC, we rely on our dedicated project managers and a team of certified engineers 
              to provide a full scope of capabilities to deliver the solutions and services 
              you need now and in the future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. ALTERNATING SERVICES SECTIONS */}
      {serviceSections.map((service, index) => (
        <section 
          key={service.id} 
          className={`py-32 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} dark:bg-slate-950 overflow-hidden border-b border-slate-50 dark:border-slate-900`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* TEXT BLOCK - Animated independently */}
              <div className="flex-1 w-full">
                <Reveal 
                  key={`text-${service.id}`} 
                  x={index % 2 === 0 ? -50 : 50} 
                  threshold={0.2}
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <span className="text-blue-600 font-black text-5xl opacity-10 inline-block transform -translate-x-1">0{index + 1}</span>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                        {service.title}
                      </h3>
                      <div className="w-24 h-2 bg-blue-600 rounded-full" />
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
                      {service.content}
                    </p>

                    {/* FEATURE GRID - Spaced out from paragraph */}
                    <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className="mt-1.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                            <span className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* IMAGE BLOCK - Animated independently with a slight delay */}
              <div className="flex-1 w-full">
                <Reveal 
                  key={`image-${service.id}`} 
                  delay={0.2} 
                  x={index % 2 === 0 ? 50 : -50} 
                  threshold={0.2}
                >
                  <div className="relative group">
                    {/* Visual Offset Frame */}
                    <div className="absolute -inset-6 bg-blue-900/5 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-1 duration-700" />
                    
                    <div className="relative h-[450px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transform transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* 3. FINAL STATEMENT SECTION */}
      <section className="py-28 bg-blue-900 text-center relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto px-4 relative z-10">
          <Reveal threshold={0.5}>
            {/* Added whitespace-nowrap and responsive text scaling */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white italic mb-12 leading-none whitespace-nowrap tracking-tight">
              "Quality Is Our Objective."
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/enquiry" 
                className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Request a Quote
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
        
        {/* Background Design Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          ISC
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;