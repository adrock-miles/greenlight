import { Link } from "react-router-dom";
import { loadAllProjects } from "@/lib/content";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function ProjectsPage() {
  const projects = loadAllProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mb-8">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`}>
            <ProjectCard frontmatter={project.frontmatter} />
          </Link>
        ))}
      </div>
    </section>
  );
}
