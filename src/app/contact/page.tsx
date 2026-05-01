import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-6 pb-20 overflow-hidden flex flex-col">
      <Container>
        {/* Main Content Grid - Centered on Y-Axis */}
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center px-4">
          
          {/* Narrative & Heading - Combined and Vertically Centered */}
          <div className="flex flex-col justify-center space-y-10">
            
            {/* Heading Integrated Here */}
            <div className="font-mono">
              <span className="text-emerald-500 text-lg">{">"} touch contact.json</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tighter">
                ./get_in_touch<span className="animate-pulse text-emerald-500">_</span>
              </h1>
            </div>

            <div className="font-mono text-base text-zinc-400 leading-relaxed space-y-8">
              <p>
                Have a project in mind or want to discuss <span className="text-emerald-400">Backend Architectures</span>? 
                I&apos;m always open to collaborating on innovative web platforms or systems-level tools.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <span className="text-emerald-500 text-xs uppercase tracking-widest min-w-[100px]">[ email ]</span>
                  <a href="mailto:mdehtesham313@gmail.com" className="hover:text-emerald-400 transition-colors">
                    mdehtesham313@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <span className="text-emerald-500 text-xs uppercase tracking-widest min-w-[100px]">[ location ]</span>
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Social Connection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/md-ehtesham57" className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest group-hover:text-emerald-400">
                  # source_control
                </span>
                <span className="text-white font-bold text-lg font-mono">GitHub</span>
              </a>
              <a href="#" className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest group-hover:text-emerald-400">
                  # professional_net
                </span>
                <span className="text-white font-bold text-lg font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form - The Vertical Anchor */}
          <div className="relative group">
             <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
             
             <div className="relative border border-emerald-500/20 rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl">
                <h3 className="text-emerald-400 font-mono text-sm mb-8 uppercase tracking-[0.2em] text-center">
                  [ send_message ]
                </h3>
                
                <form className="space-y-5 font-mono text-xs text-zinc-300">
                  <div className="space-y-2">
                    <label className="text-zinc-500 text-[10px] uppercase">name.str</label>
                    <input type="text" className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 text-white transition-all" placeholder="Enter name..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-zinc-500 text-[10px] uppercase">email.str</label>
                    <input type="email" className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 text-white transition-all" placeholder="Enter email..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-zinc-500 text-[10px] uppercase">payload.msg</label>
                    <textarea rows={4} className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 text-white transition-all resize-none" placeholder="Enter message payload..." />
                  </div>

                  <div className="mt-8">
                    <button className="w-full py-4 border border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.3em] rounded-xl">
                      SUBMIT_PAYLOAD.sh
                    </button>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}