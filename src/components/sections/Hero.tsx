import { Link } from "react-router-dom";
import { parseMarkdown, type AboutFrontmatter } from "@/lib/content";
import { Button } from "@/components/ui/button";
import aboutRaw from "/content/about.md?raw";

export function Hero() {
  const { frontmatter } = parseMarkdown<AboutFrontmatter>(aboutRaw);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-[hsl(var(--primary))] mb-2">
          {frontmatter.role}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-[hsl(var(--foreground))]">
          {frontmatter.name}
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
          {frontmatter.tagline}
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link to="/projects">View Work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
