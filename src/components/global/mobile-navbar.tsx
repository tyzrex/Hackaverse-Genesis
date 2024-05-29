import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants/navbar";
import { Menu } from "lucide-react";
import CTAButton from "../reusables/cta-button";
export default function MobileNavbar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent side={"left"} className="gradient">
          <SheetHeader className="text-left">
            <SheetTitle>Hackaverse Genesis</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col items-start gap-5 mt-10">
            {NavLinks.map((link, idx) => (
              <a href={link.path} className="text-textsec text-lg" key={idx}>
                {link.title}
              </a>
            ))}
          </div>
          <SheetFooter className="mt-10 w-full">
            <CTAButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
