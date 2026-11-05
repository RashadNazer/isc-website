// src/data/projects.js
// This file is a thin re-export. The actual data lives in ./projects/ (a folder).
// Pages continue to import from "../data/projects" as before.

export {
  projectData,
  getRealProjects,
  getPlaceholderProjects,
  getProjectsByIndustry,
  getProjectById,
} from "./projects/index";