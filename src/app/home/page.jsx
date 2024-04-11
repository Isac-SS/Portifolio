// eslint-disable-next-line no-unused-vars
import TitleHome from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

import React from "react";

function HomeMain() {
  return (
    <Card
      className="bg-slate-100 flex flex-col justify-center p-16"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <TitleHome />
      <div className="flex mt-8 gap-4">
        <Button
          variant="ghost"
          size="icon"
          title="Currículo"
          className="hover:bg-[#088C37]"
        >
          <ExternalLink />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="Linkedin"
          className="hover:bg-[#088C37]"
        >
          <a
            href="https://www.linkedin.com/feed/"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#088C37]"
          >
            <Linkedin />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="GitHub"
          className="hover:bg-[#088C37]"
        >
          <a
            href="https://github.com/Isac-SS/"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#088C37]"
          >
            <Github />
          </a>
        </Button>
      </div>
    </Card>
  );
}

export default HomeMain;
