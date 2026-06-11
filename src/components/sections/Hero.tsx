"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import ProjectPreview from "./ProjectPreview";

const STATS = [
  { label: "Projects",  value: "10+" },
  { label: "Clients",   value: "5+"  },
  { label: "Tech",      value: "15+" },
  { label: "Coffee",    value: "∞"   },
];

const MERN = [
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#ffffff" },
  { name: "React",   color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
];

const TECH = ["TypeScript", "Next.js", "PostgreSQL", "Docker", "Tailwind CSS", "Mongoose"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-12 pt-28 overflow-hidden">

      {/* ── Ambient glow ─────────────────────────────────────────────── */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
        w-[50vw] max-w-[500px] aspect-square
        bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4
        w-[30vw] max-w-[300px] aspect-square
        bg-violet-500/3 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ══ LEFT ════════════════════════════════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-0"
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Name block */}
            <motion.div variants={fadeInUp} className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                Hi, I'm{" "}
                <span className="text-violet-400">Md Ehtesham</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp}>
              <p className="text-lg md:text-xl text-slate-300 font-medium">
                I build{" "}
                <span className="text-violet-300">SaaS applications</span>{" "}
                with the MERN stack.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp}>
              <p className="text-slate-400 leading-relaxed mt-4 max-w-lg">
                Full Stack Web Developer focused on crafting scalable SaaS platforms,
                RESTful APIs, and seamless user experiences. I turn complex ideas into
                production-ready applications.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <a href="/projects"
                className="text-sm text-violet-300 border border-violet-500/40
                  px-5 py-3 rounded-xl text-center bg-violet-500/5
                  hover:bg-violet-500/15 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]
                  transition-all duration-200 font-medium"
              >
                View Projects →
              </a>
              <a href="/contact"
                className="text-sm text-slate-400 border border-white/10
                  px-5 py-3 rounded-xl text-center
                  hover:border-white/30 hover:text-white/80
                  transition-all duration-200 font-medium"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeInUp}
              className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-violet-500/10"
            >
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-white leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-slate-500 tracking-widest uppercase leading-tight font-mono">
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
            className="flex flex-col items-center gap-4"
          >
            {/* Profile card */}
            <div className="rounded-2xl border border-white/10 overflow-hidden
              bg-[#111627]/80 backdrop-blur-xl max-w-xs w-full
              shadow-[0_0_40px_rgba(124,58,237,0.07),inset_0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5
                border-b border-white/10 bg-white/[0.03]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-auto font-mono text-[10px] text-slate-500 tracking-widest">
                  profile.jpg
                </span>
              </div>

              <ProjectPreview />

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-1.5
                border-t border-white/10 bg-white/[0.02]"
              >
                <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase">
                  MERN · SaaS · Full Stack
                </span>
                <span className="font-mono text-[9px] text-green-500/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 inline-block" />
                  Available
                </span>
              </div>
            </div>

            {/* MERN Stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {MERN.map(t => (
                <span key={t.name}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg border bg-white/[0.03] transition-all duration-150 cursor-default"
                  style={{ borderColor: `${t.color}30`, color: t.color }}
                >
                  {t.name}
                </span>
              ))}
            </motion.div>

            {/* Other tech */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-1.5"
            >
              {TECH.map(t => (
                <span key={t}
                  className="font-mono text-[10px] text-slate-500/80
                    border border-white/10 bg-white/[0.03]
                    px-2 py-0.5 rounded-sm tracking-wide
                    hover:border-white/30 hover:text-slate-300
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