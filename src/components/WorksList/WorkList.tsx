import { useEffect, useState } from "react";
import { mockWorks } from "../../db/works";
import type { IWork } from "../../interfaces/Works";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function WorksList() {
  const [works, setWorks] = useState<IWork[]>([]);

  useEffect(() => {
    setWorks(mockWorks);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <div
          key={work.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="relative overflow-hidden">
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 backdrop-blur-sm">
              {work.flag}
            </Badge>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {work.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
              {work.description}
            </p>
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-gray-900 text-white hover:bg-blue-600 transition-colors duration-300 group/btn">
                Ver Projeto
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
