import React, { useEffect, useState } from "react";

function generateEllipses() {
  const ellipses = [];
  const totalEllipses = 50; // Ajuste para melhor performance

  for (let i = 0; i < totalEllipses; i++) {
    const size = Math.random() * 200 + 50; // Tamanho entre 50px e 250px
    const top = Math.random() * 100; // Posição inicial (0% a 100% da tela)
    const left = Math.random() * 100; // Posição horizontal (0% a 100% da tela)
    const opacity = Math.random() * 0.1 + 0.1; // Opacidade entre 0.1 e 0.3
    const blur = Math.random() * 20 + 5; // Desfoque entre 5px e 25px
    const duration = Math.random() * 10 + 5; // Duração aleatória entre 5s e 15s
    const delay = Math.random() * 5; // Pequeno atraso para suavidade

    ellipses.push({
      size,
      top,
      left,
      opacity,
      blur,
      duration,
      delay,
    });
  }
  return ellipses;
}

const Background: React.FC = () => {
  const [ellipses, setEllipses] = useState(generateEllipses());

  useEffect(() => {
    const interval = setInterval(() => {
      setEllipses(generateEllipses()); // Atualiza posições aleatoriamente para criar efeito de bolhas
    }, 15000); // Atualiza a cada 15s para suavidade

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen -z-20 overflow-hidden">
      {ellipses.map((ellipse, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-purple-500 animate-bubble"
          style={{
            width: `${ellipse.size}px`,
            height: `${ellipse.size}px`,
            top: `${ellipse.top}%`,
            left: `${ellipse.left}%`,
            opacity: ellipse.opacity,
            filter: `blur(${ellipse.blur}px)`,
            animationDuration: `${ellipse.duration}s`,
            animationDelay: `${ellipse.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;


  
