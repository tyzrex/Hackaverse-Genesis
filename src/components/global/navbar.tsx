import { NavLinks } from "@/constants/navbar";
import CTAButton from "../reusables/cta-button";
import HackaverseLogo from "@/assets/hack.png";
import MobileNavbar from "./mobile-navbar";
export default function Navbar() {
  return (
    <>
      <header>
        <div className="h-24 flex items-center">
          <nav className="mx-auto h-auto w-full lg:relative lg:top-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
              <a
                href="/"
                aria-current="page"
                className="relative float-left bg-[#00000000] leading-[0] text-[#333333] no-underline hover:outline-0 max-[991px]:mr-auto max-[767px]:pl-0"
                aria-label="home"
              >
                <img
                  src={HackaverseLogo}
                  loading="lazy"
                  alt=""
                  className="inline-block max-h-6 max-w-full"
                />
              </a>
              {/* MENU CONTENT 1 */}
              <div className="mt-14 lg:flex space-y-8 lg:mt-0 lg:flex-row lg:space-x-1 lg:space-y-0 hidden gap-5">
                {NavLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.path}
                    className="text-textsec text-lg"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="lg:flex flex-col space-y-8 lg:flex-row lg:space-x-3 lg:space-y-0 mt-8 lg:mt-0 hidden">
                <a href="#">
                  <CTAButton className="hover:bg-fuchsia-600 hover:text-white transition-colors duration-500" />
                </a>
              </div>
              {/* BURGER MENU */}
              <div className="absolute right-5 lg:hidden">
                <MobileNavbar />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
