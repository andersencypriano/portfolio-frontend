import { useEffect, useState } from "react";
import { mockWorks } from "../../db/works";

export interface IWork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function WorksList() {
  const [works, setWorks] = useState<IWork[]>([]);

  useEffect(() => {
    setWorks(mockWorks);
  }, []);
  console.log(works);
  return (
    <div className="flex items-stretch gap-4">
      {works.map((work) => (
        <div
          key={work.id}
          className="work-item p-4 border border-gray-300 rounded flex-col flex-1/3 gap-2 max-w-1/3"
        >
          <div className="w-full mb-2.5">
            <img src={work.imageUrl} alt={work.title} className="w-full" />
          </div>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  );
}
