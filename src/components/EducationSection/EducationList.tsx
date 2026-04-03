import { useEffect, useState } from "react";
import type { IEducationItem } from "../../interfaces/Education";
import { mockEducationList } from "../../db/education";
import EducationItem from "./EducationItem";

export default function EducationList() {
  const [educationList, setEducationList] = useState<IEducationItem[]>([]);

  useEffect(() => {
    setEducationList(mockEducationList);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {educationList.map((education, index) => (
        <EducationItem key={index} education={education} />
      ))}
    </div>
  );
}
