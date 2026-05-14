// ─────────────────────────────────────────────────────────────────
// src/lib/data.ts
// ✏️  EDIT THIS FILE WITH YOUR OWN INFO
// This is the single source of truth for all portfolio content
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Kalpa Mihiranga",           // ← Change this
  title: "Kalpa Mihiranga",   // ← Your brand/handle
  role: "IoT • Full-Stack • Mobile & Desktop App Developer",
  tagline: "Engineering full-stack systems at the intersection of Software, Data, and Design.",
  bio: "Specializing in distributed systems that bridge the physical and digital. Building robust, data-driven solutions across IoT, Web, Mobile, and Desktop environments.",
  location: ":On-site :Hybrid :Remote", // ← Your location
  email: "kalpamihiranga957@gmail.com",              // ← Your email
  github: "https://github.com/Kalpa-Mihiranga",
  linkedin: "https://linkedin.com/in/kalpa-mihiranga-496681319/",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  availabilityNote: "Building connected digital ecosystems. Open for strategic partnerships in WebGL, React Architectures, and UX Engineering across all platforms—from IoT to Desktop",
  copyright: "© 2024 ENGINEERED FOR PRECISION. ALL RIGHTS RESERVED.",
};

// ─── Projects ─────────────────────────────────────────────────────
export type ProjectCategory = "Software" | "IOT" | "Data";

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
    title: "LifeLink Healthcare Platform",
    subtitle: "Smart Blood Donation & Emergency Care System",
    description: "An integrated healthcare platform connecting hospitals, blood donors, and emergency responders through real-time tracking and intelligent health services.",
    problem:"Hospitals struggled with delayed blood donor coordination, inefficient emergency communication, and limited real-time visibility into blood inventory during urgent situations.",
    solution:"Developed a cross-platform healthcare ecosystem featuring live blood inventory tracking, GPS-based donor alerts, emergency request management, and a donor-friendly mobile experience with instant notifications.",
    outcome:"Improved emergency blood request response efficiency by 35%, increased active donor participation through real-time engagement features, and streamlined coordination across multiple healthcare centers.",
    category: "Software",
    tags: ["Flutter", "Node.js", "Dart", "MongoDB", "REST API"],
    image: "lifelink.png",
    liveUrl: "https://www.linkedin.com/in/kalpa-mihiranga-496681319/details/projects/560572710/multiple-media-viewer/?profileId=ACoAAFC5KXIBGsoNgAgtjhdr7SDy0_hejM00gd8&treasuryMediaId=1778678904190",
    githubUrl: "https://github.com/Kalpa-Mihiranga/Life-Link_Mobile-App_Web-Site",
    featured: true,
  },
  {
    id: "harbour-system",
    title: "Smart Harbour System",
    subtitle: "IoT-Based Maritime Monitoring Platform",
    description: "An intelligent harbour management platform that uses IoT devices, cloud connectivity, and real-time analytics to monitor environmental conditions, vessel activities, and harbour operations efficiently.",
    problem: "Traditional harbour operations lacked real-time environmental monitoring, centralized operational visibility, and automated risk detection, leading to inefficiencies and delayed responses to critical situations.",
    solution: "Developed a scalable IoT-powered system integrating smart sensors, cloud-based synchronization, automated alerts, and an interactive analytics dashboard to enable real-time harbour monitoring and data-driven operational management.",
    outcome: "Improved harbour safety, operational efficiency, and environmental monitoring accuracy through real-time data tracking, intelligent alerts, and centralized smart harbour management capabilities.",
    category: "IOT",
    tags: ["C++", "TypeScript", "Sensors", "IoT", "ESP32", "ESP32Camera", "Arduino", "Cloud Computing"],
    image: "harbour.jpeg",
    githubUrl: "https://github.com/Kalpa-Mihiranga/Smart-Harbour-System_IOT",
    featured: true,
  },
  {
    id: "citf-charity-platform",
    title: "CITF Charity Platform",
    subtitle: "Web / Donation Management System",
    description: "Modern charity and fundraising platform developed for community impact initiatives in Sri Lanka.",
    problem: "Traditional donation and beneficiary coordination processes lacked transparency, digital accessibility, and efficient communication channels.",
    solution: "Designed and developed a responsive web platform enabling streamlined donation management, campaign promotion, volunteer coordination, and public engagement.",
    outcome: "Improved donor accessibility, strengthened campaign visibility, and enhanced operational efficiency for charity-driven community programs.",
    category: "Software",
    tags: ["HTML", "JavaScript", "Docker"],
    image: "citf.png",
    liveUrl: "https://www.citf.org.lk/",
    githubUrl: "https://github.com/Kalpa-Mihiranga/citfweb",
    featured: true,
  },
  {
    id: "bank-insights",
    title: "Personal Finance Management System",
    subtitle: "Smart Financial Tracking & Budgeting Platform",
    description: "A full-stack financial management application designed to help users monitor income, expenses, savings, and budgeting through real-time analytics and an intuitive dashboard experience.",
    problem: "Many individuals struggle to manage daily expenses, monitor financial habits, and maintain savings goals due to fragmented tracking methods and lack of financial insights.",
    solution: "Developed a centralized finance platform featuring transaction tracking, budget monitoring, recurring payment automation, and interactive financial analytics with secure multi-account management.",
    outcome: "Enhanced financial visibility and budgeting efficiency by providing real-time spending insights, improving expense tracking accuracy, and simplifying personal financial planning through automation and analytics.",
    category: "Data",
    tags: ["React", "JavaScript", "SQLite", "Python", "HTML / css"],
    image: "finance.png",
    githubUrl: "https://github.com/Kalpa-Mihiranga/Finance-Management",
    featured: false,
  },
  {
    id: "study-planner",
    title: "Smart Study Planner",
    subtitle: "AI-Powered Academic Scheduling System",
    description: "An intelligent mobile study planning application that generates optimized study schedules using priority-based algorithms and real-time progress tracking.",
    problem: "Students often struggle with poor time management, uneven subject prioritization, and ineffective study planning during exam periods.",
    solution: "Developed a smart scheduling system using a Max-Heap Priority Queue and Greedy algorithm to dynamically prioritize subjects based on exam deadlines, difficulty levels, and remaining study hours while supporting adaptive rescheduling.",
    outcome: "Improved study efficiency and time management by providing personalized schedules, real-time progress monitoring, and automated task prioritization for better academic performance.",
    category: "Data",
    tags: ["React Native", "TypeScript", "Spring Boot", "Java", "KOtlin", "Ruby"],
    image: "studyplan.jpg",
    githubUrl: "https://github.com/Kalpa-Mihiranga/StudyPlanner",
    liveUrl: "https://www.linkedin.com/in/kalpa-mihiranga-496681319/details/projects/561178934/multiple-media-viewer/?profileId=ACoAAFC5KXIBGsoNgAgtjhdr7SDy0_hejM00gd8&treasuryMediaId=1778679324641",
    featured: false,
  },
   {
    id: "pizza-mania",
    title: "Pizza Mania - Mobile App",
    subtitle: "Restaurant / Ordering Platform",
    description: "Modern pizza ordering and restaurant management platform focused on fast digital customer experiences.",
    problem: "Small restaurants struggled with inefficient order handling, limited online presence, and disconnected customer management workflows.",
    solution: "Developed a responsive web-based ordering and management system featuring digital menus, order tracking, customer management, and streamlined restaurant operations.",
    outcome: "Enhanced operational efficiency, improved customer engagement, and delivered a faster, more reliable online food ordering experience.",
    category: "Software",
    tags: ["Payment Gateway", "Google Maps API", "Java", "SQLite"],
    image: "pizza.png",
    liveUrl: "https://www.linkedin.com/in/kalpa-mihiranga-496681319/details/projects/563646143/multiple-media-viewer/?profileId=ACoAAFC5KXIBGsoNgAgtjhdr7SDy0_hejM00gd8&treasuryMediaId=1778680107902",
    githubUrl: "https://github.com/Kalpa-Mihiranga/MADCW_Pizza-Mania",
    featured: true,
  },
];

// ─── Skills ───────────────────────────────────────────────────────
export const skills = {
  frontend: ["React.js", "JavaScript", "Next.js", "Tailwind CSS", "TypeScript", "Flutter"],
  backend: ["Spring Boot", "Node.js", "Java", "PHP", "REST APIs", "C#", "Python"],
  data: ["Firebase", "MongoDB", "MySQL", "SQLite", "Docker"],
  design: ["Figma", "draw.io", "Tinkercad"],
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
    degree: "BSc. Software Engineering",   // ← Change to your degree
    institution: "National Institute of Business Management",         // ← Change to your university
    period: "2024 — Present",
    description: "Focused on Software Engineering, Full-Stack Development, and Scalable Web Applications. Research involved the optimization of modern web systems, API performance, and user-centered software solutions.",
  },
  {
    degree: "GCE Ordinary Level Exam",
    institution: "Mahinda Rajapaksha College / Homagama",
    period: "2022",
    description: "A balanced academic foundation combining Information and Communication Technology, Mathematics, and analytical problem-solving skills with creativity and technical understanding.",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "ORACLE Academy Certified Oracle Cloude & Databases"
  // Add yours here
];

export const languages = [
  "English"
  
  // Add yours
];

// ─── Navigation ───────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
