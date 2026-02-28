import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AnimateIn } from "@/components/AnimateIn";
import { Separator } from "@/components/ui/separator";

export function HomePage() {
  return (
    <>
      <AnimateIn animation="fade-in">
        <Hero />
      </AnimateIn>
      <Separator />
      <AnimateIn animation="fade-in-up">
        <About />
      </AnimateIn>
    </>
  );
}
