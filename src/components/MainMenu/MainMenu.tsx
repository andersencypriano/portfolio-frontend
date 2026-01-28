import type { MainMenuProps } from "../../interfaces/MainMenu";
import scrollToSection from "../../utils/ScrollToSection";

export default function MainMenu({ flexDirection = "column" }: MainMenuProps) {
  return (
    <ul className={`flex md:flex-row gap-2.5 ${flexDirection === "column" ? "flex-col" : "flex-row"}`}>
      <li className="flex items-center">
        <a href="#experiencia" onClick={scrollToSection} className="text-bg">
          Experiência
        </a>
      </li>
      <li className="flex items-center">
        <a href="#projetos" onClick={scrollToSection} className="text-bg">
          Projetos
        </a>
      </li>
      <li className="flex items-center">
        <a href="#formacao" onClick={scrollToSection} className="text-bg">
          Formação acadêmica
        </a>
      </li>

      <li className="flex items-center">
        <a href="#tecnologias" onClick={scrollToSection} className="text-bg">
          Tecnologias
        </a>
      </li>
      <li className="flex items-center">
        <a href="#contato" onClick={scrollToSection} className="text-bg">
          Contato
        </a>
      </li>

    </ul>
  );
}
