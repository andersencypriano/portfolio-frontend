import iconCss from "../../assets/icons/css.svg";
import iconHtml from "../../assets/icons/html.svg";
import iconJs from "../../assets/icons/javascript.svg";
import iconNext from "../../assets/icons/next.svg";
import iconReact from "../../assets/icons/react.svg";
import iconTailwind from "../../assets/icons/tailwind.svg";
import iconTypeScript from "../../assets/icons/typescript.svg";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ul className="mt-4 flex">
        <li className="flex items-center justify-center p-10">
          <img src={iconHtml} alt="HTML" className="w-full"/>
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconCss} alt="CSS" className="w-full" />
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconJs} alt="JavaScript" className="w-full" />
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconReact} alt="React" className="w-full" />
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconNext} alt="Next.js" className="w-full" />
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconTailwind} alt="Tailwind CSS" className="w-full" />
        </li>
        <li className="flex items-center justify-center p-10">
          <img src={iconTypeScript} alt="TypeScript" className="w-full" />
        </li>
      </ul>
    </div>
  );
}
