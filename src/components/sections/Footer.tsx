import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="py-6 relative">

            <Container>
                <div className="relative rounded-2xl border border-emerald-500/20 bg-black/40 backdrop-blur-md px-6 py-8">

                    {/* GRID */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                        {/* LEFT */}
                        <div className="text-center md:text-left">
                            <p className="text-white font-semibold text-lg">
                                Md Ehtesham<span className="text-emerald-500 animate-pulse">_</span>
                            </p>
                            <p className="text-zinc-400 text-sm mt-2">
                                Building modern web experiences.
                            </p>
                        </div>

                        {/* CENTER NAV */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-zinc-400">
                            <a href="#projects" className="hover:text-emerald-400 transition">
                                Projects
                            </a>
                            <a href="#about" className="hover:text-emerald-400 transition">
                                About
                            </a>
                            <a href="#contact" className="hover:text-emerald-400 transition">
                                Contact
                            </a>
                        </div>

                        {/* RIGHT LINKS */}
                        <div className="flex gap-6 text-sm font-mono text-zinc-400">
                            <a
                                href="https://github.com/md-ehtesham57"
                                target="_blank"
                                className="hover:text-emerald-400 transition"
                            >
                                [ GitHub ]
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="hover:text-emerald-400 transition"
                            >
                                [ LinkedIn ]
                            </a>
                        </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="my-8 h-px bg-emerald-500/10" />

                    {/* BOTTOM */}
                    <div className="text-center text-xs text-zinc-500 font-mono">
                        © {new Date().getFullYear()} — All systems operational.
                    </div>

                </div>
            </Container>
        </footer>
    );
}