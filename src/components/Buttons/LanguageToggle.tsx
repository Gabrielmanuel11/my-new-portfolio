import { useState } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("Português");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "Português" ? "English" : "Português"
    );
  };

  return (
    <button
      className="absolute font-semibold w-[103px] left-[106px] top-[2.78%] bottom-0 bg-gray-200 text-[#2A2A2A] py-1 px-3 rounded-xl hover:bg-gray-200 transition-all"
      onClick={toggleLanguage}
    >
      {language}
    </button>
  );
};

export default LanguageToggle;
