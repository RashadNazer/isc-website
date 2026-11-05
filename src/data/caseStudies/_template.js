// src/data/caseStudies/_template.js
// Template for a new case study. Copy, rename, fill in.

export default {
  // ===== IDENTITY =====
  id: "unique-url-slug",                     // used in /case-studies/:id URL
  projectId: 0,                              // links to project in projectData (optional)
  title: "Case Study Title",
  subtitle: "A compelling one-liner that sets the context",

  // ===== META =====
  client: "Client Name",
  sector: "Oil & Gas",                       // Oil & Gas | Healthcare | Commercial | Government | Hospitality | Transport | Industrial | Residential
  category: "Petrochemical Complex",         // must match a project category
  location: "City, Region",
  year: "2025",
  duration: "24 months",

  // ===== MEDIA =====
  image: "/images/projects/my-project.jpg",
  heroImage: "/images/projects/my-project.jpg",
  gallery: [
    "/images/projects/my-project-1.jpg",
    "/images/projects/my-project-2.jpg",
  ],

  // ===== SUMMARY =====
  excerpt:
    "A 1-2 sentence summary that appears on the listing page and in search results.",

  // ===== NARRATIVE =====
  challenge:
    "Describe the problem, constraints, and why it mattered. 2-4 sentences.",

  approach: [
    "Key step 1 — what made it notable",
    "Key step 2 — the technical or process innovation",
    "Key step 3 — how it was executed",
    "Key step 4 — anything unique",
  ],

  solution:
    "Describe the delivered solution in 1-2 sentences. High-level, no jargon.",

  outcome: [
    "Measurable result 1 (quantitative when possible)",
    "Measurable result 2",
    "Measurable result 3",
    "Measurable result 4",
  ],

  // ===== DATA POINTS =====
  systems: [
    "Fire Alarm",
    "CCTV",
    // ...
  ],

  metrics: [
    { value: "24", suffix: " months", label: "Project duration" },
    { value: "0",  suffix: "",        label: "Safety incidents" },
    { value: "100", suffix: "%",      label: "Uptime achieved" },
    { value: "50",  suffix: "+",      label: "Engineers deployed" },
  ],
};