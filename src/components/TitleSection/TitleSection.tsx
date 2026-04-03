import { Separator } from "../ui/separator";

interface TitleSectionProps {
  title: string;
  description?: string;
}

export default function TitleSection({ title, description }: TitleSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
      <Separator className="mt-4" />
    </div>
  );
}
