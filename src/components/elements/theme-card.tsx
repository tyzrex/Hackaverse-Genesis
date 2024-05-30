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
}

export default function ThemeCard({ id, name, goal }: ThemeCardProps) {
  return (
    <>
      <Card id={id.toString()}>
        <CardHeader>
          <CardTitle>SDG {goal}</CardTitle>
          <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
}
