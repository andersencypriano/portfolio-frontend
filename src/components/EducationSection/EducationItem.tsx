import type { IEducationItem } from "../../interfaces/Education";
import { GraduationCap } from "lucide-react";

interface IEducationItemProps {
  education: IEducationItem;
}

export default function EducationItem({ education }: IEducationItemProps) {
  return (
    <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-blue-500/30 transition-all duration-300">
          <img
            src={education.imageUrl}
            alt={education.institution}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
              Formação
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
            {education.institution}
          </h3>
          <p className="text-gray-300 text-sm font-medium mb-2">{education.course}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">{education.description}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(education.dataStart).toLocaleDateString("pt-BR")}</span>
            <span>—</span>
            <span>{new Date(education.dataEnd).toLocaleDateString("pt-BR")}</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
