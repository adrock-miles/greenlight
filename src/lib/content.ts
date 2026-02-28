import YAML from "yaml";

/**
 * Lightweight frontmatter parser — no Node dependencies.
 * Replaces gray-matter which requires Buffer.
 */
export function parseMarkdown<T>(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {} as T, content: raw };
  }
  const frontmatter = YAML.parse(match[1]) as T;
  const content = match[2];
  return { frontmatter, content };
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  date: string;
  featured?: boolean;
  order?: number;
}

export interface AboutFrontmatter {
  name: string;
  role: string;
  tagline: string;
  headshot?: string;
}

export interface ContactFrontmatter {
  email: string;
  location?: string;
  availability?: string;
  social: { label: string; url: string }[];
}

const projectModules = import.meta.glob("/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function loadProjectBySlug(slug: string) {
  const projects = loadAllProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function loadAllProjects() {
  const projects: {
    slug: string;
    frontmatter: ProjectFrontmatter;
    content: string;
  }[] = [];

  for (const [path, raw] of Object.entries(projectModules)) {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";
    const { frontmatter, content } = parseMarkdown<ProjectFrontmatter>(
      raw as string
    );
    projects.push({ slug, frontmatter, content });
  }

  return projects.sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );
}
