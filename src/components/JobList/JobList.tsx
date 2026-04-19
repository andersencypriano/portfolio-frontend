import logoMt from '../../assets/jobs/mt_solucoes.jpg';
import logoSide3 from '../../assets/jobs/side3.jpg';
import logoFav from '../../assets/jobs/ogilvy_fav.jpg';

const jobs = [
  {
    id: 1,
    logo: logoMt,
    company: "MT Soluções",
    role: "Desenvolvedor Front-end",
    period: "jun 2021 - jun 2025",
    description: "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade."
  },
  {
    id: 2,
    logo: logoSide3,
    company: "Grupo Side3",
    role: "Desenvolvedor Front-end",
    period: "jul 2015 - mar 2020 · 4 anos 9 meses",
    description: "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade."
  },
  {
    id: 3,
    logo: logoFav,
    company: "Ogilvy FAV",
    role: "Desenvolvedor Front-end",
    period: "jan 2010 - jan 2015 · 5 anos 1 mês",
    description: "Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade."
  }
];

export default function JobList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] -z-1" />
          
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
              <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {job.company}
              </h3>
              <p className="text-sm font-medium text-blue-600">{job.role}</p>
            </div>
          </div>
          
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {job.period}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
