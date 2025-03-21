import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      className={`relative w-[68px] h-[34px] ${
        isDarkMode ? 'bg-[#2F0A42]' : 'bg-[#E7C0F8]'
      } rounded-full flex items-center px-1 transition-colors duration-300 ${
        isDarkMode ? 'justify-end' : 'justify-start'
      }`}
      onClick={toggleDarkMode}
    >
      <span
        className={`absolute w-[27px] h-[27px] top-1/2 transform -translate-y-1/2 ${
          isDarkMode ? 'bg-[#EBD3F8] right-2' : 'bg-[#2F0A42] left-2'
        } rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_3px_8px_rgba(0,0,0,0.15),0px_3px_1px_rgba(0,0,0,0.06)] transition-all duration-300`}
      />
    </button>
  );
};

export default DarkModeToggle;
