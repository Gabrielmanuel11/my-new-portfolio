import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css';

const WebSwiper = () => {
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
            className="mobile:!hidden"
          >
        <SwiperSlide>
            <div className='grid grid-cols-2 gap-5 h-[40vh] pt-8'>
                <div className='flex'>
                    <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
                
                <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>

                </div>
                <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>

                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-2 gap-5 h-[40vh] pt-8 mobile:hidden'>
                <div className='flex'>
                    <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>
                    </div>
                    <div className='text-left shrink-[585] pl-4'>
                        <h1 className='font-bold text-[16px]'>
                            Projeto 1
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed orci eros, luctus a scelerisque ac, semper non odio.</p>
                    </div>
                </div>
                

                <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>

                </div>
                <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>

                </div>
                <div className='bg-[#2F0A42] w-48 h-36 rounded-lg'>

                </div>
            </div>
          </SwiperSlide>
      </Swiper>
    )
 }

 export default WebSwiper;