import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useLanguage } from "../utils/LanguageContext";

// Example technology logos
const techLogos = [
    {
      name: "JavaScript",
      srcLight: "src/assets/images/tech/javascript-light.svg",
      srcDark: "src/assets/images/tech/javascript-dark.svg",
    },
    {
      name: "TypeScript",
      srcLight: "src/assets/images/tech/typescript-light.svg",
      srcDark: "src/assets/images/tech/typescript-dark.svg",
    },
    {
      name: "React",
      srcLight: "src/assets/images/tech/reactjs-light.svg",
      srcDark: "src/assets/images/tech/reactjs-dark.svg",
    },
    {
      name: "Node.js",
      srcLight: "src/assets/images/tech/nodejs-light.svg",
      srcDark: "src/assets/images/tech/nodejs-dark.svg",
    },
    {
      name: "Next.js",
      srcLight: "src/assets/images/tech/nextjs-light.svg",
      srcDark: "src/assets/images/tech/nextjs-dark.svg",
    },
    {
      name: "NestJS",
      srcLight: "src/assets/images/tech/nestjs-light.svg",
      srcDark: "src/assets/images/tech/nestjs-dark.svg",
    },
    {
      name: "PostgreSQL",
      srcLight: "src/assets/images/tech/postgresql-light.svg",
      srcDark: "src/assets/images/tech/postgresql-dark.svg",
    },
    {
      name: "Tailwind CSS",
      srcLight: "src/assets/images/tech/tailwind-light.svg",
      srcDark: "src/assets/images/tech/tailwind-dark.svg",
    },
    {
      name: "Docker",
      srcLight: "src/assets/images/tech/docker-light.svg",
      srcDark: "src/assets/images/tech/docker-dark.svg",
    },
    {
        name: "PHP",
        srcLight: "src/assets/images/tech/php-light.svg",
        srcDark: "src/assets/images/tech/php-dark.svg",
    },
    {
        name: "Python",
        srcLight: "src/assets/images/tech/python-light.svg",
        srcDark: "src/assets/images/tech/python-dark.svg",
    },
  ];
  

const duplicatedLogos = [...techLogos, ...techLogos];

const TechStackScroll = () => {
  const ref = useRef(null);

  const { language } = useLanguage();

  return (
    
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-24 text-center overflow-hidden pb-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-[#2F0A42] font-bold text-[45px] dark:text-[#EBD3F8]"
      >
        { language === 'Português' ? 'TECNOLOGIAS' : 'TECHNOLOGIES'}
      </motion.h2>

      <div className="px-24 mobile:px-8 tablet:px-16 container mx-auto my-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5.1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1920: { slidesPerView: 5.1 },
            1366: { slidesPerView: 5.1 },
            1024: { slidesPerView: 4.1 },
            768: { slidesPerView: 3.1 },
            640: { slidesPerView: 2.5 },
            320: { slidesPerView: 2.3 },
          }}
          className="w-full !overflow-visible"
        >
          {duplicatedLogos.map((tech, index) => (
            <SwiperSlide
            key={`${tech.name}-${index}`}
            className="flex justify-center w-auto"
          >
            {/* Light mode logo */}
            <img
              src={tech.srcLight}
              alt={tech.name}
              width={182}
              height={50}
              className="block dark:hidden object-contain max-h-[48px] max-w-[160px] mobile:max-w-[140px] mobile:max-h-[36px]"
            />
            {/* Dark mode logo */}
            <img
              src={tech.srcDark}
              alt={tech.name}
              width={182}
              height={50}
              className="hidden dark:block object-contain max-h-[48px] max-w-[160px] mobile:max-w-[140px] mobile:max-h-[36px]"
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default TechStackScroll;
