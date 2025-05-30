import { MenuIcon } from "lucide-react";
import { useDrawer } from "../store/drawer";

export default function HamburgerMenu() {
  const { changeDrawer } = useDrawer();
  return (
    <>
      <button 
        className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-md cursor-pointer"
        onClick={changeDrawer}
      >
        <MenuIcon/>
      </button>
    </>
  );
}
