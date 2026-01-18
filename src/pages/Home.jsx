import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { projectData } from '../data/projects';
import { partnerData } from '../data/products';
import hcisCert from '../assets/HCIS.png';
import isoCertFull from '../assets/ISO 9001_14001_45001.jpg';
import iso9001Icon from '../assets/ISO_9001 Icon.png';
import iso14001Icon from '../assets/ISO_14001 Icon.png';
import iso45001Icon from '../assets/ISO_45001 Icon.png';
import fireImg from '../assets/FADS Services Image.png';
import ictImg from '../assets/ICT Services Image.png';
import sacsImg from '../assets/SACS Services Image.png';
import tetraImg from '../assets/TETRA Services Image.png';
import { customerData } from '../data/customers';
import conceptImage from '../assets/office.png';
import { useLocation, useNavigate } from 'react-router-dom';

const solutionData = [
  {
    id: "sec",
    title: "Security & Access Control",
    subtitle: "Cohesive Framework & Protection",
    image: sacsImg,
    description: "We combine various security measures into a cohesive framework to enhance overall security posture of a facility. This ensures that only authorized individuals or vehicles can enter certain areas, protecting assets, sensitive information, and people.",
    features: [
      "To ensure no unauthorized or force entry",
      "Round the clock surveillance with intelligence for proactive response",
      "Detects and blocks unauthorized or dangerous objects",
      "Enhanced security, efficiency, and scalability",
      "Ensures only the right person has the key with 'Key Watcher'"
    ]
  },
  {
    id: "fire",
    title: "Life Safety & Fire Alarm",
    subtitle: "Detection & Emergency Response",
    image: fireImg,
    description: "Fire Alarm and detection system to protect buildings from fires, ensuring safety of occupants during emergencies, crucial for life safety.",
    features: [
      "Conventional and Addressable System",
      "All types of detectors and alarm Devices",
      "Sounders and Strobes",
      "Integration to other facility systems like BMS and Access Control"
    ]
  },
  {
    id: "it",
    title: "Information & Communication Technology",
    subtitle: "IP-Based Connectivity & Innovation",
    image: ictImg,
    description: "We leverage IP-based products to enhance connectivity, efficiency, and innovation, driving significant improvements in system integration.",
    features: [
      "Structured cabling and enterprise switches",
      "IP Video Streaming and Telephony",
      "Wireless Network for location scalability",
      "Nurse Call, Intercoms, and Digital Signage"
    ]
  },
  {
    id: "tetra",
    title: "TETRA Systems",
    subtitle: "Mission-Critical Communications",
    image: tetraImg,
    description: "TETRA provides secure and reliable communication in mission-critical operations for Oil & Gas, Government Agency, and Emergency Services.",
    features: [
      "DMR/VMR Mobile Radios & Base Stations",
      "Servers, Recorders, and Dispatching Solutions",
      "Antenna Systems & RF coverage",
      "Drive Test and signal measurement surveys"
    ]
  }
];

const serviceData = [
  {
    id: "pm",
    title: "Project Management & Engineering",
    short: "Professional integration of Low Current Systems (LCS).",
    content: "It is essential for the successful integration of any Low Current Systems (LCS) to have professional project management. Our certified engineers follow proven industry standards to interface with all necessary trades, ensuring clear communication throughout the project life."
  },
  {
    id: "vendor",
    title: "Vendor Selection & Procurement",
    short: "Leveraging relationships with technology leaders.",
    content: "As an authorized dealer for many top manufacturers, ISC helps you sort out options and select the right equipment to accomplish your unique requirements. We match customer objectives and budget to the latest technology available."
  },
  {
    id: "install",
    title: "Programming & Installation",
    short: "Factory-trained technicians and in-house lab testing.",
    content: "ISC provides low current system programming services on all scales; whether it is a new job or retrofit. As technologies move towards IP based, we understand the merging of LCS equipment to IT technologies."
  },
  {
    id: "training",
    title: "Training & Documentation",
    short: "Ensuring end-users can operate systems with confidence.",
    content: "We don't just deliver a finished project; we ensure the systems can be operated by the end-user. Training is done in two phases: Initial Handover and Final Training according to manufacturer manuals."
  }
];


export default function Home() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };
  
  const [activeTab, setActiveTab] = useState(serviceData[0]);
  const [activeSol, setActiveSol] = useState(null);
  const [aboutTab, setAboutTab] = useState('mission');
  // Grid States
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Petrochemical Complex', 'Hospital Complex', 'Pipelines', 'Corporate Office', 'Commercial and Industrial Buildings'];

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);
  
    const stats = [
    { label: "Dedicated Employees", value: "100+" },
    { label: "Satisfied Customers", value: "200+" },
    { label: "Product Partners", value: "20+" },
    { label: "Completed Projects", value: "2000+" },
  ];

  const aboutValues = [
    { title: "Absolute Honesty", desc: "Integrity in every business activity, building long-term confidence." },
    { title: "Efficiency", desc: "Integrating systems that facilitate excellence from design to completion." },
    { title: "Innovation", desc: "Creative, top-quality services flexible to unique customer needs." },
    { title: "Professionalism", desc: "Dedication that ensures successful project delivery every time." },
    { title: "International Standards", desc: "Maintaining a technological edge through rigorous product selection." },
    { title: "Staff Development", desc: "Respect, support, and encouragement for our core team's growth." },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-800/50 border border-blue-700 rounded-full">
                30+ Years of Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                From Concept to <br />
                <span className="text-blue-400">Completion</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                As a premier leader in Electronic Systems Integration, ISC provides a sophisticated ecosystem of technologies designed to drive operational efficiency.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
    <button 
      onClick={(e) => scrollToSection(e, 'solutions')}
      className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95"
    >
      Our Solutions
    </button>
    <button 
      onClick={(e) => scrollToSection(e, 'projects')}
      className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95"
    >
      Our Projects
    </button>
    
    <button 
      onClick={() => navigate('/contact')}
      className="px-8 py-4 bg-transparent border border-blue-400 text-white font-bold rounded-lg hover:bg-blue-800/40 transition-all active:scale-95"
    >
      Contact Us
    </button>
  </div>
          </div>
          <div className="hidden lg:block relative">
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-2xl">
    <div className="bg-blue-950/50 aspect-square rounded-xl flex items-center justify-center border border-blue-700/50 overflow-hidden">
      <img 
        src={conceptImage} 
        alt="Concept to Completion" 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* 2. REDESIGNED ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* WHO WE ARE: HERO GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
              <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Establishing Excellence Since 1980</h2>
              <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
                Designed for Today,<br />
                <span className="text-blue-600">Ready for Tomorrow.</span>
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At <span className="font-bold text-slate-900">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners and end users by designing and maintaining a variety of <span className="font-semibold text-blue-900">Low Current Systems</span>.
                </p>
                <p>
                  As a leader with <span className="text-blue-700 font-bold text-xl">40+ years</span> of rich experience in Saudi Arabia, we strive to provide reliable systems and safe environments so you can focus on what is important to you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="text-4xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE MISSION/VISION/VALUES */}
          <div className="bg-blue-950 rounded-[3rem] p-12 lg:p-20 text-white relative shadow-2xl mb-32">
            <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-8">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAboutTab(tab)}
                  className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                    aboutTab === tab ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Our {tab}
                </button>
              ))}
            </div>

            <div className="min-h-[300px]">
              {aboutTab === 'mission' && (
                <div className="animate-in fade-in duration-700">
                  <h4 className="text-3xl font-bold mb-6">Exceeding Expectations</h4>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                    Serve the needs of our customers and exceeding their expectations with no short-cuts for a world-class solution, contribute to their success, and demonstrate a great deal of professionalism to achieve a common goal.
                  </p>
                </div>
              )}
              {aboutTab === 'vision' && (
                <div className="animate-in fade-in duration-700">
                  <h4 className="text-3xl font-bold mb-6">Innovation & Leadership</h4>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                    Aiming to be at the forefront and maintaining our leadership in the field of electronic integrated solutions and innovation, setting the standard for excellence and sustainability in the industry.
                  </p>
                </div>
              )}
              {aboutTab === 'values' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
                  {aboutValues.map((v, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-blue-400 font-black">0{i+1}.</div>
                      <div className="font-bold text-lg">{v.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{v.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SUCCESS FORMULA */}
          <div className="text-center mb-16">
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Methodology</h3>
            <h4 className="text-4xl font-black text-slate-900">The Success Formula</h4>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { title: "Customer-Centric", text: "We prioritize understanding unique needs and tailor technology to serve business objectives effectively." },
              { title: "Collaborative Culture", text: "We foster an environment where creativity thrives through open communication and knowledge sharing." },
              { title: "Agile Methodology", text: "Staying flexible and responsive to changing requirements allows us to deliver high-quality results efficiently." },
              { title: "Network of Suppliers", text: "Partnering with industry leaders to foster a comprehensive portfolio of innovative solutions." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h5 className="font-bold text-xl mb-4 text-slate-900">{item.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        
        {/* 4. CERTIFICATES SECTION */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Trust & Compliance</h3>
            <h4 className="text-4xl font-black text-slate-900">Certificates</h4>
          </div>

          <div className="space-y-32">
            {/* HCIS ROW */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="text-3xl font-black text-slate-900 leading-tight">
                  Approved HCIS Contractor
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Since 2018, ISC has met the stringent requirements and standards set by the <span className="font-bold text-slate-900">High Commission for Industrial Security (HCIS)</span> in the Kingdom of Saudi Arabia. We are trusted to provide security, safety, and fire protection solutions and services for critical industrial sectors.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md bg-white p-3 rounded-2xl border border-slate-100 shadow-xl transition-transform hover:scale-[1.02]">
                  <img src={hcisCert} alt="HCIS Certificate" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>

            {/* ISO ROW */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h4 className="text-3xl font-black text-slate-900">
                  International Standards Certification
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <img src={iso9001Icon} alt="ISO 9001" className="h-14 w-auto flex-shrink-0" />
                    <p className="text-slate-700 font-medium text-lg leading-snug">
                      Certified with the <span className="font-bold text-blue-900">ISO 9001:2015</span> Quality Management System (QMS)
                    </p>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <img src={iso14001Icon} alt="ISO 14001" className="h-14 w-auto flex-shrink-0" />
                    <p className="text-slate-700 font-medium text-lg leading-snug">
                      Certified with the <span className="font-bold text-blue-900">ISO 14001:2015</span> Environmental Management System (EMS)
                    </p>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <img src={iso45001Icon} alt="ISO 45001" className="h-14 w-auto flex-shrink-0" />
                    <p className="text-slate-700 font-medium text-lg leading-snug">
                      Certified with the <span className="font-bold text-blue-900">ISO 45001:2018</span> Occupational Health and Safety Management System (OHSMS)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md bg-white p-3 rounded-2xl border border-slate-100 shadow-xl transition-transform hover:scale-[1.02]">
                  <img src={isoCertFull} alt="ISO Certifications" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Capabilities</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Our Services</h3>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              {serviceData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${activeTab.id === service.id ? "bg-white border-blue-600 shadow-xl translate-x-2" : "bg-transparent border-slate-200 hover:border-blue-300"}`}
                >
                  <h4 className={`text-xl font-bold mb-2 ${activeTab.id === service.id ? "text-blue-900" : "text-slate-700"}`}>{service.title}</h4>
                  <p className="text-sm text-slate-500">{service.short}</p>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col justify-center">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">{activeTab.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{activeTab.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header with Close All */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Industry Ready</h2>
              <h3 className="text-4xl font-black text-slate-900">Our Solutions</h3>
            </div>
            
            {activeSol && (
              <button 
                onClick={() => setActiveSol(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors border-b border-dotted border-slate-300 hover:border-blue-600 pb-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close All Sections
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {solutionData.map((sol) => {
              const isOpen = activeSol?.id === sol.id;
              
              // Mapping the assets to the specific IDs
              const getSolutionImage = (id) => {
                if (id === 'sec') return sacsImg;
                if (id === 'fire') return fireImg;
                if (id === 'it') return ictImg;
                if (id === 'tetra') return tetraImg;
                return null;
              };

              return (
                <div 
                  key={sol.id} 
                  className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                    isOpen ? 'border-blue-200 shadow-2xl ring-1 ring-blue-50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  {/* Header/Trigger */}
                  <button
                    onClick={() => setActiveSol(isOpen ? null : sol)}
                    className={`w-full flex items-center justify-between p-7 md:p-9 text-left transition-all ${
                      isOpen ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <h4 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-900'}`}>
                        {sol.title}
                      </h4>
                      <p className={`text-xs uppercase tracking-[0.15em] mt-1.5 font-semibold ${
                        isOpen ? 'text-blue-300' : 'text-slate-400'
                      }`}>
                        {sol.subtitle}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                      isOpen ? 'border-blue-700 bg-blue-800 rotate-180' : 'border-slate-100 bg-slate-50'
                    }`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Content Area */}
                  <div 
                    className="grid transition-all duration-500 ease-in-out"
                    style={{ 
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="p-8 md:p-12 bg-white border-t border-slate-50">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          
                          {/* Text Side */}
                          <div className="space-y-8 animate-in slide-in-from-left-4 duration-700">
                            <p className="text-slate-600 text-lg leading-relaxed">
                              {sol.description}
                            </p>
                            
                            <div className="grid gap-4">
                              {sol.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 group/item">
                                  <div className="mt-1 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-slate-700 font-semibold leading-tight">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Image Side */}
                          <div className="relative animate-in zoom-in-95 duration-700">
                            <div className="absolute -inset-4 bg-slate-50 rounded-[2.5rem] -z-10"></div>
                            <img 
                              src={getSolutionImage(sol.id)} 
                              alt={sol.title} 
                              className="w-full h-auto rounded-3xl shadow-2xl border border-white object-cover" 
                            />
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SUPPORT & MAINTENANCE SECTION */}
<section id="support" className="py-24 bg-blue-900 text-white relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column: Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em] mb-3">Post-Project Excellence</h2>
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">Support & Maintenance <br />Contracts (MC)</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            We are committed to keeping our client’s confidence far beyond project completion. Our Maintenance Contracts guarantee smooth operations through a sophisticated workflow management system and rapid response times.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Fast Resolution</h4>
            <p className="text-blue-200 text-sm">Resolving hundreds of maintenance calls annually with internal periodic evaluations.</p>
          </div>
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Client Feedback</h4>
            <p className="text-blue-200 text-sm">Every service is evaluated by the client to ensure we maintain our high standards.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Portal & Action Cards */}
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
          <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
            Maintenance Portal
            <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded uppercase tracking-wider">System Update</span>
          </h4>
          <p className="text-slate-600 mb-6 text-sm">
            Our online portal is currently undergoing maintenance. For immediate user support, please contact us via:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-blue-600 font-bold">Email:</div>
              <a href="mailto:mcsupport@iscksa.com" className="text-blue-900 font-bold hover:underline">mcsupport@iscksa.com</a>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-blue-600 font-bold">Fax:</div>
              <div className="text-slate-700 font-mono">966-13-898-4602</div>
            </div>
          </div>

          <a 
            href="https://e-service.iscksa.com/portal/#/mcportal/login/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
          >
            Go to MC Portal
          </a>
        </div>

        <div className="bg-blue-800/50 border border-blue-400/30 rounded-3xl p-8 backdrop-blur-sm">
          <h4 className="text-xl font-bold mb-3">No Maintenance Contract?</h4>
          <p className="text-blue-100 text-sm mb-6">
            If you do not have an active contract, please download and fill the service request form and email it to <span className="text-white font-bold">service@iscksa.com</span>.
          </p>
          <a 
            href="https://www.iscksa.com/documents/SRForm.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Service Request Form
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
{/* 5. CUSTOMERS SECTION */}
<section id="customers-preview" className="py-24 bg-slate-50 border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
      <div>
        <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Track Record</h2>
        <h3 className="text-4xl font-black text-slate-900 mb-6">Trusted by Industry Leaders</h3>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          We are proud to partner with the Kingdom's most vital organizations, 
          delivering mission-critical security and communication infrastructure.
        </p>
      </div>
      <a href="/customers" className="group flex items-center gap-3 text-blue-700 font-bold text-lg hover:text-blue-900 transition-all border-b-2 border-transparent hover:border-blue-900 pb-2">
        View All Clients
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </div>

    {/* Only displays first 6 */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {customerData.slice(0, 6).map((client) => (
        <div key={client.id} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-xl group">
          <img 
            src={client.logo} 
            alt={client.name} 
            className="max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. FEATURED PROJECTS SECTION */}
<section id="projects" className="py-24 bg-slate-50 border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
      <div>
        <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Portfolio</h2>
        <h3 className="text-4xl font-extrabold text-slate-900">Featured Projects</h3>
      </div>
      
      {/* Link to Dedicated Projects Page */}
      <a 
        href="/projects" 
        className="group flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors"
      >
        View All Projects
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* We only slice the first 6 projects for the Home Page */}
      {projectData.slice(0, 6).map((project) => (
        <div 
          key={project.id} 
          className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[260px]"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">
                {project.category}
              </span>
              <span className="text-slate-300 font-mono text-[10px]">REF: 0{project.id}</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
              {project.name}
            </h4>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-medium">Location</span>
              <span className="text-slate-700 font-bold flex items-center gap-1.5">
                {project.city}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-medium">Completion</span>
              <span className="text-slate-900 font-bold">{project.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 6. PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Enhanced Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
            
            {/* Left Side: Title & Description */}
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 rounded-lg">
                Innovative Portfolio
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Our Technology Solutions
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed">
                We provide a comprehensive range of industry-leading products designed to 
                ensure <span className="text-slate-800 font-semibold">seamless integration</span> and 
                operational excellence across critical industrial sectors.
              </p>
            </div>

            {/* Right Side: Action Link */}
            <div className="flex-shrink-0">
              <a 
                href="/products" 
                className="group flex items-center gap-3 text-blue-700 font-bold text-lg hover:text-blue-900 transition-all border-b-2 border-transparent hover:border-blue-900 pb-2"
              >
                View All Products
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partnerData.slice(0, 6).map((partner) => (
        <a 
          key={partner.id}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {/* Logo Container */}
          <div className="h-16 w-full mb-6 flex items-start grayscale group-hover:grayscale-0 transition-all duration-500">
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="max-h-full max-w-[160px] object-contain object-left" 
            />
          </div>
          
          <h4 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h4>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
            {partner.desc}
          </p>
          
          <div className="mt-6 text-blue-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Visit Partner Site →
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}