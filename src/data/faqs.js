// src/data/faqs.js
// FAQ content, grouped by category.

export const faqCategories = [
  { id: "All", label: "All Questions" },
  { id: "General", label: "General" },
  { id: "Sales", label: "Sales & Projects" },
  { id: "Support", label: "Support" },
  { id: "Technical", label: "Technical" },
  { id: "Careers", label: "Careers" },
];

export const faqs = [
  // ===== GENERAL =====
  {
    id: "g1",
    category: "General",
    question: "What does ISC do?",
    answer:
      "ISC (International Security & Communications Co.) is a leading low-current systems integrator based in Al Khobar, Saudi Arabia. Since 1984, we've designed, installed, and maintained integrated security, fire, communications, and ICT systems for critical facilities across the Kingdom — including petrochemical plants, hospitals, government buildings, and corporate campuses.",
  },
  {
    id: "g2",
    category: "General",
    question: "Where is ISC located and where do you operate?",
    answer:
      "Our corporate headquarters is in Al Khobar, Eastern Province. We operate Kingdom-wide — with active projects in Riyadh, Jeddah, Yanbu, Jubail, Jafurah, and other regions. Our field teams are deployed across the country.",
  },
  {
    id: "g3",
    category: "General",
    question: "Is ISC an approved HCIS contractor?",
    answer:
      "Yes. ISC has been an HCIS-approved contractor since 2018. We are certified to deploy security and fire protection systems for critical industrial infrastructure under HCIS jurisdiction.",
  },
  {
    id: "g4",
    category: "General",
    question: "What certifications does ISC hold?",
    answer:
      "We hold ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety). We are also an HCIS-approved contractor and an authorized dealer for 30+ global OEMs. Full certifications are available on our Compliance page.",
  },

  // ===== SALES =====
  {
    id: "s1",
    category: "Sales",
    question: "How do I request a quote for my project?",
    answer:
      "The fastest way is to submit an enquiry through our Request a Quote form. Include as much detail as possible: facility type, systems required, timeline, and any technical specifications. Our sales team responds within 24 hours.",
  },
  {
    id: "s2",
    category: "Sales",
    question: "What types of projects does ISC take on?",
    answer:
      "We handle projects across a wide spectrum — from single-building systems integrations to multi-year, multi-facility programs. Our sweet spot is mission-critical facilities: petrochemical, healthcare, government, transport, and enterprise commercial.",
  },
  {
    id: "s3",
    category: "Sales",
    question: "Do you work with general contractors and consultants?",
    answer:
      "Yes — a large portion of our work comes through general contractors, project management consultants, and engineering firms. We're comfortable working as a sub-contractor on complex multi-trade projects.",
  },
  {
    id: "s4",
    category: "Sales",
    question: "Can ISC help with budgetary estimates before a formal tender?",
    answer:
      "Absolutely. We often provide budgetary estimates during the design phase to help project owners plan. Select \"Budgetary In-Hand\" or \"Budgetary Bidding\" when submitting your enquiry, and we'll respond with indicative pricing.",
  },
  {
    id: "s5",
    category: "Sales",
    question: "What information do you need from me for a proper quote?",
    answer:
      "Ideally: facility name and type, systems required, drawings or specifications if available, timeline expectations, and OEM preferences if any. If you have limited information, we can still help — start with what you know and we'll ask the right follow-up questions.",
  },

  // ===== SUPPORT =====
  {
    id: "sp1",
    category: "Support",
    question: "I'm an existing client — how do I report a fault?",
    answer:
      "If you have a Maintenance Contract (MC), log in to the MC Portal to raise a ticket. For urgent issues, call our dedicated support line at +966 13 898 4602 or email service@iscksa.com.",
  },
  {
    id: "sp2",
    category: "Support",
    question: "What is included in a Maintenance Contract (MC)?",
    answer:
      "MC includes scheduled preventive maintenance, priority response for faults, remote monitoring where applicable, spare parts coordination, and periodic system health reports. Specific SLAs depend on your contract tier.",
  },
  {
    id: "sp3",
    category: "Support",
    question: "Do you offer support without a Maintenance Contract?",
    answer:
      "Yes. For non-contract clients, we offer on-call service on a per-visit basis. Download the Service Request (SR) form from our Support page, fill it out, and email it to service@iscksa.com. We'll respond with a quotation and schedule.",
  },
  {
    id: "sp4",
    category: "Support",
    question: "What are your support hours?",
    answer:
      "Our standard support hours are Sunday–Thursday, 8:00 AM – 5:00 PM. Contract holders have access to a 24/7 emergency line for critical faults affecting safety or security systems.",
  },
  {
    id: "sp5",
    category: "Support",
    question: "Do you provide spare parts?",
    answer:
      "Yes. As an authorized dealer for 30+ OEMs, we source genuine spare parts with full manufacturer warranty. We can also hold critical spares on-site for contract clients with high-availability requirements.",
  },

  // ===== TECHNICAL =====
  {
    id: "t1",
    category: "Technical",
    question: "What systems does ISC integrate?",
    answer:
      "We integrate fire alarm and suppression, gas detection, CCTV surveillance, access control, nurse call, public address, TETRA radio, structured cabling, ICT networks, building management (BMS), and more. If it's a low-current system, we likely have experience with it.",
  },
  {
    id: "t2",
    category: "Technical",
    question: "Which OEMs do you work with?",
    answer:
      "We're an authorized dealer for 30+ global manufacturers including Hirsch, Hanwha, Lenel, Milestone, Edwards, Cisco, HPE Aruba, Huawei, Rauland, Airbus, Motorola, Nokia, and others. Full list is on our Products page.",
  },
  {
    id: "t3",
    category: "Technical",
    question: "Do you provide system design and engineering services?",
    answer:
      "Yes. Design and engineering is one of our four core service pillars. We work with project owners and consultants from concept phase — including CAD drawings, system architecture, integration plans, and specification documents.",
  },
  {
    id: "t4",
    category: "Technical",
    question: "Can you integrate with systems we already have?",
    answer:
      "In most cases, yes. We work with open standards (OPC-UA, Modbus, BACnet, ONVIF) and have experience integrating with legacy systems. For proprietary protocols, we often use manufacturer-supplied gateways. Share your existing architecture with us and we'll assess compatibility.",
  },
  {
    id: "t5",
    category: "Technical",
    question: "How long does a typical LCS integration project take?",
    answer:
      "It varies significantly by scale. Single-building commercial integrations typically take 6–12 months. Large industrial or multi-facility projects run 18–36 months. We provide a detailed timeline after reviewing your specific scope.",
  },

  // ===== CAREERS =====
  {
    id: "c1",
    category: "Careers",
    question: "How do I apply for a role at ISC?",
    answer:
      "Visit our Careers page to see open positions. Email your CV to jobs@iscksa.com with the position name in the subject line. Our recruitment team reviews every application.",
  },
  {
    id: "c2",
    category: "Careers",
    question: "Do you offer internships or graduate programs?",
    answer:
      "Yes — we periodically take on interns and graduate engineers, particularly in electronics, communications, and IT disciplines. Mention \"Internship\" or \"Graduate\" in your email subject when you apply.",
  },
  {
    id: "c3",
    category: "Careers",
    question: "What is the typical hiring process?",
    answer:
      "Email screening → technical interview with the hiring manager → HR interview → offer and onboarding. The full process usually takes 2–4 weeks from application.",
  },
  {
    id: "c4",
    category: "Careers",
    question: "Does ISC support professional certifications?",
    answer:
      "Yes. We invest in our team's certifications — CCNA, MCSE, MCSA, PMP, and manufacturer-specific training. Certification programs are part of our professional development framework.",
  },
  {
    id: "c5",
    category: "Careers",
    question: "What benefits do you offer employees?",
    answer:
      "Comprehensive medical insurance for you and your family, structured professional development, career progression pathways, and a mission-critical work environment. Specific benefits vary by role and level.",
  },
];