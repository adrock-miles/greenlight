import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))]/50 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            to="/"
            className="text-sm font-semibold text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            Greenlight
          </Link>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} Greenlight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
