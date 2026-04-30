"use client";

import { motion } from "framer-motion";
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
    <div className="relative w-full [perspective:600px]">
      {/* The aspect-ratio is 16/9. 
        Because the parent in Hero.tsx is now 'max-w-[700px]', 
        this will scale up significantly.
      */}
      <div className="relative w-full aspect-[16/9]">
        {projects.map((project, i) => {
          const position = (i - index + projects.length) % projects.length;
          if (position > 2) return null;

          return (
            <motion.div
              key={project.id}
              className="absolute inset-0 rounded-xl overflow-hidden bg-black border border-emerald-500/20 shadow-2xl origin-bottom"
              animate={{
                y: position * -15,   // Moves up slightly
                z: position * -50,   // Moves back
                scale: 1 - position * 0.05,
                rotateX: position * 2,
                opacity: 1 - position * 0.2,
                zIndex: projects.length - position,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
          className="absolute -bottom-6 -right-6 z-[60] bg-emerald-500 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}