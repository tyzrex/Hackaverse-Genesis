import ITClubLogo from "./assets/it_club_logo 1.png";
import InstagramIcon from "./assets/li_instagram.png";
import FacebookIcon from "./assets/li_facebook.png";
import TwitterIcon from "./assets/li_twitter.png";
import YouTubeIcon from "./assets/li_youtube.png";
import CountdownTimer from "./_components/counter";

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

function App() {
  const event = {
    date: new Date("2027-01-27T23:59:59"),
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen">
        <div className="overlay"></div>
        <div className="background"></div>
        <img src={ITClubLogo} alt="IT Club Logo" className="w-32 mt-10" />

        <h1 className="text-[32px] lg:text-[64px] font-bold mt-5 font-main from-[#C915E5] to-[#7F0EA0] bg-gradient-to-r bg-clip-text text-transparent text-center">
          SOMETHING EXCITING IS ON THE WAY
        </h1>
        <h2 className="text-[24px] lg:text-[36px] mt-10 uppercase font-secondary font-bold text-[#B333D9]">
          Coming soon in
        </h2>

        <CountdownTimer event={event} />
        <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center p-10">
          <h3 className="text-[18px] uppercase font-main font-bold text-[#B333D9]">
            Follow us on
          </h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-10 h-10 mr-2"
              >
                <div className="border border-purple-900 rounded-full p-[10px]">
                  <img src={social.icon} alt={social.name} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
