import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CTAButton({ className }: { className?: string }) {
  return (
    <>
      <a href="https://guide.devfolio.co/organizers/apply-with-devfolio-integration">
        <Button
          className={cn(
            "bg-white text-black font-[Orbitron] w-full",
            className
          )}
        >
          REGISTER NOW
        </Button>
      </a>
    </>
  );
}
