import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Expirience = () => {
  return (
    <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px]">EXPERIÊNCIA</h1>
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
        <div className='flex justify-between'>
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8'>
              Pride Global / &nbsp;
              <span className='font-extralight'> 
                  Desenvolvedor de Software
              </span>
          </h1>
          <h1 className='font-extralight text-[20px]'>
            Setembro 2023 - Presente, Nova York
          </h1>
        </div>
        <p className='text-left font-medium text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </p>
        <div className='flex flex-row text-[#2A2A2A] justify-start gap-3 pt-4'>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] hover:text-white'>Node</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] hover:text-white'>React</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] hover:text-white'>JavaScript</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] hover:text-white'>TypeScript</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between'>
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8'>
              Pride Global / &nbsp;
              <span className='font-extralight'> 
                  Desenvolvedor de Software
              </span>
          </h1>
          <h1 className='font-extralight text-[20px]'>
            Setembro 2023 - Presente, Nova York
          </h1>
        </div>
        <p className='text-left font-medium text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </p>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between'>
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8'>
              Pride Global / &nbsp;
              <span className='font-extralight'> 
                  Desenvolvedor de Software
              </span>
          </h1>
          <h1 className='font-extralight text-[20px]'>
            Setembro 2023 - Presente, Nova York
          </h1>
        </div>
        <p className='text-left font-medium text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed orci eros, luctus a scelerisque ac, semper non odio. 
        Mauris orci nisl, placerat at malesuada eget, feugiat euismod ante. 
        Suspendisse vitae mollis sapien, nec blandit lectus. Fusce velit dolor, ultrices eu tellus ut, interdum posuere neque. 
        Sed a semper dui, sit amet vulputate metus. 
        Sed at velit efficitur ex condimentum condimentum ut in enim. 
        </p>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Expirience;