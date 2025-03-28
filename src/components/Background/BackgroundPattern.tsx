// src/components/Background.tsx
import React from "react";

function generateEllipses() {
  const ellipses = [];
  const totalEllipses = 100;

  for (let i = 0; i < totalEllipses; i++) {
    const size = Math.random() * 200 + 50; // Random size between 50px and 250px
    const top = Math.random() * 2000 - 500; // Random position
    const left = Math.random() * 1500 - 500;
    const opacity = Math.random() * 0.4 + 0.1; // Opacity between 0.1 and 0.5
    const blur = Math.random() * 20 + 5; // Blur between 5px and 25px

    ellipses.push({
      size,
      top,
      left,
      opacity,
      blur,
    });
  }
  return ellipses;
}

const Background: React.FC = () => {
  const ellipses = generateEllipses();

  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen -z-10 overflow-hidden">
      {ellipses.map((ellipse, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-purple-500"
          style={{
            width: `${ellipse.size}px`,
            height: `${ellipse.size}px`,
            top: `${ellipse.top}px`,
            left: `${ellipse.left}px`,
            opacity: ellipse.opacity,
            filter: `blur(${ellipse.blur}px)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;

  
