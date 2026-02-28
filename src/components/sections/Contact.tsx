import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseMarkdown, type ContactFrontmatter } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/AnimateIn";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import contactRaw from "/content/contact.md?raw";

export function Contact() {
  const { frontmatter, content } = parseMarkdown<ContactFrontmatter>(contactRaw);

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn animation="fade-in-up">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3">
          Contact
        </h2>
        <div className="h-px w-12 bg-[hsl(var(--primary))] mb-10" />
      </AnimateIn>

      <div className="grid gap-10 md:grid-cols-2">
        <AnimateIn animation="fade-in-up" stagger={2}>
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[hsl(var(--accent))]">
                    <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">Email</p>
                    <a
                      href={`mailto:${frontmatter.email}`}
                      className="text-[hsl(var(--foreground))] font-medium hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    >
                      {frontmatter.email}
                    </a>
                  </div>
                </div>

                {frontmatter.location && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[hsl(var(--accent))]">
                      <MapPin className="h-5 w-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">Location</p>
                      <span className="text-[hsl(var(--foreground))] font-medium">{frontmatter.location}</span>
                    </div>
                  </div>
                )}

                {frontmatter.availability && (
                  <div className="rounded-[var(--radius-lg)] bg-[hsl(var(--accent))] p-4">
                    <p className="text-sm text-[hsl(var(--accent-foreground))]">
                      {frontmatter.availability}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
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
            </CardContent>
          </Card>
        </AnimateIn>

        <AnimateIn animation="fade-in-up" stagger={3}>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-[hsl(var(--muted-foreground))]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
