export default function SectionHeader({
  headingText,
}: {
  headingText: string;
}) {
  return (
    <h2
      className="text-[#F3E6F5] relative z-20 font-[Orbitron] text-3xl"
      style={{
        textShadow: "0px 0px 50px #51155A, 0px 0px 25px #82219E",
        WebkitTextStrokeWidth: 2,
        WebkitTextStrokeColor: "#C7BDCA",
      }}
    >
      {headingText}
    </h2>
  );
}
