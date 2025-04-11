import { useLanguage } from "../../utils/LanguageContext";

const ContactButton = () => {
  const { language } = useLanguage();

  return (
    <a href="https://wa.me/5511992726057">
      <button
      className="top-0 bottom-[2.26%] right-0 bg-[#2F0A42] dark:bg-[#EBD3F8] dark:text-[#2F0A42] text-white font-medium py-1 px-3 rounded-xl hover:bg-[#3F134E] transition-all"
    >
    {language === 'Português' ? 'Contato' : 'Contact'}
    </button>
    </a>
  );
};

export default ContactButton;
