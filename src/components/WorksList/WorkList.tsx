import { useEffect, useState } from "react";
import { mockWorks } from "../../db/works";
import type { IWork } from "../../interfaces/Works";
export default function WorksList() {
  const [works, setWorks] = useState<IWork[]>([]);

  useEffect(() => {
    setWorks(mockWorks);
  }, []);


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
          {work.stacks.length > 0 && (
            <div className="flex gap-2 mt-2">
              {work.stacks.map((stack) => (
                <span key={stack} className="text-gray-800 py-1 px-2 rounded">
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
