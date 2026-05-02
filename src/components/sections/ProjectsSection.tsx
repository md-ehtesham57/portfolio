import Container from "@/components/ui/Container";

const projects = [
  {
    title: "Hexcode — Online Coding Platform",
    description: "Execute, test, and submit code solutions in real time...",
    tech: ["React", "Node.js", "PostgreSQL", "Judge0", "Vite", "Tailwind"],
    github: "https://github.com/md-ehtesham57/hexcode",
    live: "#",
  },
  {
    title: "Car & Bike Rental Platform",
    description: "Responsive UI for booking vehicles with clean UX and filtering.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/md-ehtesham57/rovio-car-bike-rental",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated developer portfolio built with Next.js and Framer Motion.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen pt-4 pb-20 overflow-hidden">
      <Container>
        
        {/* Terminal Style Heading */}
        <div className="mb-8 font-mono relative z-10">
          <span className="text-emerald-500 text-lg">{">"} ls</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 tracking-tighter">
            ./my_work<span className="animate-pulse text-emerald-500">_</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-emerald-500/10 rounded-2xl p-8 bg-zinc-900/20 backdrop-blur-md 
                         hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all duration-500"
            >
              {/* Subtle Glow behind each card on hover */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-mono text-emerald-500/60 mb-3 block uppercase tracking-widest">
                  0{index + 1} // project_build
                </span>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-zinc-400 mb-6 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Tech stack with Mono Font */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links styled like Terminal Buttons */}
                <div className="flex gap-6 font-mono text-xs tracking-widest">
                  <a href={project.github} className="text-zinc-500 hover:text-emerald-400 transition-all">
                    [ GITHUB ]
                  </a>
                  <a href={project.live} className="text-zinc-500 hover:text-emerald-400 transition-all">
                    [ LIVE_DEMO ]
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}