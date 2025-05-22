import logoMt from '../../assets/jobs/mt_solucoes.jpg';
import logoSide3 from '../../assets/jobs/side3.jpg';
import logoFav from '../../assets/jobs/ogilvy_fav.jpg';

export default function JobList () {
  return (
    <>
      <div className="flex items-stretch gap-4 mb-5">
        <div className="p-4 border border-gray-300 rounded flex flex-1/3 gap-2 max-w-1/3">
          <div className="w-[20%]" >
            <img src={logoMt} alt="MT Soluções" className='w-full'/>
          </div>
         <div className="w-[80%]">
            <h3 className="text-[1.2rem] font-secundary">MT Soluções</h3>
            <p className="text-gray-600 text-[.9rem]">Desenvolvedor Front-end</p>
            <span className="text-gray-400 text-[.8rem]">jun de 2021 - o momento · 4 anos</span>
            <p className="text-gray-600 text-[.9rem] mt-2">Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.</p>
          </div>
        </div>
        <div className="p-4 border border-gray-300 rounded flex flex-1/3 gap-2 max-w-1/3">
          <div className="w-[20%]">
            <img src={logoSide3} alt="Grupo Side3" className='w-full'/>
          </div>
         <div className="w-[80%]">
            <h3 className="text-[1.2rem] font-secundary">Grupo Side3</h3>
            <p className="text-gray-600 text-[.9rem]">Desenvolvedor Front-end</p>
            <span className="text-gray-400 text-[.8rem]">jul de 2015 - mar de 2020 · 4 anos 9 meses</span>
            <p className="text-gray-600 text-[.9rem] mt-2">Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.</p>
          </div>
        </div>

        <div className="p-4 border border-gray-300 rounded flex flex-1/3 gap-2 max-w-1/3">
          <div className="w-[20%]">
            <img src={logoFav} alt="Ogilvy" className='w-full'/>
          </div>
         <div className="w-[80%]">
            <h3 className="text-[1.2rem] font-secundary">Ogilvy FAV</h3>
            <p className="text-gray-600 text-[.9rem]">Desenvolvedor Front-end</p>
            <span className="text-gray-400 text-[.8rem]">jan de 2010 - jan de 2015 · 5 anos 1 mês</span>
            <p className="text-gray-600 text-[.9rem] mt-2">Desenvolvimento de sistemas web e mobile, com foco em performance e usabilidade.</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

