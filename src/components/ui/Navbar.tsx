"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            YourName
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>

        </div>
      </Container>
    </nav>
  );
}