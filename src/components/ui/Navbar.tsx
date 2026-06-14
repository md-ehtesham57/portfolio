"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 ${scrolled ? "border-violet-500/20 bg-[#080a12]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(124,58,237,0.08)]" : "border-transparent bg-transparent"}`}>
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-xs font-bold text-white">
              E
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">Md Ehtesham</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://shorturl.at/uKWXm"
              target="_blank"
              className="ml-3 px-4 py-2 text-sm text-violet-300 border border-violet-500/40 rounded-lg hover:bg-violet-500/10 hover:border-violet-400/60 transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white transition-colors">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 p-4 rounded-2xl border border-violet-500/20 bg-[#080a12]/95 backdrop-blur-xl flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://shorturl.at/uKWXm"
              target="_blank"
              className="mt-2 px-4 py-3 text-sm text-violet-300 border border-violet-500/30 rounded-xl text-center"
            >
              Download Resume ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}