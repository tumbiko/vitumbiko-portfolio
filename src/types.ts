export interface Skill {
  name: string;
  level: number; // percentage (0-100)
  category: "Languages" | "Frameworks & Libraries" | "Tools & Databases" | "Hardware & IoT";
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Software" | "Data Analysis" | "IoT" | "Web";
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  detailedDescription?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Stat {
  id: string;
  value: string;
  number: number;
  label: string;
  suffix?: string;
}
