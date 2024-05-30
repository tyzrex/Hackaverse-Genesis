import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ThemeCardProps {
  id: number;
  name: string;
  goal: string;
  image: string;
}

export default function ThemeCard({ id, name, goal, image }: ThemeCardProps) {
  return (
    <>
      <Card
        id={id.toString()}
        className="bg-black border border-gray-600 text-white w-full rounded-none"
      >
        <CardHeader>
          <CardTitle>SDG {goal}</CardTitle>
          <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={image} alt="Theme" className="aspect-[2/1.5]" />
        </CardContent>
      </Card>
    </>
  );
}
