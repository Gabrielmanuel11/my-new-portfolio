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
                    <div className='bg-[url(src/assets/images/portifolio-financeiro.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Controle financeiro
                        </h1>
                        <p>O objetivo desse projeto foi utilizar o aprendizado de hooks do React,
                            implementando de forma correta</p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/calc.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Calculadora
                        </h1>
                        <p>Esse projeto foi utlizado para aprender lógica de programação na prática, trazendo uma solução para o mundo real</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/portifolio-to-do-list.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Lista de tarefas
                        </h1>
                        <p>O foco desse projeto foi na utilização de um banco de dados não relacional, e utilização de REST para requisições</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/tick-tack-toe.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                            Jogo da velha
                        </h1>
                        <p>Neste projeto o propósito foi atingir o dominío do DOM com o JavaScript e o HTML</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-2 gap-5 h-[40vh] pt-8 mobile:hidden'>
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/javascript.jpg)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4'>
                        <h1 className='font-bold text-[16px]'>
                            Prática JavaScript
                        </h1>
                        <p>Este é um repositório que contém práticas de assuntos base da linguagem mencionada.</p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/typescript.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4'>
                        <h1 className='font-bold text-[16px]'>
                            Prática TypeScript
                        </h1>
                        <p>Este é um repositório que contém práticas de assuntos base da linguagem mencionada.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-[url(src/assets/images/lp-bee.png)] w-48 h-36 rounded-lg bg-center bg-cover'>
                    </div>
                    <div className='text-left shrink-[585] pl-4'>
                        <h1 className='font-bold text-[16px]'>
                            Landing Page - Escola de Inglês
                        </h1>
                        <p>Projeto pessoal para que pessoas que tenham interesse em Inglês se cadastrem.</p>
                    </div>
                </div>
                
            </div>
          </SwiperSlide>
      </Swiper>
    )
 }

 export default WebSwiper;