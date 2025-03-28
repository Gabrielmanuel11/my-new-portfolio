import { useEffect, useState } from "react";

const Welcome = () => {
    const words = ['Profissionalmente.', 'Divertidamente.', 'Apaixonadamente.', 'Todos os dias.']; // Words to rotate
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [words.length]);

    return(
        <div className="text-[#2F0A42] p-7">
            <h1 className="font-bold text-[64px]">
                Bem vindo ao meu Mundo!
            </h1>
            <h2 className="inline-flex font-semibold text-[32px] mobile:block">
                Eu programo,<br />
                <span className="text-gradient text-[32px] word-rotator w-[310px] mobile:w-auto mobileMini:text-[24px]">
                    {words[currentIndex]}
                </span>
            </h2>
            <h4 className="font-medium text-[20px]">
            Desenvolvedor de software apaixonado com foco no desenvolvimento web,
            dedicado à criação de aplicativos úteis que trazem soluções a qualquer tipo de negócio.
            </h4>
        </div>
    );
};

export default Welcome;