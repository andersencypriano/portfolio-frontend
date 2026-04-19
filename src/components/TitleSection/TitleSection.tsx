interface TitleSectionProps {
  title: string;
  light?: boolean;
}

export default function TitleSection({ title, light = false }: TitleSectionProps) {
  return (
    <div className="flex flex-col gap-3 mb-10">
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-gray-900' : 'text-white'}`}>
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <div className="h-1 w-12 bg-blue-500 rounded-full" />
        <div className="h-1 w-6 bg-blue-500/50 rounded-full" />
        <div className="h-1 w-3 bg-blue-500/25 rounded-full" />
      </div>
    </div>
  );
}
