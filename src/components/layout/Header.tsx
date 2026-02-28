import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold text-[hsl(var(--foreground))] transition-colors duration-200 hover:text-[hsl(var(--primary))]"
        >
          Greenlight
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/#about"
                ? pathname === "/"
                : pathname.startsWith(link.to);

            const LinkEl = link.to.startsWith("/#") ? "a" : Link;
            const linkProps = link.to.startsWith("/#")
              ? { href: link.to }
              : { to: link.to };

            return (
              <LinkEl
                key={link.to}
                {...(linkProps as any)}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[1.19rem] left-0 right-0 h-0.5 bg-[hsl(var(--primary))]" />
                )}
              </LinkEl>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/95 backdrop-blur-xl sm:hidden">
          <div className="mx-auto max-w-5xl space-y-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/#about"
                  ? pathname === "/"
                  : pathname.startsWith(link.to);

              const LinkEl = link.to.startsWith("/#") ? "a" : Link;
              const linkProps = link.to.startsWith("/#")
                ? { href: link.to }
                : { to: link.to };

              return (
                <LinkEl
                  key={link.to}
                  {...(linkProps as any)}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                      : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
                  )}
                >
                  {link.label}
                </LinkEl>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
