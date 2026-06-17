"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const skills = [
  { category: "Backend",  items: "Node.js · Express · Mongoose · REST APIs" },
  { category: "Database", items: "PostgreSQL · MongoDB · MySQL" },
  { category: "Low-Level",items: "C / C++ · Data Structures · Algorithms" },
  { category: "DevOps",   items: "Docker · Judge0 · Postman · Git" },
  { category: "Frontend", items: "React · Next.js · Tailwind CSS" },
];

const cards = [
  { label: "Environment", value: "Arch Linux (Omarchy)" },
  { label: "Editor",      value: "LazyVim (Neovim)" },
  { label: "Focus",       value: "Backend / Systems" },
  { label: "Status",      value: "Open to work 🟢" },
];

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-xs text-violet-400 font-mono uppercase tracking-widest mb-3">About</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Backend engineer,<br />
                <span className="text-slate-400 font-light">Linux enthusiast.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm an intermediate-level <span className="text-white">Backend Developer</span> currently
                finalizing my degree. My workflow is built around{" "}
                <span className="text-violet-300">Arch Linux</span> and{" "}
                <span className="text-violet-300">Neovim</span> — tools that reward deliberate thought
                over convenience.
              </p>
              <p>
                I thrive in the Node.js ecosystem, turning complex business requirements into
                efficient RESTful APIs and clean server-side logic. When I'm not debugging
                middleware, I'm exploring systems-level programming and low-level optimizations in C/C++.
              </p>
            </motion.div>

            {/* 2×2 stat cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              {cards.map((c) => (
                <div key={c.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-colors">
                  <p className="text-xs text-violet-400 font-mono mb-1">{c.label}</p>
                  <p className="text-sm text-white font-medium">{c.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a
                href="https://drive.google.com/file/d/1j6vrxlQWweCceshXSJgoPy0qGUtFKeD3/view?usp=drive_link"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-violet-300 border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/[0.08] rounded-xl transition-all duration-200"
              >
                Download CV ↗
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Skills panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#111627]/80 backdrop-blur-xl p-6">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-6">Tech Stack</p>

              <div className="space-y-1">
                {skills.map((s, i) => (
                  <motion.div
                    key={s.category}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    className="group flex items-start gap-4 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <span className="text-xs text-violet-400 font-mono uppercase tracking-wider min-w-[84px] pt-0.5 shrink-0">
                      {s.category}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {s.items}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-violet-500/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-violet-500/20 rounded-bl-lg" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}