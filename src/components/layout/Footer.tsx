export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
        &copy; {new Date().getFullYear()} Greenlight. All rights reserved.
      </div>
    </footer>
  );
}
