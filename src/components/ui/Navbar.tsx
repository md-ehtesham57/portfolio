"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    // Changed: Added padding-top and removed full-width border
    <nav className="fixed top-0 w-full z-50 pt-4">
      <Container>
        {/* Changed: Added rounded corners, border, and tighter max-width feel */}
        <div className="flex items-center justify-between h-14 px-6 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
          
          {/* Logo: Styled to match the 'whoami' vibe */}
          <Link href="/" className="text-md font-bold tracking-tighter hover:text-emerald-400 transition-colors">
            Md Ehtesham<span className="text-emerald-500">_</span>
          </Link>

          {/* Links: Added 'hover' effects and consistent spacing */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400">
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> projects
            </Link>
            <Link href="#about" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> about
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              <span className="text-emerald-500/50 mr-1">//</span> contact
            </Link>
          </div>

        </div>
      </Container>
    </nav>
  );
}