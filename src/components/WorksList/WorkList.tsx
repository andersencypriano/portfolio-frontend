import { useEffect, useState } from "react";
import { mockWorks } from "../../db/works";
import type { IWork } from "../../interfaces/Works";
import { Link } from "lucide-react";
import Icon from "../IconComponent/Icon";
export default function WorksList() {
  const [works, setWorks] = useState<IWork[]>([]);


  useEffect(() => {
    setWorks(mockWorks);
  }, []);


  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 mb-5">
      {works.map((work) => (
        <div
          key={work.id}
          className="relative work-item p-4 pb-8 border border-gray-300 rounded flex-col flex-1/3 gap-2 w-full md:max-w-1/3"
        >
          <div className="w-full mb-3.5">
            <img src={work.imageUrl} alt={work.title} className="w-full" />
          </div>
          <h3 className="font-secundary uppercase">{work.title}</h3>
          <p className="text-gray-600 text-[.9rem] mt-2">{work.description}</p>
          <div className="absolute right-2 bottom-2 flex gap-2 mt-2">
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              <Icon icon={Link} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
