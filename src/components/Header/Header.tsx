import ContactButton from "../Buttons/ContactButton";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import LanguageToggle from "../Buttons/LanguageToggle";

const Header = () => {
  return (
    <header className="relative max-w-7xl mx-auto h-9 bg-transparent text-white mt-5 flex justify-end items-center px-4 grid-cols-3">
      <nav className="flex justify-between gap-8 mobileMini:gap-5">
        <DarkModeToggle />
        <LanguageToggle />
        <ContactButton />
      </nav>
    </header>
  );
};

export default Header;