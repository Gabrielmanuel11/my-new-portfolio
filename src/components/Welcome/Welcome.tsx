import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/LanguageContext";

const Welcome = () => {
    const { language } = useLanguage();

    const words = language === 'Português' ? ['Profissionalmente.', 'Divertidamente.', 'Apaixonadamente.', 'Todos os dias.']
    : ['Professionally.', 'Playfully.', 'Passionately.', 'Every day.'];

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [words.length]);

    return(
        <div className="text-[#2F0A42] p-7">
            <h1 className="font-bold text-[64px] dark:text-[#EBD3F8]">
                { language === 'Português' ? 'Bem vindo ao meu Mundo!' : 'Welcome to my world!'}
            </h1>
            <h2 className="inline-flex font-semibold text-[32px] mobile:block dark:text-[#E1E1E1]">
                {language === 'Português' ? 'Eu programo' : 'I code'},<br />
                <span className="text-gradient text-[32px] word-rotator w-[310px] mobile:w-auto mobileMini:text-[24px]">
                    {words[currentIndex]}
                </span>
            </h2>
            <h4 className="font-medium text-[20px] dark:text-[#E1E1E1]">
            { language === 'Português' ? 'Desenvolvedor de software apaixonado com foco no desenvolvimento web, dedicado à criação de aplicativos úteis que trazem soluções a qualquer tipo de negócio.' 
            : 'Passionate software developer with a focus on web development, dedicated to creating useful applications that bring solutions to any type of business'}
            </h4>
        </div>
    );
};

export default Welcome;