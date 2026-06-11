import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";
import Navbar from "@/components/ui/Navbar";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-28">
        <ProjectDetail project={project} />
      </main>
    </>
  );
}
