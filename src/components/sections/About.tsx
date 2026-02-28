import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseMarkdown, type AboutFrontmatter } from "@/lib/content";
import aboutRaw from "/content/about.md?raw";

export function About() {
  const { frontmatter, content } = parseMarkdown<AboutFrontmatter>(aboutRaw);

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mb-8">
        About
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {frontmatter.headshot && (
          <div className="md:col-span-1">
            <img
              src={frontmatter.headshot}
              alt={frontmatter.name}
              className="rounded-[var(--radius-lg)] w-full aspect-square object-cover"
            />
          </div>
        )}
        <div className={frontmatter.headshot ? "md:col-span-2" : "md:col-span-3"}>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
