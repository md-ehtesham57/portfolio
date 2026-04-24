"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { container, fadeInUp } from "@/lib/motion";
import PremiumBackground from "../animations/PremiumBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ✅ BACKGROUND — FULL WIDTH */}
      <PremiumBackground />

      {/* OPTIONAL overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* ✅ CONTENT */}
      <Container>
        <div className="relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Hi, I'm <span className="text-primary">Md Ehtesham</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Frontend-focused developer building interactive, backend-powered web applications.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-border rounded-lg text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-105"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>

    </section>
  );
}