import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PeopleCardProps {
  id: number;
  name: string;
  designation: string;
  photo: string;
}

export default function PeopleCard({
  id,
  name,
  designation,
  photo,
}: PeopleCardProps) {
  return (
    <>
      <Card className="bg-black border-none text-white rounded-none  flex items-center justify-center flex-col w-full h-full">
        <CardHeader className="px-0 pt-0">
          <img
            src={photo}
            alt="Theme"
            className="aspect-square object-cover w-full h-full"
          />
        </CardHeader>
        <CardContent className="text-center mt-5">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{designation}</CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
