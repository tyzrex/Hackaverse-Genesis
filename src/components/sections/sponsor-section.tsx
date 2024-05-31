import SectionHeader from "../typography/section-header";
import SectionInfo from "../typography/section-info";
import { Card, CardContent } from "../ui/card";
import SectionWrapper from "../wrapper/section-wrapper";

const sponsors = [
  {
    tier: "title",
    sponsors: [
      {
        name: "Title Sponsor",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },
  {
    tier: "platinum",
    sponsors: [
      {
        name: "Platinum Sponsor 1",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Platinum Sponsor 2",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },
  {
    tier: "gold",
    sponsors: [
      {
        name: "Gold Sponsor 1",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Gold Sponsor 2",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },

  {
    tier: "silver",
    sponsors: [
      {
        name: "Silver Sponsor 1",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Silver Sponsor 2",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },
  {
    tier: "bronze",
    sponsors: [
      {
        name: "Bronze Sponsor 1",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Bronze Sponsor 2",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Bronze Sponsor 3",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Bronze Sponsor 4",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },
  {
    tier: "community",
    sponsors: [
      {
        name: "Community Sponsor 1",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Community Sponsor 2",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Community Sponsor 3",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
      {
        name: "Community Sponsor 4",
        logo: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png",
        url: "https://www.example.com",
      },
    ],
  },
];

export default function SponsorSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader headingText="SPONSORS" />
        <SectionInfo
          subheader="We are grateful to our sponsors for their generous support."
          className="my-10"
        />
        <div className="flex flex-col items-center justify-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.tier}>
              <h3 className="text-2xl font-bold text-white mt-10 mb-5 text-center">
                {sponsor.tier.toUpperCase()}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-5">
                {sponsor.sponsors.map((sponsor) => (
                  <Card key={sponsor.name} className="p-0">
                    <CardContent className="p-0">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${sponsor.logo}`}
                          alt={sponsor.name}
                          className="aspect-[3/2] 
                            w-full object-cover min-w-32 max-w-48 md:max-w-64 
                          "
                        />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
