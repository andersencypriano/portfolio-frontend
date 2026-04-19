import type { MainMenuProps } from "../../interfaces/MainMenu";
import scrollToSection from "../../utils/ScrollToSection";

export default function MainMenu({ flexDirection = "column", onItemClick }: MainMenuProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e);
    if (onItemClick) onItemClick();
  };

  return (
    <ul className={`flex gap-1 ${flexDirection === "column" ? "flex-col" : "flex-row"}`}>
      <li>
        <a 
          href="#experiencia" 
          onClick={handleClick} 
          className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
        >
          Experiência
        </a>
      </li>
      <li>
        <a 
          href="#projetos" 
          onClick={handleClick} 
          className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
        >
          Projetos
        </a>
      </li>
      <li>
        <a 
          href="#formacao" 
          onClick={handleClick} 
          className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
        >
          Formação
        </a>
      </li>
      <li>
        <a 
          href="#contato" 
          onClick={handleClick} 
          className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
        >
          Contato
        </a>
      </li>
    </ul>
  );
}
