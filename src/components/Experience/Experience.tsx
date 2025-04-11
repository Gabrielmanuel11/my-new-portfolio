import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useLanguage } from '../../utils/LanguageContext';
import { motion } from 'motion/react';

const Expirience = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px] dark:text-[#EBD3F8]"> { language === 'Português' ? 'EXPERIÊNCIA' : 'EXPERIENCE'}</h1>
      <h2 className="text-[#FF9051] text-[16px]">{ language === 'Português' ? 'veja agora' : 'see now'}</h2>
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
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8 dark:text-[#E1E1E1]'>
              Pride Innovations / &nbsp;
              <span className='font-extralight'> 
                  { language === 'Português' ? 'Desenvolvedor de Software' : 'Software Developer'}
              </span>
          </h1>
          <h1 className='font-extralight text-[20px] dark:text-[#E1E1E1]'>
            { language === 'Português' ? 'Setembro 2023 - Presente' : 'September 2023 - Currently'}
          </h1>
        </div>
        <p className='text-left font-medium text-[20px] dark:text-[#E1E1E1]'>
          { language === 'Português' ? 'Desenvolvi páginas web componentizadas, responsivas para todos os dispositivos, utilizando boas práticas de acessibilidade e segurança com React/NextJs. Participei de um projeto de CMS semelhante ao WordPress para simplificar o gerenciamento dos sites da empresa, criando uma estrutura de páginas e seções para conteúdo dinâmico. Desenvolvi um projeto com NestJS como framework backend, implementando um sistema de autenticação da Microsoft usando OAuth do Azure para login de usuários. Construi uma API para gerenciar autenticação de usuários e controle de acesso, utilizando JWT para autenticação baseada em tokens.' 
          : 'I developed componentized web pages, responsive for all devices, using good accessibility and security practices with React/NextJs. I participated in a CMS project similar to WordPress to simplify the management of the company websites, creating a compact page structure for dynamic content. I developed a project with NestJS as a backend framework, implementing a Microsoft authentication system using Azure OAuth for user login. I built an API to manage user authentication and access control, using JWT for token-based authentication.'}
        </p>
        <div className='flex flex-row text-[#2A2A2A] justify-start gap-3 pt-4 mobile:text-[16px] dark:text-[#E1E1E1]'>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Node</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>React</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>JavaScript</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>TypeScript</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between'>
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8 dark:text-[#E1E1E1]'>
              Pride Global / &nbsp;
              <span className='font-extralight'> 
              { language === 'Português' ? 'Gerente de Contas' : 'Account Manager'}
              </span>
          </h1>
          <h1 className='font-extralight text-[20px] dark:text-[#E1E1E1]'>
          { language === 'Português' ? 'Setembro 2022 - Setembro 2023' : 'September 2022 - September 2023'}
          </h1>
        </div>
        <p className='text-left font-medium text-[20px] dark:text-[#E1E1E1]'>
        { language === 'Português' ? 'Conhecimento básico de leis e permissões trabalhistas americanas. Acompanhamento do processo de contratação Beeline, Magnit, Workday e Fieldglass. Comunicação com clientes como Bank of America, Morgan Stanley e Dexcom para entender a posição de trabalho ofertada, quantidade de posições e características e qualidades requisitadas dos candidatos. Acompanhamento de horas a serem pagas, faltas e ocorrências relacionado a candidatos já trabalhando.' 
        : 'Basic knowledge of US labor laws and permits. Monitoring the hiring process for Beeline, Magnit, Workday and Fieldglass. Communication with clients such as Bank of America, Morgan Stanley and Dexcom to understand the job position offered, number of positions and characteristics and qualities required of candidates. Monitoring hours to be paid, absences and incidents related to candidates already working.'} 
        </p>
        <div className='flex flex-row text-[#2A2A2A] justify-start gap-3 pt-4 mobile:text-[16px] dark:text-[#E1E1E1]'>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Python</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Excel</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Micrososft 365</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between'>
          <h1 className='font-extrabold text-[#2F0A42] text-[20px] text-left pb-8 dark:text-[#E1E1E1]'>
          Alianza América / &nbsp;
              <span className='font-extralight'> 
              { language === 'Português' ? 'Analista de Dados' : 'Data Analyst'}
              </span>
          </h1>
          <h1 className='font-extralight text-[20px] dark:text-[#E1E1E1]'>
          { language === 'Português' ? 'Outubro 2021 - Agosto 2022' : 'October 2021 - August 2022'}
          </h1>
        </div>
        <p className='text-left font-medium text-[20px] dark:text-[#E1E1E1]'>
        { language === 'Português' ? 'Inserção de dados de alunos cadatrados através de google forms, controle dos dados no MySQL e Access. Levantamento de KPI’s através do Data Studio e Power BI para tomada de decisão, como número de matriculas anuais, mensais e diárias, quantidade de alunos por turno e de professores disponíveis para cada turno. Levantamento de faturamento mensal, diario e anual utilizando integração entre Mercado Pago e Google Sheets. Levantamento de outras métricas e automação adicionais com Python como número de nivéis A1 para tomada de decisão na metodologia.' 
        : 'Entering data from registered students through Google Forms, controlling data in MySQL and Access. Collection of KPIs through Data Studio and Power BI for decision making, such as the number of annual, monthly and daily enrollments, the number of students per shift and the number of teachers available for each shift. Collection of monthly, daily and annual revenue using integration between Mercado Pago and Google Sheets. Collection of other metrics and additional automation with Python, such as the number of A1 levels for decision making in the methodology.'}
        </p>
        <div className='flex flex-row text-[#2A2A2A] justify-start gap-3 pt-4 mobile:text-[16px] dark:text-[#E1E1E1]'>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Python</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>MySQL</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Power BI</p>
            <p className='border border-[#FF9051] rounded-3xl p-3 hover:bg-[#2F0A42] dark:hover:bg-[#EBD3F8] hover:text-white dark:hover:text-[#2F0A42] mobile:p-1'>Google Analytcs</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </motion.section>
    
  );
};

export default Expirience;