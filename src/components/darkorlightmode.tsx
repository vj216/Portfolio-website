import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Button colors
  const darkModeStyle = "bg-[#f5f0e1] text-[#0b0f0c] hover:bg-white";
  const lightModeStyle = "bg-[#0b0f0c] text-[#f5f0e1] hover:bg-gray-800";

  // Icon colors
  const sunColor = theme === "dark" ? "#0b0f0c" : "#f5f0e1";
  const moonColor = theme === "light" ? "#0b0f0c" : "#f5f0e1";

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`rounded-full transition-colors duration-300 ${
        theme === "dark" ? darkModeStyle : lightModeStyle
      }`}
    >
      <Moon stroke={sunColor} className="h-6 w-6 block dark:hidden" />
    <Sun stroke={moonColor} className="h-6 w-6 hidden dark:block" />

    </Button>
  );
}
