import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CTAButton({ className }: { className?: string }) {
  return (
    <>
      <Button
        className={cn("bg-white text-black font-[Orbitron] w-full", className)}
      >
        REGISTER NOW
      </Button>
    </>
  );
}
