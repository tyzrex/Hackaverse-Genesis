import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CTADiscordButton({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <a href="https://discord.com/invite/hF39wpp3">
        <Button
          className={cn(
            "bg-white text-black font-[Orbitron] w-full",
            className
          )}
        >
          Join us on Discord
        </Button>
      </a>
    </>
  );
}
