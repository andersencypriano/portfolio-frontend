import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useIsMobile } from "../../hooks/useIsMobile";

import { MenuIcon } from "lucide-react";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "../ui/button";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="container flex items-center justify-between mx-auto px-4 py-4">
        {isMobile && (
          <div className="w-1/4">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
          </div>
        )}
        <Logo />
        <nav className="hidden md:block">
          <MainMenu flexDirection="row" />
        </nav>
        <div className="w-1/4 flex justify-end items-center">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
