import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up";
}

export function AnimateIn({
  children,
  className,
  animation = "fade-in-up",
}: AnimateInProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "animate-on-scroll",
        inView && `in-view ${animation}`,
        className
      )}
    >
      {children}
    </div>
  );
}
