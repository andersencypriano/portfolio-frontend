import { useEffect, useState } from "react";
import { mockWorks } from "../../db/works";
import type { IWork } from "../../interfaces/Works";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function WorksList() {
  const [works, setWorks] = useState<IWork[]>([]);

  useEffect(() => {
    setWorks(mockWorks);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {works.map((work) => (
        <Card key={work.id} className="flex flex-col overflow-hidden">
          <div className="aspect-video w-full overflow-hidden border-b">
            <img
              src={work.imageUrl}
              alt={work.title}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{work.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground">{work.description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" href={work.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver projeto
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
