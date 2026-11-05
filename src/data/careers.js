// src/data/careers.js
import {
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Heart,
  GraduationCap,
  Sparkles,
  Mail,
  CheckCircle2,
  Cpu,
  Wrench,
  Code2,
  Megaphone,
  FileText,
  Target,
} from "lucide-react";

/* =========================================================
   HERO STATS
   ========================================================= */
export const stats = [
  { value: "40+", label: "Years in KSA", icon: Award },
  { value: "100+", label: "Team Members", icon: Users },
  { value: "50+", label: "Active Projects", icon: TrendingUp },
];

/* =========================================================
   BENEFITS — Why Work With Us
   ========================================================= */
export const benefits = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Factory-trained certifications, OEM partnerships, and in-house technical labs.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Structured progression paths from technician to project leadership.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive medical insurance and wellness programs for you and your family.",
  },
  {
    icon: Target,
    title: "Mission-Critical Work",
    desc: "Deliver security and communications infrastructure for the Kingdom's most vital facilities.",
  },
];

/* =========================================================
   DEPARTMENTS & POSITIONS
   ========================================================= */
export const departments = [
  {
    id: "All",
    label: "All Positions",
    icon: Sparkles,
  },
  {
    id: "Engineering",
    label: "Engineering",
    icon: Cpu,
    positions: [
      {
        title: "Electronic Systems Engineer",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Design and integrate Low Current Systems for mission-critical facilities across the Kingdom.",
        requirements: [
          "Bachelor's degree in Electronics or Electrical Engineering",
          "3+ years in LCS design or integration",
          "Proficiency in AutoCAD and MS Project",
        ],
      },
      {
        title: "Project Field Engineer (LCS/Electrical)",
        location: "Kingdom-wide",
        type: "Full-time",
        description:
          "Lead on-site installation and commissioning of integrated electronic systems.",
        requirements: [
          "Bachelor's degree in Communications, Electronics, or Electrical",
          "3+ years' experience in project management",
          "MS Office/MS Project proficiency required",
        ],
      },
      {
        title: "Project Supervisor (LCS/Electrical)",
        location: "Kingdom-wide",
        type: "Full-time",
        description:
          "Supervise field teams, ensure quality control, and coordinate with general contractors.",
        requirements: [
          "Technical/Vocational Degree in Communications, Electronics, or Electrical",
          "3+ years' experience in project management",
          "MS Office/MS Project skills essential",
        ],
      },
      {
        title: "Project Planner",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Develop detailed project schedules and coordinate multi-trade execution plans.",
        requirements: [
          "5+ years' experience in planning and project management",
          "Expertise in MS Project or Primavera",
        ],
      },
    ],
  },
  {
    id: "Technical",
    label: "Technical",
    icon: Wrench,
    positions: [
      {
        title: "IT Technician",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Maintain Windows servers, storage, and SQL environments for enterprise systems.",
        requirements: [
          "Technical/Vocational Degree in Electronics or IT",
          "3+ years in Windows Server, Storage, SQL",
          "MCSA/MCSE certification welcome",
        ],
      },
      {
        title: "Network Technician",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Configure and maintain enterprise network infrastructure across client sites.",
        requirements: [
          "Technical/Vocational Degree in Electronics",
          "3+ years of network configuration experience",
          "CCNA/CCNP certification welcome",
        ],
      },
      {
        title: "Electronic Technician",
        location: "Kingdom-wide",
        type: "Full-time",
        description:
          "Install, test, and troubleshoot electronic security and communication systems.",
        requirements: [
          "Technical/Vocational Degree in Electronics",
          "Hands-on experience with LCS equipment",
          "Willingness to travel to project sites",
        ],
      },
    ],
  },
  {
    id: "IT",
    label: "IT & Software",
    icon: Code2,
    positions: [
      {
        title: "Web Application Developer",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Build and maintain internal and client-facing web applications.",
        requirements: [
          "Bachelor's degree in Computer Science or related field",
          "2+ years with modern JavaScript frameworks",
          "Experience with REST APIs and databases",
        ],
      },
      {
        title: "IT and Network Administrator",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Manage internal IT infrastructure, users, and network security.",
        requirements: [
          "Bachelor's degree in IT or equivalent experience",
          "Experience with Windows Server, Active Directory",
          "Networking certifications preferred",
        ],
      },
    ],
  },
  {
    id: "Commercial",
    label: "Sales & Commercial",
    icon: Megaphone,
    positions: [
      {
        title: "Sales Representative",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Develop client relationships and drive opportunities in LCS integration.",
        requirements: [
          "Bachelor's degree in Business or Engineering",
          "2+ years of B2B sales experience",
          "Knowledge of security or technology solutions",
        ],
      },
      {
        title: "Technical Coordinator",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Bridge engineering and sales — prepare proposals, submittals, and coordination.",
        requirements: [
          "Bachelor's degree preferred",
          "Strong MS Office and communication skills",
          "Technical background in electronics or IT",
        ],
      },
    ],
  },
  {
    id: "Admin",
    label: "Admin & Support",
    icon: FileText,
    positions: [
      {
        title: "Graphic Designer",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Design marketing collateral, presentations, and brand assets.",
        requirements: [
          "Degree in Graphic Design or equivalent",
          "Portfolio demonstrating brand and print work",
          "Proficiency in Adobe Creative Suite",
        ],
      },
      {
        title: "Document Controller",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Manage project documentation, submittals, and version control.",
        requirements: [
          "Bachelor's degree preferred",
          "Experience with Aconex or similar EDMS",
          "Attention to detail and organization",
        ],
      },
      {
        title: "Secretary",
        location: "Khobar, KSA",
        type: "Full-time",
        description:
          "Provide executive support and coordinate office administration.",
        requirements: [
          "Bachelor's degree or diploma",
          "Excellent written and verbal communication",
          "Proficient with MS Office suite",
        ],
      },
    ],
  },
];

/* =========================================================
   APPLICATION PROCESS
   ========================================================= */
export const applicationSteps = [
  {
    icon: Mail,
    title: "Email Your CV",
    desc: "Send your CV to jobs@iscksa.com with the position name in the subject line.",
  },
  {
    icon: Users,
    title: "Initial Screening",
    desc: "Our recruitment team reviews your profile against the role requirements.",
  },
  {
    icon: Sparkles,
    title: "Technical Interview",
    desc: "Meet with the hiring manager and demonstrate your expertise.",
  },
  {
    icon: CheckCircle2,
    title: "Offer & Onboarding",
    desc: "Successful candidates receive an offer and structured onboarding.",
  },
];

/* =========================================================
   HELPER — Build pre-filled mailto link for a position
   ========================================================= */
export const buildApplyLink = (position) =>
  `mailto:jobs@iscksa.com?subject=${encodeURIComponent(
    `Application: ${position}`
  )}&body=${encodeURIComponent(
    `Dear ISC Recruitment Team,\n\nI would like to apply for the position of ${position}.\n\nPlease find my CV attached.\n\nBest regards,\n`
  )}`;