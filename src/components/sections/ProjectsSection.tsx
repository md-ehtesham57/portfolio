"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { clientProjects, soloProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function ThumbnailPlaceholder({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{ background: `${accent}08` }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${accent}30 1px, transparent 1px), linear-gradient(90deg, ${accent}30 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative text-center px-6">
        <p className="text-2xl font-bold tracking-tight" style={{ color: accent }}>{title}</p>
        <p className="text-xs text-slate-600 font-mono mt-2">thumbnail coming soon</p>
      </div>
    </div>
  );
}

function ProjectCard({ p, i, isEven }: { p: Project; i: number; isEven: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl border border-white/[0.07] bg-[#111627]/60 backdrop-blur-sm overflow-hidden transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px ${p.accent}12`;
        e.currentTarget.style.borderColor = `${p.accent}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      {/* Hover ambient glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isEven
            ? `radial-gradient(ellipse 50% 80% at 0% 50%, ${p.accent}07, transparent)`
            : `radial-gradient(ellipse 50% 80% at 100% 50%, ${p.accent}07, transparent)`,
        }}
      />

      <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-col-dense"}`}>

        {/* TEXT SIDE */}
        <div className={`flex flex-col justify-center gap-5 p-8 lg:p-10 ${isEven ? "" : "lg:col-start-2"}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-600">{p.num}</span>
            <span
              className="text-[10px] px-2.5 py-1 rounded-full border font-mono tracking-wider"
              style={{ borderColor: `${p.accent}40`, color: p.accent, background: `${p.accent}10` }}
            >
              {p.tag}
            </span>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-50 transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-500 mt-1 text-sm">{p.subtitle}</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>

          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.06] font-mono">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200"
              style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}40` }}
            >
              Case Study
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.accent }} />
            </Link>
            {p.github !== "#" && (
              <a
                href={p.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl transition-all"
              >
                <GithubIcon /> GitHub
              </a>
            )}
            {p.live !== "#" && (
              <a
                href={p.live}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl transition-all"
              >
                ↗ Live
              </a>
            )}
          </div>
        </div>

        {/* THUMBNAIL SIDE */}
        <div
          className={`relative aspect-[16/10] lg:aspect-auto min-h-[240px] overflow-hidden
            ${isEven
              ? "lg:border-l border-white/[0.06]"
              : "lg:border-r border-white/[0.06] lg:col-start-1 lg:row-start-1"
            }`}
        >
          {p.thumbnail ? (
            <Image
              src={p.thumbnail}
              alt={`${p.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <ThumbnailPlaceholder accent={p.accent} title={p.title} />
          )}

          {/* Gradient blend into card */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              isEven
                ? "bg-gradient-to-r from-[#111627]/80 via-transparent to-transparent"
                : "bg-gradient-to-l from-[#111627]/80 via-transparent to-transparent"
            }`}
          />

          {p.live !== "#" && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/*  CLIENT / INTERNSHIP WORK */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs text-sky-400 font-mono uppercase tracking-widest">Client & Internship</span>
              <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Professional Work
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mt-3 max-w-md">
              Projects built in professional settings — real products, real users, real impact.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {clientProjects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} isEven={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* ── SOLO PROJECTS ────────────────────────────────────── */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">Personal Projects</span>
              <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Built for fun & learning
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mt-3 max-w-md">
              Side projects I built to explore ideas, learn new tech, and scratch my own itches.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {soloProjects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} isEven={i % 2 === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}