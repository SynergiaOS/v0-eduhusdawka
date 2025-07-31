"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

interface SocialIconsProps {
  className?: string
  iconSize?: number
  showLabels?: boolean
  showOnly?: string
}

export default function SocialIcons({ className, iconSize = 20, showLabels = false, showOnly }: SocialIconsProps) {
  const { isDarkMode } = useTheme()

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/eduhustawka",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/eduhustawka",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/joanna-swirydowicz",
      icon: Linkedin,
      color: "hover:text-blue-700",
    },
  ]

  // Filtruj linki społecznościowe, jeśli określono showOnly
  const filteredLinks = showOnly
    ? socialLinks.filter((link) => link.name.toLowerCase() === showOnly.toLowerCase())
    : socialLinks

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {filteredLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "transition-all duration-300 flex items-center",
            isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900",
            social.color,
          )}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
          {showLabels && <span className="ml-2 text-sm">{social.name}</span>}
        </a>
      ))}
    </div>
  )
}
