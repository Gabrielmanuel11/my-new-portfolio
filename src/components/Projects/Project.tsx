import { motion } from "motion/react";
import { useLanguage } from "../../utils/LanguageContext";
import MobileSwiper from "../MobileSwiper/MobileSWiper";
import WebSwiper from "../WebSwiper/WebSwiper";

const Expirience = () => {
  const { language } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-[#2F0A42] text-center p-7">
          <h1 className="font-bold text-[45px] dark:text-[#EBD3F8]">{ language === 'Português' ? 'PROJETOS' : 'PROJECTS'}</h1>
          <h2 className="text-[#FF9051] text-[16px]">{ language === 'Português' ? 'veja agora' : 'see now'}</h2>
          <WebSwiper/>
          <MobileSwiper/>
        </div>
    </motion.section>
    
  );
};

export default Expirience;