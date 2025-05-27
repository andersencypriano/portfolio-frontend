import { useEffect, useState } from "react";
import type { IEducationItem } from "../../interfaces/Education";
import { mockEducationList } from "../../db/education";
import EducationItem from "./EducationItem";

export default function EducationList () {
  const [educationList, setEducationList] = useState<IEducationItem[]>([]);

  useEffect(() => {
    setEducationList(mockEducationList);
  }, []);

 

  return (
    <>
      <ul className="md:flex md:justify-center md:gap-4">
        {educationList.map((education, index) => (
          <li key={index} className="md:flex-1">
            <EducationItem education={education} />
          </li>
        ))}
      </ul>
    </>
  );
}