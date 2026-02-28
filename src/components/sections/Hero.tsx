import { Link } from "react-router-dom";
import { parseMarkdown, type AboutFrontmatter } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutRaw from "/content/about.md?raw";

export function Hero() {
  const { frontmatter } = parseMarkdown<AboutFrontmatter>(aboutRaw);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-28 sm:py-40">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-[hsl(var(--brand-200))]/20 blur-3xl dark:bg-[hsl(var(--brand-900))]/10" />

      <div className="relative max-w-3xl">
        <div className="animate-on-scroll in-view fade-in stagger-1">
          <p className="inline-block rounded-full bg-[hsl(var(--accent))] px-4 py-1.5 text-sm font-medium text-[hsl(var(--primary))]">
            {frontmatter.role}
          </p>
        </div>

        <h1 className="animate-on-scroll in-view fade-in-up stagger-2 mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[hsl(var(--foreground))]">
          {frontmatter.name}
        </h1>

        <p className="animate-on-scroll in-view fade-in-up stagger-3 mt-6 max-w-xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl">
          {frontmatter.tagline}
        </p>

        <div className="animate-on-scroll in-view fade-in-up stagger-4 mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link to="/projects">
              View Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
