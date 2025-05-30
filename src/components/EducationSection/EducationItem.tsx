import type { IEducationItem } from "../../interfaces/Education";

interface IEducationItemProps {
  education: IEducationItem;
}

export default function EducationItem({ education }: IEducationItemProps) {
  return (
    <div className="mb-4 md: flex  md:gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="w-[4.5rem] mb-3.5">
        <img src={education.imageUrl} alt={education.institution} className="w-full" />
      </div>
      <div className="education-item">
        <h2 className="font-bold">{education.institution}</h2>
        <p className="text-[1rem] font-primary">{education.course}</p>
        <p className="text-gray-600 text-[.9rem] mt-2">{education.description}</p>
        <span className="flex align-center">
          <span className="text-[.9rem]">{new Date(education.dataStart).toLocaleDateString()}</span>
          <span className="mx-2">-</span>
          <span className="text-[.9rem]">{new Date(education.dataEnd).toLocaleDateString()}</span>
        </span>
      </div>
    </div>
  );
}
