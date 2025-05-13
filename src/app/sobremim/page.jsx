"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  User,
  Clock,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const AboutMe = () => {
  const [typing, setTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const fullText =
    "Olá! Me chamo Isac Santos de Sá e atuo na área de tecnologia desde 2022. Sou formado em Análise e Desenvolvimento de Sistemas e, ao longo da minha jornada, tive a oportunidade de compartilhar conhecimento em palestras voltadas para formandos de cursos de tecnologia, reforçando meu compromisso com o aprendizado contínuo e a colaboração. Iniciei minha carreira com um estágio no Ministério do Meio Ambiente, onde atuei como desenvolvedor web. Em seguida, trabalhei na empresa ENSTI, onde ampliei meu conhecimento backend com Java e Node.js, e tive maior contato com SQL, integrando uma equipe responsável por escalar a plataforma SICLUS para mais de 600 AABBs e mais de 1 milhão de usuários, enfrentando desafios que fortaleceram minha base técnica. Mais recentemente, atuei como desenvolvedor fullstack na Contrictor Tecnologia, utilizando Angular e NestJS para desenvolver soluções robustas e escaláveis. Tenho facilidade em me comunicar e um bom entrosamento com equipes, sempre buscando contribuir com soluções eficientes  manter um ambiente de trabalho colaborativo.";

  useEffect(() => {
    if (currentTextIndex < fullText.length && typing) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentTextIndex + 1));
        setCurrentTextIndex(currentTextIndex + 1);
      }, 20);

      return () => clearTimeout(timeout);
    } else {
      setTyping(false);
    }
  }, [currentTextIndex, typing, fullText]);

  const skills = [
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

  return (
    <Card
      className="min-h-screen flex flex-col items-center justify-center bg-transparent py-16"
      id="sobremim"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center mb-12">
          <h2 className="absolute text-8xl md:text-9xl font-bold text-[#6c757d] opacity-10 select-none">
            SOBRE
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 text-4xl font-semibold text-[#FAFAFAE6]">
              <Terminal className="text-[#f0340bc7]" />
              <span>Um pouco mais sobre mim</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl overflow-hidden rounded-xl">
              <div className="bg-[#1A2332] p-3 flex items-center gap-2 border-b border-[#2A3441]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[#8A94A8] text-sm ml-2">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base">
                <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                  <span className="text-[#27C93F]">$</span> whoami
                </div>
                <div className="text-[#FAFAFAE6] mb-4">
                  <span className="text-[#f0340bc7]">
                    Desenvolvedor Fullstack
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                  <span className="text-[#27C93F]">$</span> cat sobre-mim.txt
                </div>
                <div className="text-[#FAFAFAE6] mb-4 leading-relaxed">
                  {displayedText}
                  {typing && <span className="animate-pulse">|</span>}
                </div>

                <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                  <span className="text-[#27C93F]">$</span> ls skills/
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#2A3441] hover:bg-[#343F4F] text-[#FAFAFAE6] border-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                  <span className="text-[#27C93F]">$</span> status
                </div>
                <div className="text-[#FAFAFAE6]">
                  Disponível para novos projetos{" "}
                  <span className="text-[#27C93F]">✓</span>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-md">
                  <User className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">Perfil</h3>
              </div>
              <p className="text-[#8A94A8] text-sm">
                Proativo - Comunicativo - Comprometido - Adaptável -
                Colaborativo
              </p>
            </Card>

            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-md">
                  <Clock className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">Experiência</h3>
              </div>
              <p className="text-[#8A94A8] text-sm">
                3 anos de experiência no mercado de desenvolvimento, trabalhando
                com tecnologias modernas.
              </p>
            </Card>

            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-md">
                  <Code className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">
                  Principais tecnologias
                </h3>
              </div>
              <p className="text-[#8A94A8] text-sm">
                Angular | React | Next | Node
              </p>
            </Card>

            {/* <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-md">
                  <Briefcase className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">Projetos</h3>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#8A94A8] text-sm">
                  Veja meus projetos recentes
                </p>
                <ChevronRight className="text-[#f0340bc7] h-4 w-4" />
              </div>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
