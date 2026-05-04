"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { useTypewriter } from "@/hooks/useTypewriter";
import Cursor from "../shared/Cursor";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import ProjectPreview from "./ProjectPreview";

const STATS = [
  { label: "Projects",  value: "10+" },
  { label: "Repos",     value: "20+" },
  { label: "Tech",      value: "12+" },
  { label: "Coffee",    value: "∞"   },
];

const TECH = ["Node.js", "Express", "PostgreSQL", "MongoDB", "React", "Next.js", "Docker", "C/C++"];

export default function Hero() {
  const job   = useTypewriter("I design and build scalable server-side systems and high-performance APIs using Node.js, Express, and PostgreSQL.");
  const role   = useTypewriter("Backend-focused developer");
  const focus  = useTypewriter("Focused on writing clean architecture, optimizing performance, and delivering production-ready applications.");
  const status = useTypewriter("Currently open to internship and entry-level opportunities.");

  return (
    <section className="relative min-h-screen flex items-center py-10 overflow-hidden">

      {/* ── Scanline texture ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.018) 2px, rgba(0,255,136,0.018) 4px)",
          zIndex: 0,
        }}
      />

      {/* ── Ambient glow ─────────────────────────────────────────────── */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
        w-[50vw] max-w-[500px] aspect-square
        bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4
        w-[30vw] max-w-[300px] aspect-square
        bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ══ LEFT ════════════════════════════════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-0"
          >
            {/* System badge */}
            <motion.div variants={fadeInUp}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
              <span className="font-mono text-[10px] text-green-500/50 tracking-[0.18em] uppercase">
                System Online // Portfolio v2.0
              </span>
            </motion.div>

            {/* Name block */}
            <motion.div variants={fadeInUp} className="mb-1">
              <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Md<br />
                <span className="text-green-400">Ehtesham</span>
              </h1>
            </motion.div>

            {/* Terminal lines */}
            <motion.div variants={fadeInUp}
              className="font-mono space-y-3 text-green-400 mt-6"
            >
              {[
                { prefix: "> what i do ?", value: job },
                { prefix: "> role",       value: role },
                { prefix: "> focus",      value: focus },
                { prefix: "> status",     value: status },
              ].map((line, i) => (
                <div key={i}
                  className="border-l-2 border-green-500/25 pl-3 text-left"
                >
                  <span className="text-gray-500 text-xs">{line.prefix} </span>
                  <span className="text-green-400 text-sm">{line.value}</span>
                  <Cursor />
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp}>
              <p className="font-mono text-xs text-white/40 leading-relaxed mt-6 max-w-md border-l-2 border-green-500/10 pl-3">
                I craft scalable server-side systems and RESTful APIs using Node.js &amp; Express.
                Workflow: Arch Linux + Neovim. Currently finalizing my degree.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 mt-7"
            >
              <a href="/projects"
                className="font-mono text-xs text-green-400 border border-green-500/50
                  px-5 py-3 rounded text-center bg-green-500/5
                  hover:bg-green-500/15 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]
                  transition-all duration-200 tracking-wider"
              >
                &gt; View_projects
              </a>
              <a href="https://shorturl.at/uKWXm"
                className="font-mono text-xs text-white/50 border border-white/10
                  px-5 py-3 rounded text-center
                  hover:border-white/30 hover:text-white/80
                  transition-all duration-200 tracking-wider"
              >
                &gt; Download_resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeInUp}
              className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-green-500/10"
            >
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="font-mono text-xl font-bold text-green-400 leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] text-white/25 tracking-widest uppercase leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Terminal window — wraps your existing ProjectPreview */}
            <div className="rounded-xl border border-green-500/20 overflow-hidden
              bg-black/60 backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,255,136,0.07),inset_0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5
                border-b border-green-500/10 bg-green-500/[0.03]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-auto font-mono text-[10px] text-green-500/30 tracking-widest">
                  ehtesham.jpg
                </span>
              </div>

              {/* Your existing ProjectPreview — untouched */}
              <ProjectPreview />

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-1.5
                border-t border-green-500/10 bg-green-500/[0.02]"
              >
                <span className="font-mono text-[9px] text-green-500/25 tracking-widest uppercase">
                  Node · Express · PostgreSQL
                </span>
                <span className="font-mono text-[9px] text-green-500/35 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 inline-block" />
                  Ready
                </span>
              </div>
            </div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-1.5"
            >
              {TECH.map(t => (
                <span key={t}
                  className="font-mono text-[10px] text-green-400/60
                    border border-green-500/20 bg-green-500/[0.04]
                    px-2.5 py-1 rounded-sm tracking-wide
                    hover:border-green-500/40 hover:text-green-400/90
                    transition-all duration-150 cursor-default"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}