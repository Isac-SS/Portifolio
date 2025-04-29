import Projetos from "./projetos/page";
import HomeMain from "./home/page";
import AboutMe from "./sobremim/page";
import Contatos from "./Contatos/page";

export default function Home() {
  return (
    <>
      <HomeMain/>
      <AboutMe/>
      <Projetos/>
      <Contatos/>
    </>
  );
}
