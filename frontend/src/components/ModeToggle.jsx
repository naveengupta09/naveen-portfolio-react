import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import TooltipWrapper from "./TooltipWrapper";

export function ModeToggle({ className, ...props }) {
  const { setTheme, theme } = useTheme();
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <TooltipWrapper content={"Theme"}>
      <Button
        variant="ghost"
        className={cn("size-8", className)}
        onClick={toggleMode}
        {...props}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </TooltipWrapper>
  );
}
