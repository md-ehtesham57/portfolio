import Container from "@/components/ui/Container";

const projects = [
  {
    title: "Hexcode — Online Coding Platform",
    description: "Execute, test, and submit code solutions in real time. Built for efficient problem-solving and developer skill improvement.",
    tech: ["Node.js", "Vite", "Tailwind", "React", "PostgreSQL", "Judge0"],
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

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pb-20">
      <Container>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12">
          Projects
        </h1>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-emerald-500/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm hover:border-emerald-500/40 transition"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-gray-700 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Live →
                </a>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}