import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Animation =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  stagger?: number;
  threshold?: number;
}

export function AnimateIn({
  children,
  className,
  animation = "fade-in-up",
  stagger,
  threshold = 0.1,
}: AnimateInProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "animate-on-scroll",
        inView && `in-view ${animation}`,
        stagger && `stagger-${stagger}`,
        className
      )}
    >
      {children}
    </div>
  );
}
