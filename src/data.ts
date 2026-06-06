import { Skill, Project, Experience, Education, Certification, Stat } from "./types";
import profileImg from "./assets/images/vitumbiko_profile_new.jpg";
import garbageImg from "./assets/images/garbage_monitoring_1780345218285.png";
import clinicImg from "./assets/images/clinic_dashboard_1780345237310.png";

export const personalInfo = {
  name: "Vitumbiko Shaba",
  title: "Software Developer, Data Analyst & IoT Specialist",
  location: "Lilongwe, Malawi",
  email: "vitumbiko2121@gmail.com",
  phone: "+265 992 047 025",
  bio: "A highly analytical and driven ICT professional with a passion for designing intelligent software systems, modeling data insights, and engineering internet-of-things (IoT) architectures. Bridging the gap between hardware and software to offer solutions optimized for Malawian and international development contexts.",
  github: "https://github.com/tumbiko",
  linkedin: "https://linkedin.com/in/vitumbiko-shaba",
  twitter: "https://twitter.com/@brozoned47",
  profileImage: profileImg
};

export const stats: Stat[] = [
  { id: "s1", value: "4+", number: 4, label: "Years Experience", suffix: "+" },
  { id: "s2", value: "15+", number: 15, label: "Projects Completed", suffix: "+" },
  { id: "s3", value: "8+", number: 8, label: "IoT Deployments", suffix: "+" },
  { id: "s4", value: "98%", number: 98, label: "Client Satisfaction", suffix: "%" }
];

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 90, category: "Languages" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "PHP", level: 75, category: "Languages" },

  // Frameworks
  { name: "React", level: 88, category: "Frameworks & Libraries" },
  { name: "Next.js", level: 90, category: "Frameworks & Libraries" },
  { name: "Node.js", level: 85, category: "Frameworks & Libraries" },
  { name: "Tailwind CSS", level: 92, category: "Frameworks & Libraries" },

  // Tools & DBs
  { name: "Firebase", level: 85, category: "Tools & Databases" },
  { name: "SQL (PostgreSQL/MySQL)", level: 82, category: "Tools & Databases" },
  { name: "Git & GitHub", level: 95, category: "Tools & Databases" },
  { name: "D3.js Data Viz", level: 78, category: "Tools & Databases" },

  // Hardware & IoT
  { name: "ESP32", level: 90, category: "Hardware & IoT" },
  { name: "Arduino Electronics", level: 88, category: "Hardware & IoT" },
  { name: "MQTT & IoT Protocols", level: 80, category: "Hardware & IoT" },
  { name: "Sensors & GPS Integration", level: 85, category: "Hardware & IoT" }
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Smart Garbage Monitoring System",
    description: "An advanced IoT-driven waste management system designed to optimize disposal routines and schedule automated collections.",
    category: "IoT",
    technologies: ["ESP32", "GPS Module", "PHP", "SQL Database", "Vite React", "Leaflet Maps"],
    imageUrl: garbageImg,
    featured: true,
    githubUrl: "https://github.com/tumbiko/Smart-Garbage-Monitoring-System/tree/master",
    demoUrl: "https://www.google.com/search?q=Smart+Garbage+Monitoring+System+Vitumbiko+Shaba+Blantyre",
    detailedDescription: "This flagship project tackles waste management in metropolitan clusters by mounting ultrasonic sensors and GPS trackers to communal bins. When fill thresholds are violated, data is dispatched over cellular link to a central SQL database. An interactive React admin portal maps current volume densities, computes dynamic routes for sanitation vehicles using heuristic pathing, and publishes analytical fill-rate forecasts using lightweight regression curves."
  },
  {
    id: "p2",
    title: "Chalo Care Clinic Portal",
    description: "A secure patient management ecosystem with real-time consultation booking channels, digital medical charts, and instant notifications.",
    category: "Web",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Firebase Auth"],
    imageUrl: clinicImg,
    githubUrl: "https://github.com/vitumbiko21/chalo-care",
    demoUrl: "https://www.google.com/search?q=Chalo+Care+Clinic+Portal+Malawi",
    detailedDescription: "Designed to expand digital access to medical professionals, the Chalo Care Clinic Portal manages online schedules, records persistent medical histories encrypted at rest, and streamlines remote doctor-patient checkups. It reduces average clinic waiting delays by up to 60% through an advanced state-synchronized queueing engine."
  },
  {
    id: "p3",
    title: "Pluto Shopping Store",
    description: "A high-fidelity e-commerce store with secure automated checkouts, server-side data models, and content management.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth", "Sanity CMS", "PostgreSQL (Neon)", "Paychangu Gateway"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/tumbiko/Pluto-shopping-store",
    demoUrl: "https://pluto-shopping-store.vercel.app/",
    detailedDescription: "A premium feature-rich e-commerce store engineered with Next.js, Tailwind CSS, and TypeScript. Integrated with Clerk Authentication for airtight user sessions, PostgreSQL (Neon) for highly indexable product states and transaction record tables, and Sanity CMS for dynamic storefront inventory management. Payments are fully live via custom Paychangu integration supporting Airtel Money and TNM Mpamba. Key features include product search, categoric filters, persistent carts, real-time order tracking, and a client dashboard."
  },
  {
    id: "p4",
    title: "World News Center",
    description: "A global news aggregation platform where users can access and read breaking news from around the world in real time.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL (Neon)", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    featured: false,
    githubUrl: "https://github.com/tumbiko/World-News-Center",
    demoUrl: "https://world-news-center.vercel.app/",
    detailedDescription: "A real-time worldwide news aggregation system gathering feeds across global publications and persisting bookmarks, customized categories, and reading telemetry using PostgreSQL powered by Neon. Features multi-topic exploration, quick text searching, break-news highlighting, responsive layouts, and reading telemetry to ensure a clean, seamless, reader-first media experience."
  }
];

export const experiences: Experience[] = [
  {
    id: "e1",
    role: "Lead Data Analyst & Software Developer",
    company: "Wokolako",
    location: "Remote",
    period: "August 2024 - Present",
    description: [
      "Spearhead full-stack software development and data analytical models to drive internal and external decision cycles.",
      "Audit pipeline architectures, standardise query processes, and design intuitive, high-performance dashboards with tailored client KPI charts.",
      "Drive product releases, manage PostgreSQL database tables, and coordinate product sprints for local platforms."
    ],
    skills: ["React", "TypeScript", "Node.js", "SQL Database", "Python", "Data Analysis"]
  },
  {
    id: "e_attachment",
    role: "IT Intern",
    company: "University of Livingstonia, Kaning'ina Campus",
    location: "Mzuzu, Malawi (On-site)",
    period: "1 June - 1 August 2024",
    description: [
      "Maintained and optimized the campus local area network (LAN) infrastructure, ensuring stable connectivity for students, labs, and faculty.",
      "Diagnosed, repaired, and performed hardware troubleshooting and servicing on laboratory physical systems and workstations.",
      "Assisted staff and students on campus with software configuration, print network setups, and operating system diagnostics."
    ],
    skills: ["Networking", "Hardware Maintenance", "Systems Troubleshooting", "IT Support"]
  }
];

export const education: Education[] = [
  {
    id: "ed1",
    degree: "Bachelor's Degree in Computer Engineering",
    school: "University of Livingstonia, Laws Campus",
    location: "Rumphi, Malawi",
    period: "2021 - 2025",
    achievements: [
      "Graduated in 2025",
      "Undergraduate research focused on the Smart Garbage Monitoring System"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "c1",
    title: "Google Professional Data Analyst Certificate",
    issuer: "Google Career Academy (Coursera)",
    date: "May 2023",
    credentialUrl: "https://coursera.org/verify/professional-analysis"
  },
  {
    id: "c2",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "July 2022",
    credentialUrl: "#"
  },
  {
    id: "c3",
    title: "Advanced IoT Architecture & Protocols Design",
    issuer: "IEEE Malawian Section Summit",
    date: "November 2022",
    credentialUrl: "#"
  },
  {
    id: "c4",
    title: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp Organization",
    date: "January 2021",
    credentialUrl: "https://freecodecamp.org/certification/vitumbiko"
  }
];
