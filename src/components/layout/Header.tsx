import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
        >
          Greenlight
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/#about"
                ? pathname === "/"
                : pathname.startsWith(link.to);

            return link.to.startsWith("/#") ? (
              <a
                key={link.to}
                href={link.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/"
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                )}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
