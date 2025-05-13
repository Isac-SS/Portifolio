"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#sobremim", label: "Sobre mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contatos", label: "Contatos" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Isac-SS",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/isac-s-s/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:isacribeiro147@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[#111418] border-t border-gray-800">
      <motion.button
        className={`fixed right-6 bottom-6 bg-[#f0340bc7] hover:bg-[#f0340b] text-white p-3 rounded-full shadow-lg transition-all z-40 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="font-extrabold text-2xl">
              <span className="text-[#FAFAFAE6]">ISS DEV</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Desenvolvedor Fullstack criando soluções digitais com foco em
              experiência do usuário e código limpo.
            </p>
          </div>

          <div>
            <h3 className="text-[#FAFAFAE6] font-medium text-lg mb-4">
              Navegação
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#f0340bc7] transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[#FAFAFAE6] font-medium text-lg mb-4">
              Conecte-se
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#f0340bc7] transition-colors duration-200"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">isacribeiro147@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ISS DEV. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Desenvolvido por Isac Santos de Sá
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
