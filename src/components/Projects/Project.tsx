import { useLanguage } from "../../utils/LanguageContext";
import MobileSwiper from "../MobileSwiper/MobileSWiper";
import WebSwiper from "../WebSwiper/WebSwiper";

const Expirience = () => {
  const { language } = useLanguage()

  return (
    <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px] dark:text-[#EBD3F8]">{ language === 'Português' ? 'PROJETOS' : 'PROJECTS'}</h1>
      <h2 className="text-[#FF9051] text-[16px]">{ language === 'Português' ? 'veja agora' : 'see now'}</h2>
      <WebSwiper/>
      <MobileSwiper/>
    </div>
  );
};

export default Expirience;