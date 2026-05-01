"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 pt-4">
      <Container>
        <div className="flex items-center justify-between h-14 px-6 rounded-full border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] bg-black/60 backdrop-blur-md transition-all hover:border-emerald-500/50">

          {/* Logo */}
          <Link href="/" className="text-md font-bold tracking-tighter hover:text-emerald-400 transition-all">
            Md Ehtesham<span className="text-emerald-500 animate-pulse">_</span>
          </Link>

          {/* Links */}
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
        </div>
      </Container>
    </nav>
  );
}