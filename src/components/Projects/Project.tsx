import MobileSwiper from "../MobileSwiper/MobileSWiper";
import WebSwiper from "../WebSwiper/WebSwiper";

const Expirience = () => {
  return (
    <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px]">PROJETOS</h1>
      <h2 className="text-gradient2 text-[16px]">veja agora</h2>
      <WebSwiper/>
      <MobileSwiper/>
    </div>
  );
};

export default Expirience;