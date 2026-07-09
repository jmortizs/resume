export type IconName = "location" | "email" | "linkedin" | "github" | "external";

export interface ContactLink {
  icon: IconName;
  label: string;
  href?: string;
}

export interface Role {
  title: string;
  period: string;
  achievements: string[];
}

export interface ExperienceEntry {
  company: string;
  roles: Role[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export interface CredentialEntry {
  title: string;
  href?: string;
  issuer: string;
  period: string;
}

export interface PublicationEntry {
  title: string;
  href?: string;
  description: string;
  venue: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  contact: ContactLink[];
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: CredentialEntry[];
  publications: PublicationEntry[];
  skills: SkillCategory[];
  languages: LanguageEntry[];
}

export const resume: ResumeData = {
  name: "Juan Manuel Ortiz Suarez",
  tagline: "Python Development | Data Science | Agentic AI | Machine Learning",
  contact: [
    { icon: "location", label: "Colombia" },
    { icon: "email", label: "juanmnl.ortiz@gmail.com", href: "mailto:juanmnl.ortiz@gmail.com" },
    { icon: "linkedin", label: "jmortizsuarez", href: "https://www.linkedin.com/in/jmortizsuarez/" },
    { icon: "github", label: "jmortizs", href: "https://github.com/jmortizs" },
  ],
  summary:
    "Innovative AI Engineer with 9 years of experience leveraging machine learning and data science to optimize business processes. Currently working within the Fintrace fintech group at Sistemas y Computadores S.A., developing advanced financial analysis features powered by artificial intelligence, autonomous agents, and large language models (LLMs). Proven expertise in end-to-end AI project development and driving system improvements that deliver measurable impact. Passionate about innovation, continuous learning, and transforming complex financial data into actionable insights.",
  experience: [
    {
      company: "Sistemas Y Computadores S.A.",
      roles: [
        {
          title: "Artificial Intelligence Engineer",
          period: "2025 - Present",
          achievements: [
            "Develop and maintain advanced financial analysis features powered by artificial intelligence, autonomous agents, and large language models (LLMs).",
          ],
        },
        {
          title: "Technical Team Lead for Econometrics",
          period: "2022 - 2025",
          achievements: [
            "Analyze and optimize business processes, leading to increased efficiency and cost savings.",
            "Manage ETL processes and develop advanced data visualizations to support data-driven decision-making.",
            "Lead the development of data science and machine learning solutions to enhance core business operations.",
            "Implement large language models (LLMs) to build an intelligent assistant, significantly improving internal information search and analysis.",
          ],
        },
        {
          title: "Component Innovation Engineer",
          period: "2017 - 2022",
          achievements: [
            "Enhanced the quality of scanned document images, leading to improvement in processing accuracy.",
            "Optimized and automated document management processes, significantly reducing manual effort.",
            "Developed machine learning models for automatic classification and data extraction, streamlining operations and reducing errors.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Industrial de Santander",
      degree: "Software engineer",
      period: "2010 - 2016",
    },
  ],
  certifications: [
    {
      title: "Machine Learning Engineer",
      href: "https://platzi.com/p/jmortiz/ruta/7008-mlengineer/diploma/detalle/",
      issuer: "Platzi",
      period: "2022",
    },
    {
      title: "Data Science and Artificial Intelligence",
      href: "https://platzi.com/p/jmortiz/learning-path/35-datos/diploma/detalle/",
      issuer: "Platzi",
      period: "2021",
    },
  ],
  publications: [
    {
      title: "Exploring Alzheimer's anatomical patterns through convolutional networks",
      href: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10160/101600Z/Exploring-Alzheimers-anatomical-patterns-through-convolutional-networks/10.1117/12.2256840.short",
      description:
        "Using Convolutional Neural Networks (CNNs) to explore and identify the brain regions most contributing to Alzheimer's disease in two-dimensional images extracted from structural magnetic resonance (MRI) images.",
      venue: "12th International Symposium on Medical Information Processing and Analysis",
      period: "2017",
    },
  ],
  skills: [
    {
      name: "AI & Data",
      skills: ["Python", "Data Science", "Machine Learning", "Agentic AI"],
    },
    {
      name: "Data Engineering",
      skills: ["SQL", "ETL", "Power BI"],
    },
    {
      name: "Tools",
      skills: ["Claude Code", "Cursor", "Docker", "Git"],
    },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};
