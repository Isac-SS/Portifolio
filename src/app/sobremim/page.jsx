import Carousel from "@/components/Carrossel";
import IconNext from "@/components/SVGs/iconNext";
import IconNode from "@/components/SVGs/iconNode";
import IconJava from "@/components/SVGs/iconJava";
import { Card } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <Card className="min-h-screen flex flex-col items-center justify-center bg-[#212529]" id="second-section">
      <div className="relative flex items-center justify-center p-24">
        <h2 className="absolute text-8xl p-3 md:text-6xl xl:text-9xl font-bold text-[#6c757d] opacity-10 select-none">SOBRE MIM</h2>
        <p className="relative text-4xl font-semibold text-[#FAFAFAE6]">Um pouco mais sobre mim</p>
      </div>

      <div className="w-auto flex items-center justify-center">
        <div className="max-w-4xl min-w-96 p-10">
          <p className="text-[#FAFAFAE6] text-justify text-2xl ">Eu sou o <span className="text-[#f0340bc7]">Isac Santos de Sá</span> e estou no mercado a 3 anos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nisi! Alias officiis ducimus, id perferendis minima corporis, possimus quisquam cupiditate laboriosam temporibus deserunt inventore magni quaerat explicabo tempora repellendus incidunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero reiciendis accusantium distinctio eveniet aperiam qui quae doloribus praesentium molestias quia. Repellat vel ad obcaecati nihil natus ab adipisci eius aspernatur.</p>
        </div>
      </div>

    </Card>
  );
};

export default AboutMe;
