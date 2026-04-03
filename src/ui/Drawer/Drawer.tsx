import { X } from "lucide-react";
import MainMenu from "../../components/MainMenu/MainMenu";
import { useDrawer } from "../../store/drawer";
import { Button } from "../../components/ui/button";

export default function Drawer() {
  const { drawerOpen, changeDrawer } = useDrawer();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={changeDrawer}
      />
      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm border-l bg-background p-6 shadow-lg transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={changeDrawer}>
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>
        <nav>
          <MainMenu />
        </nav>
      </div>
    </>
  );
}
