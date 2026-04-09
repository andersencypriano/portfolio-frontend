import type { MainMenuProps } from "../../interfaces/MainMenu";
import scrollToSection from "../../utils/ScrollToSection";

export default function MainMenu({ flexDirection = "column", onItemClick }: MainMenuProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e);
    if (onItemClick) onItemClick();
  };

  return (
    <ul className={`flex md:flex-row gap-2.5 ${flexDirection === "column" ? "flex-col" : "flex-row"}`}>
      <li className="flex items-center">
        <a href="#experiencia" onClick={handleClick} className="text-bg">
          Experiência
        </a>
      </li>
      <li className="flex items-center">
        <a href="#projetos" onClick={handleClick} className="text-bg">
          Projetos
        </a>
      </li>
      <li className="flex items-center">
        <a href="#formacao" onClick={handleClick} className="text-bg">
          Formação acadêmica
        </a>
      </li>

      <li className="flex items-center">
        <a href="#tecnologias" onClick={handleClick} className="text-bg">
          Tecnologias
        </a>
      </li>
      <li className="flex items-center">
        <a href="#contato" onClick={handleClick} className="text-bg">
          Contato
        </a>
      </li>

    </ul>
  );
}
