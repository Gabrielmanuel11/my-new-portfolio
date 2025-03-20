import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Expirience = () => {
  return (
    <div className="absolute h-[319px] w-[372px] left-10 top-[1080px] text-[#2F0A42]">
      <h1 className="font-black text-[24px]">EXPERIÊNCIA</h1>
      <h2 className="text-gradient2 text-[16px]">veja agora</h2>
      <h1 className="font-bold">
      </h1>
      <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left'>
            Pride Global / &nbsp;
             <span className='font-extralight'> 
                Desenvolvedor de Software
            </span>
        </h1>
        <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </h4>
        </SwiperSlide>
      <SwiperSlide>
      <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left'>
            Russel Tobbin / &nbsp;
             <span className='font-extralight'> 
                Gerente de Processos
            </span>
        </h1>
        <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </h4>
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left'>
            Alianza América / &nbsp;
             <span className='font-extralight'> 
                Analista de Dados
            </span>
        </h1>
        <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </h4>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Expirience;