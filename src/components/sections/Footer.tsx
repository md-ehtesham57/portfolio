import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="py-12 relative">

            <Container>
                <div className="relative rounded-2xl border border-white/10 bg-[#111627]/80 backdrop-blur-xl px-6 py-8 shadow-[0_0_30px_rgba(124,58,237,0.04)]">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                        {/* LEFT */}
                        <div className="text-center md:text-left">
                            <p className="text-white font-semibold text-lg">
                                Md Ehtesham<span className="text-violet-400 animate-pulse">_</span>
                            </p>
                            <p className="text-slate-400 text-sm mt-2">
                                Full Stack Web Developer
                            </p>
                        </div>

                        {/* CENTER NAV */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
                            <a href="#projects" className="text-slate-400 hover:text-violet-300 transition-colors">
                                Projects
                            </a>
                            <a href="#about" className="text-slate-400 hover:text-violet-300 transition-colors">
                                About
                            </a>
                            <a href="#contact" className="text-slate-400 hover:text-violet-300 transition-colors">
                                Contact
                            </a>
                        </div>

                        {/* RIGHT LINKS */}
                        <div className="flex gap-6 text-sm font-mono">
                            <a
                                href="https://github.com/md-ehtesham57"
                                target="_blank"
                                className="text-slate-400 hover:text-violet-300 transition-colors"
                            >
                                [ GitHub ]
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-ehtesham-153344259/"
                                target="_blank"
                                className="text-slate-400 hover:text-violet-300 transition-colors"
                            >
                                [ LinkedIn ]
                            </a>
                        </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="my-8 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

                    {/* BOTTOM */}
                    <div className="text-center text-xs text-slate-500 font-mono">
                        © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
                    </div>

                </div>
            </Container>
        </footer>
    );
}