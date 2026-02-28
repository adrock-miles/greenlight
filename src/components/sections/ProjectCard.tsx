import type { ProjectFrontmatter } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  frontmatter: ProjectFrontmatter;
}

export function ProjectCard({ frontmatter }: ProjectCardProps) {
  return (
    <Card className="cursor-pointer transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-1">
      {frontmatter.image && (
        <div className="overflow-hidden rounded-t-[var(--radius-lg)]">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
        <CardDescription>{frontmatter.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
