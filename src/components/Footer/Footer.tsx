import { FaReact } from "react-icons/fa";
import Icon from "../IconComponent/Icon";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 bg-gray-100">
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Andersen Cypriano. Todos os direitos
          reservados.
        </p>
        <p className="flex items-center justify-center gap-2.5 text-gray-600 text-sm">
          Construído com 
          <Icon icon={FaReact} size={24} />
          <Icon icon={RiTailwindCssFill} size={24} />
        </p>
      </div>
    </footer>
  );
}
