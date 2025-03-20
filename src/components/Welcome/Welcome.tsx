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
        <div className="absolute h-[103px] w-[401px] left-4 top-[107px] text-[#2F0A42]">
            <h1 className="font-bold text-[24px]">
                Bem vindo ao meu Mundo!
            </h1>
            <h2 className="font-semibold text-[23px]">
                Eu programo,<br />
                <span className="text-gradient text-[26px] word-rotator">
                    {words[currentIndex]}
                </span>
            </h2>
            <h4 className="font-medium">
            Desenvolvedor de software apaixonado com foco no desenvolvimento web,
            dedicado à criação de aplicativos úteis que trazem soluções a qualquer tipo de negócio.
            </h4>
        </div>
    );
};

export default Welcome;