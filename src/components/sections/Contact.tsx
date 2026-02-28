import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseMarkdown, type ContactFrontmatter } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import contactRaw from "/content/contact.md?raw";

export function Contact() {
  const { frontmatter, content } = parseMarkdown<ContactFrontmatter>(contactRaw);

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mb-8">
        Contact
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
            <a
              href={`mailto:${frontmatter.email}`}
              className="text-lg font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {frontmatter.email}
            </a>
          </div>
          {frontmatter.location && (
            <div className="flex items-center gap-2 mb-4 text-[hsl(var(--muted-foreground))]">
              <MapPin className="h-5 w-5" />
              <span>{frontmatter.location}</span>
            </div>
          )}
          {frontmatter.availability && (
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6">
              {frontmatter.availability}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            {frontmatter.social?.map((link) => (
              <Button key={link.label} variant="outline" size="sm" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
