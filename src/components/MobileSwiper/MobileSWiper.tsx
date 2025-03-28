import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css';

const MobileSwiper = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="!hidden mobile:!block"
          >
        <SwiperSlide>
            <div className='h-auto pt-8'>
                <div className='flex-col'>
                    <div className='bg-[#2F0A42] w-full h-56 rounded-lg'>
                    </div>
                    <div className='text-left pt-7'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-auto pt-8'>
                <div className='flex-col'>
                    <div className='bg-[#2F0A42] w-full h-56 rounded-lg'>
                    </div>
                    <div className='text-left pt-7'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <div className='bg-[#2F0A42] w-full h-56 rounded-lg'>
                    </div>
                    <div className='text-left pt-7'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
    )
 }

 export default MobileSwiper;