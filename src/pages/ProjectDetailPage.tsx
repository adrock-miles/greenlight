import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadProjectBySlug } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? loadProjectBySlug(slug) : null;

  if (!project) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">
          Project not found
        </h2>
        <Button asChild variant="outline">
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </section>
    );
  }

  const { frontmatter, content } = project;

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <AnimateIn animation="fade-in">
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </AnimateIn>

      <AnimateIn animation="fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
          {frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
          {frontmatter.description}
        </p>
      </AnimateIn>

      <AnimateIn animation="fade-in-up" stagger={2}>
        <div className="flex flex-wrap gap-2 mt-5">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </AnimateIn>

      {frontmatter.image && (
        <AnimateIn animation="scale-in" stagger={3}>
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full rounded-[var(--radius-xl)] mt-10"
          />
        </AnimateIn>
      )}

      <AnimateIn animation="fade-in-up" stagger={4}>
        <div className="prose prose-neutral dark:prose-invert max-w-none mt-10 prose-p:leading-relaxed prose-p:text-[hsl(var(--muted-foreground))]">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </AnimateIn>
    </section>
  );
}
