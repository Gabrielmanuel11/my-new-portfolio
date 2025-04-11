import { useLanguage } from "../../utils/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'Português' ? 'English' : 'Português');
  };

  return (
    <button
      className="font-semibold w-[103px] bg-gray-200 text-[#2A2A2A] dark:bg-[#2F0A42] dark:text-white py-1 px-3 rounded-xl hover:bg-gray-300 transition-all"
      onClick={toggleLanguage}
    >
      {language}
    </button>
  );
};

export default LanguageToggle;

