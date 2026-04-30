"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import PremiumBackground from "../animations/PremiumBackground";
import { useTypewriter } from "@/hooks/useTypewriter";
import Cursor from "../shared/Cursor";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import ProjectPreview from "./ProjectPreview";

export default function Hero() {
  const name = useTypewriter("Md Ehtesham");
  const role = useTypewriter("Frontend-focused developer");
  const focus = useTypewriter("Building interactive web applications");
  const status = useTypewriter("Available for opportunities");

  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-32 overflow-hidden">

      <PremiumBackground />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT — Terminal Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-mono space-y-6 text-green-400"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-gray-500">{">"} who am i ?</span>
              <div className="text-white text-3xl md:text-5xl font-bold">
                {name}
                <Cursor />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <span className="text-gray-500">{">"} role</span>
              <div className="text-green-400">{role}</div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <span className="text-gray-500">{">"} focus</span>
              <div className="text-gray-300">{focus}</div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <span className="text-gray-500">{">"} status</span>
              <div className="text-green-400">
                {status}
                <Cursor />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <a className="px-6 py-3 border border-green-500 text-green-400 rounded-md hover:bg-green-500/10 transition">
                &gt; view_projects
              </a>

              <a className="px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-green-400 hover:text-green-400 transition">
                &gt; download_resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Project Preview (Takes 7 columns for a HUGE look) */}
          <div className="lg:col-span-2 flex justify-end items-center w-full mt-6 lg:mt-0">
            <div className="w-full xl:scale-125 origin-right">
              <ProjectPreview />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}