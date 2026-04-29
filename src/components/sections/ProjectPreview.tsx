"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProjectPreview() {
  const projects = [
    { id: 1, src: "/project-1.png", title: "Project One" },
    { id: 2, src: "/project-2.png", title: "Project Two" },
    { id: 3, src: "/project-3.png", title: "Project Three" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative w-full h-full mx-auto aspect-[16/10] [perspective:1000px]">
      {projects.map((project, i) => {
        // Correctly calculate relative position for the stack effect
        const position = (i - index + projects.length) % projects.length;

        return (
          <motion.div
            key={project.id}
            className="absolute inset-0 rounded-xl overflow-hidden bg-black border border-green-700 shadow-2xl"
            initial={false}
            animate={{
              y: position * 18,
              x: position * 12,
              scale: 1 - position * 0.05,
              rotateZ: position === 1 ? -2 : position === 2 ? 2 : 0,
              opacity: position > 2 ? 0 : 1,
              zIndex: projects.length - position,
            }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // ✅ Smoother easing
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}

      <button
        onClick={next}
        aria-label="Next project"
        className="absolute bottom-4 right-4 z-50 bg-black/70 backdrop-blur border border-green-600 text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute inset-0 bg-green-500/10 blur-3xl -z-10" />
    </div>
  );
}