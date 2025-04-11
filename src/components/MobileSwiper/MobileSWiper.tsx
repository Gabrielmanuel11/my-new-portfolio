import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css';
import { useLanguage } from "../../utils/LanguageContext";

const MobileSwiper = () => {
    const { language } = useLanguage();
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
                    <a href="https://github.com/Gabrielmanuel11/Myfinances">
                        <div className='bg-[url(public/images/portifolio-financeiro.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Controle financeiro' : 'Financial control'}
                        </h1>
                        <p>{ language === 'Português' ? 'O objetivo desse projeto foi utilizar o aprendizado de hooks do React, implementando de forma correta.' 
                        : 'The goal of this project was to use the knowledge gained from React hooks, implementing them correctly.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-auto pt-8'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/Calc.js">
                        <div className='bg-[url(public/images/calc.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Calculadora' : 'Calculator'}
                        </h1>
                        <p>{ language === 'Português' ? 'Esse projeto foi utlizado para aprender lógica de programação na prática, trazendo uma solução para o mundo real.' 
                            : 'This project was used to learn programming logic in practice, bringing a solution to the real world.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/to-do-list">
                        <div className='bg-[url(public/images/portifolio-to-do-list.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Lista de tarefas' : 'To do list'}
                        </h1>
                        <p>{language === 'Português' ? 'O foco desse projeto foi na utilização de um banco de dados não relacional, e utilização de REST para requisições.' 
                           : 'The focus of this project was on using a non-relational database, and using REST for requests.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/JVelha">
                        <div className='bg-[url(public/images/tick-tack-toe.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Jogo da velha' : 'Tic Tac Toe'}
                        </h1>
                        <p>{ language === 'Português' ? 'Neste projeto o propósito foi atingir o dominío do DOM com o JavaScript e o HTML.' 
                            : 'In this project the purpose was to achieve mastery of the DOM with JavaScript and HTML.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/JavaScript-Practice">
                        <div className='bg-[url(public/images/javascript.jpg)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Prática JavaScript' : 'JavaScript practice'}
                        </h1>
                        <p>{ language === 'Português' ? 'Este é um repositório que contém práticas de assuntos base da linguagem mencionada.' 
                            : 'This is a repository that contains practices on the basic subjects of the mentioned language.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/TypeScript-Practice">
                        <div className='bg-[url(public/images/typescript.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Prática TypeScript' : 'TypeScript practice'}
                        </h1>
                        <p>{ language === 'Português' ? 'Este é um repositório que contém práticas de assuntos base da linguagem mencionada.' 
                            : 'This is a repository that contains practices on the basic subjects of the mentioned language.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hidden h-auto pt-8 mobile:flex'>
                <div className='flex-col'>
                    <a href="https://github.com/Gabrielmanuel11/LMS-School">
                        <div className='bg-[url(public/images/lp-bee.png)] bg-center bg-cover w-full h-56 rounded-lg'>
                        </div>
                    </a>
                    <div className='text-left pt-7 dark:text-[#E1E1E1]'>
                        <h1 className='font-bold text-[16px]'>
                        { language === 'Português' ? 'Landing Page - Escola de Inglês' : 'Landing Page - English School'}
                        </h1>
                        <p>{ language === 'Português' ? 'Projeto pessoal para que pessoas que tenham interesse em Inglês se cadastrem.' 
                            : 'Personal project for people interested in English to register.'}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
    )
 }

 export default MobileSwiper;