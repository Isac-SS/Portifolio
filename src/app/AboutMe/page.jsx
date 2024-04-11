import Carousel from "@/components/Carrossel";
import IconNext from "@/components/SVGs/iconNext";
import IconNode from "@/components/SVGs/iconNode";
import IconJava from "@/components/SVGs/iconJava";

const AboutMe = () => {
  return (
    <div className="bg-slate-200 h-full w-full relative pb-10">
      <div className="h-[100%] top-11  m-auto max-w-3xl p-20 text-center flex flex-col items-center gap-10 relative z-10">
        <div className="flex text-3xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold">
          <h1 className="text-gray-800">Quem sou eu</h1>
          <span className="text-red-600">?</span>
        </div>

        <p className="font-semibold ">
          Desenvolvedor web | Freelance | Backend nas horas vagas
        </p>

        <div className="flex flex-col gap-7 font-semibold">
          <p>
            Desde de 2021, tenho me dedicado intensamente ao desenvolvimento,
            buscando constantemente ampliar meu conhecimento para contribuir de
            forma eficaz em diferentes projetos.
          </p>
          <p>
            Embora minha experiência inicial seja mais focada no frontend, venho
            explorando e trabalhando em diversos projetos full stack, utilizando
            uma variedade de tecnologias, tanto em projetos pessoais quanto em
            contextos acadêmicos e profissionais.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p>Tecnologias</p>
          <Carousel/>
          
          <p>Estudando</p>

          <div className="flex flex-wrap items-center justify-center gap-5 ">
            <IconNode />
            <IconNext />
            <IconJava/>
          </div>
        </div>
      </div>
      <p className=" text-[4rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem] m-2 font-semibold absolute top-[75px] md:top-[3.3rem] lg:top-9 xl:top-0 left-0 right-0 bottom-90 xl:bottom-100 flex justify-center items-center text-gray-800 opacity-10 z-0">
        Sobre mim
      </p>
    </div>
  );
};

export default AboutMe;
