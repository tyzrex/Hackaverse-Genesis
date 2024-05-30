import { themeData } from "@/constants/theme";
import ThemeCard from "../elements/theme-card";

export default function ThemeSection() {
  return (
    <section className="py-20 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md my-20">
      {themeData.map((theme) => (
        <ThemeCard
          id={theme.id}
          name={theme.themeName}
          goal={theme.sdGoalNumber}
        />
      ))}
    </section>
  );
}
