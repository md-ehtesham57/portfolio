export interface Project {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;
  tag: string;
  type: "solo" | "client";
  thumbnail?: string;
  youtubeVideoId?: string;
  architecture: {
    summary: string;
    diagram?: string;
    sections: { label: string; content: string }[];
  };
  features: string[];
  challenges: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  // ── CLIENT / INTERNSHIP ──────────────────────────────────────
  {
    slug: "xubru-ai",
    num: "01",
    title: "Xubru.AI",
    subtitle: "AI-Powered Business Intelligence Platform",
    type: "client",
    thumbnail: "/thumbnails/xubru.png",
    description:
      "Contributed to a production AI analytics platform — debugged critical OAuth login issues, coupon system bugs, and conducted a full security audit covering authentication flows and API hardening.",
    longDescription:
      "Xubru.AI is a business intelligence platform that enables teams to upload data and instantly generate dashboards, KPI templates, AI-powered summaries, and deep analytics insights. As an intern, I worked directly on the production codebase — identifying and resolving high-impact bugs in the authentication system, billing flows, and conducting a comprehensive security audit.",
    tech: ["Next.js", "React", "Python", "FastAPI", "Docker", "Nginx", "PostgreSQL"],
    github: "#",
    live: "https://xubru.ai",
    accent: "#0ea5e9",
    tag: "Internship",
    architecture: {
      summary:
        "Xubru.AI uses a decoupled architecture with a Next.js frontend served via Nginx reverse proxy, and a Python FastAPI backend handling data processing, AI summarisation, and REST API endpoints. Services are orchestrated with Docker Compose.",
      sections: [
        {
          label: "Frontend",
          content:
            "Next.js + React application handling dashboards, KPI template selection, file uploads, and real-time chart rendering. Communicates with the FastAPI backend via REST.",
        },
        {
          label: "Backend",
          content:
            "Python FastAPI service responsible for data ingestion, AI-powered analysis, user authentication (OAuth), billing/coupon logic, and serving analytics results to the frontend.",
        },
        {
          label: "Infrastructure",
          content:
            "Docker Compose orchestrates the frontend, backend, and database containers. Nginx acts as a reverse proxy routing traffic and handling SSL termination in production.",
        },
        {
          label: "Security",
          content:
            "Conducted a full security audit covering OAuth token handling, session management, API endpoint authorization, and input validation. Identified and patched several critical vulnerabilities.",
        },
      ],
    },
    features: [
      "AI-generated summaries and business insights from raw data",
      "KPI templates for SaaS, E-commerce, Finance, HR, and more",
      "Smart Filters and Analytics dashboards",
      "OAuth login with Google and GitHub",
      "Coupon and billing system for Pro/Enterprise plans",
      "Alerts and collaboration tools for teams",
    ],
    challenges: [
      "Diagnosed and fixed a broken OAuth flow where tokens were not being invalidated correctly on logout, leaving sessions exposed",
      "Resolved a coupon code creation bug in the billing system that allowed invalid coupons to be applied silently",
      "Conducted a full security audit — identified insecure direct object references on several API endpoints and patched them",
      "Hardened API routes against unauthenticated access by auditing middleware chains across the FastAPI service",
    ],
    links: [
      { label: "Live Product", url: "https://xubru.ai" },
    ],
  },

  // ── SOLO PROJECTS ────────────────────────────────────────────
  {
    slug: "hexcode",
    num: "02",
    title: "Hexcode",
    subtitle: "Online Coding Platform",
    type: "solo",
    thumbnail: "/thumbnails/hexcode.png",
    description:
      "Execute, test, and submit code solutions in real time. Built a multi-language judge engine integrated with Judge0, real-time leaderboards, and a submission tracking system.",
    longDescription:
      "Hexcode is a full-featured online coding platform that allows users to write, execute, and submit code solutions across multiple programming languages. It features a robust judge engine integrated with Judge0 API, real-time leaderboards, and comprehensive submission tracking with detailed test case feedback.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Judge0", "Vite", "Tailwind CSS"],
    github: "https://github.com/md-ehtesham57/hexcode",
    live: "#",
    accent: "#7c3aed",
    tag: "Full-Stack",
    youtubeVideoId: "dQw4w9WgXcQ",
    architecture: {
      summary:
        "Hexcode follows a microservices-inspired architecture with a React frontend, Node.js/Express API backend, PostgreSQL database, and a dedicated judge engine service that communicates with Judge0 for code execution.",
      sections: [
        { label: "Frontend", content: "React + Vite single-page application with Tailwind CSS styling. Communicates with the backend via RESTful API calls. Features include a code editor with syntax highlighting, problem listing, submission history, and real-time leaderboard updates." },
        { label: "API Layer", content: "Express.js REST API handling authentication, problem CRUD, submission management, and user progress tracking. JWT-based authentication with refresh token rotation." },
        { label: "Database", content: "PostgreSQL with normalized schema for users, problems, submissions, test cases, and leaderboard rankings. Uses parameterized queries and connection pooling for performance." },
        { label: "Judge Engine", content: "Dedicated service that manages code execution via Judge0 API. Handles queueing, timeout management, result parsing, and stores detailed per-test-case results back to the database." },
      ],
    },
    features: [
      "Multi-language code execution (Python, JavaScript, C++, Java, Go)",
      "Real-time leaderboard with ELO-based scoring",
      "Detailed submission history with per-test-case results",
      "JWT authentication with refresh tokens",
      "Responsive design with dark/light mode",
      "Problem categories and difficulty levels",
    ],
    challenges: [
      "Ensuring secure code execution in a sandboxed environment through Judge0 integration",
      "Designing an efficient queueing system for concurrent submissions without degrading performance",
      "Building accurate real-time leaderboard updates without excessive database writes",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/md-ehtesham57/hexcode" },
      { label: "Live Demo", url: "#" },
    ],
  },
  {
    slug: "rovio",
    num: "03",
    title: "Rovio",
    subtitle: "Car & Bike Rental Platform",
    type: "solo",
    thumbnail: "/thumbnails/rovio.png",
    description:
      "Responsive vehicle booking UI with advanced filtering, clean UX flows, and a booking management system. Focused on accessibility and mobile-first design.",
    longDescription:
      "Rovio is a vehicle rental platform that provides a seamless booking experience for cars and bikes. The platform features advanced filtering options, intuitive UX flows, and a complete booking management system built with accessibility and mobile-first design principles.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    github: "https://github.com/md-ehtesham57/rovio-car-bike-rental",
    live: "#",
    accent: "#2563eb",
    tag: "Frontend",
    youtubeVideoId: "dQw4w9WgXcQ",
    architecture: {
      summary:
        "Rovio uses a traditional client-server architecture with a vanilla JavaScript frontend and a Node.js/Express backend. The frontend handles UI rendering and user interactions, while the backend manages data persistence and business logic.",
      sections: [
        { label: "Frontend", content: "Vanilla JavaScript with modular architecture. Features include vehicle listing with advanced filters, booking calendar, user dashboard, and responsive mobile-first design using CSS Grid and Flexbox." },
        { label: "Backend", content: "Node.js with Express framework handling API requests, user authentication, vehicle inventory management, and booking lifecycle. RESTful API design with proper error handling." },
        { label: "Database", content: "Relational database schema designed for vehicle inventory, user profiles, booking records, and payment tracking. Optimized queries for search and filtering operations." },
      ],
    },
    features: [
      "Advanced vehicle search with filters (type, price, location)",
      "Booking calendar with availability checking",
      "User authentication and profile management",
      "Booking history and status tracking",
      "Responsive mobile-first design",
      "Accessibility-focused UI components",
    ],
    challenges: [
      "Implementing a reliable availability checking system that prevents double-booking in real-time",
      "Designing an intuitive filtering UI that remains performant with large vehicle inventories",
      "Ensuring consistent UX across all device sizes without a framework",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/md-ehtesham57/rovio-car-bike-rental" },
      { label: "Live Demo", url: "#" },
    ],
  },
  {
    slug: "portfolio",
    num: "04",
    title: "Portfolio v2",
    subtitle: "Developer Portfolio",
    type: "solo",
    thumbnail: "/thumbnails/portfolio.png",
    description:
      "Modern animated developer portfolio with smooth transitions, architecture diagrams, and dark-mode precision design. Built with Next.js and Framer Motion.",
    longDescription:
      "This portfolio website showcases modern web development capabilities with smooth page transitions, interactive UI elements, and a dark-mode design system. Built from the ground up with Next.js App Router and Framer Motion animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
    accent: "#0891b2",
    tag: "Design",
    architecture: {
      summary:
        "Built on Next.js App Router with a component-based architecture. Uses Tailwind CSS for styling, Framer Motion for animations, and follows a modular section-based layout pattern.",
      sections: [
        { label: "Framework", content: "Next.js App Router providing file-based routing, server components, and optimal performance through static generation." },
        { label: "Styling", content: "Tailwind CSS 4 for utility-first styling with custom design tokens. Global CSS variables for theme colors and consistent spacing across components." },
        { label: "Animations", content: "Framer Motion for page transitions, scroll-triggered animations, and interactive UI elements. Reusable animation variants defined in a shared motion library." },
        { label: "Components", content: "Modular component architecture with clear separation: sections (page-level blocks), UI (reusable primitives), and shared (cross-cutting features)." },
      ],
    },
    features: [
      "Smooth page transitions with Framer Motion",
      "Animated system architecture diagram in hero",
      "Fixed navigation with scroll-aware styling",
      "Responsive design across all device sizes",
      "Contact form with Express backend integration",
      "Project detail case study pages",
    ],
    challenges: [
      "Coordinating complex staggered animations without performance degradation",
      "Achieving consistent dark-mode aesthetics across all components and pages",
      "Building a reusable design system from scratch without a component library",
    ],
    links: [
      { label: "GitHub Repository", url: "#" },
      { label: "Live Demo", url: "#" },
    ],
  },
];

export const clientProjects = projects.filter((p) => p.type === "client");
export const soloProjects = projects.filter((p) => p.type === "solo");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectByTitle(title: string): Project | undefined {
  return projects.find((p) => p.title.toLowerCase() === title.toLowerCase());
}