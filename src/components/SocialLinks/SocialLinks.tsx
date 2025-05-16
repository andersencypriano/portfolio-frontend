import { LuGithub } from "react-icons/lu";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/andrecypriano" target="_blank" rel="noopener noreferrer">
        <LuGithub size={22} />
      </a>
    </div>
  );
}