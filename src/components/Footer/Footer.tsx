import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Andersen Cypriano. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Construído com</span>
            <div className="flex items-center gap-2">
              <FaReact className="w-5 h-5 text-cyan-400 hover:animate-spin" />
              <RiTailwindCssFill className="w-5 h-5 text-cyan-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
