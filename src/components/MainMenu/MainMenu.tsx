import type { MainMenuProps } from "../../interfaces/MainMenu";
import scrollToSection from "../../utils/ScrollToSection";

export default function MainMenu({ flexDirection = "column" }: MainMenuProps) {
  const linkStyles = "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  
  return (
    <ul className={`flex gap-6 ${flexDirection === "column" ? "flex-col" : "flex-row"}`}>
      <li>
        <a href="#experiencia" onClick={scrollToSection} className={linkStyles}>
          Experiencia
        </a>
      </li>
      <li>
        <a href="#projetos" onClick={scrollToSection} className={linkStyles}>
          Projetos
        </a>
      </li>
      <li>
        <a href="#formacao" onClick={scrollToSection} className={linkStyles}>
          Formacao
        </a>
      </li>
      <li>
        <a href="#contato" onClick={scrollToSection} className={linkStyles}>
          Contato
        </a>
      </li>
    </ul>
  );
}
