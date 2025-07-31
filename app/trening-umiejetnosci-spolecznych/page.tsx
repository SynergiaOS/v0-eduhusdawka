import type { Metadata } from "next"
import TreningUmiejetnosciSpolecznychClientPage from "./TreningUmiejetnosciSpolecznychClientPage"

export const metadata: Metadata = {
  title: "Trening Umiejętności Społecznych (TUS) | EduHustawka",
  description:
    "Zajęcia grupowe TUS dla dzieci z trudnościami społecznymi w Pomigaczach. Rozwój umiejętności interpersonalnych i regulacji emocji.",
  keywords: "TUS, trening umiejętności społecznych, zajęcia grupowe, dzieci, Pomigacze, umiejętności społeczne",
}

export default function TreningUmiejetnosciSpolecznychPage() {
  return <TreningUmiejetnosciSpolecznychClientPage />
}
