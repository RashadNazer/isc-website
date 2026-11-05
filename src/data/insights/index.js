// src/data/insights/index.js
// Central aggregation of all insight posts.

import tetraRadio from "./tetra-radio-explained";
import hcisChecklist from "./hcis-compliance-checklist";
import hospitalRollout from "./lessons-hospital-rollout";
import vision2030 from "./vision-2030-lcs-opportunities";
import integrationFails from "./why-systems-integration-fails";
import nurseCall from "./nurse-call-systems-guide";
import dataAnalysisWorkflow from "./data-analysis-workflow";

/* =========================================================
   Categories
   ========================================================= */
export const insightCategories = [
  { id: "All", label: "All Insights" },
  { id: "Technical", label: "Technical Explainers" },
  { id: "Compliance", label: "Compliance" },
  { id: "Project Stories", label: "Project Stories" },
  { id: "Industry News", label: "Industry News" },
];

/* =========================================================
   All posts (order doesn't matter — sorting happens in helpers)
   ========================================================= */
export const insights = [
  tetraRadio,
  hcisChecklist,
  hospitalRollout,
  vision2030,
  integrationFails,
  nurseCall,
  dataAnalysisWorkflow,
];

/* =========================================================
   Helpers
   ========================================================= */
export const getInsightBySlug = (slug) =>
  insights.find((post) => post.slug === slug);

export const getRecentInsights = (count = 3) =>
  [...insights]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};