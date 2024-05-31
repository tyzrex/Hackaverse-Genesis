export default function SectionHeader({
  headingText,
  showBottomText,
}: {
  headingText: string;
  showBottomText?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <h2
        className="text-[#F3E6F5] relative z-20 font-[Orbitron] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        style={{
          textShadow: "0px 0px 50px #51155A, 0px 0px 25px #82219E",
          WebkitTextStrokeWidth: 2,
          WebkitTextStrokeColor: "#C7BDCA",
        }}
      >
        {headingText}
      </h2>

      {showBottomText && (
        <h2 className="hidden md:block text-[#F3E6F5] relative z-20 font-[Orbitron] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 text-bottom">
          {headingText}
        </h2>
      )}
    </div>
  );
}
