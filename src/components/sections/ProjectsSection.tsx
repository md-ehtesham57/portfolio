"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-12">
      <Container>

        {/* Heading */}
        <div className="mb-16 fade-up">
          <p className="text-xs text-violet-400 font-mono uppercase tracking-widest mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Things I've built
          </h2>
          <p className="text-slate-500 mt-3 max-w-md">A mix of backend systems, tools, and interfaces I'm proud of.</p>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl border border-white/5 bg-[#111627]/60 backdrop-blur-sm p-8 transition-all duration-300 overflow-hidden"
              style={{
                borderColor: hovered === i ? `${p.accent}30` : undefined,
                boxShadow: hovered === i ? `0 0 40px ${p.accent}10` : undefined,
              }}
            >
              {/* Subtle gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 60% at 10% 50%, ${p.accent}08, transparent)` }}
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-slate-600">{p.num}</span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                      style={{ borderColor: `${p.accent}40`, color: p.accent }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-slate-50 transition-colors">
                    {p.title}
                    <span className="text-slate-500 font-normal text-lg ml-2">— {p.subtitle}</span>
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mt-2">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 shrink-0">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-violet-200 border border-violet-500/60 bg-violet-500/10 rounded-lg transition-all duration-200 hover:bg-violet-500/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-violet-400/80"
                  >
                    <span className="relative flex items-center gap-1.5">
                      Details
                      <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse shadow-[0_0_6px_#a78bfa]" />
                    </span>
                  </Link>
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all"
                  >
                    ↗ Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-300 transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </Container>
    </section>
  );
}