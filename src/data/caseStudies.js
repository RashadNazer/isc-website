// src/data/caseStudies.js
// This file is a thin re-export. The actual data lives in ./caseStudies/ (a folder).
// Pages continue to import from "../data/caseStudies" as before.

export {
  caseStudies,
  getCaseStudyById,
  getCaseStudiesBySector,
  getRecentCaseStudies,
} from "./caseStudies/index";