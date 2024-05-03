import Projetos from "./projetos/page";
import HomeMain from "./home/page";
import AboutMe from "./sobremim/page";

export default function Home() {
  return (
    <>
      <HomeMain/>
      <AboutMe/>
      <Projetos/>
    </>
  );
}
