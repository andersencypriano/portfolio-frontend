import HamburgerMenu from "../../ui/HamburgerMenu";
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {isMobile && (
          <div className="w-1/4">
            <HamburgerMenu />
          </div>
        )}
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <MainMenu flexDirection="row" />
        </nav>
        <div className="flex items-center gap-2">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
