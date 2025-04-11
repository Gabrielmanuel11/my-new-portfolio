import { motion } from "motion/react";
import { useLanguage } from "../../utils/LanguageContext";

const AboutMe = () => {
  const { language } = useLanguage();

  const images = [
    { src: '/assets/myimages/myfamily.jpeg', label: language === 'Português' ? 'Família' : 'Family' },
    { src: '/assets/myimages/soccer.jpeg', label: language === 'Português' ?  'Futebol' : 'Soccer' },
    { src: '/assets/myimages/book.jpeg', label: language === 'Português' ? 'Livro Favorito' : 'Favorite Book' },
    { src: '/assets/myimages/superman.jpg', label: language === 'Português' ? 'Filme Favorito' : 'Favorite Movie' },
  ];

  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
    viewport={{ once: false, amount: 0.2 }}
    >
    <div className="text-[#2F0A42] text-center p-7">
      <h1 className="font-bold text-[45px] dark:text-[#EBD3F8]">{ language === 'Português' ? 'SOBRE MIM' : 'ABOUT ME'}</h1>
      <h2 className="text-[#FF9051] text-[16px]">{ language === 'Português' ? 'veja agora' : 'see now'}</h2>
      <p className="font-medium text-[20px] dark:text-[#E1E1E1]"> { language === 'Português' ? 'Como um desenvolvedor de software, eu foco utilizando a lógica e criatividade como meus aliados. Atualmente no mundo dinâmico da Web, minha experiência gira em torno do Javascript, onde combino algumas tecnologias e frameworks como ReactJs, NodeJs entre outras para poder construir uma aplicação de ponta a ponta como FullStack.'
       : 'As a software developer, I focus on using logic and creativity as my allies. Currently in the dynamic world of the Web, my experience revolves around Javascript, where I combine some technologies and frameworks such as ReactJs, NodeJs among others to be able to build an end-to-end application as FullStack.'}
         <br /><br />
        
        { language === 'Português' ? 'Sempre buscando criar soluções elegantes, busco constante evolução do desenvolvimento de software. Minha jornada envolve traduzir conceitos em código, criar experiências de usuário perfeitas e ultrapassar constantemente os limites do que é possível.'
         : 'Always seeking to create elegant solutions, I strive to constantly evolve software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what is possible.'}
      </p>
      
      {/* Grid de Imagens */}
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-4 gap-5 pt-12 place-items-center smallLaptop:grid-cols-2 mobile:grid-cols-1">
        {images.map((image, index) => (
          <div key={index} className="relative w-[300px] h-[400px] rounded-[12px] overflow-hidden group">
            {/* Imagem */}
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-100 opacity-30"
            />
            {/* Overlay + Texto */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#2F0A42] dark:bg-[#EBD3F8] dark:text-[#2F0A42] dark:bg-opacity-70 bg-opacity-70 text-white text-[24px] font-bold transition-all duration-500 ease-in-out group-hover:bg-opacity-0 group-hover:items-end group-hover:translate-y-8 group-hover:opacity-80">
              {image.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    </motion.section>
  );
};

export default AboutMe;



