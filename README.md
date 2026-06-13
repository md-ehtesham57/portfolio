# Md Ehtesham — Developer Portfolio

**AI-Assistant Context File** — This README is structured so LLMs (GPT, Gemini, Claude, etc.) can fully understand the project, its architecture, data flow, import graph, and how to make correct modifications.

---

## 1. PROJECT IDENTITY

| Field | Value |
|---|---|
| Owner | Md Ehtesham (mdehtesham313@gmail.com) |
| Purpose | Personal portfolio showcasing backend/full-stack projects |
| URL | `https://md-ehtesham.vercel.app` (planned) |
| Year | 2026 |
| Pronouns | He/Him |
| Role Title | "Full Stack Web Developer" — MERN + SaaS focused |

---

## 2. TECH STACK — EXACT VERSIONS

| Layer | Package | Version |
|---|---|---|
| Framework | `next` | 16.2.4 |
| UI Library | `react` | 19.2.4 |
| DOM Renderer | `react-dom` | 19.2.4 |
| Language | `typescript` | ^5 |
| Styling | `tailwindcss` | ^4 |
| Animation | `framer-motion` | 12.38.0 |
| UI Primitives | `radix-ui` | 1.4.3 |
| Icons | `lucide-react` | 1.8.0 |
| Icon Library | `react-icons` | 5.6.0 |
| CSS Animation | `tw-animate-css` | 1.4.0 |
| Particles | `tsparticles` / `@tsparticles/react` | 3.9.1 / 3.0.0 |
| Validation | `zod` | 4.4.2 |
| Class Merge | `clsx` + `tailwind-merge` | 2.1.1 / 3.5.0 |
| CVA | `class-variance-authority` | 0.7.1 |
| Scrollbar | `overlayscrollbars` / `overlayscrollbars-react` | 2.15.1 / 0.5.6 |
| Backend | `express` | 5.2.1 |
| Mail | `nodemailer` | 8.0.7 |
| Security | `helmet` | 8.2.0 |
| CORS | `cors` | 2.8.6 |
| Rate Limit | `express-rate-limit` | 8.4.1 |
| Linter | `eslint` + `eslint-config-next` | ^9 / 16.2.4 |
| Compiler | `babel-plugin-react-compiler` | 1.0.0 |

**Key Config:** `next.config.ts` has `reactCompiler: true` (React 19 compiler enabled).

---

## 3. AI INSTRUCTIONS — HOW TO HANDLE THIS PROJECT

When an AI edits this project, it MUST follow these rules:

### 3.1 Styling Rules
- **NO COMMENTS in code.** Zero. The codebase has no comments. Do not add `//`, `/* */`, or JSDoc.
- **Use Tailwind CSS v4 syntax.** No `@apply` directives, no `@layer`. Use `@import "tailwindcss"` not `@tailwind base`.
- **Color palette** is violet/purple based: primary `#7c3aed`, accent `#a78bfa`, background `#080a12`, card `#111627`, muted `#1e2033`, border `rgba(124,58,237,0.15)`.
- **All components are "use client"** if they use hooks, state, effects, event handlers, or Framer Motion. Server components are only the page-level wrappers in `src/app/`.
- **Framer Motion variants** come from `@/lib/motion` — use `staggerContainer` and `fadeInUp` consistently.

### 3.2 Architecture Rules
- **Sections** go in `src/components/sections/` and are full viewport sections (Hero, ProjectsSection, AboutSection, ContactSection, Footer).
- **UI primitives** go in `src/components/ui/` — generic reusable components (Navbar, Container, Button, Card, SectionDivider, ScrollArea).
- **Animations** go in `src/components/animations/` — background effects only.
- **Data** goes in `src/data/` — strongly typed, exported as arrays/interfaces.
- **Only one project data file** exists: `src/data/projects.ts`. Every project is a `Project` object in the `projects` array.
- **The contact form** is the ONLY client-server interaction — it POSTs to the Express backend.

### 3.3 Adding a New Project
1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array matching the `Project` interface.
3. The `slug` field determines the URL path.
4. `generateStaticParams` in `src/app/projects/[slug]/page.tsx` automatically picks it up.
5. No routes or components need changing — ProjectsSection and ProjectDetail render dynamically from the data.

### 3.4 Adding a New Section
1. Create the section component in `src/components/sections/`.
2. Import it into `src/app/page.tsx` and insert between existing sections with a `SectionDivider` between them.
3. If the section needs its own route, create `src/app/{name}/page.tsx` and re-export the section component.

### 3.5 Adding a New Animation Background
1. Create the component in `src/components/animations/`.
2. It should be a `"use client"` component.
3. Import and render it in `src/app/layout.tsx` inside the background mesh div (or swap it in).

---

## 4. ROUTE MAP

| Route | File | Rendered Component(s) | Type |
|---|---|---|---|
| `/` | `src/app/page.tsx` | `Hero + SectionDivider + ProjectsSection + SectionDivider + AboutSection + SectionDivider + ContactSection + SectionDivider + Footer` | Server Component (imports client children) |
| `/about` | `src/app/about/page.tsx` | `AboutSection` | Server Component |
| `/contact` | `src/app/contact/page.tsx` | `ContactSection` | Server Component |
| `/projects` | `src/app/projects/page.tsx` | `ProjectsSection` | Server Component |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | `Navbar + ProjectDetail` | Server Component with `generateStaticParams` |

---

## 5. FILE-BY-FILE EXPORT MAP

### 5.1 `src/app/` — App Router Pages

| File | Exports | Type | Notes |
|---|---|---|---|
| `layout.tsx` | `default function RootLayout` | Server | Sets `<html>`, Inter font, background mesh, `<Navbar />`, `<main>` |
| `page.tsx` | `default function Home` | Server | Assembles all sections in order |
| `globals.css` | — | Global CSS | Tailwind v4 imports, theme vars, keyframes, utility classes |
| `about/page.tsx` | `default function AboutPage` | Server | Delegates to `<AboutSection />` |
| `contact/page.tsx` | `default function ContactPage` | Server | Delegates to `<ContactSection />` |
| `projects/page.tsx` | `default function ProjectsPage` | Server | Delegates to `<ProjectsSection />` |
| `projects/[slug]/page.tsx` | `default function ProjectPage`, `generateStaticParams` | Server | SSG — derives slugs from `projects` array |

### 5.2 `src/components/sections/` — Page Sections

| File | Exports | Client? | Dependencies |
|---|---|---|---|
| `Hero.tsx` | `default function Hero` | `"use client"` | `framer-motion`, `Container`, `@/lib/motion`, `ProjectPreview` |
| `ProjectsSection.tsx` | `default function ProjectsSection` | `"use client"` | `useState`, `Link`, `Container`, `@/data/projects` |
| `ProjectDetail.tsx` | `default function ProjectDetail({ project }: { project: Project })` | `"use client"` | `framer-motion`, `Link`, `lucide-react`, `Container`, `@/data/projects` (type), `@/lib/motion` |
| `ProjectPreview.tsx` | `default function ProjectPreview` | `"use client"` | Renders `<img src="/Profile.jpeg" />` |
| `AboutSection.tsx` | `default function AboutSection` | Server | `Container` |
| `ContactSection.tsx` | `default function ContactSection` | `"use client"` | `useState`, `Container`, `NEXT_PUBLIC_API_URL` env var |
| `Footer.tsx` | `default function Footer` | Server | `Container` |

### 5.3 `src/components/ui/` — Reusable Primitives

| File | Exports | Client? | Dependencies |
|---|---|---|---|
| `Navbar.tsx` | `default function Navbar` | `"use client"` | `Link`, `useState`, `useEffect`, `lucide-react` (Menu, X) |
| `Container.tsx` | `default function Container({ children })` | Server | None |
| `SectionDivider.tsx` | `default function SectionDivider` | Server | None |
| `ScrollArea.tsx` | `default function ScrollArea({ children, className })` | `"use client"` | `useEffect`, `useRef`, `useCallback` — Canvas particle scrollbar |
| `button.tsx` | `Button`, `buttonVariants` | `"use client"` | `class-variance-authority`, `radix-ui` (Slot), `@/lib/utils` |
| `card.tsx` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` | Client? (has refs) | `@/lib/utils` |

### 5.4 `src/components/animations/` — Background Effects

| File | Exports | Mechanism | Notes |
|---|---|---|---|
| `PremiumBackground.tsx` | `default function PremiumBackground` | Framer Motion + CSS | Animated glow, grid overlay, noise texture |
| `GradientBackground.tsx` | `default function GradientBackground` | Framer Motion (useMotionValue + useSpring) | Cursor-following green radial glow |
| `ParticlesBackground.tsx` | `default function MatrixBackground` | Canvas 2D + setInterval | Matrix-style falling characters (green) |

### 5.5 `src/data/` — Data Layer

| File | Exports | Notes |
|---|---|---|
| `projects.ts` | `Project` (interface), `projects` (array), `getProjectBySlug`, `getProjectByTitle` | 3 projects: Hexcode, Rovio, Portfolio v2 |

**`Project` Interface:**
```typescript
interface Project {
  slug: string;
  num: string;           // "01", "02", "03"
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;        // hex color for accent
  tag: string;           // "Full-Stack", "Frontend", "Design"
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
```

### 5.6 `src/hooks/` — Custom Hooks

| File | Exports | Signature |
|---|---|---|
| `useTypewriter.ts` | `function useTypewriter(text: string, speed = 40)` | Returns `string` (progressively revealed text) |

### 5.7 `src/lib/` — Utilities

| File | Exports | Content |
|---|---|---|
| `motion.ts` | `staggerContainer`, `fadeInUp` | Framer Motion variant objects |
| `utils.ts` | `function cn(...inputs: ClassValue[])` | `clsx` + `tailwind-merge` combinator |

### 5.8 `server/` — Express Backend

| File | Exports | Purpose |
|---|---|---|
| `src/index.js` | Express app | Setup: helmet, cors, rate-limit (5/15min), JSON parser, mounts contact routes on `/api/contact`, listens on `PORT \|\| 5000` |
| `src/config/mail.js` | `default` Nodemailer transporter | Gmail SMTP transport using `EMAIL_USER` + `EMAIL_PASS` |
| `src/controllers/contactController.js` | `handleContactForm` | Zod parse → honeypot check → sanitize → escape HTML → sendMail |
| `src/routes/contactRoutes.js` | Express router | `POST /send` → `handleContactForm` |
| `src/validators/contactSchema.js` | `contactSchema` (Zod) | Fields: name (2-50 chars), email (valid), message (10-1000 chars), company (optional — honeypot) |

---

## 6. IMPORT / DEPENDENCY GRAPH

```
src/app/layout.tsx
  ├── ./globals.css
  ├── next/font/google (Inter)
  └── @/components/ui/Navbar

src/app/page.tsx
  ├── @/components/sections/Hero
  ├── @/components/sections/ProjectsSection
  ├── @/components/sections/AboutSection
  ├── @/components/sections/ContactSection
  ├── @/components/sections/Footer
  └── @/components/ui/SectionDivider

src/components/sections/Hero.tsx
  ├── framer-motion (motion)
  ├── @/components/ui/Container
  ├── @/lib/motion (staggerContainer, fadeInUp)
  └── @/components/sections/ProjectPreview

src/components/sections/ProjectsSection.tsx
  ├── react (useState)
  ├── next/link (Link)
  ├── @/components/ui/Container
  └── @/data/projects (projects)

src/components/sections/ProjectDetail.tsx
  ├── next/link (Link)
  ├── framer-motion (motion)
  ├── lucide-react (ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle)
  ├── @/components/ui/Container
  ├── @/data/projects (Project type)
  └── @/lib/motion (staggerContainer, fadeInUp)

src/components/sections/ContactSection.tsx
  ├── react (useState)
  └── @/components/ui/Container

src/components/sections/AboutSection.tsx
  └── @/components/ui/Container

src/components/sections/Footer.tsx
  └── @/components/ui/Container

src/components/ui/Navbar.tsx
  ├── next/link (Link)
  ├── react (useState, useEffect)
  └── lucide-react (Menu, X)

src/components/ui/button.tsx
  ├── class-variance-authority (cva)
  ├── radix-ui (Slot)
  └── @/lib/utils (cn)

src/components/ui/card.tsx
  └── @/lib/utils (cn)
```

---

## 7. DATA FLOW — DETAILED

### 7.1 Contact Form Pipeline

```
[User] → fills form fields (name, email, message)
  └─ hidden honeypot field (company) — invisible to humans
       │
       ▼
[ContactSection.tsx] handleSubmit(e)
  ├─ setStatus("sending")
  ├─ FormData → { name, email, message }
  ├─ fetch(`${NEXT_PUBLIC_API_URL}/api/contact/send`, POST, JSON)
       │
       ▼
[Express.js server/src/index.js]
  ├─ helmet() — security headers
  ├─ cors() — allows localhost:3000 + vercel.app
  ├─ express.json() — body parser
  ├─ rateLimit(5 req / 15 min) — applied to /api/contact
       │
       ▼
[contactRoutes.js] POST /send
       │
       ▼
[contactController.js] handleContactForm
  ├─ contactSchema.parse(body) — Zod validation
  │    ├─ FAIL → return 400 { error: "validation_failed" }
  │    └─ PASS → proceed
  ├─ if (parsed.company) → return 200 { success: true } (honeypot — silent accept)
  ├─ sanitize(name) — strip \r\n
  ├─ sanitize(email) — strip \r\n
  ├─ escapeHTML(message) — & < > " ' → HTML entities
  ├─ transporter.sendMail(mailOptions) — Nodemailer → Gmail SMTP
  │    └─ From: EMAIL_USER, To: EMAIL_USER, Subject: [PORTFOLIO_MSG] from {name}
  ├─ SUCCESS → return 200 { success: true }
  └─ FAIL → return 500 { error: "delivery_failed" }
       │
       ▼
[ContactSection.tsx] response handler
  ├─ response.ok        → setStatus("success") + reset form
  ├─ status 429         → setStatus("ratelimit")
  ├─ other error        → setStatus("error")
  └─ network exception  → setStatus("error")
```

### 7.2 Page Rendering Flow

```
[Browser request]
  │
  ▼
[Next.js App Router]
  │
  ├─ Match route → load server component
  │
  ├─ / → page.tsx (server)
  │    └─ Renders: <Hero /> <SectionDivider /> <ProjectsSection /> <SectionDivider />
  │                <AboutSection /> <SectionDivider /> <ContactSection /> <SectionDivider /> <Footer />
  │
  ├─ /about → about/page.tsx (server) → <AboutSection />
  ├─ /contact → contact/page.tsx (server) → <ContactSection />
  ├─ /projects → projects/page.tsx (server) → <ProjectsSection />
  │
  └─ /projects/[slug] → [slug]/page.tsx (server, SSG)
       └─ generateStaticParams() → ["hexcode", "rovio", "portfolio"]
       └─ finds project by slug
       └─ <Navbar /> <main> <ProjectDetail project={project} /> </main>
```

---

## 8. ENVIRONMENT VARIABLE SPEC

| Variable | Where Used | Frontend/Backend | Required | Notes |
|---|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | `ContactSection.tsx:16` | Frontend `.env.local` | Yes | Full backend URL, no trailing slash. Fallback: `http://localhost:5000` |
| `EMAIL_USER` | `server/.env` | Backend | Yes | Gmail address for Nodemailer `auth.user` AND email `from`/`to` |
| `EMAIL_PASS` | `server/.env` | Backend | Yes | Gmail app password (16-char, no spaces) |
| `NODE_ENV` | `server/src/index.js:17` | Backend | Yes | `"development"` → allows `localhost:3000` CORS; anything else → only Vercel prod |
| `PORT` | `server/src/index.js:41` | Backend | No | Fallback `5000` |

---

## 9. SCRIPT COMMANDS

### Frontend (`package.json`)

| Command | Action |
|---|---|
| `npm run dev` | Starts Next.js dev server on `:3000` |
| `npm run build` | Production build with SSG |
| `npm run start` | Starts production server |
| `npm run lint` | ESLint |

### Backend (`server/package.json`)

| Command | Action |
|---|---|
| `npm run dev` | `nodemon src/index.js` — auto-reload on save |
| `npm start` | `node src/index.js` — production |

---

## 10. DESIGN SYSTEM

### Colors (CSS Custom Properties in `:root`)

| Variable | Value | Usage |
|---|---|---|
| `--background` | `#080a12` | Page background (very dark navy) |
| `--foreground` | `#f1f5f9` | Text color (light slate) |
| `--card` | `#111627` | Card/container backgrounds |
| `--border` | `rgba(124,58,237,0.15)` | Subtle violet borders |
| `--ring` | `#7c3aed` | Focus ring (violet-600) |
| `--primary` | `#7c3aed` | Primary violet |
| `--accent` | `#a78bfa` | Lighter violet accent |
| `--muted` | `#1e2033` | Muted backgrounds |
| `--muted-foreground` | `#94a3b8` | Muted text (slate-400) |
| `--radius` | `0.75rem` | Base border radius |

### Utility Classes (in `globals.css`)

| Class | Effect |
|---|---|
| `.gradient-text` | Violet-to-blue gradient on text |
| `.glow-violet` | Violet box-shadow glow |
| `.noise::before` | Fixed noise texture overlay at 3% opacity |
| `.animate-float` | Slow Y-axis float (6s ease-in-out) |
| `.animate-pulse-glow` | Opacity pulse (3s ease-in-out) |
| `.animate-dash` | SVG stroke dash animation (3s linear) |
| `.fade-up` | Opacity 0→1, translateY 24→0 (0.6s) |
| `.fade-up-N` (1-5) | Same as fade-up with staggered delays (0.1s, 0.25s, 0.4s, 0.55s, 0.7s) |

### Animations (Framer Motion variants in `@/lib/motion.ts`)

```typescript
// Container — staggers children by 0.2s
staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }

// Child — fades in + moves up
fadeInUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
```

---

## 11. KNOWN GOTCHAS FOR AI

1. **`[slug]/page.tsx` uses `params: Promise<{ slug: string }>`** — In Next.js 16, `params` is a Promise and must be `await`ed. Do NOT destructure directly.
2. **Tailwind v4 syntax** — No `@tailwind base/components/utilities`. Use `@import "tailwindcss"`. CSS custom properties use `@theme inline { }` block.
3. **React 19 + Compiler** — `reactCompiler: true` is set. Do NOT add `useMemo`/`useCallback`/`React.memo` unless profiling proves necessary.
4. **Express v5** — Router syntax is identical but error handling differs. Route handlers can be async without explicit try-catch wrapping (Express 5 catches rejected promises automatically).
5. **shadcn/ui v4** — Uses `data-slot` attributes and `cva` for variants. Card uses `group/card` for scoped child styling.
6. **Gmail app passwords** — `EMAIL_PASS` must be a 16-character app-specific password, not the regular Gmail password. The one in `.env` is valid.
7. **CORS** — In production, the backend must be deployed to a domain that's in the `allowedOrigins` array in `server/src/index.js`. Add new origins there.
8. **ScrollArea** — Replaces the native scrollbar. The component is in `ui/` but is NOT used in the main layout — it's available for future use. The page uses native `overflow-x-hidden`.
9. **Zod v4** — `z.string().trim()` is a Zod 4 method. Trim returns a new ZodString (it's a modifier, not a transform step).
10. **`new Date().getFullYear()`** — Used in Footer.tsx. The year will auto-update on each build.

---

## 12. QUICK REFERENCE — COMMON MODIFICATIONS

### "Add a new project"
→ Edit `src/data/projects.ts` — add object to `projects[]`. Include all `Project` fields. No other file changes needed.

### "Change the hero text"
→ Edit `src/components/sections/Hero.tsx` — find the `<h1>`, `<p>`, and stats data.

### "Add a new section to the homepage"
→ Create `src/components/sections/NewSection.tsx`. Import in `src/app/page.tsx` and insert with `<SectionDivider />`.

### "Change the color scheme"
→ Edit `globals.css` `:root` block and `@theme inline` block. Search for `#7c3aed`, `#a78bfa`, `#080a12` across all files.

### "Deploy the backend"
→ Deploy `server/` to Render/Railway. Set env vars `EMAIL_USER`, `EMAIL_PASS`, `NODE_ENV=production`. Update `NEXT_PUBLIC_API_URL` on the frontend deployment.

### "Add an email template change"
→ Edit `server/src/controllers/contactController.js` — the `mailOptions.html` string.

---

## 13. PROJECT OWNER CONTEXT

```
Name: Md Ehtesham
Email: mdehtesham313@gmail.com
Phone: +91-8340711589
Location: Bhopal, Madhya Pradesh, India
GitHub: https://github.com/md-ehtesham57
LinkedIn: https://www.linkedin.com/in/md-ehtesham-153344259/
Role: Backend-focused full-stack developer
Tools: Arch Linux (Omarchy) + LazyVim (Neovim)
Focus: MERN stack, SaaS platforms, RESTful APIs, low-level C/C++
```
