import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-10">
      <Container>
        <div className="glass rounded-3xl px-8 py-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold tracking-tight text-foreground">
                Md Ehtesham<span className="text-accent">.</span>
              </p>
              <p className="mt-1 text-sm text-faint">
                Full-stack developer — Bhopal, India
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/projects"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>

            <div className="flex gap-3">
              <a
                href="https://github.com/md-ehtesham57"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-subtle rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-ehtesham-153344259/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-subtle rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p
            className="text-center font-mono text-xs text-faint"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} Md Ehtesham · Built with Next.js,
            Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
