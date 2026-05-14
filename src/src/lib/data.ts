// ─────────────────────────────────────────────────────────────────
// src/lib/data.ts
// ✏️  EDIT THIS FILE WITH YOUR OWN INFO
// This is the single source of truth for all portfolio content
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "YOUR_NAME",           // ← Change this
  title: "DESIGN_ARCHITECT",   // ← Your brand/handle
  role: "Full-Stack Engineer & UI Architect",
  tagline: "Engineering full-stack systems at the intersection of Software, Data, and Design.",
  bio: "Specializing in building robust, scalable software and data-driven visualizations. Focused on clean architecture and high-performance user experiences.",
  location: "Remote / London / Tokyo", // ← Your location
  email: "you@email.com",              // ← Your email
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  availabilityNote: "Open for strategic partnerships in WebGL, React Architectures, and UX Engineering.",
  copyright: "© 2024 ENGINEERED FOR PRECISION. ALL RIGHTS RESERVED.",
};

// ─── Projects ─────────────────────────────────────────────────────
export type ProjectCategory = "Software" | "Design" | "Data";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  category: ProjectCategory;
  tags: string[];
  image: string;          // Path from /public or external URL
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "lifelink",
    title: "LifeLink Healthcare App",
    subtitle: "Health-Tech Ecosystem",
    description: "Comprehensive patient management and real-time health monitoring platform.",
    problem: "Inefficient blood donor tracking led to critical shortages during peak hospital demand periods.",
    solution: "Real-time inventory management paired with a gamified donor mobile experience and GPS alerts.",
    outcome: "40% increase in repeat donations and a 15% reduction in emergency response times across 12 hospitals.",
    category: "Software",
    tags: ["Flutter", "Node.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    githubUrl: "https://github.com/yourusername/lifelink",
    featured: true,
  },
  {
    id: "apex-athletics",
    title: "Apex Athletics Identity",
    subtitle: "Brand Strategy",
    description: "A complete overhaul of a high-performance sports brand.",
    problem: "Outdated visual language failing to resonate with modern eco-conscious athletes.",
    solution: "Monochrome palette with technical typography and zero-waste packaging design.",
    outcome: "Brand awareness increased 60% in target demographic within 6 months.",
    category: "Design",
    tags: ["Branding", "Print"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    featured: true,
  },
  {
    id: "sri-lanka-hiking",
    title: "Sri Lanka Hiking Hub",
    subtitle: "Data / Web Platform",
    description: "Nature-first progressive web app for trail discovery in Sri Lanka.",
    problem: "Explorers lacked accurate, real-time terrain data and safety updates for remote hiking corridors in the central highlands.",
    solution: "A nature-first progressive web app integrating live satellite terrain mapping and community-driven trail status reports.",
    outcome: "100k+ monthly active users and recognized as the primary safety resource by local tourism authorities.",
    category: "Data",
    tags: ["UI/UX", "Static Web"],
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    liveUrl: "https://yourproject.com",
    githubUrl: "https://github.com/yourusername/hiking-hub",
    featured: true,
  },
  {
    id: "bank-insights",
    title: "BANK_INSIGHTS",
    subtitle: "Financial Dashboard",
    description: "Professional Power BI Dashboard for financial data visualization and DAX optimization.",
    problem: "Legacy reporting tools causing 3-hour delays in financial decision-making.",
    solution: "Custom Power BI dashboard with optimized DAX queries and real-time data refresh.",
    outcome: "Reporting time reduced from 3 hours to 8 minutes.",
    category: "Data",
    tags: ["Data Analysis", "DAX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
];

// ─── Skills ───────────────────────────────────────────────────────
export const skills = {
  frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Flutter"],
  backend: ["Spring Boot", "Node.js", "PostgreSQL", "GraphQL", "REST APIs"],
  data: ["Power BI", "DAX", "Python", "Pandas", "Firebase"],
  design: ["Figma", "Three.js", "Adobe Suite", "Framer", "UI/UX"],
  devops: ["Docker", "AWS", "Git", "CI/CD", "Vercel"],
};

// ─── Education ────────────────────────────────────────────────────
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    degree: "M.S. Software Engineering",   // ← Change to your degree
    institution: "Your University",         // ← Change to your university
    period: "2020 — 2022",
    description: "Focused on Distributed Systems and Human-Computer Interaction. Research involved the optimization of real-time rendering pipelines for web applications.",
  },
  {
    degree: "B.Sc. Information Technology",
    institution: "Your University",
    period: "2016 — 2020",
    description: "A dual-disciplinary approach combining software engineering fundamentals with UI/UX design principles and creative coding.",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect",
  // Add yours here
];

export const languages = [
  "English",
  "Sinhala",
  // Add yours
];

// ─── Navigation ───────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
