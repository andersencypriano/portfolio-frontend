

import HamburgerMenu from "../../ui/HamburgerMenu";
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      <header className="bg-gray-300 fixed w-[100dvw] p-3 z-40 md:w-full">
        <div className="container flex items-center justify-between mx-auto">
          {isMobile && (
            <div className="w-1/4">
              <HamburgerMenu />
            </div>
          )}
          <Logo />
          <div className="hidden md:block">
            <MainMenu flexDirection="row" />
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <SocialLinks />
          </div>
        </div>
      </header>
    </>
  );
}