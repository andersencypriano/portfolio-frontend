import { LuFileDown, LuGithub, LuLinkedin } from "react-icons/lu";

export default function SocialLinks() {
  return (
    <div className="flex gap-1 md:gap-4 justify-center items-center">
      <a
        href="https://github.com/andersencypriano"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded border-1 border-b-bg p-1"
      >
        <LuGithub size={22} strokeWidth={1.5} />
      </a>
      <a
        href="https://www.linkedin.com/in/andrecypriano/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded border-1 border-b-bg p-1"
      >
        <LuLinkedin size={22} strokeWidth={1.5} />
      </a>
      <a
        href="https://www.linkedin.com/in/andrecypriano/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded border-1 border-b-bg p-1"
      >
        <LuFileDown size={22} strokeWidth={1.5} />
      </a>
    </div>
  );
}
