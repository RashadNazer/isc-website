// src/data/insights.js
// This file is a thin re-export. The actual data lives in ./insights/ (a folder).
// Pages continue to import from "../data/insights" as before.

export {
  insights,
  insightCategories,
  getInsightBySlug,
  getRecentInsights,
  formatDate,
} from "./insights/index";