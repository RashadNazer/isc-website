// src/data/partners.js
import hirschLogo from '../assets/partner-logos/hirsch.png';
import hanwhaLogo from '../assets/partner-logos/hanwha.png';
import boonedamLogo from '../assets/partner-logos/boonedam.png';
import lenelLogo from '../assets/partner-logos/lenel.png';
import ozakLogo from '../assets/partner-logos/ozak.png';
import percoLogo from '../assets/partner-logos/perco.png';
import viconLogo from '../assets/partner-logos/vicon.png';
import milestoneLogo from '../assets/partner-logos/milestone.png';
import edwardsLogo from '../assets/partner-logos/edwards.jpg';
import atlasLogo from '../assets/partner-logos/atlasied.jpg';
import beldenLogo from '../assets/partner-logos/belden.png';
import biampLogo from '../assets/partner-logos/biamp.png';
import ciscoLogo from '../assets/partner-logos/cisco.png';
import commscopeLogo from '../assets/partner-logos/commscope.png';
import hpeArubaLogo from '../assets/partner-logos/hpearuba.png';
import huaweiLogo from '../assets/partner-logos/huawei.png';
import raulandLogo from '../assets/partner-logos/rauland.png';
import saplingLogo from '../assets/partner-logos/sapling.jpg';
import airbusLogo from '../assets/partner-logos/airbus.png';
import amphenolProcomLogo from '../assets/partner-logos/amphenol.png';
import andrewLogo from '../assets/partner-logos/andrew.jpg';
import mavenWirelessLogo from '../assets/partner-logos/maven.png';
import motorolaLogo from '../assets/partner-logos/motorola.png';
import nokiaLogo from '../assets/partner-logos/nokia.png';
import pbeAxellLogo from '../assets/partner-logos/pbeaxell.png';
import rfsLogo from '../assets/partner-logos/rfs.png';

export const partnerData = [
    { id: 1,
        name: "HIRSCH",
        category: "Security",
        desc: " Specialized physical security and access control, video intelligence, and secure identification solutions across various industries",
        specialties: ["Access Control", "Video Intelligence", "Identity Management", "Perimeter Protection"],
        url: "https://www.hirschsecure.com/",
        logo: hirschLogo
    },
    { id: 2,
        name:"Hanwha",
        category: "Security",
        desc:"Innovative video surveillance systems and solutions leveraging advanced technologies such as artificial intelligence (AI), cloud connectivity, and cybersecurity ",
        specialties: ["AI Cameras", "Video Management", "Cloud Surveillance", "Thermal Imaging"],
        logo: hanwhaLogo,
        url:"https://www.hanwhavision.com/ar/"
    },
    { id: 3,
        name:"BOON EDAM",
        category: "Security",
        desc:"Turnstiles, revolving security and access doors, and portals",
        specialties: ["Security Turnstiles", "Revolving Doors", "Optical Turnstiles", "Mantrap Portals"],
        logo: boonedamLogo,
        url:"https://www.boonedam.com/"
    },
    { id: 4,
        name:"Lenel",
        category: "Security",
        desc:"Innovative products for comprehensive physical security solutions including access control, video surveillance and mobile credentialing ",
        specialties: ["Access Control", "Video Surveillance", "Mobile Credentials", "Open Platform"],
        logo: lenelLogo,
        url:"https://buildings.honeywell.com/us/en/brands/our-brands/lenels2"
    },
    { id: 5,
        name:"CAME",
        category: "Security",
        desc:"Turnstiles, automatic doors, and access barriers",
        specialties: ["Speed Gates", "Automatic Doors", "Access Barriers", "Road Blockers"],
        logo: ozakLogo,
        url:"https://www.came.com/uk/public"
    },
    { id: 6,
        name:"PERco",
        category: "Security",
        desc:"Turnstiles, railing systems and swing gates for security and entrance access control",
        specialties: ["Turnstiles", "Swing Gates", "Railing Systems", "Access Control"],
        logo: percoLogo,
        url:"https://www.perco.com/"
    },
    { id: 7,
        name:"Vicon",
        category: "Security",
        desc:"Leader in advanced security and surveillance technology with comprehensive security solutions designed to safeguard various business verticals",
        specialties: ["Video Surveillance", "Access Control", "AI Cameras", "VMS"],
        logo: viconLogo,
        url:"https://vicon-security.com/"
    },
    { id: 8,
        name:"Milestone",
        category: "Security",
        desc:"Video management solutions, providing actionable insights from video data through the perfect combination off cameras and sensors with open platform software and analytics ",
        specialties: ["Video Management Software", "Video Analytics", "Cloud VMS", "Open Platform"],
        logo: milestoneLogo,
        url:"https://www.milestonesys.com/"
    },
    { id: 9,
        name:"Edwards",
        category: "Fire",
        desc:"Fire and life safety solutions for all types of facilities",
        specialties: ["Fire Alarm Systems", "Mass Notification", "Life Safety Panels", "Detection Systems"],
        logo: edwardsLogo,
        url:"https://www.edwardsfiresafety.com/index.html",
        featured: true
    },
    { id: 10,
        name:"AtlasIED",
        category: "ICT",
        desc:"Innovative audio communications solutions",
        specialties: ["Mass Notification", "Distributed Audio", "Sound Masking", "Intercom Systems"],
        logo: atlasLogo,
        url:"https://www.atlasied.com/"
    },
    { id: 11,
        name:"Belden",
        category: "ICT",
        desc:"End-to-End networking and connectivity infrastructure solutions",
        specialties: ["Network Infrastructure", "Structured Cabling", "Industrial Networking", "Connectivity Solutions"],
        logo: beldenLogo,
        url:"https://www.belden.com/"
    },
    { id: 12,
        name:"BiAmp",
        category: "ICT",
        desc:"Innovative audiovisual and communications solutions, whether across the rooms or around the globe",
        specialties: ["Audiovisual Systems", "Conference Solutions", "Digital Signal Processing", "Sound Reinforcement"],
        logo: biampLogo,
        url:"https://www.biamp.com/"
    },
    { id: 13,
        name:"Cisco",
        category: "ICT",
        desc:"nformation Technology solutions from backbone switches, routers and endpoint devices, software and security across wide range of business verticals",
        specialties: ["Enterprise Networking", "Cybersecurity", "Data Center", "Collaboration"],
        logo: ciscoLogo,
        url:"https://www.cisco.com/"
    },
    { id: 14,
        name:"CommScope",
        category: "ICT",
        desc:"Wide range of solutions to enhance connectivity and network performance across various industries",
        specialties: ["Structured Cabling", "Fiber Optics", "Network Infrastructure", "Wireless Solutions"],
        logo: commscopeLogo,
        url:"https://www.commscope.com/"
    },
    { id: 15,
        name:"HPE Aruba",
        category: "ICT",
        desc:"Enterprise wired and wireless network infrastructure solutions, from edge to campus, to data center to the cloud ",
        specialties: ["Wireless Networking", "Wired Switching", "Network Security", "Edge-to-Cloud"],
        logo: hpeArubaLogo,
        url:"https://www.arubanetworks.com/"
    },
    { id: 16,
        name:"Huawei",
        category: "ICT",
        desc:"Enterprise switches, routers, firewalls, and various networking equipment and storages for all types of businesses ",
        specialties: ["Enterprise Networking", "Data Storage", "Firewalls", "Routers & Switches"],
        logo: huaweiLogo,
        url:"https://e.huawei.com/en/products-and-solutions"
    },
    { id: 17,
        name:"Rauland",
        category: "ICT",
        desc:"A leading global provider of mission critical communication solutions for hospitals, healthcare systems, and educational facilities",
        specialties: ["Nurse Call Systems", "Healthcare Communications", "Critical Alerts", "Clinical Workflow"],
        logo: raulandLogo,
        url:"https://www.rauland.com/"
    },
    { id: 18,
        name:"Sapling",
        category: "ICT",
        desc:"Synchronized clocks for schools, hospitals, transportation, and various facilities",
        specialties: ["Synchronized Clocks", "Time Systems", "Facility Timing", "Clock Systems"],
        logo: saplingLogo,
        url:"https://sapling-inc.com/"
    },
    { id: 19,
        name:"Airbus",
        category: "TETRA",
        desc:"Solutions for secure communications, hybrid broadband + narrowband solutions, professional, hybrid TETRA+LTE devices, digital radio networks solutions",
        specialties: ["TETRA Networks", "Hybrid TETRA+LTE", "Radio Devices", "Control Rooms"],
        logo: airbusLogo,
        url:"https://www.securelandcommunications.com/",
        featured: true
    },
    { id: 20,
        name:"Amphenol Procom",
        category: "TETRA",
        desc:"World-leading antenna, DAS, and combiner and filter solutions",
        specialties: ["Antenna Systems", "DAS Solutions", "Combiners & Filters", "RF Components"],
        logo: amphenolProcomLogo,
        url:"https://amphenolprocom.com/"
    },
    { id: 21,
        name:"Andrew",
        category: "TETRA",
        desc:"Cables, passive RF systems, antennas, and various enterprise network infrastructure solutions",
        specialties: ["RF Cables", "Antenna Systems", "Passive RF", "Network Infrastructure"],
        logo: andrewLogo,
        url:"https://www.commscope.com/"
    },
    { id: 22,
        name:"Maven Wireless",
        category: "TETRA",
        desc:"Leading innovator in wireless, end-to-end digital solutions with ensuring wireless coverage for cellular and public safety",
        specialties: ["DAS Solutions", "Public Safety Coverage", "Cellular Coverage", "Digital Wireless"],
        logo: mavenWirelessLogo,
        url:"https://mavenwireless.com/"
    },
    { id: 23,
        name:"Motorola",
        category: "TETRA",
        desc:"TETRA solutions offer secure, reliable and efficient communications customized to meet the needs of different markets",
        specialties: ["TETRA Radios", "Mission-Critical Comms", "Dispatch Systems", "Secure Communications"],
        logo: motorolaLogo,
        url:"https://www.motorolasolutions.com/en_xp/products/tetra.html"
    },
    { id: 24,
        name:"Nokia",
        category: "TETRA",
        desc:"Comprehensive range of network solutions from radio access technologies such as 4G and 5G, microwave and optical for higher capacity data transport. ",
        specialties: ["4G/5G Networks", "Microwave Transport", "Optical Networks", "Radio Access"],
        logo: nokiaLogo,
        url:"https://www.nokia.com/networks/"
    },
    { id: 25,
        name:"PBE Axell",
        category: "TETRA",
        desc:"Provider of safety, confined space communications and temporary power solutions to a wide range of global sectors ",
        specialties: ["Confined Space Comms", "Temporary Power", "Safety Systems", "Industrial Communications"],
        logo: pbeAxellLogo,
        url:"https://pbeaxell.com/"
    },
    { id: 26,
        name:"RFS",
        category: "TETRA",
        desc:"Indoor Connectivity Solutions for Buildings and Tunnels",
        specialties: ["Indoor DAS", "Tunnel Coverage", "RF Systems", "In-Building Solutions"],
        logo: rfsLogo,
        url:"https://www.rfsworld.com/"
    },
];