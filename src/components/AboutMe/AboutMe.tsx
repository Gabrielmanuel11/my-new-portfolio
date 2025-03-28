const AboutMe = () => {
  const images = [
    { src: 'src/assets/images/myfamily.jpeg', label: 'Família' },
    { src: 'src/assets/images/soccer.jpeg', label: 'Futebol' },
    { src: 'src/assets/images/book.jpeg', label: 'Livro Favorito' },
    { src: 'src/assets/images/superman.jpg', label: 'Filme Favorito' },
  ];

  return (
    <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px]">SOBRE MIM</h1>
      <h2 className="text-gradient2 text-[16px]">veja agora</h2>
      <p className="font-medium text-[20px]">
        Como um desenvolvedor de software, eu foco utilizando a lógica e
        criatividade como meus aliados. Atualmente no mundo dinâmico da Web,
        minha experiência gira em torno do Javascript, onde combino algumas
        tecnologias e frameworks como ReactJs, NodeJs entre outras para poder
        construir uma aplicação de ponta a ponta como FullStack. <br /><br />
        
        Sempre buscando criar soluções elegantes, busco constante evolução do
        desenvolvimento de software. Minha jornada envolve traduzir conceitos
        em código, criar experiências de usuário perfeitas e ultrapassar
        constantemente os limites do que é possível.
      </p>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-4 gap-5 pt-12 place-items-center tablet:grid-cols-2 mobile:grid-cols-1">
        {images.map((image, index) => (
          <div key={index} className="relative w-[300px] h-[400px] rounded-[12px] overflow-hidden group">
            {/* Imagem */}
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-100 opacity-30"
            />
            {/* Overlay + Texto */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#2F0A42] bg-opacity-70 text-white text-[24px] font-bold transition duration-300 ease-in-out group-hover:bg-opacity-0 group-hover:items-end">
              {image.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;



