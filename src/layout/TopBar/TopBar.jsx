import Link from "next/link";
import "./TopBar.css";
import Image from "next/image";

function TopBar() {
  return (
    <div className="flex justify-between items-center min-w-full p-9">
      <h1 className="text-[#141E26] font-extrabold">ISS DEV</h1>
      {/* <Image
        src="/logo2.png"
        alt="Logo"
        width={60} 
        height={62} 
        layout="fixed" 
      /> */}

      <nav className="flex justify-between items-center font-medium">
        <div className="px-3 text-[#141E26] hover:text-[#75acc2] text-base transition transform">
          <Link href="/" title="Home">
            Home
          </Link>
        </div>
        <div className="px-3 text-[#141E26] hover:text-[#75acc2] text-base transition transform hover:">
          <Link href="/" title="Experiencia">
            Experiência
          </Link>
        </div>
        <div className="px-3 text-[#141E26] hover:text-[#75acc2] text-base transition transform">
          <Link href="/" title="Projetos">
            Projetos
          </Link>
        </div>
      </nav>

      {/* <div className="flex justify-between items-center">
        <div className="px-3 flex justify-between items-center">
          <button className="px-2 text-[#141E26] hover:text-[#2a3ce5]">PT</button>
          <p className="px-2 text-[#141E26]">|</p>
          <button className="px-2 text-[#141E26] hover:text-[#e627ff]">EN</button>
        </div>
      </div> */}
    </div>
  );
}

export default TopBar;
