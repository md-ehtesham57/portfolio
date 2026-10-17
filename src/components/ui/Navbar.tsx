"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import LensPanel from "@/components/ui/glass/LensPanel";
import { EASE } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastY.current = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const delta = y - lastY.current;
      if (y < 200 || delta < -6) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      }
      lastY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <nav
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-2" : "pt-4"
      } ${hidden && !isOpen ? "-translate-y-24" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LensPanel
          radius={26}
          tint={
            isOpen
              ? "rgba(9, 11, 20, 0.72)"
              : scrolled
                ? "rgba(9, 11, 20, 0.62)"
                : "rgba(11, 13, 24, 0.38)"
          }
          className={`w-full transition-shadow duration-500 ${
            scrolled ? "shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)]" : ""
          }`}
          contentClassName="flex w-full items-center justify-between gap-3 py-2 pr-2 pl-5 sm:pl-6"
        >
          <Link
            href="/"
            className={`group rounded-full text-lg font-semibold tracking-tight text-foreground ${focusRing}`}
          >
            ME
            <span className="text-accent transition-opacity duration-300 group-hover:opacity-70">
              .
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 hover:bg-white/[0.06] ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } ${focusRing}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center rounded-full border border-white/10 bg-white/[0.07] px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.14] md:inline-flex ${focusRing}`}
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-foreground transition-colors hover:bg-white/[0.12] md:hidden ${focusRing}`}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </LensPanel>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="mt-3 md:hidden"
            >
              <div className="glass-strong flex flex-col gap-1 rounded-3xl p-3">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + index * 0.05,
                        duration: 0.3,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors ${
                          active
                            ? "bg-white/[0.06] text-foreground"
                            : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.06 + navLinks.length * 0.05,
                    duration: 0.3,
                    ease: EASE,
                  }}
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block rounded-2xl bg-white/[0.08] px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-white/[0.14]"
                  >
                    Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
