// 1. IMPORT ALL LOGOS
import aramcoLogo from '../assets/partner-logos/aramco.png';
import satorpLogo from '../assets/partner-logos/satorp.png';
import petrorabighLogo from '../assets/partner-logos/petrorabigh.png';
import sabicLogo from '../assets/partner-logos/sabic.png';
import sepcoLogo from '../assets/partner-logos/sepco.png';
import slbLogo from '../assets/partner-logos/slb.png';
import bakerhughesLogo from '../assets/partner-logos/bakerhughes.png';
import weatherfordLogo from '../assets/partner-logos/weatherford.png';
import halliburtonLogo from '../assets/partner-logos/halliburton.png';
import yasrefLogo from '../assets/partner-logos/yasref.png';
import saipemLogo from '../assets/partner-logos/saipem.png';
import sadaraLogo from '../assets/partner-logos/sadara.png';
import maadenLogo from '../assets/partner-logos/maaden.png';
import secLogo from '../assets/partner-logos/sec.png';
import jhahLogo from '../assets/partner-logos/jhah.png';
import almanaLogo from '../assets/partner-logos/almana.png';
import procareLogo from '../assets/partner-logos/procare.png';
import abrarLogo from '../assets/partner-logos/abrar.png';
import aycLogo from '../assets/partner-logos/ayc.png';
import alyamiLogo from '../assets/partner-logos/alyami.png';
import alkanarLogo from '../assets/partner-logos/alkanar.png';
import acgcLogo from '../assets/partner-logos/acgc.png';
import arconLogo from '../assets/partner-logos/arcon.png';
import commtelLogo from '../assets/partner-logos/commtel.png';
import elsewedyLogo from '../assets/partner-logos/elsewedy.png';
import enppiLogo from '../assets/partner-logos/enppi.png';
import gdmsLogo from '../assets/partner-logos/gdms.png';
import gasvectorLogo from '../assets/partner-logos/gasvector.png';
import hyundaiLogo from '../assets/partner-logos/hyundai.png';
import ikkLogo from '../assets/partner-logos/ikk.png';
import kalpataruLogo from '../assets/partner-logos/kalpataru.png';
import metroLogo from '../assets/partner-logos/metro.png';
import lstmeLogo from '../assets/partner-logos/lstme.png';
import naizakLogo from '../assets/partner-logos/naizak.png';
import nesicLogo from '../assets/partner-logos/nesic.png';
import wejhatLogo from '../assets/partner-logos/wejhat.png';
import sicimLogo from '../assets/partner-logos/sicim.png';
import tecnicasLogo from '../assets/partner-logos/tecnicas.png';
import zamilLogo from '../assets/partner-logos/zamil.png';

// 2. EXPORT DATA ARRAY
export const customerData = [
  { id: 1, name: "Saudi Aramco", logo: aramcoLogo, category: "Petrochemical", url: "https://www.aramco.com/en" },
  { id: 2, name: "SATORP", logo: satorpLogo, category: "Petrochemical", url: "https://www.satorp.com/" },
  { id: 3, name: "Petro Rabigh", logo: petrorabighLogo, category: "Petrochemical", url: "https://www.petrorabigh.com/en" },
  { id: 4, name: "SABIC", logo: sabicLogo, category: "Petrochemical", url: "https://www.sabic.com/en" },
  { id: 5, name: "SEPCO", logo: sepcoLogo, category: "Petrochemical", url: "https://en.sepco.net.cn/" },
  { id: 6, name: "Schlumberger", logo: slbLogo, category: "Petrochemical", url: "https://www.slb.com/about/who-we-are/our-global-presence/slb-saudi-arabia" },
  { id: 7, name: "Baker Hughes", logo: bakerhughesLogo, category: "Petrochemical", url: "https://www.bakerhughes.com/" },
  { id: 8, name: "Weatherford", logo: weatherfordLogo, category: "Petrochemical", url: "https://www.weatherford.com/geozone/saudi-arabia/home/" },
  { id: 9, name: "Halliburton", logo: halliburtonLogo, category: "Petrochemical", url: "https://www.halliburton.com/" },
  { id: 10, name: "Yasref", logo: yasrefLogo, category: "Petrochemical", url: "https://www.yasref.com/en-us/Pages/index.aspx" },
  { id: 11, name: "Saipem", logo: saipemLogo, category: "Petrochemical", url: "https://www.saipem.com/en" },
  { id: 12, name: "Sadara", logo: sadaraLogo, category: "Petrochemical", url: "https://www.sadara.com/" },
  { id: 13, name: "Maaden", logo: maadenLogo, category: "Petrochemical", url: "https://www.maaden.com/" },
  { id: 14, name: "Saudi Electricity Company", logo: secLogo, category: "Petrochemical", url: "https://www.se.com.sa/en" },
  { id: 15, name: "Johns Hopkins Aramco", logo: jhahLogo, category: "Hospital", url: "https://www.jhah.com/en/" },
  { id: 16, name: "Almana Hospitals", logo: almanaLogo, category: "Hospital", url: "https://www.almanahospital.com.sa/" },
  { id: 17, name: "Procare Hospital", logo: procareLogo, category: "Hospital", url: "https://procare.com.sa/en/" },
  { id: 18, name: "Abrar Communications Co", logo: abrarLogo, category: "General", url: "https://abrars.co/" },
  { id: 19, name: "Al Yamama", logo: aycLogo, category: "General", url: "https://yc.com.sa/en" },
  { id: 20, name: "Ahmed Yahya Al-Yami", logo: alyamiLogo, category: "General", url: "https://www.ayalyamitrading.com/" },
  { id: 21, name: "Al Kanar", logo: alkanarLogo, category: "General", url: "https://www.alkanar.com/" },
  { id: 22, name: "ACGC", logo: acgcLogo, category: "General", url: "https://acgc.com.sa/" },
  { id: 23, name: "ARCON", logo: arconLogo, category: "General", url: "https://www.arconksa.com/" },
  { id: 24, name: "Commtel", logo: commtelLogo, category: "General", url: "https://commtelnetworks.com/" },
  { id: 25, name: "Elsewedy Electric", logo: elsewedyLogo, category: "General", url: "https://elsewedyelectric.com/en/" },
  { id: 26, name: "Enppi", logo: enppiLogo, category: "General", url: "https://www.enppi.com/" },
  { id: 27, name: "General Dynamic Mission Systems", logo: gdmsLogo, category: "General", url: "https://gdmissionsystems.com/" },
  { id: 28, name: "Gas Vector Saudi Arabia", logo: gasvectorLogo, category: "General", url: "https://gasvector.com.sa/" },
  { id: 29, name: "Hyundai Engineering & Construction", logo: hyundaiLogo, category: "General", url: "https://en.hdec.kr/en/main.aspx" },
  { id: 30, name: "Isam Khairi Kabbani Group", logo: ikkLogo, category: "General", url: "https://ikkgroup.com/main/" },
  { id: 31, name: "Kalpataru Projects International Limited", logo: kalpataruLogo, category: "General", url: "https://kalpataruprojects.com/" },
  { id: 32, name: "Metro Co. Ltd.", logo: metroLogo, category: "General", url: "https://metro-sa.com/" },
  { id: 33, name: "LS telcom", logo: lstmeLogo, category: "General", url: "https://www.lstelcom.com/en/home/" },
  { id: 34, name: "Naizak Global Engineering Systems", logo: naizakLogo, category: "General", url: "https://naizak.com/" },
  { id: 35, name: "NESIC Saudi Arabia", logo: nesicLogo, category: "General", url: "https://nesicsa.com/" },
  { id: 36, name: "Projects Destinations Construction Co.", logo: wejhatLogo, category: "General", url: "https://wejhat.sa/" },
  { id: 37, name: "SICIM", logo: sicimLogo, category: "General", url: "https://www.sicim.eu/en/" },
  { id: 38, name: "Tecnicas Reunidas", logo: tecnicasLogo, category: "General", url: "https://www.tecnicasreunidas.es/" },
  { id: 39, name: "Zamil Group", logo: zamilLogo, category: "General", url: "https://zamil.com/?lang=en" },
];