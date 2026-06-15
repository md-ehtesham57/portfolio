"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function SectionLabel({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
      <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pb-24">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow behind hero */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] blur-[120px] opacity-10 pointer-events-none rounded-full"
          style={{ background: project.accent }}
        />

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="py-16 lg:py-20"
          >
            {/* Back link */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-300 transition-colors mb-10 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                All projects
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

              {/* LEFT — title + description + CTAs */}
              <div>
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-slate-600">{project.num}</span>
                  <span
                    className="text-[10px] px-2.5 py-1 rounded-full border font-mono tracking-wider"
                    style={{ borderColor: `${project.accent}50`, color: project.accent, background: `${project.accent}10` }}
                  >
                    {project.tag}
                  </span>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4">
                    {project.title}
                  </h1>
                  <p className="text-slate-500 text-lg font-light mb-6">{project.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed text-base max-w-2xl">
                    {project.longDescription}
                  </p>
                </motion.div>

                {/* CTA buttons */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 rounded-xl transition-all font-medium"
                  >
                    <GithubIcon />
                    View Source
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all"
                      style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </motion.div>
              </div>

              {/* RIGHT — metadata card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/[0.08] bg-[#111627]/80 backdrop-blur-xl p-6 space-y-6"
              >
                {/* Tech stack */}
                <div>
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.06] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/[0.06]" />

                {/* Quick links */}
                <div>
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mb-3">Links</p>
                  <div className="space-y-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-between group text-sm text-slate-400 hover:text-white transition-colors py-1"
                    >
                      <span className="flex items-center gap-2">
                        <GithubIcon />
                        GitHub Repository
                      </span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center justify-between group text-sm text-slate-400 hover:text-white transition-colors py-1"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={14} />
                          Live Demo
                        </span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="h-px bg-white/[0.06]" />

                {/* Category */}
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">Category</p>
                  <span
                    className="text-xs font-mono"
                    style={{ color: project.accent }}
                  >
                    {project.tag}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── VIDEO TOUR ───────────────────────────────────────────── */}
      {project.youtubeVideoId && (
        <section className="py-20 border-b border-white/[0.06]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <SectionLabel color="#f87171" label="Project Tour" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">See it in action</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-black/60 shadow-[0_0_60px_rgba(124,58,237,0.08)]">
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

      {/* ── ARCHITECTURE ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel color="#a78bfa" label="Architecture" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">System Design</h2>
            <p className="text-slate-400 leading-relaxed mb-12 max-w-2xl">{project.architecture.summary}</p>

            {/* Timeline layout */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent hidden md:block" />

              <div className="space-y-6">
                {project.architecture.sections.map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-[24px_1fr] gap-4 md:gap-8 items-start"
                  >
                    {/* Dot */}
                    <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full border border-violet-500/40 bg-[#111627] mt-1 shrink-0">
                      <span className="text-[9px] font-mono text-violet-400">{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    {/* Card */}
                    <div className="group rounded-xl border border-white/[0.06] bg-[#111627]/60 hover:border-violet-500/20 hover:bg-[#111627]/90 transition-all duration-300 p-5">
                      <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="md:hidden text-[10px] font-mono text-violet-400 border border-violet-500/30 rounded px-1.5 py-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {section.label}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{section.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel color="#34d399" label="Features" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">What it does</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="group flex items-start gap-3 p-5 rounded-xl border border-white/[0.06] bg-[#111627]/40 hover:border-emerald-500/20 hover:bg-[#111627]/70 transition-all duration-300"
                >
                  <CheckCircle2 size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-snug group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── CHALLENGES ───────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel color="#fbbf24" label="Challenges" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Problems solved</h2>

            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group grid grid-cols-[48px_1fr] gap-6 items-start p-6 rounded-xl border border-white/[0.06] bg-[#111627]/40 hover:border-amber-500/20 hover:bg-[#111627]/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/[0.07] shrink-0">
                    <span className="text-sm font-bold font-mono text-amber-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs text-slate-600 font-mono uppercase tracking-widest text-center mb-8">Next Project</p>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-white/[0.08] bg-[#111627]/60 hover:border-violet-500/25 hover:bg-[#111627]/90 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 50% 80% at 90% 50%, ${nextProject.accent}08, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-slate-600">{nextProject.num}</span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                    style={{ borderColor: `${nextProject.accent}40`, color: nextProject.accent }}
                  >
                    {nextProject.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">{nextProject.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{nextProject.subtitle}</p>
              </div>

              {/* FIXED: Swapped out ArrowLeft + rotate-180 for ChevronRight to align nicely with the layout intent */}
              <div className="relative z-10 flex items-center gap-2 text-sm text-slate-500 group-hover:text-violet-300 transition-colors shrink-0">
                View project
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="mt-8 text-center">
              <Link href="/projects" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                &larr; Back to all projects
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}