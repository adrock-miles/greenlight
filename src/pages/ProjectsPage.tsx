import { Link } from "react-router-dom";
import { loadAllProjects } from "@/lib/content";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { AnimateIn } from "@/components/AnimateIn";

export function ProjectsPage() {
  const projects = loadAllProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn animation="fade-in-up">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3">
          Projects
        </h2>
        <div className="h-px w-12 bg-[hsl(var(--primary))] mb-10" />
      </AnimateIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <AnimateIn
            key={project.slug}
            animation="fade-in-up"
            stagger={((i % 4) + 1) as 1 | 2 | 3 | 4}
          >
            <Link to={`/projects/${project.slug}`}>
              <ProjectCard frontmatter={project.frontmatter} />
            </Link>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
