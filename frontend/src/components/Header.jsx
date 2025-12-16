import React from "react";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-50 border-b bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" aria-label="Home">
            <Logo />
          </a>
          <div className="flex gap-2 items-center">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="#projects"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
            <div className="h-5 w-px bg-primary/30 mx-2" />
            <ModeToggle variant="secondary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
