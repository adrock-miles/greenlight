import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadProjectBySlug } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? loadProjectBySlug(slug) : null;

  if (!project) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
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
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Button asChild variant="ghost" className="mb-8 -ml-2">
        <Link to="/projects">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
        {frontmatter.title}
      </h1>
      <p className="mt-2 text-lg text-[hsl(var(--muted-foreground))]">
        {frontmatter.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {frontmatter.image && (
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="w-full rounded-[var(--radius-lg)] mt-8"
        />
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
