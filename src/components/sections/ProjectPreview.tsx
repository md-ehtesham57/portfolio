"use client";

import { motion } from "framer-motion";

export default function ProjectPreview() {
  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src="/Profile.jpeg" // replace this
          alt="Profile picture"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}