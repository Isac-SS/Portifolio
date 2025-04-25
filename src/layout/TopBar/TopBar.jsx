"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import TopBarMobile from "./TopBarMobile";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function TopBar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const pathname = usePathname();

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

  const links = [
    { href: "/", label: "Home" },
    { href: "#sobremim", label: "Sobre mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contatos", label: "Contatos" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111418]/90 shadow-lg flex justify-between items-center min-w-full p-5">
      <Link href="/" className="font-extrabold">
        <span className="text-[#FAFAFAE6]">ISS DEV</span>
      </Link>

      {isMobileView ? (
        <TopBarMobile />
      ) : (
        <nav className="flex justify-between items-center font-medium">
          {links.map((link) => (
            <div className="px-3 relative" key={link.href}>
              <Link
                href={link.href}
                title={link.label}
                className="text-[#FAFAFAE6] hover:text-[#f0340bc7] text-base transition-colors duration-200"
              >
                {link.label}
              </Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-[-5px] left-3 right-3 h-0.5 bg-[#f0340b]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export default TopBar;
