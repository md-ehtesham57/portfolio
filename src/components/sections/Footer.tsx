import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl border border-white/10 bg-[#111627]/80 backdrop-blur-xl px-8 py-8 shadow-[0_0_30px_rgba(124,58,237,0.04)]">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg">
                Md Ehtesham<span className="text-violet-400 animate-pulse">_</span>
              </p>
              <p className="text-slate-500 text-sm mt-1">Backend Developer</p>
            </div>

            {/* Nav */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/projects" className="text-slate-400 hover:text-violet-300 transition-colors">Projects</Link>
              <Link href="/about"    className="text-slate-400 hover:text-violet-300 transition-colors">About</Link>
              <Link href="/contact"  className="text-slate-400 hover:text-violet-300 transition-colors">Contact</Link>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://github.com/md-ehtesham57"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-ehtesham-153344259/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          <div className="text-center text-xs text-slate-600" suppressHydrationWarning>
            © {new Date().getFullYear()} Md Ehtesham — Built with Next.js &amp; Tailwind CSS
          </div>

        </div>
      </div>
    </footer>
  );
}