"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useUserPreferences } from "@/contexts/user-preferences-context"

interface PreferencesCollectorProps {
  onClose: () => void
}

const PREFERENCE_OPTIONS = [
  { id: "diagnoza", label: "Diagnoza" },
  { id: "terapia", label: "Terapia" },
  { id: "rozwoj-mowy", label: "Rozwój mowy" },
  { id: "koncentracja", label: "Koncentracja" },
  { id: "nauka-czytania", label: "Nauka czytania" },
  { id: "umiejetnosci-spoleczne", label: "Umiejętności społeczne" },
  { id: "motoryka", label: "Motoryka" },
]

export default function PreferencesCollector({ onClose }: PreferencesCollectorProps) {
  const { preferences, setPreferredCategories } = useUserPreferences()
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(preferences.preferredCategories || [])

  const handlePreferenceChange = (preference: string) => {
    setSelectedPreferences((prev) => {
      if (prev.includes(preference)) {
        return prev.filter((p) => p !== preference)
      } else {
        return [...prev, preference]
      }
    })
  }

  const handleSave = () => {
    setPreferredCategories(selectedPreferences)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Dostosuj rekomendacje</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <p className="text-sm text-gray-600 mb-4">
            Wybierz obszary, które Cię interesują, aby otrzymywać lepiej dopasowane rekomendacje:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PREFERENCE_OPTIONS.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedPreferences.includes(option.id)}
                  onCheckedChange={() => handlePreferenceChange(option.id)}
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Anuluj
          </Button>
          <Button onClick={handleSave}>Zapisz preferencje</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
