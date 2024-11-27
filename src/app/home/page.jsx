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
    <Card className="w-screen max-h-screen bg-[#212529]">
      <Card
        className="flex flex-col justify-center p-16 bg-[#212529]"
        style={{
          height: "calc(100vh - 60px)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <TitleHome />
        <div className="flex mt-8 gap-4">
          <Button
            variant="ghost"
            size="icon"
            title="Currículo"
            className="text-white hover:text-[#4c4d4d] hover:bg-[#f0340bc7]"
          >
            <ExternalLink />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Linkedin"
            className="text-white hover:text-[#4c4d4d] hover:bg-[#f0340bc7]"
          >
            <a
              href="https://www.linkedin.com/feed/"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4c4d4d] hover:bg-[#f0340bc7]"
            >
              <Linkedin />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="GitHub"
            className="text-white hover:text-[#4c4d4d] hover:bg-[#f0340bc7]"
          >
            <a
              href="https://github.com/Isac-SS/"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4c4d4d] hover:bg-[#f0340bc7]"
            >
              <Github />
            </a>
          </Button>
        </div>
      </Card>
    </Card>
  );
}

export default HomeMain;
