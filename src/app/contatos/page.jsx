"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Terminal,
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Copy,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contatos = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactEmail = "isacribeiro147@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      console.log("Public Key:", process.env.NEXT_PUBLIC_PUBLIC_KEY);
      console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
      console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Seu nome",
        reply_to: email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      setSending(false);
    }
  };

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  });

  return (
    <Card
      className="min-h-screen flex flex-col items-center justify-center bg-[#121620] py-16"
      id="contatos"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center mb-12 overflow-hidden">
          <h2 className="absolute text-5x1 sm:text-6xl md:text-8xl lg:text-9x1 font-bold text-[#6c757d] opacity-10 select-none max-w-full overflow-hidden">
            CONTATO
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 text-4xl font-semibold text-[#FAFAFAE6]">
              <Terminal className="text-[#f0340bc7]" />
              <span>Entre em contato</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Terminal Card - Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl overflow-hidden rounded-xl">
              <div className="bg-[#1A2332] p-3 flex items-center gap-2 border-b border-[#2A3441] rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[#8A94A8] text-sm ml-2">
                  new-message.sh
                </span>
              </div>
              <div className="p-6 font-mono">
                <div className="flex items-center gap-2 text-[#8A94A8] mb-4">
                  <span className="text-[#27C93F]">$</span> ./send-message.sh
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                      <span className="text-[#27C93F]">$</span> echo $NAME
                    </div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      required
                      className="bg-[#2A3441] border-[#343F4F] text-[#FAFAFAE6] placeholder:text-[#8A94A8] rounded-md focus:border-[#f0340bc7] focus:ring-[#f0340b30]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                      <span className="text-[#27C93F]">$</span> echo $EMAIL
                    </div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu email"
                      required
                      className="bg-[#2A3441] border-[#343F4F] text-[#FAFAFAE6] placeholder:text-[#8A94A8] rounded-md focus:border-[#f0340bc7] focus:ring-[#f0340b30]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#8A94A8] mb-2">
                      <span className="text-[#27C93F]">$</span> cat message.txt
                    </div>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Sua mensagem"
                      required
                      className="bg-[#2A3441] border-[#343F4F] text-[#FAFAFAE6] placeholder:text-[#8A94A8] rounded-md focus:border-[#f0340bc7] focus:ring-[#f0340b30] min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={sending || sent}
                      className="bg-[#f0340bc7] hover:bg-[#f0340b] text-white rounded-md flex items-center gap-2"
                    >
                      {sending ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : sent ? (
                        <>
                          <CheckCheck className="h-4 w-4" />
                          <span>Mensagem enviada!</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Enviar mensagem</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-lg">
                  <Mail className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">Email</h3>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#8A94A8] text-sm truncate">
                  {contactEmail}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-md hover:bg-[#343F4F]"
                    onClick={copyToClipboard}
                    title="Copiar email"
                  >
                    {copied ? (
                      <CheckCheck className="h-4 w-4 text-[#27C93F]" />
                    ) : (
                      <Copy className="h-4 w-4 text-[#8A94A8]" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-md hover:bg-[#343F4F]"
                    onClick={() => window.open(`mailto:${contactEmail}`)}
                    title="Abrir no cliente de email"
                  >
                    <ExternalLink className="h-4 w-4 text-[#8A94A8]" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f0340b30] p-2 rounded-lg">
                  <Terminal className="text-[#f0340bc7] h-5 w-5" />
                </div>
                <h3 className="text-[#FAFAFAE6] font-medium">Redes Sociais</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md bg-[#2A3441] border-[#343F4F] hover:bg-[#343F4F] hover:text-white"
                  onClick={() =>
                    window.open("https://github.com/Isac-SS", "_blank")
                  }
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md bg-[#2A3441] border-[#343F4F] hover:bg-[#343F4F] hover:text-white"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/isac-s-s/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </Card>
            <Card className="bg-[#1E2736] border-[#2A3441] shadow-xl p-5 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#27C93F] text-white border-none">
                    Online
                  </Badge>
                  <p className="text-[#8A94A8] text-sm">
                    Disponível para novos projetos
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default Contatos;
