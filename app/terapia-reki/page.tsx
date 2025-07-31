import type { Metadata } from "next"
import TerapiaRekiClientPage from "./TerapiaRekiClientPage"

export const metadata: Metadata = {
  title: "Terapia ręki - Rozwój motoryki małej i grafomotoryki | EduHustawka",
  description:
    "Terapia ręki dla dzieci w Pomigaczach. Wsparcie rozwoju motoryki małej, grafomotoryki i umiejętności pisania. Umów się na konsultację.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, dzieci, Pomigacze",
}

export default function TerapiaRekiPage() {
  return <TerapiaRekiClientPage />
}
