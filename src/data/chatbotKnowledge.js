// src/data/chatbotKnowledge.js

/**
 * Knowledge base for the ISC site chatbot.
 * Each entry:
 *   - id: unique key
 *   - keywords: array of lowercase strings the matcher will look for
 *   - title: short topic label (used in the bot's response header)
 *   - answer: the bot's text reply
 *   - links: array of { label, path } that render as navigation buttons
 */
export const chatbotKnowledge = [
  // ---------- INDUSTRIES ----------
  {
    id: 'petrochemical',
    keywords: [
      'petrochemical', 'oil', 'gas', 'refinery', 'refineries',
      'hydrocarbon', 'energy', 'downstream', 'upstream', 'oil and gas',
    ],
    title: 'Oil & Gas experience',
    answer:
      "Yes — ISC has decades of experience delivering low-current systems for the Kingdom's oil, gas, and petrochemical sector. We've handled projects for petrochemical complexes, pipelines, refineries, and critical industrial facilities, including HCIS-regulated sites.",
    links: [
      { label: 'Oil & Gas sector', path: '/industries/oil-gas' },
      { label: 'Petrochemical projects', path: '/projects' },
      { label: 'HCIS-approved case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'healthcare',
    keywords: [
      'healthcare', 'hospital', 'hospitals', 'medical', 'clinic', 'clinics',
      'health', 'patient',
    ],
    title: 'Healthcare experience',
    answer:
      'Absolutely. ISC provides integrated low-current systems for hospitals, medical clinics, and healthcare facilities across Saudi Arabia — including nurse-call, access control, CCTV, fire alarm, and structured cabling.',
    links: [
      { label: 'Healthcare sector', path: '/industries/healthcare' },
      { label: 'Healthcare projects', path: '/projects' },
      { label: 'Related case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'government',
    keywords: [
      'government', 'ministry', 'military', 'defense', 'defence', 'air force',
      'public sector',
    ],
    title: 'Government & defense',
    answer:
      'ISC has delivered secure systems for government buildings, military bases, and air force facilities in Saudi Arabia. Our solutions comply with the highest national security and data-handling requirements.',
    links: [
      { label: 'Government sector', path: '/industries/government' },
      { label: 'Government projects', path: '/projects' },
      { label: 'Compliance & certifications', path: '/compliance' },
    ],
  },
  {
    id: 'commercial',
    keywords: [
      'commercial', 'office', 'offices', 'corporate', 'business park',
      'tower', 'headquarters', 'hq',
    ],
    title: 'Commercial buildings',
    answer:
      'From corporate headquarters to business parks and mixed-use towers — ISC designs and integrates electronic security, ICT, and life-safety systems for commercial real estate.',
    links: [
      { label: 'Commercial sector', path: '/industries/commercial' },
      { label: 'Commercial projects', path: '/projects' },
    ],
  },
  {
    id: 'hospitality',
    keywords: [
      'hospitality', 'hotel', 'hotels', 'resort', 'restaurant',
      'entertainment', 'leisure', 'museum',
    ],
    title: 'Hospitality & leisure',
    answer:
      'ISC works with hotels, resorts, restaurants, sports complexes, museums, and entertainment venues — delivering AV, security, access control, and guest-facing technology.',
    links: [
      { label: 'Hospitality sector', path: '/industries/hospitality' },
      { label: 'Hospitality projects', path: '/projects' },
    ],
  },
  {
    id: 'transport',
    keywords: [
      'transport', 'airport', 'airports', 'seaport', 'port', 'logistics',
      'fuel station', 'gas station',
    ],
    title: 'Transport & logistics',
    answer:
      'ISC has delivered systems for airports, seaports, logistics hubs, and fuel stations across the Kingdom — including public-address, CCTV, access control, and fire safety.',
    links: [
      { label: 'Transport sector', path: '/industries/transport' },
      { label: 'Transport projects', path: '/projects' },
    ],
  },
  {
    id: 'industrial',
    keywords: [
      'industrial', 'factory', 'factories', 'manufacturing', 'plant',
      'power plant', 'substation', 'workshop',
    ],
    title: 'Industrial & manufacturing',
    answer:
      'ISC serves industrial clients with manufacturing plants, power plants, substations, and workshops. We specialize in hazardous-area-compliant systems and HCIS-regulated facilities.',
    links: [
      { label: 'Industrial sector', path: '/industries/industrial' },
      { label: 'Industrial projects', path: '/projects' },
    ],
  },
  {
    id: 'residential',
    keywords: [
      'residential', 'villa', 'villas', 'home', 'homes', 'housing',
      'residential complex',
    ],
    title: 'Residential projects',
    answer:
      'ISC delivers smart-home systems, access control, CCTV, and integrated low-current solutions for private villas, residential complexes, and mixed-use developments.',
    links: [
      { label: 'Residential sector', path: '/industries/residential' },
      { label: 'Residential projects', path: '/projects' },
    ],
  },
  {
    id: 'education',
    keywords: [
      'education', 'school', 'schools', 'university', 'universities',
      'campus', 'learning',
    ],
    title: 'Education sector',
    answer:
      'ISC works with schools, universities, and educational campuses — delivering campus-wide security, ICT, AV, and life-safety systems.',
    links: [
      { label: 'Education sector', path: '/industries/education' },
      { label: 'Education projects', path: '/projects' },
    ],
  },

  // ---------- SERVICES ----------
  {
    id: 'services-overview',
    keywords: [
      'services', 'what do you do', 'what does isc do', 'capabilities',
      'offer', 'offerings',
    ],
    title: 'Our services',
    answer:
      'ISC provides end-to-end system integration services: project management & design, vendor selection & procurement, programming & installation, and training & documentation.',
    links: [
      { label: 'All services', path: '/services' },
      { label: 'Our solutions', path: '/solutions' },
    ],
  },
  {
    id: 'solutions-overview',
    keywords: [
      'solutions', 'systems', 'low current', 'low-current', 'integration',
      'integrated systems',
    ],
    title: 'Integrated solutions',
    answer:
      'We design and integrate Low Current Systems (LCS) — security, fire & life safety, ICT, TETRA, AV, and building management — meeting international standards and Saudi regulations.',
    links: [
      { label: 'All solutions', path: '/solutions' },
      { label: 'Products & partners', path: '/products' },
    ],
  },
  {
    id: 'support',
    keywords: [
      'support', 'maintenance', 'mc', 'service request', 'help', 'fix',
      'repair', 'after sales', 'after-sales',
    ],
    title: 'Support & maintenance',
    answer:
      'We offer structured Maintenance Contracts (MC) with 24/7 hotline, rapid response, and preventive care — plus one-off service requests for non-contract clients.',
    links: [
      { label: 'Support page', path: '/support' },
      { label: 'Access MC Portal', path: 'https://e-service.iscksa.com/portal/#/mcportal/login/', external: true },
      { label: 'Technical support', path: '/support' },
    ],
  },

  // ---------- COMPANY ----------
  {
    id: 'about',
    keywords: [
      'about', 'company', 'isc', 'who are you', 'history', 'founded',
      'since 1984', 'background',
    ],
    title: 'About ISC',
    answer:
      'International Security & Communications Co. (ISC) has been a leader in electronic systems integration in Saudi Arabia since 1984 — over 40 years of delivering mission-critical low-current systems.',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Why ISC', path: '/why-isc' },
      { label: 'Leadership', path: '/leadership' },
    ],
  },
  {
    id: 'certifications',
    keywords: [
      'certification', 'certifications', 'certified', 'iso', 'hcis',
      'approval', 'approved', 'compliance', 'quality',
    ],
    title: 'Certifications & compliance',
    answer:
      'ISC is an HCIS-approved contractor (since 2018) and ISO-certified for Quality (9001:2015), Environment (14001:2015), and Occupational Health & Safety (45001:2018).',
    links: [
      { label: 'Compliance & certifications', path: '/compliance' },
      { label: 'Why ISC', path: '/why-isc' },
    ],
  },
  {
    id: 'leadership',
    keywords: [
      'leadership', 'management', 'team', 'executives', 'ceo', 'managers',
    ],
    title: 'Our leadership',
    answer:
      "ISC's leadership team brings decades of accumulated expertise in Saudi Arabia's electronic systems integration sector.",
    links: [
      { label: 'Leadership team', path: '/leadership' },
      { label: 'Careers', path: '/career' },
    ],
  },

  // ---------- PROJECTS & CASE STUDIES ----------
  {
    id: 'projects',
    keywords: [
      'projects', 'portfolio', 'work', 'case study', 'case studies',
      'example', 'reference', 'experience', 'past work', 'completed',
    ],
    title: 'Projects & case studies',
    answer:
      "You can explore ISC's full project portfolio — over 2,000 delivered projects across the Kingdom — filtered by sector, or dive into detailed case studies.",
    links: [
      { label: 'Full project portfolio', path: '/projects' },
      { label: 'Detailed case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'clients',
    keywords: [
      'clients', 'customers', 'who do you work with', 'partners',
      'companies',
    ],
    title: 'Our clients',
    answer:
      "ISC's clients include Saudi Aramco, SABIC, major government ministries, healthcare groups, and industrial operators across the Kingdom.",
    links: [
      { label: 'Our clients', path: '/customers' },
      { label: 'Case studies', path: '/case-studies' },
    ],
  },

  // ---------- GET IN TOUCH ----------
  {
    id: 'contact',
    keywords: [
      'contact', 'reach', 'email', 'phone', 'call', 'address', 'location',
      'where are you', 'get in touch', 'talk to',
    ],
    title: 'Get in touch',
    answer:
      'You can reach ISC at info@iscksa.com or +966-13-8962000. Our headquarters is in Al Khobar, and we serve clients Kingdom-wide.',
    links: [
      { label: 'Contact page', path: '/contact' },
      { label: 'Request a quote', path: '/enquiry' },
    ],
  },
  {
    id: 'quote',
    keywords: [
      'quote', 'quotation', 'pricing', 'price', 'cost', 'enquiry',
      'request a quote', 'rfq', 'tender',
    ],
    title: 'Request a quote',
    answer:
      "To request a quote, please fill out our enquiry form — we'll get back to you within one business day. You can also email info@iscksa.com directly.",
    links: [
      { label: 'Request a quote', path: '/enquiry' },
      { label: 'Contact us', path: '/contact' },
    ],
  },
  {
    id: 'careers',
    keywords: [
      'career', 'careers', 'jobs', 'job', 'hiring', 'vacancies',
      'vacancy', 'apply', 'cv', 'resume', 'employment', 'work for',
    ],
    title: 'Careers at ISC',
    answer:
      'We are always looking for talented engineers and professionals. You can browse open positions or send your CV to jobs@iscksa.com.',
    links: [
      { label: 'Open positions', path: '/career' },
    ],
  },
  {
    id: 'vendors',
    keywords: [
      'vendor', 'vendors', 'supplier', 'suppliers', 'procurement',
      'register as vendor', 'pre-qualification', 'prequalification',
    ],
    title: 'Vendor registration',
    answer:
      'Vendors can register with ISC by submitting the required documents to procurement@iscksa.com. Full instructions are on our Vendor Registration page.',
    links: [
      { label: 'Vendor registration', path: '/vendors' },
    ],
  },

  // ---------- POLICIES ----------
  {
    id: 'privacy',
    keywords: ['privacy', 'gdpr', 'pdpl', 'data protection', 'personal data'],
    title: 'Privacy Policy',
    answer:
      "ISC's Privacy Policy explains how we collect, use, and protect personal data under Saudi Arabia's PDPL.",
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  },
  {
    id: 'anti-bribery',
    keywords: [
      'bribery', 'anti-bribery', 'corruption', 'ethics', 'code of conduct',
    ],
    title: 'Ethics & policies',
    answer:
      'ISC maintains a zero-tolerance approach to bribery and corruption. Our policies are publicly available.',
    links: [
      { label: 'Anti-Bribery Policy', path: '/anti-bribery' },
      { label: 'Code of Conduct', path: '/code-of-conduct' },
    ],
  },

  // ---------- GREETINGS / FALLBACK ----------
  {
    id: 'greeting',
    keywords: [
      'hi', 'hello', 'hey', 'good morning', 'good afternoon',
      'good evening', 'salam', 'assalamualaikum',
    ],
    title: 'Greeting',
    answer:
      "Hello! I'm the ISC Site Assistant. I can help you find information about our services, projects, industries, or how to get in touch. What would you like to know?",
    links: [
      { label: 'Our services', path: '/services' },
      { label: 'Projects', path: '/projects' },
      { label: 'Industries we serve', path: '/industries' },
      { label: 'Contact us', path: '/contact' },
    ],
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thx', 'appreciate', 'helpful'],
    title: 'Thanks',
    answer:
      "You're welcome! Let me know if you need help with anything else.",
    links: [],
  },
    // ---------- CLIENTS ----------
  {
    id: 'clients-overview',
    keywords: [
      'clients', 'client', 'customers', 'customer', 'who do you work with',
      'who are your clients', 'who are your customers', 'list of clients',
      'list of customers', 'trusted by', 'partners', 'key accounts',
    ],
    title: 'Our clients',
    answer:
      "ISC is trusted by the Kingdom's most vital organizations — including Saudi Aramco, SABIC, SABIC affiliates like SATORP and Petro Rabigh, Saudi Electricity Company, Johns Hopkins Aramco Healthcare, Almana Hospitals, and many leading general contractors. Explore the full client roster by sector.",
    links: [
      { label: 'All clients', path: '/customers' },
      { label: 'Oil & Gas clients', path: '/customers' },
      { label: 'Healthcare clients', path: '/customers' },
      { label: 'Case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'clients-petrochemical',
    keywords: [
      'aramco', 'sabic', 'satorp', 'petro rabigh', 'yasref', 'sadara',
      'maaden', 'saipem', 'schlumberger', 'slb', 'halliburton',
      'baker hughes', 'weatherford', 'sepco', 'saudi electricity',
      'sec', 'petrochemical clients', 'oil clients', 'oil and gas clients',
    ],
    title: 'Oil & Gas clients',
    answer:
      "Our Oil & Gas clients include Saudi Aramco, SABIC, SATORP, Petro Rabigh, Yasref, Sadara, Ma'aden, Saudi Electricity Company, and international contractors like Saipem, Schlumberger (SLB), Baker Hughes, Halliburton, and Weatherford.",
    links: [
      { label: 'Oil & Gas clients', path: '/customers' },
      { label: 'Oil & Gas projects', path: '/projects' },
      { label: 'Related case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'clients-healthcare',
    keywords: [
      'hospital clients', 'healthcare clients', 'jhah',
      'johns hopkins', 'almana', 'procare', 'medical clients',
      'hospital customers', 'healthcare customers',
    ],
    title: 'Healthcare clients',
    answer:
      "In healthcare, ISC has delivered systems for Johns Hopkins Aramco Healthcare (JHAH), Almana Hospitals, Procare Hospital, and other medical facilities across the Kingdom.",
    links: [
      { label: 'Healthcare clients', path: '/customers' },
      { label: 'Healthcare sector', path: '/industries/healthcare' },
      { label: 'Healthcare case studies', path: '/case-studies' },
    ],
  },
  {
    id: 'clients-contractors',
    keywords: [
      'general contractors', 'contracting clients', 'contractors',
      'hyundai', 'kalpataru', 'naizak', 'tecnicas reunidas',
      'zamil', 'elsewedy', 'sicim', 'enppi', 'arcon', 'acgc',
      'construction clients', 'epc clients',
    ],
    title: 'General contracting clients',
    answer:
      "ISC partners with leading general contractors and EPC firms — including Hyundai Engineering & Construction, Kalpataru Projects International, Naizak, Técnicas Reunidas, Zamil Group, Elsewedy Electric, SICIM, ENPPI, ARCON, and ACGC.",
    links: [
      { label: 'All clients', path: '/customers' },
      { label: 'Projects portfolio', path: '/projects' },
    ],
  },

  // ---------- PRODUCTS & PARTNERS ----------
  {
    id: 'partners-overview',
    keywords: [
      'partners', 'brands', 'manufacturers', 'vendors', 'technology partners',
      'oem', 'oems', 'authorized dealer', 'authorized distributor',
      'technology solutions', 'product portfolio', 'products',
    ],
    title: 'Products & partners',
    answer:
      'ISC is an authorized dealer and systems integrator for 25+ global technology manufacturers across Security, Fire & Life Safety, ICT, and TETRA. You can browse the full technology portfolio by category.',
    links: [
      { label: 'All partners', path: '/products' },
      { label: 'Security partners', path: '/products' },
      { label: 'TETRA partners', path: '/products' },
    ],
  },
  {
    id: 'partners-security',
    keywords: [
      'security brands', 'security partners', 'cctv brands', 'access control brands',
      'hanwha', 'hirsch', 'boon edam', 'boonedam', 'lenel', 'came', 'perco',
      'vicon', 'milestone', 'video surveillance brands',
    ],
    title: 'Security brands',
    answer:
      'Our security technology partners include Hanwha Vision, HIRSCH, Boon Edam, Lenel S2, CAME, PERco, Vicon, and Milestone Systems — covering video surveillance, access control, turnstiles, and video management.',
    links: [
      { label: 'Security partners', path: '/products' },
      { label: 'Security solutions', path: '/solutions' },
    ],
  },
  {
    id: 'partners-fire',
    keywords: [
      'fire brands', 'fire partners', 'fire alarm brands', 'edwards',
      'life safety brands', 'fire detection brands',
    ],
    title: 'Fire & life safety brands',
    answer:
      'ISC partners with Edwards for fire alarm systems, mass notification, and life safety panels — deployed across critical facilities Kingdom-wide.',
    links: [
      { label: 'Fire & Safety partners', path: '/products' },
      { label: 'Fire solutions', path: '/solutions' },
    ],
  },
  {
    id: 'partners-ict',
    keywords: [
      'ict brands', 'ict partners', 'network brands', 'cisco', 'nokia',
      'huawei', 'commscope', 'belden', 'biamp', 'atlasied', 'atlas ied',
      'hpe aruba', 'aruba', 'rauland', 'sapling', 'av brands',
      'network infrastructure brands', 'nurse call brands',
    ],
    title: 'ICT brands',
    answer:
      'Our ICT partners include Cisco, HPE Aruba, Huawei, CommScope, Belden, Biamp, AtlasIED, Rauland (nurse call), and Sapling (synchronized clocks) — covering enterprise networking, structured cabling, AV, and clinical communications.',
    links: [
      { label: 'ICT partners', path: '/products' },
      { label: 'ICT solutions', path: '/solutions' },
    ],
  },
  {
    id: 'partners-tetra',
    keywords: [
      'tetra brands', 'tetra partners', 'radio brands', 'airbus',
      'motorola', 'amphenol', 'andrew', 'maven wireless', 'pbe axell',
      'rfs', 'critical communications brands', 'radio network brands',
    ],
    title: 'TETRA & critical comms brands',
    answer:
      'For TETRA and critical communications, ISC partners with Airbus, Motorola Solutions, Amphenol Procom, Andrew (CommScope), Maven Wireless, PBE Axell, and RFS — covering TETRA networks, DAS, antennas, and hybrid TETRA+LTE.',
    links: [
      { label: 'TETRA partners', path: '/products' },
      { label: 'TETRA solutions', path: '/solutions' },
    ],
  },
];

/**
 * Suggested questions shown as chips under the welcome message.
 */
export const suggestedQuestions = [
  'Do you have petrochemical experience?',
  'Who are your main clients?',
  'Show me your technology partners',
  'What certifications do you hold?',
  'How do I request a quote?',
];