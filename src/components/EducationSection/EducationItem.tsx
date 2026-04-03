import type { IEducationItem } from "../../interfaces/Education";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

interface IEducationItemProps {
  education: IEducationItem;
}

export default function EducationItem({ education }: IEducationItemProps) {
  const startDate = new Date(education.dataStart).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });
  const endDate = new Date(education.dataEnd).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border">
          <img
            src={education.imageUrl}
            alt={education.institution}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold leading-none">{education.institution}</h3>
          <p className="text-sm text-muted-foreground">{education.course}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-sm text-muted-foreground">{education.description}</p>
        <Badge variant="outline">
          {startDate} - {endDate}
        </Badge>
      </CardContent>
    </Card>
  );
}
