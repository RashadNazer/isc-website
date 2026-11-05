// src/data/projects/index.js
// Central aggregation of all projects.

/* ============ REAL PROJECTS ============ */
import southGhawar from "./01-south-ghawar-debottleneck";
import nchcB60 from "./02-nchc-b60-ems";
import jafurahPkg2 from "./03-jafurah-pkg2-riyas";
import masterGas15 from "./04-master-gas-pkg15-yanbu";
import masterGas17 from "./05-master-gas-pkg17-jazan";
import dhaItRooms from "./06-dha-it-rooms-security";
import airbusTea3 from "./07-airbus-tea3-khurais";
import sadaraGsm from "./08-sadara-gsm-jubail";
import dhahranFiber from "./09-dhahran-fiber-replacement";
import jnglfC3C4 from "./10-jnglf-c3c4-juaymah";

/* ============ PLACEHOLDER PROJECTS ============ */
import riyadhIcu from "./11-riyadh-central-icu";
import jeddahSurgical from "./12-jeddah-medical-surgical";
import kafdTowerC from "./13-kafd-tower-c";
import khobarBusinessPark from "./14-khobar-business-park";
import redSeaResort from "./15-red-sea-resort";
import diriyahHeritage from "./16-diriyah-heritage";
import kkiaTerminal5 from "./17-kkia-terminal-5";
import jeddahPort from "./18-jeddah-port";
import interiorMinistry from "./19-interior-ministry-hq";
import northernBorder from "./20-northern-border";
import yanbuCement from "./21-yanbu-cement";
import qurayyahPower from "./22-qurayyah-power";
import diriyahVillas from "./23-diriyah-villas";
import kaecResidential from "./24-kaec-residential";

/* =========================================================
   Master array (order doesn't matter — sorting happens in pages)
   ========================================================= */
export const projectData = [
  // Real projects
  southGhawar,
  nchcB60,
  jafurahPkg2,
  masterGas15,
  masterGas17,
  dhaItRooms,
  airbusTea3,
  sadaraGsm,
  dhahranFiber,
  jnglfC3C4,
  // Placeholder projects
  riyadhIcu,
  jeddahSurgical,
  kafdTowerC,
  khobarBusinessPark,
  redSeaResort,
  diriyahHeritage,
  kkiaTerminal5,
  jeddahPort,
  interiorMinistry,
  northernBorder,
  yanbuCement,
  qurayyahPower,
  diriyahVillas,
  kaecResidential,
];

/* =========================================================
   HELPERS
   ========================================================= */

// Get only real projects (excludes placeholders)
export const getRealProjects = () =>
  projectData.filter((p) => !p.isPlaceholder);

// Get only placeholder projects
export const getPlaceholderProjects = () =>
  projectData.filter((p) => p.isPlaceholder);

// Get projects for a specific industry (by industry id)
export const getProjectsByIndustry = (industryId) => {
  const industryCategoryMap = {
    "oil-gas": ["Petrochemical Complex", "Pipelines"],
    healthcare: ["Hospital Complex", "Medical Clinics"],
    commercial: [
      "Corporate Office",
      "Business Office Complex",
      "Commercial and Industrial Buildings",
      "Government Buildings and Offices",
    ],
    hospitality: [
      "Hotel, Restaurant and Resort",
      "Theater and Museum",
      "Sports and Leisure Complex",
      "Entertainment and Leisure Complex",
    ],
    transport: [
      "Airport Complex",
      "Sea Port Buildings and Offices",
      "Transfortatation & Logistics",
    ],
    government: [
      "Government Buildings and Offices",
      "Military Base",
      "Air Force Base",
    ],
    industrial: [
      "Factory and Manufacturing",
      "Power Plant and Substation",
      "Workshop and Repair Center",
    ],
    residential: [
      "Private Residence and Villas",
      "Residential Complex",
      "Residential, Commercial, and Leisure Complex",
      "School & University Complex",
    ],
  };

  const categories = industryCategoryMap[industryId] || [];
  return projectData.filter((p) => categories.includes(p.category));
};

// Get a single project by id
export const getProjectById = (id) =>
  projectData.find((p) => p.id === id);