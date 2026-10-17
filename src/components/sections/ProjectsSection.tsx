"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassButton from "@/components/ui/glass/GlassButton";
import { projects } from "@/data/projects";
import { blurUp, staggerContainer } from "@/lib/motion";

const [featured, ...rest] = projects;

export default function ProjectsSection() {
  return (
    <section className="relative pb-24 md:pb-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-14"
        >
          <motion.div variants={blurUp}>
            <SectionHeader
              eyebrow="Selected work"
              title={
                <>
                  Projects with{" "}
                  <span className="text-accent-gradient">real depth.</span>
                </>
              }
              description="Production systems, judged code, and interfaces built with intent."
            />
          </motion.div>

          {featured && (
            <motion.div variants={blurUp}>
              <Link
                href={`/projects/${featured.slug}`}
                className="group block"
              >
                <article className="glass glass-hover overflow-hidden rounded-3xl lg:grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[460px]">
                    {featured.thumbnail && (
                      <Image
                        src={featured.thumbnail}
                        alt={`${featured.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/30" />
                    <span className="glass-subtle absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] tracking-wider text-foreground/90">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: featured.accent }}
                      />
                      {featured.tag}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        {featured.title}
                      </h3>
                      <span className="font-mono text-xs text-faint">
                        {featured.num}
                      </span>
                    </div>
                    <p className="text-base font-medium text-foreground/90">
                      {featured.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {featured.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {featured.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 pt-2 text-sm font-medium text-accent">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        View case study
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          <motion.div variants={blurUp} className="grid gap-6 md:grid-cols-3">
            {rest.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {project.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
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

                    <div className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        View case study
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </motion.div>

          <motion.div variants={blurUp} className="flex justify-center">
            <GlassButton href="/projects" variant="ghost">
              Browse all projects
              <ArrowUpRight className="h-4 w-4" />
            </GlassButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
