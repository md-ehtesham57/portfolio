"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[50vw] max-w-[500px] aspect-square bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-300 transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to projects
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-slate-600">{project.num}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                style={{ borderColor: `${project.accent}40`, color: project.accent }}
              >
                {project.tag}
              </span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                {project.title}
                <span className="text-slate-500 font-normal text-2xl ml-3">— {project.subtitle}</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-slate-400 leading-relaxed max-w-3xl text-lg">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                Source Code
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-violet-300 border border-violet-500/40 hover:bg-violet-500/10 rounded-xl transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/5 font-mono"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── YouTube Video Tour ──────────────────────────────────── */}
      {project.youtubeVideoId && (
        <section className="py-12">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />
                <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">
                  Project Tour
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">See it in action</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_0_40px_rgba(124,58,237,0.06)]">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* ── Architecture ────────────────────────────────────────── */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
              <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">
                Architecture
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">System Architecture & Flow</h2>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
              {project.architecture.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architecture.sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-[#111627]/80 backdrop-blur-xl p-6 hover:border-violet-500/20 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{section.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">
                Features
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                >
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Challenges ──────────────────────────────────────────── */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">
                Challenges
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 p-5 rounded-xl border border-white/5 bg-[#111627]/60 backdrop-blur-sm"
                >
                  <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Links ───────────────────────────────────────────────── */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#111627]/80 backdrop-blur-xl p-8">
              <h2 className="text-lg font-bold text-white mb-4">Resources</h2>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 rounded-xl transition-all"
                  >
                    <ExternalLink size={16} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Bottom nav ──────────────────────────────────────────── */}
      <section className="pb-12">
        <Container>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-300 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
