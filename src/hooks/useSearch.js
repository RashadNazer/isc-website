// src/hooks/useSearch.js
import { useMemo } from "react";
import { projectData } from "../data/projects";
import { partnerData } from "../data/products";
import { insights } from "../data/insights";
import { faqs } from "../data/faqs";
import { caseStudies } from "../data/caseStudies";
import { industries } from "../data/industries";
import { certifications } from "../data/compliance";

/* Static pages — hand-curated list */
const staticPages = [
  { type: "Page", title: "Home", path: "/", keywords: ["homepage", "landing"] },
  { type: "Page", title: "About Us", path: "/about", keywords: ["company", "mission", "vision"] },
  { type: "Page", title: "Leadership", path: "/leadership", keywords: ["team", "management", "executives"] },
  { type: "Page", title: "Services", path: "/services", keywords: ["project management", "installation", "procurement", "training"] },
  { type: "Page", title: "Solutions", path: "/solutions", keywords: ["security", "fire", "ICT", "TETRA"] },
  { type: "Page", title: "Support", path: "/support", keywords: ["maintenance", "MC portal", "service request"] },
  { type: "Page", title: "Projects", path: "/projects", keywords: ["portfolio", "case studies", "references"] },
  { type: "Page", title: "Products & Partners", path: "/products", keywords: ["OEM", "vendors", "brands"] },
  { type: "Page", title: "Case Studies", path: "/case-studies", keywords: ["stories", "success"] },
  { type: "Page", title: "Industries We Serve", path: "/industries", keywords: ["sectors", "verticals"] },
  { type: "Page", title: "Clients", path: "/customers", keywords: ["customers", "partners"] },
  { type: "Page", title: "Compliance & Certifications", path: "/compliance", keywords: ["HCIS", "ISO", "ZATCA", "certificates"] },
  { type: "Page", title: "Insights & News", path: "/insights", keywords: ["blog", "articles", "news"] },
  { type: "Page", title: "FAQ / Help Center", path: "/faq", keywords: ["questions", "answers", "help"] },
  { type: "Page", title: "Vendor Registration", path: "/vendors", keywords: ["procurement", "onboarding"] },
  { type: "Page", title: "Request a Quote", path: "/enquiry", keywords: ["quote", "enquiry", "proposal"] },
  { type: "Page", title: "Careers", path: "/career", keywords: ["jobs", "hiring", "positions"] },
  { type: "Page", title: "Contact Us", path: "/contact", keywords: ["reach", "email", "phone", "address"] },
  { type: "Page", title: "Privacy Policy", path: "/privacy", keywords: ["legal", "data"] },
  { type: "Page", title: "Terms of Use", path: "/terms", keywords: ["legal", "terms"] },
];

/* Build the full search index once */
const buildIndex = () => {
  const index = [];

  // Static pages
  staticPages.forEach((p) => {
    index.push({
      type: p.type,
      title: p.title,
      subtitle: "Page",
      path: p.path,
      searchText: `${p.title} ${p.keywords.join(" ")}`.toLowerCase(),
    });
  });

  // Projects
  projectData.forEach((p) => {
    index.push({
      type: "Project",
      title: p.name,
      subtitle: `${p.city} · ${p.year} · ${p.category}`,
      path: `/projects?search=${encodeURIComponent(p.name)}`,
      searchText: `${p.name} ${p.city} ${p.category} ${p.client || ""} ${(p.systems || []).join(" ")}`.toLowerCase(),
    });
  });

  // Partners
  partnerData.forEach((p) => {
    index.push({
      type: "Partner",
      title: p.name,
      subtitle: `${p.category} · ${(p.specialties || []).slice(0, 2).join(", ")}`,
      path: `/products?search=${encodeURIComponent(p.name)}`,
      searchText: `${p.name} ${p.category} ${p.desc} ${(p.specialties || []).join(" ")}`.toLowerCase(),
    });
  });

  // Insights
  insights.forEach((p) => {
    index.push({
      type: "Insight",
      title: p.title,
      subtitle: `${p.category} · ${p.readingTime} min read`,
      path: `/insights/${p.slug}`,
      searchText: `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(" ")}`.toLowerCase(),
    });
  });

  // FAQs
  faqs.forEach((f) => {
    index.push({
      type: "FAQ",
      title: f.question,
      subtitle: `${f.category} · Answer`,
      path: `/faq?q=${encodeURIComponent(f.question.slice(0, 40))}`,
      searchText: `${f.question} ${f.answer} ${f.category}`.toLowerCase(),
    });
  });

  // Case Studies
  caseStudies.forEach((cs) => {
    index.push({
      type: "Case Study",
      title: cs.title,
      subtitle: `${cs.client} · ${cs.sector}`,
      path: `/case-studies/${cs.id}`,
      searchText: `${cs.title} ${cs.client} ${cs.sector} ${cs.excerpt}`.toLowerCase(),
    });
  });

  // Industries
  industries.forEach((ind) => {
    index.push({
      type: "Industry",
      title: ind.name,
      subtitle: ind.tagline,
      path: `/industries/${ind.id}`,
      searchText: `${ind.name} ${ind.description} ${ind.capabilities.join(" ")}`.toLowerCase(),
    });
  });

  // Certifications
  certifications.forEach((c) => {
    index.push({
      type: "Certification",
      title: c.name,
      subtitle: c.fullName,
      path: `/compliance`,
      searchText: `${c.name} ${c.fullName} ${c.description} ${c.issuer}`.toLowerCase(),
    });
  });

  return index;
};

const SEARCH_INDEX = buildIndex();

/* Simple token-based fuzzy matcher */
const scoreMatch = (item, query) => {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const text = item.searchText;
  const title = item.title.toLowerCase();

  // Exact title match = highest
  if (title === q) return 100;
  if (title.startsWith(q)) return 90;
  if (title.includes(q)) return 80;

  // Tokenize query and count how many tokens match
  const tokens = q.split(/\s+/).filter(Boolean);
  const matches = tokens.filter((t) => text.includes(t)).length;
  if (matches === 0) return 0;

  // Score = proportion of matching tokens + small bonus for full-phrase match
  const baseScore = (matches / tokens.length) * 60;
  const phraseBonus = text.includes(q) ? 15 : 0;

  return baseScore + phraseBonus;
};

/* Public hook */
export const useSearch = () => {
  const search = useMemo(() => {
    return (query, limit = 12) => {
      if (!query || query.trim().length < 2) return [];
      return SEARCH_INDEX
        .map((item) => ({ ...item, _score: scoreMatch(item, query) }))
        .filter((item) => item._score > 15)
        .sort((a, b) => b._score - a._score)
        .slice(0, limit);
    };
  }, []);

  return { search, totalIndexed: SEARCH_INDEX.length };
};