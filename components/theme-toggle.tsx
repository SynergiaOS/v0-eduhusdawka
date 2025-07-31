"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, isDarkMode } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="rounded-full w-9 h-9"
      aria-label={isDarkMode ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
    >
      {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-slate-700" />}
    </Button>
  )
}
