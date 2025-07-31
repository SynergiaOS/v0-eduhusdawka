import type { Metadata } from "next"
import DiagnozaKORPClientPage from "./DiagnozaKORPClientPage"

export const metadata: Metadata = {
  title: "Diagnoza KORP - Karty Oceny Rozwoju Psychoruchowego | EduHustawka",
  description:
    "Kompleksowa diagnoza rozwoju psychoruchowego dzieci od 1 miesiąca do 9 lat życia. Badanie KORP w Pomigaczach. Umów się na konsultację.",
  keywords: "KORP, diagnoza rozwoju, badanie psychoruchowe, rozwój dziecka, Pomigacze",
}

export default function DiagnozaKORPPage() {
  return <DiagnozaKORPClientPage />
}
