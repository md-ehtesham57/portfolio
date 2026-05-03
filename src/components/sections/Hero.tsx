"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { useTypewriter } from "@/hooks/useTypewriter";
import Cursor from "../shared/Cursor";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import ProjectPreview from "./ProjectPreview";

export default function Hero() {
  const name = useTypewriter("Md Ehtesham");
  const role = useTypewriter("Backend-focused developer");
  const focus = useTypewriter("Building interactive web applications");
  const status = useTypewriter("Available for opportunities");

  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-mono space-y-6 text-green-400 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="border-l-2 border-green-500/30 pl-3 text-left">
              <span className="text-gray-500 text-sm">{">"} who am i ? </span>
              {name}
              <Cursor />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-l-2 border-green-500/30 pl-3 text-left">
              <span className="text-gray-500 text-sm">{">"} role </span>
              {role}
              <Cursor />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-l-2 border-green-500/30 pl-3 text-left">
              <span className="text-gray-500 text-sm">{">"} focus </span>
              {focus}
              <Cursor />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-l-2 border-green-500/30 pl-3 text-left">
              <span className="text-gray-500 text-sm">{">"} status </span>
              {status}
              <Cursor />
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-4 pt-4 w-full"
            >
              <a href="/projects" className="w-full md:w-auto text-center px-6 py-3 border border-green-500 text-green-400 rounded-md hover:bg-green-500/10 transition">
                &gt; View_projects
              </a>

              <a href="https://shorturl.at/uKWXm" className="w-full md:w-auto text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-green-400 hover:text-green-400 transition">
                &gt; Download_resume
              </a>
            </motion.div>
          </motion.div>

          <div className="flex justify-center md:justify-end items-center w-full mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-[280px] md:max-w-[360px] rounded-2xl border border-green-500/20 overflow-hidden bg-zinc-900/60 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500/10 bg-zinc-950/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-zinc-500 font-mono text-[10px]">ehtesham.jpg</span>
              </div>
              <ProjectPreview />
            </motion.div>
          </div>

        </div>
      </Container>
    </section >
  );
}