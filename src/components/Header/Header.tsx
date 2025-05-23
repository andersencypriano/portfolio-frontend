import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Header() {
  return (
    <>
      <header className="bg-gray-300 fixed w-[100dvw] p-3 z-40 md:w-full">
        <div className="container flex items-center justify-between mx-auto">
          <Logo/>
          <MainMenu />
          <SocialLinks />
        </div>
      </header>
    </>
  );
}