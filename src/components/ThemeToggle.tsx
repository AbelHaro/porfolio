import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

const THEME_KEY = "theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  root.classList.toggle("dark", isDark);
  root.dataset.theme = theme;
};

const getStoredTheme = (): Theme => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
};

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>("system");

  React.useEffect(() => {
    const initialTheme = getStoredTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (getStoredTheme() === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setAndApplyTheme = (nextTheme: Theme) => {
    localStorage.setItem(THEME_KEY, nextTheme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const icon =
    theme === "dark" ? (
      <Moon className="size-4" />
    ) : theme === "light" ? (
      <Sun className="size-4" />
    ) : (
      <Laptop className="size-4" />
    );

return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" aria-label="Cambiar tema">
                {icon}
                <span className="sr-only">Cambiar tema</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="items-center">
            <DropdownMenuItem onSelect={() => setAndApplyTheme("light")} className="justify-center">
                Claro
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setAndApplyTheme("dark")} className="justify-center">
                Oscuro
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setAndApplyTheme("system")} className="justify-center">
                Sistema
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);
}
