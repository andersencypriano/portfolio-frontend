import { Menu } from "lucide-react";
import { useDrawer } from "../store/drawer";
import { Button } from "../components/ui/button";

export default function HamburgerMenu() {
  const { changeDrawer } = useDrawer();

  return (
    <Button variant="ghost" size="icon" onClick={changeDrawer}>
      <Menu className="h-5 w-5" />
      <span className="sr-only">Abrir menu</span>
    </Button>
  );
}
