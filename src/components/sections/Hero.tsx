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
    <section className="min-h-[85vh] flex items-center">

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-mono space-y-6 text-green-400 text-center md:text-left"
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

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end items-center w-full mt-6 md:mt-0">
            <div className="w-full max-w-[260px] md:max-w-[420px]">
              <ProjectPreview />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}