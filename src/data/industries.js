// src/data/industries.js

export const industries = [
  {
    id: "oil-gas",
    name: "Oil, Gas & Petrochemical",
    tagline: "Reliability where failure is not an option.",
    icon: "flame",
    accent: "amber",
    hero: "/images/industries/hero-oil-gas.jpg",
    description:
      "ISC delivers low-current systems for refineries, NGL facilities, gas processing plants, and pipeline networks across the Kingdom — engineered for hazardous zones and continuous operation.",
    facilityTypes: [
      "Petrochemical Complex",
      "Oil Well Pump Station",
      "Combined Gas and Power Plants",
      "Petrochemical Storages",
      "Oil & Gas Research and Lab Complex",
      "Utilities",
    ],
    capabilities: [
      "Hazardous-area fire & gas detection",
      "SCADA/PLC integration",
      "TETRA radio coverage",
      "Perimeter security & CCTV",
      "Emergency shutdown systems",
    ],
    whyUs: [
      {
        title: "HCIS Approved Since 2018",
        desc: "Certified to deploy security and fire protection for Saudi Arabia's most sensitive industrial sites.",
      },
      {
        title: "Hazardous-Area Certified",
        desc: "All equipment spec'd for Zone 1 / Zone 2 environments, with full ATEX/IECEx compliance.",
      },
      {
        title: "Zero Downtime Record",
        desc: "Our integration approach is designed around live operations — no interruptions to production.",
      },
      {
        title: "Direct OEM Relationships",
        desc: "Authorized dealer for 30+ manufacturers, ensuring genuine equipment and warranty coverage.",
      },
    ],
    compliance: [
      "HCIS",
      "Saudi Aramco 9COM",
      "ISO 9001:2015",
      "IEC 61511 (SIL)",
      "NFPA 72",
    ],
    stats: [
      { value: "40+", label: "Years serving Oil & Gas" },
      { value: "120+", label: "Facilities secured" },
    ],
    representativeProjects: [1, 3, 4, 5, 7, 8, 10], // real project IDs
    caseStudyIds: [
      "south-ghawar-debottleneck",
      "jafurah-pkg2-riyas-ngl",
      "master-gas-system-phase-iii-pkg-15",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Hospitals",
    tagline: "Systems that support the caregivers.",
    icon: "heart",
    accent: "rose",
    hero: "/images/industries/hero-healthcare.jpg",
    description:
      "From hospital observation units to specialist clinics, ISC integrates nurse call, fire safety, access control, and CCTV into clinical environments — always quietly, always reliably.",
    facilityTypes: [
      "Hospital Complex",
      "Medical Clinics",
      "Educational and Learning Complex",
    ],
    capabilities: [
      "Nurse call & clinical workflow systems",
      "Fire alarm & suppression",
      "Access control for restricted areas",
      "CCTV with privacy-first design",
      "Critical power monitoring",
    ],
    whyUs: [
      {
        title: "Clinical Workflow First",
        desc: "We design systems around how clinicians actually work — not just code compliance.",
      },
      {
        title: "Privacy by Design",
        desc: "Patient-adjacent CCTV and access control deployed with healthcare privacy standards in mind.",
      },
      {
        title: "Fail-Safe Engineering",
        desc: "Redundant paths for critical alerts, ensuring nurse calls and alarms always reach their destination.",
      },
      {
        title: "Trusted by JHAH",
        desc: "Johns Hopkins Aramco Healthcare relies on ISC for critical observation unit systems.",
      },
    ],
    compliance: ["HCIS", "JCI Standards", "NFPA 99", "ISO 9001:2015"],
    stats: [
      { value: "25+", label: "Healthcare facilities delivered" },
      { value: "100%", label: "Clinical sign-off rate" },
    ],
    representativeProjects: [2, 9],
    caseStudyIds: ["nchc-b60-ems"],
  },
  {
    id: "commercial",
    name: "Commercial & Corporate",
    tagline: "Modern offices built for the Kingdom's enterprises.",
    icon: "building",
    accent: "blue",
    hero: "/images/industries/hero-commercial.jpg",
    description:
      "Office towers, corporate headquarters, business parks, and administrative complexes — ISC delivers the low-current backbone that keeps them running.",
    facilityTypes: [
      "Corporate Office",
      "Commercial and Industrial Buildings",
      "Business Office Complex",
      "Commercial and Offices Complex",
      "Administrative and Operations Complex",
      "Government Buildings and Offices",
      "Warehouses and Storages",
    ],
    capabilities: [
      "Structured cabling & ICT infrastructure",
      "Access control & visitor management",
      "CCTV surveillance",
      "Fire alarm & voice evacuation",
      "Audio-visual & conferencing systems",
    ],
    whyUs: [
      {
        title: "Enterprise-Grade ICT",
        desc: "Fiber backbones, structured cabling, and network infrastructure designed for the next decade.",
      },
      {
        title: "Multi-Tenant Expertise",
        desc: "Experience deploying shared security and IT infrastructure for complex multi-tenant buildings.",
      },
      {
        title: "Kingdom-Wide Coverage",
        desc: "From Riyadh towers to Jeddah business parks — our field teams deliver across the Kingdom.",
      },
      {
        title: "Full Lifecycle Support",
        desc: "Install, commission, and maintain — with long-term contracts available for ongoing support.",
      },
    ],
    compliance: ["HCIS", "ISO 9001:2015", "Saudi Building Code", "NFPA 72"],
    stats: [
      { value: "60+", label: "Corporate sites" },
      { value: "Kingdom-wide", label: "Coverage" },
    ],
    representativeProjects: [6],
    caseStudyIds: [],
  },
  {
    id: "hospitality",
    name: "Hospitality, Leisure & Resorts",
    tagline: "Seamless technology, invisible to guests.",
    icon: "sparkles",
    accent: "violet",
    hero: "/images/industries/hero-hospitality.jpg",
    description:
      "Hotels, restaurants, resorts, sports complexes, and entertainment venues — the ISC systems behind exceptional guest experiences.",
    facilityTypes: [
      "Hotel, Restaurant and Resort",
      "Sports and Leisure Complex",
      "Entertainment and Leisure Complex",
      "Commercial and Resort Complex",
      "Hotel and Restaurant",
      "Religious Building",
      "Theater and Museum",
      "Libraries",
    ],
    capabilities: [
      "Guest-facing AV & control systems",
      "Fire & life safety",
      "CCTV & access control",
      "Public address & voice alarm",
      "Building management integration",
    ],
    whyUs: [
      {
        title: "Invisible Integration",
        desc: "Systems engineered to disappear into the guest experience — no visible clutter, no distraction.",
      },
      {
        title: "Life Safety First",
        desc: "Every hospitality project includes voice evacuation and fire systems to the highest standards.",
      },
      {
        title: "Heritage & Modern Venues",
        desc: "From heritage museums to new resorts — we adapt our approach to the space.",
      },
      {
        title: "24/7 Support for Hospitality",
        desc: "Round-the-clock coverage because guest-facing systems can't wait until morning.",
      },
    ],
    compliance: ["Saudi Building Code", "NFPA 72", "ISO 9001:2015"],
    stats: [
      { value: "20+", label: "Hospitality venues" },
      { value: "24/7", label: "Support coverage" },
    ],
    representativeProjects: [],
    caseStudyIds: [],
    fakeProjectKey: "hospitality",
  },
  {
    id: "transport",
    name: "Transportation & Logistics",
    tagline: "Connecting the Kingdom's infrastructure.",
    icon: "plane",
    accent: "sky",
    hero: "/images/industries/hero-transport.jpg",
    description:
      "Airport terminals, sea port facilities, fuel stations, and logistics hubs — ISC delivers mission-critical systems for the Kingdom's transport backbone.",
    facilityTypes: [
      "Airport Complex",
      "Sea Port Buildings and Offices",
      "Transfortatation & Logistics",
      "Fuel/Gas Station Buildings",
      "Warehouses and Storages",
    ],
    capabilities: [
      "Perimeter intrusion detection",
      "CCTV surveillance & analytics",
      "Access control & biometrics",
      "Fire alarm & public address",
      "Communication networks (TETRA, LTE)",
    ],
    whyUs: [
      {
        title: "High-Volume Security",
        desc: "Systems designed for the passenger and cargo throughput of international hubs.",
      },
      {
        title: "Integrated Communications",
        desc: "TETRA radio and LTE coverage for ground crews, security, and operations teams.",
      },
      {
        title: "Perimeter Defense",
        desc: "Layered detection for land, sea, and air boundaries of critical transport facilities.",
      },
      {
        title: "Logistics-Ready",
        desc: "Warehouse and distribution systems engineered for 24/7 operations.",
      },
    ],
    compliance: ["GACA Standards", "IMO / ISPS", "HCIS", "ISO 9001:2015"],
    stats: [
      { value: "15+", label: "Transport hubs" },
      { value: "Kingdom-wide", label: "Deployment" },
    ],
    representativeProjects: [],
    caseStudyIds: [],
    fakeProjectKey: "transport",
  },
  {
    id: "government",
    name: "Government & Defense",
    tagline: "Security at national scale.",
    icon: "shield",
    accent: "emerald",
    hero: "/images/industries/hero-government.jpg",
    description:
      "Government buildings, military bases, air force installations, and public safety facilities — ISC is a trusted HCIS-approved contractor for the Kingdom's most sensitive sites.",
    facilityTypes: [
      "Government Buildings and Offices",
      "Military Base",
      "Air Force Base",
      "Fire Station and Safety Services Buildings",
    ],
    capabilities: [
      "HCIS-compliant security systems",
      "Perimeter defense",
      "Command & control integration",
      "Secure communications",
      "Access control & biometrics",
    ],
    whyUs: [
      {
        title: "HCIS Approved",
        desc: "Certified since 2018 to deploy security systems for Saudi Arabia's critical infrastructure.",
      },
      {
        title: "Cleared Personnel",
        desc: "Our teams working on sensitive sites carry the required clearances and vetting.",
      },
      {
        title: "Command & Control Integration",
        desc: "Systems designed to feed into central operations rooms for unified response.",
      },
      {
        title: "Confidentiality First",
        desc: "Every project handled under strict non-disclosure and information-security protocols.",
      },
    ],
    compliance: ["HCIS", "ISO 27001", "NFPA 72", "Saudi Building Code"],
    stats: [
      { value: "HCIS", label: "Approved since 2018" },
      { value: "Top-tier", label: "Clearance" },
    ],
    representativeProjects: [],
    caseStudyIds: [],
    fakeProjectKey: "government",
  },
  {
    id: "industrial",
    name: "Industrial & Manufacturing",
    tagline: "Building the systems behind the Kingdom's output.",
    icon: "factory",
    accent: "orange",
    hero: "/images/industries/hero-industrial.jpg",
    description:
      "Factories, workshops, power plants, and industrial complexes — ISC delivers the technical infrastructure that keeps industry running.",
    facilityTypes: [
      "Factory and Manufacturing",
      "Workshop and Repair Center",
      "Power Plant and Substation",
      "Combined Gas and Power Plants",
      "Utilities",
    ],
    capabilities: [
      "Fire & gas detection",
      "Industrial CCTV & analytics",
      "Access control for hazardous zones",
      "SCADA/PLC integration",
      "Power monitoring",
    ],
    whyUs: [
      {
        title: "Process-Aware Systems",
        desc: "Systems designed around how your plant actually runs — from control room to field.",
      },
      {
        title: "Hazardous-Zone Ready",
        desc: "All equipment spec'd for the environmental and safety conditions of industrial sites.",
      },
      {
        title: "SCADA Integration",
        desc: "Seamless integration with your existing control and monitoring infrastructure.",
      },
      {
        title: "Minimal Downtime Rollout",
        desc: "Phased installation so production continues while systems are upgraded.",
      },
    ],
    compliance: ["HCIS", "IEC 61511 (SIL)", "NFPA 72", "ISO 9001:2015"],
    stats: [
      { value: "40+", label: "Industrial sites" },
      { value: "Zero", label: "Safety incidents" },
    ],
    representativeProjects: [],
    caseStudyIds: [],
    fakeProjectKey: "industrial",
  },
  {
    id: "residential",
    name: "Residential & Communities",
    tagline: "Systems that make modern living work.",
    icon: "home",
    accent: "indigo",
    hero: "/images/industries/hero-residential.jpg",
    description:
      "Private villas, residential towers, and mixed-use complexes — ISC delivers the low-current systems that make modern communities safe and connected.",
    facilityTypes: [
      "Private Residence and Villas",
      "Residential, Commercial, and Leisure Complex",
      "Residential Complex",
      "School & University Complex",
      "Educational and Learning Complex",
    ],
    capabilities: [
      "Smart home & BMS integration",
      "Access control & intercom",
      "CCTV & surveillance",
      "Fire alarm & life safety",
      "Structured cabling & ICT",
    ],
    whyUs: [
      {
        title: "Bespoke Design",
        desc: "Every villa and unit designed to the resident's specification — never a template approach.",
      },
      {
        title: "Smart-Home Ready",
        desc: "Integration with leading home automation platforms — KNX, Crestron, Control4, and more.",
      },
      {
        title: "Community-Wide Scale",
        desc: "From single villas to mixed-use communities with hundreds of units.",
      },
      {
        title: "Long-Term Maintenance",
        desc: "Post-handover support agreements ensure systems stay current and operational.",
      },
    ],
    compliance: ["Saudi Building Code", "NFPA 72", "ISO 9001:2015"],
    stats: [
      { value: "Kingdom-wide", label: "Projects" },
      { value: "Bespoke", label: "Per-villa design" },
    ],
    representativeProjects: [],
    caseStudyIds: [],
    fakeProjectKey: "residential",
  },
];

export const getIndustryById = (id) =>
  industries.find((ind) => ind.id === id);