import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const AboutMe = () => {
  const images = [
    'src/assets/myfamily.jpeg',
    'src/assets/soccer.jpeg',
  ];

  return (
    <div className="absolute h-auto w-[381px] left-6 top-[361px] text-[#2F0A42]">
      <h1 className="font-black text-[24px]">SOBRE MIM</h1>
      <h2 className="text-gradient2 text-[16px]">veja agora</h2>
      <h4 className="font-medium">
        Como um desenvolvedor de software, eu foco utilizando a lógica e
        criatividade como meus aliados. Atualmente no mundo dinâmico da Web,
        minha experiência gira em torno do Javascript, onde combino algumas
        tecnologias e frameworks como ReactJs, NodeJs entre outras para poder
        construir uma aplicação de ponta a ponta como FullStack. Sempre
        buscando criar soluções elegantes, busco constante evolução do
        desenvolvimento de software. Minha jornada envolve traduzir conceitos
        em código, criar experiências de usuário perfeitas e ultrapassar
        constantemente os limites do que é possível.
      </h4>
      {/* Swiper component */}
      <Swiper
      modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="rounded-[12px] shadow-md"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-container mt-5">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutMe;


