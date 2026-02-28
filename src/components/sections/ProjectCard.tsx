import type { ProjectFrontmatter } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  frontmatter: ProjectFrontmatter;
}

export function ProjectCard({ frontmatter }: ProjectCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1.5">
      {frontmatter.image && (
        <div className="overflow-hidden">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg transition-colors duration-200 group-hover:text-[hsl(var(--primary))]">
          {frontmatter.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {frontmatter.description}
        </CardDescription>
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
