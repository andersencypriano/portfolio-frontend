import iconCss from "../../assets/icons/css.svg";
import iconHtml from "../../assets/icons/html.svg";
import iconJs from "../../assets/icons/javascript.svg";
import iconNext from "../../assets/icons/next.svg";
import iconReact from "../../assets/icons/react.svg";
import iconTailwind from "../../assets/icons/tailwind.svg";
import iconTypeScript from "../../assets/icons/typescript.svg";

const skills = [
  { src: iconHtml, alt: "HTML" },
  { src: iconCss, alt: "CSS" },
  { src: iconJs, alt: "JavaScript" },
  { src: iconReact, alt: "React" },
  { src: iconNext, alt: "Next" },
  { src: iconTypeScript, alt: "TypeScript" },
  { src: iconTailwind, alt: "Tailwind" },
];

export default function Skills() {
  return (
    <>
      <ul className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <li className="flex items-center justify-center">
          <img src={iconHtml} alt="HTML" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconCss} alt="CSS" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconJs} alt="Javascript" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconReact} alt="React" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconNext} alt="Next" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconTypeScript} alt="TypeScript" className="h-10 w-10 object-contain" />
        </li>
        <li className="flex items-center justify-center">
          <img src={iconTailwind} alt="Tailwind" className="h-10 w-10 object-contain" />
        </li>
      </ul>
    </>
  );
}
