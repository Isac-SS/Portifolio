"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import TopBarMobile from "./TopBarMobile";

function TopBar() {
  const [isMobileView, setIsMobileView] = useState(false);

  const checkScreenSize = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center min-w-full p-9">
      <h1 className="text-[#141E26] font-extrabold">ISS DEV</h1>

      {isMobileView ? (
        <TopBarMobile />
      ) : (
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
      )}
    </div>
  );
}

export default TopBar;

