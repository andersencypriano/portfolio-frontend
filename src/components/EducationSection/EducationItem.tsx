import type { IEducationItem } from "../../interfaces/Education";

interface IEducationItemProps {
  education: IEducationItem;
}

export default function EducationItem({ education }: IEducationItemProps) {
  return (
    <div className="education-item">
      <h2>{education.institution}</h2>
      <p>{education.course}</p>
      <span>{education.year}</span>
      <p>{education.description}</p>
      <span>
        {new Date(education.dataStart).toLocaleDateString()} -{" "}
        {new Date(education.dataEnd).toLocaleDateString()}
      </span>
    </div>
  );
}