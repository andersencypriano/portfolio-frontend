interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title}: TitleSectionProps) {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-4xl text-black uppercase font-secundary">{title}</h2>
      </div>
    </>
  );
}