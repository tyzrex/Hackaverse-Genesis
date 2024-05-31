import { themeData } from "@/constants/theme";
import ThemeCard from "../elements/theme-card";
import SectionHeader from "../typography/section-header";
import SectionInfo from "../typography/section-info";

export default function ThemeSection() {
  return (
    <section className="py-10 md:py-20 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md my-20">
      <SectionHeader headingText="THEME" />
      <SectionInfo
        subheader="The themes of our Hackathon revolves around Sustainable Development
        Goals (SDGs), specifically focusing on four key goals:"
        className="my-10 "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {themeData.map((theme) => (
          <ThemeCard
            id={theme.id}
            name={theme.themeName}
            goal={theme.sdGoalNumber}
            image={theme.image}
          />
        ))}
      </div>
    </section>
  );
}
