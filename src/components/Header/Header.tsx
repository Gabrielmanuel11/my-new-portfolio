import { useEffect, useState } from "react";
import ContactButton from "../Buttons/ContactButton";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import LanguageToggle from "../Buttons/LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change header when scrolling past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full text-white flex justify-end items-center px-4 h-14 transition-all duration-300 ${
        isScrolled
          ? " bg-white z-[2] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between gap-8 mobileMini:gap-5">
        <DarkModeToggle />
        <LanguageToggle />
        <ContactButton />
      </nav>
    </header>
  );
};

export default Header;
