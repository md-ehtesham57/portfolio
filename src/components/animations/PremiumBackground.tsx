"use client";

import { motion } from "framer-motion";

export default function PremiumBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#020617]">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617]" />

      {/* Center focal glow (IMPORTANT) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Secondary moving glow (very subtle) */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay (slightly animated) */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </div>
  );
}