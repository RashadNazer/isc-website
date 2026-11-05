// src/data/projects/_template.js
// Template for a new project. Copy, rename, edit.
//
// Category must be one of:
//   Petrochemical Complex | Pipelines | Hospital Complex | Medical Clinics
//   Corporate Office | Business Office Complex | Commercial and Industrial Buildings
//   Government Buildings and Offices | Military Base | Air Force Base
//   Hotel, Restaurant and Resort | Theater and Museum
//   Sports and Leisure Complex | Entertainment and Leisure Complex
//   Airport Complex | Sea Port Buildings and Offices
//   Transfortatation & Logistics | Fuel/Gas Station Buildings
//   Factory and Manufacturing | Power Plant and Substation | Workshop and Repair Center
//   Private Residence and Villas | Residential Complex
//   Residential, Commercial, and Leisure Complex
//   School & University Complex | Educational and Learning Complex

export default {
  id: 0,                                    // unique number — next available in sequence
  name: "PROJECT NAME IN UPPERCASE",
  category: "Corporate Office",
  city: "Riyadh",
  region: "Riyadh Province",
  year: "2025",
  image: "/images/projects/my-project.jpg",
  gallery: [],                              // optional array of extra images
  description: "One to two sentence summary of what was delivered.",
  systems: ["Fire Alarm", "CCTV"],          // systems deployed
  client: "Client Name",
  duration: "12 months",
  coordinates: [24.7136, 46.6753],          // [lat, lng] for map view

  // Only include if this is a placeholder/representative project
  // isPlaceholder: true,
};