import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import Link from "next/link";

function TopBarMobile() {
  return (
    <Card className="flex justify-between items-center">
      <Sheet>
        <SheetTrigger >

          <Button variant="ghost" className="border-0">
            <Menu />
          </Button>

          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <nav className="nav-container">
              <div className="nav-item">
                <Link href="/" title="Home">
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/experiencia" title="Experiência">
                  Experiência
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/projetos" title="Projetos">
                  Projetos
                </Link>
              </div>
            </nav>
          </SheetContent>
        </SheetTrigger>
      </Sheet>
    </Card>
  );
}

export default TopBarMobile;
