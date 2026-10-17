"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { blurUp, staggerContainer, EASE } from "@/lib/motion";

const categories = ["All", "Full-Stack", "Frontend", "Design", "Internship"];

export default function ProjectsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tag === activeCategory);

  return (
    <section className="relative pb-24 md:pb-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-12"
        >
          <motion.div variants={blurUp}>
            <SectionHeader
              eyebrow="Archive"
              title="All projects."
              description="Everything I've shipped and studied — client work, products, and experiments."
            />
          </motion.div>

          <motion.div variants={blurUp} className="flex justify-center">
            <div className="glass-subtle inline-flex flex-wrap justify-center gap-1 rounded-full p-1">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative">{category}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block h-full"
                  >
                    <div className="glass glass-hover flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {project.thumbnail && (
                          <Image
                            src={project.thumbnail}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                        <span className="glass-subtle absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] tracking-wider text-foreground/90">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: project.accent }}
                          />
                          {project.tag}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold tracking-tight text-foreground">
                            {project.title}
                          </h3>
                          <span className="font-mono text-xs text-faint">
                            {project.num}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-faint">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                            View case study
                          </span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
