import scrollToSection from "../../utils/ScrollToSection";

export default function MainMenu() {
  
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <ul className="flex gap-2.5">
        <li className="flex items-center justify-center">
          <a href="#experiencia" onClick={scrollToSection} className="text-bg">
            Experiência
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a href="#projetos" onClick={scrollToSection} className="text-bg">
            Projetos
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a href="#tecnologias" onClick={scrollToSection} className="text-bg">
            Tecnologias
          </a>
        </li>
      </ul>
    </div>
  );
}
