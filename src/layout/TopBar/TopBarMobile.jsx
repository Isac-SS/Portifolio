"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

function TopBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "#sobremim", label: "Sobre mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contatos", label: "Contatos" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 text-white hover:bg-gray-800/50 focus:outline-none"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-[#f0340bc7]" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 right-0 w-64 bg-[#111418] border border-gray-800 rounded-lg shadow-xl z-40 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="py-3">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (pathname !== "/" && link.href.includes(pathname));

                return (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center px-6 py-3 text-base transition-colors duration-200 ${
                        isActive
                          ? "text-[#f0340bc7] font-medium"
                          : "text-[#FAFAFAE6] hover:text-[#f0340bc7]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-nav-indicator"
                          className="absolute left-0 w-1 h-full bg-[#f0340b]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              variants={itemVariants}
              className="mt-2 pt-3 pb-4 px-6 border-t border-gray-800"
            >
              <p className="text-sm text-gray-400">© 2023 ISS DEV</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TopBarMobile;
