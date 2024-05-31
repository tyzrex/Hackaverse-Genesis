import PrimeItClub from "@/assets/it_club_logo 1.png";
import InstagramIcon from "@/assets/li_instagram.png";
import FacebookIcon from "@/assets/li_facebook.png";
import TwitterIcon from "@/assets/li_twitter.png";
import YouTubeIcon from "@/assets/li_youtube.png";

export default function Footer() {
  return (
    <>
      <footer
        className="bg-black bg-cover bg-center text-white"
        style={{
          backgroundImage:
            'url("https://assets.website-files.com/63904f663019b0d8edf8d57c/6399731b4cdf484f42d3d80b_Mask%20group%20(2).svg")',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex flex-col items-center">
            <a href="#" className="mb-8 inline-block max-w-full">
              <img src={PrimeItClub} alt="" className="inline-block max-w-52" />
            </a>
            <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
              >
                About
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
              >
                Schedule
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
              >
                Contact
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
              >
                Support
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
              >
                Help
              </a>
            </div>
            <div className="mt-8 w-48 border-b border-solid border-b-white"></div>
            <div className="text-center my-10">
              <h3 className="text-[14px] md:text-[18px] lg:text-[24px] uppercase font-[Orbitron] font-bold text-[#B333D9]">
                Follow us on
              </h3>
              <div className="flex gap-4 flex-wrap mt-2 justify-center">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-9 h-9 md:w-10 md:h-10 mr-2"
                  >
                    <div className="border border-purple-900 rounded-full p-[10px]">
                      <img src={social.icon} alt={social.name} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <p className="max-[479px]:text-sm">
              Prime IT Club © Copyright 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/primeitclub/",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/primeitclub",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/primeitclub",
    icon: TwitterIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@primeitclub",
    icon: YouTubeIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/prime-it-club/",
    icon: YouTubeIcon,
  },
];
