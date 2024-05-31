import { cn } from "@/lib/utils";

export default function SectionInfo({
  subheader,
  className,
}: {
  subheader: string;
  className?: string;
}) {
  return (
    <>
      <p
        className={cn(
          "text-[14px] font-normal leading-5  text-center md:max-w-2xl md:text-[18px]",
          className
        )}
      >
        {subheader}
      </p>
    </>
  );
}
