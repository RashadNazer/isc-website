// src/data/caseStudies/index.js
// Central aggregation of all case studies.

import southGhawar from "./south-ghawar-debottleneck";
import nchcB60 from "./nchc-b60-ems";
import jafurahPkg2 from "./jafurah-pkg2-riyas-ngl";
import masterGas15 from "./master-gas-system-phase-iii-pkg-15";

/* =========================================================
   All case studies (order doesn't matter — sorting happens in pages)
   ========================================================= */
export const caseStudies = [
  southGhawar,
  nchcB60,
  jafurahPkg2,
  masterGas15,
];

/* =========================================================
   Helpers
   ========================================================= */
export const getCaseStudyById = (id) =>
  caseStudies.find((cs) => cs.id === id);

// Optional: filter case studies by sector
export const getCaseStudiesBySector = (sector) =>
  caseStudies.filter((cs) => cs.sector === sector);

// Optional: get most recent N case studies
export const getRecentCaseStudies = (count = 3) =>
  [...caseStudies]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, count);