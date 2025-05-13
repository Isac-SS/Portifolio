"use client";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
  Code,
  Terminal,
  Database,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import React from "react";
import Link from "next/link";

const icons = [
  {
    href: "https://github.com",
    size: 24,
    label: "Github",
    style:
      "hover:text-[#f0340b] hover:scale-125 transition-all duration-300 ease-in-out",
    icon: Github,
  },
  {
    href: "https://linkedin.com",
    size: 24,
    label: "LinkedIn",
    style:
      "hover:text-[#f0340b] hover:scale-125 transition-all duration-300 ease-in-out",
    icon: Linkedin,
  },
];

const technologies = [
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Express",
  "Node.js",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Git",
];

const TypedText = ({ text }) => {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

function HomeMain() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-full text-lg font-medium mb-2">
              Isac Santos de Sá
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              <TypedText text="Desenvolvedor de Software" />
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
                <TypedText text="Fullstack" />
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl">
              Criando soluções digitais com foco em experiência do usuário e
              código limpo.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-6 rounded-lg font-medium text-lg flex items-center gap-2 transition-all hover:scale-105"
                asChild
              >
                <Link href="/projetos">
                  Ver projetos <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-6 rounded-lg font-medium text-lg transition-all hover:scale-105"
                asChild
              >
                <Link href="/contato">Contato</Link>
              </Button>
            </div>

            <div className="flex mt-8 gap-6">
              {icons.map((icon, index) => {
                const IconComponent = icon.icon;
                return (
                  <Link
                    key={index}
                    href={icon.href}
                    target="_blank"
                    className={icon.style}
                    aria-label={icon.label}
                  >
                    <IconComponent size={icon.size} />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="ml-auto text-gray-400 text-sm">terminal</div>
                </div>

                <div className="font-mono text-sm">
                  <p className="text-green-400">$ whoami</p>
                  <p className="text-gray-300 mt-1">Desenvolvedor Fullstack</p>

                  <p className="text-green-400 mt-4">$ ls skills/</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-green-400 mt-4">$ status</p>
                  <p className="text-gray-300 mt-1">
                    Disponível para novos projetos ✓
                  </p>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-10 right-0 md:-right-10 w-20 h-20 md:w-40 md:h-40 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 left-0 md:-left-10 w-20 h-20 md:w-40 md:h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

            {/* Ícones flutuantes */}
            <motion.div
              className="absolute -top-5 left-0 md:left-5 bg-gray-800/80 p-2 rounded-xl border border-gray-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            >
              <Code size={24} className="text-orange-400" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 md:right-5 bg-gray-800/80 p-2 rounded-xl border border-gray-700"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
            >
              <Terminal size={24} className="text-green-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 left-1/4 md:left-1/3 bg-gray-800/80 p-2 md:p-3 rounded-xl border border-gray-700"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
            >
              <Database size={24} className="text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
