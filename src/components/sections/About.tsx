import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseMarkdown, type AboutFrontmatter } from "@/lib/content";
import { AnimateIn } from "@/components/AnimateIn";
import aboutRaw from "/content/about.md?raw";

export function About() {
  const { frontmatter, content } = parseMarkdown<AboutFrontmatter>(aboutRaw);

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn animation="fade-in-up">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3">
          About
        </h2>
        <div className="h-px w-12 bg-[hsl(var(--primary))] mb-10" />
      </AnimateIn>

      <div className="grid gap-12 md:grid-cols-3">
        {frontmatter.headshot && (
          <AnimateIn animation="scale-in" className="md:col-span-1">
            <div className="overflow-hidden rounded-[var(--radius-xl)]">
              <img
                src={frontmatter.headshot}
                alt={frontmatter.name}
                className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </AnimateIn>
        )}
        <AnimateIn
          animation="fade-in-up"
          stagger={2}
          className={frontmatter.headshot ? "md:col-span-2" : "md:col-span-3"}
        >
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-[hsl(var(--muted-foreground))]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
