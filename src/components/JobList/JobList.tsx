import logoMt from "../../assets/jobs/mt_solucoes.jpg";
import logoSide3 from "../../assets/jobs/side3.jpg";
import logoFav from "../../assets/jobs/ogilvy_fav.jpg";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

const jobs = [
  {
    logo: logoMt,
    company: "MT Solucoes",
    role: "Desenvolvedor Front-end",
    period: "jun de 2021 - o momento",
    duration: "4 anos",
    description:
      "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.",
  },
  {
    logo: logoSide3,
    company: "Grupo Side3",
    role: "Desenvolvedor Front-end",
    period: "jul de 2015 - mar de 2020",
    duration: "4 anos 9 meses",
    description:
      "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.",
  },
  {
    logo: logoFav,
    company: "Ogilvy FAV",
    role: "Desenvolvedor Front-end",
    period: "jan de 2010 - jan de 2015",
    duration: "5 anos 1 mes",
    description:
      "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.",
  },
];

export default function JobList() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {jobs.map((job) => (
        <Card key={job.company} className="flex flex-col">
          <CardHeader className="flex-row items-start gap-4 space-y-0">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border">
              <img
                src={job.logo}
                alt={job.company}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold leading-none">{job.company}</h3>
              <p className="text-sm text-muted-foreground">{job.role}</p>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{job.duration}</Badge>
              <span className="text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{job.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
