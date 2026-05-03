import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <section className="pt-6 pb-6 overflow-hidden">
      <Container>
        {/* Main Content Grid - Centered on Y-Axis */}
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          
          {/* Narrative Content - Vertically Centered */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Minimalist Heading within the content flow */}
            <div className="font-mono mb-2">
              <span className="text-emerald-500 text-lg">{">"} whoami</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-1 tracking-tighter">
                ./ehtesham<span className="animate-pulse text-emerald-500">_</span>
              </h1>
            </div>

            <div className="font-mono text-base text-zinc-400 leading-relaxed space-y-6">
              <p>
                I am an intermidiate-level <span className="text-white">Backend Developer</span> currently finalizing my degree. 
                My workflow is built around <span className="text-emerald-400">Arch Linux</span> and <span className="text-emerald-400">Neovim</span>, 
                where I craft scalable server-side logic and clean architectures.
              </p>
              <p>
                I thrive in the <span className="text-white text-xs px-2 py-1 bg-zinc-800 rounded">Node.js</span> ecosystem, 
                turning complex problems into efficient RESTful APIs. When I&apos;m not debugging middleware, 
                I&apos;m exploring systems-level programming and low-level optimizations.
              </p>
            </div>

            {/* Environment Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest">
                  # environment
                </span>
                <span className="text-white font-bold text-lg">Arch Linux (Omarchy)</span>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest">
                  # editor
                </span>
                <span className="text-white font-bold text-lg">LazyVim (Neovim)</span>
              </div>
            </div>
          </div>

          {/* Technical Arsenal - The "Anchor" Box */}
          <div className="relative group">
             <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
             
             <div className="relative border border-emerald-500/20 rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl">
                <h3 className="text-emerald-400 font-mono text-sm mb-8 uppercase tracking-[0.2em] text-center">
                  [ technical_arsenal ]
                </h3>
                
                <ul className="space-y-5 font-mono text-[11px] text-zinc-300">
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-500">BACKEND:</span>
                    <span className="text-white text-right font-medium">Node.js, Express, Mongoose</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-500">DATABASE:</span>
                    <span className="text-white font-medium text-right">PostgreSQL, MongoDB, MySQL</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-500">LOW_LEVEL:</span>
                    <span className="text-white font-medium text-right">C / C++ (DSA Focus)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-500">DEV_OPS:</span>
                    <span className="text-white font-medium text-right">Docker, Judge0, Postman</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-500">FRONTEND:</span>
                    <span className="text-white font-medium text-right">React, Next.js, Tailwind</span>
                  </li>
                </ul>

                <div className="mt-10">
                  <button className="w-full py-4 border border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.3em] rounded-xl">
                    DOWNLOAD_CV.bin
                  </button>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}