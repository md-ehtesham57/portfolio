import Container from "@/components/ui/Container";

export default function AboutSection() {
  const skills = [
    { category: "Backend", items: "Node.js · Express · Mongoose · REST APIs" },
    { category: "Database", items: "PostgreSQL · MongoDB · MySQL" },
    { category: "Low-Level", items: "C / C++ · Data Structures · Algorithms" },
    { category: "DevOps", items: "Docker · Judge0 · Postman · Git" },
    { category: "Frontend", items: "React · Next.js · Tailwind CSS" },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <p className="text-xs text-violet-400 font-mono uppercase tracking-widest mb-3">About</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Backend engineer,<br />
                <span className="text-slate-400 font-light">Linux enthusiast.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm an intermediate-level <span className="text-white">Backend Developer</span> currently
                finalizing my degree. My workflow is built around{" "}
                <span className="text-violet-300">Arch Linux</span> and{" "}
                <span className="text-violet-300">Neovim</span> — tools that reward deliberate thought over
                convenience.
              </p>
              <p>
                I thrive in the Node.js ecosystem, turning complex business requirements into
                efficient RESTful APIs and clean server-side logic. When I'm not debugging
                middleware, I'm exploring systems-level programming and low-level optimizations in C/C++.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs text-violet-400 font-mono mb-1">Environment</p>
                <p className="text-white font-semibold">Arch Linux (Omarchy)</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs text-violet-400 font-mono mb-1">Editor</p>
                <p className="text-white font-semibold">LazyVim (Neovim)</p>
              </div>
            </div>

            <a
              href="https://shorturl.at/uKWXm"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-violet-300 border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/8 rounded-xl transition-all duration-200"
            >
              Download CV ↗
            </a>
          </div>

          {/* RIGHT — Skills table */}
          <div className="relative">
            <div className="absolute -inset-4 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl border border-white/8 bg-[#111627]/80 backdrop-blur-xl p-6">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-6">Tech Stack</p>

              <div className="space-y-1">
                {skills.map((s, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <span className="text-xs text-violet-400 font-mono uppercase tracking-wider min-w-[80px] pt-0.5">{s.category}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{s.items}</span>
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-violet-500/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-violet-500/20 rounded-bl-lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}