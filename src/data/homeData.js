import hcisCert from '../assets/HCIS.png';
import isoCertFull from '../assets/ISO 9001_14001_45001.jpg';
import iso9001Icon from '../assets/ISO_9001 Icon.png';
import iso14001Icon from '../assets/ISO_14001 Icon.png';
import iso45001Icon from '../assets/ISO_45001 Icon.png';
import fireImg from '../assets/FADS Services Image.png';
import ictImg from '../assets/ICT Services Image.png';
import sacsImg from '../assets/SACS Services Image.png';
import tetraImg from '../assets/TETRA Services Image.png';
import conceptImage from '../assets/office.png';

// --- ADD THESE MISSING EXPORTS FOR HOME.JSX ---

export const stats = [
  { label: "Dedicated Employees", value: "100+" },
  { label: "Satisfied Customers", value: "200+" },
  { label: "Product Partners", value: "20+" },
  { label: "Completed Projects", value: "2000+" },
];

export const aboutValues = [
    { title: "Absolute Honesty", desc: "Integrity in every business activity, building long-term confidence." },
    { title: "Efficiency", desc: "Integrating systems that facilitate excellence from design to completion." },
    { title: "Innovation", desc: "Creative, top-quality services flexible to unique customer needs." },
    { title: "Professionalism", desc: "Dedication that ensures successful project delivery every time." },
    { title: "International Standards", desc: "Maintaining a technological edge through rigorous product selection." },
    { title: "Staff Development", desc: "Respect, support, and encouragement for our core team's growth." },
  ];



export const solutionData = [
  {
    id: "sec",
    title: "Security & Access Control Systems",
    subtitle: "Enterprise Security Framework",
    shorttitle: "Security Systems",
    image: sacsImg,
    description: "We combine various security measures into a cohesive framework to enhance the overall security posture of a facility. This ensures that only authorized individuals or vehicles can enter certain areas, protecting assets, sensitive information, and people.",
    features: [
      "Authorized & Forced Entry Prevention",
      "24/7 Intelligent Surveillance for Proactive Response",
      "Unauthorized/Dangerous Object Detection & Blocking",
      "Scalable Access Methods for Enhanced Security",
      "Key Watcher Systems for Precision Access Control"
    ]
  },
  {
    id: "fire",
    title: "Life Safety & Fire Alarm Systems",
    subtitle: "Detection & Emergency Response",
    shorttitle: "Fire Alarm Systems",
    image: fireImg,
    description: "Advanced Fire Alarm and detection systems engineered to protect infrastructure and ensure the safety of occupants during emergencies, providing a crucial backbone for life safety protocols.",
    features: [
      "Conventional and Addressable Systems",
      "Universal Detector & Alarm Device Support",
      "High-Output Sounders and Strobes",
      "Full Integration with BMS and Access Control"
    ]
  },
  {
    id: "it",
    title: "Information & Communication Technology",
    subtitle: "IP-Based Infrastructure",
    shorttitle: "ICT",
    image: ictImg,
    description: "We leverage enterprise-grade IP-based products to enhance connectivity, efficiency, and innovation, driving significant improvements in system integration across the facility.",
    features: [
      "Structured Cabling & Enterprise Switching/Routing",
      "IP Video Streaming and Unified Telephony",
      "High-Scalability Wireless Network Infrastructure",
      "Nurse Call, Intercoms, and Multimedia Systems"
    ]
  },
  {
    id: "tetra",
    title: "TETRA Systems",
    subtitle: "Mission-Critical Communications",
    shorttitle: "TETRA",
    image: tetraImg,
    description: "TETRA provides secure and reliable communication in mission-critical operations for Oil & Gas, Government Agencies, and Emergency Services, ensuring resilience in public safety networks.",
    features: [
      "DMR/VMR Mobile Radios & Base Stations",
      "Servers, Recorders, and Dispatching Solutions",
      "Specialized Antenna & RF Coverage Systems",
      "Drive Test and Signal Measurement Surveys"
    ]
  }
];

// Export Certificates for the About page
export const certs = {
  hcis: hcisCert,
  isoFull: isoCertFull,
  isoIcons: [iso9001Icon, iso14001Icon, iso45001Icon]
};

export const serviceData = [
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