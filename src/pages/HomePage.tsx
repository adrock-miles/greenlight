import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AnimateIn } from "@/components/AnimateIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/button";
import { loadAllProjects } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  const featured = loadAllProjects()
    .filter((p) => p.frontmatter.featured)
    .slice(0, 3);

  return (
    <>
      <Hero />

      <About />

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-24">
          <AnimateIn animation="fade-in-up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3">
                  Featured Work
                </h2>
                <div className="h-px w-12 bg-[hsl(var(--primary))]" />
              </div>
              <Button variant="ghost" asChild className="hidden sm:inline-flex">
                <Link to="/projects">
                  All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <AnimateIn key={project.slug} animation="fade-in-up" stagger={(i + 1) as 1 | 2 | 3}>
                <Link to={`/projects/${project.slug}`}>
                  <ProjectCard frontmatter={project.frontmatter} />
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-in-up" className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/projects">
                All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimateIn>
        </section>
      )}
    </>
  );
}
