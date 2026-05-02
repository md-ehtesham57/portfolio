"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 pt-4">
      <Container>
        <div className="flex items-center justify-between h-14 px-6 rounded-full border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] bg-black/60 backdrop-blur-md transition-all hover:border-emerald-500/50">

          {/* Logo */}
          <Link href="/" className="text-md font-bold tracking-tighter hover:text-emerald-400 transition-all">
            Md Ehtesham<span className="text-emerald-500 animate-pulse">_</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/projects" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> Projects
            </Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> About
            </Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> Contact
            </Link>
          </div>

          {/* Mobile Buttons */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white cursor-pointer"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mt-4"
          >
            <Container>
              <div className="flex flex-col gap-4 p-4 rounded-2xl border border-emerald-500/20 bg-black/80 backdrop-blur-md">

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/projects"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-full border border-emerald-500/20 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
              // Projects
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-full border border-emerald-500/20 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
              // About
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-full border border-emerald-500/20 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
              // Contact
                  </Link>
                </motion.div>

              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}