"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassButton from "@/components/ui/glass/GlassButton";
import LensPanel from "@/components/ui/glass/LensPanel";
import HeroProfile from "@/components/sections/HeroProfile";
import { blurUp, staggerContainer, EASE } from "@/lib/motion";

const roles = ["Full-Stack Developer", "MERN", "SaaS", "Backend Systems"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-32">
      <Container>
        <div className="grid items-center gap-14 xl:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl space-y-7"
          >
            <motion.div variants={blurUp} className="space-y-4">
              <h1 className="h-display text-foreground">Md Ehtesham</h1>
              <p className="text-accent-gradient text-2xl font-medium tracking-tight sm:text-3xl">
                Full-stack developer.
              </p>
            </motion.div>

            <motion.p
              variants={blurUp}
              className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Crafting robust backend systems and refined web experiences with
              the MERN stack, SaaS architecture, and a healthy obsession for
              detail. Based in Bhopal, India.
            </motion.p>

            <motion.div variants={blurUp} className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="glass-subtle rounded-full px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={blurUp}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <LensPanel
                radius={999}
                tint="rgba(122, 132, 255, 0.22)"
                className="w-fit"
                contentClassName="rounded-full"
              >
                <Link
                  href="/projects"
                  className="sheen group flex items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(135deg,rgba(152,163,255,0.32),rgba(94,234,212,0.16)_60%,rgba(255,255,255,0.06))] px-7 py-3.5 text-sm font-medium text-foreground"
                >
                  Explore my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </LensPanel>
              <GlassButton href="/contact" variant="ghost">
                Let&apos;s connect
                <ArrowUpRight className="h-4 w-4" />
              </GlassButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            className="order-first xl:order-none"
          >
            <HeroProfile />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
