import { FaReact } from "react-icons/fa";
import Icon from "../IconComponent/Icon";

export  default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 bg-gray-100">
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Andersen Cypriano. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-2.5 text-gray-600 text-sm">
          Construído com{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <Icon icon={FaReact} size={24}/>
          </a>
        </p>
      </div>
    </footer>
  );
}